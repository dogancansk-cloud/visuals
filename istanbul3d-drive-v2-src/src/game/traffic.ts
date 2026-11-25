// Trafik ve yayalar: araçlar yol ağında sağdan gider, kavşakta yön seçer, ışıkta durur, öndekine göre yavaşlar.
// Yayalar kaldırımda yürür, araba yaklaşınca kenara kaçar. Hepsi yalnızca oyuncunun çevresinde yaşar.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Roads, Way } from '../world/roads';
import type { Ground } from '../world/ground';
import type { Signals } from './signals';
import { carBodyGeometry, wheelGeometry, type Obstacle } from './car';

const SPEED: Record<number, number> = { 1: 16, 2: 13.5, 3: 11.5, 4: 10, 5: 10, 6: 8, 7: 5, 9: 9.5 };
const PAINT = ['#f2c200', '#f2c200', '#f2c200', '#f4f4f2', '#f4f4f2', '#d0d2d4', '#2a2c30', '#1f3b70', '#8a1c1c', '#7d8a93', '#4a5a3a', '#c9b48a', '#9a9ea3'];
const CLOTH = ['#2d4a7a', '#7a2d2d', '#3d3d3d', '#d9d2c3', '#5b7a3a', '#a86b2d', '#6b4a8a', '#c94f3d', '#1e1e1e', '#8fa8c8', '#e6e1d6'];

interface Agent { way: Way; dir: 1 | -1; s: number; v: number; lane: number; kind: number; col: THREE.Color; x: number; y: number; z: number; yaw: number; stun: number; honk: number; len: number; alive: boolean; ob: Obstacle; pitch: number }
interface Ped { way: Way; dir: 1 | -1; s: number; side: number; v: number; dodge: number; x: number; y: number; z: number; yaw: number; ph: number; col: THREE.Color; skin: THREE.Color; alive: boolean; wait: number }

export class Traffic {
  private cars: Agent[] = []; private peds: Ped[] = [];
  private carMesh: THREE.InstancedMesh; private busMesh: THREE.InstancedMesh; private headMesh: THREE.InstancedMesh; private tailMesh: THREE.InstancedMesh;
  private pedBody: THREE.InstancedMesh; private pedLegs: THREE.InstancedMesh; private pedLegs2: THREE.InstancedMesh;
  obstacles: Obstacle[] = [];
  private driveWays: Way[]; private walkWays: Way[];
  private tmpM = new THREE.Matrix4(); private q = new THREE.Quaternion(); private e = new THREE.Euler(); private P = new THREE.Vector3(); private S = new THREE.Vector3(1, 1, 1);
  onPedHit: (() => void) | null = null;
  constructor(private R: Roads, private G: Ground, private sig: Signals, scene: THREE.Scene, private nCar: number, private nPed: number) {
    this.driveWays = R.ways.filter((w) => w.code !== 8 && w.code !== 7 && w.len > 25);
    this.walkWays = R.ways.filter((w) => w.code >= 2 && w.code <= 7 && !w.bridge && w.len > 20);
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
    const wheels = (zs: number[], xw: number) => zs.flatMap((z) => [-xw, xw].map((x) => wheelGeometry().translate(x, 0.34, z)));
    this.carMesh = new THREE.InstancedMesh(mergeGeometries([carBodyGeometry('#ffffff'), ...wheels([1.35, -1.35], 0.86)])!, mat, nCar);
    this.busMesh = new THREE.InstancedMesh(mergeGeometries([carBodyGeometry('#ffffff', false, 'bus'), ...wheels([3.8, -3.6], 1.1)])!, mat, Math.max(2, Math.ceil(nCar / 10)));
    const lightG = (z: number, y: number) => mergeGeometries([new THREE.BoxGeometry(0.36, 0.11, 0.06).translate(-0.6, y, z), new THREE.BoxGeometry(0.36, 0.11, 0.06).translate(0.6, y, z)])!;
    this.headMesh = new THREE.InstancedMesh(lightG(2.24, 0.7), new THREE.MeshBasicMaterial({ color: '#fff4d6' }), nCar + 4);
    this.tailMesh = new THREE.InstancedMesh(lightG(-2.25, 0.78), new THREE.MeshBasicMaterial({ color: '#c01a10' }), nCar + 4);
    // yaya: gövde+baş, bacaklar ayrı (yürürken sallanır)
    const col = (g: THREE.BufferGeometry, c: string) => { g = g.toNonIndexed(); const cc = new THREE.Color(c), n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { a[i * 3] = cc.r; a[i * 3 + 1] = cc.g; a[i * 3 + 2] = cc.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g; };
    this.pedBody = new THREE.InstancedMesh(mergeGeometries([col(new THREE.BoxGeometry(0.46, 0.66, 0.26).translate(0, 1.2, 0), '#ffffff'), col(new THREE.SphereGeometry(0.13, 8, 6).translate(0, 1.68, 0), '#e0b896'), col(new THREE.BoxGeometry(0.12, 0.58, 0.12).translate(-0.3, 1.18, 0), '#ffffff'), col(new THREE.BoxGeometry(0.12, 0.58, 0.12).translate(0.3, 1.18, 0), '#ffffff')])!, mat, nPed);
    this.pedLegs = new THREE.InstancedMesh(col(new THREE.BoxGeometry(0.16, 0.86, 0.16).translate(-0.12, -0.43, 0), '#30343c'), mat, nPed);
    this.pedLegs2 = new THREE.InstancedMesh(col(new THREE.BoxGeometry(0.16, 0.86, 0.16).translate(0.12, -0.43, 0), '#30343c'), mat, nPed);
    for (const m of [this.carMesh, this.busMesh, this.headMesh, this.tailMesh, this.pedBody, this.pedLegs, this.pedLegs2]) { m.count = 0; m.frustumCulled = false; m.castShadow = m !== this.headMesh && m !== this.tailMesh; scene.add(m); }
  }
  private rnd<T>(a: T[]) { return a[Math.floor(Math.random() * a.length)]; }
  // ---------- araçlar ----------
  private pose(w: Way, s: number, dir: 1 | -1, lat: number) {
    const ss = dir === 1 ? s : w.len - s; const cum = w.cum; let k = 0; let lo = 0, hi = cum.length - 1;
    while (lo < hi) { const m = (lo + hi + 1) >> 1; if (cum[m] <= ss) lo = m; else hi = m - 1; } k = Math.min(lo, cum.length - 2);
    const t = Math.max(0, Math.min(1, (ss - cum[k]) / (cum[k + 1] - cum[k] || 1)));
    const ax = w.pts[2 * k], az = w.pts[2 * k + 1], bx = w.pts[2 * k + 2], bz = w.pts[2 * k + 3];
    let dx = (bx - ax) * dir, dz = (bz - az) * dir; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
    const rx = -dz, rz = dx; // sağ
    const x = ax + (bx - ax) * t + rx * lat, z = az + (bz - az) * t + rz * lat;
    const y = w.ys ? this.R.yAt(w, k) * (1 - t) + this.R.yAt(w, k + 1) * t : this.G.H(x, z);
    return { x, y, z, dx, dz };
  }
  private laneOff(w: Way) { return w.oneway ? (w.lanes >= 2 ? (Math.random() < 0.5 ? -1 : 1) * w.width / 4 : 0) : Math.min(w.width / 4, 2.2) * (w.lanes >= 4 ? 1.4 : 1); }
  private spawnCar(a: Agent | null, px: number, pz: number, fx: number, fz: number, initial: boolean) {
    for (let tries = 0; tries < 30; tries++) {
      // yakına yoğun, ana yollara ağırlıklı
      const ang = Math.random() * Math.PI * 2, rr = (initial ? 30 : 120) + Math.pow(Math.random(), 1.4) * (initial ? 330 : 260);
      const big = Math.random() < 0.65;
      const n = this.R.nearest(px + Math.cos(ang) * rr, pz + Math.sin(ang) * rr, 70, (w) => w.code !== 8 && w.code !== 7 && w.len > 25 && (!big || w.code <= 4));
      if (!n) continue;
      const d = Math.hypot(n.px - px, n.pz - pz); if (d < (initial ? 25 : 110) || d > 420) continue;
      // görüş alanının önünde birden belirmesin
      if (!initial && ((n.px - px) * fx + (n.pz - pz) * fz) / d > 0.5 && d < 250) continue;
      const w = n.w; const dir: 1 | -1 = w.oneway ? 1 : Math.random() < 0.5 ? 1 : -1;
      const sAlong = w.cum[n.k] + (w.cum[n.k + 1] - w.cum[n.k]) * n.t; const s = dir === 1 ? sAlong : w.len - sAlong;
      if (this.cars.some((c) => c.alive && c.way === w && c.dir === dir && Math.abs(c.s - s) < 12)) continue;
      const bus = Math.random() < 0.07 && w.code <= 3;
      const ag: Agent = a || ({} as Agent);
      Object.assign(ag, { way: w, dir, s, v: SPEED[w.code] * 0.7, lane: this.laneOff(w), kind: bus ? 1 : 0, col: new THREE.Color(bus ? (Math.random() < 0.5 ? '#2f6db3' : '#c9372c') : this.rnd(PAINT)), stun: 0, honk: 0, len: bus ? 11 : 4.4, alive: true, x: 0, y: 0, z: 0, yaw: 0, pitch: 0 });
      ag.ob = { x: 0, z: 0, r: bus ? 2.6 : 1.3, vx: 0, vz: 0, hit: () => { ag.stun = 2.5; ag.v = 0; } };
      return ag;
    }
    return null;
  }
  private nextWay(a: Agent): boolean {
    const w = a.way; const nodeId = a.dir === 1 ? w.b : w.a; const node = this.R.nodes[nodeId];
    const opts = node.ways.filter((r) => r.w !== w.i && this.R.ways[r.w].code !== 8 && this.R.ways[r.w].code !== 7 && !(this.R.ways[r.w].oneway && r.end === 1));
    if (!opts.length) { if (w.oneway) return false; a.dir = a.dir === 1 ? -1 : 1; a.s = 0; return true; } // çıkmaz: geri dön
    // yön değişimi az olanı ve büyük yolları biraz tercih et
    const [ex, ez] = (() => { const p = this.pose(w, Math.max(0, w.len - 3), a.dir, 0); return [p.dx, p.dz]; })();
    let best = opts[0], bs = -1e9;
    for (const o of opts) {
      const nw = this.R.ways[o.w]; const dir: 1 | -1 = o.end === 0 ? 1 : -1; const p = this.pose(nw, 3, dir, 0);
      const score = (p.dx * ex + p.dz * ez) * 0.6 + (5 - Math.min(5, nw.code)) * 0.15 + Math.random() * 1.1;
      if (score > bs) { bs = score; best = o; }
    }
    a.way = this.R.ways[best.w]; a.dir = best.end === 0 ? 1 : -1; a.s = 0; a.lane = this.laneOff(a.way); return true;
  }
  update(dt: number, car: { x: number; z: number; y: number; vx: number; vz: number; fwd: [number, number]; speed: number }, night: number) {
    const px = car.x, pz = car.z, [fx, fz] = car.fwd;
    // nüfus
    while (this.cars.length < this.nCar) { const a = this.spawnCar(null, px, pz, fx, fz, true); if (!a) break; this.cars.push(a); }
    for (const a of this.cars) if (!a.alive || Math.hypot(a.x - px, a.z - pz) > 520) { const r = this.spawnCar(a, px, pz, fx, fz, false); a.alive = !!r; }
    // hareket
    for (const a of this.cars) {
      if (!a.alive) continue;
      const w = a.way; let target = SPEED[w.code] ?? 9;
      if (a.stun > 0) { a.stun -= dt; target = 0; }
      // kavşak / ışık
      const rem = w.len - a.s, nodeId = a.dir === 1 ? w.b : w.a;
      const sd = this.sig.stopDist(nodeId);
      if (sd > 0) {
        const L = this.sig.state(nodeId, w.i); const toStop = rem - sd;
        if (L !== 'g' && toStop > -1 && !(L === 'y' && toStop < a.v * 0.9)) target = Math.min(target, Math.max(0, Math.sqrt(Math.max(0, 2 * 3.5 * (toStop - 1)))));
      } else if (rem < 18 && this.R.nodes[nodeId].ways.length >= 3) target = Math.min(target, 6.5);
      // öndeki araç ya da oyuncu
      const me = this.pose(w, a.s, a.dir, a.lane);
      let gapMin = 1e9;
      const look = (ox: number, oz: number, len: number) => {
        const dx = ox - me.x, dz = oz - me.z, along = dx * me.dx + dz * me.dz; if (along <= 0 || along > 30) return;
        const lat = Math.abs(-dx * me.dz + dz * me.dx); if (lat > 2.2) return;
        gapMin = Math.min(gapMin, along - len / 2 - a.len / 2);
      };
      for (const b of this.cars) if (b !== a && b.alive && Math.abs(b.x - me.x) < 32 && Math.abs(b.z - me.z) < 32) look(b.x, b.z, b.len);
      look(px, pz, 4.4);
      if (gapMin < 1e8) { target = Math.min(target, Math.max(0, (gapMin - 3) * 0.9)); if (gapMin < 6 && Math.hypot(px - me.x, pz - me.z) < 9 && car.speed < 1) a.honk += dt; }
      const acc = target > a.v ? 2.6 : 6; a.v += Math.sign(target - a.v) * Math.min(Math.abs(target - a.v), acc * dt);
      a.s += a.v * dt;
      if (a.s >= w.len) { const extra = a.s - w.len; if (!this.nextWay(a)) { a.alive = false; continue; } a.s = extra; }
      const p = this.pose(a.way, a.s, a.dir, a.lane);
      const yaw = Math.atan2(p.dx, p.dz);
      // dönüşlerde yumuşat
      let dy = yaw - a.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); a.yaw += dy * Math.min(1, dt * 8);
      a.ob.vx = (p.x - a.x) / Math.max(dt, 1e-3); a.ob.vz = (p.z - a.z) / Math.max(dt, 1e-3);
      a.x = p.x; a.z = p.z;
      const hf = a.way.ys ? p.y : this.G.H(p.x + p.dx * 1.5, p.z + p.dz * 1.5), hb = a.way.ys ? p.y : this.G.H(p.x - p.dx * 1.5, p.z - p.dz * 1.5);
      a.y = a.way.ys ? p.y + 0.05 : (hf + hb) / 2; a.pitch = Math.atan2(hf - hb, 3);
      a.ob.x = a.x; a.ob.z = a.z;
    }
    this.obstacles = this.cars.filter((a) => a.alive && Math.hypot(a.x - px, a.z - pz) < 30).map((a) => a.ob);
    // çizim
    let nc = 0, nb = 0, nl = 0; const m = this.tmpM, q = this.q, P = this.P, S = this.S;
    for (const a of this.cars) {
      if (!a.alive) continue;
      this.e.set(-a.pitch, a.yaw, 0, 'YXZ'); q.setFromEuler(this.e); P.set(a.x, a.y, a.z); m.compose(P, q, S);
      if (a.kind === 1) { if (nb < this.busMesh.instanceMatrix.count) { this.busMesh.setMatrixAt(nb, m); this.busMesh.setColorAt(nb++, a.col); } }
      else if (nc < this.carMesh.instanceMatrix.count) { this.carMesh.setMatrixAt(nc, m); this.carMesh.setColorAt(nc++, a.col); this.headMesh.setMatrixAt(nl, m); this.tailMesh.setMatrixAt(nl++, m); }
    }
    this.carMesh.count = nc; this.busMesh.count = nb; this.headMesh.count = this.tailMesh.count = night > 0.2 ? nl : 0;
    for (const mm of [this.carMesh, this.busMesh, this.headMesh, this.tailMesh]) { mm.instanceMatrix.needsUpdate = true; if (mm.instanceColor) mm.instanceColor.needsUpdate = true; }
    this.updatePeds(dt, car);
  }
  // ---------- yayalar ----------
  private spawnPed(p: Ped | null, px: number, pz: number, initial: boolean): Ped | null {
    for (let tries = 0; tries < 20; tries++) {
      const n = this.R.nearest(px + (Math.random() - 0.5) * 520, pz + (Math.random() - 0.5) * 520, 50, (w) => w.code >= 2 && w.code <= 7 && !w.bridge && w.len > 20);
      if (!n) continue; const d = Math.hypot(n.px - px, n.pz - pz); if (d < (initial ? 15 : 90) || d > 260) continue;
      const w = n.w; const dir: 1 | -1 = Math.random() < 0.5 ? 1 : -1; const sAlong = w.cum[n.k] + (w.cum[n.k + 1] - w.cum[n.k]) * n.t;
      const o = p || ({} as Ped);
      Object.assign(o, { way: w, dir, s: dir === 1 ? sAlong : w.len - sAlong, side: w.code === 7 ? (Math.random() - 0.5) * w.width : (w.width / 2 + 0.6 + Math.random() * 1.4) * (Math.random() < 0.5 ? -1 : 1), v: 1.1 + Math.random() * 0.6, dodge: 0, x: 0, y: 0, z: 0, yaw: 0, ph: Math.random() * 6, col: new THREE.Color(this.rnd(CLOTH)), skin: new THREE.Color(1, 1, 1), alive: true, wait: 0 });
      return o;
    }
    return null;
  }
  private updatePeds(dt: number, car: { x: number; z: number; vx: number; vz: number; speed: number }) {
    const px = car.x, pz = car.z;
    while (this.peds.length < this.nPed) { const p = this.spawnPed(null, px, pz, true); if (!p) break; this.peds.push(p); }
    for (const p of this.peds) if (!p.alive || Math.hypot(p.x - px, p.z - pz) > 300) { const r = this.spawnPed(p, px, pz, false); p.alive = !!r; }
    let n = 0; const m = this.tmpM, q = this.q, P = this.P, S = this.S; const up = new THREE.Vector3(0, 1, 0);
    for (const p of this.peds) {
      if (!p.alive) continue;
      // araba üstüne geliyorsa kenara kaç
      const dx = p.x - px, dz = p.z - pz, d = Math.hypot(dx, dz);
      if (d < 9 && car.speed > 2.5) {
        const sp = car.speed, ux = car.vx / sp, uz = car.vz / sp, ahead = -(dx * ux + dz * uz) < 0, lat = dx * -uz + dz * ux;
        if (ahead && Math.abs(lat) < 2.6) { p.dodge = Math.sign(lat || 1) * 3; p.wait = 1.5; }
        if (d < 1.4) { this.onPedHit?.(); p.dodge = Math.sign(lat || 1) * 4; }
      }
      if (p.wait > 0) p.wait -= dt; else { p.s += p.v * dt; p.ph += p.v * dt * 4.2; }
      if (p.s > p.way.len - 2) { p.dir = p.dir === 1 ? -1 : 1; p.s = 2; p.side = -p.side * (Math.random() < 0.3 ? -1 : 1); }
      p.dodge *= Math.exp(-dt * 0.6);
      const pose = this.pose(p.way, p.s, p.dir, p.side + p.dodge);
      p.x = pose.x; p.z = pose.z; p.y = this.G.H(p.x, p.z) + (p.way.code !== 7 ? 0.12 : 0); p.yaw = Math.atan2(pose.dx, pose.dz);
      q.setFromAxisAngle(up, p.yaw); const bob = p.wait > 0 ? 0 : Math.abs(Math.sin(p.ph)) * 0.05;
      P.set(p.x, p.y + bob, p.z); m.compose(P, q, S); this.pedBody.setMatrixAt(n, m); this.pedBody.setColorAt(n, p.col);
      // bacak: kalçadan salınım
      const sw = p.wait > 0 ? 0 : Math.sin(p.ph) * 0.45; const e = this.e.set(sw, p.yaw, 0, 'YXZ'); const q2 = new THREE.Quaternion().setFromEuler(e);
      P.set(p.x, p.y + 0.9 + bob, p.z); m.compose(P, q2, S); this.pedLegs.setMatrixAt(n, m);
      q2.setFromEuler(e.set(-sw, p.yaw, 0, 'YXZ')); m.compose(P, q2, S); this.pedLegs2.setMatrixAt(n, m);
      n++;
    }
    this.pedBody.count = this.pedLegs.count = this.pedLegs2.count = n;
    this.pedBody.instanceMatrix.needsUpdate = this.pedLegs.instanceMatrix.needsUpdate = this.pedLegs2.instanceMatrix.needsUpdate = true; if (this.pedBody.instanceColor) this.pedBody.instanceColor.needsUpdate = true;
  }
  /** küçük haritada nokta olarak çizmek için */
  dots() { return this.cars.filter((a) => a.alive).map((a) => [a.x, a.z]); }
}
