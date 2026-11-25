// Bina geometrisi arka planda (Web Worker) üretilir; oyun akıcı kalır.
// lod 0 (çok yakın): + balkonlar · lod 1 (yakın): duvarlar, gerçek çatılar, saçak, tente, cumba · lod 2 (uzak): sade kutu.
import { ShapeUtils, Vector2 } from 'three';

type Ring = number[]; type Poly = Ring[];
interface Bld { k: number; w: number; r: number; fl: number; base: number; eave: number; rh: number; c: number; hip: number[] | null; p: Poly[]; inn: Poly[] }
interface Req { type: 'init'; buf: ArrayBuffer; index: number[][]; palette: { walls: string[]; roofs: string[]; flats: string[] } }
interface Build { type: 'build'; id: number; chunk: number; lod: number }

let BUF: DataView; let INDEX: number[][]; let CH = 250;
let WALLS: number[][] = [], ROOFS: number[][] = [], FLATS: number[][] = [];
const hex = (s: string) => { const n = parseInt(s.slice(1), 16); return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255].map((v) => Math.pow(v, 2.2)); };

function decode(ci: number): { ox: number; oz: number; list: Bld[] } {
  const [cx, cz, off, len] = INDEX[ci]; const ox = (cx + 0.5) * CH, oz = (cz + 0.5) * CH;
  let p = off; const end = off + len; const d = BUF;
  const u8 = () => d.getUint8(p++), i16 = () => { const v = d.getInt16(p, true); p += 2; return v; }, u16 = () => { const v = d.getUint16(p, true); p += 2; return v; }, f32 = () => { const v = d.getFloat32(p, true); p += 4; return v; };
  const polys = (): Poly[] => { const np = u8(), out: Poly[] = []; for (let a = 0; a < np; a++) { const nr = u8(), poly: Poly = []; for (let b = 0; b < nr; b++) { const n = u16(), r: Ring = new Array(n * 2); for (let k = 0; k < n; k++) { r[2 * k] = i16() / 10 + ox; r[2 * k + 1] = i16() / 10 + oz; } poly.push(r); } out.push(poly); } return out; };
  const list: Bld[] = [];
  while (p < end) {
    const k = u8(), w = u8(), r = u8(), fl = u8(); const base = i16() / 10, eave = i16() / 10, rh = u16() / 10, c = u16();
    let hip: number[] | null = null; if (fl & 1) { hip = [f32() + ox, f32() + oz, f32(), f32(), f32(), f32()]; }
    const P = polys(); const inn = fl & 2 ? polys() : [];
    list.push({ k, w, r, fl, base, eave, rh, c, hip, p: P, inn });
  }
  return { ox, oz, list };
}

// ---------- üçgen toplayıcı ----------
class B {
  pos: number[] = []; nor: number[] = []; col: number[] = []; fac: number[] = [];
  seed = 0; base = 0;
  tri(a: number[], b: number[], c: number[], col: number[], up: boolean, uv: number[][] | null, kind: number) {
    let ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    if (up && ny < 0) { const t = b; b = c; c = t; if (uv) uv = [uv[0], uv[2], uv[1]]; nx = -nx; ny = -ny; nz = -nz; void ux; void uy; void uz; void vx; void vy; void vz; }
    const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
    const P = [a, b, c];
    for (let i = 0; i < 3; i++) {
      this.pos.push(P[i][0], P[i][1], P[i][2]); this.nor.push(nx, ny, nz); this.col.push(col[0], col[1], col[2]);
      const t = uv ? uv[i] : [P[i][0], P[i][2]];
      this.fac.push(t[0], t[1], kind, this.seed);
    }
  }
}
const area = (r: Ring) => { let s = 0; for (let i = 0; i < r.length; i += 2) { const j = (i + 2) % r.length; s += r[i] * r[j + 1] - r[j] * r[i + 1]; } return s / 2; };
function walls(b: B, ring: Ring, y0: number, y1: number, col: number[], hole: boolean, windows: boolean) {
  let r = ring; const a = area(r);
  if ((!hole && a > 0) || (hole && a < 0)) { const rr: number[] = []; for (let i = r.length - 2; i >= 0; i -= 2) rr.push(r[i], r[i + 1]); r = rr; }
  let run = 0;
  for (let i = 0; i < r.length; i += 2) {
    const j = (i + 2) % r.length, len = Math.hypot(r[j] - r[i], r[j + 1] - r[i + 1]); if (len < 0.05) continue;
    const p0 = [r[i], y0, r[i + 1]], p1 = [r[j], y0, r[j + 1]], p2 = [r[j], y1, r[j + 1]], p3 = [r[i], y1, r[i + 1]];
    const v0 = y0 - b.base, v1 = y1 - b.base, kind = windows && len >= 2.4 ? 1 : 2;
    b.tri(p0, p1, p2, col, false, [[run, v0], [run + len, v0], [run + len, v1]], kind);
    b.tri(p0, p2, p3, col, false, [[run, v0], [run + len, v1], [run, v1]], kind);
    run += len;
  }
}
function triangulate(poly: Poly): { all: Vector2[]; tris: number[][] } | null {
  const toV = (r: Ring) => { const v: Vector2[] = []; for (let i = 0; i < r.length; i += 2) v.push(new Vector2(r[i], r[i + 1])); return v; };
  const contour = toV(poly[0]); const holes = poly.slice(1).map(toV);
  try { return { all: contour.concat(...holes), tris: ShapeUtils.triangulateShape(contour, holes) }; } catch { return null; }
}
function cap(b: B, poly: Poly, y: number, col: number[], kind = 3) {
  const t = triangulate(poly); if (!t) return;
  for (const q of t.tris) { const A = t.all[q[0]], Bv = t.all[q[1]], C = t.all[q[2]]; b.tri([A.x, y, A.y], [Bv.x, y, Bv.y], [C.x, y, C.y], col, true, null, kind); }
}
// ---------- çatılar (eski haritanın "fitted roof" yöntemi): çatı, birkaç düzlemin alt zarfıdır; taşma yok ----------
type Plane = [number, number, number];
function roofPlanes(kind: number, L: number, W: number, rh: number): Plane[] {
  const k = rh / (W / 2), hl = L / 2, hw = W / 2;
  if (kind === 2) return [[0, k, k * hw], [0, -k, k * hw]];
  if (kind === 1) return [[0, k, k * hw], [0, -k, k * hw], [k, 0, k * hl], [-k, 0, k * hl]];
  const ins = Math.min(0.17 * W, 2.2), mh = Math.min(0.75 * rh + 1.4, 3.6), ks = mh / ins, k2 = Math.max(0.6, 0.12 * W) / Math.max(0.5, hw - ins);
  const P: Plane[] = [];
  for (const [a, bb, d] of [[0, 1, hw], [0, -1, hw], [1, 0, hl], [-1, 0, hl]]) { P.push([a * ks, bb * ks, d * ks]); P.push([a * k2, bb * k2, mh + (d - ins) * k2]); }
  return P;
}
const pv = (P: Plane, s: number, t: number) => P[0] * s + P[1] * t + P[2];
function clipHalf(r: number[][], f: (q: number[]) => number) {
  const out: number[][] = [];
  for (let i = 0; i < r.length; i++) {
    const a = r[i], c = r[(i + 1) % r.length], fa = f(a), fb = f(c);
    if (fa <= 0) out.push(a);
    if ((fa < 0 && fb > 0) || (fa > 0 && fb < 0)) { const u = fa / (fa - fb); out.push([a[0] + (c[0] - a[0]) * u, a[1] + (c[1] - a[1]) * u]); }
  }
  return out;
}
const area2 = (r: number[][]) => { let a = 0; for (let i = 0; i < r.length; i++) { const p = r[i], q = r[(i + 1) % r.length]; a += p[0] * q[1] - q[0] * p[1]; } return a / 2; };
function fittedRoof(b: B, polys: Poly[], hp: number[], kind: number, top: number, color: number[], upper: number[], wall: number[]) {
  const [cx, cz, ang, L, W, rh] = hp, ux = Math.cos(ang), uz = Math.sin(ang), vx = -uz, vz = ux;
  const P = roofPlanes(kind, L, W, rh);
  const toL = (x: number, z: number) => [(x - cx) * ux + (z - cz) * uz, (x - cx) * vx + (z - cz) * vz];
  const toW = (s: number, t: number, y: number) => [cx + ux * s + vx * t, y, cz + uz * s + vz * t];
  const hAt = (s: number, t: number) => { let m = 1e9; for (const q of P) m = Math.min(m, pv(q, s, t)); return Math.max(0, m); };
  for (const poly of polys) {
    const rings = poly.map((r) => { const o: number[][] = []; for (let i = 0; i < r.length; i += 2) o.push(toL(r[i], r[i + 1])); return o; });
    P.forEach((Pi, i) => {
      const fcol = kind === 3 && i % 2 === 1 ? upper : color;
      const gl = Math.hypot(Pi[0], Pi[1]), d0 = gl > 1e-6 ? Pi[0] / gl : 0, d1 = gl > 1e-6 ? Pi[1] / gl : 1, sec = Math.sqrt(1 + gl * gl);
      const ruv = (q: Vector2) => [-q.x * d1 + q.y * d0, (q.x * d0 + q.y * d1) * sec];
      const cl = rings.map((r) => { let o = r; P.forEach((Pj, j) => { if (j !== i && o.length) o = clipHalf(o, (q) => pv(Pi, q[0], q[1]) - pv(Pj, q[0], q[1]) - 1e-6); }); return o; });
      if (cl[0].length < 3 || Math.abs(area2(cl[0])) < 0.05) return;
      const contour = cl[0].map((q) => new Vector2(q[0], q[1]));
      const holes = cl.slice(1).filter((h) => h.length >= 3 && Math.abs(area2(h)) > 0.05).map((h) => h.map((q) => new Vector2(q[0], q[1])));
      let tris: number[][]; try { tris = ShapeUtils.triangulateShape(contour, holes); } catch { return; }
      const all = contour.concat(...holes);
      for (const t of tris) { const a = all[t[0]], c = all[t[1]], e = all[t[2]]; b.tri(toW(a.x, a.y, top + Math.max(0, pv(Pi, a.x, a.y))), toW(c.x, c.y, top + Math.max(0, pv(Pi, c.x, c.y))), toW(e.x, e.y, top + Math.max(0, pv(Pi, e.x, e.y))), fcol, true, [ruv(a), ruv(c), ruv(e)], 0); }
    });
    for (const r of rings) for (let e = 0; e < r.length; e++) { // çatıya kadar duvar (beşik alınlıkları, girintiler)
      const a = r[e], c = r[(e + 1) % r.length]; const ts = [0, 1];
      for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) { const fa = pv(P[i], a[0], a[1]) - pv(P[j], a[0], a[1]), fb = pv(P[i], c[0], c[1]) - pv(P[j], c[0], c[1]); if (fa * fb < 0) ts.push(fa / (fa - fb)); }
      ts.sort((x, y) => x - y);
      const pt = (u: number) => [a[0] + (c[0] - a[0]) * u, a[1] + (c[1] - a[1]) * u];
      let prev = ts[0], h0 = hAt(a[0], a[1]);
      for (let q = 1; q < ts.length; q++) {
        const u = ts[q]; if (u - prev < 1e-4 && q < ts.length - 1) continue;
        const p0 = pt(prev), p1 = pt(u), h1 = hAt(p1[0], p1[1]);
        if (Math.max(h0, h1) > 0.35) {
          const A = toW(p0[0], p0[1], top), Bq = toW(p1[0], p1[1], top), Cq = toW(p1[0], p1[1], top + h1), Dq = toW(p0[0], p0[1], top + h0);
          const el = Math.hypot(c[0] - a[0], c[1] - a[1]), ua = prev * el, ub = u * el, vt = top - b.base;
          if (h1 > 0.02) b.tri(A, Bq, Cq, wall, false, [[ua, vt], [ub, vt], [ub, vt + h1]], 2);
          if (h0 > 0.02) b.tri(A, Cq, Dq, wall, false, [[ua, vt], [ub, vt + h1], [ua, vt + h0]], 2);
        }
        prev = u; h0 = h1;
      }
    }
  }
}
function bandRoof(b: B, outer: Poly[], inset: Poly[], top: number, rh: number, color: number[], flat: number[]) {
  // bant: dış çizgiden içteki halkaya eğim, üstü düz (avlulu / L biçimli bloklar)
  const key = (x: number, z: number) => `${Math.round(x * 10)},${Math.round(z * 10)}`;
  const onIn = new Set<string>(); for (const p of inset) for (const r of p) for (let i = 0; i < r.length; i += 2) onIn.add(key(r[i], r[i + 1]));
  const bandPolys: Poly[] = outer.map((p) => [p[0], ...inset.map((q) => q[0])]);
  for (const p of bandPolys) {
    const t = triangulate(p); if (!t) continue;
    const Y = (q: Vector2) => top + (onIn.has(key(q.x, q.y)) ? rh : 0);
    for (const q of t.tris) { const A = t.all[q[0]], Bv = t.all[q[1]], C = t.all[q[2]]; b.tri([A.x, Y(A), A.y], [Bv.x, Y(Bv), Bv.y], [C.x, Y(C), C.y], color, true, null, 0); }
  }
  for (const p of inset) cap(b, p, top + rh, flat);
}
// basit Douglas-Peucker (uzak görünüm)
function simplify(r: Ring, tol: number): Ring {
  const n = r.length / 2; if (n < 6) return r;
  const keep = new Uint8Array(n); keep[0] = 1; let far = 0, fd = -1;
  for (let i = 1; i < n; i++) { const d = Math.hypot(r[2 * i] - r[0], r[2 * i + 1] - r[1]); if (d > fd) { fd = d; far = i; } } keep[far] = 1;
  const rec = (a: number, c: number) => { const ax = r[2 * a], az = r[2 * a + 1], bx = r[2 * (c % n)], bz = r[2 * (c % n) + 1], L = Math.hypot(bx - ax, bz - az) || 1e-6; let m = -1, md = tol; for (let i = a + 1; i < c; i++) { const d = Math.abs((bx - ax) * (az - r[2 * i + 1]) - (ax - r[2 * i]) * (bz - az)) / L; if (d > md) { md = d; m = i; } } if (m >= 0) { keep[m] = 1; rec(a, m); rec(m, c); } };
  rec(0, far); rec(far, n);
  const out: number[] = []; for (let i = 0; i < n; i++) if (keep[i]) out.push(r[2 * i], r[2 * i + 1]);
  return out.length >= 6 ? out : r;
}
function hash(n: number) { const x = Math.sin(n * 12.9898) * 43758.5453; return x - Math.floor(x); }

// ---------- İstanbul cephe renkleri (pastel apartman tonları) ----------
const ISTANBUL = ['#efe4cf', '#e9d5ab', '#f0c9a2', '#e6b8a2', '#d9a77e', '#cbd8d2', '#bccddb', '#f4f0e7', '#e8d6df', '#dbc9a9', '#b5c4a6', '#e4c774', '#d6b49a', '#c7c2b8', '#f2dcc0', '#a9bdc9'].map(hex);
const AWNING = ['#c0392b', '#2f7a50', '#2f6aa3', '#e07b2e', '#8a3a68', '#d4ad2a', '#3e8a8a', '#a8522f'].map(hex);
const mul = (c: number[], k: number) => c.map((v) => Math.min(1, v * k));
const mix = (a: number[], c: number[], t: number) => a.map((v, i) => v * (1 - t) + c[i] * t);
const WHITE = hex('#f6f3ec'), DARK = hex('#3a3d42');

/** dört köşeli yüz; n = istenen dış yön (sarma sırası buna göre düzeltilir) */
function face(b: B, p0: number[], p1: number[], p2: number[], p3: number[], n: number[], col: number[], kind = 4, uv: number[][] | null = null) {
  const ux = p1[0] - p0[0], uy = p1[1] - p0[1], uz = p1[2] - p0[2], vx = p2[0] - p0[0], vy = p2[1] - p0[1], vz = p2[2] - p0[2];
  const cx = uy * vz - uz * vy, cy = uz * vx - ux * vz, cz = ux * vy - uy * vx;
  const ok = cx * n[0] + cy * n[1] + cz * n[2] >= 0;
  const U = uv || [[0, 0], [0, 0], [0, 0], [0, 0]];
  if (ok) { b.tri(p0, p1, p2, col, false, [U[0], U[1], U[2]], kind); b.tri(p0, p2, p3, col, false, [U[0], U[2], U[3]], kind); }
  else { b.tri(p0, p2, p1, col, false, [U[0], U[2], U[1]], kind); b.tri(p0, p3, p2, col, false, [U[0], U[3], U[2]], kind); }
}
/** dış halkayı duvarlarla aynı yönde gez: her kenar için başlangıç, yön, dış normal, uzunluk ve cephe boyunca konum (run) */
function edges(ring: Ring) {
  let r = ring; if (area(r) > 0) { const rr: number[] = []; for (let i = r.length - 2; i >= 0; i -= 2) rr.push(r[i], r[i + 1]); r = rr; }
  const out: { ax: number; az: number; tx: number; tz: number; nx: number; nz: number; len: number; run: number }[] = []; let run = 0;
  for (let i = 0; i < r.length; i += 2) {
    const j = (i + 2) % r.length, dx = r[j] - r[i], dz = r[j + 1] - r[i + 1], len = Math.hypot(dx, dz); if (len < 0.05) continue;
    const tx = dx / len, tz = dz / len; out.push({ ax: r[i], az: r[i + 1], tx, tz, nx: -tz, nz: tx, len, run }); run += len;
  }
  return out;
}
type E = ReturnType<typeof edges>[number];
const at = (e: E, s: number, d: number, y: number) => [e.ax + e.tx * s + e.nx * d, y, e.az + e.tz * s + e.nz * d];
/** kenar üstünde kutu: s0..s1 boyunca, d0..d1 dışa, y0..y1; hangi yüzler çizilsin */
function edgeBox(b: B, e: E, s0: number, s1: number, d0: number, d1: number, y0: number, y1: number, col: number[], faces: string, under?: number[]) {
  const N = [e.nx, 0, e.nz], T = [e.tx, 0, e.tz];
  if (faces.includes('f')) face(b, at(e, s0, d1, y0), at(e, s1, d1, y0), at(e, s1, d1, y1), at(e, s0, d1, y1), N, col);
  if (faces.includes('k')) face(b, at(e, s0, d0, y0), at(e, s1, d0, y0), at(e, s1, d0, y1), at(e, s0, d0, y1), [-N[0], 0, -N[2]], col);
  if (faces.includes('t')) face(b, at(e, s0, d0, y1), at(e, s1, d0, y1), at(e, s1, d1, y1), at(e, s0, d1, y1), [0, 1, 0], col);
  if (faces.includes('b')) face(b, at(e, s0, d0, y0), at(e, s1, d0, y0), at(e, s1, d1, y0), at(e, s0, d1, y0), [0, -1, 0], under || mul(col, 0.7));
  if (faces.includes('l')) face(b, at(e, s0, d0, y0), at(e, s0, d1, y0), at(e, s0, d1, y1), at(e, s0, d0, y1), [-T[0], 0, -T[2]], mul(col, 0.92));
  if (faces.includes('r')) face(b, at(e, s1, d0, y0), at(e, s1, d1, y0), at(e, s1, d1, y1), at(e, s1, d0, y1), T, mul(col, 0.92));
}

/** cephe süsleri: saçak, dükkân tenteleri, cumba (lod ≤ 1), balkonlar (lod 0) */
function facade(b: B, o: Bld, wall: number[], lod: number, seed: number) {
  const h = o.eave - o.base; if (h < 4.5) return;
  const E = edges(o.p[0][0]); if (!E.length) return;
  const corn = mix(wall, WHITE, 0.45);
  // saçak / korniş
  for (const e of E) if (e.len > 2.2) edgeBox(b, e, -0.12, e.len + 0.12, 0, 0.34, o.eave - 0.3, o.eave, corn, lod === 0 ? 'fb' : 'f');
  // kat silmesi: zemin kat üstünde ince bant
  if (h > 7 && lod === 0) for (const e of E) if (e.len > 3) edgeBox(b, e, 0, e.len, 0, 0.12, o.base + 3.55, o.base + 3.72, corn, 'ft');
  // dükkân tenteleri (zemin kat)
  if (h > 6.5) for (const e of E) {
    if (e.len < 4 || hash(seed * 31 + e.run) > 0.6) continue;
    const n = Math.max(1, Math.round(e.len / 5)), w = e.len / n;
    for (let k = 0; k < n; k++) {
      const hh = hash(seed * 7 + e.run + k * 1.3); if (hh < 0.25) continue;
      const c = AWNING[Math.floor(hh * 97) % AWNING.length], s0 = k * w + 0.35, s1 = (k + 1) * w - 0.35; if (s1 - s0 < 1.6) continue;
      const y0 = o.base + 3.15, y1 = o.base + 2.6, d = 1.25;
      face(b, at(e, s0, 0, y0), at(e, s1, 0, y0), at(e, s1, d, y1), at(e, s0, d, y1), [e.nx * 0.4, 1, e.nz * 0.4], c);
      face(b, at(e, s0, 0, y0 - 0.02), at(e, s1, 0, y0 - 0.02), at(e, s1, d, y1 - 0.02), at(e, s0, d, y1 - 0.02), [-e.nx * 0.4, -1, -e.nz * 0.4], mul(c, 0.7));
      edgeBox(b, e, s0, s1, d - 0.02, d, y1 - 0.3, y1, mul(c, 0.9), 'fb');
    }
  }
  // cumba (İstanbul'a özgü çıkma): en uzun kenarda, bazı binalarda
  let cumba: [E, number, number] | null = null;
  if (h > 8 && h < 26 && hash(seed * 13) < 0.38) {
    const e = E.reduce((a, c) => (c.len > a.len ? c : a));
    if (e.len >= 8) {
      const w = Math.min(4.2, e.len * 0.4), s0 = (e.len - w) / 2, s1 = s0 + w, d = 0.85, y0 = o.base + 3.75, y1 = o.eave - 0.45;
      const cc = mul(wall, 0.94 + 0.12 * hash(seed * 5));
      const uv = [[e.run + s0, y0 - o.base], [e.run + s1, y0 - o.base], [e.run + s1, y1 - o.base], [e.run + s0, y1 - o.base]];
      face(b, at(e, s0, d, y0), at(e, s1, d, y0), at(e, s1, d, y1), at(e, s0, d, y1), [e.nx, 0, e.nz], cc, 1, uv);
      edgeBox(b, e, s0, s1, 0, d, y0, y1, cc, 'lrbt', mul(cc, 0.62));
      edgeBox(b, e, s0 - 0.08, s1 + 0.08, 0, d + 0.1, y1, y1 + 0.18, corn, 'ftblr');
      cumba = [e, s0 - 0.6, s1 + 0.6];
    }
  }
  if (lod > 0) return;
  // balkonlar: pencere sütunlarıyla hizalı (gölgelendiricideki aralıkla aynı)
  if (h < 7.5 || h > 34 || hash(seed * 17) > 0.62) return;
  const sd = Math.floor(seed * 997 + 0.5) / 997, sp = 2.9 + sd * 0.8;
  const metal = hash(seed * 23) < 0.3, par = metal ? mix(wall, DARK, 0.35) : mix(wall, WHITE, 0.35), slabC = mix(wall, WHITE, 0.25);
  const every = hash(seed * 29) < 0.5 ? 2 : 3, ph = Math.floor(hash(seed * 41) * every);
  let count = 0;
  for (const e of E) {
    if (e.len < 5.5) continue;
    const k0 = Math.ceil(e.run / sp), k1 = Math.floor((e.run + e.len) / sp) - 1;
    for (let kc = k0; kc <= k1; kc++) {
      if ((kc + ph) % every !== 0) continue;
      const c = (kc + 0.5) * sp - e.run; if (c < 1.6 || c > e.len - 1.6) continue;
      if (cumba && cumba[0] === e && c > cumba[1] && c < cumba[2]) continue;
      for (let f = 1; 3.2 * f + 2.9 < h - 0.3; f++) {
        if (count++ > 24) return;
        const y0 = o.base + 3.2 * f + 0.78, s0 = c - 1.2, s1 = c + 1.2, D = 1.0, t = 0.07, top = y0 + 1.05;
        edgeBox(b, e, s0, s1, 0, D, y0 - 0.15, y0, slabC, 'fbt', mul(slabC, 0.78));            // döşeme
        edgeBox(b, e, s0, s1, D - t, D, y0, top, par, metal ? 'fkt' : 'fkt');                 // ön korkuluk
        edgeBox(b, e, s0, s0 + t, 0, D - t, y0, top, par, 'lr');                             // yan korkuluklar
        edgeBox(b, e, s1 - t, s1, 0, D - t, y0, top, par, 'lr');
      }
    }
  }
}

function buildChunk(ci: number, lod: number) {
  const { list } = decode(ci);
  const b = new B(); const seg: number[] = [];
  for (const o of list) {
    const seed = hash(o.c + o.base * 7.1); b.seed = seed; b.base = o.base;
    const wc = ISTANBUL[Math.floor(hash(o.c * 1.37 + o.base * 0.71) * ISTANBUL.length) % ISTANBUL.length], rc = ROOFS[o.r % ROOFS.length], fc = FLATS[o.c % FLATS.length];
    const jit = 0.94 + 0.1 * hash(o.c * 3.3), wall = wc.map((v) => v * jit), roof = rc.map((v) => v * (0.95 + 0.1 * hash(o.c * 1.7)));
    const tall = o.eave - o.base > 4;
    if (lod === 2) {
      for (const poly of o.p) { const r = simplify(poly[0], 2.5); walls(b, r, o.base, o.eave + (o.hip ? o.hip[5] * 0.45 : 0), wall, false, tall); cap(b, [r], o.eave + (o.hip ? o.hip[5] * 0.45 : 0), o.hip ? roof : fc); }
      continue;
    }
    for (const poly of o.p) poly.forEach((ring, k) => walls(b, ring, o.base, o.eave, wall, k > 0, tall));
    const roofK = o.k;
    if (o.hip && (roofK === 1 || roofK === 2 || roofK === 3)) {
      const upper = roof.map((v) => v * 0.8);
      fittedRoof(b, o.p, o.hip, roofK, o.eave, roof, upper, wall);
    } else if (roofK === 5 && o.inn.length && o.rh > 0) {
      bandRoof(b, o.p, o.inn, o.eave, o.rh, roof, fc);
    } else {
      for (const poly of o.p) {
        cap(b, poly, o.eave, fc);
        // korkuluk (düz çatı kenarı)
        if (o.eave - o.base > 6) for (const ring of poly.slice(0, 1)) walls(b, ring, o.eave, o.eave + 0.8, wall, false, false);
      }
    }
    if (o.p.length && o.p[0].length) facade(b, o, wall, lod, seed);
    // çarpışma: dış duvar parçaları
    if (o.eave - o.base > 2.2) for (const poly of o.p) for (const r of poly) for (let i = 0; i < r.length; i += 2) { const j = (i + 2) % r.length; seg.push(r[i], r[i + 1], r[j], r[j + 1]); }
  }
  return { pos: new Float32Array(b.pos), nor: new Float32Array(b.nor), col: new Float32Array(b.col), fac: new Float32Array(b.fac), seg: new Float32Array(seg) };
}

self.onmessage = (e: MessageEvent<Req | Build>) => {
  const m = e.data;
  if (m.type === 'init') { BUF = new DataView(m.buf); INDEX = m.index; WALLS = m.palette.walls.map(hex); ROOFS = m.palette.roofs.map(hex); FLATS = m.palette.flats.map(hex); return; }
  if (m.type === 'build') {
    const r = buildChunk(m.chunk, m.lod);
    (self as unknown as Worker).postMessage({ id: m.id, chunk: m.chunk, lod: m.lod, ...r }, [r.pos.buffer, r.nor.buffer, r.col.buffer, r.fac.buffer, r.seg.buffer]);
  }
};
export {};
