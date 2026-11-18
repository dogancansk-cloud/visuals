// Oyuncu arabası: arcade fizik (kolay dönüş, hafif kayma), zemine/köprüye oturma, bina çarpışması, görünüm.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Ground } from '../world/ground';
import type { Roads } from '../world/roads';
import type { Controls } from './input';
import { glowTexture } from '../world/props';

// ---------- görünüm (oyuncu ve trafik aynı modeli kullanır) ----------
function box(w: number, h: number, l: number, x: number, y: number, z: number, c: THREE.Color) {
  const g = new THREE.BoxGeometry(w, h, l).translate(x, y, z).toNonIndexed(); const n = g.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g;
}
/** sedan gövdesi (tekerleksiz), boyut ~1.8 × 4.4 m, burun +z */
export function carBodyGeometry(paint: string, taxi = false, kind: 'car' | 'bus' | 'van' = 'car') {
  const P = new THREE.Color(paint), dark = new THREE.Color('#1c1f24'), glass = new THREE.Color('#2a3440'), chrome = new THREE.Color('#9aa0a6'), black = new THREE.Color('#111');
  const parts: THREE.BufferGeometry[] = [];
  if (kind === 'bus') {
    parts.push(box(2.5, 2.6, 11, 0, 1.75, 0, P), box(2.52, 0.9, 10.2, 0, 2.3, 0.2, glass), box(2.4, 0.3, 11, 0, 0.45, 0, dark), box(2.3, 1.1, 0.05, 0, 2.2, 5.51, glass));
  } else if (kind === 'van') {
    parts.push(box(1.95, 1.5, 4.9, 0, 1.2, 0, P), box(1.9, 0.75, 1.5, 0, 2.3, 1.2, glass), box(1.92, 0.75, 3.2, 0, 2.3, -1.15, P), box(1.95, 0.3, 4.9, 0, 0.45, 0, dark));
  } else {
    parts.push(box(1.82, 0.62, 4.4, 0, 0.78, 0, P));                     // alt gövde
    parts.push(box(1.62, 0.56, 2.25, 0, 1.36, -0.2, glass));             // kabin camları
    parts.push(box(1.58, 0.06, 2.0, 0, 1.66, -0.25, P));                 // tavan
    parts.push(box(1.84, 0.22, 4.44, 0, 0.42, 0, dark));                 // etek / tampon
    parts.push(box(1.5, 0.12, 0.05, 0, 0.78, 2.21, chrome));             // ızgara
    if (taxi) { parts.push(box(0.75, 0.22, 0.3, 0, 1.8, -0.3, new THREE.Color('#f7f3e8'))); parts.push(box(1.84, 0.1, 4.42, 0, 0.98, 0, black)); } // TAKSİ lambası + damalı şerit yerine siyah bant
  }
  return mergeGeometries(parts)!;
}
export function wheelGeometry() {
  const g = new THREE.CylinderGeometry(0.34, 0.34, 0.24, 10).rotateZ(Math.PI / 2).toNonIndexed(); const n = g.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { const y = g.attributes.position.getY(i), z = g.attributes.position.getZ(i); const rim = Math.hypot(y, z) < 0.2; a[i * 3] = a[i * 3 + 1] = a[i * 3 + 2] = rim ? 0.55 : 0.08; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g;
}

// ---------- çarpışma: bina duvarları ızgarada ----------
export class Walls {
  private grid = new Map<number, number[]>(); private segs: Float32Array[] = [];
  readonly C = 16;
  rebuild(list: Iterable<Float32Array>) {
    this.grid.clear(); this.segs = [...list];
    this.segs.forEach((s, si) => {
      for (let i = 0; i < s.length; i += 4) {
        const x0 = Math.min(s[i], s[i + 2]), x1 = Math.max(s[i], s[i + 2]), z0 = Math.min(s[i + 1], s[i + 3]), z1 = Math.max(s[i + 1], s[i + 3]);
        for (let a = Math.floor(x0 / this.C); a <= Math.floor(x1 / this.C); a++) for (let b = Math.floor(z0 / this.C); b <= Math.floor(z1 / this.C); b++) {
          const k = a * 100003 + b; let l = this.grid.get(k); if (!l) this.grid.set(k, (l = [])); l.push(si, i);
        }
      }
    });
  }
  /** daire (x,z,r) ile çakışan duvarlardan itme vektörü; yoksa null */
  push(x: number, z: number, r: number): [number, number, number] | null {
    let px = 0, pz = 0, depth = 0; const seen = new Set<number>();
    for (let a = Math.floor((x - r) / this.C); a <= Math.floor((x + r) / this.C); a++) for (let b = Math.floor((z - r) / this.C); b <= Math.floor((z + r) / this.C); b++) {
      const l = this.grid.get(a * 100003 + b); if (!l) continue;
      for (let q = 0; q < l.length; q += 2) {
        const key = l[q] * 1e7 + l[q + 1]; if (seen.has(key)) continue; seen.add(key);
        const s = this.segs[l[q]], i = l[q + 1];
        const ax = s[i], az = s[i + 1], bx = s[i + 2] - ax, bz = s[i + 3] - az, L2 = bx * bx + bz * bz || 1e-6;
        const t = Math.max(0, Math.min(1, ((x - ax) * bx + (z - az) * bz) / L2)); const dx = x - (ax + bx * t), dz = z - (az + bz * t), d = Math.hypot(dx, dz);
        if (d < r && d > 1e-4) { const p = r - d; px += (dx / d) * p; pz += (dz / d) * p; depth = Math.max(depth, p); }
      }
    }
    return depth > 0 ? [px, pz, depth] : null;
  }
}

export interface Obstacle { x: number; z: number; r: number; vx: number; vz: number; hit?: (power: number) => void }

// ---------- fizik ----------
const GEARS = [0, 11, 19, 27, 35, 44]; // vites başına üst hız (m/s)
export class Car {
  x = 0; z = 0; y = 0; vy = 0; yaw = 0; vx = 0; vz = 0; yawRate = 0; steer = 0;
  rpm = 900; gear = 1; slip = 0; pitch = 0; roll = 0; airborne = false;
  vmax = 36; damage = 0; lastHit = 0; inWater = 0;
  safe = { x: 0, z: 0, yaw: 0 }; private safeT = 0;
  readonly obj = new THREE.Group(); private body: THREE.Mesh; private wheels: THREE.Mesh[] = []; private spin = 0;
  private brakeMat: THREE.MeshBasicMaterial; readonly headMat: THREE.MeshBasicMaterial;
  readonly headlight: THREE.SpotLight | null; private pool: THREE.Mesh; private poolMat: THREE.MeshBasicMaterial;
  onHit: ((power: number) => void) | null = null; onSplash: (() => void) | null = null;
  constructor(private G: Ground, private R: Roads, private walls: Walls, withLight: boolean) {
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
    this.body = new THREE.Mesh(carBodyGeometry('#f2c200', true), mat); this.body.castShadow = true; this.obj.add(this.body);
    const wg = wheelGeometry();
    for (const [x, z] of [[-0.86, 1.35], [0.86, 1.35], [-0.86, -1.35], [0.86, -1.35]]) { const w = new THREE.Mesh(wg, mat); w.position.set(x, 0.34, z); w.castShadow = true; this.obj.add(w); this.wheels.push(w); }
    this.headMat = new THREE.MeshBasicMaterial({ color: '#fff6dc' }); this.brakeMat = new THREE.MeshBasicMaterial({ color: '#5a0d0d' });
    for (const s of [-0.62, 0.62]) {
      const h = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.14, 0.04), this.headMat); h.position.set(s, 0.86, 2.215); this.obj.add(h);
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.14, 0.04), this.brakeMat); b.position.set(s, 0.88, -2.215); this.obj.add(b);
    }
    if (withLight) {
      const L = new THREE.SpotLight(0xfff0d0, 0, 70, 0.55, 0.5, 1.2); L.position.set(0, 0.9, 2.0); L.target.position.set(0, 0, 20); this.obj.add(L, L.target); this.headlight = L;
    } else this.headlight = null;
    // far ışığının yoldaki lekesi (ucuz, her kalitede)
    this.poolMat = new THREE.MeshBasicMaterial({ map: glowTexture(false), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -12 });
    this.pool = new THREE.Mesh(new THREE.PlaneGeometry(9, 20).rotateX(-Math.PI / 2).translate(0, 0, 13), this.poolMat); this.pool.renderOrder = 4; this.pool.frustumCulled = false;
  }
  /** far lekesi sahneye eklenir (araba nesnesinin eğiminden bağımsız, zemine yakın) */
  get groundFx() { return this.pool; }
  get speed() { return Math.hypot(this.vx, this.vz); }
  get fwd(): [number, number] { return [Math.sin(this.yaw), Math.cos(this.yaw)]; }
  get vLong() { const [fx, fz] = this.fwd; return this.vx * fx + this.vz * fz; }
  place(x: number, z: number, yaw: number) {
    this.x = x; this.z = z; this.yaw = yaw; this.vx = this.vz = this.vy = 0; this.yawRate = 0; this.y = this.groundY(x, z, this.G.H(x, z) + 2); this.inWater = 0;
    this.safe = { x, z, yaw };
  }
  /** en yakın yola koy (sıkışınca) */
  resetToRoad() {
    const n = this.R.nearest(this.safe.x, this.safe.z, 80, (w) => w.code <= 7);
    if (n) { const yaw = Math.atan2(n.dx, n.dz); this.place(n.px, n.pz, this.vLong < 0 ? yaw + Math.PI : yaw); } else this.place(this.safe.x, this.safe.z, this.safe.yaw);
  }
  groundY(x: number, z: number, ref: number) {
    const g = this.G.H(x, z); const d = this.R.deckAt(x, z, ref);
    return d !== null && d > g - 0.5 ? d + 0.05 : g;
  }
  step(dt: number, c: Controls, obstacles: Obstacle[]) {
    const [fx, fz] = this.fwd; const rx = -fz, rz = fx; // sağ = (-cos, sin)
    let vL = this.vx * fx + this.vz * fz, vS = this.vx * rx + this.vz * rz;
    const sp = Math.abs(vL);
    // direksiyon: hız arttıkça açı azalır
    const maxSteer = 0.62 / (1 + sp / 14);
    this.steer += (c.steer * maxSteer - this.steer) * Math.min(1, dt * 10);
    // motor / fren
    const onGround = !this.airborne;
    let a = 0;
    if (onGround) {
      const thr = c.throttle, brk = c.brake;
      if (thr > 0) { if (vL < -0.5) a += 14 * thr; else a += 7.5 * thr * Math.pow(Math.max(0, 1 - vL / this.vmax), 0.7) + (vL < 5 ? 2 * thr : 0); }
      if (brk > 0) { if (vL > 0.5) a -= 13 * brk; else if (thr === 0) a -= 5 * brk * (vL > -9 ? 1 : 0); }
      if (c.handbrake && Math.abs(vL) > 0.2) a -= Math.sign(vL) * 4;
      a -= Math.sign(vL) * (0.35 + 0.0012 * vL * vL) * (Math.abs(vL) > 0.05 ? 1 : 0);
      if (thr === 0 && brk === 0 && Math.abs(vL) < 0.4) vL *= Math.max(0, 1 - dt * 4);
      // yokuş
      a -= 9.81 * Math.sin(this.pitch) * 0.9;
    }
    vL += a * dt;
    // yan tutuş: el freninde kayar
    const grip = !onGround ? 0.2 : c.handbrake ? 1.3 : 7.5 - Math.min(3, sp / 12);
    const vS0 = vS; vS *= Math.exp(-grip * dt);
    this.slip = Math.abs(vS0) + (c.brake > 0 && sp > 8 && vL > 0 ? sp * 0.15 : 0) + (c.handbrake && sp > 4 ? 4 : 0);
    // dönüş
    const wb = 2.6; let targetYaw = (vL * Math.tan(this.steer)) / wb; if (c.handbrake) targetYaw *= 1.45;
    if (!onGround) targetYaw = this.yawRate;
    this.yawRate += (targetYaw - this.yawRate) * Math.min(1, dt * (c.handbrake ? 4 : 9));
    this.yaw -= this.yawRate * dt;
    // yeni yöne göre hız
    const [nfx, nfz] = this.fwd; const nrx = -nfz, nrz = nfx;
    this.vx = nfx * vL + nrx * vS; this.vz = nfz * vL + nrz * vS;
    this.x += this.vx * dt; this.z += this.vz * dt;
    // binalar: arabanın boyunca üç daire
    let hit = 0;
    for (const off of [1.35, 0, -1.35]) {
      const cx = this.x + nfx * off, cz = this.z + nfz * off;
      const p = this.walls.push(cx, cz, 1.0);
      if (p) {
        this.x += p[0]; this.z += p[1]; const l = Math.hypot(p[0], p[1]) || 1, nx = p[0] / l, nz = p[1] / l;
        const vn = this.vx * nx + this.vz * nz;
        if (vn < 0) { this.vx -= vn * nx * 1.25; this.vz -= vn * nz * 1.25; hit = Math.max(hit, -vn); }
        this.vx *= 0.985; this.vz *= 0.985;
      }
    }
    // diğer araçlar / engeller
    for (const o of obstacles) {
      const dx = this.x - o.x, dz = this.z - o.z, d = Math.hypot(dx, dz), rr = 2.0 + o.r;
      if (d < rr && d > 1e-3) {
        const nx = dx / d, nz = dz / d, p = rr - d; this.x += nx * p * 0.7; this.z += nz * p * 0.7;
        const rvn = (this.vx - o.vx) * nx + (this.vz - o.vz) * nz;
        if (rvn < 0) { this.vx -= rvn * nx * 0.9; this.vz -= rvn * nz * 0.9; hit = Math.max(hit, -rvn); o.hit?.(-rvn); }
      }
    }
    if (hit > 2.5 && performance.now() - this.lastHit > 250) { this.lastHit = performance.now(); this.damage = Math.min(100, this.damage + hit * 0.8); this.onHit?.(Math.min(1, hit / 15)); }
    // yükseklik: zemin ya da köprü; hızlı tepe aşımında havalanır
    const gy = this.groundY(this.x, this.z, this.y);
    this.vy -= 9.81 * dt; this.y += this.vy * dt;
    if (this.y <= gy) {
      if (this.airborne && this.vy < -6) this.onHit?.(Math.min(1, -this.vy / 20));
      this.y = gy; this.vy = 0; this.airborne = false;
    } else if (this.y > gy + 0.35) this.airborne = true;
    // eğim: dört tekerlek yüksekliği
    const hF = this.groundY(this.x + nfx * 1.35, this.z + nfz * 1.35, this.y), hB = this.groundY(this.x - nfx * 1.35, this.z - nfz * 1.35, this.y);
    const hR = this.groundY(this.x + nrx * 0.85, this.z + nrz * 0.85, this.y), hLf = this.groundY(this.x - nrx * 0.85, this.z - nrz * 0.85, this.y);
    const tp = Math.atan2(hF - hB, 2.7), tr = Math.atan2(hR - hLf, 1.7);
    if (!this.airborne) { this.pitch += (tp - this.pitch) * Math.min(1, dt * 12); this.roll += (tr - this.roll) * Math.min(1, dt * 12); }
    // deniz
    const water = this.G.kindAt(this.x, this.z) === 1 && this.y < 0.6;
    if (water) { this.inWater += dt; this.vx *= 1 - dt * 3; this.vz *= 1 - dt * 3; if (this.inWater > 0 && this.inWater - dt <= 0) this.onSplash?.(); if (this.inWater > 1.6) this.resetToRoad(); }
    else {
      this.inWater = 0; this.safeT += dt;
      if (this.safeT > 1 && !this.airborne) { this.safeT = 0; const n = this.R.nearest(this.x, this.z, 6, undefined, this.y); if (n) this.safe = { x: this.x, z: this.z, yaw: this.yaw }; }
    }
    // vites ve devir
    const v = Math.abs(vL);
    while (this.gear < GEARS.length - 1 && v > GEARS[this.gear] * 0.93) this.gear++;
    while (this.gear > 1 && v < GEARS[this.gear - 1] * 0.62) this.gear--;
    const lo = GEARS[this.gear - 1] * 0.5, hi = GEARS[this.gear];
    const targetRpm = vL < -0.3 ? 900 + v * 260 : 850 + Math.max(0, (v - lo) / (hi - lo)) * 5200 + c.throttle * (this.gear === 1 && v < 3 ? 1800 : 300);
    this.rpm += (Math.min(6800, targetRpm) - this.rpm) * Math.min(1, dt * 8);
    this.spin += (vL * dt) / 0.34;
  }
  /** görünümü fizik durumuna eşitle */
  sync(c: Controls, night: number) {
    this.obj.position.set(this.x, this.y, this.z);
    const lat = -this.yawRate * this.vLong * 0.012; // virajda dışa yatar
    this.obj.rotation.set(0, 0, 0); this.obj.rotateY(this.yaw); this.obj.rotateX(-this.pitch); this.obj.rotateZ(-this.roll + Math.max(-0.06, Math.min(0.06, lat)));
    this.wheels.forEach((w, i) => { w.rotation.set(this.spin, i < 2 ? -this.steer : 0, 0, 'YXZ'); });
    this.brakeMat.color.set(c.brake > 0 && this.vLong > 0.3 ? '#ff2a1a' : night > 0.3 ? '#a3150f' : '#5a0d0d');
    this.headMat.color.set(night > 0.3 ? '#ffffff' : '#e8e2d0');
    if (this.headlight) this.headlight.intensity = night * 60;
    this.poolMat.opacity = night * (this.headlight ? 0.25 : 0.55); this.pool.visible = night > 0.05;
    const [fx, fz] = this.fwd; this.pool.position.set(this.x, this.G.H(this.x + fx * 12, this.z + fz * 12) + 0.3, this.z); this.pool.rotation.set(0, this.yaw, 0);
  }
}
