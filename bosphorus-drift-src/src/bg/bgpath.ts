// Boğaz pisti (hayal ürünü, sıkıştırılmış Boğaz): Üsküdar (start, karşıda Kız Kulesi) → su üstünde iskele yolu →
// vapurdan vapura sıçrayarak Eminönü → Galata Köprüsü → Karaköy → Dolmabahçe → Beşiktaş → Ortaköy →
// Boğaz Köprüsü → Beylerbeyi yalıları → Üsküdar. Deniz hep sağda.
import { F_BRIDGE, F_RAMP, type TrackData } from '../trackpath';

export const F_SEA = 16;   // su üstünde (iskele, vapur, köprü ortası): altı deniz
export const F_WOOD = 32;  // ahşap zemin (iskele ve vapur güvertesi): yol örgüsünü dünya çizer
export const F_GAP = 64;   // sıçrama boşluğu: yol çizilmez
export const F_BIG = 128;  // Boğaz Köprüsü tabliyesi

export const SEA_Y = 0, QUAY_Y = 1.6;

/** dünya için işaret noktaları (pist örnek indeksleri) */
export interface BgMarks { pier: [number, number]; ferries: [number, number][]; galata: [number, number]; big: [number, number]; yali: [number, number]; kiz: { x: number; z: number } }
export const BG_MARKS: BgMarks = { pier: [0, 0], ferries: [], galata: [0, 0], big: [0, 0], yali: [0, 0], kiz: { x: 0, z: 0 } };

interface P { x: number; y: number; z: number; w: number; f: number }

export function buildBosphorusTrack(): TrackData {
  const pts: P[] = [];
  let x = 170, z = 250, y = QUAY_Y, phi = Math.PI / 2; // güneye bakar
  const start = { x, z, y, phi };
  const ease = (t: number) => t * t * (3 - 2 * t);
  const emit = (w: number, f: number) => pts.push({ x, y, z, w, f });
  /** lin: yükseklik doğrusal değişir (rampa ucunda fırlatır) */
  const straight = (L: number, dy = 0, w = 14, f = 0, lin = false) => {
    const x0 = x, z0 = z, y0 = y, n = Math.max(1, Math.round(L));
    for (let i = 1; i <= n; i++) { const t = i / n; x = x0 + Math.cos(phi) * L * t; z = z0 + Math.sin(phi) * L * t; y = y0 + dy * (lin ? t : ease(t)); emit(w, f); }
  };
  const arc = (r: number, deg: number, dy = 0, w = 14, f = 0) => {
    const a = (deg * Math.PI) / 180, s = Math.sign(a), L = Math.abs(a) * r, n = Math.max(2, Math.round(L));
    const cx = x - Math.sin(phi) * r * s, cz = z + Math.cos(phi) * r * s, p0 = phi, y0 = y;
    for (let i = 1; i <= n; i++) { const t = i / n; phi = p0 + a * t; x = cx + Math.sin(phi) * r * s; z = cz - Math.cos(phi) * r * s; y = y0 + dy * ease(t); emit(w, f); }
  };
  const mark: Record<string, number> = {};
  const M = (k: string) => (mark[k] = pts.length);
  const PIER = F_SEA | F_WOOD | F_BRIDGE, DECK = F_SEA | F_WOOD | F_BRIDGE, GAP = F_SEA | F_GAP | F_BRIDGE;
  emit(14, 0);
  // --- Üsküdar: Kız Kulesi'ne karşı bitiş düzlüğü ---
  straight(110, 0, 15);
  arc(38, 90, 0, 14);                          // batıya, denize
  // --- su üstünde iskele yolu: Kız Kulesi'nin önünden kıvrılır ---
  M('pier0');
  straight(16, 0, 11, PIER);
  arc(26, -50, 0, 11, PIER); arc(26, 100, 0, 11, PIER); arc(26, -50, 0, 11, PIER);
  straight(18, 0, 11, PIER);
  straight(14, 3.0, 11, PIER | F_RAMP, true);  // rampa
  M('pier1');
  // --- vapurdan vapura ---
  const ferry = (name: string, last = false) => {
    straight(12, 0, 12, GAP); y = 2.6; pts[pts.length - 1].y = y; for (let k = 2; k <= 12; k++) pts[pts.length - k].y = y;
    M(name + '0'); straight(30, 0, 12, DECK); straight(12, 2.8, 12, DECK | F_RAMP, true); M(name + '1');
    void last;
  };
  ferry('f1'); ferry('f2');
  straight(12, 0, 13, GAP); y = QUAY_Y; for (let k = 1; k <= 12; k++) pts[pts.length - k].y = y;
  // --- Eminönü rıhtımı ---
  straight(34, 0, 15);
  arc(34, 90, 0, 14);                          // kuzeye
  straight(26, 0, 14);
  // --- Galata Köprüsü (Haliç'in üstünde, hafif kambur) ---
  M('gk0');
  straight(50, 2.4, 14, F_BRIDGE | F_SEA); straight(50, -2.4, 14, F_BRIDGE | F_SEA);
  M('gk1');
  // --- Karaköy → Dolmabahçe → Beşiktaş kıyı yolu ---
  straight(40, 0, 14);
  arc(70, 22, 0, 14); arc(70, -22, 0, 14);
  straight(110, 0, 15);                        // Dolmabahçe önü
  arc(60, -20, 0, 14); arc(60, 20, 0, 14);
  straight(70, 0, 14);                         // Beşiktaş → Ortaköy
  // --- Boğaz Köprüsü: tırmanan viraj, uzun tabliye, inen viraj ---
  arc(46, 90, 9, 14, F_BRIDGE);
  M('big0');
  straight(60, 9, 16, F_BRIDGE | F_BIG | F_SEA);
  straight(150, 0, 16, F_BRIDGE | F_BIG | F_SEA);
  straight(60, -9, 16, F_BRIDGE | F_BIG | F_SEA);
  M('big1');
  arc(46, 90, -9, 14, F_BRIDGE);
  // --- Beylerbeyi yalıları: bahçelerden ve iskelelerden geçen dar kıvrımlar ---
  M('yali0');
  straight(40, 0, 12);
  arc(40, 28, 0, 11); arc(40, -56, 0, 11); arc(40, 28, 0, 11);
  straight(50, 0, 11);
  arc(36, -30, 0, 11); arc(36, 60, 0, 11); arc(36, -30, 0, 11);
  straight(40, 0, 12);
  M('yali1');
  // kapanış: başlangıca Hermite eğrisi
  const last = pts[pts.length - 1];
  const dx = start.x - last.x, dz = start.z - last.z, d = Math.hypot(dx, dz);
  const k = d * 1.05, t0x = Math.cos(phi) * k, t0z = Math.sin(phi) * k, t1x = Math.cos(start.phi) * k, t1z = Math.sin(start.phi) * k;
  const nH = Math.max(4, Math.round(d * 1.2));
  for (let i = 1; i < nH; i++) {
    const t = i / nH, t2 = t * t, t3 = t2 * t, h00 = 2 * t3 - 3 * t2 + 1, h10 = t3 - 2 * t2 + t, h01 = -2 * t3 + 3 * t2, h11 = t3 - t2;
    pts.push({ x: h00 * last.x + h10 * t0x + h01 * start.x + h11 * t1x, z: h00 * last.z + h10 * t0z + h01 * start.z + h11 * t1z, y: last.y + (start.y - last.y) * ease(t), w: 14, f: 0 });
  }
  // eşit aralıklı yeniden örnekleme
  const cum = [0];
  for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z));
  const total = cum[cum.length - 1] + Math.hypot(pts[0].x - pts[pts.length - 1].x, pts[0].z - pts[pts.length - 1].z);
  const n = Math.round(total), step = total / n;
  const idx = (pi: number) => Math.min(n - 1, Math.round(cum[Math.min(pi, cum.length - 1)] / step));
  // Kız Kulesi: iskele kıvrımının güney tarafında
  const pm = pts[Math.round((mark.pier0 + mark.pier1) / 2)];
  const T: TrackData = { n, length: total, x: new Float32Array(n), y: new Float32Array(n), z: new Float32Array(n), tx: new Float32Array(n), tz: new Float32Array(n), w: new Float32Array(n), bank: new Float32Array(n), flags: new Uint8Array(n), tower: { x: pm.x + 4, z: pm.z + 62, y0: 0, y1: 0, r: 0 } };
  let j = 0;
  for (let i = 0; i < n; i++) {
    const s = i * step;
    while (j < pts.length - 1 && cum[j + 1] < s) j++;
    const a = pts[j], b = pts[(j + 1) % pts.length], segL = (j + 1 < pts.length ? cum[j + 1] : total) - cum[j], t = segL > 0 ? (s - cum[j]) / segL : 0;
    T.x[i] = a.x + (b.x - a.x) * t; T.z[i] = a.z + (b.z - a.z) * t;
    // sıçrama kenarlarında yükseklik yumuşatılmaz: basamak korunur
    const gapEdge = (a.f ^ b.f) & F_GAP;
    T.y[i] = gapEdge ? (t < 0.5 ? a.y : b.y) : a.y + (b.y - a.y) * t;
    T.w[i] = a.w; T.flags[i] = t < 0.5 ? a.f : b.f;
  }
  const sm = (arr: Float32Array, r: number) => { const c = arr.slice(); for (let i = 0; i < n; i++) { let s = 0; for (let q = -r; q <= r; q++) s += c[(i + q + n) % n]; arr[i] = s / (2 * r + 1); } };
  sm(T.w, 4);
  for (let i = 0; i < n; i++) { const a = (i - 1 + n) % n, b = (i + 1) % n, ddx = T.x[b] - T.x[a], ddz = T.z[b] - T.z[a], l = Math.hypot(ddx, ddz) || 1; T.tx[i] = ddx / l; T.tz[i] = ddz / l; }
  BG_MARKS.pier = [idx(mark.pier0), idx(mark.pier1)];
  BG_MARKS.ferries = [[idx(mark.f10), idx(mark.f11)], [idx(mark.f20), idx(mark.f21)]];
  BG_MARKS.galata = [idx(mark.gk0), idx(mark.gk1)];
  BG_MARKS.big = [idx(mark.big0), idx(mark.big1)];
  BG_MARKS.yali = [idx(mark.yali0), idx(mark.yali1)];
  BG_MARKS.kiz = { x: T.tower.x, z: T.tower.z };
  return T;
}
