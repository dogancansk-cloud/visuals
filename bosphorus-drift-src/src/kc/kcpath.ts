// Kapalıçarşı pisti: çarşının içinde kapalı bir döngü (hayal ürünü, gerçek çarşının yerine ve ölçeğine oturur).
// Kalpakçılar caddesi (start) → Sandal Bedesteni salonu → kuzey sokakları → Cevahir Bedesteni salonu (sıçrama) → batı kıvrımları → Kalpakçılar.
import { F_BRIDGE, F_RAMP, type TrackData } from '../trackpath';

export const F_HALL = 16; // bedesten salonu (geniş, kubbeli)
export const F_GATE = 32; // çarşı kapısı / kemerli geçit
export const F_HAN = 64;  // han avlusu (açık hava)
export const F_GAL = 128; // han üst kat galerisi (yükseltilmiş)

export const KC_ORIGIN = { x: -1020, z: 1350 }; // yerel (0,0) → harita

interface P { x: number; y: number; z: number; w: number; f: number }

export function buildBazaarTrack(): TrackData {
  const pts: P[] = [];
  let x = 40, z = 160, y = 2, phi = 0;
  const start = { x, z, y, phi };
  let lastC = { x: 0, z: 0, y: 0 }, fountain = lastC;
  const ease = (t: number) => t * t * (3 - 2 * t);
  const emit = (w: number, f: number) => pts.push({ x, y, z, w, f });
  const straight = (L: number, dy = 0, w = 11, f = 0) => {
    const x0 = x, z0 = z, y0 = y, n = Math.max(1, Math.round(L));
    for (let i = 1; i <= n; i++) { const t = i / n; x = x0 + Math.cos(phi) * L * t; z = z0 + Math.sin(phi) * L * t; y = y0 + dy * ease(t); emit(w, f); }
  };
  const arc = (r: number, deg: number, dy = 0, w = 11, f = 0) => {
    const a = (deg * Math.PI) / 180, s = Math.sign(a), L = Math.abs(a) * r, n = Math.max(2, Math.round(L));
    const cx = x - Math.sin(phi) * r * s, cz = z + Math.cos(phi) * r * s, p0 = phi, y0 = y; lastC = { x: cx, z: cz, y };
    for (let i = 1; i <= n; i++) { const t = i / n; phi = p0 + a * t; x = cx + Math.sin(phi) * r * s; z = cz - Math.cos(phi) * r * s; y = y0 + dy * ease(t); emit(w, f); }
  };
  emit(12, 0);
  straight(228, 0, 12);                       // Kalpakçılar caddesi
  arc(22, -90, 0.5);                          // kuzeye
  straight(12, 0.3);
  straight(50, 0.5, 15, F_HALL);              // Sandal Bedesteni
  straight(14, 0.3);
  straight(24, 0.6);
  straight(8, 0, 11, F_GATE);                 // çarşıdan hana kapı
  straight(14, 0, 12, F_HAN);                 // han avlusu girişi (doğu kanadı)
  straight(22, 2.6, 12, F_HAN | F_BRIDGE);    // galeri rampası
  arc(18, -90, 2.4, 12, F_HAN | F_BRIDGE);
  straight(30, 1.4, 11, F_HAN | F_GAL | F_BRIDGE); // üst kat galerisi (kuzey)
  straight(6, 0.6, 11, F_HAN | F_GAL | F_BRIDGE | F_RAMP);
  straight(16, -7.0, 12, F_HAN | F_BRIDGE);   // galeriden avluya sıçrama
  straight(8, 0, 12, F_HAN);
  arc(20, -90, 0, 12, F_HAN); fountain = lastC; // şadırvanın çevresinden güneye
  straight(18, 0, 12, F_HAN);
  arc(16, 35, 0, 12, F_HAN); arc(16, -35, 0, 12, F_HAN); // şadırvan önünde kıvrım
  straight(10, 0, 12, F_HAN);
  straight(8, 0, 11, F_GATE);                 // handan çarşıya
  straight(10, -0.3);
  arc(18, 90, -0.3);                          // batıya
  straight(96, -0.6);                         // Kuyumcular sokağı
  straight(6, 0, 11, F_GATE);
  straight(48, 0, 16, F_HALL);                // Cevahir Bedesteni
  straight(6, 0, 11, F_GATE);
  straight(46, -0.4);
  arc(30, -45, -0.3); straight(44, -0.4); arc(30, 45, -0.3);   // güneybatıya kıvrım
  straight(118, -0.5);
  arc(20, -180, -0.4);                        // firkete, doğuya
  straight(106, -0.2);
  arc(26, 40, 0); arc(26, -40, 0);            // S
  straight(30, 0);
  // kapanış: başlangıca Hermite eğrisi
  const last = pts[pts.length - 1];
  const dx = start.x - last.x, dz = start.z - last.z, d = Math.hypot(dx, dz);
  const k = d * 1.1, t0x = Math.cos(phi) * k, t0z = Math.sin(phi) * k, t1x = Math.cos(start.phi) * k, t1z = Math.sin(start.phi) * k;
  const nH = Math.max(4, Math.round(d * 1.3));
  for (let i = 1; i < nH; i++) {
    const t = i / nH, t2 = t * t, t3 = t2 * t, h00 = 2 * t3 - 3 * t2 + 1, h10 = t3 - 2 * t2 + t, h01 = -2 * t3 + 3 * t2, h11 = t3 - t2;
    pts.push({ x: h00 * last.x + h10 * t0x + h01 * start.x + h11 * t1x, z: h00 * last.z + h10 * t0z + h01 * start.z + h11 * t1z, y: last.y + (start.y - last.y) * ease(t), w: 11, f: 0 });
  }
  // eşit aralıklı yeniden örnekleme
  const cum = [0];
  for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z));
  const total = cum[cum.length - 1] + Math.hypot(pts[0].x - pts[pts.length - 1].x, pts[0].z - pts[pts.length - 1].z);
  const n = Math.round(total), step = total / n;
  const T: TrackData = { n, length: total, x: new Float32Array(n), y: new Float32Array(n), z: new Float32Array(n), tx: new Float32Array(n), tz: new Float32Array(n), w: new Float32Array(n), bank: new Float32Array(n), flags: new Uint8Array(n), tower: { x: fountain.x + KC_ORIGIN.x, z: fountain.z + KC_ORIGIN.z, y0: fountain.y, y1: 0, r: 0 } }; // KC: tower = şadırvan merkezi
  let j = 0;
  for (let i = 0; i < n; i++) {
    const s = i * step;
    while (j < pts.length - 1 && cum[j + 1] < s) j++;
    const a = pts[j], b = pts[(j + 1) % pts.length], segL = (j + 1 < pts.length ? cum[j + 1] : total) - cum[j], t = segL > 0 ? (s - cum[j]) / segL : 0;
    T.x[i] = a.x + (b.x - a.x) * t + KC_ORIGIN.x; T.z[i] = a.z + (b.z - a.z) * t + KC_ORIGIN.z; T.y[i] = a.y + (b.y - a.y) * t;
    T.w[i] = a.w; T.flags[i] = t < 0.5 ? a.f : b.f;
  }
  const sm = (arr: Float32Array, r: number) => { const c = arr.slice(); for (let i = 0; i < n; i++) { let s = 0; for (let q = -r; q <= r; q++) s += c[(i + q + n) % n]; arr[i] = s / (2 * r + 1); } };
  sm(T.w, 5);
  for (let i = 0; i < n; i++) { const a = (i - 1 + n) % n, b = (i + 1) % n, ddx = T.x[b] - T.x[a], ddz = T.z[b] - T.z[a], l = Math.hypot(ddx, ddz) || 1; T.tx[i] = ddx / l; T.tz[i] = ddz / l; }
  // salon ortası: kart seçim kaidesi ve başlık kamerası için
  return T;
}
