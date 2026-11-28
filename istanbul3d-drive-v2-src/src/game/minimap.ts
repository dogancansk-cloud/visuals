// Küçük harita: yollar bir kez çizilir; her karede arabanın yönüne göre döndürülür. Rota ve hedef üstüne çizilir.
import type { Roads } from '../world/roads';
import type { Ground } from '../world/ground';

const MPP = 4; // metre / piksel (arka plan)
export class Minimap {
  private bg: HTMLCanvasElement; private ctx: CanvasRenderingContext2D; private x0: number; private z0: number;
  constructor(private cv: HTMLCanvasElement, R: Roads, G: Ground) {
    const [bx0, bz0, bx1, bz1] = G.bounds; this.x0 = bx0; this.z0 = bz0;
    const W = Math.ceil((bx1 - bx0) / MPP), H = Math.ceil((bz1 - bz0) / MPP);
    this.bg = document.createElement('canvas'); this.bg.width = W; this.bg.height = H;
    const g = this.bg.getContext('2d')!;
    // su / kara
    const img = g.createImageData(W, H);
    for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
      const k = G.kindAt(bx0 + i * MPP, bz0 + j * MPP), o = (j * W + i) * 4;
      const c = k === 1 ? [38, 70, 92] : k === 2 ? [70, 92, 58] : [58, 60, 64];
      img.data[o] = c[0]; img.data[o + 1] = c[1]; img.data[o + 2] = c[2]; img.data[o + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    g.lineCap = g.lineJoin = 'round';
    for (const pass of [0, 1]) for (const w of R.ways) {
      if (w.code === 8) continue; const big = w.code <= 3;
      if (pass === 0 && !big) { g.strokeStyle = '#8b8d92'; g.lineWidth = Math.max(1.2, w.width / MPP); } else if (pass === 1 && big) { g.strokeStyle = '#d9d2bd'; g.lineWidth = Math.max(2, w.width / MPP); } else continue;
      g.beginPath(); for (let k = 0; k < w.pts.length; k += 2) { const x = (w.pts[k] - bx0) / MPP, y = (w.pts[k + 1] - bz0) / MPP; if (k) g.lineTo(x, y); else g.moveTo(x, y); } g.stroke();
    }
    this.ctx = cv.getContext('2d')!;
  }
  draw(car: { x: number; z: number; yaw: number }, target: { x: number; z: number } | null, route: number[], traffic: { dots(): number[][] }, marks: { x: number; z: number; found: boolean; name: string }[] = []) {
    const cv = this.cv, c = this.ctx, big = cv.classList.contains('big');
    const size = big ? 600 : 300; if (cv.width !== size) { cv.width = cv.height = size; }
    const zoom = big ? 0.5 : 1.15; // ekran pikseli / arka plan pikseli
    c.save(); c.fillStyle = '#26292e'; c.fillRect(0, 0, size, size);
    c.translate(size / 2, size / 2);
    if (!big) c.rotate(Math.PI + car.yaw); // araba yukarı baksın (ileri = +z = ekranda aşağı → 180°)
    c.scale(zoom, zoom);
    const cx = (car.x - this.x0) / MPP, cy = (car.z - this.z0) / MPP;
    c.drawImage(this.bg, -cx, -cy);
    const P = (x: number, z: number): [number, number] => [(x - this.x0) / MPP - cx, (z - this.z0) / MPP - cy];
    if (route.length >= 4) { c.strokeStyle = '#ffd84a'; c.lineWidth = 3.2 / zoom * 1.6; c.lineJoin = c.lineCap = 'round'; c.beginPath(); for (let i = 0; i < route.length; i += 2) { const [x, y] = P(route[i], route[i + 1]); if (i) c.lineTo(x, y); else c.moveTo(x, y); } c.stroke(); }
    c.fillStyle = '#e8e8e8'; for (const [x, z] of traffic.dots()) { const [a, b] = P(x, z); c.fillRect(a - 1.2, b - 1.2, 2.4, 2.4); }
    // anıtlar: bulunmuşsa sarı yıldız, bulunmamışsa beyaz soru işareti (büyük haritada adıyla)
    c.textAlign = 'center'; c.textBaseline = 'middle';
    for (const m of marks) {
      const [a, b] = P(m.x, m.z); c.save(); c.translate(a, b); if (!big) c.rotate(-(Math.PI + car.yaw)); c.scale(1 / zoom, 1 / zoom);
      c.font = `bold ${big ? 20 : 15}px system-ui, sans-serif`; c.lineWidth = 3; c.strokeStyle = '#1b1e24'; c.fillStyle = m.found ? '#ffd84a' : '#ffffff';
      const t = m.found ? '★' : '?'; c.strokeText(t, 0, 0); c.fillText(t, 0, 0);
      if (big && m.found) { c.font = '12px system-ui, sans-serif'; c.strokeText(m.name, 0, 16); c.fillStyle = '#fff'; c.fillText(m.name, 0, 16); }
      c.restore();
    }
    if (target) { const [a, b] = P(target.x, target.z); c.fillStyle = '#ffd84a'; c.strokeStyle = '#1b1e24'; c.lineWidth = 2 / zoom; c.beginPath(); c.arc(a, b, 7 / zoom, 0, Math.PI * 2); c.fill(); c.stroke(); }
    c.restore();
    // hedef ekran dışındaysa kenarda ok gibi göster (küçük haritada)
    // araba oku (merkez)
    c.save(); c.translate(size / 2, size / 2); if (big) c.rotate(-car.yaw + Math.PI); c.fillStyle = '#f2c200'; c.strokeStyle = '#1b1e24'; c.lineWidth = 2;
    c.beginPath(); c.moveTo(0, -12); c.lineTo(8, 9); c.lineTo(0, 4); c.lineTo(-8, 9); c.closePath(); c.fill(); c.stroke(); c.restore();
  }
}
