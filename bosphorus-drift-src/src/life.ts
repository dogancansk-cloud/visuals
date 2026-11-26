// Canlı çevre: kaçan sokak kedileri, simit atan simitçiler, martı sürüleri, vapurlar, bitişte havai fişek.
import * as THREE from 'three';
import type { Track } from './track';
interface Ground { hAt(x: number, z: number): number }
export interface LifeCfg { cats: number; vendors: number[]; gulls: number; ferries: boolean }
import type { Items } from './items';
import type { Kart } from './kart';
import type { Particles } from './fx';
import { toon } from './characters';
import { F_BRIDGE, F_TUNNEL } from './trackpath';

interface StreetCat { g: THREE.Group; home: THREE.Vector3; away: THREE.Vector3; t: number; state: 'sit' | 'flee' | 'back'; tail: THREE.Object3D; legs: THREE.Object3D[]; face: number }
interface Vendor { g: THREE.Group; arm: THREE.Object3D; i: number; cd: number; anim: number }
interface Gull { g: THREE.Group; wl: THREE.Object3D; wr: THREE.Object3D; c: THREE.Vector3; r: number; a: number; sp: number; h: number }
interface Ferry { g: THREE.Group; x0: number; z0: number; x1: number; z1: number; t: number; sp: number }

export class Life {
  cats: StreetCat[] = []; vendors: Vendor[] = []; gulls: Gull[] = []; ferries: Ferry[] = [];
  private fireT = 0; private fireAt = new THREE.Vector3();
  constructor(private scene: THREE.Scene, private track: Track, private world: Ground, private items: Items, private fx: Particles, mobile: boolean, cfg: LifeCfg = { cats: 30, vendors: [120, 390, 880, 1290], gulls: 24, ferries: true }) {
    this.makeCats(Math.round(cfg.cats * (mobile ? 0.6 : 1)));
    this.makeVendors(cfg.vendors);
    if (cfg.gulls) this.makeGulls(Math.round(cfg.gulls * (mobile ? 0.6 : 1)));
    if (cfg.ferries) this.makeFerries();
  }

  private side(i: number, d: number) { const T = this.track.T, x = T.x[i] - T.tz[i] * d, z = T.z[i] + T.tx[i] * d; return new THREE.Vector3(x, this.world.hAt(x, z), z); }

  private makeCats(n: number) {
    const T = this.track.T, cols = [0xf3a65a, 0xa9a39d, 0x3c3a47, 0xffffff, 0xd9a066];
    for (let k = 0; k < n; k++) {
      const i = Math.floor(((k + 0.37) / n) * T.n) % T.n; if (T.flags[i] & (F_BRIDGE | F_TUNNEL)) continue;
      const sd = k % 2 ? 1 : -1, home = this.side(i, sd * (T.w[i] / 2 + 2.6)), away = this.side(i, sd * (T.w[i] / 2 + 9));
      const c = cols[k % cols.length], g = new THREE.Group(), legs: THREE.Object3D[] = [];
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), toon(c)); body.scale.set(1.45, 0.9, 0.85); body.position.y = 0.38; g.add(body);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), toon(c)); head.position.set(0.4, 0.62, 0); g.add(head);
      for (const s of [-1, 1]) { const e = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.16, 4), toon(c)); e.position.set(0.42, 0.84, s * 0.11); g.add(e); }
      for (const [x, z] of [[0.24, 0.14], [0.24, -0.14], [-0.24, 0.14], [-0.24, -0.14]]) { const l = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 5), toon(c)); l.position.set(x, 0.15, z); g.add(l); legs.push(l); }
      const tail = new THREE.Group(); tail.position.set(-0.4, 0.45, 0); const tm = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 0.55, 5), toon(c)); tm.position.y = 0.27; tail.add(tm); g.add(tail);
      g.position.copy(home); const face = Math.atan2(T.z[i] - home.z, T.x[i] - home.x); g.rotation.y = -face;
      g.traverse((o) => { if ((o as THREE.Mesh).isMesh) o.castShadow = true; });
      this.scene.add(g);
      this.cats.push({ g, home, away, t: Math.random() * 5, state: 'sit', tail, legs, face });
    }
  }

  private makeVendors(list: number[]) {
    const T = this.track.T;
    for (const s of list) {
      const i = this.track.idxOf(s); if (T.flags[i] & F_BRIDGE) continue;
      const sd = s % 2 ? 1 : -1, p = this.side(i, sd * (T.w[i] / 2 + 3.4)), g = new THREE.Group();
      // tezgâh arabası
      const cart = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.9, 1.0), toon(0xd9534f)); cart.position.set(0, 0.9, 0); g.add(cart);
      const glass = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.7, 0.8), new THREE.MeshLambertMaterial({ color: 0xdff2ff, transparent: true, opacity: 0.55 })); glass.position.set(0, 1.7, 0); g.add(glass);
      const tg = new THREE.TorusGeometry(0.17, 0.07, 6, 12); tg.rotateX(Math.PI / 2);
      for (let k = 0; k < 6; k++) { const m = new THREE.Mesh(tg, toon(0xe39a4c)); m.position.set(-0.45 + (k % 3) * 0.45, 1.45 + Math.floor(k / 3) * 0.16, 0); g.add(m); }
      for (const x of [-0.6, 0.6]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.1, 12), toon(0x3c3a47)); w.rotation.x = Math.PI / 2; w.position.set(x, 0.3, 0.55); g.add(w); }
      const roof = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.08, 1.3), toon(0xfbf7f0)); roof.position.y = 2.15; g.add(roof);
      // simitçi
      const man = new THREE.Group(); man.position.set(0, 0, -0.95);
      const bodyM = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.32, 1.0, 10), toon(0xfbf7f0)); bodyM.position.y = 0.95; man.add(bodyM);
      const vest = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.33, 0.6, 10), toon(0xd9534f)); vest.position.y = 1.15; man.add(vest);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 8), toon(0xf3cfb0)); head.position.y = 1.72; man.add(head);
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.24, 0.12, 10), toon(0xfbf7f0)); cap.position.y = 1.9; man.add(cap);
      const mus = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.05, 0.22), toon(0x5a3a2a)); mus.position.set(0.22, 1.66, 0); man.add(mus);
      const arm = new THREE.Group(); arm.position.set(0, 1.4, 0.3); const am = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.6, 6), toon(0xfbf7f0)); am.position.y = -0.3; arm.add(am); man.add(arm);
      g.add(man);
      g.position.copy(p); g.rotation.y = -Math.atan2(T.tz[i], T.tx[i]) + (sd > 0 ? 0 : Math.PI);
      g.traverse((o) => { if ((o as THREE.Mesh).isMesh) o.castShadow = true; });
      this.scene.add(g);
      this.vendors.push({ g, arm, i, cd: 2 + Math.random() * 3, anim: 0 });
    }
  }

  private makeGulls(n: number) {
    const T = this.track.T, bm = toon(0xffffff), wm = toon(0xc9d0d8), km = toon(0xf2b84b);
    const wg = new THREE.BoxGeometry(0.45, 0.05, 1.3); wg.translate(0, 0, 0.65);
    for (let k = 0; k < n; k++) {
      const g = new THREE.Group();
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 6), bm); b.scale.set(1.7, 0.8, 0.8); g.add(b);
      const beak = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.25, 6), km); beak.rotation.z = -Math.PI / 2; beak.position.x = 0.65; g.add(beak);
      const wl = new THREE.Object3D(), wr = new THREE.Object3D(); wr.add(new THREE.Mesh(wg, wm)); const l = new THREE.Mesh(wg, wm); l.rotation.y = Math.PI; wl.add(l); g.add(wl, wr);
      const i = Math.floor((k / n) * T.n), c = k % 4 === 0 ? new THREE.Vector3(T.tower.x, 0, T.tower.z) : new THREE.Vector3(T.x[i], 0, T.z[i]);
      const h = (k % 4 === 0 ? T.tower.y0 + 30 : T.y[i] + 14) + (k % 3) * 4;
      g.scale.setScalar(1.3); this.scene.add(g);
      this.gulls.push({ g, wl, wr, c, r: 14 + (k % 5) * 6, a: k * 1.7, sp: (0.35 + (k % 3) * 0.12) * (k % 2 ? 1 : -1), h });
    }
  }

  private makeFerries() {
    const lanes: [number, number, number, number][] = [[-660, 460, 300, 330], [300, 420, -540, 552], [-900, 300, 200, 230], [400, -200, 350, 600]];
    for (const [x0, z0, x1, z1] of lanes) {
      const g = new THREE.Group();
      const hull = new THREE.Mesh(new THREE.BoxGeometry(34, 3.2, 10), toon(0x2f4b6e)); hull.position.y = 1.2; g.add(hull);
      const deck = new THREE.Mesh(new THREE.BoxGeometry(30, 3.2, 9), toon(0xfbf7f0)); deck.position.y = 4.3; g.add(deck);
      const top = new THREE.Mesh(new THREE.BoxGeometry(18, 2.6, 7.5), toon(0xfbf7f0)); top.position.y = 7.2; g.add(top);
      const fun = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.7, 4.5, 12), toon(0xf2c14e)); fun.position.set(0, 10.6, 0); g.add(fun);
      const band = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.55, 0.9, 12), toon(0x3c3a47)); band.position.set(0, 12.6, 0); g.add(band);
      this.scene.add(g);
      this.ferries.push({ g, x0, z0, x1, z1, t: Math.random(), sp: 9 / Math.hypot(x1 - x0, z1 - z0) });
    }
  }

  fireworks(at: THREE.Vector3) { this.fireT = 5; this.fireAt.copy(at); }

  update(dt: number, time: number, karts: Kart[], player: Kart | null, racing: boolean) {
    // kediler
    for (const c of this.cats) {
      let near = false;
      for (const k of karts) if ((k.pos.x - c.home.x) ** 2 + (k.pos.z - c.home.z) ** 2 < 110) { near = true; break; }
      c.t += dt;
      if (c.state === 'sit') { if (near) { c.state = 'flee'; c.t = 0; c.g.position.y += 0.01; } }
      else if (c.state === 'flee') { if (c.t > 6 && !near) { c.state = 'back'; c.t = 0; } }
      else if (c.state === 'back') { if (near) { c.state = 'flee'; c.t = 0; } else if (c.t > 2.5) c.state = 'sit'; }
      const target = c.state === 'flee' ? c.away : c.home, cur = c.g.position;
      const dx = target.x - cur.x, dz = target.z - cur.z, d = Math.hypot(dx, dz), moving = d > 0.2 && c.state !== 'sit';
      if (moving) {
        const sp = (c.state === 'flee' ? 9 : 2.5) * dt, m = Math.min(1, sp / d);
        cur.x += dx * m; cur.z += dz * m; cur.y = this.world.hAt(cur.x, cur.z) + (c.state === 'flee' && c.t < 0.35 ? Math.sin((c.t / 0.35) * Math.PI) * 0.9 : 0);
        c.g.rotation.y = -Math.atan2(dz, dx);
        c.legs.forEach((l, n) => (l.rotation.z = Math.sin(time * 20 + n * 1.7) * 0.7));
      } else {
        if (c.state === 'sit') c.g.rotation.y += (-c.face - c.g.rotation.y) * Math.min(1, dt * 2);
        c.legs.forEach((l) => (l.rotation.z = 0));
      }
      c.tail.rotation.z = Math.sin(time * (moving ? 10 : 2.2) + c.home.x) * (moving ? 0.5 : 0.35) + 0.4;
    }
    // simitçiler: oyuncu yaklaşınca önüne simit atar
    for (const v of this.vendors) {
      v.cd -= dt; v.anim = Math.max(0, v.anim - dt * 2.5);
      v.arm.rotation.x = -Math.sin(v.anim * Math.PI) * 2.2;
      if (!racing || !player || v.cd > 0) continue;
      const ds = ((this.track.T.n + v.i - player.f.i) % this.track.T.n) * (this.track.L / this.track.T.n);
      if (ds > 25 && ds < 75) {
        v.cd = 7 + Math.random() * 5; v.anim = 1;
        const from = v.g.position.clone().add(new THREE.Vector3(0, 2.2, 0));
        const s = player.f.s + Math.min(ds - 6, 30 + Math.random() * 20), to = this.track.point(s, (Math.random() - 0.5) * 6);
        this.items.tossSimit(from, to);
      }
    }
    // martılar
    for (const b of this.gulls) {
      b.a += b.sp * dt;
      b.g.position.set(b.c.x + Math.cos(b.a) * b.r, b.h + Math.sin(time * 0.7 + b.r) * 2, b.c.z + Math.sin(b.a) * b.r);
      b.g.rotation.set(0, -(b.a + (b.sp > 0 ? Math.PI / 2 : -Math.PI / 2)), Math.sign(b.sp) * 0.25);
      const fl = Math.sin(time * 7 + b.r) * 0.55; b.wl.rotation.x = fl; b.wr.rotation.x = -fl;
    }
    // vapurlar
    for (const f of this.ferries) {
      f.t += f.sp * dt; if (f.t > 1) f.t -= 1;
      f.g.position.set(f.x0 + (f.x1 - f.x0) * f.t, Math.sin(time + f.x0) * 0.2, f.z0 + (f.z1 - f.z0) * f.t);
      f.g.rotation.y = -Math.atan2(f.z1 - f.z0, f.x1 - f.x0);
      if (Math.random() < dt * 3) { const p = f.g.position; this.fx.emit(p.x, 14, p.z, 0.5, 2.5, 0.3, SMOKE, 0.5, 3, 2.5); }
    }
    // havai fişek
    if (this.fireT > 0) {
      this.fireT -= dt;
      if (Math.random() < dt * 3.5) {
        const c = FIRE[Math.floor(Math.random() * FIRE.length)], p = this.fireAt.clone().add(new THREE.Vector3((Math.random() - 0.5) * 30, 18 + Math.random() * 14, (Math.random() - 0.5) * 30));
        for (let n = 0; n < 40; n++) { const a = Math.random() * Math.PI * 2, e = Math.random() * Math.PI - Math.PI / 2, v = 8 + Math.random() * 4; this.fx.emit(p.x, p.y, p.z, Math.cos(a) * Math.cos(e) * v, Math.sin(e) * v, Math.sin(a) * Math.cos(e) * v, c, 1, 0.5, 1.3, 6); }
      }
    }
  }
}
const SMOKE = new THREE.Color(0xe8e4f0);
const FIRE = [0xff6b6b, 0xf7d774, 0x7ec0f0, 0xb48ef0, 0x9ed9b6].map((c) => new THREE.Color(c));
