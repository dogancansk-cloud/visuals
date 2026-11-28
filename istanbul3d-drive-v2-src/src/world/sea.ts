// Deniz (Haliç, Boğaz, Marmara): kamerayı izleyen tek düzlem, hareketli dalga dokusu, güneş parıltısı.
import * as THREE from 'three';
import type { Env } from '../env';

function noiseNormal(size: number) {
  const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d')!; const img = g.createImageData(size, size);
  const h = new Float32Array(size * size);
  for (let o = 0; o < 4; o++) { const f = 4 << o, amp = 1 / (o + 1); const r: number[] = []; for (let i = 0; i < (f + 1) * (f + 1); i++) r.push(Math.random()); for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) { const fx = (x / size) * f, fy = (y / size) * f, i = Math.floor(fx), j = Math.floor(fy), u = fx - i, v = fy - j; const A = r[j * (f + 1) + i], B = r[j * (f + 1) + ((i + 1) % f)], C = r[((j + 1) % f) * (f + 1) + i], D = r[((j + 1) % f) * (f + 1) + ((i + 1) % f)]; const s = (q: number) => q * q * (3 - 2 * q); h[y * size + x] += (A * (1 - s(u)) + B * s(u)) * (1 - s(v)) * amp + (C * (1 - s(u)) + D * s(u)) * s(v) * amp; } }
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) { const dx = h[y * size + ((x + 1) % size)] - h[y * size + ((x - 1 + size) % size)], dy = h[((y + 1) % size) * size + x] - h[((y - 1 + size) % size) * size + x]; const k = (y * size + x) * 4; img.data[k] = 128 + dx * 160; img.data[k + 1] = 128 + dy * 160; img.data[k + 2] = 255; img.data[k + 3] = 255; }
  g.putImageData(img, 0, 0); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}

export class Sea {
  readonly mesh: THREE.Mesh; private mat: THREE.MeshPhongMaterial; private tex: THREE.Texture;
  constructor(phone: boolean) {
    this.tex = noiseNormal(phone ? 128 : 256); this.tex.repeat.set(160, 160);
    this.mat = new THREE.MeshPhongMaterial({ color: '#3f8ba3', specular: '#cfd8dc', shininess: 170, normalMap: this.tex, normalScale: new THREE.Vector2(0.5, 0.5), transparent: true, opacity: 0.94 });
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(16000, 16000).rotateX(-Math.PI / 2), this.mat);
    this.mesh.position.y = 0; this.mesh.receiveShadow = false; this.mesh.renderOrder = 1; this.mesh.name = 'sea';
  }
  update(t: number, env: Env, cam: THREE.Vector3) {
    this.mesh.position.set(Math.round(cam.x / 100) * 100, 0, Math.round(cam.z / 100) * 100);
    this.tex.offset.set((t * 0.004) % 1 + this.mesh.position.x / 100, (t * 0.0025) % 1 + this.mesh.position.z / 100);
    const day = new THREE.Color('#3f8ba3'), night = new THREE.Color('#081320');
    this.mat.color.copy(day).lerp(night, env.night).lerp(new THREE.Color('#4d5d66'), Math.max(0, env.fogAmt * 0.5));
    this.mat.specular.setScalar((0.24 * (1 - env.night) + 0.22 * env.night) * (1 - env.rainAmt * 0.5)); // gece: ay yakamozu
    this.mat.normalScale.setScalar(0.5 + env.rainAmt * 0.4);
  }
}
