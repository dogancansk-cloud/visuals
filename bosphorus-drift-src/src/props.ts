// Pist dekoru: seyirci martılar ve kediler, tribünler, bayraklar, flamalar, ampul dizileri, lambalar, viraj okları, tabelalar, dev nazar ve simit.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Track, Textures } from './track';
import type { World } from './world/world';
import { F_BRIDGE, F_TUNNEL, F_SPIRAL } from './trackpath';
import { toon } from './characters';

const up = new THREE.Vector3(0, 1, 0);

export class Props {
  private crowdMats: THREE.Material[] = [];
  private uTime = { value: 0 }; readonly uPlayer = { value: new THREE.Vector3(1e5, 0, 1e5) };
  private bulbs: THREE.InstancedMesh | null = null;
  private flags: THREE.Mesh[] = [];
  constructor(private scene: THREE.Scene, private track: Track, private world: World, private tex: Textures, private mobile: boolean) {
    this.lamps();
    this.crowds();
    this.strings();
    this.chevrons();
    this.boards();
    this.flagsAndIcons();
  }

  /** pist kenarında (d>0 sağ) zemin noktası */
  private side(i: number, d: number) {
    const T = this.track.T; const x = T.x[i] - T.tz[i] * d, z = T.z[i] + T.tx[i] * d;
    return new THREE.Vector3(x, this.world.hAt(x, z), z);
  }

  private lamps() {
    const T = this.track.T, poles: THREE.Matrix4[] = [], heads: THREE.Matrix4[] = [], m = new THREE.Matrix4();
    for (let i = 8; i < T.n; i += 26) {
      if (T.flags[i] & F_TUNNEL) continue;
      const sd = (i / 26) % 2 < 1 ? 1 : -1, br = T.flags[i] & F_BRIDGE;
      const d = sd * (T.w[i] / 2 + (br ? 1.4 : 2.6));
      const p = br ? this.track.point(i * (this.track.L / T.n), d).setY(T.y[i] + T.bank[i] * d + 1.0) : this.side(i, d);
      m.compose(p.clone().add(new THREE.Vector3(0, 3, 0)), new THREE.Quaternion(), new THREE.Vector3(1, 6, 1)); poles.push(m.clone());
      m.compose(p.clone().add(new THREE.Vector3(0, 6.2, 0)), new THREE.Quaternion(), new THREE.Vector3(1, 1, 1)); heads.push(m.clone());
    }
    const pole = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.11, 0.15, 1, 6), new THREE.MeshLambertMaterial({ color: 0x2c3566 }), poles.length);
    poles.forEach((mm, k) => pole.setMatrixAt(k, mm)); this.scene.add(pole);
    const hg = new THREE.SphereGeometry(0.42, 10, 8);
    const head = new THREE.InstancedMesh(hg, new THREE.MeshBasicMaterial({ color: 0xffe6a8 }), heads.length);
    heads.forEach((mm, k) => head.setMatrixAt(k, mm)); this.scene.add(head);
  }

  private crowdMaterial(color: number) {
    const m = new THREE.MeshLambertMaterial({ color });
    m.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = this.uTime; sh.uniforms.uPlayer = this.uPlayer;
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime; uniform vec3 uPlayer;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nfloat ph = instanceMatrix[3].x * 0.71 + instanceMatrix[3].z * 1.31;\nfloat cheer = 1.0 - smoothstep(10.0, 34.0, distance(instanceMatrix[3].xz, uPlayer.xz));\ntransformed.y += abs(sin(uTime * (5.5 + cheer * 4.0) + ph)) * (0.22 + cheer * 0.55);\ntransformed.x += sin(uTime * 3.0 + ph) * 0.04;');
    };
    this.crowdMats.push(m); return m;
  }

  private crowds() {
    const T = this.track.T, L = this.track.L;
    // seyirci geometrileri (≈1 m)
    const gull = mergeGeometries([
      ((g) => { g.scale(0.85, 1, 0.75); g.translate(0, 0.45, 0); return g; })(new THREE.SphereGeometry(0.36, 8, 5)),
      ((g) => { g.translate(0, 0.98, 0); return g; })(new THREE.SphereGeometry(0.25, 7, 5)),
    ]);
    const beak = mergeGeometries([((g) => { g.rotateZ(-Math.PI / 2); g.translate(0.3, 0.95, 0); return g; })(new THREE.ConeGeometry(0.07, 0.25, 6))]);
    const wing = mergeGeometries([-1, 1].map((sd) => { const g = new THREE.BoxGeometry(0.3, 0.05, 0.42); g.rotateX(sd * 0.9); g.translate(-0.02, 0.62, sd * 0.38); return g; }));
    const cat = mergeGeometries([
      ((g) => { g.scale(0.9, 1, 0.8); g.translate(0, 0.42, 0); return g; })(new THREE.SphereGeometry(0.34, 8, 5)),
      ((g) => { g.translate(0, 0.95, 0); return g; })(new THREE.SphereGeometry(0.27, 7, 5)),
      ...[-1, 1].map((sd) => { const g = new THREE.ConeGeometry(0.09, 0.2, 4); g.translate(0, 1.22, sd * 0.15); return g; }),
    ]);
    const spots: { p: THREE.Vector3; yaw: number; kind: number }[] = [];
    const facing = (p: THREE.Vector3, i: number) => Math.atan2(T.z[i] - p.z, T.x[i] - p.x);
    // tribünler: start düzlüğünde (deniz tarafı) ve sıçrama inişinde
    const stands: [number, number, number][] = [[1255, 60, 1], [20, 60, 1], [770, 40, -1], [1205, 25, 1]];
    const standGeo: THREE.BufferGeometry[] = [];
    for (const [s0, len, sd] of stands) {
      for (let s = s0; s < s0 + len; s += 1.4) {
        const i = this.track.idxOf(s % L);
        for (let row = 0; row < 3; row++) {
          const d = sd * (T.w[i] / 2 + 3.2 + row * 1.5), p = this.side(i, d); p.y += 0.6 + row * 0.9;
          spots.push({ p, yaw: facing(p, i), kind: (Math.floor(s * 3) + row) % 3 });
        }
      }
      // tribün basamakları
      for (let row = 0; row < 3; row++) {
        const i0 = this.track.idxOf(s0 % L), i1 = this.track.idxOf((s0 + len) % L);
        const a = this.side(i0, sd * (T.w[i0] / 2 + 3.2 + row * 1.5)), b = this.side(i1, sd * (T.w[i1] / 2 + 3.2 + row * 1.5));
        const mid = a.clone().add(b).multiplyScalar(0.5), L2 = a.distanceTo(b);
        const g = new THREE.BoxGeometry(L2, 0.6 + row * 0.9 + 1.5, 1.5); g.translate(0, (0.6 + row * 0.9) / 2 - 0.75, 0);
        g.rotateY(-Math.atan2(b.z - a.z, b.x - a.x)); g.translate(mid.x, mid.y, mid.z); standGeo.push(g);
      }
    }
    // kule meydanı ve pist boyunca küçük gruplar
    const tw = T.tower;
    for (let k = 0; k < (this.mobile ? 50 : 90); k++) {
      const a = (k / 90) * Math.PI * 2 * 3.1, r = 36 + (k % 4) * 1.6, x = tw.x + Math.cos(a) * r, z = tw.z + Math.sin(a) * r;
      const p = new THREE.Vector3(x, this.world.hAt(x, z), z); spots.push({ p, yaw: Math.atan2(tw.z - z, tw.x - x), kind: k % 3 });
    }
    for (let i = 30; i < T.n; i += 57) {
      if (T.flags[i] & (F_BRIDGE | F_TUNNEL)) continue;
      const sd = (i / 57) % 2 < 1 ? -1 : 1;
      for (let k = 0; k < 6; k++) { const p = this.side((i + k * 2) % T.n, sd * (T.w[i] / 2 + 3 + (k % 2) * 1.3)); spots.push({ p, yaw: facing(p, i), kind: k % 3 }); }
    }
    const kinds = [{ g: gull, c: 0xffffff }, { g: cat, c: 0xf3a65a }, { g: cat, c: 0xa9a39d }];
    const m = new THREE.Matrix4(), q = new THREE.Quaternion();
    kinds.forEach((K, ki) => {
      const list = spots.filter((s) => s.kind === ki);
      const meshes = [new THREE.InstancedMesh(K.g, this.crowdMaterial(K.c), list.length)];
      if (ki === 0) { meshes.push(new THREE.InstancedMesh(beak, this.crowdMaterial(0xf2b84b), list.length)); meshes.push(new THREE.InstancedMesh(wing, this.crowdMaterial(0xc9d0d8), list.length)); }
      list.forEach((s, k) => { q.setFromAxisAngle(up, -s.yaw); m.compose(s.p, q, new THREE.Vector3(1, 1, 1)); for (const me of meshes) me.setMatrixAt(k, m); });
      for (const me of meshes) { me.castShadow = !this.mobile; this.scene.add(me); }
    });
    if (standGeo.length) { const sm = new THREE.Mesh(mergeGeometries(standGeo), new THREE.MeshLambertMaterial({ color: 0x3f6fd6 })); sm.castShadow = true; sm.receiveShadow = true; this.scene.add(sm); }
  }

  /** pistin üstünden geçen ampul dizileri ve flamalar */
  private strings() {
    const T = this.track.T, at = [60, 180, 300, 400, 790, 880, 980, 1080, 1240, 1300];
    const bulbs: THREE.Matrix4[] = [], tris: THREE.BufferGeometry[] = [], wires: number[] = [], posts: THREE.Matrix4[] = [], m = new THREE.Matrix4();
    const cols = [0xea5a5a, 0xf7f6ff, 0x3f6fd6, 0xf2c94c];
    at.forEach((s, n) => {
      const i = this.track.idxOf(s); if (T.flags[i] & (F_BRIDGE | F_TUNNEL)) return;
      const w = T.w[i] / 2 + 2.4, a = this.side(i, -w), b = this.side(i, w), top = Math.max(a.y, b.y) + 7.5;
      for (const p of [a, b]) { m.compose(new THREE.Vector3(p.x, (p.y + top) / 2, p.z), new THREE.Quaternion(), new THREE.Vector3(1, top - p.y, 1)); posts.push(m.clone()); }
      const bulb = n % 2 === 0;
      const K = 22;
      for (let k = 0; k <= K; k++) {
        const t = k / K, x = a.x + (b.x - a.x) * t, z = a.z + (b.z - a.z) * t, y = top - Math.sin(t * Math.PI) * 1.6;
        if (k < K) { const t2 = (k + 1) / K; wires.push(x, y, z, a.x + (b.x - a.x) * t2, top - Math.sin(t2 * Math.PI) * 1.6, a.z + (b.z - a.z) * t2); }
        if (bulb) { m.makeTranslation(x, y - 0.2, z); bulbs.push(m.clone()); }
        else if (k < K) {
          const tri = new THREE.BufferGeometry(), ax = (b.x - a.x) / K * 0.45, az = (b.z - a.z) / K * 0.45, c = new THREE.Color(cols[k % 4]);
          tri.setAttribute('position', new THREE.Float32BufferAttribute([x - ax, y, z - az, x + ax, y, z + az, x, y - 0.9, z], 3));
          tri.setAttribute('color', new THREE.Float32BufferAttribute([c.r, c.g, c.b, c.r, c.g, c.b, c.r, c.g, c.b], 3)); tris.push(tri);
        }
      }
    });
    const pm = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.1, 0.12, 1, 6), new THREE.MeshLambertMaterial({ color: 0x2c3566 }), posts.length);
    posts.forEach((mm, k) => pm.setMatrixAt(k, mm)); this.scene.add(pm);
    const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.Float32BufferAttribute(wires, 3));
    this.scene.add(new THREE.LineSegments(wg, new THREE.LineBasicMaterial({ color: 0x1d2550 })));
    if (tris.length) this.scene.add(new THREE.Mesh(mergeGeometries(tris), new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide })));
    this.bulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(0.16, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffe2a0 }), bulbs.length);
    bulbs.forEach((mm, k) => this.bulbs!.setMatrixAt(k, mm)); this.scene.add(this.bulbs);
  }

  /** keskin virajların dışında ok tabelaları */
  private chevrons() {
    const T = this.track.T, tex = this.tex.make(256, 128, (c, w, h) => {
      c.fillStyle = '#1d2550'; c.fillRect(0, 0, w, h); c.fillStyle = '#f2c94c';
      for (let k = 0; k < 3; k++) { c.beginPath(); const x = 40 + k * 70; c.moveTo(x, 20); c.lineTo(x + 40, 64); c.lineTo(x, 108); c.lineTo(x + 22, 108); c.lineTo(x + 62, 64); c.lineTo(x + 22, 20); c.fill(); }
    });
    const geos: THREE.BufferGeometry[] = [], mat = new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide });
    let last = -99;
    for (let i = 0; i < T.n; i += 3) {
      if (T.flags[i] & (F_SPIRAL | F_TUNNEL | F_BRIDGE) || i - last < 40) continue;
      const a = (i - 10 + T.n) % T.n, b = (i + 10) % T.n;
      let turn = Math.atan2(T.tz[b], T.tx[b]) - Math.atan2(T.tz[a], T.tx[a]); turn = Math.atan2(Math.sin(turn), Math.cos(turn));
      if (Math.abs(turn) < 0.55) continue;
      last = i;
      const out = turn > 0 ? -1 : 1; // sağa dönüşte dış taraf sol
      for (let k = -1; k <= 1; k++) {
        const j = (i + k * 7 + T.n) % T.n, p = this.side(j, out * (T.w[j] / 2 + 1.9));
        const g = new THREE.PlaneGeometry(2.6, 1.3); g.translate(0, 1.5, 0);
        // tabela yüzü pistin yönüne baksın
        g.rotateY(-Math.atan2(T.tz[j], T.tx[j]) + (turn > 0 ? Math.PI : 0));
        g.translate(p.x, p.y, p.z); geos.push(g);
      }
    }
    if (geos.length) this.scene.add(new THREE.Mesh(mergeGeometries(geos), mat));
  }

  /** bariyer tabelaları: semt adları ve İstanbul "sponsorları" */
  private boards() {
    const T = this.track.T, words: [number, string, string, string][] = [
      [40, 'KARAKÖY', '#1d2550', '#ffffff'], [140, 'SİMİT 5₺', '#e8534a', '#ffffff'], [260, 'YÜKSEK KALDIRIM', '#3f6fd6', '#ffffff'], [420, 'GALATA', '#1d2550', '#f2c94c'],
      [800, 'ÇAY OCAĞI', '#c8662d', '#ffffff'], [900, 'ŞİŞHANE', '#3f6fd6', '#ffffff'], [1020, 'VAPUR İSKELESİ', '#1d2550', '#ffffff'], [1250, 'BOSPHORUS DRIFT', '#e8534a', '#ffffff'],
    ];
    for (const [s, text, bg, fg] of words) {
      const i = this.track.idxOf(s); if (T.flags[i] & F_BRIDGE) continue;
      for (const sd of [-1, 1]) {
        const p = this.side(i, sd * (T.w[i] / 2 + 1.75));
        const me = new THREE.Mesh(new THREE.PlaneGeometry(text.length > 9 ? 9 : 6.5, 1.3), new THREE.MeshBasicMaterial({ map: this.tex.sign(text, bg, fg), transparent: true, side: THREE.DoubleSide }));
        me.position.set(p.x, Math.max(p.y, T.y[i]) + 1.75, p.z); me.rotation.y = -Math.atan2(T.tz[i], T.tx[i]);
        this.scene.add(me);
      }
    }
  }

  private flagsAndIcons() {
    const T = this.track.T;
    // Türk bayrakları
    const flagTex = this.tex.make(192, 128, (c, w, h) => {
      c.fillStyle = '#e30a17'; c.fillRect(0, 0, w, h); c.fillStyle = '#fff';
      c.beginPath(); c.arc(72, 64, 32, 0, 7); c.fill(); c.fillStyle = '#e30a17'; c.beginPath(); c.arc(80, 64, 26, 0, 7); c.fill();
      c.fillStyle = '#fff'; c.beginPath(); for (let k = 0; k < 10; k++) { const r = k % 2 ? 6 : 15, a = (k / 10) * Math.PI * 2 - Math.PI / 2; c.lineTo(118 + Math.cos(a) * r, 64 + Math.sin(a) * r); } c.fill();
    });
    const fm = new THREE.MeshLambertMaterial({ map: flagTex, side: THREE.DoubleSide });
    fm.onBeforeCompile = (sh) => { sh.uniforms.uTime = this.uTime; sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime;').replace('#include <begin_vertex>', '#include <begin_vertex>\nfloat wv = position.x / 2.4; transformed.z += sin(position.x * 2.6 - uTime * 7.0 + modelMatrix[3].x) * 0.22 * wv; transformed.y += sin(position.x * 1.7 - uTime * 5.0) * 0.06 * wv;'); };
    const poleM = new THREE.MeshLambertMaterial({ color: 0xe9e8f2 });
    for (const s of [10, 25, 1290, 1310, 470, 760]) {
      const i = this.track.idxOf(s);
      for (const sd of [-1, 1]) {
        if (T.flags[i] & F_BRIDGE) continue;
        const p = this.side(i, sd * (T.w[i] / 2 + 3.5));
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 8, 6), poleM); pole.position.copy(p).add(new THREE.Vector3(0, 4, 0)); this.scene.add(pole);
        const g = new THREE.PlaneGeometry(2.4, 1.6, 8, 1); g.translate(1.2, 0, 0);
        const f = new THREE.Mesh(g, fm); f.position.copy(p).add(new THREE.Vector3(0, 7.1, 0)); f.rotation.y = -Math.atan2(-0.6, 0.8); this.scene.add(f);
      }
    }
    // dev nazar boncuğu (başlangıç kemerinin üstünde) ve dev simit (kule meydanında)
    const eye = new THREE.Group();
    for (const [r, c, z] of [[2.4, 0x2f6fb3, 0], [1.65, 0xffffff, 0.06], [1.05, 0x7ec0f0, 0.12], [0.55, 0x191e2d, 0.18]] as const) {
      const d = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.3, 32), toon(c)); d.rotation.x = Math.PI / 2; d.position.z = z; eye.add(d);
      const d2 = d.clone(); d2.position.z = -z; eye.add(d2);
    }
    const s0 = this.track.point(0, 0);
    eye.position.set(s0.x, s0.y + 10.6, s0.z); eye.rotation.y = -Math.atan2(T.tz[0], T.tx[0]) + Math.PI / 2;
    this.scene.add(eye); this.flags.push(eye as unknown as THREE.Mesh);
    const simit = new THREE.Mesh(new THREE.TorusGeometry(3.2, 1.25, 16, 32), toon(0xd88f45));
    const tw = T.tower; simit.position.set(tw.x + 40, tw.y0 + 3.5, tw.z + 18); simit.rotation.set(0.2, 0.6, 0); simit.castShadow = true; this.scene.add(simit);
    const sesame = new THREE.InstancedMesh(new THREE.SphereGeometry(0.12, 5, 4), toon(0xfff3d6), 70), m = new THREE.Matrix4();
    for (let k = 0; k < 70; k++) { const a = (k / 70) * Math.PI * 2 * 7.3, b = (k % 9) / 9 * Math.PI - Math.PI * 0.1; m.makeTranslation(Math.cos(a) * (3.2 + Math.cos(b) * 1.25), Math.sin(b) * 1.25, Math.sin(a) * (3.2 + Math.cos(b) * 1.25)); sesame.setMatrixAt(k, m); }
    simit.add(sesame);
    void up;
  }

  update(dt: number, time: number) {
    this.uTime.value = time;
    for (const f of this.flags) if ((f as THREE.Object3D).type === 'Group') f.rotation.y += dt * 0.6;
    void this.bulbs;
  }
}
