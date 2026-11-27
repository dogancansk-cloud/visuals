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
interface Proj { kind: 'simit' | 'nazar'; obj: THREE.Object3D; pos: THREE.Vector3; vx: number; vz: number; idx: number; owner: Kart; target: Kart | null; life: number; bounces: number }
interface Cat { obj: THREE.Group; pos: THREE.Vector3; from: THREE.Vector3; phase: 'jump' | 'ride' | 'off' | 'gone'; t: number; target: Kart; slot: number; side: number; owner: Kart; legs: THREE.Object3D[] }
const CAT_RIDE = 2.2;
/** kart gövdesinde kedi yerleri: kaput (sürücüye bakar), arka kanat, yan duba */
const CAT_SLOTS: [number, number, number, number][] = [[1.0, 0.7, 0, Math.PI], [-1.25, 1.36, 0, 0], [-0.1, 0.7, 0.74, -Math.PI / 2]];
interface Wave { obj: THREE.Mesh; pos: THREE.Vector3; t: number; owner: Kart; hit: Set<Kart> }
interface Loose { pos: THREE.Vector3; vel: THREE.Vector3; obj: THREE.Mesh; life: number; landed: boolean }
interface Puddle { obj: THREE.Group; pos: THREE.Vector3; life: number; r: number; owner: Kart; arm: number }

export interface ItemEvents { onTarget?(victim: Kart, by: ItemKind): void; onPickup?(k: Kart, kind: 'box' | 'simit'): void; onUse?(k: Kart, it: ItemKind): void; onHit?(victim: Kart, by: ItemKind, owner: Kart | null): void; onBlock?(k: Kart): void; onPad?(k: Kart): void }

export interface ItemLayout { boxes: number[]; simits: [number, number, number][]; pads: { s0: number; s1: number; d: number; w: number }[] }
export const GALATA_ITEMS: ItemLayout = {
  boxes: [70, 300, 440, 800, 990, 1250],
  simits: [[30, 0, 6], [150, 3.5, 5], [230, -3, 6], [360, 0, 6], [520, -2, 6], [600, 2, 6], [660, 0, 4], [780, 0, 5], [850, -3.5, 5], [920, 3.5, 5], [1060, 0, 6], [1170, 0, 5], [1280, -3, 5]],
  pads: [{ s0: 255, s1: 262, d: 0, w: 5 }, { s0: 712, s1: 720, d: 0, w: 6 }, { s0: 1224, s1: 1231, d: -2.5, w: 5 }],
};

export class Items {
  boxes: Box[] = []; simits: Simit[] = []; pads: Pad[] = []; gulls: Gull[] = []; puddles: Puddle[] = [];
  private tmpV = new THREE.Vector3();
  projs: Proj[] = []; cats: Cat[] = []; waves: Wave[] = []; loose: Loose[] = [];
  private boxMesh: THREE.InstancedMesh; private simitMesh: THREE.InstancedMesh;
  private shields = new Map<Kart, THREE.Mesh>();
  private m4 = new THREE.Matrix4(); private q = new THREE.Quaternion(); private v = new THREE.Vector3(); private sc = new THREE.Vector3();
  private gullGeo: { body: THREE.BufferGeometry; wing: THREE.BufferGeometry; beak: THREE.BufferGeometry };
  private puddleMat: THREE.MeshBasicMaterial; private glassMat: THREE.Material;
  private shieldMat: THREE.MeshBasicMaterial;
  constructor(private scene: THREE.Scene, private track: Track, tex: Textures, private fx: Particles, public ev: ItemEvents = {}, layout: ItemLayout = GALATA_ITEMS) {
    const L = track.L;
    // sürpriz kutuları: sıralar halinde
    for (const s of layout.boxes) for (const d of [-4.5, -1.5, 1.5, 4.5]) this.boxes.push({ s, d, pos: track.point(s, d * (track.T.w[track.idxOf(s)] / 13)), t: 0 });
    // simitler: şeritler halinde
    const lines = layout.simits;
    for (const [s0, d, c] of lines) for (let k = 0; k < c; k++) this.simits.push({ pos: track.point((s0 + k * 4) % L, d).add(new THREE.Vector3(0, 0.9, 0)), t: 0 });
    // turbo pedleri
    this.pads = layout.pads;

    const boxTex = tex.make(128, 128, (c, w, h) => {
      const g = c.createLinearGradient(0, 0, w, h); g.addColorStop(0, '#9fd8f2'); g.addColorStop(1, '#c7b3f0');
      c.fillStyle = g; rr(c, 0, 0, w, h, 18); c.fill();
      c.strokeStyle = '#ffffff'; c.lineWidth = 8; rr(c, 6, 6, w - 12, h - 12, 14); c.stroke();
      c.fillStyle = '#ffffff'; c.font = '900 84px ui-rounded, system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('?', w / 2, h / 2 + 6);
    });
    this.boxMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1.0, 1.0, 1.0), new THREE.MeshLambertMaterial({ map: boxTex, transparent: true, opacity: 0.92 }), this.boxes.length);
    this.boxMesh.castShadow = true; scene.add(this.boxMesh);
    const sg = new THREE.TorusGeometry(0.34, 0.14, 10, 20);
    this.simitMesh = new THREE.InstancedMesh(sg, new THREE.MeshToonMaterial({ color: 0xf0a955 }), this.simits.length);
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
    for (const o of [...this.projs, ...this.cats, ...this.waves, ...this.loose]) o.obj.parent?.remove(o.obj);
    this.projs = []; this.cats = []; this.waves = []; this.loose = [];
  }

  /** sıraya göre eşya seç; aynı eşya üst üste pek gelmez */
  roll(k: Kart, field: number): ItemKind {
    const p = (k.place - 1) / Math.max(1, field - 1); // 0 = önde, 1 = arkada
    const w: Record<ItemKind, number> = {
      cay: 2.6 - 1.6 * p, simit: 2.4 - 0.6 * p, nazar: 1.6 - 1.0 * p, duduk: 1.0 + 0.6 * p,
      marti: 0.7 + 2.3 * p, turbo: 0.6 + 2.4 * p, kedi: 0.2 + 2.0 * p,
    };
    if (k.place === 1) { w.marti *= 0.3; w.kedi = 0; }
    if (k.lastItem) w[k.lastItem] *= 0.15;
    const tot = Object.values(w).reduce((a, b) => a + b, 0); let r = Math.random() * tot;
    for (const key of Object.keys(w) as ItemKind[]) { r -= w[key]; if (r <= 0) { k.lastItem = key; return key; } }
    return 'turbo';
  }

  use(k: Kart, karts: Kart[]) {
    // kalkan üstündeyken: nazarı öne fırlat
    if (k.shieldT > 0) { k.shieldT = 0; this.throwProj(k, 'nazar', karts, 0); this.ev.onUse?.(k, 'nazar'); return; }
    const it = k.item; if (!it) return; k.item = null;
    const J = k.juiced;
    if (it === 'turbo') k.boost(J ? 10 : 8.5, J ? 2.6 : 1.9);
    else if (it === 'nazar') k.shieldT = 10; // 10 sn; ikinci basışta fırlatılır
    else if (it === 'cay') this.dropTea(k, J);
    else if (it === 'marti') this.launch(k, karts, J);
    else if (it === 'simit') { for (const a of J ? [-0.16, 0, 0.16] : [0]) this.throwProj(k, 'simit', karts, a); }
    else if (it === 'duduk') this.horn(k, J);
    else if (it === 'kedi') this.catHerd(k, karts, J);
    this.ev.onUse?.(k, it);
  }

  private throwProj(k: Kart, kind: 'simit' | 'nazar', karts: Kart[], spread: number) {
    let obj: THREE.Object3D;
    if (kind === 'simit') { const m = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.18, 8, 16), toon(0xf0a955)); m.castShadow = true; obj = m; }
    else { const g = new THREE.Group(); for (const [r, c, z] of [[0.8, 0x2f6fb3, 0], [0.55, 0xffffff, 0.04], [0.35, 0x7ec0f0, 0.08], [0.18, 0x191e2d, 0.12]] as const) { const d = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.12, 20), toon(c)); d.rotation.x = Math.PI / 2; d.position.z = z; g.add(d); } obj = g; }
    const a = k.yaw + spread, sp = Math.max(k.speed + 16, 44);
    let target: Kart | null = null;
    if (kind === 'nazar') for (const o of karts) if (o !== k && !o.finished && o.place === k.place - 1 && o.progress - k.progress < 80) target = o;
    const pos = k.pos.clone().add(new THREE.Vector3(Math.cos(a) * 2.4, 0.7, Math.sin(a) * 2.4));
    this.scene.add(obj);
    this.projs.push({ kind, obj, pos, vx: Math.cos(a) * sp, vz: Math.sin(a) * sp, idx: k.f.i, owner: k, target, life: kind === 'simit' ? 3.5 : 4, bounces: 0 });
  }

  private horn(k: Kart, big: boolean) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1, 0.12, 6, 40), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8, depthWrite: false }));
    ring.rotation.x = Math.PI / 2; this.scene.add(ring);
    this.waves.push({ obj: ring, pos: k.pos.clone(), t: big ? -0.2 : 0, owner: k, hit: new Set([k]) });
  }

  /** kedi sürüsü: kaldırımdan koşup öndeki kartlara atlar; kucağa ve kaputa oturur, sürücü yalpalar. Kimse ezilmez. */
  private catHerd(k: Kart, karts: Kart[], big: boolean) {
    const ahead = karts.filter((o) => o !== k && !o.finished && o.progress > k.progress).sort((a, b) => a.progress - b.progress).slice(0, big ? 5 : 3);
    for (const o of ahead) {
      this.ev.onTarget?.(o, 'kedi');
      const i = this.track.idxOf(o.f.s + 10), w = this.track.T.w[i];
      for (let c = 0; c < 3; c++) {
        const sd = c % 2 ? -1 : 1;
        const g = this.catModel(c % 2 ? 0xa7a3a0 : c ? 0xff9a3c : 0x3c3a47); g.scale.setScalar(0.95);
        const from = this.track.point(o.f.s + 9 + c * 3, sd * (w / 2 + 1.2)); g.position.copy(from); this.scene.add(g);
        this.cats.push({ obj: g, pos: from.clone(), from, phase: 'jump', t: -c * 0.12, target: o, slot: c, side: sd, owner: k, legs: g.userData.legs });
      }
    }
  }
  catModel(c: number) {
    const g = new THREE.Group(), legs: THREE.Object3D[] = [];
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 8), toon(c)); body.scale.set(1.5, 0.8, 0.8); body.position.y = 0.55; g.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), toon(c)); head.position.set(0.62, 0.85, 0); g.add(head);
    for (const sd of [-1, 1]) { const e = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.22, 4), toon(c)); e.position.set(0.62, 1.15, sd * 0.15); g.add(e); }
    for (const [x, z] of [[0.35, 0.2], [0.35, -0.2], [-0.35, 0.2], [-0.35, -0.2]]) { const l = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.45, 5), toon(c)); l.position.set(x, 0.22, z); g.add(l); legs.push(l); }
    const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.7, 5), toon(c)); tail.position.set(-0.75, 0.9, 0); tail.rotation.z = 0.7; g.add(tail);
    g.scale.setScalar(1.25); g.userData.legs = legs; return g;
  }

  /** çevreden (simitçiler) piste düşen simit: toplanabilir */
  tossSimit(from: THREE.Vector3, to: THREE.Vector3) {
    const m = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.17, 8, 16), toon(0xf0a955)); m.castShadow = true;
    const t = 0.9, vel = new THREE.Vector3((to.x - from.x) / t, (to.y - from.y) / t + 0.5 * 25 * t, (to.z - from.z) / t);
    m.position.copy(from); this.scene.add(m);
    this.loose.push({ pos: from.clone(), vel, obj: m, life: 12, landed: false });
  }

  private dropTea(k: Kart, big: boolean) {
    const back = new THREE.Vector3(-Math.cos(k.yaw) * 2.6, 0, -Math.sin(k.yaw) * 2.6);
    const p = k.pos.clone().add(back);
    const f = { ...k.f }; this.track.frame(p.x, p.y, p.z, k.f.i, f); p.y = f.h + 0.04;
    const g = new THREE.Group(), r = big ? 2.8 : 2.1;
    const disc = new THREE.Mesh(new THREE.CircleGeometry(r, 20), this.puddleMat); disc.rotation.x = -Math.PI / 2; disc.scale.set(1, 0.8, 1); g.add(disc);
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.11, 0.4, 10, 1, true), this.glassMat); glass.rotation.z = Math.PI / 2; glass.position.set(0.3, 0.12, 0.2); g.add(glass);
    const saucer = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.04, 14), toon(0xe57373)); saucer.position.set(-0.4, 0.03, -0.3); g.add(saucer);
    g.position.copy(p); g.rotation.y = Math.random() * 6; this.scene.add(g);
    this.puddles.push({ obj: g, pos: p, life: 30, r, owner: k, arm: 0.5 });
    for (let n = 0; n < 18; n++) this.fx.emit(p.x, p.y + 0.4, p.z, (Math.random() - 0.5) * 6, Math.random() * 4 + 1, (Math.random() - 0.5) * 6, TEA, 1, 0.3, 0.6, 14);
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
    if (target) this.ev.onTarget?.(target, 'marti');
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
    this.updateExtras(dt, karts, time, f);
    // kalkanlar
    for (const k of karts) {
      const on = k.shieldT > 0;
      if (on) { const m = this.shieldFor(k); m.visible = true; m.position.copy(k.pos).add(new THREE.Vector3(0, 0.85, 0)); m.rotation.y = time * 1.5; (m.material as THREE.MeshBasicMaterial).opacity = k.shieldT < 2 && Math.sin(time * 20) > 0 ? 0.2 : 0.55; }
      else { const m = this.shields.get(k); if (m) m.visible = false; }
    }
    this.sync(time);
  }

  private hitKart(k: Kart, by: ItemKind, owner: Kart | null) {
    if (k.shieldT > 0) { k.shieldT = 0; this.ev.onBlock?.(k); return; }
    if (k.hit()) this.ev.onHit?.(k, by, owner);
  }

  private updateExtras(dt: number, karts: Kart[], time: number, f: { i: number; t: number; s: number; d: number; h: number; w: number; tx: number; tz: number; flags: number }) {
    const tr = this.track;
    // fırlatılan simit / nazar: duvardan seker
    for (const p of this.projs) {
      p.life -= dt;
      if (p.target && !p.target.finished) {
        const dx = p.target.pos.x - p.pos.x, dz = p.target.pos.z - p.pos.z, d = Math.hypot(dx, dz), sp = Math.hypot(p.vx, p.vz);
        if (d < 45) { p.vx += ((dx / d) * sp - p.vx) * Math.min(1, dt * 4); p.vz += ((dz / d) * sp - p.vz) * Math.min(1, dt * 4); }
      }
      p.pos.x += p.vx * dt; p.pos.z += p.vz * dt;
      tr.frame(p.pos.x, p.pos.y, p.pos.z, p.idx, f); p.idx = f.i; p.pos.y = f.h + 0.65;
      const lim = f.w / 2 + 0.4;
      if (Math.abs(f.d) > lim) {
        const rx = -f.tz, rz = f.tx, vl = p.vx * rx + p.vz * rz, sd = Math.sign(f.d);
        if (vl * sd > 0) { p.vx -= 2 * vl * rx; p.vz -= 2 * vl * rz; p.bounces++; }
        p.pos.x -= rx * sd * (Math.abs(f.d) - lim); p.pos.z -= rz * sd * (Math.abs(f.d) - lim);
        if (p.bounces > 4) p.life = 0;
      }
      p.obj.position.copy(p.pos);
      if (p.kind === 'nazar') p.obj.rotation.set(0, time * 6, 0); else p.obj.rotation.set(Math.PI / 2, 0, time * 12);
      for (const k of karts) {
        if (k === p.owner && p.life > (p.kind === 'simit' ? 3.2 : 3.7)) continue;
        if ((k.pos.x - p.pos.x) ** 2 + (k.pos.z - p.pos.z) ** 2 < 2.6 && Math.abs(k.pos.y + 0.6 - p.pos.y) < 1.6) {
          p.life = 0; this.burst(p.pos, p.kind === 'simit' ? 0xf0a955 : 0x7ec0f0, 14); this.hitKart(k, p.kind === 'simit' ? 'simit' : 'nazar', p.owner); break;
        }
      }
    }
    for (const p of this.projs) if (p.life <= 0) this.scene.remove(p.obj);
    this.projs = this.projs.filter((p) => p.life > 0);
    // vapur düdüğü: büyüyen halka
    for (const w of this.waves) {
      w.t += dt; const r = Math.max(0, w.t) * 30;
      w.obj.position.copy(w.pos).add(new THREE.Vector3(0, 0.8, 0)); w.obj.scale.setScalar(Math.max(0.01, r)); (w.obj.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.8 - w.t * 1.4);
      if (w.t > 0) for (const k of karts) if (!w.hit.has(k) && k.pos.distanceTo(w.pos) < r + 1 && r < 16) { w.hit.add(k); this.hitKart(k, 'duduk', w.owner); k.vel.addScaledVector(k.pos.clone().sub(w.pos).setY(0).normalize(), 9); }
    }
    for (const w of this.waves) if (w.t > 0.6) this.scene.remove(w.obj);
    this.waves = this.waves.filter((w) => w.t <= 0.6);
    // kedi sürüsü: atla → kartta otur → in
    for (const c of this.cats) {
      const k = c.target; c.t += dt;
      if (c.phase === 'jump') {
        if (c.t < 0) continue;
        const u = Math.min(1, c.t / 0.75), to = this.tmpV.copy(k.pos); to.y += 0.9;
        c.pos.lerpVectors(c.from, to, u); c.pos.y += Math.sin(u * Math.PI) * 2.4; c.obj.position.copy(c.pos);
        c.obj.rotation.y = -Math.atan2(to.z - c.from.z, to.x - c.from.x); c.obj.rotation.z = (0.5 - u) * 1.2;
        c.legs.forEach((l, n) => (l.rotation.z = (n < 2 ? 1 : -1) * 0.9));
        if (u >= 1) {
          if (k.shieldT > 0) { if (c.slot === 0) { k.shieldT = 0; this.ev.onBlock?.(k); } c.phase = 'off'; c.t = 0; c.from.copy(c.pos); }
          else {
            if (k.catT <= 0) this.ev.onHit?.(k, 'kedi', c.owner);
            k.catT = CAT_RIDE; k.slowT = Math.max(k.slowT, CAT_RIDE); k.drifting = false;
            c.phase = 'ride'; c.t = 0; k.model.body.add(c.obj); c.obj.scale.setScalar(0.62); c.obj.rotation.set(0, 0, 0);
            const [x, y, z, ry] = CAT_SLOTS[c.slot % CAT_SLOTS.length]; c.obj.position.set(x, y, z); c.obj.rotation.y = ry;
            c.legs.forEach((l) => (l.rotation.z = 0));
          }
        }
      } else if (c.phase === 'ride') {
        c.obj.position.y = CAT_SLOTS[c.slot % CAT_SLOTS.length][1] + Math.abs(Math.sin(time * 9 + c.slot * 2)) * 0.08;
        c.obj.rotation.z = Math.sin(time * 7 + c.slot) * 0.12;
        if (k.catT <= 0 || k.finished) { c.obj.getWorldPosition(c.from); this.scene.add(c.obj); c.obj.scale.setScalar(0.95); c.phase = 'off'; c.t = 0; }
      } else {
        // kaldırıma zıplayıp uzaklaşır
        const u = Math.min(1, c.t / 0.8), i = this.track.idxOf(k.f.s), to = tr.point(k.f.s - 3, c.side * (this.track.T.w[i] / 2 + 2.2), this.tmpV);
        c.pos.lerpVectors(c.from, to, u); c.pos.y += Math.sin(u * Math.PI) * 1.8; c.obj.position.copy(c.pos);
        c.obj.rotation.set(0, -Math.atan2(to.z - c.from.z, to.x - c.from.x), 0);
        c.legs.forEach((l, n) => (l.rotation.z = Math.sin(time * 18 + n * 1.6) * 0.6));
        if (u >= 1) c.phase = 'gone';
      }
    }
    for (const c of this.cats) if (c.phase === 'gone') c.obj.parent?.remove(c.obj);
    this.cats = this.cats.filter((c) => c.phase !== 'gone');
    // simitçilerin attığı simitler
    for (const l of this.loose) {
      l.life -= dt;
      if (!l.landed) {
        l.vel.y -= 25 * dt; l.pos.addScaledVector(l.vel, dt);
        tr.frameGlobal(l.pos.x, l.pos.y, l.pos.z, f);
        if (l.pos.y < f.h + 0.9 && l.vel.y < 0) { l.landed = true; l.pos.y = f.h + 0.9; }
      }
      l.obj.position.copy(l.pos); l.obj.rotation.set(l.landed ? 0 : time * 8, time * 2.5, 0);
      for (const k of karts) if (l.landed && (k.pos.x - l.pos.x) ** 2 + (k.pos.z - l.pos.z) ** 2 < 2.8 && Math.abs(k.pos.y + 0.6 - l.pos.y) < 1.8) { l.life = 0; k.simit = Math.min(10, k.simit + 1); this.ev.onPickup?.(k, 'simit'); break; }
    }
    for (const l of this.loose) if (l.life <= 0) this.scene.remove(l.obj);
    this.loose = this.loose.filter((l) => l.life > 0);
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
const WHITE = new THREE.Color(0xffffff), TEA = new THREE.Color(0xc8662d);
