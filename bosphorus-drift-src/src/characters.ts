// Karakterler ve kartlar: tamamen ilkel şekillerden, pastel çizgi film tarzı. Model +x yönüne bakar.
import * as THREE from 'three';

export interface CharDef { id: string; name: string; color: number; accent: number; blurb: string; stats: [number, number, number] }
export const CHARS: CharDef[] = [
  { id: 'marti', name: 'Martı', color: 0x8ec9ef, accent: 0xf2b84b, blurb: 'Simit kapmada usta', stats: [3, 4, 4] },
  { id: 'kedi', name: 'Sokak Kedisi', color: 0xf4978e, accent: 0xf3a65a, blurb: 'Dar sokakların kralı', stats: [3, 3, 5] },
  { id: 'simitci', name: 'Simitçi', color: 0xf7d774, accent: 0xd9534f, blurb: 'Tablası hiç düşmez', stats: [4, 4, 3] },
  { id: 'kaptan', name: 'Vapur Kaptanı', color: 0x86a6dc, accent: 0x2f4b6e, blurb: 'Boğaz’ın eski kurdu', stats: [5, 3, 3] },
  { id: 'balikci', name: 'Balıkçı', color: 0xc5b3e8, accent: 0xf4c430, blurb: 'Oltası hep hazır', stats: [4, 3, 4] },
  { id: 'tekir', name: 'Tekir', color: 0x9ed9b6, accent: 0x8f8a86, blurb: 'Sessiz ve hızlı', stats: [2, 5, 4] },
];

let grad: THREE.Texture | null = null;
function gradient() {
  if (grad) return grad;
  const d = new Uint8Array([90, 170, 255]);
  const t = new THREE.DataTexture(d, 3, 1, THREE.RedFormat); t.minFilter = t.magFilter = THREE.NearestFilter; t.needsUpdate = true;
  return (grad = t);
}
const matCache = new Map<number, THREE.MeshToonMaterial>();
export function toon(c: number) {
  let m = matCache.get(c);
  if (!m) { m = new THREE.MeshToonMaterial({ color: c, gradientMap: gradient() }); matCache.set(c, m); }
  return m;
}

export interface KartModel { root: THREE.Group; body: THREE.Group; wheels: THREE.Object3D[]; front: THREE.Object3D[]; driver: THREE.Group; exhaust: THREE.Vector3[] }

function add(p: THREE.Object3D, g: THREE.BufferGeometry, c: number, x = 0, y = 0, z = 0, shadow = true) {
  const m = new THREE.Mesh(g, toon(c)); m.position.set(x, y, z); m.castShadow = shadow; p.add(m); return m;
}
const S = (r: number, w = 16, h = 12) => new THREE.SphereGeometry(r, w, h);
const B = (x: number, y: number, z: number) => new THREE.BoxGeometry(x, y, z);
const C = (r1: number, r2: number, h: number, s = 14) => new THREE.CylinderGeometry(r1, r2, h, s);

export function buildKart(def: CharDef): KartModel {
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const col = def.color, dark = 0x4a4656, white = 0xfbf7f0;
  // şasi
  add(body, B(2.1, 0.32, 1.25), col, 0, 0.42, 0);
  const nose = add(body, B(0.8, 0.26, 1.0), col, 1.15, 0.4, 0); nose.rotation.z = -0.12;
  add(body, B(0.25, 0.18, 1.55), white, 1.5, 0.34, 0); // tampon
  for (const sd of [-1, 1]) add(body, B(1.1, 0.34, 0.28), col, -0.05, 0.5, sd * 0.72); // yan dubalar
  add(body, B(0.62, 0.5, 1.0), dark, -0.85, 0.7, 0); // motor
  for (const sd of [-1, 1]) { const ex = add(body, C(0.09, 0.11, 0.42, 10), 0xb9b4bf, -1.2, 0.78, sd * 0.28); ex.rotation.z = Math.PI / 2; }
  add(body, B(0.2, 0.08, 1.4), def.accent, -1.15, 1.08, 0); // kanatçık
  for (const sd of [-1, 1]) add(body, B(0.12, 0.3, 0.08), dark, -1.1, 0.93, sd * 0.5);
  const seat = add(body, B(0.5, 0.5, 0.75), def.accent, -0.38, 0.75, 0); seat.rotation.z = 0.18;
  const sw = add(body, new THREE.TorusGeometry(0.2, 0.045, 6, 16), dark, 0.42, 0.95, 0); sw.rotation.y = Math.PI / 2; sw.rotation.x = 0; sw.rotation.z = -0.5;
  // tekerler
  const wheels: THREE.Object3D[] = [], front: THREE.Object3D[] = [];
  for (const [x, z, r] of [[0.78, 0.74, 0.3], [0.78, -0.74, 0.3], [-0.72, 0.78, 0.36], [-0.72, -0.78, 0.36]] as const) {
    const pivot = new THREE.Group(); pivot.position.set(x, r, z); root.add(pivot);
    const spin = new THREE.Group(); pivot.add(spin);
    const t = add(spin, C(r, r, r * 0.9, 14), 0x3d3a45); t.rotation.x = Math.PI / 2;
    const hub = add(spin, C(r * 0.5, r * 0.5, r * 0.92, 10), white, 0, 0, 0, false); hub.rotation.x = Math.PI / 2;
    wheels.push(spin); if (x > 0) front.push(pivot);
  }
  const driver = new THREE.Group(); driver.position.set(-0.3, 0.9, 0); body.add(driver);
  DRIVERS[def.id](driver, def);
  return { root, body, wheels, front, driver, exhaust: [new THREE.Vector3(-1.45, 0.78, 0.28), new THREE.Vector3(-1.45, 0.78, -0.28)] };
}

const SKIN = 0xf3cfb0;
const eyes = (p: THREE.Object3D, x: number, y: number, z: number, r = 0.055) => { for (const sd of [-1, 1]) { add(p, S(r * 1.7, 10, 8), 0xffffff, x, y, sd * z, false); add(p, S(r, 8, 6), 0x2b2833, x + r * 0.9, y, sd * z, false); } };
const torso = (p: THREE.Object3D, c: number, r = 0.36) => { const t = add(p, S(r, 14, 10), c, 0, 0.15, 0); t.scale.set(0.9, 1.15, 1); };
const arms = (p: THREE.Object3D, c: number) => { for (const sd of [-1, 1]) { const a = add(p, C(0.08, 0.08, 0.55, 8), c, 0.3, 0.2, sd * 0.3); a.rotation.z = -1.1; a.rotation.x = sd * 0.25; add(p, S(0.09, 8, 6), c === 0xffffff ? 0xc9d0d8 : SKIN, 0.55, 0.06, sd * 0.24, false); } };

const DRIVERS: Record<string, (p: THREE.Group, d: CharDef) => void> = {
  marti(p) {
    torso(p, 0xffffff);
    for (const sd of [-1, 1]) { const w = add(p, B(0.55, 0.08, 0.32), 0xc9d0d8, 0.15, 0.25, sd * 0.36); w.rotation.z = -0.5; w.rotation.x = sd * 0.3; }
    const h = new THREE.Group(); h.position.set(0.08, 0.72, 0); p.add(h);
    add(h, S(0.3), 0xffffff);
    const beak = add(h, new THREE.ConeGeometry(0.1, 0.36, 10), 0xf2b84b, 0.4, -0.04, 0); beak.rotation.z = -Math.PI / 2;
    add(h, S(0.05, 6, 6), 0xe5534b, 0.5, -0.09, 0, false);
    eyes(h, 0.2, 0.08, 0.15);
    const tail = add(p, B(0.3, 0.06, 0.3), 0xc9d0d8, -0.4, 0.1, 0); tail.rotation.z = 0.4;
  },
  kedi(p) { cat(p, 0xf3a65a, 0xffffff, false); },
  tekir(p) { cat(p, 0xa9a39d, 0xe9e5df, true); },
  simitci(p) {
    torso(p, 0xfbf7f0); const vest = add(p, S(0.37, 14, 10, ), 0xd9534f, 0, 0.12, 0); vest.scale.set(0.92, 1.05, 1.03); arms(p, 0xfbf7f0);
    const h = new THREE.Group(); h.position.set(0.06, 0.72, 0); p.add(h);
    add(h, S(0.28), SKIN); eyes(h, 0.22, 0.06, 0.11, 0.04);
    add(h, S(0.06, 8, 6), 0xe9a98c, 0.29, -0.02, 0, false);
    const mus = add(h, B(0.08, 0.06, 0.26), 0x5a3a2a, 0.27, -0.09, 0, false); mus.rotation.x = 0;
    const cap = add(h, C(0.25, 0.28, 0.14, 16), 0xfbf7f0, 0, 0.24, 0); cap.rotation.z = 0.1;
    const tray = add(h, C(0.55, 0.55, 0.06, 20), 0xb07b4f, 0, 0.36, 0);
    void tray;
    const tg = new THREE.TorusGeometry(0.13, 0.055, 8, 14); tg.rotateX(Math.PI / 2);
    for (let k = 0; k < 6; k++) { const a = (k / 6) * Math.PI * 2; add(h, tg, 0xd9954a, Math.cos(a) * 0.33, 0.42, Math.sin(a) * 0.33); }
    add(h, tg, 0xd9954a, 0, 0.48, 0);
  },
  kaptan(p) {
    torso(p, 0x2f4b6e); arms(p, 0x2f4b6e);
    for (let k = 0; k < 3; k++) add(p, S(0.035, 6, 6), 0xf2c14e, 0.33, 0.28 - k * 0.12, 0.07, false);
    const h = new THREE.Group(); h.position.set(0.06, 0.72, 0); p.add(h);
    add(h, S(0.28), SKIN); eyes(h, 0.22, 0.07, 0.11, 0.04);
    const beard = add(h, S(0.24, 12, 8), 0xf4f1ec, 0.1, -0.14, 0); beard.scale.set(0.8, 0.8, 1.05);
    add(h, S(0.06, 8, 6), 0xe9a98c, 0.29, 0.0, 0, false);
    add(h, C(0.27, 0.27, 0.12, 18), 0x2f4b6e, 0, 0.22, 0);
    const top = add(h, C(0.34, 0.28, 0.12, 18), 0xfbf7f0, 0.02, 0.32, 0); top.rotation.z = -0.08;
    const visor = add(h, C(0.2, 0.2, 0.04, 14, ), 0x2b2833, 0.22, 0.18, 0); visor.scale.set(1, 1, 1.3);
    add(h, S(0.05, 6, 6), 0xf2c14e, 0.33, 0.24, 0, false);
  },
  balikci(p) {
    torso(p, 0xf4c430); arms(p, 0xf4c430);
    const h = new THREE.Group(); h.position.set(0.06, 0.72, 0); p.add(h);
    add(h, S(0.28), SKIN); eyes(h, 0.22, 0.06, 0.11, 0.04);
    const beard = add(h, S(0.23, 12, 8), 0x9a9aa3, 0.1, -0.15, 0); beard.scale.set(0.8, 0.8, 1.05);
    add(h, S(0.06, 8, 6), 0xe9a98c, 0.29, -0.01, 0, false);
    add(h, C(0.27, 0.3, 0.2, 16), 0xf4c430, 0, 0.22, 0);
    const brim = add(h, C(0.46, 0.5, 0.04, 18), 0xf4c430, -0.05, 0.13, 0); brim.rotation.z = -0.12;
    // olta
    const rod = new THREE.Group(); rod.position.set(-0.25, 0.1, -0.35); rod.rotation.z = 0.75; p.add(rod);
    add(rod, C(0.025, 0.035, 2.2, 6), 0x8a5a3b, 0, 1.1, 0);
    const line = add(rod, C(0.006, 0.006, 0.7, 4), 0xffffff, 0.0, 2.2, 0, false); line.rotation.z = -0.75; line.position.set(0.24, 1.95, 0);
    const fish = add(rod, S(0.12, 10, 8), 0xf09a6b, 0.45, 1.68, 0); fish.scale.set(1.6, 0.8, 0.6);
    const ft = add(rod, new THREE.ConeGeometry(0.1, 0.16, 4), 0xf09a6b, 0.24, 1.68, 0); ft.rotation.z = Math.PI / 2;
  },
};

function cat(p: THREE.Group, fur: number, belly: number, stripes: boolean) {
  const t = add(p, S(0.34, 14, 10), fur, 0, 0.12, 0); t.scale.set(0.9, 1.1, 1);
  add(p, S(0.22, 10, 8), belly, 0.16, 0.12, 0).scale.set(0.6, 1.2, 1.2);
  for (const sd of [-1, 1]) { const a = add(p, C(0.08, 0.08, 0.5, 8), fur, 0.28, 0.2, sd * 0.28); a.rotation.z = -1.1; add(p, S(0.09, 8, 6), belly, 0.52, 0.07, sd * 0.24, false); }
  const h = new THREE.Group(); h.position.set(0.05, 0.68, 0); p.add(h);
  const head = add(h, S(0.32), fur); head.scale.set(0.95, 0.9, 1.05);
  add(h, S(0.15, 10, 8), belly, 0.24, -0.08, 0).scale.set(0.7, 0.7, 1.2);
  add(h, S(0.045, 6, 6), 0xf28fa0, 0.33, -0.02, 0, false);
  eyes(h, 0.24, 0.07, 0.12, 0.05);
  for (const sd of [-1, 1]) {
    const e = add(h, new THREE.ConeGeometry(0.11, 0.24, 4), fur, 0.0, 0.3, sd * 0.17); e.rotation.x = sd * -0.3;
    add(h, new THREE.ConeGeometry(0.055, 0.14, 4), 0xf6b8c4, 0.04, 0.3, sd * 0.17, false).rotation.x = sd * -0.3;
    for (const k of [-1, 1]) { const w = add(h, B(0.005, 0.01, 0.28), 0x5b5560, 0.31, -0.07 + k * 0.03, sd * 0.2, false); w.rotation.x = sd * k * 0.2; }
  }
  if (stripes) for (let k = 0; k < 3; k++) { const s = add(h, B(0.06, 0.03, 0.22), 0x6e6863, 0.12 - k * 0.1, 0.29 - k * 0.02, 0, false); s.rotation.z = 0.2 - k * 0.15; }
  // kuyruk
  const tail = new THREE.Group(); tail.position.set(-0.32, 0.05, 0); p.add(tail);
  for (let k = 0; k < 6; k++) {
    const a = k / 5, seg = add(tail, S(0.07, 8, 6), stripes && k % 2 ? 0x6e6863 : fur, -Math.sin(a * 1.6) * 0.38, a * 0.7, 0);
    seg.scale.set(1, 1.3, 1);
  }
}
