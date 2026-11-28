// Boğaz dünyası: turkuaz deniz, iki yaka, tepelerde renkli evler, Kız Kulesi, Galata ve Boğaz köprüleri, yalılar.
// Canlı çevre: seyreden vapurlar, sallanan tekneler, zıplayan yunuslar, olta sallayan balıkçılar, coşan seyirci, süzülen bulutlar.
import * as THREE from 'three';
import { todU, TOD_GLSL } from '../tod';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Geo, rr, type Track, type Textures } from '../track';
import { F_BRIDGE, F_RAMP } from '../trackpath';
import { F_SEA, F_WOOD, F_GAP, F_BIG, QUAY_Y, BG_MARKS } from './bgpath';
import { toon } from '../characters';

export const BG_SUN = new THREE.Vector3(0.35, 1, 0.3).normalize();
const VIVID = [0xf2685c, 0xf7c95a, 0x6ab4f0, 0xffffff, 0xf7a3c0, 0x6fcf9c, 0xf5a25c, 0xfff0d0, 0xffe3b0, 0x7fd4dc, 0xffffff, 0xf0d9b8];

interface Bob { g: THREE.Object3D; y: number; ph: number; amp: number }
interface Cruiser { g: THREE.Group; x: number; z0: number; z1: number; t: number; sp: number; dir: number }
interface Dolphin { g: THREE.Group; cx: number; cz: number; r: number; ph: number }
interface Puff { m: THREE.Mesh; src: THREE.Object3D; off: THREE.Vector3; t: number }

export class Bosphorus {
  skyMats: THREE.ShaderMaterial[] = [];
  readonly uTime = { value: 0 };
  readonly uPlayer = { value: new THREE.Vector3(1e5, 0, 1e5) };
  private T: Track['T'];
  private rnd: () => number;
  // arazi ızgarası
  private gx0 = -780; private gz0 = -620; private gs = 12; private gnx = 128; private gnz = 132; private gh!: Float32Array;
  private bobs: Bob[] = []; private cruisers: Cruiser[] = []; private dolphins: Dolphin[] = []; private rods: THREE.Object3D[] = []; private puffs: Puff[] = [];
  private clouds!: THREE.Group; private flags: THREE.Mesh[] = []; private waterMat!: THREE.ShaderMaterial;
  private solids: THREE.BufferGeometry[] = []; private solidCols: number[] = [];
  constructor(private scene: THREE.Scene, private track: Track, private tex: Textures, private mobile: boolean) {
    this.T = track.T;
    let seed = 23; this.rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    this.sky(); this.water(); this.terrain(); this.quays();
    this.woodRoads(); this.ferries(); this.galataBridge(); this.bigBridge();
    this.kizKulesi(); this.landmarks(); this.yalis(); this.town(); this.trees();
    this.boats();
    this.flushSolids();
  }

  // ---------- yardımcılar ----------
  private W(i: number) { return ((Math.round(i) % this.T.n) + this.T.n) % this.T.n; }
  private P(i: number, d: number, dy = 0) { const T = this.T, k = this.W(i); return [T.x[k] - T.tz[k] * d, T.y[k] + dy, T.z[k] + T.tx[k] * d] as const; }
  private V(i: number, d: number, dy = 0) { const p = this.P(i, d, dy); return new THREE.Vector3(p[0], p[1], p[2]); }
  private yaw(i: number) { const k = this.W(i); return Math.atan2(this.T.tz[k], this.T.tx[k]); }
  /** grubu pist yanına koyar: yerel +x pist yönü, +z sağ (deniz) */
  private put(g: THREE.Object3D, i: number, d: number, y: number | null = null) {
    const p = this.V(i, d); g.position.set(p.x, y ?? this.hAt(p.x, p.z), p.z); g.rotation.y = -this.yaw(i); this.scene.add(g); return g;
  }
  /** renkli katı kutu (sonunda renge göre birleştirilir) */
  private solid(geo: THREE.BufferGeometry, col: number, m?: THREE.Matrix4) { const g = geo.index ? geo.toNonIndexed() : geo; if (m) g.applyMatrix4(m); g.deleteAttribute('uv'); this.solids.push(g); this.solidCols.push(col); }
  private flushSolids() {
    const by = new Map<number, THREE.BufferGeometry[]>();
    this.solids.forEach((g, k) => { const c = this.solidCols[k]; (by.get(c) || by.set(c, []).get(c)!).push(g); });
    for (const [c, list] of by) { const me = new THREE.Mesh(mergeGeometries(list), new THREE.MeshLambertMaterial({ color: c })); me.castShadow = !this.mobile; me.receiveShadow = true; this.scene.add(me); }
    this.solids = []; this.solidCols = [];
  }
  private mesh(geo: THREE.BufferGeometry, col: number, x = 0, y = 0, z = 0) { const m = new THREE.Mesh(geo, toon(col)); m.position.set(x, y, z); m.castShadow = true; return m; }
  private box(g: THREE.Object3D, sx: number, sy: number, sz: number, col: number, x: number, y: number, z: number) { const m = this.mesh(new THREE.BoxGeometry(sx, sy, sz), col, x, y, z); g.add(m); return m; }

  // ---------- arazi sınıflaması ----------
  /** en yakın pist örneği, yanal konum (sağ +), kara mı */
  private classify(x: number, z: number) {
    const T = this.T; let bi = 0, bd = 1e18;
    for (let i = 0; i < T.n; i += 2) { const dx = x - T.x[i], dz = z - T.z[i], dd = dx * dx + dz * dz; if (dd < bd) { bd = dd; bi = i; } }
    const d = (x - T.x[bi]) * -T.tz[bi] + (z - T.z[bi]) * T.tx[bi], hw = T.w[bi] / 2;
    const land = !(T.flags[bi] & F_SEA) && d < hw + 3;
    return { i: bi, d, land, e: -d - (hw + 7), dist: Math.sqrt(bd) };
  }
  private noise(x: number, z: number) { return 0.5 + 0.25 * Math.sin(x * 0.013 + 1.3) * Math.cos(z * 0.017) + 0.25 * Math.sin(x * 0.031 - z * 0.027 + 2.1); }
  private heightRaw(x: number, z: number) {
    const c = this.classify(x, z);
    if (!c.land) return -7;
    const base = QUAY_Y - 0.15;
    if (c.e <= 20) return base;
    const t = Math.min(1, (c.e - 20) / 180);
    return base + Math.pow(t, 1.15) * (44 + 26 * this.noise(x, z)) * (x > 0 ? 0.72 : 1);
  }
  hAt(x: number, z: number) {
    const fx = (x - this.gx0) / this.gs, fz = (z - this.gz0) / this.gs;
    const ix = Math.max(0, Math.min(this.gnx - 2, Math.floor(fx))), iz = Math.max(0, Math.min(this.gnz - 2, Math.floor(fz)));
    const tx = Math.max(0, Math.min(1, fx - ix)), tz = Math.max(0, Math.min(1, fz - iz)), G = this.gh, n = this.gnx;
    const h = (G[iz * n + ix] * (1 - tx) + G[iz * n + ix + 1] * tx) * (1 - tz) + (G[(iz + 1) * n + ix] * (1 - tx) + G[(iz + 1) * n + ix + 1] * tx) * tz;
    return Math.max(h, 0);
  }
  update(a: number, b?: number) {
    const t = b ?? a, dt = b === undefined ? 0 : a;
    this.uTime.value = t; this.waterMat.uniforms.t.value = t;
    if (b === undefined) return;
    for (const o of this.bobs) { o.g.position.y = o.y + Math.sin(t * 1.3 + o.ph) * o.amp; o.g.rotation.z = Math.sin(t * 1.1 + o.ph) * 0.05; o.g.rotation.x = Math.cos(t * 0.9 + o.ph) * 0.04; }
    for (const c of this.cruisers) {
      c.t += dt * c.sp * c.dir; if (c.t > 1) { c.t = 1; c.dir = -1; } if (c.t < 0) { c.t = 0; c.dir = 1; }
      c.g.position.set(c.x + Math.sin(c.t * 6) * 14, Math.sin(t * 1.2 + c.x) * 0.25, c.z0 + (c.z1 - c.z0) * c.t);
      c.g.rotation.y = c.dir > 0 ? -Math.PI / 2 : Math.PI / 2;
    }
    for (const d of this.dolphins) {
      const u = (t * 0.55 + d.ph) % 3, a2 = t * 0.25 + d.ph * 2;
      const x = d.cx + Math.cos(a2) * d.r, z = d.cz + Math.sin(a2) * d.r;
      if (u < 1) { const k = u * Math.PI; d.g.visible = true; d.g.position.set(x, Math.sin(k) * 2.6 - 0.5, z); d.g.rotation.set(0, -a2 - Math.PI / 2, Math.cos(k) * 0.9); }
      else d.g.visible = false;
    }
    this.rods.forEach((r, k) => (r.rotation.z = -0.5 + Math.sin(t * 1.4 + k * 1.9) * 0.18 + (Math.sin(t * 0.37 + k) > 0.96 ? -0.5 : 0)));
    for (const p of this.puffs) {
      p.t += dt * 0.45; if (p.t > 1) p.t -= 1;
      const w = p.src.localToWorld(p.off.clone()); p.m.position.set(w.x + p.t * 5, w.y + p.t * 9, w.z + p.t * 3); p.m.scale.setScalar(0.8 + p.t * 2.2);
      (p.m.material as THREE.MeshBasicMaterial).opacity = 0.75 * (1 - p.t);
    }
    this.clouds.position.x = ((t * 3) % 600) - 300;
    this.flags.forEach((f, k) => { f.rotation.y = Math.sin(t * 3 + k) * 0.35; f.scale.x = 1 + Math.sin(t * 5 + k * 2) * 0.08; });
  }

  // ---------- gök ve deniz ----------
  private sky() {
    const g = new THREE.SphereGeometry(1800, 32, 16);
    const m = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false, uniforms: { sun: { value: BG_SUN }, rain: { value: 0 }, tod: todU },
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }',
      fragmentShader: TOD_GLSL + `uniform vec3 sun; uniform float rain; varying vec3 vP;
        void main(){ float h = vP.y; float s = max(0.0, dot(normalize(vP), sun));
          vec3 c = mix(vec3(0.62, 0.86, 1.0), vec3(0.16, 0.52, 0.98), smoothstep(0.0, 0.6, h));
          c = mix(c, vec3(0.80, 0.94, 1.0), smoothstep(0.10, -0.02, h));
          c += vec3(1.0, 0.95, 0.8) * (pow(s, 200.0) * 1.5 + pow(s, 12.0) * 0.12);
          c = todSky(c, normalize(vP), sun); c = mix(c, vec3(0.5, 0.55, 0.63) * (0.85 + 0.25 * h) * (1.0 - 0.7 * tod.y), rain * 0.88);
          gl_FragColor = vec4(c, 1.0); }`,
    });
    this.skyMats.push(m);
    const s = new THREE.Mesh(g, m); s.renderOrder = -10; s.frustumCulled = false; this.scene.add(s);
    // pamuk bulutlar (yavaşça süzülür)
    this.clouds = new THREE.Group();
    const parts: THREE.BufferGeometry[] = [];
    for (let k = 0; k < 22; k++) {
      const a = this.rnd() * Math.PI * 2, r = 500 + this.rnd() * 800, y = 190 + this.rnd() * 200, cx = Math.cos(a) * r, cz = Math.sin(a) * r, sz = 34 + this.rnd() * 40;
      for (let b = 0; b < 5; b++) { const sg = new THREE.SphereGeometry(sz * (0.6 + this.rnd() * 0.6), 9, 6); sg.scale(1.6, 0.6, 1.1); sg.translate(cx + (b - 2) * sz * 0.8, y + this.rnd() * sz * 0.3, cz + (this.rnd() - 0.5) * sz); parts.push(sg); }
    }
    const cm = new THREE.ShaderMaterial({
      fog: false, uniforms: { sun: { value: BG_SUN }, rain: { value: 0 }, tod: todU },
      vertexShader: 'varying vec3 vN; void main(){ vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: TOD_GLSL + 'uniform vec3 sun; uniform float rain; varying vec3 vN; void main(){ float l = dot(vN, sun) * 0.5 + 0.5; float t = step(0.45, l) * 0.5 + step(0.7, l) * 0.5; vec3 c = mix(vec3(0.72, 0.84, 0.98), vec3(1.0), t); c = mix(c, mix(vec3(0.38, 0.4, 0.48), vec3(0.6, 0.62, 0.7), t), rain * (1.0 - 0.5 * tod.y)); c = todCloud(c); gl_FragColor = vec4(c, 1.0); }',
    });
    this.skyMats.push(cm);
    const cl = new THREE.Mesh(mergeGeometries(parts), cm); cl.renderOrder = -9; this.clouds.add(cl); this.scene.add(this.clouds);
  }

  private water() {
    const g = new THREE.PlaneGeometry(6000, 6000, 1, 1); g.rotateX(-Math.PI / 2);
    this.waterMat = new THREE.ShaderMaterial({
      fog: true,
      uniforms: { tod: todU, t: { value: 0 }, sun: { value: BG_SUN }, fogColor: { value: new THREE.Color() }, fogNear: { value: 1 }, fogFar: { value: 1000 } },
      vertexShader: '#include <fog_pars_vertex>\nvarying vec3 vW; void main(){ vW = (modelMatrix * vec4(position,1.0)).xyz; vec4 mvPosition = viewMatrix * vec4(vW,1.0); gl_Position = projectionMatrix * mvPosition;\n#include <fog_vertex>\n}',
      fragmentShader: `#include <fog_pars_fragment>
        ${TOD_GLSL}
        uniform float t; uniform vec3 sun; varying vec3 vW;
        void main(){
          vec3 V = normalize(cameraPosition - vW); vec3 R = reflect(-V, vec3(0.0,1.0,0.0));
          float w = sin(vW.x*0.10 + t*0.9)*sin(vW.z*0.13 - t*0.7) + 0.5*sin(vW.x*0.29 - vW.z*0.22 + t*1.7);
          float w2 = sin(vW.x*0.035 - t*0.35 + sin(vW.z*0.02)*2.0);
          vec3 c = mix(vec3(0.03, 0.47, 0.83), vec3(0.10, 0.72, 0.88), smoothstep(-0.8, 1.0, w * 0.6 + w2 * 0.5));
          float glint = pow(max(0.0, dot(R, sun)), 60.0);
          c = mix(c, vec3(1.0), clamp(glint * 1.2, 0.0, 0.8));
          c = mix(c, vec3(0.85, 0.98, 1.0), step(1.22, w + glint * 0.6) * 0.75);
          c = todSea(c); gl_FragColor = vec4(c, 1.0);
        #include <fog_fragment>
        }`,
    });
    const sea = new THREE.Mesh(g, this.waterMat); this.scene.add(sea);
  }

  private terrain() {
    const nx = this.gnx, nz = this.gnz, s = this.gs, G = (this.gh = new Float32Array(nx * nz));
    const pos = new Float32Array(nx * nz * 3), col = new Float32Array(nx * nz * 3), idx: number[] = [], c = new THREE.Color();
    for (let iz = 0; iz < nz; iz++) for (let ix = 0; ix < nx; ix++) {
      const x = this.gx0 + ix * s, z = this.gz0 + iz * s, k = iz * nx + ix, cl = this.classify(x, z);
      const h = (G[k] = this.heightRaw(x, z));
      pos.set([x, h, z], k * 3);
      if (!cl.land) c.setHex(0xe8d9a8);
      else if (cl.e < 9) c.setHex(0xefe6d2);
      else if (cl.e < 22) c.setHex(0x9bd472);
      else c.setHex([0x7fc462, 0x6db858, 0x8fcf6c, 0x62ad52][(ix * 7 + iz * 13) % 4]);
      col.set([c.r, c.g, c.b], k * 3);
    }
    for (let iz = 0; iz < nz - 1; iz++) for (let ix = 0; ix < nx - 1; ix++) {
      const a = iz * nx + ix, b = a + 1, d = a + nx, e = d + 1;
      if (G[a] < -6 && G[b] < -6 && G[d] < -6 && G[e] < -6) continue; // tamamen deniz
      idx.push(a, d, b, b, d, e);
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.setIndex(idx); g.computeVertexNormals();
    const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true })); m.receiveShadow = true; this.scene.add(m);
  }

  /** kıyı boyunca rıhtım: yolun sağında taş kaldırım ve denize inen duvar, solunda kaldırım */
  private quays() {
    const T = this.T, top = new Geo(), wall = new Geo(), left = new Geo();
    const stone = this.tex.make(128, 128, (c, w, h) => { c.fillStyle = '#f1e8d6'; c.fillRect(0, 0, w, h); c.strokeStyle = '#d6c9ae'; c.lineWidth = 3; for (let r = 0; r < 4; r++) for (let k = 0; k < 2; k++) c.strokeRect(k * 64 + (r % 2) * 32, r * 32, 64, 32); }, true);
    for (let i = 0; i < T.n; i++) {
      const j = (i + 1) % T.n, f = T.flags[i] | T.flags[j];
      if (f & (F_SEA | F_BRIDGE)) continue;
      const a = T.w[i] / 2 + 1.7, b = T.w[j] / 2 + 1.7, y = -0.06;
      top.quad(this.P(i, a, y), this.P(j, b, y), this.P(j, b + 5.3, y), this.P(i, a + 5.3, y), [0, i / 4], [0, (i + 1) / 4], [1, (i + 1) / 4], [1, i / 4]);
      wall.quad(this.P(i, a + 5.3, y), this.P(j, b + 5.3, y), this.P(j, b + 5.6, -4), this.P(i, a + 5.6, -4), [i / 4, 1], [(i + 1) / 4, 1], [(i + 1) / 4, 0], [i / 4, 0]);
      left.quad(this.P(i, -a - 4.5, y), this.P(j, -b - 4.5, y), this.P(j, -b, y), this.P(i, -a, y), [0, i / 4], [0, (i + 1) / 4], [1, (i + 1) / 4], [1, i / 4]);
      // babalar ve fenerler
      if (i % 12 === 0) this.solid(new THREE.CylinderGeometry(0.28, 0.34, 0.7, 8), 0x2f3c5a, new THREE.Matrix4().makeTranslation(...this.P(i, a + 4.6, 0.3)));
    }
    const mk = (g: Geo, m: THREE.Material) => { const me = new THREE.Mesh(g.build(), m); me.receiveShadow = true; this.scene.add(me); };
    mk(top, new THREE.MeshLambertMaterial({ map: stone })); mk(left, new THREE.MeshLambertMaterial({ map: stone }));
    mk(wall, new THREE.MeshLambertMaterial({ color: 0xcdbfa4, side: THREE.DoubleSide }));
  }

  /** ahşap iskele ve vapur güverteleri: tahta zemin, alçak korkuluk, kazıklar */
  private woodRoads() {
    const T = this.T, deck = new Geo(), rail = new Geo();
    const planks = this.tex.make(128, 128, (c, w, h) => { for (let k = 0; k < 8; k++) { c.fillStyle = ['#c9a06e', '#b98f5e', '#d2ab7a', '#ad8454'][k % 4]; c.fillRect(0, k * 16, w, 16); c.fillStyle = 'rgba(70,40,10,0.35)'; c.fillRect(0, k * 16, w, 2); c.fillStyle = 'rgba(70,40,10,0.5)'; c.fillRect(10 + (k % 3) * 40, k * 16 + 6, 3, 3); c.fillRect(w - 14 - (k % 2) * 30, k * 16 + 6, 3, 3); } }, true);
    const rope = this.tex.make(64, 32, (c, w, h) => { c.fillStyle = '#ff4f45'; c.fillRect(0, 0, w / 2, h); c.fillStyle = '#ffffff'; c.fillRect(w / 2, 0, w / 2, h); c.fillStyle = '#ffc233'; c.fillRect(0, 0, w, 6); }, true);
    for (let i = 0; i < T.n; i++) {
      const j = (i + 1) % T.n;
      if (!(T.flags[i] & F_WOOD) || !(T.flags[j] & F_WOOD)) continue;
      const a = T.w[i] / 2 + 1.7, b = T.w[j] / 2 + 1.7;
      deck.quad(this.P(i, -a), this.P(j, -b), this.P(j, b), this.P(i, a), [0, i / 2], [0, (i + 1) / 2], [1, (i + 1) / 2], [1, i / 2]);
      for (const sd of [-1, 1]) {
        const p0 = this.P(i, sd * (a - 0.5)), p1 = this.P(j, sd * (b - 0.5)), q0 = this.P(i, sd * (a - 0.5), 0.85), q1 = this.P(j, sd * (b - 0.5), 0.85);
        if (sd > 0) rail.quad(p0, p1, q1, q0, [i / 3, 0], [(i + 1) / 3, 0], [(i + 1) / 3, 1], [i / 3, 1]); else rail.quad(p1, p0, q0, q1, [(i + 1) / 3, 0], [i / 3, 0], [i / 3, 1], [(i + 1) / 3, 1]);
      }
      // iskele kazıkları (yalnız iskelede; vapurlar gövdenin üstünde)
      if (!BG_MARKS.ferries.some(([fa, fb]) => i >= fa - 1 && i <= fb + 1) && i % 7 === 0) for (const sd of [-1, 1]) {
        const p = this.P(i, sd * (a - 0.3)), hgt = p[1] + 5;
        this.solid(new THREE.CylinderGeometry(0.32, 0.36, hgt, 7), 0x8a5a30, new THREE.Matrix4().makeTranslation(p[0], p[1] - hgt / 2 + 1.1, p[2]));
        this.solid(new THREE.SphereGeometry(0.42, 7, 5), 0xfff3cf, new THREE.Matrix4().makeTranslation(p[0], p[1] + 1.25, p[2]));
      }
    }
    const dm = new THREE.Mesh(deck.build(), new THREE.MeshLambertMaterial({ map: planks, side: THREE.DoubleSide })); dm.receiveShadow = true; dm.name = 'road2'; this.scene.add(dm);
    this.scene.add(new THREE.Mesh(rail.build(), new THREE.MeshLambertMaterial({ map: rope, side: THREE.DoubleSide })));
  }

  /** sıçrama platformu olan arabalı vapurlar: gövde, yan kamaralar, üstte kaptan köprüsü, bacalar ve duman */
  private ferries() {
    const T = this.T;
    for (const [a, b] of BG_MARKS.ferries) {
      const mid = Math.floor((a + b) / 2), len = b - a, w = T.w[mid] + 3.4, y = T.y[a];
      const g = new THREE.Group();
      const hull = new THREE.Shape(); hull.moveTo(-len / 2 - 4, -w / 2); hull.lineTo(len / 2 - 3, -w / 2 - 1.5); hull.lineTo(len / 2 + 5, 0); hull.lineTo(len / 2 - 3, w / 2 + 1.5); hull.lineTo(-len / 2 - 4, w / 2); hull.lineTo(-len / 2 - 6, 0);
      const hg = new THREE.ExtrudeGeometry(hull, { depth: 4.2, bevelEnabled: false }); hg.rotateX(Math.PI / 2);
      const hm = new THREE.Mesh(hg, toon(0x1e4f9c)); hm.position.y = -0.22; g.add(hm);
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(len + 6, 0.5, w + 2.6), toon(0xffffff)); stripe.position.y = -0.6; g.add(stripe);
      const red = new THREE.Mesh(new THREE.BoxGeometry(len + 5, 0.5, w + 2.4), toon(0xff4f45)); red.position.y = -2.6; g.add(red);
      for (const sd of [-1, 1]) {
        this.box(g, len * 0.5, 3.2, 2.2, 0xffffff, -2, 1.6, sd * (w / 2 + 0.6));
        this.box(g, len * 0.5 + 0.4, 0.3, 2.6, 0xffc233, -2, 3.3, sd * (w / 2 + 0.6));
        for (let k = 0; k < 5; k++) this.box(g, 1.3, 1.1, 0.1, 0x35c8d6, -2 - len * 0.2 + k * len * 0.1, 2.1, sd * (w / 2 - 0.52));
        const fun = this.mesh(new THREE.CylinderGeometry(0.9, 1.05, 3.4, 10), 0xffc233, -len * 0.12, 5.1, sd * (w / 2 + 0.6)); g.add(fun);
        g.add(this.mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.7, 10), 0x2b2833, -len * 0.12, 6.7, sd * (w / 2 + 0.6)));
        for (let k = 0; k < 2; k++) { const pm = new THREE.Mesh(new THREE.SphereGeometry(0.9, 7, 5), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7, depthWrite: false })); this.scene.add(pm); this.puffs.push({ m: pm, src: g, off: new THREE.Vector3(-len * 0.12, 7.4, sd * (w / 2 + 0.6)), t: k * 0.5 + (sd > 0 ? 0.25 : 0) }); }
      }
      // kaptan köprüsü: pistin üstünde geçit
      this.box(g, 5, 2.4, w + 3.4, 0xffffff, -2, 7.4, 0); this.box(g, 5.6, 0.35, w + 4, 0xff4f45, -2, 8.75, 0);
      for (let k = -2; k <= 2; k++) this.box(g, 0.1, 1.1, 1.6, 0x35c8d6, 0.52, 7.6, k * 2.2);
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(9, 1.6), new THREE.MeshBasicMaterial({ map: this.tex.sign('ŞEHİR HATLARI', '#1e4f9c', '#ffffff'), transparent: true })); sign.position.set(-4.55, 7.4, 0); sign.rotation.y = -Math.PI / 2; g.add(sign);
      g.add(this.mesh(new THREE.CylinderGeometry(0.08, 0.08, 4, 5), 0xffffff, -2, 10.8, 0));
      const fl = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.5), new THREE.MeshBasicMaterial({ color: 0xff3b30, side: THREE.DoubleSide })); fl.geometry.translate(1.2, 0, 0); fl.position.set(-2, 12, 0); g.add(fl); this.flags.push(fl);
      const p = this.V(mid, 0); g.position.set(p.x, y, p.z); g.rotation.y = -this.yaw(mid); this.scene.add(g);
    }
  }

  /** Galata Köprüsü: alçak ayaklar, iki yanda olta sallayan balıkçılar, ortada kuleler */
  private galataBridge() {
    const T = this.T, [a, b] = BG_MARKS.galata;
    for (let i = a + 4; i < b; i += 10) for (const sd of [-1, 1]) {
      if (T.flags[i] & F_GAP) continue;
      const p = this.P(i, sd * (T.w[i] / 2 - 1)), h = p[1] + 5;
      this.solid(new THREE.BoxGeometry(2, h, 2), 0xbcc6d6, new THREE.Matrix4().makeTranslation(p[0], p[1] - 1.4 - h / 2, p[2]));
    }
    const mid = Math.floor((a + b) / 2);
    for (const i of [a + 30, b - 40]) for (const sd of [-1, 1]) {
      const g = new THREE.Group(); this.box(g, 3, 9, 3, 0xe9eef5, 0, 4.5, 0); this.box(g, 3.6, 0.5, 3.6, 0x1e4f9c, 0, 9.2, 0); g.add(this.mesh(new THREE.ConeGeometry(2.2, 2.2, 4), 0xff4f45, 0, 10.5, 0));
      this.put(g, i, sd * (T.w[i] / 2 + 3.6), T.y[i]);
    }
    const cols = [0xff5a4f, 0x3fa7ff, 0xffc233, 0x41c98a, 0xffffff, 0x9b7bff];
    for (let i = a + 6, k = 0; i < b - 4; i += this.mobile ? 9 : 5, k++) {
      const sd = k % 2 ? 1 : -1, g = new THREE.Group();
      if (T.flags[i] & (F_GAP | F_RAMP)) continue;
      g.add(this.mesh(new THREE.CylinderGeometry(0.26, 0.3, 1.0, 8), cols[k % cols.length], 0, 0.9, 0));
      g.add(this.mesh(new THREE.SphereGeometry(0.24, 8, 6), 0xf3cfb0, 0, 1.62, 0));
      g.add(this.mesh(new THREE.CylinderGeometry(0.2, 0.26, 0.14, 8), 0x2b2833, 0, 1.84, 0));
      const rod = new THREE.Group(); rod.position.set(0, 1.25, sd * 0.25);
      const stick = this.mesh(new THREE.CylinderGeometry(0.025, 0.04, 3.6, 5), 0x5a3a1c, 0, 1.8, 0); rod.add(stick);
      const line = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 5, 4), new THREE.MeshBasicMaterial({ color: 0xffffff })); line.position.set(0, 3.6, 0); line.rotation.x = 0; rod.add(line);
      rod.rotation.x = sd * 1.0; g.add(rod); this.rods.push(rod);
      this.put(g, i, sd * (T.w[i] / 2 + 1.2), T.y[i] + 0.05);
    }
  }

  /** Boğaz Köprüsü: iki kule, ana halatlar ve askı halatları */
  private bigBridge() {
    const T = this.T, [a, b] = BG_MARKS.big, t0 = a + 48, t1 = b - 48, top = 46, hw = T.w[a + 60] / 2 + 3.2;
    for (const i of [t0, t1]) {
      const g = new THREE.Group(), dy = T.y[i];
      for (const sd of [-1, 1]) { this.box(g, 3.2, top + dy + 8, 2.6, 0xe6ebf2, 0, (top + dy + 8) / 2 - dy - 8, sd * hw); this.box(g, 3.6, 1.2, 3, 0xff4f45, 0, top + 0.6, sd * hw); }
      for (const y of [top - 3, top * 0.55, 6]) this.box(g, 2.4, 2, hw * 2, 0xe6ebf2, 0, y, 0);
      const fl = new THREE.Mesh(new THREE.PlaneGeometry(5, 3.2), new THREE.MeshBasicMaterial({ color: 0xff3b30, side: THREE.DoubleSide })); fl.geometry.translate(2.5, 0, 0); fl.position.set(0, top + 4, 0); g.add(fl); this.flags.push(fl);
      g.add(this.mesh(new THREE.CylinderGeometry(0.12, 0.12, 6, 5), 0xffffff, 0, top + 3, 0));
      this.put(g, i, 0, T.y[i]);
    }
    // halatlar
    const pts: number[] = [], seg = (p: readonly number[], q: readonly number[]) => pts.push(...p, ...q);
    for (const sd of [-1, 1]) {
      const span = t1 - t0, cable = (i: number) => { const u = (i - t0) / span; return top - 34 * (1 - Math.pow(2 * u - 1, 2)) * 1 + 0; };
      let prev: readonly number[] | null = null;
      for (let i = t0; i <= t1; i += 3) {
        const hgt = top - (top - 5) * (1 - Math.pow((2 * (i - t0)) / span - 1, 2)); void cable;
        const p = this.P(i, sd * hw, hgt); if (prev) seg(prev, p); prev = p;
        if ((i - t0) % 6 === 0) seg(p, this.P(i, sd * hw, 1));
      }
      seg(this.P(t0, sd * hw, top), this.P(a + 2, sd * hw, 1)); seg(this.P(t1, sd * hw, top), this.P(b - 2, sd * hw, 1));
    }
    const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    this.scene.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0xffffff })));
    // tırmanan/inen virajların ayakları
    for (let i = a - 70; i < b + 70; i += 9) {
      const k = this.W(i); if (!(T.flags[k] & F_BRIDGE) || (T.flags[k] & F_SEA)) continue;
      const p = this.P(k, 0), h = p[1] + 1; if (h < 3) continue;
      this.solid(new THREE.BoxGeometry(2.2, h, T.w[k] * 0.7), 0xd9dfe8, new THREE.Matrix4().makeRotationY(-this.yaw(k)).setPosition(p[0], p[1] - 1.4 - h / 2, p[2]));
    }
  }

  /** Kız Kulesi: kayalık adacık, beyaz yapı, sekizgen kule, kubbe ve bayrak */
  private kizKulesi() {
    const g = new THREE.Group(), { x, z } = BG_MARKS.kiz;
    const rock = this.mesh(new THREE.CylinderGeometry(15, 19, 3.4, 9), 0xb9ad98, 0, 0.4, 0); g.add(rock);
    g.add(this.mesh(new THREE.CylinderGeometry(13.6, 14.6, 1.2, 9), 0xefe6d2, 0, 2.6, 0));
    this.box(g, 16, 7, 12, 0xfffaf0, -1, 6.6, 0); this.box(g, 17, 0.6, 13, 0xff4f45, -1, 10.3, 0);
    const roof = this.mesh(new THREE.ConeGeometry(11, 3.2, 4), 0xff6a4d, -1, 12.1, 0); roof.rotation.y = Math.PI / 4; roof.scale.z = 0.78; g.add(roof);
    for (let k = -2; k <= 2; k++) for (const sd of [-1, 1]) this.box(g, 1.5, 2.6, 0.2, 0x3fa7ff, -1 + k * 3, 6.8, sd * 6.05);
    g.add(this.mesh(new THREE.CylinderGeometry(4.6, 5.2, 16, 8), 0xfffaf0, 3, 11.2, 0));
    g.add(this.mesh(new THREE.CylinderGeometry(6, 5.4, 1, 8), 0xff4f45, 3, 19.4, 0));
    g.add(this.mesh(new THREE.CylinderGeometry(3.6, 4.2, 6, 8), 0xfffaf0, 3, 22.8, 0));
    for (let k = 0; k < 8; k++) { const a = (k / 8) * Math.PI * 2; this.box(g, 0.25, 2.4, 1.4, 0x3fa7ff, 3 + Math.cos(a) * 4.0, 22.6, Math.sin(a) * 4.0).rotation.y = -a; }
    g.add(this.mesh(new THREE.SphereGeometry(4.4, 12, 7, 0, Math.PI * 2, 0, Math.PI / 2), 0x4f8fd6, 3, 25.8, 0));
    g.add(this.mesh(new THREE.ConeGeometry(0.5, 4.5, 6), 0xffc233, 3, 31.8, 0));
    g.add(this.mesh(new THREE.CylinderGeometry(0.1, 0.1, 6, 5), 0xffffff, 3, 36, 0));
    const fl = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 2.8), new THREE.MeshBasicMaterial({ color: 0xff3b30, side: THREE.DoubleSide })); fl.geometry.translate(2.2, 0, 0); fl.position.set(3, 37.4, 0); g.add(fl); this.flags.push(fl);
    this.box(g, 9, 0.5, 3, 0xd9a05b, -15, 1.4, 6);
    g.position.set(x, 0, z); g.rotation.y = 0.5; this.scene.add(g);
  }

  private mosque(scale: number, minarets: number) {
    const g = new THREE.Group();
    this.box(g, 22, 9, 22, 0xfff6e6, 0, 4.5, 0);
    for (const [x, z] of [[-8, -8], [8, -8], [-8, 8], [8, 8]]) g.add(this.mesh(new THREE.SphereGeometry(4, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), 0x6fa8dc, x, 9, z));
    g.add(this.mesh(new THREE.CylinderGeometry(8.5, 9, 4, 12), 0xfff6e6, 0, 11, 0));
    g.add(this.mesh(new THREE.SphereGeometry(8.6, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), 0x4f8fd6, 0, 13, 0));
    g.add(this.mesh(new THREE.ConeGeometry(0.4, 3, 6), 0xffc233, 0, 23, 0));
    const pos = [[-13, -13], [13, -13], [-13, 13], [13, 13]].slice(0, minarets);
    for (const [x, z] of pos) { g.add(this.mesh(new THREE.CylinderGeometry(1, 1.25, 30, 8), 0xfffaf0, x, 15, z)); g.add(this.mesh(new THREE.CylinderGeometry(1.7, 1.7, 0.8, 8), 0xffc233, x, 21, z)); g.add(this.mesh(new THREE.ConeGeometry(1.3, 6, 8), 0x4f8fd6, x, 33, z)); }
    g.scale.setScalar(scale); return g;
  }

  private landmarks() {
    const T = this.T, M = BG_MARKS;
    // Yeni Cami (Eminönü)
    this.put(this.mosque(1.15, 2), M.ferries[1][1] + 30, -(T.w[0] / 2 + 34));
    // Galata Kulesi (Karaköy sırtında)
    { const g = new THREE.Group(); g.add(this.mesh(new THREE.CylinderGeometry(7, 8, 34, 14), 0xf3e3c4, 0, 17, 0)); g.add(this.mesh(new THREE.CylinderGeometry(8.6, 8, 2, 14), 0xc9b48a, 0, 33, 0)); g.add(this.mesh(new THREE.CylinderGeometry(6.4, 6.8, 6, 14), 0xf3e3c4, 0, 37, 0)); g.add(this.mesh(new THREE.ConeGeometry(7.6, 14, 14), 0x5b6f9c, 0, 47, 0)); g.add(this.mesh(new THREE.ConeGeometry(0.4, 4, 6), 0xffc233, 0, 56, 0)); this.put(g, M.galata[1] + 56, -86); }
    // Dolmabahçe: uzun beyaz saray, kapı ve saat kulesi
    {
      const i = M.dolma, g = new THREE.Group();
      this.box(g, 96, 13, 16, 0xfffaf0, 0, 6.5, 0); this.box(g, 98, 1, 17, 0xe6dcc8, 0, 13.5, 0); this.box(g, 26, 19, 19, 0xfffaf0, 0, 9.5, 0); this.box(g, 28, 1.2, 21, 0xffc233, 0, 19.6, 0);
      for (let k = -11; k <= 11; k++) { if (Math.abs(k) < 3) continue; this.box(g, 1.8, 4, 0.2, 0x3fa7ff, k * 4, 8.5, 8.05); this.box(g, 1.8, 3, 0.2, 0x3fa7ff, k * 4, 3, 8.05); }
      for (let k = -2; k <= 2; k++) this.box(g, 2.2, 8, 0.2, 0x3fa7ff, k * 4.6, 9, 9.55);
      this.put(g, i, -(T.w[i] / 2 + 30));
      const ct = new THREE.Group(); this.box(ct, 5, 22, 5, 0xfff6e6, 0, 11, 0); this.box(ct, 6, 1, 6, 0xffc233, 0, 22.5, 0); this.box(ct, 3.6, 7, 3.6, 0xfff6e6, 0, 26.5, 0); ct.add(this.mesh(new THREE.ConeGeometry(3.2, 5, 4), 0x4f8fd6, 0, 32.5, 0));
      for (const r of [0, Math.PI / 2, Math.PI, -Math.PI / 2]) { const f = new THREE.Mesh(new THREE.CircleGeometry(1.5, 16), new THREE.MeshBasicMaterial({ color: 0xffffff })); f.position.set(Math.sin(r) * 1.85, 26.5, Math.cos(r) * 1.85); f.rotation.y = r; ct.add(f); }
      this.put(ct, i - 40, -(T.w[i] / 2 + 13));
      // saray kapısı: yolun üstünde tak
      const gate = new THREE.Group(); for (const sd of [-1, 1]) { this.box(gate, 3, 11, 3, 0xfffaf0, 0, 5.5, sd * (T.w[i] / 2 + 3.4)); gate.add(this.mesh(new THREE.ConeGeometry(2.4, 3, 4), 0xffc233, 0, 12.5, sd * (T.w[i] / 2 + 3.4))); }
      this.box(gate, 2.4, 2.6, T.w[i] + 7, 0xfffaf0, 0, 10, 0); this.box(gate, 2.8, 0.5, T.w[i] + 8, 0xffc233, 0, 11.5, 0);
      for (const sd of [-1, 1]) { const s = new THREE.Mesh(new THREE.PlaneGeometry(10, 1.7), new THREE.MeshBasicMaterial({ map: this.tex.sign('DOLMABAHÇE', '#1e4f9c', '#ffffff'), transparent: true })); s.position.set(sd * 1.22, 10, 0); s.rotation.y = sd * Math.PI / 2; gate.add(s); }
      this.put(gate, i - 12, 0, T.y[i]);
    }
    // Ortaköy Camii: köprünün dibinde, suyun kenarında taş çıkıntıda
    {
      const i = M.ortakoy + 6, base = new THREE.Group();
      base.add(this.mesh(new THREE.CylinderGeometry(21, 22, 6, 10), 0xefe6d2, 0, -1.5, 0));
      const mq = this.mosque(0.8, 2); mq.position.y = 1.5; base.add(mq);
      this.put(base, i, T.w[i] / 2 + 27, 0);
    }
    // Beylerbeyi Sarayı (Asya, köprü çıkışında)
    {
      const i = M.yali[0] + 14, g = new THREE.Group();
      this.box(g, 46, 11, 15, 0xfffaf0, 0, 5.5, 0); this.box(g, 48, 0.8, 16, 0xff8fb8, 0, 11.4, 0); this.box(g, 14, 15, 17, 0xfffaf0, 0, 7.5, 0); this.box(g, 15, 0.9, 18, 0xff8fb8, 0, 15.4, 0);
      for (let k = -5; k <= 5; k++) { if (Math.abs(k) < 2) continue; this.box(g, 2, 5, 0.2, 0x3fa7ff, k * 4, 6, 7.55); }
      this.put(g, i, -(T.w[i] / 2 + 24));
    }
    // start: karşıda Kız Kulesi'ni gösteren tabela
    { const s = new THREE.Mesh(new THREE.PlaneGeometry(13, 2.6), new THREE.MeshBasicMaterial({ map: this.tex.sign('KIZ KULESİ →', '#ff4f45', '#ffffff'), transparent: true, side: THREE.DoubleSide })); const p = this.V(40, -(T.w[40] / 2 + 3), 5.2); s.position.copy(p); s.rotation.y = -this.yaw(40) - Math.PI / 2; this.scene.add(s); for (const dx of [-5.5, 5.5]) { const q = this.V(40 + dx, -(T.w[40] / 2 + 3)); this.solid(new THREE.CylinderGeometry(0.18, 0.18, 4.4, 6), 0xffffff, new THREE.Matrix4().makeTranslation(q.x, q.y + 2.2, q.z)); } }
  }

  /** yalılar: renkli ahşap konaklar, bahçe takları, iskeleler ve kayıklar */
  private yalis() {
    const T = this.T, [a, b] = BG_MARKS.yali, cols = [0xc9302c, 0xfff6e6, 0xffc233, 0x3fa7ff, 0xff8fb8, 0x41c98a, 0xe8763a];
    const yali = (c: number, w: number) => {
      const g = new THREE.Group();
      this.box(g, w, 7, 9, c, 0, 3.5, 0); this.box(g, w + 1.2, 0.5, 10.2, 0xffffff, 0, 3.6, 0);
      this.box(g, w * 0.34, 3.6, 2.2, c, 0, 5.3, 5.4); this.box(g, w * 0.34 + 0.6, 0.4, 2.8, 0xffffff, 0, 3.5, 5.4);
      const rf = this.mesh(new THREE.ConeGeometry(w * 0.78, 3.4, 4), 0x8a3b2a, 0, 8.7, 0); rf.rotation.y = Math.PI / 4; rf.scale.z = 9.6 / w; g.add(rf);
      for (let k = 0; k < Math.floor(w / 2.6); k++) for (const y of [1.9, 5.4]) { const x = -w / 2 + 1.5 + k * 2.6; if (y > 4 && Math.abs(x) < w * 0.2) continue; this.box(g, 1.1, 1.9, 0.15, 0xffffff, x, y, 4.55); this.box(g, 0.8, 1.6, 0.18, 0x2f5d8a, x, y, 4.56); }
      return g;
    };
    let k = 0;
    for (let i = a + 26; i < b - 8; i += 24, k++) {
      if ([i - 12, i, i + 12, i + 20].some((q) => T.flags[this.W(q)] & F_SEA)) continue;
      // karada konak
      this.put(yali(cols[k % cols.length], 13 + (k % 3) * 3), i, -(T.w[i] / 2 + 13 + (k % 2) * 3));
      // denizde kazıklar üstünde küçük yalı ve iskele
      if (k % 2 === 0) {
        const g = yali(cols[(k + 3) % cols.length], 11); g.scale.setScalar(0.85);
        const pl = new THREE.Group(); pl.add(g); g.position.y = 0.3; g.rotation.y = Math.PI;
        this.box(pl, 16, 0.5, 14, 0xd9a05b, 0, 0.05, 0); for (const [x, z] of [[-7, -6], [7, -6], [-7, 6], [7, 6]]) pl.add(this.mesh(new THREE.CylinderGeometry(0.35, 0.35, 6, 6), 0x8a5a30, x, -3, z));
        this.put(pl, i + 12, T.w[i] / 2 + 15, QUAY_Y - 0.2);
      } else {
        const pier = new THREE.Group(); this.box(pier, 3, 0.4, 14, 0xd9a05b, 0, 0, 0); for (const z of [-5, 0, 5]) for (const x of [-1.3, 1.3]) pier.add(this.mesh(new THREE.CylinderGeometry(0.22, 0.22, 5, 5), 0x8a5a30, x, -2.5, z));
        this.put(pier, i + 12, T.w[i] / 2 + 14, QUAY_Y - 0.25);
      }
      // bahçe takı: begonvilli kemer
      if (k % 2 === 1) {
        const gate = new THREE.Group(), hw = T.w[i] / 2 + 2.6;
        for (const sd of [-1, 1]) this.box(gate, 1.2, 6.5, 1.2, 0xffffff, 0, 3.25, sd * hw);
        this.box(gate, 1.4, 0.8, hw * 2 + 1.4, 0xffffff, 0, 6.6, 0);
        for (let q = 0; q < 9; q++) gate.add(this.mesh(new THREE.IcosahedronGeometry(1.0 + (q % 3) * 0.25, 0), [0xff3fa4, 0xff6fc0, 0xd92b8c][q % 3], (q % 2) * 0.5 - 0.25, 7.2 + (q % 2) * 0.4, -hw + (q / 8) * hw * 2));
        for (const sd of [-1, 1]) for (let q = 0; q < 3; q++) gate.add(this.mesh(new THREE.IcosahedronGeometry(0.9, 0), 0xff3fa4, 0.3, 5.6 - q * 1.3, sd * (hw + 0.5)));
        this.put(gate, i - 10, 0, T.y[i]);
      }
    }
  }

  /** tepelerde renkli evler */
  private town() {
    const n = this.mobile ? 260 : 620, spots: { x: number; y: number; z: number; ry: number; w: number; h: number; d: number; c: number }[] = [];
    let guard = 0;
    while (spots.length < n && guard++ < n * 30) {
      const x = -740 + this.rnd() * 1440, z = -560 + this.rnd() * 1460, cl = this.classify(x, z);
      if (!cl.land || cl.e < 24 || cl.e > 300 || cl.dist < this.T.w[cl.i] / 2 + 16) continue;
      if (this.rnd() < cl.e / 420) continue; // kıyıya yakın daha sık
      const w = 8 + this.rnd() * 7, d = 8 + this.rnd() * 5, h = 6 + this.rnd() * 9;
      if (spots.some((s) => Math.abs(s.x - x) < 11 && Math.abs(s.z - z) < 11)) continue;
      spots.push({ x, y: this.hAt(x, z) - 1.5, z, ry: -this.yaw(cl.i) + (this.rnd() - 0.5) * 0.3, w, h: h + 1.5, d, c: VIVID[Math.floor(this.rnd() * VIVID.length)] });
    }
    const wins = this.tex.make(64, 64, (c, w, h) => { c.fillStyle = '#ffffff'; c.fillRect(0, 0, w, h); c.fillStyle = '#2f5d8a'; for (let r = 0; r < 2; r++) for (let k = 0; k < 2; k++) c.fillRect(8 + k * 32, 10 + r * 32, 16, 18); c.fillStyle = 'rgba(0,0,0,0.08)'; c.fillRect(0, h - 4, w, 4); }, true);
    const bg = new THREE.BoxGeometry(1, 1, 1); bg.translate(0, 0.5, 0);
    { const uv = bg.attributes.uv as THREE.BufferAttribute; for (let k = 0; k < uv.count; k++) uv.setXY(k, uv.getX(k) * 4, uv.getY(k) * 4); }
    const body = new THREE.InstancedMesh(bg, new THREE.MeshLambertMaterial({ map: wins }), spots.length);
    const rg = new THREE.ConeGeometry(0.74, 1, 4); rg.rotateY(Math.PI / 4); rg.translate(0, 0.5, 0);
    const roof = new THREE.InstancedMesh(rg, new THREE.MeshLambertMaterial({ color: 0xffffff }), spots.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color(), up = new THREE.Vector3(0, 1, 0);
    spots.forEach((s, k) => {
      q.setFromAxisAngle(up, s.ry);
      m.compose(new THREE.Vector3(s.x, s.y, s.z), q, new THREE.Vector3(s.w, s.h, s.d)); body.setMatrixAt(k, m); body.setColorAt(k, c.setHex(s.c));
      m.compose(new THREE.Vector3(s.x, s.y + s.h, s.z), q, new THREE.Vector3(s.w * 1.08, 2.6 + s.w * 0.12, s.d * 1.08)); roof.setMatrixAt(k, m); roof.setColorAt(k, c.setHex([0xe8563a, 0xd9482c, 0xf0703f, 0xc93c2a][k % 4]));
    });
    body.castShadow = roof.castShadow = !this.mobile; body.receiveShadow = true; this.scene.add(body, roof);
  }

  /** selviler, çamlar ve erguvanlar; kıyı boyunca palmiyeler */
  private trees() {
    const n = this.mobile ? 220 : 520, kinds: { p: THREE.Vector3; s: number; k: number }[] = [];
    let guard = 0;
    while (kinds.length < n && guard++ < n * 30) {
      const x = -740 + this.rnd() * 1440, z = -560 + this.rnd() * 1460, cl = this.classify(x, z);
      if (!cl.land || cl.e < 10 || cl.e > 330 || cl.dist < this.T.w[cl.i] / 2 + 9) continue;
      kinds.push({ p: new THREE.Vector3(x, this.hAt(x, z) - 0.3, z), s: 0.8 + this.rnd() * 0.7, k: Math.floor(this.rnd() * 10) });
    }
    const trunk = new THREE.CylinderGeometry(0.25, 0.4, 3, 6); trunk.translate(0, 1.5, 0);
    const cyp = new THREE.ConeGeometry(1.5, 9, 7); cyp.translate(0, 6, 0);
    const ball = new THREE.IcosahedronGeometry(3, 0); ball.translate(0, 5, 0);
    const sets: [THREE.BufferGeometry, number, (k: number) => boolean][] = [[cyp, 0x1f7a4a, (k) => k < 3], [ball, 0x3fc25a, (k) => k >= 3 && k < 6], [ball, 0x58d86a, (k) => k === 6 || k === 7], [ball, 0xff4fb0, (k) => k >= 8]];
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), all = new THREE.InstancedMesh(trunk, new THREE.MeshLambertMaterial({ color: 0x8a5a30 }), kinds.length);
    kinds.forEach((t, k) => { m.compose(t.p, q, new THREE.Vector3(t.s, t.s, t.s)); all.setMatrixAt(k, m); }); this.scene.add(all);
    for (const [geo, col, test] of sets) {
      const list = kinds.filter((t) => test(t.k)), im = new THREE.InstancedMesh(geo, new THREE.MeshLambertMaterial({ color: col, flatShading: true }), list.length);
      list.forEach((t, k) => { m.compose(t.p, q, new THREE.Vector3(t.s, t.s, t.s)); im.setMatrixAt(k, m); }); im.castShadow = !this.mobile; this.scene.add(im);
    }
    // palmiyeler ve renkli flamalar: kıyı yolunun solunda
    const T = this.T, pg: THREE.BufferGeometry[] = [], lg: THREE.BufferGeometry[] = [];
    for (let i = 0; i < T.n; i += 22) {
      if (T.flags[i] & (F_SEA | F_BRIDGE)) continue;
      const p = this.V(i, -(T.w[i] / 2 + 4.6)), tr = new THREE.CylinderGeometry(0.22, 0.34, 6.5, 6); tr.translate(p.x, p.y + 3.25, p.z); pg.push(tr);
      for (let k = 0; k < 7; k++) { const lf = new THREE.BoxGeometry(3.4, 0.12, 0.9); lf.translate(1.7, 0, 0); lf.rotateZ(-0.45); lf.rotateY((k / 7) * Math.PI * 2); lf.translate(p.x, p.y + 6.5, p.z); lg.push(lf); }
    }
    if (pg.length) { this.scene.add(new THREE.Mesh(mergeGeometries(pg), new THREE.MeshLambertMaterial({ color: 0xa8743c }))); const lm = new THREE.Mesh(mergeGeometries(lg), new THREE.MeshLambertMaterial({ color: 0x2fbf5a })); lm.castShadow = !this.mobile; this.scene.add(lm); }
  }

  /** seyreden vapurlar, sallanan yelkenliler ve balıkçı tekneleri, zıplayan yunuslar */
  private boats() {
    const T = this.T, M = BG_MARKS;
    const zN = T.z[M.big[0]] - 220, zS = T.z[M.pier[0]] - 70;
    for (let k = 0; k < 3; k++) {
      const g = new THREE.Group();
      this.box(g, 34, 3.2, 10, 0x1e4f9c, 0, 1.2, 0); this.box(g, 30, 3.2, 9, 0xffffff, 0, 4.3, 0); this.box(g, 18, 2.6, 7.5, 0xffffff, 0, 7.2, 0); this.box(g, 31, 0.4, 9.6, 0xffc233, 0, 6, 0);
      g.add(this.mesh(new THREE.CylinderGeometry(1.5, 1.7, 4.5, 12), 0xffc233, 0, 10.6, 0)); g.add(this.mesh(new THREE.CylinderGeometry(1.55, 1.55, 0.9, 12), 0x2b2833, 0, 12.6, 0));
      for (let w = -5; w <= 5; w++) for (const sd of [-1, 1]) this.box(g, 1.4, 1.3, 0.1, 0x35c8d6, w * 2.5, 4.6, sd * 4.55);
      this.scene.add(g);
      for (let q = 0; q < 3; q++) { const pm = new THREE.Mesh(new THREE.SphereGeometry(1.4, 7, 5), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7, depthWrite: false })); this.scene.add(pm); this.puffs.push({ m: pm, src: g, off: new THREE.Vector3(0, 13.4, 0), t: q / 3 }); }
      this.cruisers.push({ g, x: -70 + k * 62, z0: zN, z1: zS, t: (k * 0.37) % 1, sp: 0.016 + k * 0.004, dir: k % 2 ? 1 : -1 });
    }
    // yelkenliler ve balıkçı tekneleri
    const n = this.mobile ? 10 : 20; let guard = 0, made = 0;
    while (made < n && guard++ < 600) {
      const x = -330 + this.rnd() * 660, z = -420 + this.rnd() * 1160, cl = this.classify(x, z);
      if (cl.land || cl.dist < 34 || this.hAt(x, z) > 0.01 || Math.abs(x) < 110 && z < zS && z > zN) continue;
      const g = new THREE.Group(), sail = made % 2 === 0, col = VIVID[made % VIVID.length];
      const hull = this.mesh(new THREE.CylinderGeometry(1.3, 0.7, 6.5, 6, 1), col, 0, 0.5, 0); hull.rotation.z = Math.PI / 2; hull.scale.set(1, 1, 0.6); g.add(hull);
      if (sail) { g.add(this.mesh(new THREE.CylinderGeometry(0.08, 0.1, 8, 5), 0xffffff, 0, 4.6, 0)); const sg = new THREE.Shape(); sg.moveTo(0, 0); sg.lineTo(3.6, 0); sg.lineTo(0, 7); const s = new THREE.Mesh(new THREE.ShapeGeometry(sg), new THREE.MeshLambertMaterial({ color: made % 4 ? 0xffffff : 0xff4f45, side: THREE.DoubleSide })); s.position.set(0.15, 1.3, 0); g.add(s); }
      else { this.box(g, 2, 1.4, 1.5, 0xffffff, -0.6, 1.6, 0); g.add(this.mesh(new THREE.CylinderGeometry(0.2, 0.2, 1, 6), 0xff4f45, -0.6, 2.7, 0)); }
      g.position.set(x, 0, z); g.rotation.y = this.rnd() * 6.28; g.scale.setScalar(1.2); this.scene.add(g);
      this.bobs.push({ g, y: 0.1, ph: this.rnd() * 6, amp: 0.3 }); made++;
    }
    // yunuslar: iskele ve vapur hattının iki yanında
    const pm = Math.floor((M.pier[0] + M.pier[1]) / 2), fm = M.ferries[0][1];
    for (const [i, d] of [[pm, -34], [pm + 30, 30], [fm, -40], [fm + 30, 38], [M.galata[0] + 50, 60]] as const) {
      const g = new THREE.Group(), b = this.mesh(new THREE.SphereGeometry(0.6, 8, 6), 0x6f8fb0, 0, 0, 0); b.scale.set(2.4, 0.9, 0.8); g.add(b);
      const fin = this.mesh(new THREE.ConeGeometry(0.3, 0.8, 4), 0x5a7a9c, -0.1, 0.6, 0); g.add(fin);
      const tail = this.mesh(new THREE.BoxGeometry(0.5, 0.1, 1.2), 0x5a7a9c, -1.5, 0, 0); g.add(tail);
      const nose = this.mesh(new THREE.ConeGeometry(0.22, 0.7, 6), 0x6f8fb0, 1.6, -0.05, 0); nose.rotation.z = -Math.PI / 2; g.add(nose);
      const p = this.V(i, d); this.scene.add(g); this.dolphins.push({ g, cx: p.x, cz: p.z, r: 7, ph: this.dolphins.length * 0.9 });
    }
  }

  /** kıyı yolunun solunda coşan seyirciler (martılar ve kediler) */
  private crowdOld() {
    const T = this.T, spots: { p: THREE.Vector3; yaw: number; k: number }[] = [];
    for (let i = 0; i < T.n; i += this.mobile ? 9 : 5) {
      if (T.flags[i] & (F_SEA | F_BRIDGE | F_GAP)) continue;
      if (((i / 5) | 0) % 4 === 0) continue;
      const d = -(T.w[i] / 2 + 3 + (i % 3) * 0.9), p = this.P(i, d, 0);
      spots.push({ p: new THREE.Vector3(p[0], p[1], p[2]), yaw: Math.atan2(T.tx[i], -T.tz[i]), k: i % 4 });
    }
    const body = new THREE.SphereGeometry(0.36, 8, 5); body.scale(0.85, 1, 0.75); body.translate(0, 0.45, 0);
    const head = new THREE.SphereGeometry(0.26, 7, 5); head.translate(0, 0.98, 0);
    const ears = [-1, 1].map((sd) => { const e = new THREE.ConeGeometry(0.09, 0.2, 4); e.translate(0, 1.22, sd * 0.15); return e; });
    const cat = mergeGeometries([body, head, ...ears]), gull = mergeGeometries([body.clone(), head.clone(), ((g) => { g.rotateZ(-Math.PI / 2); g.translate(0.3, 0.95, 0); return g; })(new THREE.ConeGeometry(0.07, 0.25, 6))]);
    const mat = (c: number) => { const m = new THREE.MeshLambertMaterial({ color: c }); m.onBeforeCompile = (sh) => { sh.uniforms.uTime = this.uTime; sh.uniforms.uPlayer = this.uPlayer; sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime; uniform vec3 uPlayer;').replace('#include <begin_vertex>', '#include <begin_vertex>\nfloat ph = instanceMatrix[3].x * 0.71 + instanceMatrix[3].z * 1.31; float cheer = 1.0 - smoothstep(8.0, 30.0, distance(instanceMatrix[3].xz, uPlayer.xz));\ntransformed.y += abs(sin(uTime * (4.0 + cheer * 5.0) + ph)) * (0.14 + cheer * 0.55);'); }; return m; };
    [[gull, 0xffffff], [cat, 0xff9a3c], [cat, 0xb8b2ac], [gull, 0xffe08a]].forEach(([g, c], ki) => {
      const list = spots.filter((s) => s.k === ki), im = new THREE.InstancedMesh(g as THREE.BufferGeometry, mat(c as number), list.length), m = new THREE.Matrix4(), q = new THREE.Quaternion();
      list.forEach((s, k) => { q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -s.yaw); m.compose(s.p, q, new THREE.Vector3(1, 1, 1)); im.setMatrixAt(k, m); });
      im.castShadow = !this.mobile; this.scene.add(im);
    });
    void F_BIG; void rr;
  }
}
