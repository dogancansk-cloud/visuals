// Trafik ve yayalar: araçlar yol ağında sağdan gider, kavşakta yön seçer, ışıkta durur, öndekine göre yavaşlar.
// Yayalar kaldırımda yürür, araba yaklaşınca kenara kaçar. Hepsi yalnızca oyuncunun çevresinde yaşar.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Roads, Way } from '../world/roads';
import type { Ground } from '../world/ground';
import type { Signals } from './signals';
import { glowTexture } from '../world/props';
import { carBodyGeometry, type Obstacle } from './car';
import { sedanBody, wheelGeom, lampGeom, paintMaterial, CAR } from './carmodel';

const SPEED: Record<number, number> = { 1: 16, 2: 13.5, 3: 11.5, 4: 10, 5: 10, 6: 8, 7: 5, 9: 9.5 };
const PAINT = ['#f2c200', '#f2c200', '#f2c200', '#f4f4f2', '#f4f4f2', '#d0d2d4', '#2a2c30', '#1f3b70', '#8a1c1c', '#7d8a93', '#4a5a3a', '#c9b48a', '#9a9ea3'];
const CLOTH = ['#2d4a7a', '#7a2d2d', '#3d3d3d', '#d9d2c3', '#5b7a3a', '#a86b2d', '#6b4a8a', '#c94f3d', '#1e1e1e', '#8fa8c8', '#e6e1d6'];

interface Agent { way: Way; dir: 1 | -1; s: number; v: number; lane: number; kind: number; col: THREE.Color; x: number; y: number; z: number; yaw: number; stun: number; honk: number; len: number; alive: boolean; ob: Obstacle; pitch: number; ox: number; oz: number; sf: number }
interface Ped { way: Way; dir: 1 | -1; s: number; side: number; v: number; dodge: number; x: number; y: number; z: number; yaw: number; ph: number; col: THREE.Color; skin: THREE.Color; alive: boolean; wait: number; sc: number }

export class Traffic {
  private cars: Agent[] = []; private peds: Ped[] = [];
  private carMesh: THREE.InstancedMesh; private busMesh: THREE.InstancedMesh; private headMesh: THREE.InstancedMesh; private tailMesh: THREE.InstancedMesh; private beamMesh!: THREE.InstancedMesh; private beamMat!: THREE.MeshBasicMaterial;
  private pedBody: THREE.InstancedMesh; private pedLegs: THREE.InstancedMesh; private pedLegs2: THREE.InstancedMesh;
  obstacles: Obstacle[] = [];
  private driveWays: Way[]; private walkWays: Way[];
  private tmpM = new THREE.Matrix4(); private q = new THREE.Quaternion(); private e = new THREE.Euler(); private P = new THREE.Vector3(); private S = new THREE.Vector3(1, 1, 1);
  onPedHit: (() => void) | null = null;
  constructor(private R: Roads, private G: Ground, private sig: Signals, scene: THREE.Scene, private nCar: number, private nPed: number, private nPark = 90) {
    this.driveWays = R.ways.filter((w) => w.code !== 8 && w.code !== 7 && w.len > 25);
    this.walkWays = R.ways.filter((w) => w.code >= 2 && w.code <= 7 && !w.bridge && w.len > 20);
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
    const noUv = (g: THREE.BufferGeometry) => { if (g.index) g = g.toNonIndexed(); g.deleteAttribute('uv'); return g; };
    // otomobiller oyuncununkiyle aynı modelin hafif hâli (parlak boya, örnek rengiyle boyanır)
    const wheels = (zs: number[], xw: number, y: number, sc = 1) => zs.flatMap((z) => [-xw, xw].map((x) => wheelGeom(0).scale(sc, sc, sc).translate(x, y, z)));
    this.carMesh = new THREE.InstancedMesh(mergeGeometries([sedanBody('#ffffff', 0), ...wheels([CAR.wheelZ, -CAR.wheelZ], CAR.wheelX, CAR.wheelR)])!, paintMaterial(), nCar);
    this.busMesh = new THREE.InstancedMesh(mergeGeometries([noUv(carBodyGeometry('#ffffff', false, 'bus')), ...wheels([3.8, -3.6], 1.1, 0.46, 1.4)])!, mat, Math.max(2, Math.ceil(nCar / 10)));
    this.headMesh = new THREE.InstancedMesh(lampGeom(true), new THREE.MeshBasicMaterial({ color: '#fff4d6' }), nCar + 4);
    this.tailMesh = new THREE.InstancedMesh(lampGeom(false), new THREE.MeshBasicMaterial({ color: '#c01a10' }), nCar + 4);
    // gece: her aracın önünde yola düşen far ışığı
    this.beamMat = new THREE.MeshBasicMaterial({ map: glowTexture(false), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -12 });
    this.beamMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(5, 11).rotateX(-Math.PI / 2).translate(0, 0.14, 7), this.beamMat, nCar + 4); this.beamMesh.count = 0; this.beamMesh.frustumCulled = false; this.beamMesh.renderOrder = 4; this.beamMesh.visible = false; scene.add(this.beamMesh);
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
    if (w.hw) { const h = this.R.halfAt(w, k, t), full = w.width / 2; lat = Math.abs(lat) <= full ? lat * (h / full) : Math.sign(lat) * Math.max(0.3, h - 0.5); } // dar sokak: şerit ve yaya içeride kalsın
    const x = ax + (bx - ax) * t + rx * lat, z = az + (bz - az) * t + rz * lat;
    const y = w.ys ? this.R.yAt(w, k) * (1 - t) + this.R.yAt(w, k + 1) * t : this.G.H(x, z);
    return { x, y, z, dx, dz };
  }
  /** bu yolda kenara park var mı? 0 yok, 1 tek taraf, 2 iki taraf */
  private parkSides(w: Way) { if (w.bridge || w.code < 4 || w.code > 6 || w.len < 40) return 0; return (w.oneway ? w.width >= 8 : w.width >= 10) ? 2 : w.oneway && w.width >= 6 ? 1 : 0; }
  private laneOff(w: Way) {
    const ps = this.parkSides(w), hw = w.width / 2;
    if (ps && w.oneway) return ps === 2 ? 0 : -Math.max(0, Math.min(0.6, hw - 2.4)); // park eden araçlara sürtünmesin
    const base = w.oneway ? (w.lanes >= 2 ? (Math.random() < 0.5 ? -1 : 1) * w.width / 4 : 0) : Math.min(w.width / 4, 2.2) * (w.lanes >= 4 ? 1.4 : 1);
    return ps ? Math.min(base, hw - 3.2) : base;
  }
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
      Object.assign(ag, { way: w, dir, s, v: SPEED[w.code] * 0.7, lane: this.laneOff(w), kind: bus ? 1 : 0, col: new THREE.Color(bus ? (Math.random() < 0.5 ? '#2f6db3' : '#c9372c') : this.rnd(PAINT)), stun: 0, honk: 0, len: bus ? 11 : 4.4, alive: true, x: 0, y: 0, z: 0, yaw: 0, pitch: 0, ox: 0, oz: 0, sf: 0.85 + Math.random() * 0.3 });
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
      const w = a.way; let target = (SPEED[w.code] ?? 9) * a.sf; // her sürücünün hızı biraz farklı
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
      let turned = false;
      if (a.s >= w.len) { const extra = a.s - w.len; if (!this.nextWay(a)) { a.alive = false; continue; } a.s = extra; turned = true; }
      const p = this.pose(a.way, a.s, a.dir, a.lane);
      // kavşakta yeni yolun şeridine sıçramak yerine kayarak geç: eski konumla fark zamanla erir
      if (turned && a.x !== 0) { a.ox = a.x + Math.sin(a.yaw) * a.v * dt - p.x; a.oz = a.z + Math.cos(a.yaw) * a.v * dt - p.z; const l = Math.hypot(a.ox, a.oz); if (l > 9) { a.ox = a.oz = 0; } }
      const fade = Math.exp(-dt * Math.max(0.8, a.v * 0.28)); a.ox *= fade; a.oz *= fade;
      const nx = p.x + a.ox, nz = p.z + a.oz, mvx = nx - a.x, mvz = nz - a.z, mv = Math.hypot(mvx, mvz);
      // burun gidiş yönüne bakar (dönüşlerde yay çizer)
      const yaw = mv > 0.02 && a.x !== 0 && mv < 3 ? Math.atan2(mvx, mvz) : Math.atan2(p.dx, p.dz);
      let dy = yaw - a.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); a.yaw += dy * Math.min(1, dt * 7);
      a.ob.vx = mvx / Math.max(dt, 1e-3); a.ob.vz = mvz / Math.max(dt, 1e-3);
      a.x = nx; a.z = nz;
      const hf = a.way.ys ? p.y : this.G.H(p.x + p.dx * 1.5, p.z + p.dz * 1.5), hb = a.way.ys ? p.y : this.G.H(p.x - p.dx * 1.5, p.z - p.dz * 1.5);
      a.y = a.way.ys ? p.y + 0.05 : (hf + hb) / 2; a.pitch = Math.atan2(hf - hb, 3);
      a.ob.x = a.x; a.ob.z = a.z;
    }
    this.obstacles = this.cars.filter((a) => a.alive && Math.hypot(a.x - px, a.z - pz) < 30).map((a) => a.ob);
    this.updateParked(px, pz);
    // çizim
    let nc = 0, nb = 0, nl = 0; const m = this.tmpM, q = this.q, P = this.P, S = this.S;
    for (const a of this.cars) {
      if (!a.alive) continue;
      this.e.set(-a.pitch, a.yaw, 0, 'YXZ'); q.setFromEuler(this.e); P.set(a.x, a.y, a.z); m.compose(P, q, S);
      if (a.kind === 1) { if (nb < this.busMesh.instanceMatrix.count) { this.busMesh.setMatrixAt(nb, m); this.busMesh.setColorAt(nb++, a.col); } }
      else if (nc < this.carMesh.instanceMatrix.count) { this.carMesh.setMatrixAt(nc, m); this.carMesh.setColorAt(nc++, a.col); this.headMesh.setMatrixAt(nl, m); this.beamMesh.setMatrixAt(nl, m); this.tailMesh.setMatrixAt(nl++, m); }
    }
    this.carMesh.count = nc; this.busMesh.count = nb; this.headMesh.count = this.tailMesh.count = this.beamMesh.count = nl; this.beamMat.opacity = night * 0.3; this.beamMesh.visible = night > 0.05; this.beamMesh.instanceMatrix.needsUpdate = true;
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
      Object.assign(o, { way: w, dir, s: dir === 1 ? sAlong : w.len - sAlong, side: w.code === 7 ? (Math.random() - 0.5) * w.width : (w.width / 2 + 0.6 + Math.random() * 1.4) * (Math.random() < 0.5 ? -1 : 1), v: 1.1 + Math.random() * 0.6, dodge: 0, x: 0, y: 0, z: 0, yaw: 0, ph: Math.random() * 6, col: new THREE.Color(this.rnd(CLOTH)), skin: new THREE.Color(1, 1, 1), alive: true, wait: 0, sc: 0.88 + Math.random() * 0.2 });
      return o;
    }
    return null;
  }
  private updatePeds(dt: number, car: { x: number; z: number; vx: number; vz: number; speed: number }) {
    const px = car.x, pz = car.z;
    while (this.peds.length < this.nPed) { const p = this.spawnPed(null, px, pz, true); if (!p) break; this.peds.push(p); }
    for (const p of this.peds) if (!p.alive || Math.hypot(p.x - px, p.z - pz) > 300) { const r = this.spawnPed(p, px, pz, false); p.alive = !!r; }
    let n = 0; const m = this.tmpM, q = this.q, P = this.P, S = new THREE.Vector3(); const up = new THREE.Vector3(0, 1, 0);
    for (const p of this.peds) {
      if (!p.alive) continue; S.setScalar(p.sc);
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
      P.set(p.x, p.y + 0.9 * p.sc + bob, p.z); m.compose(P, q2, S); this.pedLegs.setMatrixAt(n, m);
      q2.setFromEuler(e.set(-sw, p.yaw, 0, 'YXZ')); m.compose(P, q2, S); this.pedLegs2.setMatrixAt(n, m);
      n++;
    }
    this.pedBody.count = this.pedLegs.count = this.pedLegs2.count = n;
    this.pedBody.instanceMatrix.needsUpdate = this.pedLegs.instanceMatrix.needsUpdate = this.pedLegs2.instanceMatrix.needsUpdate = true; if (this.pedBody.instanceColor) this.pedBody.instanceColor.needsUpdate = true;
  }
  // ---------- park etmiş araçlar: sokak kenarında, her seferinde aynı yerde (yol ve sıra numarasından türetilir) ----------
  private parkMesh: THREE.InstancedMesh | null = null; private parked: Obstacle[] = []; private parkAt = [1e9, 1e9];
  private updateParked(px: number, pz: number) {
    if (!this.parkMesh) {
      this.parkMesh = new THREE.InstancedMesh(this.carMesh.geometry, this.carMesh.material, this.nPark); this.parkMesh.castShadow = true; this.parkMesh.frustumCulled = false; this.parkMesh.count = 0; this.carMesh.parent!.add(this.parkMesh);
    }
    if (Math.hypot(px - this.parkAt[0], pz - this.parkAt[1]) > 50) {
      this.parkAt = [px, pz]; const R = 230, list: [number, number, number, number, number][] = []; // x, z, yaw, renk, uzaklık
      const h = (a: number, b: number, c: number) => { const v = Math.sin(a * 12.9898 + b * 78.233 + c * 37.719) * 43758.5453; return v - Math.floor(v); };
      for (const w of this.R.ways) {
        const ps = this.parkSides(w); if (!ps) continue; const both = ps === 2;
        if (Math.hypot(w.pts[0] - px, w.pts[1] - pz) > R + w.len) continue;
        const SLOT = 6.4, n = Math.floor((w.len - 28) / SLOT);
        for (let i = 0; i < n; i++) for (const side of both ? [-1, 1] : [1]) {
          if (h(w.i, i, side) > 0.42) continue;
          const s = 14 + (i + 0.5) * SLOT, hw = w.width / 2;
          const p = this.pose(w, s, 1, side * (hw - 1.08)); if (w.hw && this.R.halfAt(w, Math.min(w.hw.length - 2, Math.floor(s / 5))) < hw - 0.2) continue; // daralan yerde park yok
          const d = Math.hypot(p.x - px, p.z - pz); if (d > R) continue;
          list.push([p.x, p.z, Math.atan2(p.dx, p.dz) + (side < 0 && !w.oneway ? Math.PI : 0), Math.floor(h(w.i, i, 7) * PAINT.length), d]);
        }
      }
      list.sort((a, b) => a[4] - b[4]); const m = this.tmpM, q = this.q, P = this.P, S = this.S, c = new THREE.Color(); let k = 0; this.parked = [];
      for (const [x, z, yaw, ci] of list.slice(0, this.nPark)) {
        const hf = this.G.H(x + Math.sin(yaw) * 1.4, z + Math.cos(yaw) * 1.4), hb = this.G.H(x - Math.sin(yaw) * 1.4, z - Math.cos(yaw) * 1.4);
        this.e.set(-Math.atan2(hf - hb, 2.8), yaw, 0, 'YXZ'); q.setFromEuler(this.e); P.set(x, (hf + hb) / 2, z); m.compose(P, q, S);
        this.parkMesh.setMatrixAt(k, m); this.parkMesh.setColorAt(k++, c.set(PAINT[ci] === '#f2c200' ? '#8a8f96' : PAINT[ci]));
        // çarpışma: boyuna iki daire
        for (const o of [-1.1, 1.1]) this.parked.push({ x: x + Math.sin(yaw) * o, z: z + Math.cos(yaw) * o, r: -0.25, vx: 0, vz: 0 });
      }
      this.parkMesh.count = k; this.parkMesh.instanceMatrix.needsUpdate = true; if (this.parkMesh.instanceColor) this.parkMesh.instanceColor.needsUpdate = true;
    }
    for (const o of this.parked) if (Math.abs(o.x - px) < 12 && Math.abs(o.z - pz) < 12) this.obstacles.push(o);
  }
  /** küçük haritada nokta olarak çizmek için */
  dots() { return this.cars.filter((a) => a.alive).map((a) => [a.x, a.z]); }
}
