// Galata pisti: hayal ürünü bir şerit, gerçek Galata–Karaköy'ün üstüne yerleşir.
// Karaköy rıhtımı → yokuş (Yüksek Kaldırım hizası) → Galata Kulesi sarmalı → sıçrama → batı inişi → Tünel → rıhtım.
// Koordinatlar haritanın metre sistemi: +x doğu, +z güney. Çıktı: her 1 m'de bir örnek.

export const F_BRIDGE = 1;   // havada (sarmal, çıkış, rampa) — zemin bu kısmı izlemez
export const F_TUNNEL = 2;   // Tünel
export const F_SPIRAL = 4;   // kule sarmalı
export const F_RAMP = 8;     // sıçrama sonrası iniş rampası

export interface TrackData {
  n: number; length: number;
  x: Float32Array; y: Float32Array; z: Float32Array;
  tx: Float32Array; tz: Float32Array;
  w: Float32Array; bank: Float32Array; flags: Uint8Array;
  tower: { x: number; z: number; y0: number; y1: number; r: number };
}

export const TOWER = { x: -402, z: -236 };
const SPIRAL_R = 23, SPIRAL_TURNS = 1.25, SPIRAL_RISE = 13;

interface CP { x: number; z: number; w: number; f: number; y?: number }

export function buildTrack(H: (x: number, z: number) => number): TrackData {
  const cps: CP[] = [];
  const add = (pts: number[][], w = 14, f = 0) => { for (const [x, z] of pts) cps.push({ x, z, w, f }); };
  // rıhtım düzlüğü (başlangıç), doğuya
  add([[-500, 166], [-472, 166], [-446, 165]], 15);
  // sola dönüş ve yokuş
  add([[-414, 160], [-394, 142], [-386, 116], [-385, 70], [-386, 20], [-388, -40], [-387, -100], [-384, -160], [-380, -196], [-379, -214]], 14);
  // sarmal: doğu tarafından kuzeye girer, saat yönünün tersine (yukarıdan) 1¼ tur
  const spiralStart = cps.length;
  const nS = Math.round((SPIRAL_TURNS * 2 * Math.PI * SPIRAL_R) / 3);
  for (let k = 0; k <= nS; k++) {
    const a = -(k / nS) * SPIRAL_TURNS * 2 * Math.PI;
    cps.push({ x: TOWER.x + Math.cos(a) * SPIRAL_R, z: TOWER.z + Math.sin(a) * SPIRAL_R, w: 12, f: F_SPIRAL | F_BRIDGE });
  }
  const spiralEnd = cps.length - 1;
  // çıkış: batıya, havada; dudak ve iniş rampası
  add([[-414, -259], [-428, -259], [-442, -259]], 12, F_BRIDGE);
  add([[-458, -259], [-474, -259]], 12, F_BRIDGE | F_RAMP);
  // batı inişi
  add([[-494, -259], [-516, -257], [-536, -249], [-552, -232], [-560, -208], [-563, -178], [-572, -146], [-590, -116], [-603, -84], [-602, -50], [-590, -20], [-586, 12], [-596, 44]], 14);
  add([[-606, 74], [-608, 100], [-606, 124]], 12, F_TUNNEL);
  add([[-598, 146], [-582, 160], [-556, 166], [-528, 166]], 15);

  // ---- kapalı Catmull-Rom (merkezcil) ----
  const n0 = cps.length, dense: CP[] = [];
  for (let i = 0; i < n0; i++) {
    const p0 = cps[(i - 1 + n0) % n0], p1 = cps[i], p2 = cps[(i + 1) % n0], p3 = cps[(i + 2) % n0];
    const d = (a: CP, b: CP) => Math.pow(Math.hypot(b.x - a.x, b.z - a.z), 0.5) || 1e-3;
    const t1 = d(p0, p1), t2 = t1 + d(p1, p2), t3 = t2 + d(p2, p3);
    const seg = Math.max(2, Math.ceil(Math.hypot(p2.x - p1.x, p2.z - p1.z) / 0.5));
    for (let s = 0; s < seg; s++) {
      const t = t1 + (t2 - t1) * (s / seg);
      const L = (a: number, b: number, ta: number, tb: number) => (ta === tb ? a : ((tb - t) * a + (t - ta) * b) / (tb - ta));
      const ax = L(p0.x, p1.x, 0, t1), az = L(p0.z, p1.z, 0, t1), bx = L(p1.x, p2.x, t1, t2), bz = L(p1.z, p2.z, t1, t2), cx = L(p2.x, p3.x, t2, t3), cz = L(p2.z, p3.z, t2, t3);
      const dx = L(ax, bx, 0, t2), dz = L(az, bz, 0, t2), ex = L(bx, cx, t1, t3), ez = L(bz, cz, t1, t3);
      const u = s / seg;
      dense.push({ x: L(dx, ex, t1, t2), z: L(dz, ez, t1, t2), w: p1.w + (p2.w - p1.w) * u, f: u < 0.5 ? p1.f : p2.f });
    }
  }
  // eşit aralıklı yeniden örnekleme (1 m)
  const cum = [0];
  for (let i = 1; i < dense.length; i++) cum.push(cum[i - 1] + Math.hypot(dense[i].x - dense[i - 1].x, dense[i].z - dense[i - 1].z));
  const total = cum[cum.length - 1] + Math.hypot(dense[0].x - dense[dense.length - 1].x, dense[0].z - dense[dense.length - 1].z);
  const n = Math.round(total), step = total / n;
  const T: TrackData = { n, length: total, x: new Float32Array(n), y: new Float32Array(n), z: new Float32Array(n), tx: new Float32Array(n), tz: new Float32Array(n), w: new Float32Array(n), bank: new Float32Array(n), flags: new Uint8Array(n), tower: { x: TOWER.x, z: TOWER.z, y0: 0, y1: 0, r: SPIRAL_R } };
  let j = 0;
  for (let i = 0; i < n; i++) {
    const s = i * step;
    while (j < dense.length - 1 && cum[j + 1] < s) j++;
    const a = dense[j], b = dense[(j + 1) % dense.length], segL = (j + 1 < dense.length ? cum[j + 1] : total) - cum[j];
    const t = segL > 0 ? (s - cum[j]) / segL : 0;
    T.x[i] = a.x + (b.x - a.x) * t; T.z[i] = a.z + (b.z - a.z) * t; T.w[i] = a.w + (b.w - a.w) * t; T.flags[i] = t < 0.5 ? a.f : b.f;
  }
  for (let i = 0; i < n; i++) {
    const a = (i - 1 + n) % n, b = (i + 1) % n, ddx = T.x[b] - T.x[a], ddz = T.z[b] - T.z[a], l = Math.hypot(ddx, ddz) || 1;
    T.tx[i] = ddx / l; T.tz[i] = ddz / l;
  }
  // ---- yükseklik ----
  // zemin parçaları: araziyi izle (yumuşatılmış), eğim en fazla %13
  const ground = new Float32Array(n);
  for (let i = 0; i < n; i++) ground[i] = H(T.x[i], T.z[i]) + 0.35;
  const sm = gauss(ground, 14);
  // sarmal ve çıkış: kaba aralıklar
  let s0 = -1, s1 = -1, r0 = -1, r1 = -1;
  for (let i = 0; i < n; i++) {
    const f = T.flags[i];
    if (f & F_SPIRAL) { if (s0 < 0) s0 = i; s1 = i; }
    if (f & F_RAMP) { if (r0 < 0) r0 = i; r1 = i; }
  }
  void spiralStart; void spiralEnd;
  // zemin profili: eğim sınırı (%13) ve yumuşatma, sonra havadaki parçalar üstüne yazılır
  for (let i = 0; i < n; i++) T.y[i] = sm[i];
  for (let pass = 0; pass < 4; pass++) for (let k = 0; k < 2 * n; k++) {
    const i = k % n, p = (i - 1 + n) % n, g = T.y[i] - T.y[p];
    if (Math.abs(g) > 0.13) T.y[i] = T.y[p] + Math.sign(g) * 0.13;
  }
  T.y.set(gauss(T.y, 3));
  const yIn = T.y[s0];
  T.tower.y0 = Math.min(H(TOWER.x, TOWER.z), yIn - 0.4); T.tower.y1 = yIn + SPIRAL_RISE;
  for (let i = s0; i <= s1; i++) T.y[i] = yIn + SPIRAL_RISE * ((i - s0) / (s1 - s0));
  const yTop = yIn + SPIRAL_RISE, lip = r0 - 1;
  for (let i = s1 + 1; i <= lip; i++) { const t = (i - s1) / (lip - s1); T.y[i] = yTop + 0.6 * t + 1.6 * Math.max(0, (t - 0.7) / 0.3) ** 2; }
  const land = Math.min(n - 1, r1 + 8), yLand = T.y[land], yLip = T.y[lip];
  for (let i = r0; i <= land; i++) { const t = (i - lip) / (land - lip); T.y[i] = yLip + (yLand - yLip) * (1 - (1 - t) * (1 - t)); }
  // virajlarda hafif yatış
  for (let i = 0; i < n; i++) {
    const a = (i - 6 + n) % n, b = (i + 6) % n;
    const da = Math.atan2(T.tz[b], T.tx[b]) - Math.atan2(T.tz[a], T.tx[a]);
    const turn = Math.atan2(Math.sin(da), Math.cos(da)) / 12; // rad/m
    T.bank[i] = Math.max(-0.08, Math.min(0.08, -turn * 3.5));
  }
  const bb = gauss(T.bank, 8); T.bank.set(bb);
  smooth(T.w, 6);
  return T;
}

function gauss(a: Float32Array, sig: number) {
  const n = a.length, out = new Float32Array(n), r = Math.ceil(sig * 2.5), w: number[] = [];
  let ws = 0; for (let k = -r; k <= r; k++) { const v = Math.exp(-(k * k) / (2 * sig * sig)); w.push(v); ws += v; }
  for (let i = 0; i < n; i++) { let s = 0; for (let k = -r; k <= r; k++) s += a[(i + k + n) % n] * w[k + r]; out[i] = s / ws; }
  return out;
}
function smooth(a: Float32Array, r: number) { const c = a.slice(), n = a.length; for (let i = 0; i < n; i++) { let s = 0; for (let k = -r; k <= r; k++) s += c[(i + k + n) % n]; a[i] = s / (2 * r + 1); } }
