// Bina geometrisi arka planda (Web Worker) üretilir; oyun akıcı kalır.
// lod 0 (çok yakın): + balkonlar · lod 1 (yakın): duvarlar, gerçek çatılar, saçak, tente, cumba · lod 2 (uzak): sade kutu.
// Görünüm eski haritanın kurallarını izler: doku katmanı, cephe tarzı (st) ve renkler bina başına seçilir; pencereleri gölgelendirici çizer.
import { ShapeUtils, Vector2 } from 'three';

type Ring = number[]; type Poly = Ring[];
interface Bld { k: number; w: number; r: number; fl: number; base: number; eave: number; rh: number; c: number; hip: number[] | null; p: Poly[]; inn: Poly[] }
interface Look { oldZ: number; sa: number[]; gk: number[] }
interface Req { type: 'init'; buf: ArrayBuffer; index: number[][]; look: Look }
interface Build { type: 'build'; id: number; chunk: number; lod: number }

let BUF: DataView; let INDEX: number[][]; let CH = 250;
let LOOK: Look = { oldZ: 0, sa: [0, 0], gk: [0, 0] };
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
// wa = (u, v, doku katmanı, bina tohumu) · wb = (duvar yüksekliği, kenar uzunluğu, tür, cephe tarzı)
// tür: 0 çatı / düz yüzey (u,v = yüzeyde metre) · 1 pencereli duvar (u kenar boyunca, v tabandan) · 2 düz duvar
class B {
  pos: number[] = []; nor: number[] = []; col: number[] = []; wa: number[] = []; wb: number[] = [];
  seed = 0; base = 0; wh = 0; st = 0; wl = 0; rl = 6;
  /** kind: 0 kiremit/çatı · 1 pencereli duvar · 2 düz duvar · 3 düz çatı (beton) · 4 süs parçası (dokusuz) */
  tri(a: number[], b: number[], c: number[], col: number[], up: boolean, uv: number[][] | null, kind: number, el = 0) {
    let ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    if (up && ny < 0) { const t = b; b = c; c = t; if (uv) uv = [uv[0], uv[2], uv[1]]; nx = -nx; ny = -ny; nz = -nz; void ux; void uy; void uz; void vx; void vy; void vz; }
    const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
    const P = [a, b, c];
    const layer = kind === 0 ? this.rl : kind === 3 ? 2 : kind === 4 ? -1 : this.wl;
    for (let i = 0; i < 3; i++) {
      this.pos.push(P[i][0], P[i][1], P[i][2]); this.nor.push(nx, ny, nz); this.col.push(col[0], col[1], col[2]);
      const t = uv ? uv[i] : [P[i][0], P[i][2]];
      this.wa.push(t[0], t[1], layer, this.seed);
      if (kind === 0 || kind === 3) this.wb.push(this.wh, -1, 0, 0); else this.wb.push(this.wh, el, kind === 1 ? 1 : 2, kind === 1 ? this.st : 0);
    }
  }
}
const area = (r: Ring) => { let s = 0; for (let i = 0; i < r.length; i += 2) { const j = (i + 2) % r.length; s += r[i] * r[j + 1] - r[j] * r[i + 1]; } return s / 2; };
function walls(b: B, ring: Ring, y0: number, y1: number, col: number[], hole: boolean, windows: boolean) {
  let r = ring; const a = area(r);
  if ((!hole && a > 0) || (hole && a < 0)) { const rr: number[] = []; for (let i = r.length - 2; i >= 0; i -= 2) rr.push(r[i], r[i + 1]); r = rr; }
  for (let i = 0; i < r.length; i += 2) { // u her kenarda 0'dan başlar: pencere aralıkları kenara tam oturur
    const j = (i + 2) % r.length, len = Math.hypot(r[j] - r[i], r[j + 1] - r[i + 1]); if (len < 0.05) continue;
    const p0 = [r[i], y0, r[i + 1]], p1 = [r[j], y0, r[j + 1]], p2 = [r[j], y1, r[j + 1]], p3 = [r[i], y1, r[i + 1]];
    const v0 = y0 - b.base, v1 = y1 - b.base, kind = windows ? 1 : 2;
    b.tri(p0, p1, p2, col, false, [[0, v0], [len, v0], [len, v1]], kind, len);
    b.tri(p0, p2, p3, col, false, [[0, v0], [len, v1], [0, v1]], kind, len);
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

// ---------- renkler (eski haritanın "Varşova ışığı" paleti) ----------
const WALLC = ['#f0d9a0', '#e6bf74', '#f2e4c4', '#dcbc8a', '#ebc4a8', '#e8b48e', '#efd690', '#f3dcb4', '#e2c7a6', '#e9a98c'];
const ROOFC = ['#b85a3c', '#a94a34', '#c8683e', '#9a4a36', '#c47458', '#cf8a6c', '#b9705a', '#8e4c3a'];
const FLATC = ['#e4e0d8', '#d2cfca', '#d8ccb6', '#c8c3ba'];
const RESC = ['#f0e2c4', '#ddd6cc', '#f3ede0', '#e8d3a4', '#ecd8bc', '#d6cfc4', '#efcfb4', '#d4dccc', '#f0d890', '#b8553a', '#a84c36'];
const RESP = [0.11, 0.11, 0.11, 0.1, 0.1, 0.08, 0.06, 0.05, 0.04, 0.12, 0.12];
const GALC = ['#8c7c6a', '#a3907a', '#7a6e62', '#c4aa82', '#d6bd94', '#b59b7a', '#c86a40', '#9a8672'];
const METALC = ['#7d828c', '#6f7a80', '#8a8a90', '#5f6b70'];
const AWNING = ['#b8402f', '#2f6a4a', '#2f5f8f', '#d0752b', '#7d3a5e', '#c9a32a', '#3a7d7d', '#9c4f2e'].map(hex);
const mul = (c: number[], k: number) => c.map((v) => Math.min(1, v * k));
const mix = (a: number[], c: number[], t: number) => a.map((v, i) => v * (1 - t) + c[i] * t);
const WHITE = hex('#f6f3ec'), DARK = hex('#2c2c30');
const hs = (k: number) => { const r = Math.sin(k * 91.17) * 43758.5453; return r - Math.floor(r); };
/** gölgelendiricideki h1 ile aynı sonuç (balkon ve tenteler pencere aralığına otursun) */
const h1 = (n: number) => { const r = Math.sin(Math.fround(n)) * 43758.5453; return r - Math.floor(r); };
/** #rrggbb rengi küçük, sabit bir sapmayla (ton/doygunluk/açıklık) doğrusal renge çevirir */
function jitter(hexc: string, k: number, amt = 1): number[] {
  const n = parseInt(hexc.slice(1), 16); let r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, bl = (n & 255) / 255;
  const mx = Math.max(r, g, bl), mn = Math.min(r, g, bl); let h = 0, sa = 0; const l = (mx + mn) / 2;
  if (mx !== mn) { const d = mx - mn; sa = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn); h = mx === r ? (g - bl) / d + (g < bl ? 6 : 0) : mx === g ? (bl - r) / d + 2 : (r - g) / d + 4; h /= 6; }
  const f = (x: number) => (x - Math.floor(x)) * 2 - 1;
  h = (h + f(Math.sin(k * 12.9898) * 43758.5453) * 0.012 * amt + 1) % 1; sa = Math.min(1, Math.max(0, sa + f(Math.sin(k * 78.233) * 12345.6789) * 0.06 * amt)); const l2 = Math.min(1, Math.max(0, l + f(Math.sin(k * 3.7) * 9876.54) * 0.035 * amt));
  const q = l2 < 0.5 ? l2 * (1 + sa) : l2 + sa - l2 * sa, p = 2 * l2 - q;
  const hue = (t: number) => { t = (t + 1) % 1; return t < 1 / 6 ? p + (q - p) * 6 * t : t < 0.5 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p; };
  r = hue(h + 1 / 3); g = hue(h); bl = hue(h - 1 / 3);
  return [r, g, bl].map((v) => Math.pow(v, 2.2));
}

/** dört köşeli yüz; n = istenen dış yön (sarma sırası buna göre düzeltilir) */
function face(b: B, p0: number[], p1: number[], p2: number[], p3: number[], n: number[], col: number[], kind = 4, uv: number[][] | null = null, el = 0) {
  const ux = p1[0] - p0[0], uy = p1[1] - p0[1], uz = p1[2] - p0[2], vx = p2[0] - p0[0], vy = p2[1] - p0[1], vz = p2[2] - p0[2];
  const cx = uy * vz - uz * vy, cy = uz * vx - ux * vz, cz = ux * vy - uy * vx;
  const ok = cx * n[0] + cy * n[1] + cz * n[2] >= 0;
  const U = uv || [[0, 0], [0, 0], [0, 0], [0, 0]];
  if (ok) { b.tri(p0, p1, p2, col, false, [U[0], U[1], U[2]], kind, el); b.tri(p0, p2, p3, col, false, [U[0], U[2], U[3]], kind, el); }
  else { b.tri(p0, p2, p1, col, false, [U[0], U[2], U[1]], kind, el); b.tri(p0, p3, p2, col, false, [U[0], U[3], U[2]], kind, el); }
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

/** cephe süsleri: saçak, dükkân tenteleri, cumba (lod ≤ 1), balkonlar (lod 0). Aralıklar gölgelendiricideki pencere ızgarasıyla aynı. */
function facade(b: B, o: Bld, wall: number[], lod: number, st: number) {
  const h = o.eave - o.base; if (h < 4.5) return;
  const E = edges(o.p[0][0]); if (!E.length) return;
  const seed = b.seed, res = (st & 8) !== 0;
  const fh = 3.2 * (0.95 + 0.1 * h1(seed * 17)), bw0 = (res ? 2.8 : 3.0) * (0.9 + 0.2 * h1(seed * 29));
  const bays = (e: E) => { const nb = Math.max(1, Math.floor(e.len / bw0 + 0.3)); return { nb, bw: e.len / nb }; };
  const corn = mix(wall, WHITE, 0.4);
  // saçak / korniş
  for (const e of E) if (e.len > 2.2) edgeBox(b, e, -0.12, e.len + 0.12, 0, 0.34, o.eave - 0.3, o.eave, corn, lod === 0 ? 'fb' : 'f');
  // dükkân tenteleri: vitrinli binalarda, bazı gözlerde
  if ((st & 4) && h >= 6) for (const e of E) {
    if (e.len < 3.2) continue; const { nb, bw } = bays(e); if (bw < 1.6) continue;
    for (let bi = 0; bi < nb; bi++) {
      const hh = hs(seed * 7.3 + e.run + bi * 1.3); if (hh > 0.45) continue;
      const c = AWNING[Math.floor(hh * 197) % AWNING.length], s0 = bi * bw + 0.05 * bw, s1 = (bi + 1) * bw - 0.05 * bw;
      const y0 = o.base + 0.74 * fh, y1 = y0 - 0.45, d = 1.1;
      face(b, at(e, s0, 0, y0), at(e, s1, 0, y0), at(e, s1, d, y1), at(e, s0, d, y1), [e.nx * 0.4, 1, e.nz * 0.4], c);
      face(b, at(e, s0, 0, y0 - 0.02), at(e, s1, 0, y0 - 0.02), at(e, s1, d, y1 - 0.02), at(e, s0, d, y1 - 0.02), [-e.nx * 0.4, -1, -e.nz * 0.4], mul(c, 0.6));
      edgeBox(b, e, s0, s1, d - 0.02, d, y1 - 0.25, y1, mul(c, 0.85), 'f');
    }
  }
  // cumba (İstanbul'a özgü çıkma): en uzun kenarda, ortadaki pencere gözünde
  let cumba: [E, number] | null = null;
  if ((st & 2) && h > 8 && h < 26) {
    const e = E.reduce((a, c) => (c.len > a.len ? c : a)); const { nb, bw } = bays(e);
    if (nb >= 3 && bw >= 2.2) {
      const bi = Math.floor(nb / 2), s0 = bi * bw, s1 = s0 + bw, d = 0.8, y0 = o.base + fh, y1 = o.base + Math.floor((h - 0.4) / fh) * fh;
      if (y1 - y0 > fh * 0.9) {
        const cc = mul(wall, 1.05);
        const uv = [[s0, y0 - o.base], [s1, y0 - o.base], [s1, y1 - o.base], [s0, y1 - o.base]];
        const st0 = b.st; b.st = st & ~3; face(b, at(e, s0, d, y0), at(e, s1, d, y0), at(e, s1, d, y1), at(e, s0, d, y1), [e.nx, 0, e.nz], cc, 1, uv, e.len); b.st = st0;
        edgeBox(b, e, s0, s1, 0, d, y0, y1, cc, 'lrbt', mul(cc, 0.6));
        cumba = [e, bi];
      }
    }
  }
  if (lod > 0 || !(st & 1)) return;
  // balkonlar: gölgelendiricinin uzakta çizdiği koyu korkuluk bandının üç boyutlusu
  const metal = h1(seed * 61) < 0.65, par = metal ? mix(wall, DARK, 0.8) : mix(wall, WHITE, 0.3), slabC = mix(wall, WHITE, 0.35);
  const all = h1(seed * 71) < 0.5, bwid = res ? 0.86 : 0.7;
  let count = 0;
  for (const e of E) {
    const { nb, bw } = bays(e); if (bw < 1.6 || e.len < 2.4) continue;
    for (let bi = 0; bi < nb; bi++) {
      if (!(all || bi % 2 === 0)) continue;
      if (cumba && cumba[0] === e && cumba[1] === bi) continue;
      const c = (bi + 0.5) * bw, hwid = (bwid * bw) / 2, s0 = c - hwid, s1 = c + hwid, D = 0.9, t = 0.06;
      for (let f = 1; (f + 1) * fh < h - 0.35; f++) {
        if (count++ > 28) return;
        const y0 = o.base + f * fh + 0.07 * fh, top = o.base + f * fh + 0.36 * fh;
        edgeBox(b, e, s0 - 0.04, s1 + 0.04, 0, D, y0 - 0.14, y0, slabC, 'fbt', mul(slabC, 0.7));   // döşeme
        edgeBox(b, e, s0, s1, D - t, D, y0, top, par, 'fk');                                       // ön korkuluk
        edgeBox(b, e, s0, s0 + t, 0, D - t, y0, top, par, 'lr');                                   // yan korkuluklar
        edgeBox(b, e, s1 - t, s1, 0, D - t, y0, top, par, 'lr');
      }
    }
  }
}

function buildChunk(ci: number, lod: number) {
  const { list } = decode(ci);
  const b = new B(); const seg: number[] = [];
  for (const o of list) {
    const ext = o.p[0]?.[0]; if (!ext || ext.length < 6) continue;
    let lx = 0, lz = 0; for (let i = 0; i < ext.length; i += 2) { lx += ext[i]; lz += ext[i + 1]; } lx /= ext.length / 2; lz /= ext.length / 2;
    const bi = Math.floor(hs(lx * 0.731 + lz * 1.137) * 90000) + 1, h = o.eave - o.base, g = (o.fl & 8) !== 0;
    // ---- eski haritanın bina tarzı kuralları ----
    const old = lz > LOOK.oldZ, core = Math.hypot(lx - LOOK.sa[0], lz - LOOK.sa[1]) < 900, gal = Math.hypot(lx - LOOK.gk[0], lz - LOOK.gk[1]) < 750;
    let kind = o.k || (o.hip ? 1 : 0);
    const modern = kind === 4 || h >= 19 || (kind === 0 && h >= 12), r = hs(bi * 2.3);
    let wl = modern ? 2 : old ? (r < 0.06 && h < 12 ? 1 : r < 0.12 ? 4 : r < 0.17 ? 5 : 0) : (r < 0.45 ? 3 : r < 0.6 ? 5 : 0);
    let rl = g ? 7 : 6, metalRoof = g;
    const resi = !core && h >= 11 && wl !== 4 && wl !== 5;
    const st = (resi ? 8 : 0) + (resi && hs(bi * 4.1) < 0.55 ? 1 : 0) + (resi && hs(bi * 5.9) < 0.3 ? 2 : 0) + (h >= 6 && hs(bi * 6.7) < (resi ? 0.6 : old ? 0.3 : 0.5) ? 4 : 0);
    let wall = jitter(WALLC[(o.w + bi) % WALLC.length], bi, 0.7);
    if (resi) {
      let q = hs(bi * 8.3), k = 0; while (k < RESC.length - 1 && q > RESP[k]) { q -= RESP[k]; k++; }
      wall = jitter(RESC[k], bi, 0.5);
      if (h >= 18 && !old && !gal && kind !== 0 && hs(bi * 9.7) < 0.7) { kind = 4; rl = 2; } // yüksek apartmanlar çoğunlukla düz çatılı
    }
    if (!old && !modern && kind >= 1 && kind <= 5) { // Karaköy çatı karışımı: ~yarısı kiremit, bir kısmı düz, biraz gri metal
      const r2 = hs(bi * 17.3);
      if (r2 < 0.12) { metalRoof = true; rl = 7; } else { metalRoof = false; rl = 6; if (r2 < 0.32) { kind = 4; rl = 2; } }
    }
    if (gal && !modern) { wall = jitter(GALC[Math.floor(hs(bi * 11.3) * GALC.length)], bi, 0.5); if (hs(bi * 10.9) < 0.55) wl = hs(bi * 13.1) < 0.6 ? 3 : 4; }
    let roof = metalRoof ? jitter(METALC[bi % METALC.length], bi + 11, 0.6) : jitter(ROOFC[(o.r + bi) % ROOFC.length], bi + 7, 1.4);
    if (!metalRoof && hs(bi * 12.7) < 0.14) roof = mix(roof, hex('#9a8a80'), 0.3);
    const fc = jitter(FLATC[o.r % FLATC.length], bi + 3, 0.6);
    // gölgelendiriciye giden tarz: cumba her zaman geometri; balkon yakında (lod 0) geometri, uzakta koyu bant
    const full = st, shaderSt = lod === 0 ? st & ~3 : st & ~2;
    b.seed = Math.floor(hs(bi * 1.7) * 997) / 10; b.base = o.base; b.wh = h; b.wl = wl; b.rl = rl; b.st = shaderSt;
    const tall = h > 4;
    if (lod === 2) {
      const top = o.eave + (o.hip && kind >= 1 && kind <= 3 ? o.hip[5] * 0.45 : 0); b.wh = h;
      for (const poly of o.p) { const rr = simplify(poly[0], 2.5); walls(b, rr, o.base, top, wall, false, tall); cap(b, [rr], top, kind >= 1 && kind <= 3 && o.hip ? roof : fc, kind >= 1 && kind <= 3 && o.hip ? 0 : 3); }
      continue;
    }
    for (const poly of o.p) poly.forEach((ring, k) => walls(b, ring, o.base, o.eave, wall, k > 0, tall));
    if (o.hip && (kind === 1 || kind === 2 || kind === 3)) {
      fittedRoof(b, o.p, o.hip, kind, o.eave, roof, mul(roof, 0.8), wall);
    } else if (kind === 5 && o.inn.length && o.rh > 0) {
      bandRoof(b, o.p, o.inn, o.eave, o.rh, roof, fc);
    } else {
      for (const poly of o.p) {
        cap(b, poly, o.eave, fc);
        if (h > 6) for (const ring of poly.slice(0, 1)) walls(b, ring, o.eave, o.eave + 0.8, wall, false, false); // düz çatı korkuluğu
      }
    }
    facade(b, o, wall, lod, full);
    // çarpışma: dış duvar parçaları
    if (h > 2.2) for (const poly of o.p) for (const rg of poly) for (let i = 0; i < rg.length; i += 2) { const j = (i + 2) % rg.length; seg.push(rg[i], rg[i + 1], rg[j], rg[j + 1]); }
  }
  return { pos: new Float32Array(b.pos), nor: new Float32Array(b.nor), col: new Float32Array(b.col), wa: new Float32Array(b.wa), wb: new Float32Array(b.wb), seg: new Float32Array(seg) };
}

self.onmessage = (e: MessageEvent<Req | Build>) => {
  const m = e.data;
  if (m.type === 'init') { BUF = new DataView(m.buf); INDEX = m.index; LOOK = m.look; return; }
  if (m.type === 'build') {
    const r = buildChunk(m.chunk, m.lod);
    (self as unknown as Worker).postMessage({ id: m.id, chunk: m.chunk, lod: m.lod, ...r }, [r.pos.buffer, r.nor.buffer, r.col.buffer, r.wa.buffer, r.wb.buffer, r.seg.buffer]);
  }
};
export {};
