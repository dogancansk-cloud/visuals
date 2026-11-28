// Yarış sonu kürsüsü: ilk üç basamaklarda sevinir, konfeti yağar; kürsüye çıkamayan oyuncu yanda üzülür.
import * as THREE from 'three';
import { CHARS, buildKart, type KartModel } from './characters';
import type { Particles } from './fx';

const STEP = [{ h: 1.7, off: 0, col: 0xffc233 }, { h: 1.15, off: 3.5, col: 0xd9e2ee }, { h: 0.75, off: -3.5, col: 0xe59a5a }];
const CONF = [0xff4f6a, 0xffc233, 0x3fa7ff, 0x41c98a, 0xb48ef0, 0xffffff, 0xff8a1f].map((c) => new THREE.Color(c));

interface Actor { m: KartModel; place: number; y: number; ph: number }

export class Podium {
  readonly group = new THREE.Group();
  on = false;
  private actors: Actor[] = []; private t = 0; private at = new THREE.Vector3(); private fwd = new THREE.Vector3(); private side = new THREE.Vector3();
  private dyn = new THREE.Group();
  constructor(scene: THREE.Scene, private fx: Particles) {
    STEP.forEach((s, k) => {
      const b = new THREE.Mesh(new THREE.BoxGeometry(3.3, s.h, 3.3), new THREE.MeshLambertMaterial({ color: s.col })); b.position.set(0, s.h / 2, s.off); b.castShadow = true; b.receiveShadow = true; this.group.add(b);
      const trim = new THREE.Mesh(new THREE.BoxGeometry(3.45, 0.16, 3.45), new THREE.MeshLambertMaterial({ color: 0xffffff })); trim.position.set(0, s.h, s.off); this.group.add(trim);
      const cv = document.createElement('canvas'); cv.width = cv.height = 128; const c = cv.getContext('2d')!;
      c.fillStyle = '#1d2550'; c.font = '900 100px ui-rounded, system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(String(k + 1), 64, 70);
      const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
      const n = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(1.2, s.h * 0.85), Math.min(1.2, s.h * 0.85)), new THREE.MeshBasicMaterial({ map: t, transparent: true })); n.rotation.y = Math.PI / 2; n.position.set(1.67, s.h / 2, s.off); this.group.add(n);
    });
    const carpet = new THREE.Mesh(new THREE.BoxGeometry(5, 0.08, 13), new THREE.MeshLambertMaterial({ color: 0xd9304a })); carpet.position.set(0.6, 0.04, 0); carpet.receiveShadow = true; this.group.add(carpet);
    this.group.add(this.dyn); this.group.visible = false; scene.add(this.group);
  }
  /** @param fwd kürsünün baktığı yön (kamera bu yönde durur) */
  show(at: THREE.Vector3, fwd: THREE.Vector3, top: number[], loser: number | null, loserPlace = 0) {
    this.hide();
    this.at.copy(at); this.fwd.copy(fwd).setY(0).normalize(); this.side.set(-this.fwd.z, 0, this.fwd.x);
    this.group.position.copy(at); this.group.rotation.y = -Math.atan2(this.fwd.z, this.fwd.x);
    top.slice(0, 3).forEach((ci, k) => {
      const m = buildKart(CHARS[ci]); m.root.scale.setScalar(1.05); m.root.position.set(0, STEP[k].h + 0.5, STEP[k].off); m.root.rotation.y = k === 0 ? 0 : k === 1 ? 0.35 : -0.35;
      m.root.traverse((o) => { if ((o as THREE.Mesh).isMesh) o.castShadow = true; });
      this.dyn.add(m.root); this.actors.push({ m, place: k + 1, y: STEP[k].h + 0.5, ph: k * 1.7 });
    });
    if (loser !== null) {
      const m = buildKart(CHARS[loser]); m.root.scale.setScalar(0.95); m.root.position.set(4.2, 0.5, -2.9); m.root.rotation.y = -0.5;
      m.root.traverse((o) => { if ((o as THREE.Mesh).isMesh) o.castShadow = true; });
      this.dyn.add(m.root); this.actors.push({ m, place: loserPlace || 9, y: 0.5, ph: 0.6 });
    }
    this.t = 0; this.on = true; this.group.visible = true;
  }
  hide() {
    this.on = false; this.group.visible = false;
    for (const a of this.actors) { this.dyn.remove(a.m.root); a.m.root.traverse((o) => { const me = o as THREE.Mesh; if (me.isMesh) me.geometry.dispose(); }); }
    this.actors = [];
  }
  update(dt: number, time: number, camera: THREE.PerspectiveCamera) {
    if (!this.on) return;
    this.t += dt;
    for (const a of this.actors) {
      const r = a.m.root, d = a.m.driver;
      if (a.place === 1) {
        // zıplar, ara sıra kendi çevresinde döner
        const j = Math.abs(Math.sin(time * 5.2)); r.position.y = a.y + j * 0.55;
        const cyc = (this.t + 1) % 4; r.rotation.y = cyc < 0.8 ? (cyc / 0.8) * Math.PI * 2 : 0;
        d.rotation.x = Math.sin(time * 10) * 0.12; for (const f of a.m.anim) f(time, 26, Math.sin(time * 3));
      } else if (a.place <= 3) {
        r.position.y = a.y + Math.abs(Math.sin(time * 3.6 + a.ph)) * (a.place === 2 ? 0.28 : 0.16);
        r.rotation.z = Math.sin(time * 3.2 + a.ph) * 0.06; d.rotation.x = Math.sin(time * 6 + a.ph) * 0.08; for (const f of a.m.anim) f(time, 12, Math.sin(time * 2 + a.ph) * 0.6);
      } else {
        // üzgün: öne eğilir, başını yavaşça sallar
        d.rotation.z = -0.3 + Math.sin(time * 1.3) * 0.03; d.rotation.y = Math.sin(time * 1.9) * 0.22; r.position.y = a.y; for (const f of a.m.anim) f(time, 0.5, 0);
      }
      for (const w of a.m.wheels) w.rotation.z -= a.place === 1 ? 0.2 : 0;
    }
    // konfeti
    const rate = this.t < 7 ? 5 : 1.2, P = this.at, f = this.fwd, s = this.side;
    for (let i = 0; i < rate; i++) if (Math.random() < 0.85) {
      const u = (Math.random() - 0.5) * 13, w = (Math.random() - 0.3) * 7;
      this.fx.emit(P.x + s.x * u + f.x * w, P.y + 7.5 + Math.random() * 2.5, P.z + s.z * u + f.z * w, (Math.random() - 0.5) * 1.6, -1.2 - Math.random(), (Math.random() - 0.5) * 1.6, CONF[Math.floor(Math.random() * CONF.length)], 1, 0.2 + Math.random() * 0.14, 3.6, 0.9);
    }
    // kamera: önden, hafifçe sağa sola süzülür
    const port = camera.aspect < 1, back = port ? 19 : 13.5, sway = Math.sin(this.t * 0.35) * (port ? 1.5 : 3), rise = Math.min(1, this.t / 1.4);
    camera.position.set(P.x + f.x * back + s.x * sway, P.y + 2.6 + (1 - rise) * 2.5, P.z + f.z * back + s.z * sway);
    camera.lookAt(P.x, P.y + (port ? 1.2 : 0.5), P.z); camera.fov = port ? 58 : 46; camera.updateProjectionMatrix();
  }
}
