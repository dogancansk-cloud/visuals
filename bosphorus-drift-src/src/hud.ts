// HUD yardımcıları: eşya simgeleri (kanvasla çizilir), mini harita, açılır mesajlar.
import type { ItemKind, Kart } from './kart';
import type { Track } from './track';

function draw(fn: (c: CanvasRenderingContext2D) => void) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 128;
  const c = cv.getContext('2d')!; c.lineJoin = c.lineCap = 'round'; fn(c); return cv.toDataURL();
}
export const ICONS: Record<ItemKind, string> = {
  marti: draw((c) => {
    c.fillStyle = '#c9d0d8'; c.beginPath(); c.moveTo(20, 50); c.quadraticCurveTo(45, 20, 64, 58); c.quadraticCurveTo(83, 20, 108, 50); c.quadraticCurveTo(84, 44, 64, 72); c.quadraticCurveTo(44, 44, 20, 50); c.fill();
    c.fillStyle = '#fff'; c.beginPath(); c.ellipse(64, 72, 26, 17, 0, 0, 7); c.fill();
    c.beginPath(); c.arc(86, 62, 12, 0, 7); c.fill();
    c.fillStyle = '#f2b84b'; c.beginPath(); c.moveTo(96, 60); c.lineTo(114, 66); c.lineTo(96, 68); c.fill();
    c.fillStyle = '#2b2833'; c.beginPath(); c.arc(89, 59, 2.6, 0, 7); c.fill();
    c.strokeStyle = '#3c3a47'; c.lineWidth = 3; c.beginPath(); c.ellipse(64, 72, 26, 17, 0, 0, 7); c.stroke();
  }),
  cay: draw((c) => {
    c.fillStyle = '#e57373'; c.beginPath(); c.ellipse(64, 108, 38, 9, 0, 0, 7); c.fill();
    c.fillStyle = 'rgba(255,255,255,.9)'; c.beginPath(); c.moveTo(42, 22); c.quadraticCurveTo(38, 40, 50, 60); c.quadraticCurveTo(40, 82, 48, 102); c.lineTo(80, 102); c.quadraticCurveTo(88, 82, 78, 60); c.quadraticCurveTo(90, 40, 86, 22); c.closePath(); c.fill();
    c.fillStyle = '#c8662d'; c.beginPath(); c.moveTo(45, 36); c.quadraticCurveTo(43, 46, 52, 60); c.quadraticCurveTo(43, 82, 50, 99); c.lineTo(78, 99); c.quadraticCurveTo(85, 82, 76, 60); c.quadraticCurveTo(85, 46, 83, 36); c.closePath(); c.fill();
    c.strokeStyle = '#3c3a47'; c.lineWidth = 3; c.beginPath(); c.moveTo(42, 22); c.quadraticCurveTo(38, 40, 50, 60); c.quadraticCurveTo(40, 82, 48, 102); c.lineTo(80, 102); c.quadraticCurveTo(88, 82, 78, 60); c.quadraticCurveTo(90, 40, 86, 22); c.stroke();
    c.strokeStyle = 'rgba(255,255,255,.8)'; c.lineWidth = 3; c.beginPath(); c.moveTo(56, 6); c.quadraticCurveTo(50, 12, 58, 18); c.moveTo(72, 4); c.quadraticCurveTo(66, 10, 74, 16); c.stroke();
  }),
  nazar: draw((c) => {
    for (const [r, col] of [[52, '#2f6fb3'], [36, '#ffffff'], [24, '#7ec0f0'], [12, '#191e2d']] as const) { c.fillStyle = col; c.beginPath(); c.arc(64, 64, r, 0, 7); c.fill(); }
    c.fillStyle = 'rgba(255,255,255,.7)'; c.beginPath(); c.ellipse(44, 40, 10, 6, -0.6, 0, 7); c.fill();
  }),
  turbo: draw((c) => {
    c.fillStyle = '#f6a65a'; c.beginPath(); c.moveTo(64, 10); c.quadraticCurveTo(104, 56, 86, 92); c.quadraticCurveTo(64, 124, 42, 92); c.quadraticCurveTo(24, 56, 64, 10); c.fill();
    c.fillStyle = '#f7d774'; c.beginPath(); c.moveTo(64, 40); c.quadraticCurveTo(86, 70, 76, 92); c.quadraticCurveTo(64, 108, 52, 92); c.quadraticCurveTo(42, 70, 64, 40); c.fill();
    c.fillStyle = '#fff8ee'; c.beginPath(); c.arc(64, 90, 9, 0, 7); c.fill();
  }),
  simit: draw((c) => {
    c.fillStyle = '#e39a4c'; c.beginPath(); c.arc(64, 64, 46, 0, 7); c.arc(64, 64, 18, 0, 7, true); c.fill();
    c.strokeStyle = '#3c3a47'; c.lineWidth = 3; c.beginPath(); c.arc(64, 64, 46, 0, 7); c.stroke(); c.beginPath(); c.arc(64, 64, 18, 0, 7); c.stroke();
    c.fillStyle = '#fff3d6'; for (let k = 0; k < 22; k++) { const a = k * 0.9, r = 26 + (k % 3) * 7; c.beginPath(); c.ellipse(64 + Math.cos(a) * r, 64 + Math.sin(a) * r, 3.5, 2, a, 0, 7); c.fill(); }
  }),
  duduk: draw((c) => {
    c.fillStyle = '#f7f6ff'; c.fillRect(20, 62, 70, 20); c.fillStyle = '#2f4b6e'; c.beginPath(); c.moveTo(12, 82); c.lineTo(98, 82); c.lineTo(88, 100); c.lineTo(22, 100); c.fill();
    c.fillStyle = '#f2c14e'; c.fillRect(48, 38, 16, 26); c.fillStyle = '#3c3a47'; c.fillRect(48, 34, 16, 7);
    c.strokeStyle = '#fff'; c.lineWidth = 6; for (let k = 0; k < 3; k++) { c.beginPath(); c.arc(70, 40, 18 + k * 14, -1.1, -0.2); c.stroke(); }
  }),
  kedi: draw((c) => {
    c.fillStyle = '#f3a65a'; c.beginPath(); c.moveTo(24, 50); c.lineTo(34, 14); c.lineTo(56, 38); c.lineTo(72, 38); c.lineTo(94, 14); c.lineTo(104, 50); c.quadraticCurveTo(110, 108, 64, 110); c.quadraticCurveTo(18, 108, 24, 50); c.fill();
    c.strokeStyle = '#3c3a47'; c.lineWidth = 3; c.stroke();
    c.fillStyle = '#2b2833'; c.beginPath(); c.ellipse(48, 66, 6, 9, 0, 0, 7); c.ellipse(80, 66, 6, 9, 0, 0, 7); c.fill();
    c.fillStyle = '#f28fa0'; c.beginPath(); c.moveTo(58, 82); c.lineTo(70, 82); c.lineTo(64, 89); c.fill();
    c.strokeStyle = '#3c3a47'; c.lineWidth = 2; for (const sd of [-1, 1]) for (const k of [-1, 1]) { c.beginPath(); c.moveTo(64 + sd * 12, 88 + k * 3); c.lineTo(64 + sd * 40, 84 + k * 8); c.stroke(); }
  }),
};
export const ITEM_NAME: Record<ItemKind, string> = { marti: 'Martı', cay: 'Çay', nazar: 'Nazar', turbo: 'Turbo', simit: 'Simit', duduk: 'Vapur düdüğü', kedi: 'Kedi sürüsü' };

export class MiniMap {
  private bg: HTMLCanvasElement; private c: CanvasRenderingContext2D; private sx = 1; private ox = 0; private oz = 0;
  constructor(private cv: HTMLCanvasElement, private track: Track) {
    this.c = cv.getContext('2d')!;
    const T = track.T; let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
    for (let i = 0; i < T.n; i++) { x0 = Math.min(x0, T.x[i]); x1 = Math.max(x1, T.x[i]); z0 = Math.min(z0, T.z[i]); z1 = Math.max(z1, T.z[i]); }
    const W = cv.width - 20; this.sx = W / Math.max(x1 - x0, z1 - z0); this.ox = 10 - x0 * this.sx + (W - (x1 - x0) * this.sx) / 2; this.oz = 10 - z0 * this.sx + (W - (z1 - z0) * this.sx) / 2;
    this.bg = document.createElement('canvas'); this.bg.width = cv.width; this.bg.height = cv.height;
    const b = this.bg.getContext('2d')!; b.lineJoin = b.lineCap = 'round';
    const path = () => { b.beginPath(); for (let i = 0; i <= T.n; i++) { const k = i % T.n; const [x, y] = this.p(T.x[k], T.z[k]); i ? b.lineTo(x, y) : b.moveTo(x, y); } };
    path(); b.strokeStyle = 'rgba(60,58,71,.45)'; b.lineWidth = 11; b.stroke();
    path(); b.strokeStyle = '#fff8ee'; b.lineWidth = 6; b.stroke();
    const [tx, tz] = this.p(T.tower.x, T.tower.z); b.fillStyle = '#8da6c2'; b.beginPath(); b.arc(tx, tz, 5, 0, 7); b.fill();
    const [sx, sz] = this.p(T.x[0], T.z[0]); b.fillStyle = '#3c3a47'; b.fillRect(sx - 1.5, sz - 7, 3, 14);
  }
  private p(x: number, z: number): [number, number] { return [x * this.sx + this.ox, z * this.sx + this.oz]; }
  draw(karts: Kart[], player: Kart) {
    const c = this.c; c.clearRect(0, 0, this.cv.width, this.cv.height); c.drawImage(this.bg, 0, 0);
    for (const k of [...karts].sort((a) => (a === player ? 1 : -1))) {
      const [x, y] = this.p(k.pos.x, k.pos.z);
      c.fillStyle = '#' + k.def.color.toString(16).padStart(6, '0'); c.strokeStyle = k === player ? '#3c3a47' : '#fff'; c.lineWidth = k === player ? 3 : 2;
      c.beginPath(); c.arc(x, y, k === player ? 6.5 : 4.5, 0, 7); c.fill(); c.stroke();
    }
  }
}

export class Msg {
  constructor(private el: HTMLElement) {}
  show(text: string, cls = '') {
    const d = document.createElement('div'); d.textContent = text; if (cls) d.className = cls;
    this.el.innerHTML = ''; this.el.appendChild(d);
  }
}

export function fmt(t: number) {
  const m = Math.floor(t / 60), s = t - m * 60;
  return `${m}:${s < 10 ? '0' : ''}${s.toFixed(2)}`;
}
