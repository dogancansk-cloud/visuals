// Trafik ve yayalar: araçlar yol ağında sağdan gider, kavşakta yön seçer, ışıkta durur, öndekine göre yavaşlar.
// Yayalar kaldırımda yürür, araba yaklaşınca kenara kaçar. Hepsi yalnızca oyuncunun çevresinde yaşar.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Roads, Way } from '../world/roads';
import type { Ground } from '../world/ground';
import type { Signals } from './signals';
import { glowTexture } from '../world/props';
import { carBodyGeometry, type Obstacle } from './car';
import { sedanBody, wheelGeom, lampGeom, paintMaterial, boxp, CAR } from './carmodel';
import { vanGeom, busGeom, truckGeom, motoGeom, fleetMaterial, fxPatch } from './vehicles';
import { bodyGeom, armGeom, legGeom, PED } from './people';

const SPEED: Record<number, number> = { 1: 16, 2: 13.5, 3: 11.5, 4: 10, 5: 10, 6: 8, 7: 5, 9: 9.5 };
const PAINT = ['#f4f4f2', '#f4f4f2', '#d0d2d4', '#2a2c30', '#1f3b70', '#8a1c1c', '#7d8a93', '#4a5a3a', '#c9b48a', '#9a9ea3'];
// araç türleri: 0 otomobil, 1 otobüs, 2 taksi, 3 minibüs, 4 kamyonet, 5 motokurye
const KIND = [
  { len: 4.4, r: 1.3, sf: 1, colors: PAINT },
  { len: 11.5, r: 2.6, sf: 0.85, colors: ['#d8322a', '#2f6db3', '#e2b021', '#2f9e97', '#7a4fa3'] },
  { len: 4.4, r: 1.3, sf: 1.05, colors: ['#f2c200'] },
  { len: 5.2, r: 1.5, sf: 0.95, colors: ['#f4f4f2', '#e9e4d2', '#2f6db3', '#f4f4f2', '#9aa0a6', '#e2b021'] },
  { len: 5.6, r: 1.5, sf: 0.9, colors: ['#f4f4f2', '#f4f4f2', '#2f5d9a', '#b3261e', '#d0d2d4'] },
  { len: 1.9, r: 0.6, sf: 1.15, colors: ['#d8322a', '#f2c200', '#2f9e60', '#f47b20', '#f4f4f2'] },
];
const PANTS = ['#2b3550', '#30343c', '#1e1e1e', '#5a5146', '#6b6f78', '#3d4a5c', '#7a6a55', '#22303f'];
const CLOTH = ['#2d4a7a', '#7a2d2d', '#3d3d3d', '#d9d2c3', '#5b7a3a', '#a86b2d', '#6b4a8a', '#c94f3d', '#1e1e1e', '#8fa8c8', '#e6e1d6'];

interface Agent { way: Way; dir: 1 | -1; s: number; v: number; lane: number; kind: number; col: THREE.Color; x: number; y: number; z: number; yaw: number; stun: number; honk: number; len: number; alive: boolean; ob: Obstacle; pitch: number; ox: number; oz: number; sf: number }
interface Ped { way: Way; dir: 1 | -1; s: number; side: number; v: number; ex: number; ez: number; tx: number; tz: number; hold: number; ox: number; oz: number; x: number; y: number; z: number; yaw: number; ph: number; col: THREE.Color; col2: THREE.Color; variant: number; alive: boolean; wait: number; sc: number; run: number }

const ZERO = new THREE.Matrix4().makeScale(0, 0, 0);
const walkable = (w: Way) => w.code >= 2 && w.code <= 7 && !w.bridge && w.len > 20;

export class Traffic {
  private cars: Agent[] = []; private peds: Ped[] = [];
  private carMesh: THREE.InstancedMesh; private kindMesh: THREE.InstancedMesh[] = []; private headMesh: THREE.InstancedMesh; private tailMesh: THREE.InstancedMesh; private beamMesh!: THREE.InstancedMesh; private beamMat!: THREE.MeshBasicMaterial;
  private pedBodies: THREE.InstancedMesh[] = []; private pedLimbs: THREE.InstancedMesh[] = []; // kol sol/sağ, bacak sol/sağ
  obstacles: Obstacle[] = [];
  /** araçların arkasında bekleyeceği başka engeller (tramvay vagonları): x, z çiftleri */
  blockers: number[] = [];
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
    const fleet = fleetMaterial(), cap = (f: number) => Math.max(3, Math.ceil(nCar * f) + 2);
    const taxi = new THREE.InstancedMesh(mergeGeometries([sedanBody('#ffffff', 0), boxp(0.56, 0.15, 0.22, 0, 1.55, -0.3, new THREE.Color('#fff6c8')), ...wheels([CAR.wheelZ, -CAR.wheelZ], CAR.wheelX, CAR.wheelR)])!, this.carMesh.material, cap(0.3));
    this.kindMesh = [this.carMesh, new THREE.InstancedMesh(busGeom(), fleet, cap(0.14)), taxi, new THREE.InstancedMesh(vanGeom(), fleet, cap(0.22)), new THREE.InstancedMesh(truckGeom(), fleet, cap(0.18)), new THREE.InstancedMesh(motoGeom(), fleet, cap(0.22))];
    this.headMesh = new THREE.InstancedMesh(lampGeom(true), new THREE.MeshBasicMaterial({ color: '#fff4d6' }), nCar + 4);
    this.tailMesh = new THREE.InstancedMesh(lampGeom(false), new THREE.MeshBasicMaterial({ color: '#c01a10' }), nCar + 4);
    // gece: her aracın önünde yola düşen far ışığı
    this.beamMat = new THREE.MeshBasicMaterial({ map: glowTexture(false), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -12 });
    this.beamMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(5, 11).rotateX(-Math.PI / 2).translate(0, 0.14, 7), this.beamMat, nCar + 4); this.beamMesh.count = 0; this.beamMesh.frustumCulled = false; this.beamMesh.renderOrder = 4; this.beamMesh.visible = false; scene.add(this.beamMesh);
    // yayalar: üç gövde tipi + sallanan kollar ve bacaklar
    const pm = fxPatch(new THREE.MeshLambertMaterial({ vertexColors: true }));
    this.pedBodies = ([0, 1, 2] as const).map((v) => new THREE.InstancedMesh(bodyGeom(v), pm, nPed));
    this.pedLimbs = [armGeom(), armGeom(), legGeom(), legGeom()].map((g) => new THREE.InstancedMesh(g, pm, nPed));
    for (const m of [...this.kindMesh, this.headMesh, this.tailMesh, ...this.pedBodies, ...this.pedLimbs]) { m.count = 0; m.frustumCulled = false; m.castShadow = m !== this.headMesh && m !== this.tailMesh; scene.add(m); }
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
      const rk = Math.random(); let kind = rk < 0.17 ? 2 : rk < 0.27 ? 3 : rk < 0.34 ? 4 : rk < 0.45 ? 5 : rk < 0.52 ? 1 : 0;
      if (kind === 1 && w.code > 3) kind = 0; if (kind === 4 && w.code > 5) kind = 3; const K = KIND[kind];
      const ag: Agent = a || ({} as Agent);
      Object.assign(ag, { way: w, dir, s, v: SPEED[w.code] * 0.7, lane: this.laneOff(w) + (kind === 5 ? 0.5 : 0), kind, col: new THREE.Color(this.rnd(K.colors)), stun: 0, honk: 0, len: K.len, alive: true, x: 0, y: 0, z: 0, yaw: 0, pitch: 0, ox: 0, oz: 0, sf: (0.85 + Math.random() * 0.3) * K.sf });
      ag.ob = { x: 0, z: 0, r: K.r, vx: 0, vz: 0, hit: () => { ag.stun = 2.5; ag.v = 0; } };
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
      for (let i = 0; i < this.blockers.length; i += 2) if (Math.abs(this.blockers[i] - me.x) < 34 && Math.abs(this.blockers[i + 1] - me.z) < 34) look(this.blockers[i], this.blockers[i + 1], 9.6);
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
    let nl = 0; const cnt = [0, 0, 0, 0, 0, 0]; const m = this.tmpM, q = this.q, P = this.P, S = this.S;
    for (const a of this.cars) {
      if (!a.alive) continue;
      this.e.set(-a.pitch, a.yaw, 0, 'YXZ'); q.setFromEuler(this.e); P.set(a.x, a.y, a.z); m.compose(P, q, S);
      const me = this.kindMesh[a.kind]; if (cnt[a.kind] >= me.instanceMatrix.count) continue;
      me.setMatrixAt(cnt[a.kind], m); me.setColorAt(cnt[a.kind]++, a.col);
      if (nl < this.beamMesh.instanceMatrix.count) { this.beamMesh.setMatrixAt(nl, m); if (a.kind === 0 || a.kind === 2) { this.headMesh.setMatrixAt(nl, m); this.tailMesh.setMatrixAt(nl, m); } else { this.headMesh.setMatrixAt(nl, ZERO); this.tailMesh.setMatrixAt(nl, ZERO); } nl++; }
    }
    this.kindMesh.forEach((me, i) => { me.count = cnt[i]; me.instanceMatrix.needsUpdate = true; if (me.instanceColor) me.instanceColor.needsUpdate = true; });
    this.headMesh.count = this.tailMesh.count = this.beamMesh.count = nl; this.beamMat.opacity = night * 0.3; this.beamMesh.visible = night > 0.05;
    for (const mm of [this.headMesh, this.tailMesh, this.beamMesh]) mm.instanceMatrix.needsUpdate = true;
    this.updatePeds(dt, car);
  }
  // ---------- yayalar ----------
  private pedSide(w: Way) { return w.code === 7 ? (Math.random() - 0.5) * w.width * 0.8 : (w.width / 2 + 0.7 + Math.random() * 1.3) * (Math.random() < 0.5 ? -1 : 1); }
  private spawnPed(p: Ped | null, px: number, pz: number, initial: boolean): Ped | null {
    for (let tries = 0; tries < 20; tries++) {
      const n = this.R.nearest(px + (Math.random() - 0.5) * 520, pz + (Math.random() - 0.5) * 520, 50, walkable);
      if (!n) continue; const d = Math.hypot(n.px - px, n.pz - pz); if (d < (initial ? 15 : 90) || d > 260) continue;
      const w = n.w; const dir: 1 | -1 = Math.random() < 0.5 ? 1 : -1; const sAlong = w.cum[n.k] + (w.cum[n.k + 1] - w.cum[n.k]) * n.t;
      const o = p || ({} as Ped), kid = Math.random() < 0.07;
      Object.assign(o, { way: w, dir, s: dir === 1 ? sAlong : w.len - sAlong, side: this.pedSide(w), v: 1.05 + Math.random() * 0.6, ex: 0, ez: 0, tx: 0, tz: 0, hold: 0, ox: 0, oz: 0, x: 0, y: 0, z: 0, yaw: 0, ph: Math.random() * 6, col: new THREE.Color(this.rnd(CLOTH)), col2: new THREE.Color(this.rnd(PANTS)), variant: Math.random() < 0.45 ? 0 : Math.random() < 0.7 ? 1 : 2, alive: true, wait: 0, sc: kid ? 0.6 + Math.random() * 0.12 : 0.9 + Math.random() * 0.18, run: 0 });
      return o;
    }
    return null;
  }
  /** yol sonu: ışık varsa yeşili bekler, sonra karşıya geçip başka bir sokağın kaldırımına devam eder */
  private pedTurn(p: Ped) {
    const w = p.way, nodeId = p.dir === 1 ? w.b : w.a, node = this.R.nodes[nodeId], sd = this.sig.stopDist(nodeId);
    if (sd > 0 && this.sig.state(nodeId, w.i) !== 'g') { p.wait = 0.4; return; }
    const opts = node.ways.filter((r) => r.w !== w.i && walkable(this.R.ways[r.w]));
    if (!opts.length || Math.random() < 0.18) { p.dir = p.dir === 1 ? -1 : 1; p.s = Math.max(2, sd); p.side = -p.side; return; }
    const o = this.rnd(opts), nw = this.R.ways[o.w]; const bx = p.x - p.ex, bz = p.z - p.ez;
    p.way = nw; p.dir = o.end === 0 ? 1 : -1; p.s = Math.min(nw.len - 3, Math.max(2, sd)); p.side = this.pedSide(nw);
    const np = this.pose(nw, p.s, p.dir, p.side); p.ox = bx - np.x; p.oz = bz - np.z; if (Math.hypot(p.ox, p.oz) > 45) p.ox = p.oz = 0;
  }
  private updatePeds(dt: number, car: { x: number; z: number; vx: number; vz: number; speed: number }) {
    const px = car.x, pz = car.z, sp = car.speed;
    while (this.peds.length < this.nPed) {
      const p = this.spawnPed(null, px, pz, true); if (!p) break; this.peds.push(p);
      if (Math.random() < 0.3 && this.peds.length < this.nPed) this.peds.push({ ...p, side: p.side + (p.side < 0 ? -0.62 : 0.62), ph: p.ph + 1.7, col: new THREE.Color(this.rnd(CLOTH)), col2: new THREE.Color(this.rnd(PANTS)), variant: Math.floor(Math.random() * 3), sc: 0.9 + Math.random() * 0.18 }); // yan yana yürüyen ikili
    }
    for (const p of this.peds) if (!p.alive || Math.hypot(p.x - px, p.z - pz) > 300) { const r = this.spawnPed(p, px, pz, false); p.alive = !!r; }
    let n = 0; const nb = [0, 0, 0]; const m = this.tmpM, q = this.q, P = this.P, S = new THREE.Vector3(), e = this.e;
    for (const p of this.peds) {
      if (!p.alive) continue; S.setScalar(p.sc);
      // araba üstüne geliyorsa yolundan çekil (çarpışma olmaz)
      const dx = p.x - px, dz = p.z - pz, d = Math.hypot(dx, dz); p.run = Math.max(0, p.run - dt * 1.5);
      if (d < 16 && sp > 1.5) {
        const ux = car.vx / sp, uz = car.vz / sp, along = dx * ux + dz * uz, lat = -dx * uz + dz * ux;
        if (along > -1.5 && along < 3 + sp * 1.25 && Math.abs(lat) < 2.4) { const sg = lat >= 0 ? 1 : -1, need = 3.1 - Math.abs(lat); p.tx = p.ex - uz * sg * need; p.tz = p.ez + ux * sg * need; const l = Math.hypot(p.tx, p.tz); if (l > 5) { p.tx *= 5 / l; p.tz *= 5 / l; } p.hold = 1.6; p.run = 1; }
      }
      if (p.hold > 0) p.hold -= dt; else { const k = Math.exp(-dt * 0.9); p.tx *= k; p.tz *= k; }
      const ek = Math.min(1, dt * 6); p.ex += (p.tx - p.ex) * ek; p.ez += (p.tz - p.ez) * ek;
      const moving = p.wait <= 0;
      if (!moving) p.wait -= dt; else { p.s += p.v * dt; const k = Math.exp(-p.v * dt * 0.2); p.ox *= k; p.oz *= k; }
      const sdEnd = this.sig.stopDist(p.dir === 1 ? p.way.b : p.way.a);
      if (p.s > p.way.len - Math.max(2, sdEnd)) { p.s = p.way.len - Math.max(2, sdEnd); this.pedTurn(p); }
      const pose = this.pose(p.way, p.s, p.dir, p.side);
      let nx = pose.x + p.ox + p.ex, nz = pose.z + p.oz + p.ez;
      { const ddx = nx - px, ddz = nz - pz, dd = Math.hypot(ddx, ddz); if (dd < 1.5 && dd > 0.01) { const k = (1.5 - dd) / dd; p.ex += ddx * k; p.ez += ddz * k; p.tx = p.ex; p.tz = p.ez; p.hold = 1; nx += ddx * k; nz += ddz * k; } } // araba değmesin
      const mvx = nx - p.x, mvz = nz - p.z, mv = Math.hypot(mvx, mvz), stepV = mv / Math.max(dt, 1e-3);
      const yawT = mv > 0.004 && p.x !== 0 && mv < 2 ? Math.atan2(mvx, mvz) : Math.atan2(pose.dx, pose.dz);
      let dy = yawT - p.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); p.yaw += dy * Math.min(1, dt * (p.x === 0 ? 1e3 : 9));
      const walking = p.x !== 0 && stepV > 0.25; if (walking) p.ph += Math.min(stepV, 5) * dt * 3.6;
      p.x = nx; p.z = nz; p.y = this.G.H(nx, nz) + (p.way.code !== 7 && Math.abs(p.ox) + Math.abs(p.oz) < 1.5 ? 0.12 : 0.03);
      if (n >= this.nPed) continue;
      const sw = walking ? Math.sin(p.ph) * (0.5 + 0.35 * p.run) : 0, bob = walking ? Math.abs(Math.cos(p.ph)) * 0.035 * p.sc : 0, sy = Math.sin(p.yaw), cy = Math.cos(p.yaw), y = p.y + bob;
      e.set(walking ? 0.05 + 0.12 * p.run : 0, p.yaw, 0, 'YXZ'); q.setFromEuler(e); P.set(p.x, y, p.z); m.compose(P, q, S);
      const B = this.pedBodies[p.variant]; B.setMatrixAt(nb[p.variant], m); B.setColorAt(nb[p.variant]++, p.col);
      for (let li = 0; li < 4; li++) {
        const arm = li < 2, sx = (li % 2 ? 1 : -1) * (arm ? PED.shoulderX : PED.hipX) * p.sc, hy = (arm ? PED.shoulder : PED.hip) * p.sc, ang = (li % 2 ? 1 : -1) * (arm ? -sw * 0.8 : sw);
        if (!arm && p.variant === 2) { e.set(ang * 0.35, p.yaw, 0, 'YXZ'); } else e.set(ang, p.yaw, 0, 'YXZ');
        q.setFromEuler(e); P.set(p.x + cy * sx, y + hy, p.z - sy * sx); m.compose(P, q, S);
        const L = this.pedLimbs[li]; L.setMatrixAt(n, m); L.setColorAt(n, arm ? p.col : p.col2);
      }
      n++;
    }
    this.pedBodies.forEach((B, i) => { B.count = nb[i]; B.instanceMatrix.needsUpdate = true; if (B.instanceColor) B.instanceColor.needsUpdate = true; });
    for (const L of this.pedLimbs) { L.count = n; L.instanceMatrix.needsUpdate = true; if (L.instanceColor) L.instanceColor.needsUpdate = true; }
    this.updateCats(px, pz, sp);
  }
  // ---------- sokak kedileri: kaldırım kenarında oturur, her seferinde aynı yerde ----------
  private catMesh: THREE.InstancedMesh | null = null; private cats: number[][] = []; private catAt = [1e9, 1e9]; private meowT = 6;
  onMeow: (() => void) | null = null;
  private updateCats(px: number, pz: number, sp: number) {
    if (!this.catMesh) {
      const g = (q: THREE.BufferGeometry) => { q = q.index ? q.toNonIndexed() : q; q.deleteAttribute('uv'); return q; };
      const geo = mergeGeometries([g(new THREE.SphereGeometry(1, 8, 6).scale(0.1, 0.15, 0.13).translate(0, 0.15, 0)), g(new THREE.SphereGeometry(1, 8, 6).scale(0.085, 0.1, 0.09).translate(0, 0.2, 0.05)), g(new THREE.SphereGeometry(0.075, 8, 6).translate(0, 0.35, 0.07)),
        g(new THREE.ConeGeometry(0.03, 0.06, 4).translate(-0.045, 0.43, 0.06)), g(new THREE.ConeGeometry(0.03, 0.06, 4).translate(0.045, 0.43, 0.06)), g(new THREE.CylinderGeometry(0.018, 0.022, 0.3, 5).rotateZ(Math.PI / 2).rotateY(0.5).translate(0.1, 0.03, -0.12))])!;
      this.catMesh = new THREE.InstancedMesh(geo, new THREE.MeshLambertMaterial(), 14); this.catMesh.count = 0; this.catMesh.frustumCulled = false; this.catMesh.castShadow = true; this.carMesh.parent!.add(this.catMesh);
    }
    if (Math.hypot(px - this.catAt[0], pz - this.catAt[1]) > 40) {
      this.catAt = [px, pz]; const R = 150, list: number[][] = []; const COL = ['#d98a3d', '#2a2a2a', '#f1ede4', '#8a8a86', '#c9a26b', '#5b4a3a', '#e6c9a0'];
      const h = (a: number, b: number, c: number) => { const v = Math.sin(a * 12.9898 + b * 78.233 + c * 37.719) * 43758.5453; return v - Math.floor(v); };
      for (const w of this.R.ways) {
        if (w.code < 4 || w.code > 7 || w.bridge || w.len < 30 || Math.hypot(w.pts[0] - px, w.pts[1] - pz) > R + w.len) continue;
        for (let i = 0, n = Math.floor(w.len / 35); i < n; i++) { if (h(w.i, i, 3) > 0.16) continue; const side = h(w.i, i, 5) < 0.5 ? -1 : 1, p = this.pose(w, 12 + i * 35, 1, side * (w.width / 2 + 2.1)), d = Math.hypot(p.x - px, p.z - pz); if (d < R) list.push([p.x, p.z, Math.atan2(p.dx, p.dz) - side * (1.2 + h(w.i, i, 9)), Math.floor(h(w.i, i, 11) * COL.length), d]); }
      }
      list.sort((a, b) => a[4] - b[4]); this.cats = list.slice(0, 14); const c = new THREE.Color();
      this.cats.forEach(([x, z, yaw, ci], k) => { this.q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw); this.P.set(x, this.G.H(x, z) + 0.1, z); this.tmpM.compose(this.P, this.q, this.S); this.catMesh!.setMatrixAt(k, this.tmpM); this.catMesh!.setColorAt(k, c.set(COL[ci])); });
      this.catMesh.count = this.cats.length; this.catMesh.instanceMatrix.needsUpdate = true; if (this.catMesh.instanceColor) this.catMesh.instanceColor.needsUpdate = true;
    }
    this.meowT -= 1 / 60; if (this.meowT < 0 && sp < 4 && this.cats.some((q) => Math.hypot(q[0] - px, q[1] - pz) < 9)) { this.meowT = 7 + Math.random() * 8; this.onMeow?.(); }
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
