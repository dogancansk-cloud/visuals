// Pist nesneleri: sürpriz kutuları, simitler, turbo pedleri; silahlar: martı, çay birikintisi, nazar kalkanı, turbo.
import * as THREE from 'three';
import { Track, Textures, Geo, rr } from './track';
import { Kart, type ItemKind } from './kart';
import { toon } from './characters';
import { Particles } from './fx';

interface Box { s: number; d: number; pos: THREE.Vector3; t: number }
interface Simit { pos: THREE.Vector3; t: number }
interface Pad { s0: number; s1: number; d: number; w: number }
interface Gull { obj: THREE.Group; wl: THREE.Object3D; wr: THREE.Object3D; pos: THREE.Vector3; idx: number; owner: Kart; target: Kart | null; life: number; speed: number; d: number }
interface Puddle { obj: THREE.Group; pos: THREE.Vector3; life: number; r: number; owner: Kart; arm: number }

export interface ItemEvents { onPickup?(k: Kart, kind: 'box' | 'simit'): void; onUse?(k: Kart, it: ItemKind): void; onHit?(victim: Kart, by: ItemKind, owner: Kart | null): void; onBlock?(k: Kart): void; onPad?(k: Kart): void }

export class Items {
  boxes: Box[] = []; simits: Simit[] = []; pads: Pad[] = []; gulls: Gull[] = []; puddles: Puddle[] = [];
  private boxMesh: THREE.InstancedMesh; private simitMesh: THREE.InstancedMesh;
  private shields = new Map<Kart, THREE.Mesh>();
  private m4 = new THREE.Matrix4(); private q = new THREE.Quaternion(); private v = new THREE.Vector3(); private sc = new THREE.Vector3();
  private gullGeo: { body: THREE.BufferGeometry; wing: THREE.BufferGeometry; beak: THREE.BufferGeometry };
  private puddleMat: THREE.MeshBasicMaterial; private glassMat: THREE.Material;
  private shieldMat: THREE.MeshBasicMaterial;
  constructor(private scene: THREE.Scene, private track: Track, tex: Textures, private fx: Particles, public ev: ItemEvents = {}) {
    const L = track.L;
    // sürpriz kutuları: sıralar halinde
    for (const s of [70, 215, 330, 640, 760]) for (const d of [-4.5, -1.5, 1.5, 4.5]) this.boxes.push({ s, d, pos: track.point(s, d * (track.T.w[track.idxOf(s)] / 13)), t: 0 });
    // simitler: şeritler halinde
    const lines: [number, number, number][] = [[30, 0, 6], [110, 3.5, 5], [185, -3, 5], [270, 0, 6], [380, -2.5, 6], [470, 2.5, 6], [590, 0, 4], [690, -3.5, 5], [720, 3.5, 5], [800, 0, 6], [860, 0, 4]];
    for (const [s0, d, c] of lines) for (let k = 0; k < c; k++) this.simits.push({ pos: track.point((s0 + k * 4) % L, d).add(new THREE.Vector3(0, 0.9, 0)), t: 0 });
    // turbo pedleri
    this.pads = [{ s0: 196, s1: 202, d: 0, w: 5 }, { s0: 555, s1: 562, d: 0, w: 6 }, { s0: 845, s1: 851, d: -2.5, w: 5 }];

    const boxTex = tex.make(128, 128, (c, w, h) => {
      const g = c.createLinearGradient(0, 0, w, h); g.addColorStop(0, '#9fd8f2'); g.addColorStop(1, '#c7b3f0');
      c.fillStyle = g; rr(c, 0, 0, w, h, 18); c.fill();
      c.strokeStyle = '#ffffff'; c.lineWidth = 8; rr(c, 6, 6, w - 12, h - 12, 14); c.stroke();
      c.fillStyle = '#ffffff'; c.font = '900 84px ui-rounded, system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('?', w / 2, h / 2 + 6);
    });
    this.boxMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1.3, 1.3, 1.3), new THREE.MeshLambertMaterial({ map: boxTex, transparent: true, opacity: 0.92 }), this.boxes.length);
    this.boxMesh.castShadow = true; scene.add(this.boxMesh);
    const sg = new THREE.TorusGeometry(0.42, 0.17, 10, 20);
    this.simitMesh = new THREE.InstancedMesh(sg, new THREE.MeshToonMaterial({ color: 0xd88f45 }), this.simits.length);
    this.simitMesh.castShadow = true; scene.add(this.simitMesh);
    // pedler
    const padTex = tex.make(128, 128, (c, w, h) => {
      c.fillStyle = '#2f6fb3'; rr(c, 0, 0, w, h, 16); c.fill();
      c.strokeStyle = '#ffffff'; c.lineWidth = 12; c.lineCap = 'round'; c.lineJoin = 'round';
      for (let k = 0; k < 2; k++) { c.beginPath(); c.moveTo(30, 34 + k * 40); c.lineTo(64, 14 + k * 40); c.lineTo(98, 34 + k * 40); c.stroke(); }
      c.fillStyle = '#9fd0f5'; c.beginPath(); c.arc(64, 108, 10, 0, 7); c.fill();
    });
    for (const p of this.pads) {
      const g = new Geo(), n = Math.round(p.s1 - p.s0), A = new THREE.Vector3(), B = new THREE.Vector3(), C = new THREE.Vector3(), D = new THREE.Vector3();
      for (let k = 0; k < n; k++) {
        const s0 = p.s0 + k, s1 = s0 + 1;
        track.point(s0, p.d - p.w / 2, A); track.point(s1, p.d - p.w / 2, B); track.point(s1, p.d + p.w / 2, C); track.point(s0, p.d + p.w / 2, D);
        for (const v of [A, B, C, D]) v.y += 0.05;
        g.quad(A.toArray(), B.toArray(), C.toArray(), D.toArray(), [0, k / n], [0, (k + 1) / n], [1, (k + 1) / n], [1, k / n]);
      }
      const me = new THREE.Mesh(g.build(), new THREE.MeshBasicMaterial({ map: padTex, transparent: true }));
      scene.add(me);
    }
    // martı geometrisi
    const wing = new THREE.BoxGeometry(0.5, 0.06, 1.3); wing.translate(0, 0, 0.65);
    const body = new THREE.SphereGeometry(0.4, 10, 8); body.scale(1.7, 0.85, 0.85);
    const beak = new THREE.ConeGeometry(0.1, 0.35, 8); beak.rotateZ(-Math.PI / 2); beak.translate(0.8, 0, 0);
    this.gullGeo = { body, wing, beak };
    this.puddleMat = new THREE.MeshBasicMaterial({ color: 0xc8662d, transparent: true, opacity: 0.85, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
    this.glassMat = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.75 });
    const eye = tex.make(256, 256, (c, w, h) => {
      const cx = w / 2, cy = h / 2;
      for (const [r, col] of [[128, 'rgba(47,111,179,0.55)'], [84, 'rgba(255,255,255,0.75)'], [54, 'rgba(126,192,240,0.8)'], [28, 'rgba(25,30,45,0.9)']] as const) { c.fillStyle = col; c.beginPath(); c.arc(cx, cy, r, 0, 7); c.fill(); }
    });
    this.shieldMat = new THREE.MeshBasicMaterial({ map: eye, transparent: true, opacity: 0.55, depthWrite: false, side: THREE.DoubleSide });
    this.sync(0);
  }

  reset() {
    for (const b of this.boxes) b.t = 0; for (const s of this.simits) s.t = 0;
    for (const g of this.gulls) this.scene.remove(g.obj); this.gulls = [];
    for (const p of this.puddles) this.scene.remove(p.obj); this.puddles = [];
    for (const m of this.shields.values()) this.scene.remove(m); this.shields.clear();
  }

  /** sıraya göre eşya seç */
  roll(k: Kart, field: number): ItemKind {
    const p = (k.place - 1) / Math.max(1, field - 1); // 0 = önde, 1 = arkada
    const w: Record<ItemKind, number> = { cay: 3 - 2 * p, nazar: 2.4 - 1.2 * p, marti: 0.8 + 2.4 * p, turbo: 0.7 + 2.6 * p };
    if (k.place === 1) w.marti *= 0.4;
    const tot = Object.values(w).reduce((a, b) => a + b, 0); let r = Math.random() * tot;
    for (const key of Object.keys(w) as ItemKind[]) { r -= w[key]; if (r <= 0) return key; }
    return 'turbo';
  }

  use(k: Kart, karts: Kart[]) {
    const it = k.item; if (!it) return; k.item = null;
    const J = k.juiced;
    if (it === 'turbo') k.boost(J ? 10 : 8.5, J ? 2.6 : 1.9);
    else if (it === 'nazar') k.shieldT = J ? 14 : 10;
    else if (it === 'cay') this.dropTea(k, J);
    else if (it === 'marti') this.launch(k, karts, J);
    this.ev.onUse?.(k, it);
  }

  private dropTea(k: Kart, big: boolean) {
    const back = new THREE.Vector3(-Math.cos(k.yaw) * 2.6, 0, -Math.sin(k.yaw) * 2.6);
    const p = k.pos.clone().add(back);
    const f = { ...k.f }; this.track.frame(p.x, p.y, p.z, k.f.i, f); p.y = f.h + 0.04;
    const g = new THREE.Group(), r = big ? 2.2 : 1.6;
    const disc = new THREE.Mesh(new THREE.CircleGeometry(r, 20), this.puddleMat); disc.rotation.x = -Math.PI / 2; disc.scale.set(1, 0.8, 1); g.add(disc);
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.11, 0.4, 10, 1, true), this.glassMat); glass.rotation.z = Math.PI / 2; glass.position.set(0.3, 0.12, 0.2); g.add(glass);
    const saucer = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.04, 14), toon(0xe57373)); saucer.position.set(-0.4, 0.03, -0.3); g.add(saucer);
    g.position.copy(p); g.rotation.y = Math.random() * 6; this.scene.add(g);
    this.puddles.push({ obj: g, pos: p, life: 30, r, owner: k, arm: 0.5 });
  }

  private launch(k: Kart, karts: Kart[], strong: boolean) {
    // hedef: hemen öndeki kart
    let target: Kart | null = null;
    for (const o of karts) if (o !== k && !o.finished && o.place === k.place - 1) target = o;
    const g = new THREE.Group();
    g.add(new THREE.Mesh(this.gullGeo.body, toon(0xffffff)));
    g.add(new THREE.Mesh(this.gullGeo.beak, toon(0xf2b84b)));
    const wl = new THREE.Object3D(), wr = new THREE.Object3D();
    const a = new THREE.Mesh(this.gullGeo.wing, toon(0xc9d0d8)); wr.add(a);
    const b = new THREE.Mesh(this.gullGeo.wing, toon(0xc9d0d8)); b.rotation.y = Math.PI; wl.add(b);
    g.add(wl, wr); g.scale.setScalar(1.3); this.scene.add(g);
    const pos = k.pos.clone().add(new THREE.Vector3(Math.cos(k.yaw) * 2.5, 1.2, Math.sin(k.yaw) * 2.5));
    this.gulls.push({ obj: g, wl, wr, pos, idx: k.f.i, owner: k, target, life: strong ? 6 : 4.5, speed: Math.max(k.speed + 14, strong ? 46 : 40), d: k.f.d });
  }

  shieldFor(k: Kart) {
    let m = this.shields.get(k);
    if (!m) { m = new THREE.Mesh(new THREE.SphereGeometry(1.75, 20, 14), this.shieldMat.clone()); this.shields.set(k, m); this.scene.add(m); }
    return m;
  }

  update(dt: number, karts: Kart[], time: number) {
    const tr = this.track;
    for (const b of this.boxes) b.t = Math.max(0, b.t - dt);
    for (const s of this.simits) s.t = Math.max(0, s.t - dt);
    for (const k of karts) {
      // kutular
      for (const b of this.boxes) {
        if (b.t > 0) continue;
        const dx = k.pos.x - b.pos.x, dz = k.pos.z - b.pos.z, dy = k.pos.y + 0.6 - (b.pos.y + 1.0);
        if (dx * dx + dz * dz < 3.2 && Math.abs(dy) < 2) {
          b.t = 3.5; this.burst(b.pos, 0xbfe3f7, 10);
          if (!k.item && k.rollT <= 0) { k.rollT = k.isPlayer ? 1.1 : 0.6; }
          this.ev.onPickup?.(k, 'box');
        }
      }
      for (const s of this.simits) {
        if (s.t > 0) continue;
        const dx = k.pos.x - s.pos.x, dz = k.pos.z - s.pos.z, dy = k.pos.y + 0.6 - s.pos.y;
        if (dx * dx + dz * dz < 2.6 && Math.abs(dy) < 1.8) { s.t = 8; k.simit = Math.min(10, k.simit + 1); this.ev.onPickup?.(k, 'simit'); }
      }
      if (k.rollT > 0) { k.rollT -= dt; if (k.rollT <= 0) k.item = this.roll(k, karts.length); }
      // pedler
      if (k.grounded) for (const p of this.pads) if (k.f.s >= p.s0 && k.f.s <= p.s1 && Math.abs(k.f.d - p.d) < p.w / 2 + 0.4) { if (k.boostT < 0.9) this.ev.onPad?.(k); k.boost(8, 1.2); }
      // birikintiler
      for (const p of this.puddles) {
        if (p.arm > 0 || p.life <= 0) continue;
        const dx = k.pos.x - p.pos.x, dz = k.pos.z - p.pos.z;
        if (dx * dx + dz * dz < (p.r + 0.6) ** 2 && Math.abs(k.pos.y - p.pos.y) < 1.5 && k.grounded) {
          p.life = 0;
          if (k.shieldT > 0) { k.shieldT = 0; this.ev.onBlock?.(k); } else if (k.hit()) this.ev.onHit?.(k, 'cay', p.owner);
          this.burst(p.pos, 0xd47a3a, 16);
        }
      }
    }
    // martılar
    const f = { i: 0, t: 0, s: 0, d: 0, h: 0, w: 13, tx: 1, tz: 0, flags: 0 };
    for (const g of this.gulls) {
      g.life -= dt;
      const tgt = g.target && !g.target.finished ? g.target : null;
      tr.frame(g.pos.x, g.pos.y, g.pos.z, g.idx, f); g.idx = f.i;
      let dirx: number, dirz: number, desY: number;
      const dist = tgt ? tgt.pos.distanceTo(g.pos) : 1e9;
      if (tgt && dist < 22) { dirx = tgt.pos.x - g.pos.x; dirz = tgt.pos.z - g.pos.z; desY = tgt.pos.y + 0.9; }
      else {
        const ahead = tr.wrap(f.i + 10), td = tgt ? tgt.f.d : g.d;
        const p = tr.point(ahead * (tr.L / tr.n), td * 0.8, this.v);
        dirx = p.x - g.pos.x; dirz = p.z - g.pos.z; desY = p.y + 1.6;
      }
      const l = Math.hypot(dirx, dirz) || 1;
      g.pos.x += (dirx / l) * g.speed * dt; g.pos.z += (dirz / l) * g.speed * dt; g.pos.y += (desY - g.pos.y) * Math.min(1, dt * 6);
      g.obj.position.copy(g.pos); g.obj.rotation.set(0, -Math.atan2(dirz, dirx), 0);
      const fl = Math.sin(time * 22) * 0.7; g.wl.rotation.x = fl; g.wr.rotation.x = -fl;
      if (Math.random() < 0.5) this.fx.emit(g.pos.x, g.pos.y, g.pos.z, 0, 0.5, 0, WHITE, 0.6, 0.35, 0.5);
      for (const k of karts) {
        if (k === g.owner && g.life > 3.8) continue;
        if (k.pos.distanceToSquared(g.pos.clone().setY(g.pos.y - 0.6)) < 3.2) {
          g.life = 0; this.burst(k.pos, 0xffffff, 18);
          if (k.shieldT > 0) { k.shieldT = 0; this.ev.onBlock?.(k); } else if (k.hit()) this.ev.onHit?.(k, 'marti', g.owner);
          break;
        }
      }
    }
    for (const g of this.gulls) if (g.life <= 0) this.scene.remove(g.obj);
    this.gulls = this.gulls.filter((g) => g.life > 0);
    for (const p of this.puddles) { p.arm -= dt; p.life -= dt; if (p.life <= 0) this.scene.remove(p.obj); }
    this.puddles = this.puddles.filter((p) => p.life > 0);
    // kalkanlar
    for (const k of karts) {
      const on = k.shieldT > 0;
      if (on) { const m = this.shieldFor(k); m.visible = true; m.position.copy(k.pos).add(new THREE.Vector3(0, 0.85, 0)); m.rotation.y = time * 1.5; (m.material as THREE.MeshBasicMaterial).opacity = k.shieldT < 2 && Math.sin(time * 20) > 0 ? 0.2 : 0.55; }
      else { const m = this.shields.get(k); if (m) m.visible = false; }
    }
    this.sync(time);
  }

  private burst(p: THREE.Vector3, c: number, n: number) {
    const col = new THREE.Color(c);
    for (let k = 0; k < n; k++) this.fx.emit(p.x, p.y + 0.8, p.z, (Math.random() - 0.5) * 8, Math.random() * 6 + 2, (Math.random() - 0.5) * 8, col, 1, 0.35, 0.7, 14);
  }

  private sync(time: number) {
    const m4 = this.m4, q = this.q, sc = this.sc;
    this.boxes.forEach((b, k) => {
      const vis = b.t <= 0 ? 1 : b.t < 0.5 ? 1 - b.t / 0.5 : 0;
      q.setFromEuler(new THREE.Euler(0.3, time * 1.6 + k, 0.3));
      m4.compose(this.v.copy(b.pos).add(new THREE.Vector3(0, 1.1 + Math.sin(time * 2 + k) * 0.15, 0)), q, sc.setScalar(vis));
      this.boxMesh.setMatrixAt(k, m4);
    });
    this.boxMesh.instanceMatrix.needsUpdate = true;
    this.simits.forEach((s, k) => {
      const vis = s.t <= 0 ? 1 : 0;
      q.setFromEuler(new THREE.Euler(0, time * 2.5 + k * 0.4, 0));
      m4.compose(this.v.copy(s.pos).add(new THREE.Vector3(0, Math.sin(time * 3 + k) * 0.1, 0)), q, sc.setScalar(vis));
      this.simitMesh.setMatrixAt(k, m4);
    });
    this.simitMesh.instanceMatrix.needsUpdate = true;
  }
}
const WHITE = new THREE.Color(0xffffff);
