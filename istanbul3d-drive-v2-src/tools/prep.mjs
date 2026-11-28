// İstanbul 3D Sürüş v2 — veri hazırlama (bir kez çalışır, oyun sadece çıktıyı yükler).
// Girdi: ../istanbul3d/data (binalar, arazi, park/su), ../istanbul3d-drive/data (yollar, başlangıç noktaları)
// Çıktı: ../istanbul3d-drive-v2/data/
//   ground.bin   tek parça zemin: 10 m ızgara, yükseklik (cm, Int16) + zemin türü (Uint8). Yollar zeminin İÇİNDE düzleştirilir.
//   buildings.bin binalar 250 m parçalar halinde; taban yüksekliği zemine göre önceden hesaplı (eğime oturur)
//   roads.json   yollar (köprü güverte yükseklikleriyle), isimler, lambalar
//   trees.bin    ağaçlar
//   meta.json    ızgara ve parça bilgileri
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const MAP = path.resolve(HERE, '../../istanbul3d/data');
const DRV = path.resolve(HERE, '../../istanbul3d-drive/data');
const OUT = path.resolve(HERE, '../../istanbul3d-drive-v2/data');
fs.mkdirSync(OUT, { recursive: true });
const J = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const t0 = Date.now(); const log = (...a) => console.log(`[${((Date.now() - t0) / 1000).toFixed(1)}s]`, ...a);

const scene = J(`${MAP}/scene.json`);
const bjk = J(`${MAP}/wm14_besiktas.json`);
const T1 = J(`${MAP}/terrain.json`), T2 = J(`${MAP}/wm14_terrain_bjk.json`), T3 = J(`${MAP}/terrain_far.json`);
const world = J(`${DRV}/drive_world.json`);
const spawns = J(`${DRV}/drive_spawns.json`);
log('girdiler okundu');

// ---------- ham arazi (DEM) ----------
const EXAG = 1.2;
function gridH(T, x, z) {
  const fx = Math.min(Math.max((x - T.x0) / T.step, 0), T.nx - 1.001), fz = Math.min(Math.max((z - T.z0) / T.step, 0), T.nz - 1.001);
  const i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j, n = T.nx, h = T.h;
  return (h[j * n + i] * (1 - u) + h[j * n + i + 1] * u) * (1 - v) + (h[(j + 1) * n + i] * (1 - u) + h[(j + 1) * n + i + 1] * u) * v;
}
const inT = (T, x, z, m = 0) => x >= T.x0 + m && z >= T.z0 + m && x <= T.x0 + T.step * (T.nx - 1) - m && z <= T.z0 + T.step * (T.nz - 1) - m;
function Hraw(x, z) {
  let h = gridH(T3, x, z);
  if (inT(T1, x, z)) { // 60 m ana arazi; kenarında veri zayıf, 400 m'de uzak araziye karışır
    const d = Math.min(x - T1.x0, z - T1.z0, T1.x0 + T1.step * (T1.nx - 1) - x, T1.z0 + T1.step * (T1.nz - 1) - z);
    const w = Math.min(1, Math.max(0, (d - 60) / 400)); h = h * (1 - w) + gridH(T1, x, z) * w;
  }
  if (inT(T2, x, z)) { // Beşiktaş 30 m yaması, kenarda yumuşak geçiş
    const d = Math.min(x - T2.x0, z - T2.z0, T2.x0 + T2.step * (T2.nx - 1) - x, T2.z0 + T2.step * (T2.nz - 1) - z);
    const w = Math.min(1, d / 120); h = h * (1 - w) + gridH(T2, x, z) * w;
  }
  return Math.max(0, h) * EXAG;
}

// ---------- ızgara ----------
let bx0 = 1e9, bz0 = 1e9, bx1 = -1e9, bz1 = -1e9;
for (const w of world.ways) { const c = w[5]; for (let i = 0; i < c.length; i += 2) { bx0 = Math.min(bx0, c[i]); bx1 = Math.max(bx1, c[i]); bz0 = Math.min(bz0, c[i + 1]); bz1 = Math.max(bz1, c[i + 1]); } }
const STEP = 10, PAD = 400;
const GX0 = Math.floor((bx0 - PAD) / 100) * 100, GZ0 = Math.floor((bz0 - PAD) / 100) * 100;
const NX = Math.ceil((bx1 + PAD - GX0) / STEP) + 1, NZ = Math.ceil((bz1 + PAD - GZ0) / STEP) + 1;
const N = NX * NZ;
const H = new Float32Array(N), KIND = new Uint8Array(N); // 0 kara, 1 su, 2 park, 3 meydan
for (let j = 0; j < NZ; j++) for (let i = 0; i < NX; i++) H[j * NX + i] = Hraw(GX0 + i * STEP, GZ0 + j * STEP);
log(`ızgara ${NX}×${NZ}`);

// çokgeni ızgaraya boya (hücre merkezi içerideyse). poly = [dış, delik...] düz halkalar
function raster(poly, fn) {
  let z0 = 1e9, z1 = -1e9;
  for (let i = 1; i < poly[0].length; i += 2) { z0 = Math.min(z0, poly[0][i]); z1 = Math.max(z1, poly[0][i]); }
  const j0 = Math.max(0, Math.ceil((z0 - GZ0) / STEP)), j1 = Math.min(NZ - 1, Math.floor((z1 - GZ0) / STEP));
  for (let j = j0; j <= j1; j++) {
    const z = GZ0 + j * STEP, xs = [];
    for (const r of poly) for (let a = 0, b = r.length - 2; a < r.length; b = a, a += 2) {
      const za = r[a + 1], zb = r[b + 1];
      if ((za > z) !== (zb > z)) xs.push(r[a] + (z - za) / (zb - za) * (r[b] - r[a]));
    }
    xs.sort((p, q) => p - q);
    for (let k = 0; k + 1 < xs.length; k += 2) {
      const i0 = Math.max(0, Math.ceil((xs[k] - GX0) / STEP)), i1 = Math.min(NX - 1, Math.floor((xs[k + 1] - GX0) / STEP));
      for (let i = i0; i <= i1; i++) fn(j * NX + i);
    }
  }
}
// su: harita su çokgenleri + DEM ≈ 0 (yalnız harita sınırı dışında) + Beşiktaş bölgesinde kara çokgeni dışı
const [sb0, sb1, sb2, sb3] = scene.bounds_m; // x0, z0, x1, z1
const inScene = (x, z) => x >= sb0 && x <= sb2 && z >= sb1 && z <= sb3;
const Z = bjk.zone; const inZone = (x, z) => x >= Z[0] && x <= Z[2] && z >= Z[1] && z <= Z[3];
for (let j = 0; j < NZ; j++) for (let i = 0; i < NX; i++) {
  const x = GX0 + i * STEP, z = GZ0 + j * STEP, k = j * NX + i;
  if (!inScene(x, z) && !inZone(x, z) && H[k] < 0.4) KIND[k] = 1;
}
for (const p of scene.water) raster(p, (k) => { KIND[k] = 1; });
{ const landZ = new Uint8Array(N); for (const p of bjk.land) raster(p, (k) => { landZ[k] = 1; });
  for (let j = 0; j < NZ; j++) for (let i = 0; i < NX; i++) { const k = j * NX + i; if (inZone(GX0 + i * STEP, GZ0 + j * STEP) && !inScene(GX0 + i * STEP, GZ0 + j * STEP)) KIND[k] = landZ[k] ? 0 : 1; } }
for (const p of [...scene.parks, ...bjk.parks]) raster(p, (k) => { if (KIND[k] !== 1) KIND[k] = 2; });
for (const p of [...scene.plazas, ...bjk.plazas]) raster(p, (k) => { if (KIND[k] !== 1) KIND[k] = 3; });
log('su/park/meydan boyandı');

// ---------- yollar: yükseklik profili ----------
const DRIVE_CODES = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const ways = world.ways.filter((w) => DRIVE_CODES.has(w[0]));
const sampleG = (x, z) => { // ham ızgara (düzleştirme öncesi), su üstünde 0
  const fx = Math.min(Math.max((x - GX0) / STEP, 0), NX - 1.001), fz = Math.min(Math.max((z - GZ0) / STEP, 0), NZ - 1.001);
  const i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j;
  return (H[j * NX + i] * (1 - u) + H[j * NX + i + 1] * u) * (1 - v) + (H[(j + 1) * NX + i] * (1 - u) + H[(j + 1) * NX + i + 1] * u) * v;
};
const isWater = (x, z) => { const i = Math.round((x - GX0) / STEP), j = Math.round((z - GZ0) / STEP); return i >= 0 && j >= 0 && i < NX && j < NZ && KIND[j * NX + i] === 1; };
// her yol: 5 m aralıkla nokta, ham yükseklik, boyuna yumuşatma
const R = ways.map((w) => {
  const c = w[5], pts = [];
  for (let i = 0; i + 2 < c.length; i += 2) {
    const L = Math.hypot(c[i + 2] - c[i], c[i + 3] - c[i + 1]), n = Math.max(1, Math.ceil(L / 5));
    for (let k = 0; k < n; k++) pts.push([c[i] + (c[i + 2] - c[i]) * k / n, c[i + 1] + (c[i + 3] - c[i + 1]) * k / n]);
  }
  pts.push([c[c.length - 2], c[c.length - 1]]);
  return { w, pts, h: pts.map(([x, z]) => sampleG(x, z)), bridge: w[4] === 1 };
});
const key = (x, z) => `${Math.round(x * 2)},${Math.round(z * 2)}`;
function smooth(r, sig) {
  const n = r.h.length, out = new Array(n), s = [0];
  for (let i = 1; i < n; i++) s.push(s[i - 1] + Math.hypot(r.pts[i][0] - r.pts[i - 1][0], r.pts[i][1] - r.pts[i - 1][1]));
  for (let i = 0; i < n; i++) {
    let a = 0, b = 0;
    for (let k = i; k >= 0 && s[i] - s[k] < 3 * sig; k--) { const g = Math.exp(-((s[i] - s[k]) ** 2) / (2 * sig * sig)); a += r.h[k] * g; b += g; }
    for (let k = i + 1; k < n && s[k] - s[i] < 3 * sig; k++) { const g = Math.exp(-((s[k] - s[i]) ** 2) / (2 * sig * sig)); a += r.h[k] * g; b += g; }
    out[i] = a / b;
  }
  return out;
}
for (let it = 0; it < 3; it++) {
  for (const r of R) if (!r.bridge) r.h = smooth(r, 12);
  // kavşaklarda uç yükseklikleri ortak
  const J = new Map();
  for (const r of R) for (const e of [0, r.pts.length - 1]) { const k = key(...r.pts[e]); (J.get(k) || J.set(k, []).get(k)).push([r, e]); }
  for (const list of J.values()) {
    if (list.length < 2) continue;
    const nb = list.filter(([r]) => !r.bridge); const src = nb.length ? nb : list;
    const m = src.reduce((s, [r, e]) => s + r.h[e], 0) / src.length;
    for (const [r, e] of list) {
      const d = m - r.h[e], n = r.h.length;
      for (let i = 0; i < n; i++) { const k = e === 0 ? i : n - 1 - i, f = Math.max(0, 1 - i / 8); if (f <= 0) break; r.h[k] += d * f; }
    }
  }
}
// köprüler: uçlar arası düz/kemerli güverte, su üstünde en az 3.5 m
for (const r of R) if (r.bridge) {
  const n = r.h.length, a = r.h[0], b = r.h[n - 1];
  for (let i = 0; i < n; i++) { const t = i / (n - 1); r.h[i] = Math.max(a + (b - a) * t, isWater(...r.pts[i]) ? 3.5 + 1.5 * Math.sin(Math.PI * t) : 0); }
}
log(`yollar: ${R.length}, profil hazır`);

// ---------- zemin düzleştirme: yol yüzeyi zeminin parçası ----------
const best = new Float32Array(N).fill(0), tgt = new Float32Array(N);
for (const r of R) {
  if (r.bridge) continue;
  const half = r.w[1] / 2, inner = half + 1.5, outer = half + 9;
  for (let p = 0; p < r.pts.length; p++) {
    const [x, z] = r.pts[p], hh = r.h[p];
    const i0 = Math.max(0, Math.floor((x - outer - GX0) / STEP)), i1 = Math.min(NX - 1, Math.ceil((x + outer - GX0) / STEP));
    const j0 = Math.max(0, Math.floor((z - outer - GZ0) / STEP)), j1 = Math.min(NZ - 1, Math.ceil((z + outer - GZ0) / STEP));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const k = j * NX + i; if (KIND[k] === 1) continue;
      const d = Math.hypot(GX0 + i * STEP - x, GZ0 + j * STEP - z);
      let wgt = d <= inner ? 1 : d >= outer ? 0 : 1 - (d - inner) / (outer - inner);
      wgt = wgt * wgt * (3 - 2 * wgt);
      if (wgt > best[k] + 1e-4 || (wgt >= 0.999 && best[k] >= 0.999 && Math.abs(hh - H[k]) < Math.abs(tgt[k] - H[k]))) { best[k] = wgt; tgt[k] = hh; }
    }
  }
}
for (let k = 0; k < N; k++) if (best[k] > 0) H[k] = H[k] + (tgt[k] - H[k]) * best[k];
// kıyı: kara en az 0.8 m, su tabanı -3 m (deniz yüzeyi y=0)
for (let k = 0; k < N; k++) H[k] = KIND[k] === 1 ? -3 : Math.max(0.8, H[k]);
// su ile kara arasında yumuşak şev (tek hücre)
log('zemin düzleştirildi');
const sampleF = (x, z) => sampleG(x, z); // artık düzleştirilmiş ızgara

// ---------- binalar ----------
const removePts = world.remove;
const pip = (r, x, z) => { let c = false; for (let a = 0, b = r.length - 2; a < r.length; b = a, a += 2) if ((r[a + 1] > z) !== (r[b + 1] > z) && x < (r[b] - r[a]) * (z - r[a + 1]) / (r[b + 1] - r[a + 1]) + r[a]) c = !c; return c; };
const blds = [];
const src = [...scene.buildings.filter((b) => !(b.p[0] && b.p[0][0] && inZone(b.p[0][0][0], b.p[0][0][1]) && !inScene(b.p[0][0][0], b.p[0][0][1]))), ...bjk.buildings];
let dropped = 0;
// eski haritanın gizleme listeleri: köprü üstü, Taksim meydanı, yer altı (metro kutuları), çift kayıt / deniz içi
const hide = [];
for (const [f, tol] of [['bridge_filter', 1.5], ['taksim_building_filter', 3], ['underground_filter', 1.5]]) for (const c of J(`${MAP}/${f}.json`).centroids) hide.push([c[0], c[1], tol, f === 'underground_filter']);
for (const d of J(`${MAP}/wm11_building_filter.json`).detail) if (!String(d.why).startsWith('under')) hide.push([d.c[0], d.c[1], 1.5, false]);
// yol ekseni noktaları (5 m aralık): bir bina bunlardan birini içine alıyorsa yolun ortasında demektir
const RP = new Map(); const RC = 50;
for (const r of R) { if (r.w[0] === 7 || r.w[0] === 8 || r.bridge) continue; for (const [x, z] of r.pts) { const k = `${Math.floor(x / RC)},${Math.floor(z / RC)}`; (RP.get(k) || RP.set(k, []).get(k)).push(x, z); } }
const onRoad = (ext) => {
  let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9; for (let i = 0; i < ext.length; i += 2) { x0 = Math.min(x0, ext[i]); x1 = Math.max(x1, ext[i]); z0 = Math.min(z0, ext[i + 1]); z1 = Math.max(z1, ext[i + 1]); }
  for (let a = Math.floor(x0 / RC); a <= Math.floor(x1 / RC); a++) for (let c = Math.floor(z0 / RC); c <= Math.floor(z1 / RC); c++) {
    const l = RP.get(`${a},${c}`); if (!l) continue;
    for (let i = 0; i < l.length; i += 2) if (l[i] >= x0 && l[i] <= x1 && l[i + 1] >= z0 && l[i + 1] <= z1 && pip(ext, l[i], l[i + 1])) return true;
  }
  return false;
};
let hidden = 0, roadHit = 0, roadArea = 0;
for (const b of src) {
  if (!b.p || !b.p.length || !b.p[0] || !b.p[0][0] || b.p[0][0].length < 6) continue;
  const ext = b.p[0][0];
  if (removePts.some(([x, z]) => pip(ext, x, z))) { dropped++; continue; }
  { let vx = 0, vz = 0; for (let i = 0; i < ext.length; i += 2) { vx += ext[i]; vz += ext[i + 1]; } vx /= ext.length / 2; vz /= ext.length / 2;
    if (hide.some(([x, z, tol, inside]) => Math.hypot(x - vx, z - vz) < tol || (inside && pip(ext, x, z)))) { hidden++; continue; } }
  if (b.p.some((poly) => onRoad(poly[0]))) { roadHit++; let a = 0; for (let i = 0; i < ext.length; i += 2) { const j = (i + 2) % ext.length; a += ext[i] * ext[j + 1] - ext[j] * ext[i + 1]; } roadArea += Math.abs(a / 2); continue; }
  let mn = 1e9, mx = -1e9, cx = 0, cz = 0, n = 0;
  for (const poly of b.p) for (let i = 0; i < poly[0].length; i += 2) { const h = sampleF(poly[0][i], poly[0][i + 1]); mn = Math.min(mn, h); mx = Math.max(mx, h); cx += poly[0][i]; cz += poly[0][i + 1]; n++; }
  cx /= n; cz /= n;
  if (isWater(cx, cz) && mx < 1) { mn = 0.8; mx = 0.8; }
  const base = mn - 0.4; // temel zemine gömülür, havada kalmaz
  const eave = Math.max((mn + mx) / 2 + b.h, mx + 2.6); // yokuş üstü tarafta da en az bir kat
  blds.push({ b, cx, cz, base, eave });
}
log(`binalar: ${blds.length} (elle silinen ${dropped}, gizleme listesi ${hidden}, yol ortasında ${roadHit}, ort. alan ${(roadArea / Math.max(1, roadHit)).toFixed(0)} m²)`);

// ---------- yol genişliği: binalar arasındaki gerçek boşluğa göre daralt ----------
// Veri genişliği dar sokaklarda gerçek aralıktan fazla; binalar yola taşıyordu. Her yol noktasında en yakın duvara uzaklık ölçülür.
{
  const EC = 20, EH = new Map();
  const areaOf = (r) => { let a = 0; for (let i = 0; i < r.length; i += 2) { const j = (i + 2) % r.length; a += r[i] * r[j + 1] - r[j] * r[i + 1]; } return Math.abs(a / 2); };
  blds.forEach((o, bi) => { o.area = areaOf(o.b.p[0][0]); for (const poly of o.b.p) for (const r of poly) for (let i = 0; i < r.length; i += 2) {
    const j = (i + 2) % r.length, ax = r[i], az = r[i + 1], bx = r[j], bz = r[j + 1];
    for (let a = Math.floor(Math.min(ax, bx) / EC); a <= Math.floor(Math.max(ax, bx) / EC); a++) for (let c = Math.floor(Math.min(az, bz) / EC); c <= Math.floor(Math.max(az, bz) / EC); c++) { const k = `${a},${c}`; (EH.get(k) || EH.set(k, []).get(k)).push(bi, ax, az, bx, bz); }
  } });
  const dseg = (x, z, ax, az, bx, bz) => { const dx = bx - ax, dz = bz - az, t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz || 1e-9))); return Math.hypot(x - ax - dx * t, z - az - dz * t); };
  const kill = new Set();
  const clearance = (x, z, max, onNear) => {
    let d = max;
    for (let a = Math.floor((x - max) / EC); a <= Math.floor((x + max) / EC); a++) for (let c = Math.floor((z - max) / EC); c <= Math.floor((z + max) / EC); c++) {
      const l = EH.get(`${a},${c}`); if (!l) continue;
      for (let i = 0; i < l.length; i += 5) { if (kill.has(l[i])) continue; const q = dseg(x, z, l[i + 1], l[i + 2], l[i + 3], l[i + 4]); if (q < d) d = q; if (onNear && q < 1.2) onNear(l[i]); }
    }
    return d;
  };
  // 0) yol eksenini iki yandaki duvarların ortasına kaydır (OSM ekseni ile bina çizimi çoğu dar sokakta 1-2 m kaçık)
  let shifted = 0;
  for (const r of R) {
    if (r.bridge) continue; const P = r.pts, n = P.length, full = r.w[1] / 2, C = full + 1.5; if (n < 4) continue;
    for (let pass = 0; pass < 2; pass++) {
      const sh = new Array(n).fill(0), N = new Array(n);
      for (let i = 0; i < n; i++) {
        const a = P[Math.max(0, i - 1)], b = P[Math.min(n - 1, i + 1)]; let tx = b[0] - a[0], tz = b[1] - a[1]; const l = Math.hypot(tx, tz) || 1; tx /= l; tz /= l; const nx = -tz, nz = tx; N[i] = [nx, nz];
        let dL = C, dR = C; const [x, z] = P[i], rad = C + 1;
        for (let ca = Math.floor((x - rad) / EC); ca <= Math.floor((x + rad) / EC); ca++) for (let cc = Math.floor((z - rad) / EC); cc <= Math.floor((z + rad) / EC); cc++) {
          const L = EH.get(`${ca},${cc}`); if (!L) continue;
          for (let k = 0; k < L.length; k += 5) {
            const ax = L[k + 1], az = L[k + 2], dx = L[k + 3] - ax, dz = L[k + 4] - az, t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz || 1e-9)));
            const vx = ax + dx * t - x, vz = az + dz * t - z, al = vx * tx + vz * tz; if (Math.abs(al) > 2.5) continue; const lat = vx * nx + vz * nz;
            if (lat > 0) dL = Math.min(dL, lat); else dR = Math.min(dR, -lat);
          }
        }
        if (Math.min(dL, dR) < full + 0.3) sh[i] = Math.max(-2.5, Math.min(2.5, (dL - dR) / 2));
      }
      let any = false;
      for (let it = 0; it < 2; it++) { const c = sh.slice(); for (let i = 1; i < n - 1; i++) sh[i] = (c[i - 1] + 2 * c[i] + c[i + 1]) / 4; }
      for (let i = 0; i < n; i++) { const k = Math.min(1, Math.min(i, n - 1 - i) / 2) ; const v = sh[i] * k; if (Math.abs(v) > 0.15) { P[i] = [P[i][0] + N[i][0] * v, P[i][1] + N[i][1] * v]; any = true; } }
      if (any && pass === 0) { shifted++; r.moved = true; }
    }
  }
  // 1) araç yolunun tam üstündeki küçük binalar çıkarılır (araba geçemez)
  const cand = new Set();
  for (const r of R) { if (r.bridge || r.w[0] === 7 || r.w[0] === 8) continue; for (const [x, z] of r.pts) clearance(x, z, 2, (bi) => { if (blds[bi].area < 1500) cand.add(bi); }); }
  for (const bi of cand) kill.add(bi);
  // 2) kalan binalara göre nokta nokta yarı genişlik
  let narrowed = 0, tight = 0;
  for (const r of R) {
    const full = r.w[1] / 2; if (r.bridge) continue;
    const minHalf = r.w[0] === 7 || r.w[0] === 8 ? 0.9 : 1.2;
    const raw = r.pts.map(([x, z]) => { const d = clearance(x, z, full + 0.3, null) - 0.3; if (d < minHalf) tight++; return Math.max(minHalf, Math.min(full, d)); });
    const hw = raw.map((v, i) => Math.min(v, raw[Math.max(0, i - 1)], raw[Math.min(raw.length - 1, i + 1)]));
    if (hw.some((v) => v < full - 0.05)) { r.hw = hw; narrowed++; } else if (r.moved) r.hw = hw;
  }
  const before = blds.length; const keep = blds.filter((_, i) => !kill.has(i)); blds.length = 0; blds.push(...keep);
  log(`yol daraltma: ${shifted} yol ekseni ortalandı, ${narrowed} yol daraltıldı, ${before - blds.length} bina yol üstünde olduğu için çıkarıldı, ${tight} sıkışık nokta`);
}

const CH = 250;
const chunks = new Map();
for (const o of blds) { const k = `${Math.floor(o.cx / CH)},${Math.floor(o.cz / CH)}`; (chunks.get(k) || chunks.set(k, []).get(k)).push(o); }
// ikili kayıt
const parts = []; const index = [];
let off = 0;
const q = (v) => Math.max(-32768, Math.min(32767, Math.round(v * 10)));
for (const [k, list] of chunks) {
  const [ci, cj] = k.split(',').map(Number); const ox = (ci + 0.5) * CH, oz = (cj + 0.5) * CH;
  const bytes = [];
  const dv = new DataView(new ArrayBuffer(4 * 1024 * 1024)); let p = 0;
  const u8 = (v) => { dv.setUint8(p, v); p += 1; }, i16 = (v) => { dv.setInt16(p, v, true); p += 2; }, u16 = (v) => { dv.setUint16(p, v, true); p += 2; }, f32 = (v) => { dv.setFloat32(p, v, true); p += 4; };
  const polys = (P) => { u8(P.length); for (const poly of P) { u8(poly.length); for (const r of poly) { u16(r.length / 2); for (let i = 0; i < r.length; i += 2) { i16(q(r[i] - ox)); i16(q(r[i + 1] - oz)); } } } };
  for (const { b, base, eave } of list) {
    const hasHip = !!(b.hip && b.hip.length >= 6), hasIn = !!(b.in && b.in.length);
    u8(b.k ?? 0); u8(b.w ?? 0); u8(b.r ?? 0); u8((hasHip ? 1 : 0) | (hasIn ? 2 : 0) | (b.e ? 4 : 0) | (b.g ? 8 : 0));
    i16(q(base)); i16(q(eave)); u16(Math.round((b.rh ?? 0) * 10)); u16((b.c ?? 0) & 0xffff);
    if (hasHip) { f32(b.hip[0] - ox); f32(b.hip[1] - oz); f32(b.hip[2]); f32(b.hip[3]); f32(b.hip[4]); f32(b.hip[5]); }
    polys(b.p); if (hasIn) polys(b.in);
  }
  const buf = Buffer.from(dv.buffer, 0, p);
  parts.push(buf); index.push([ci, cj, off, p, list.length]); off += p; void bytes;
}
fs.writeFileSync(`${OUT}/buildings.bin`, Buffer.concat(parts));
log(`buildings.bin ${(off / 1e6).toFixed(2)} MB, ${index.length} parça`);

// ---------- zemin dosyası ----------
{
  const buf = Buffer.alloc(N * 3);
  for (let k = 0; k < N; k++) buf.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(H[k] * 100))), k * 2);
  Buffer.from(KIND.buffer).copy(buf, N * 2);
  fs.writeFileSync(`${OUT}/ground.bin`, buf);
  log(`ground.bin ${(buf.length / 1e6).toFixed(2)} MB`);
}

// ---------- yollar ----------
const roadsOut = R.map((r) => {
  // köprü değilse OSM noktaları yeterli (oyun 5 m'ye kendisi böler); köprüde güverte profili için 5 m noktalar
  const src = r.bridge || r.hw ? r.pts.flat() : r.w[5];
  const o = [r.w[0], r.w[1], r.w[2], r.w[3], r.bridge ? 1 : 0, src.map((v) => Math.round(v * 10) / 10)];
  if (r.bridge) o.push(r.h.map((h) => Math.round(h * 100) / 100));
  else if (r.hw) o.push(0, r.hw.map((h) => Math.round(h * 10) / 10)); // daraltılmış yol: nokta başına yarı genişlik (noktalar 5 m aralıklı, oyun bölmez)
  return o;
});
const names = {}; ways.forEach((w, i) => { const n = world.names[String(world.ways.indexOf(w))]; if (n) names[i] = n; });
fs.writeFileSync(`${OUT}/roads.json`, JSON.stringify({ note: 'OSM (c) OpenStreetMap contributors, ODbL. v2: yol ekseni (köprülerde 5 m noktalar + güverte yüksekliği). [kod, genişlik, şerit, tekyön, köprü, xz..., (köprü y... | 0), (yarı genişlikler)]', codes: world.codes, ways: roadsOut, names, trams: world.trams, lamps: world.lamps }));
log(`roads.json ${(fs.statSync(`${OUT}/roads.json`).size / 1e6).toFixed(2)} MB`);

// ---------- ağaçlar ----------
{
  const T = [...scene.trees, ...bjk.trees].filter((t) => !isWater(t[0], t[1]));
  const buf = Buffer.alloc(T.length * 10);
  T.forEach((t, i) => { buf.writeFloatLE(t[0], i * 10); buf.writeFloatLE(t[1], i * 10 + 4); buf.writeUInt8(Math.min(255, Math.round((t[2] ?? 1) * 100)), i * 10 + 8); buf.writeUInt8(t[3] ?? 0, i * 10 + 9); });
  fs.writeFileSync(`${OUT}/trees.bin`, buf);
  log(`trees.bin ${T.length} ağaç`);
}

// ---------- önemli yapılar (GLB modelleri istanbul3d/models içinde) ----------
const [lon0, lat0] = scene.origin; const kx = Math.cos(lat0 * Math.PI / 180) * 111320;
const LM = ['ayasofya', 'sultanahmet', 'yenicami', 'galata', 'rustempasa', 'nusretiye', 'ayatriada', 'stantoine', 'topkapi', 'dikilitas', 'ormedikilitas', 'yilanlisutun', 'almancesmesi'];
const landmarks = [];
for (const id of LM) {
  const f = path.resolve(MAP, `../models/${id}.anchor.json`); if (!fs.existsSync(f)) continue;
  const a = J(f); const x = (a.anchor.lon - lon0) * kx, z = -(a.anchor.lat - lat0) * 110574;
  landmarks.push({ id, name: a.name, model: a.model_web, x: +x.toFixed(2), z: +z.toFixed(2), y: +sampleF(x, z).toFixed(2), ry: a.three_rotation_y_rad, s: a.scale_m });
}

fs.writeFileSync(`${OUT}/meta.json`, JSON.stringify({
  note: 'İstanbul 3D Sürüş v2 verisi. OSM (c) OpenStreetMap contributors (ODbL); arazi Copernicus DEM GLO-30 (© DLR, Airbus DS). Yükseklikler yaklaşık.',
  grid: { x0: GX0, z0: GZ0, step: STEP, nx: NX, nz: NZ },
  palette: scene.palette,
  chunk: CH, chunks: index,
  spawns: spawns.spawns,
  landmarks,
  // eski haritanın görünüm kuralları için: tarihî yarımada sınırı (z), Sultanahmet ve Galata merkezleri
  look: { oldZ: -(41.0195 - lat0) * 110574, sa: [(28.9784 - lon0) * kx, -(41.0066 - lat0) * 110574], gk: [(28.9741 - lon0) * kx, -(41.0256 - lat0) * 110574] },
}));
log('bitti');
