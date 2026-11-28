// Tarihî yapı ayrıntıları (wm19): mevcut kütlelerin üstüne pencere sıraları, saçak, çatı, kule ve revak ekler.
// Kütleler pakette/veride olduğu gibi kalır; buradaki her şey yaklaşık ve şematiktir (ölçüler OSM oturumu + genel bilgi).
const WIN = [0.20, 0.24, 0.30], WIN2 = [0.30, 0.27, 0.25], STONE = [0.93, 0.90, 0.84], STONE2 = [0.84, 0.80, 0.72];
const LEAD = [0.55, 0.57, 0.60], TILE = [0.72, 0.36, 0.26], BRICK = [0.70, 0.40, 0.30], GOLD = [0.77, 0.64, 0.35];
const sh = (k, f) => [k[0] * f, k[1] * f, k[2] * f];

function Builder() {
  const pos = [], col = [];
  const tri = (a, b, c, k) => { pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]); for (let i = 0; i < 3; i++) col.push(k[0], k[1], k[2]); };
  const quad = (a, b, c, d, k) => { tri(a, b, c, k); tri(a, c, d, k); };
  return { pos, col, tri, quad };
}

// yerel çerçeve: paketteki kutularla aynı dönüş kuralı (rotation.y = rot): u ekseni → (cos, −sin), v ekseni → (sin, cos)
function frame(x, z, rot) {
  const c = Math.cos(rot), s = Math.sin(rot);
  return (u, v, y) => [x + u * c + v * s, y, z - u * s + v * c];
}

function tools(B) {
  const box = (W, u0, u1, v0, v1, ya, yb, k, top = true) => {
    const c = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]];
    for (let i = 0; i < 4; i++) { const a = c[i], b = c[(i + 1) % 4]; B.quad(W(a[0], a[1], ya), W(b[0], b[1], ya), W(b[0], b[1], yb), W(a[0], a[1], yb), i % 2 ? k : sh(k, 0.95)); }
    if (top) B.quad(W(u0, v0, yb), W(u1, v0, yb), W(u1, v1, yb), W(u0, v1, yb), sh(k, 0.92));
  };
  // kırma çatı: mahya uzun eksen boyunca
  const hip = (W, u0, u1, v0, v1, y, rise, k) => {
    const lu = u1 - u0, lv = v1 - v0;
    if (lu >= lv) {
      const m = (v0 + v1) / 2, i = Math.min(lv / 2, lu / 2), r0 = u0 + i, r1 = u1 - i;
      B.quad(W(u0, v0, y), W(u1, v0, y), W(r1, m, y + rise), W(r0, m, y + rise), k);
      B.quad(W(u1, v1, y), W(u0, v1, y), W(r0, m, y + rise), W(r1, m, y + rise), sh(k, 0.9));
      B.tri(W(u0, v1, y), W(u0, v0, y), W(r0, m, y + rise), sh(k, 0.95));
      B.tri(W(u1, v0, y), W(u1, v1, y), W(r1, m, y + rise), sh(k, 0.85));
    } else {
      const m = (u0 + u1) / 2, i = Math.min(lu / 2, lv / 2), r0 = v0 + i, r1 = v1 - i;
      B.quad(W(u1, v0, y), W(u1, v1, y), W(m, r1, y + rise), W(m, r0, y + rise), k);
      B.quad(W(u0, v1, y), W(u0, v0, y), W(m, r0, y + rise), W(m, r1, y + rise), sh(k, 0.9));
      B.tri(W(u0, v0, y), W(u1, v0, y), W(m, r0, y + rise), sh(k, 0.95));
      B.tri(W(u1, v1, y), W(u0, v1, y), W(m, r1, y + rise), sh(k, 0.85));
    }
  };
  const pyr = (W, u0, u1, v0, v1, y, rise, k) => {
    const mu = (u0 + u1) / 2, mv = (v0 + v1) / 2, c = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]];
    for (let i = 0; i < 4; i++) { const a = c[i], b = c[(i + 1) % 4]; B.tri(W(a[0], a[1], y), W(b[0], b[1], y), W(mu, mv, y + rise), i % 2 ? k : sh(k, 0.88)); }
  };
  // dünya koordinatında bir duvar parçası boyunca pencere sırası; (nx,nz) dışa bakan birim normal
  const wins = (ax, az, bx, bz, nx, nz, ya, wh, ww, n, k, arch = false, off = 0.14, pad = 0) => {
    const dx = bx - ax, dz = bz - az, L = Math.hypot(dx, dz);
    if (n < 1 || L < ww * 1.2) return;
    const ux = dx / L, uz = dz / L, step = (L - 2 * pad) / n;
    for (let i = 0; i < n; i++) {
      const c = pad + step * (i + 0.5), x0 = ax + ux * (c - ww / 2) + nx * off, z0 = az + uz * (c - ww / 2) + nz * off;
      const x1 = x0 + ux * ww, z1 = z0 + uz * ww, yb = ya + wh;
      B.quad([x0, ya, z0], [x1, ya, z1], [x1, yb, z1], [x0, yb, z0], k);
      if (arch) { const xm = (x0 + x1) / 2, zm = (z0 + z1) / 2, q = ww / 4; B.quad([x0, yb, z0], [x1, yb, z1], [x1 - ux * q, yb + ww * 0.36, z1 - uz * q], [x0 + ux * q, yb + ww * 0.36, z0 + uz * q], k); B.tri([x0 + ux * q, yb + ww * 0.36, z0 + uz * q], [x1 - ux * q, yb + ww * 0.36, z1 - uz * q], [xm, yb + ww * 0.5, zm], k); }
    }
  };
  // çerçeveli kutunun dört yüzüne pencere: rows = [[yaOffset, yükseklik]]
  const boxWins = (W, u0, u1, v0, v1, y0, rows, spacing, ww, k, arch = false, faces = 'uUvV', pad = 1.2) => {
    const P = (u, v) => { const p = W(u, v, 0); return [p[0], p[2]]; };
    const F = { v: [[u0, v0], [u1, v0], [0, -1]], V: [[u1, v1], [u0, v1], [0, 1]], u: [[u0, v1], [u0, v0], [-1, 0]], U: [[u1, v0], [u1, v1], [1, 0]] };
    const o = P(0, 0);
    for (const f of faces) {
      const [a, b, nl] = F[f], pa = P(a[0], a[1]), pb = P(b[0], b[1]), pn = P(nl[0], nl[1]);
      const nx = pn[0] - o[0], nz = pn[1] - o[1], L = Math.hypot(pb[0] - pa[0], pb[1] - pa[1]);
      const n = Math.max(1, Math.floor((L - 2 * pad) / spacing));
      for (const [dy, wh] of rows) wins(pa[0], pa[1], pb[0], pb[1], nx, nz, y0 + dy, wh, ww, n, k, arch, 0.14, pad);
    }
  };
  const cyl = (W, cu, cv, r, ya, yb, seg, k, r2 = r) => {
    for (let i = 0; i < seg; i++) {
      const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2, p = (rr, a, y) => W(cu + Math.cos(a) * rr, cv + Math.sin(a) * rr, y);
      B.quad(p(r, a0, ya), p(r, a1, ya), p(r2, a1, yb), p(r2, a0, yb), i % 2 ? k : sh(k, 0.94));
      B.tri(W(cu, cv, yb), p(r2, a0, yb), p(r2, a1, yb), sh(k, 0.9));
    }
  };
  return { box, hip, pyr, wins, boxWins, cyl };
}

// basit kulak kesme (delikli olmayan çokgen); pts = [[x,z],...]
function earcut(pts) {
  const n = pts.length, idx = [];
  let area = 0;
  for (let i = 0; i < n; i++) { const a = pts[i], b = pts[(i + 1) % n]; area += a[0] * b[1] - b[0] * a[1]; }
  const V = [...Array(n).keys()];
  if (area < 0) V.reverse();
  const cross = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  const inside = (p, a, b, c) => cross(a, b, p) >= 0 && cross(b, c, p) >= 0 && cross(c, a, p) >= 0;
  let guard = 0;
  while (V.length > 3 && guard++ < 5000) {
    let cut = false;
    for (let i = 0; i < V.length; i++) {
      const ia = V[(i + V.length - 1) % V.length], ib = V[i], ic = V[(i + 1) % V.length], a = pts[ia], b = pts[ib], c = pts[ic];
      if (cross(a, b, c) <= 1e-9) continue;
      let ok = true;
      for (const j of V) { if (j === ia || j === ib || j === ic) continue; if (inside(pts[j], a, b, c)) { ok = false; break; } }
      if (!ok) continue;
      idx.push(ia, ib, ic); V.splice(i, 1); cut = true; break;
    }
    if (!cut) break;
  }
  if (V.length === 3) idx.push(V[0], V[1], V[2]);
  return idx;
}

// çokgen planlı kütleye cephe: pencere sıraları + saçak bandı + çatı kapağı
function polyFacade(B, T, flat, y0, h, o) {
  const pts = []; for (let i = 0; i < flat.length; i += 2) pts.push([flat[i], flat[i + 1]]);
  let area = 0; for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; area += a[0] * b[1] - b[0] * a[1]; }
  const sgn = area > 0 ? 1 : -1, top = y0 + h;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length], dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz);
    if (L < 0.5) continue;
    const nx = (dz / L) * sgn, nz = (-dx / L) * sgn;
    if (L >= o.minEdge) { const n = Math.max(1, Math.round((L - 1) / o.spacing)); for (const [dy, wh] of o.rows) T.wins(a[0], a[1], b[0], b[1], nx, nz, y0 + dy, wh, o.ww, n, o.win || WIN, !!o.arch, 0.14, 0.5); }
    if (o.cornice) { const e = 0.35, c = o.cornice; B.quad([a[0] + nx * e, top - 0.7, a[1] + nz * e], [b[0] + nx * e, top - 0.7, b[1] + nz * e], [b[0] + nx * e, top + 0.9, b[1] + nz * e], [a[0] + nx * e, top + 0.9, a[1] + nz * e], c); B.quad([a[0], top - 0.7, a[1]], [b[0], top - 0.7, b[1]], [b[0] + nx * e, top - 0.7, b[1] + nz * e], [a[0] + nx * e, top - 0.7, a[1] + nz * e], sh(c, 0.85)); }
    if (o.plinth) { const e = 0.3; B.quad([a[0] + nx * e, y0 - 0.5, a[1] + nz * e], [b[0] + nx * e, y0 - 0.5, b[1] + nz * e], [b[0] + nx * e, y0 + o.plinth, b[1] + nz * e], [a[0] + nx * e, y0 + o.plinth, a[1] + nz * e], STONE2); }
  }
  if (o.roof) { const id = earcut(pts), y = top + 0.35; for (let i = 0; i < id.length; i += 3) B.tri([pts[id[i]][0], y, pts[id[i]][1]], [pts[id[i + 1]][0], y, pts[id[i + 1]][1]], [pts[id[i + 2]][0], y, pts[id[i + 2]][1]], o.roof); }
}

// ---------- Dolmabahçe Sarayı: OSM kütlelerine iki/üç kat pencere, saçak, kurşun çatı ----------
async function dolmabahce(B, T, M) {
  const d = await (await fetch('./data/dolmabahce_fix.json')).json();
  for (const b of d.buildings) {
    const ring = b.p[0][0]; let cx = 0, cz = 0; for (let i = 0; i < ring.length; i += 2) { cx += ring[i]; cz += ring[i + 1]; } cx /= ring.length / 2; cz /= ring.length / 2;
    const y0 = Math.max(4, M.__ground(cx, cz)), h = b.h;
    const rows = h >= 20 ? [[2.2, 4.2], [8.6, 4.6], [15.2, 4.2]] : h >= 11 ? [[1.8, 3.2], [7.4, 3.6]] : [[1.6, 2.8], [5.4, 1.8]].filter((r) => r[0] + r[1] < h - 0.6);
    polyFacade(B, T, ring, y0, h, { rows, spacing: 3.6, ww: 1.5, minEdge: 3.2, arch: h >= 11, cornice: STONE, plinth: 1.2, roof: LEAD });
  }
}

// ---------- Çırağan Sarayı: OSM oturumuna kemerli pencereler, saçak, kırma kurşun çatılar, rıhtım kapısı ----------
const CIRAGAN_RING = [2984.9, -2203.1, 3001.8, -2164.2, 3030.4, -2176.5, 3028.9, -2180.0, 3039.6, -2184.5, 3041.0, -2181.1, 3074.8, -2195.5, 3073.3, -2198.9, 3083.9, -2203.4, 3085.4, -2200.0, 3114.0, -2212.2, 3097.1, -2251.1];
function ciragan(B, T, M) {
  const x = 3049.3, z = -2208, rot = 0.405, L = 122, I = M.__ground(x, z), W = frame(x, z, rot), hw = 21.6, att = I + 19.6;
  polyFacade(B, T, CIRAGAN_RING, I, 16.9, { rows: [[2.4, 3.2], [7.6, 3.4], [12.6, 2.6]], spacing: 3.8, ww: 1.5, minEdge: 3.4, arch: true, cornice: STONE, plinth: 1.4 });
  // çatı katı bandı + kırma çatı (orta ve uç kütleler arasında)
  for (const [u0, u1] of [[-L * 0.42 + 8, -L * 0.14], [L * 0.14, L * 0.42 - 8]]) { T.box(W, u0, u1, -hw, hw, I + 16.9, att, STONE, true); T.hip(W, u0 - 4, u1 + 4, -hw - 0.4, hw + 0.4, att, 4.2, LEAD); }
  // orta ve uç kütleler: üst kat pencereleri, saçak, çatı
  for (const [u0, u1] of [[-L * 0.14, L * 0.14], [-L * 0.42 - 8, -L * 0.42 + 8], [L * 0.42 - 8, L * 0.42 + 8]]) {
    T.box(W, u0 - 0.6, u1 + 0.6, -hw - 0.4, hw + 0.4, I + 16.9, I + 25.4, STONE, true);
    T.boxWins(W, u0 - 0.6, u1 + 0.6, -hw - 0.4, hw + 0.4, I, [[19.6, 3.4]], 3.8, 1.6, WIN, true, 'uUvV', 1.6);
    T.box(W, u0 - 1.1, u1 + 1.1, -hw - 0.9, hw + 0.9, I + 25.4, I + 26.2, STONE2, true);
    T.hip(W, u0 - 1.1, u1 + 1.1, -hw - 0.9, hw + 0.9, I + 26.2, 4.4, LEAD);
  }
  // deniz kapısı (rıhtım, +v yönü): üç kemerli giriş
  T.box(W, -8, 8, hw, hw + 4.5, I, I + 10, STONE);
  T.boxWins(W, -8, 8, hw, hw + 4.5, I, [[0.6, 6.0]], 4.6, 2.8, WIN, true, 'V', 1.0);
  T.hip(W, -8.4, 8.4, hw - 0.5, hw + 4.9, I + 10, 2.2, LEAD);
}

// ---------- Selimiye Kışlası: pencere sıraları, kiremit çatı, kademeli köşe kuleleri, anıtsal kapı ----------
function selimiye(B, T, M) {
  const cx = 3099.2, cz = 1736, w = 200, d = 265, t = 24, h = 20, be = M.__ground(cx, cz), top = be + h, W = frame(cx, cz, 0);
  const wings = [[-w / 2, w / 2, -d / 2 - t / 2, -d / 2 + t / 2], [-w / 2, w / 2, d / 2 - t / 2, d / 2 + t / 2], [-w / 2 - t / 2, -w / 2 + t / 2, -d / 2, d / 2], [w / 2 - t / 2, w / 2 + t / 2, -d / 2, d / 2]];
  const rows = [[3.0, 2.6], [8.6, 2.8], [14.4, 2.6]];
  for (const [u0, u1, v0, v1] of wings) {
    T.boxWins(W, u0, u1, v0, v1, be, rows, 5.2, 1.6, WIN, false, 'uUvV', 10);
    T.box(W, u0 - 0.5, u1 + 0.5, v0 - 0.5, v1 + 0.5, top, top + 0.8, STONE2, true);
    T.hip(W, u0 - 0.5, u1 + 0.5, v0 - 0.5, v1 + 0.5, top + 0.8, 5.2, TILE);
  }
  for (const su of [-1, 1]) for (const sv of [-1, 1]) {
    const u = su * w / 2, v = sv * d / 2, g = M.__ground(cx + u, cz + v);
    const rw = []; for (let k = 0; k < 6; k++) rw.push([3 + k * 4.4, 2.4]);
    T.boxWins(W, u - 8, u + 8, v - 8, v + 8, g, rw, 4.6, 1.5, WIN, true, 'uUvV', 1.4);
    T.box(W, u - 8.4, u + 8.4, v - 8.4, v + 8.4, g + 29.4, g + 30.4, STONE2, true);
    T.box(W, u - 5, u + 5, v - 5, v + 5, g + 30, g + 39, STONE, true);       // üst kat (kademe)
    T.boxWins(W, u - 5, u + 5, v - 5, v + 5, g + 30, [[4.6, 2.6]], 3.2, 1.4, WIN, true, 'uUvV', 0.9);
    T.box(W, u - 5.4, u + 5.4, v - 5.4, v + 5.4, g + 39, g + 39.8, STONE2, true);
    T.pyr(W, u - 5.2, u + 5.2, v - 5.2, v + 5.2, g + 39.8, 13, LEAD);       // sivri külâh
    T.cyl(W, u, v, 0.14, g + 52.6, g + 55, 5, GOLD);
  }
  // batı (deniz) cephesi ortasında alınlıklı kapı çıkması
  T.box(W, -w / 2 - t / 2 - 5, -w / 2 - t / 2, -16, 16, be, top + 3, STONE, true);
  T.boxWins(W, -w / 2 - t / 2 - 5, -w / 2 - t / 2, -16, 16, be, [[0.8, 6.2], [10.2, 3.2], [15.6, 3.0]], 5.2, 2.0, WIN, true, 'u', 1.6);
  T.hip(W, -w / 2 - t / 2 - 5.4, -w / 2 - t / 2 + 4, -16.4, 16.4, top + 3, 4.2, TILE);
}

// ---------- Tekfur Sarayı: tuğla-taş almaşık cephe, zemin kat revakı, kemerli pencereler, çatı ----------
function tekfur(B, T, M) {
  const x = -3250.4, z = -1161, rot = 0.9, L = 28, D = 13, H = 17, y0 = M.__ground(x, z), W = frame(x, z, rot);
  for (let y = 0.9; y < H - 0.4; y += 1.25) T.box(W, -L / 2 - 0.12, L / 2 + 0.12, -D / 2 - 0.12, D / 2 + 0.12, y0 + y, y0 + y + 0.42, BRICK, false);
  T.boxWins(W, -L / 2, L / 2, -D / 2, D / 2, y0, [[0.3, 3.6]], 6.2, 3.6, WIN2, true, 'vV', 1.2);         // zemin kat kemerleri
  T.boxWins(W, -L / 2, L / 2, -D / 2, D / 2, y0, [[7.3, 2.6]], 5.0, 1.7, WIN2, true, 'vV', 1.4);         // birinci kat: 5 pencere
  T.boxWins(W, -L / 2, L / 2, -D / 2, D / 2, y0, [[12.6, 2.4]], 3.6, 1.5, WIN2, true, 'vV', 1.2);        // ikinci kat: 7 pencere
  T.boxWins(W, -L / 2, L / 2, -D / 2, D / 2, y0, [[7.3, 2.6], [12.6, 2.4]], 4.5, 1.5, WIN2, true, 'uU', 1.6);
  T.box(W, -L / 2 - 0.5, L / 2 + 0.5, -D / 2 - 0.5, D / 2 + 0.5, y0 + H, y0 + H + 0.6, STONE2, true);
  T.hip(W, -L / 2 - 0.7, L / 2 + 0.7, -D / 2 - 0.7, D / 2 + 0.7, y0 + H + 0.6, 3.6, sh(TILE, 0.9));
}

// ---------- Küçük Ayasofya: pencere sıraları ve batı revakı ----------
async function kucukAyasofya(B, T, M) {
  const d = await (await fetch('./data/wm11_landmarks.json')).json(), k = d.kucukayasofya;
  if (!k || !k.outline) return;
  const y0 = M.__ground(k.x, k.z);
  polyFacade(B, T, k.outline, y0, 12.4, { rows: [[1.8, 2.4], [7.2, 2.6]], spacing: 4.4, ww: 1.3, minEdge: 4.5, arch: true, win: [0.95, 0.92, 0.86] });
  polyFacade(B, T, k.outline, y0, 12.4, { rows: [[2.05, 2.0], [7.45, 2.2]], spacing: 4.4, ww: 0.85, minEdge: 4.5, arch: true, win: WIN });
}

export async function addLandmarks(M, ctor) {
  const B = Builder(), T = tools(B);
  const jobs = [['dolmabahce', () => dolmabahce(B, T, M)], ['ciragan', () => ciragan(B, T, M)], ['selimiye', () => selimiye(B, T, M)], ['tekfur', () => tekfur(B, T, M)], ['kucukayasofya', () => kucukAyasofya(B, T, M)]];
  for (const [n, f] of jobs) { try { await f(); } catch (e) { console.warn('landmark skipped', n, e); } }
  const g = new ctor.Geometry();
  g.setAttribute('position', new ctor.Attr(new Float32Array(B.pos), 3));
  g.setAttribute('color', new ctor.Attr(new Float32Array(B.col), 3));
  g.computeVertexNormals();
  const mesh = new ctor.Mesh(g, new ctor.Lambert({ vertexColors: true, side: 2 }));
  mesh.name = 'x_landmarks';
  mesh.castShadow = mesh.receiveShadow = true;
  M.__scene.add(mesh);
  M.__landmarkTris = B.pos.length / 9;
  return M.__landmarkTris;
}
