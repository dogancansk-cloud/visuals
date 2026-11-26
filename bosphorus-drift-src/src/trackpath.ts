// Galata pisti: kaplumbağa (turtle) komutlarıyla çizilen kapalı bir şerit.
// Çıktı: her 1 m'de bir örnek (konum, yön, genişlik, eğim, bayraklar).

export const F_BRIDGE = 1;   // havada (sarmal rampa, atlama) — zemin bu kısmı izlemez
export const F_TUNNEL = 2;   // Tünel bölümü (üstü kapalı)
export const F_SPIRAL = 4;   // Galata Kulesi sarmalı
export const F_RAMP = 8;     // ahşap atlama rampası (aşağı iniş)

export interface TrackData {
  n: number; length: number;
  x: Float32Array; y: Float32Array; z: Float32Array;
  tx: Float32Array; tz: Float32Array; // yatay birim teğet
  w: Float32Array; bank: Float32Array; flags: Uint8Array;
  tower: { x: number; z: number; y0: number; y1: number };
}

interface P { x: number; y: number; z: number; w: number; bank: number; f: number }

export function buildTrack(): TrackData {
  const pts: P[] = [];
  let x = -60, z = 120, y = 1, phi = 0; // doğuya bakarak, Karaköy rıhtımı
  const start = { x, z, y, phi };
  const ease = (t: number, m: string) => m === 'lin' ? t : m === 'in' ? t * t : m === 'out' ? 1 - (1 - t) * (1 - t) : t * t * (3 - 2 * t);
  const emit = (w: number, f: number, bank: number) => pts.push({ x, y, z, w, bank, f });
  const straight = (L: number, dy = 0, w = 13, f = 0, m = 'smooth') => {
    const x0 = x, z0 = z, y0 = y, n = Math.max(1, Math.round(L));
    for (let i = 1; i <= n; i++) { const t = i / n; x = x0 + Math.cos(phi) * L * t; z = z0 + Math.sin(phi) * L * t; y = y0 + dy * ease(t, m); emit(w, f, 0); }
  };
  // deg < 0: sola (phi azalır), deg > 0: sağa
  const tower = { x: 0, z: 0, y0: 0, y1: 0 };
  const arc = (r: number, deg: number, dy = 0, w = 13, f = 0, bank = 0, m = 'smooth') => {
    const a = (deg * Math.PI) / 180, s = Math.sign(a), L = Math.abs(a) * r, n = Math.max(2, Math.round(L));
    const cx = x - Math.sin(phi) * r * s, cz = z + Math.cos(phi) * r * s; // merkez
    if (f & F_SPIRAL) { tower.x = cx; tower.z = cz; tower.y0 = y; tower.y1 = y + dy; }
    const p0 = phi, y0 = y;
    for (let i = 1; i <= n; i++) {
      const t = i / n; phi = p0 + a * t;
      x = cx + Math.sin(phi) * r * s; z = cz - Math.cos(phi) * r * s; y = y0 + dy * ease(t, m);
      emit(w, f, bank * -s);
    }
  };

  emit(13, 0, 0);
  straight(150);                       // rıhtım düzlüğü (start/finish)
  arc(22, -90);                        // sola, kuzeye
  straight(18, 1.2, 13, 0, 'in');      // Kamondo yokuşu
  arc(40, 32, 1.4, 13, 0, 0, 'lin');
  arc(40, -32, 1.4, 13, 0, 0, 'lin');
  straight(14, 0.9, 13, 0, 'out');
  arc(20, -90, 0.5);                   // batıya
  straight(14);
  arc(20, 90);                         // kuzeye, kuleye
  straight(8, 0, 12);
  arc(24, -450, 13, 11, F_SPIRAL | F_BRIDGE, 0.1, 'lin'); // Galata Kulesi sarmalı, 1¼ tur
  straight(26, 0.6, 11, F_BRIDGE, 'in');
  straight(9, 1.1, 11, F_BRIDGE, 'lin'); // sıçrama dudağı
  straight(34, -16.4, 12, F_BRIDGE | F_RAMP, 'smooth');
  straight(66, 0, 13);
  arc(22, -90);                        // güneye
  arc(34, -40, -0.6);
  arc(34, 80, -0.9);
  arc(34, -40, -0.6);
  { const L = start.z - 28 - z - 10; straight(L * 0.12, 0, 12); straight(L * 0.88, -0.3, 10, F_TUNNEL); straight(10, 0, 12); }
  arc(28, -90);                        // doğuya
  straight(start.x - x, start.y - y, 13, 0, 'smooth');
  // Kapanış: başlangıca Hermite eğrisiyle bağla
  const last = pts[pts.length - 1];
  const dx = start.x - last.x, dz = start.z - last.z, d = Math.hypot(dx, dz);
  const k = d * 1.1, t0x = Math.cos(phi) * k, t0z = Math.sin(phi) * k, t1x = Math.cos(start.phi) * k, t1z = Math.sin(start.phi) * k;
  const nH = Math.round(d * 1.3);
  for (let i = 1; i < nH; i++) {
    const t = i / nH, t2 = t * t, t3 = t2 * t;
    const h00 = 2 * t3 - 3 * t2 + 1, h10 = t3 - 2 * t2 + t, h01 = -2 * t3 + 3 * t2, h11 = t3 - t2;
    pts.push({ x: h00 * last.x + h10 * t0x + h01 * start.x + h11 * t1x, z: h00 * last.z + h10 * t0z + h01 * start.z + h11 * t1z,
      y: last.y + (start.y - last.y) * (t2 * (3 - 2 * t)), w: 13, bank: 0, f: 0 });
  }

  // eşit aralıklı (1 m) yeniden örnekleme
  const cum = [0];
  for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z));
  const closeLen = Math.hypot(pts[0].x - pts[pts.length - 1].x, pts[0].z - pts[pts.length - 1].z);
  const total = cum[cum.length - 1] + closeLen;
  const n = Math.round(total);
  const step = total / n;
  const T: TrackData = { n, length: total, x: new Float32Array(n), y: new Float32Array(n), z: new Float32Array(n), tx: new Float32Array(n), tz: new Float32Array(n), w: new Float32Array(n), bank: new Float32Array(n), flags: new Uint8Array(n), tower };
  let j = 0;
  for (let i = 0; i < n; i++) {
    const s = i * step;
    while (j < pts.length - 1 && cum[j + 1] < s) j++;
    const a = pts[j], b = pts[(j + 1) % pts.length], segL = (j + 1 < pts.length ? cum[j + 1] : total) - cum[j];
    const t = segL > 0 ? (s - cum[j]) / segL : 0;
    T.x[i] = a.x + (b.x - a.x) * t; T.y[i] = a.y + (b.y - a.y) * t; T.z[i] = a.z + (b.z - a.z) * t;
    T.w[i] = a.w; T.bank[i] = a.bank; T.flags[i] = t < 0.5 ? a.f : b.f;
  }
  // genişlik ve eğim yumuşatma
  const smooth = (arr: Float32Array, r: number) => { const c = arr.slice(); for (let i = 0; i < n; i++) { let s = 0; for (let k2 = -r; k2 <= r; k2++) s += c[(i + k2 + n) % n]; arr[i] = s / (2 * r + 1); } };
  smooth(T.w, 6); smooth(T.bank, 8);
  for (let i = 0; i < n; i++) {
    const a = (i - 1 + n) % n, b = (i + 1) % n;
    const ddx = T.x[b] - T.x[a], ddz = T.z[b] - T.z[a], l = Math.hypot(ddx, ddz) || 1;
    T.tx[i] = ddx / l; T.tz[i] = ddz / l;
  }
  return T;
}
