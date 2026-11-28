// Yol maskesi: her zemin karosu için yollar bir tuvale çizilir (R = asfalt, G = kaldırım, B = yaya taşı).
// Tuval çizgileri yuvarlak uçlu ve birleşimli olduğundan kavşaklar, virajlar ve genişlik değişimleri kendiliğinden temiz birleşir.
import * as THREE from 'three';
import type { Roads, Way } from './roads';
import type { MaskPainter } from './ground';

const WALK = 2.3; // kaldırım genişliği (m)

export function makeRoadPainter(R: Roads, maxAniso: number): MaskPainter {
  // karo başına yol listesi için kaba ızgara
  const CELL = 160, grid = new Map<number, number[]>();
  const key = (i: number, j: number) => i * 100003 + j;
  for (const w of R.ways) {
    if (w.bridge) continue; // köprüler ayrı geometri (güverte)
    let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9; const P = w.pts;
    for (let k = 0; k < P.length; k += 2) { x0 = Math.min(x0, P[k]); x1 = Math.max(x1, P[k]); z0 = Math.min(z0, P[k + 1]); z1 = Math.max(z1, P[k + 1]); }
    const m = w.width / 2 + WALK + 2;
    for (let i = Math.floor((x0 - m) / CELL); i <= Math.floor((x1 + m) / CELL); i++) for (let j = Math.floor((z0 - m) / CELL); j <= Math.floor((z1 + m) / CELL); j++) { const k = key(i, j); let l = grid.get(k); if (!l) grid.set(k, (l = [])); l.push(w.i); }
  }
  const stroke = (c: CanvasRenderingContext2D, w: Way, extra: number, sx: number, x0: number, z0: number, onlyFull: boolean) => {
    const P = w.pts, n = P.length / 2;
    if (!w.hw) { // sabit genişlik: tek çizgi
      c.lineWidth = (w.width + 2 * extra) * sx; c.beginPath();
      for (let k = 0; k < n; k++) { const x = (P[2 * k] - x0) * sx, y = (P[2 * k + 1] - z0) * sx; if (k) c.lineTo(x, y); else c.moveTo(x, y); }
      c.stroke(); return;
    }
    // binalar arasında daralan sokak: iki kenarı ayrı ayrı izleyen tek çokgen (kenarlar pürüzsüz), uçlarda yuvarlak kapak
    const full = w.width / 2, L: number[] = [], Rt: number[] = [];
    const flush = () => {
      if (L.length >= 4) { c.beginPath(); c.moveTo(L[0], L[1]); for (let i = 2; i < L.length; i += 2) c.lineTo(L[i], L[i + 1]); for (let i = Rt.length - 2; i >= 0; i -= 2) c.lineTo(Rt[i], Rt[i + 1]); c.closePath(); c.fill(); }
      L.length = 0; Rt.length = 0;
    };
    for (let k = 0; k < n; k++) {
      const k0 = Math.max(0, k - 1), k1 = Math.min(n - 1, k + 1); let dx = P[2 * k1] - P[2 * k0], dz = P[2 * k1 + 1] - P[2 * k0 + 1]; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
      const narrow = w.hw[k] < full - 0.3; if (onlyFull && narrow) { flush(); continue; } // sıkışık yerde kaldırıma yer yok
      const h = (w.hw[k] + extra) * sx, x = (P[2 * k] - x0) * sx, y = (P[2 * k + 1] - z0) * sx;
      L.push(x - dz * h, y + dx * h); Rt.push(x + dz * h, y - dx * h);
      if (k === 0 || k === n - 1) { c.beginPath(); c.arc(x, y, h, 0, Math.PI * 2); c.fill(); }
    }
    flush();
  };
  return (x0, z0, size, res) => {
    const cv = document.createElement('canvas'); cv.width = cv.height = res;
    const c = cv.getContext('2d')!; const sx = res / size;
    c.fillStyle = '#000'; c.fillRect(0, 0, res, res);
    c.lineCap = c.lineJoin = 'round'; c.globalCompositeOperation = 'lighter';
    const seen = new Set<number>(), list: Way[] = [];
    for (let i = Math.floor(x0 / CELL); i <= Math.floor((x0 + size) / CELL); i++) for (let j = Math.floor(z0 / CELL); j <= Math.floor((z0 + size) / CELL); j++) for (const wi of grid.get(key(i, j)) || []) if (!seen.has(wi)) { seen.add(wi); list.push(R.ways[wi]); }
    // kaldırım (yeşil kanal): cadde ve sokakların iki yanında
    c.strokeStyle = c.fillStyle = '#00ff00';
    for (const w of list) if (w.code >= 2 && w.code <= 6) stroke(c, w, WALK, sx, x0, z0, true);
    // yaya yolları (mavi kanal)
    c.strokeStyle = c.fillStyle = '#0000ff';
    for (const w of list) if (w.code === 7) stroke(c, w, 0, sx, x0, z0, false);
    // asfalt (kırmızı kanal)
    c.strokeStyle = c.fillStyle = '#ff0000';
    for (const w of list) if (w.code !== 7) stroke(c, w, 0, sx, x0, z0, false);
    const t = new THREE.CanvasTexture(cv);
    t.flipY = false; t.colorSpace = THREE.NoColorSpace; t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter;
    t.anisotropy = res >= 512 ? maxAniso : 2; // yol kenarı yatık açıda da keskin kalsın
    return t;
  };
}
