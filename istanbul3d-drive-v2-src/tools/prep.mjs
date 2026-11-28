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

const lmPos = {};
// ---------- anıtların altı düzlenir (modeller düz zemine göre yapılmış; Topkapı hariç: o, oyunda araziye göre eğilir) ----------
{
  const [lo0, la0] = scene.origin, kx0 = Math.cos(la0 * Math.PI / 180) * 111320;
  const PR = { ayasofya: 100, sultanahmet: 95, yenicami: 70, rustempasa: 30, galata: 14, nusretiye: 32, ayatriada: 28, stantoine: 60, dikilitas: 7, ormedikilitas: 7, yilanlisutun: 7, almancesmesi: 7 };
  const pads = [];
  for (const [id, r] of Object.entries(PR)) { const f = path.resolve(MAP, `../models/${id}.anchor.json`); if (!fs.existsSync(f)) continue; const a = J(f); pads.push([(a.anchor.lon - lo0) * kx0, -(a.anchor.lat - la0) * 110574, r, r > 20 ? 30 : 10]); lmPos[id] = pads[pads.length - 1]; }
  for (const [x, z, r, bl] of pads) {
    const ci = Math.round((x - GX0) / STEP), cj = Math.round((z - GZ0) / STEP), n = Math.ceil((r + bl) / STEP);
    const h0 = H[cj * NX + ci];
    for (let j = Math.max(0, cj - n); j <= Math.min(NZ - 1, cj + n); j++) for (let i = Math.max(0, ci - n); i <= Math.min(NX - 1, ci + n); i++) {
      const d = Math.hypot(GX0 + i * STEP - x, GZ0 + j * STEP - z); if (d > r + bl) continue;
      let w = d <= r ? 1 : 1 - (d - r) / bl; w = w * w * (3 - 2 * w); const k = j * NX + i; H[k] += (h0 - H[k]) * w;
    }
  }
  log(`anıt zeminleri: ${pads.length}`);
}

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
// ---------- kıyı çizgisi: pürüzsüz kıyı, rıhtım, taş dolgu ----------
// Su/kara ızgarası 10 m; doğrudan kullanınca kıyı basamak basamak görünüyordu. Burada maske yumuşatılır, kıyı çizgisi
// çıkarılır, her hücrenin kıyıya işaretli uzaklığı (SD: + kara, − su) bulunur. Şehir kıyısı rıhtımdır: kara 10 m denize
// uzatılır, üstünü oyunda taş rıhtım kaplar (shore.ts). Park kıyıları yumuşak eğimli taş dolgudur.
const SD = new Float32Array(N).fill(99), NAT = new Uint8Array(N);
const shoreOut = { lines: [], piers: [] };
const QW = 10; // rıhtım genişliği (m)
{
  const forced = new Uint8Array(N); let roadWater = 0;
  for (const w of ways) { // köprü olmayan yolların altı ve yanı her zaman kara
    if (w[4] === 1) continue; const c = w[5], r = w[1] / 2 + 12;
    for (let i = 0; i + 2 < c.length; i += 2) {
      const L = Math.hypot(c[i + 2] - c[i], c[i + 3] - c[i + 1]), n = Math.max(1, Math.ceil(L / 5));
      for (let q = 0; q <= n; q++) {
        const x = c[i] + (c[i + 2] - c[i]) * q / n, z = c[i + 1] + (c[i + 3] - c[i + 1]) * q / n;
        const i0 = Math.max(0, Math.ceil((x - r - GX0) / STEP)), i1 = Math.min(NX - 1, Math.floor((x + r - GX0) / STEP)), j0 = Math.max(0, Math.ceil((z - r - GZ0) / STEP)), j1 = Math.min(NZ - 1, Math.floor((z + r - GZ0) / STEP));
        for (let j = j0; j <= j1; j++) for (let ii = i0; ii <= i1; ii++) if (Math.hypot(GX0 + ii * STEP - x, GZ0 + j * STEP - z) <= r) forced[j * NX + ii] = 1;
      }
    }
  }
  for (let k = 0; k < N; k++) if (forced[k] && KIND[k] === 1) { KIND[k] = 0; roadWater++; }
  let M = new Float32Array(N); for (let k = 0; k < N; k++) M[k] = KIND[k] === 1 ? 0 : 1;
  const blur = () => {
    const T = new Float32Array(N);
    for (let j = 0; j < NZ; j++) for (let i = 0; i < NX; i++) { const k = j * NX + i; T[k] = (M[j * NX + Math.max(0, i - 1)] + 2 * M[k] + M[j * NX + Math.min(NX - 1, i + 1)]) / 4; }
    for (let j = 0; j < NZ; j++) for (let i = 0; i < NX; i++) { const k = j * NX + i; M[k] = (T[Math.max(0, j - 1) * NX + i] + 2 * T[k] + T[Math.min(NZ - 1, j + 1) * NX + i]) / 4; }
  };
  for (let it = 0; it < 3; it++) { blur(); for (let k = 0; k < N; k++) if (forced[k]) M[k] = Math.max(M[k], 0.8); }
  const mAt = (x, z) => { const fx = Math.min(Math.max((x - GX0) / STEP, 0), NX - 1.001), fz = Math.min(Math.max((z - GZ0) / STEP, 0), NZ - 1.001), i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j; return (M[j * NX + i] * (1 - u) + M[j * NX + i + 1] * u) * (1 - v) + (M[(j + 1) * NX + i] * (1 - u) + M[(j + 1) * NX + i + 1] * u) * v; };
  // eş düzey çizgisi (0.5)
  const P = new Map(), adj = new Map();
  const pt = (id, i, j, vert) => { if (P.has(id)) return; const a = M[j * NX + i], b = vert ? M[(j + 1) * NX + i] : M[j * NX + i + 1], t = (0.5 - a) / (b - a); P.set(id, vert ? [GX0 + i * STEP, GZ0 + (j + t) * STEP] : [GX0 + (i + t) * STEP, GZ0 + j * STEP]); };
  const link = (a, b) => { (adj.get(a) || adj.set(a, []).get(a)).push(b); (adj.get(b) || adj.set(b, []).get(b)).push(a); };
  for (let j = 0; j < NZ - 1; j++) for (let i = 0; i < NX - 1; i++) {
    const a = M[j * NX + i] > 0.5, b = M[j * NX + i + 1] > 0.5, c = M[(j + 1) * NX + i + 1] > 0.5, d = M[(j + 1) * NX + i] > 0.5;
    const idx = (a ? 1 : 0) | (b ? 2 : 0) | (c ? 4 : 0) | (d ? 8 : 0); if (idx === 0 || idx === 15) continue;
    const Tt = 2 * (j * NX + i), Bb = 2 * ((j + 1) * NX + i), Ll = 2 * (j * NX + i) + 1, Rr = 2 * (j * NX + i + 1) + 1;
    const E = { T: () => { pt(Tt, i, j, 0); return Tt; }, B: () => { pt(Bb, i, j + 1, 0); return Bb; }, L: () => { pt(Ll, i, j, 1); return Ll; }, R: () => { pt(Rr, i + 1, j, 1); return Rr; } };
    const cen = (M[j * NX + i] + M[j * NX + i + 1] + M[(j + 1) * NX + i + 1] + M[(j + 1) * NX + i]) / 4 > 0.5;
    const segs = { 1: ['LT'], 2: ['TR'], 3: ['LR'], 4: ['RB'], 5: cen ? ['TR', 'BL'] : ['LT', 'RB'], 6: ['TB'], 7: ['LB'], 8: ['BL'], 9: ['TB'], 10: cen ? ['LT', 'RB'] : ['TR', 'BL'], 11: ['RB'], 12: ['LR'], 13: ['TR'], 14: ['LT'] }[idx];
    for (const s of segs) link(E[s[0]](), E[s[1]]());
  }
  const used = new Set(), raw = [];
  const walk = (start) => { const line = [start]; used.add(start); let cur = start; for (;;) { const nx = (adj.get(cur) || []).find((q) => !used.has(q)); if (nx === undefined) break; used.add(nx); line.push(nx); cur = nx; } return line; };
  for (const [id, nb] of adj) if (nb.length === 1 && !used.has(id)) raw.push({ ids: walk(id), closed: false });
  for (const [id] of adj) if (!used.has(id)) raw.push({ ids: walk(id), closed: true });
  let total = 0, natLen = 0;
  const segH = new Map(), SC = 50; const allSeg = [];
  for (const { ids, closed } of raw) {
    let pts = ids.map((id) => P.get(id)); if (closed) pts.push(pts[0]);
    let len = 0; for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
    if (len < (closed ? 260 : 120)) continue; // küçük havuz/gölet: rıhtımsız kalır
    // 5 m'de yeniden örnekle
    const n = Math.max(4, Math.round(len / 5)), rs = []; let acc = 0, k = 0;
    for (let q = 0; q < (closed ? n : n + 1); q++) { const s = len * q / n; while (k < pts.length - 2 && acc + Math.hypot(pts[k + 1][0] - pts[k][0], pts[k + 1][1] - pts[k][1]) < s) { acc += Math.hypot(pts[k + 1][0] - pts[k][0], pts[k + 1][1] - pts[k][1]); k++; } const L = Math.hypot(pts[k + 1][0] - pts[k][0], pts[k + 1][1] - pts[k][1]) || 1, t = Math.min(1, (s - acc) / L); rs.push([pts[k][0] + (pts[k + 1][0] - pts[k][0]) * t, pts[k][1] + (pts[k + 1][1] - pts[k][1]) * t]); }
    for (let it = 0; it < 6; it++) { const c = rs.map((p) => p.slice()), m = rs.length; for (let i = 0; i < m; i++) { if (!closed && (i === 0 || i === m - 1)) continue; const a = c[(i - 1 + m) % m], b = c[(i + 1) % m]; rs[i] = [(a[0] + 2 * c[i][0] + b[0]) / 4, (a[1] + 2 * c[i][1] + b[1]) / 4]; } }
    // yön: su solda kalsın (dışa doğru normal = (-tz, tx))
    { const m = rs.length, i = m >> 1, a = rs[i - 1], b = rs[i + 1 < m ? i + 1 : 0]; const tx = b[0] - a[0], tz = b[1] - a[1], l = Math.hypot(tx, tz) || 1; if (mAt(rs[i][0] - tz / l * 6, rs[i][1] + tx / l * 6) > 0.5) rs.reverse(); }
    const m = rs.length, nat = new Uint8Array(m);
    for (let i = 0; i < m; i++) { const a = rs[(i - 1 + m) % m], b = rs[(i + 1) % m]; const tx = b[0] - a[0], tz = b[1] - a[1], l = Math.hypot(tx, tz) || 1; const kd = (dd) => { const ii = Math.round((rs[i][0] + tz / l * dd - GX0) / STEP), jj = Math.round((rs[i][1] - tx / l * dd - GZ0) / STEP); return ii >= 0 && jj >= 0 && ii < NX && jj < NZ ? KIND[jj * NX + ii] : 0; }; nat[i] = kd(12) === 2 && kd(26) === 2 ? 1 : 0; }
    // kısa parçaları komşusuna uydur (en az 60 m)
    for (let pass = 0; pass < 2; pass++) { let i = 0; while (i < m) { let j = i; while (j < m && nat[j] === nat[i]) j++; if (j - i < 12 && !(i === 0 && j === m)) { const v = nat[i] ? 0 : 1; for (let q = i; q < j; q++) nat[q] = v; } i = j; } }
    total += len; for (let i = 0; i < m; i++) if (nat[i]) natLen += 5;
    shoreOut.lines.push({ c: closed ? 1 : 0, p: rs.flat().map((v) => Math.round(v * 10) / 10), n: Array.from(nat).join('') });
    for (let i = 0; i < (closed ? m : m - 1); i++) { const a = rs[i], b = rs[(i + 1) % m]; allSeg.push([a[0], a[1], b[0], b[1], nat[i]]); }
  }
  // işaretli uzaklık
  const RNG = 45;
  for (const [ax, az, bx, bz, nt] of allSeg) {
    const dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz || 1e-9, l = Math.sqrt(l2), ox = -dz / l, oz = dx / l;
    const i0 = Math.max(0, Math.ceil((Math.min(ax, bx) - RNG - GX0) / STEP)), i1 = Math.min(NX - 1, Math.floor((Math.max(ax, bx) + RNG - GX0) / STEP)), j0 = Math.max(0, Math.ceil((Math.min(az, bz) - RNG - GZ0) / STEP)), j1 = Math.min(NZ - 1, Math.floor((Math.max(az, bz) + RNG - GZ0) / STEP));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const x = GX0 + i * STEP, z = GZ0 + j * STEP, t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / l2)), qx = x - ax - dx * t, qz = z - az - dz * t, d = Math.hypot(qx, qz); if (d > RNG) continue;
      const k = j * NX + i; if (d < Math.abs(SD[k])) { SD[k] = (qx * ox + qz * oz > 0 ? -1 : 1) * d; NAT[k] = nt; }
    }
  }
  // su/kara: rıhtımda kara QW metre denize uzar; taş dolguda kıyı çizgisinin kendisi
  let toLand = 0, toWater = 0;
  for (let k = 0; k < N; k++) { if (SD[k] > 90) continue; const land = NAT[k] ? SD[k] >= 0 : SD[k] >= -QW; if (land && KIND[k] === 1) { KIND[k] = 0; toLand++; } else if (!land && KIND[k] !== 1) { KIND[k] = 1; toWater++; } }
  for (let k = 0; k < N; k++) if (KIND[k] !== 1) H[k] = Math.max(1.25, H[k]);
  // iskeleler: bilinen vapur iskelelerine en yakın rıhtım noktası
  const [lo0, la0] = scene.origin, kx0 = Math.cos(la0 * Math.PI / 180) * 111320;
  const SITES = { 'EMİNÖNÜ': [41.0172, 28.9762], 'KARAKÖY': [41.0222, 28.9775], 'KABATAŞ': [41.0339, 28.9925], 'BEŞİKTAŞ': [41.0407, 29.0058], 'KASIMPAŞA': [41.0317, 28.9667], 'FENER': [41.0300, 28.9510], 'BALAT': [41.0345, 28.9470], 'EYÜP': [41.0470, 28.9350], 'SİRKECİ': [41.0158, 28.9800], 'ÜSKÜDAR': [41.0275, 29.0150] };
  for (const [name, [la, lo]] of Object.entries(SITES)) {
    const x = (lo - lo0) * kx0, z = -(la - la0) * 110574; let bd = 260, best = null;
    for (const L of shoreOut.lines) { const m = L.p.length / 2; for (let i = 2; i < m - 2; i++) { if (L.n[i] === '1') continue; const d = Math.hypot(L.p[2 * i] - x, L.p[2 * i + 1] - z); if (d < bd) { bd = d; const tx = L.p[2 * i + 2] - L.p[2 * i - 2], tz = L.p[2 * i + 3] - L.p[2 * i - 1], l = Math.hypot(tx, tz) || 1; best = { name, x: L.p[2 * i], z: L.p[2 * i + 1], ox: +(-tz / l).toFixed(3), oz: +(tx / l).toFixed(3) }; } } }
    if (best && !inScene(best.x, best.z) && !inZone(best.x, best.z)) best = null; // haritanın boş kalan karşı kıyısına iskele konmaz
    if (best) shoreOut.piers.push(best);
  }
  log(`kıyı: ${shoreOut.lines.length} çizgi, ${(total / 1000).toFixed(1)} km (taş dolgu ${(natLen / 1000).toFixed(1)} km), yol altı suydu ${roadWater} hücre, karaya ${toLand}, suya ${toWater}, iskele ${shoreOut.piers.map((p) => p.name).join(' ')}`);
}
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
const best = new Float32Array(N), tgt = new Float32Array(N);
const flatten = () => {
best.fill(0); tgt.fill(0);
for (const r of R) {
  if (r.bridge) continue;
  const half = r.w[1] / 2, inner = half + (r.w[0] >= 2 && r.w[0] <= 6 ? 4 : 1.5), outer = inner + 9; // kaldırım da düz zeminde kalsın
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
};
flatten();
// çukur/basamak onarımı: iki yol birbirini farklı kotta kesiyorsa (alt-üst geçit, yan yana yollar) zemin birinin kotunu alır,
// öbürü üstünde çukur ya da tümsek olur. Böyle yollar zeminden yeniden okunur, yumuşatılır, zemin tekrar düzlenir.
const mismatch = () => { let n = 0, pts = 0; for (const r of R) { if (r.bridge) continue; r.bad = false; for (let i = 2; i < r.pts.length - 2; i++) if (Math.abs(sampleG(...r.pts[i]) - r.h[i]) > 0.7) { r.bad = true; pts++; } if (r.bad) n++; } return [n, pts]; };
const mm0 = mismatch();
for (let it = 0; it < 4; it++) {
  for (const r of R) if (r.bad) { r.h = r.pts.map(([x, z]) => sampleG(x, z)); r.h = smooth(r, 9); }
  flatten(); if (mismatch()[1] === 0) break;
}
const mm1 = mismatch();
log(`çukur/basamak: ${mm0[0]} yol, ${mm0[1]} nokta → ${mm1[0]} yol, ${mm1[1]} nokta`);
// kıyı: kara en az 0.8 m, su tabanı -3 m (deniz yüzeyi y=0)
for (let k = 0; k < N; k++) {
  const d = SD[k];
  if (KIND[k] === 1) H[k] = d > 90 ? -4 : NAT[k] ? Math.max(-4, 0.2 * d - 0.05) : Math.max(-14, 1.25 + 3 * (d + QW));
  else { H[k] = Math.max(1.25, H[k]); if (NAT[k] && d < 6 && best[k] === 0) H[k] = Math.min(H[k], 0.05 + 0.2 * d); }
}
fs.writeFileSync(`${OUT}/shore.json`, JSON.stringify(shoreOut));
// köprüler (son zemine göre yeniden): karadaki uçlar zemine tam oturur; su üstünde güverte 4.5 m'de düz gider,
// kıyıdan 40 m'lik yumuşak rampayla çıkar (eskiden kıyıda basamak, parçalı köprülerde dalga yapıyordu)
const DECK = 4.5;
for (const r of R) if (r.bridge) {
  const n = r.h.length, wa = isWater(...r.pts[0]), wb = isWater(...r.pts[n - 1]), a = wa ? DECK : sampleG(...r.pts[0]), b = wb ? DECK : sampleG(...r.pts[n - 1]);
  const s = [0]; for (let i = 1; i < n; i++) s.push(s[i - 1] + Math.hypot(r.pts[i][0] - r.pts[i - 1][0], r.pts[i][1] - r.pts[i - 1][1]));
  const S = s[n - 1] || 1, wet = r.pts.some((p) => isWater(...p));
  for (let i = 0; i < n; i++) { const t = s[i] / S, lin = a + (b - a) * t; let f = Math.min(1, Math.min(wa ? 1e9 : s[i], wb ? 1e9 : S - s[i]) / 40); f = f * f * (3 - 2 * f); r.h[i] = lin + (wet ? Math.max(0, DECK - lin) * f : 0); }
}
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
let hidden = 0, roadHit = 0, roadArea = 0, seaDrop = 0;
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
  if (isWater(cx, cz)) { seaDrop++; continue; } // denizin içinde kalan bina
  if (Object.entries({ ayasofya: 45, sultanahmet: 50, yenicami: 34, rustempasa: 16, galata: 8, nusretiye: 14, ayatriada: 14, stantoine: 20 }).some(([id, rr]) => lmPos[id] && Math.hypot(cx - lmPos[id][0], cz - lmPos[id][1]) < rr)) { seaDrop++; continue; } // anıt modelinin içinde kalan sıradan bina
  const base = mn - 0.4; // temel zemine gömülür, havada kalmaz
  const eave = Math.max((mn + mx) / 2 + b.h, mx + 2.6); // yokuş üstü tarafta da en az bir kat
  blds.push({ b, cx, cz, base, eave });
}
log(`binalar: ${blds.length} (elle silinen ${dropped}, gizleme listesi ${hidden}, yol ortasında ${roadHit}, denizde/anıt içinde ${seaDrop}, ort. alan ${(roadArea / Math.max(1, roadHit)).toFixed(0)} m²)`);

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
      for (let it = 0; it < 8; it++) { const c = sh.slice(); for (let i = 1; i < n - 1; i++) sh[i] = (c[i - 1] + 2 * c[i] + c[i + 1]) / 4; } // yumuşak kayma: eksen dalgalanmasın
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
    // kenar dalgalanmasın: önce ±2 nokta en küçük, sonra yumuşat, sonra yine ölçülen boşluğu aşma
    const nn = raw.length, mn = raw.map((_, i) => { let m = 1e9; for (let k = Math.max(0, i - 3); k <= Math.min(nn - 1, i + 3); k++) m = Math.min(m, raw[k]); return m; });
    const hw = mn.slice(); for (let it = 0; it < 6; it++) { const c = hw.slice(); for (let i = 1; i < nn - 1; i++) hw[i] = (c[i - 1] + 2 * c[i] + c[i + 1]) / 4; }
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

// ---------- denetim: haritayı tara, bulunan hataları düzelt ----------
const RH = new Map(), RHC = 25; // yol noktaları: x, z, yarı genişlik, kod, köprü, yol sırası
R.forEach((r, ri) => r.pts.forEach(([x, z], i) => { const k = `${Math.floor(x / RHC)},${Math.floor(z / RHC)}`; (RH.get(k) || RH.set(k, []).get(k)).push(x, z, r.hw ? r.hw[i] : r.w[1] / 2, r.w[0], r.bridge ? 1 : 0, ri); }));
/** en yakın yol noktası: [uzaklık, yarı genişlik, kod, köprü] (yaklaşık: 5 m aralıklı noktalar) */
const roadNear = (x, z, max = 14) => { let bd = max, out = null; for (let a = Math.floor((x - max) / RHC); a <= Math.floor((x + max) / RHC); a++) for (let c = Math.floor((z - max) / RHC); c <= Math.floor((z + max) / RHC); c++) { const l = RH.get(`${a},${c}`); if (!l) continue; for (let i = 0; i < l.length; i += 6) { const d = Math.hypot(l[i] - x, l[i + 1] - z); if (d < bd) { bd = d; out = [d, l[i + 2], l[i + 3], l[i + 4], l[i], l[i + 1]]; } } } return out; };
const BH = new Map(), BHC = 50;
blds.forEach((o, bi) => { const e = o.b.p[0][0]; let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9; for (let i = 0; i < e.length; i += 2) { x0 = Math.min(x0, e[i]); x1 = Math.max(x1, e[i]); z0 = Math.min(z0, e[i + 1]); z1 = Math.max(z1, e[i + 1]); } for (let a = Math.floor(x0 / BHC); a <= Math.floor(x1 / BHC); a++) for (let c = Math.floor(z0 / BHC); c <= Math.floor(z1 / BHC); c++) { const k = `${a},${c}`; (BH.get(k) || BH.set(k, []).get(k)).push(bi); } });
const inBuilding = (x, z) => { const l = BH.get(`${Math.floor(x / BHC)},${Math.floor(z / BHC)}`); if (!l) return false; for (const bi of l) for (const poly of blds[bi].b.p) if (pip(poly[0], x, z)) return true; return false; };
const audit = {};
{ // yollar: su üstünde köprüsüz yol, dik yokuş, köprü ucu basamağı
  let wet = 0, steep = 0, step = 0, worst = 0; const steepList = [];
  for (const r of R) {
    if (r.bridge) { for (const e of [0, r.pts.length - 1]) { const d = Math.abs(r.h[e] - sampleF(...r.pts[e])); if (d > 0.6) { step++; } } continue; }
    let ws = 0;
    for (let i = 0; i < r.pts.length; i++) { if (isWater(...r.pts[i])) wet++; if (i) { const sl = Math.abs(sampleF(...r.pts[i]) - sampleF(...r.pts[i - 1])) / (Math.hypot(r.pts[i][0] - r.pts[i - 1][0], r.pts[i][1] - r.pts[i - 1][1]) || 1); if (sl > 0.3 && r.w[0] <= 7) { steep++; ws = Math.max(ws, sl); } worst = Math.max(worst, sl); } }
    if (ws > 0) steepList.push([+ws.toFixed(2), Math.round(r.pts[0][0]), Math.round(r.pts[0][1])]);
    if (ws > 0.45 && process.env.DBG) console.log('DIK', r.w[0], r.w[1], r.pts.length, r.pts.map(([x, z], i) => `${sampleF(x, z).toFixed(1)}/${r.h[i].toFixed(1)}/${Hraw(x, z).toFixed(1)}${KIND[Math.round((z - GZ0) / STEP) * NX + Math.round((x - GX0) / STEP)]}`).join(' ').slice(0, 700));
  }
  audit.roads = { suUstundeNokta: wet, dikNokta: steep, enDik: +worst.toFixed(2), kopruUcuBasamak: step, dikYollar: steepList.sort((a, b) => b[0] - a[0]).slice(0, 12) };
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
// lambalar: denizde / bina içinde olanlar çıkar, asfaltın üstünde kalanlar kaldırıma itilir
const lampsOut = []; { let sea = 0, inB = 0, moved = 0;
  for (const L of world.lamps) {
    let [x, z] = L; if (isWater(x, z)) { sea++; continue; }
    const nr = roadNear(x, z, 12);
    if (nr && !nr[3] && nr[0] < nr[1] + 0.5) { const d = nr[0] || 0.01, k = (nr[1] + 0.7) / d; x = nr[4] + (x - nr[4]) * k; z = nr[5] + (z - nr[5]) * k; moved++; const n2 = roadNear(x, z, 12); if (n2 && n2[0] < n2[1] + 0.3) { inB++; continue; } }
    if (inBuilding(x, z)) { inB++; continue; }
    lampsOut.push([Math.round(x * 10) / 10, Math.round(z * 10) / 10, ...L.slice(2)]);
  }
  audit.lambalar = { toplam: world.lamps.length, denizde: sea, binaIcindeVeyaYolda: inB, kaldirimaItilen: moved, kalan: lampsOut.length }; }
fs.writeFileSync(`${OUT}/roads.json`, JSON.stringify({ note: 'OSM (c) OpenStreetMap contributors, ODbL. v2: yol ekseni (köprülerde 5 m noktalar + güverte yüksekliği). [kod, genişlik, şerit, tekyön, köprü, xz..., (köprü y... | 0), (yarı genişlikler)]', codes: world.codes, ways: roadsOut, names, trams: world.trams, lamps: lampsOut }));
log(`roads.json ${(fs.statSync(`${OUT}/roads.json`).size / 1e6).toFixed(2)} MB`);

// ---------- ağaçlar ----------
{
  const T0 = [...scene.trees, ...bjk.trees]; let tSea = 0, tRoad = 0, tBld = 0;
  const T = T0.filter((t) => { if (isWater(t[0], t[1]) || (SD[Math.round((t[1] - GZ0) / STEP) * NX + Math.round((t[0] - GX0) / STEP)] ?? 99) < 1.5) { tSea++; return false; } const nr = roadNear(t[0], t[1], 12); if (nr && nr[0] < nr[1] + 0.6) { tRoad++; return false; } if (inBuilding(t[0], t[1])) { tBld++; return false; } return true; });
  audit.agaclar = { toplam: T0.length, denizdeVeyaRihtimda: tSea, yolda: tRoad, binaIcinde: tBld, kalan: T.length };
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

{ // binalar: anıt modelinin içinde kalan sıradan binalar, denizde kalanlar; başlangıç noktaları
  const PRm = { ayasofya: 45, sultanahmet: 50, yenicami: 34, rustempasa: 16, galata: 8, nusretiye: 14, ayatriada: 14, stantoine: 20 };
  const hit = {}; let seaB = 0;
  for (const o of blds) { if (isWater(o.cx, o.cz)) seaB++; for (const L of landmarks) { const r = PRm[L.id]; if (r && Math.hypot(o.cx - L.x, o.cz - L.z) < r) hit[L.id] = (hit[L.id] || 0) + 1; } }
  audit.binalar = { toplam: blds.length, denizde: seaB, anitIcinde: hit };
  audit.baslangic = spawns.spawns.map((sp) => { const nr = roadNear(sp.x, sp.z, 20); return [sp.id, nr ? +nr[0].toFixed(1) : 'yol yok', isWater(sp.x, sp.z) ? 'SU' : 'kara', inBuilding(sp.x, sp.z) ? 'BİNA' : 'açık']; });
}
console.log('DENETİM', JSON.stringify(audit, null, 1));
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
