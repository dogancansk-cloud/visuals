// Rastgele yağmur: bazı yarışlarda ortasında başlar. Gök kararır, yol ıslanır, damlalar düşer, ara sıra şimşek çakar.
import * as THREE from 'three';
import { facadeUniforms } from './world/facade';

export class Weather {
  /** gece yağmurunda sis ve gök ışığı kararsın diye çarpan */
  dim = 1;
  level = 0; target = 0; startAt = -1; flash = 0; private nextBolt = 8;
  private lines: THREE.LineSegments; private pos: Float32Array; private n: number;
  private base: { fog: THREE.Color; far: number; sun: number; hemi: number; sky: THREE.Color; gnd: THREE.Color };
  private road: THREE.MeshLambertMaterial | null = null;
  onStart: (() => void) | null = null; onThunder: (() => void) | null = null;
  constructor(private scene: THREE.Scene, private sun: THREE.DirectionalLight, private hemi: THREE.HemisphereLight, private skyMats: THREE.ShaderMaterial[], mobile: boolean) {
    this.n = mobile ? 700 : 1500;
    this.pos = new Float32Array(this.n * 6);
    for (let i = 0; i < this.n; i++) this.seed(i, new THREE.Vector3(), true);
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    this.lines = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0xdfe6ff, transparent: true, opacity: 0, depthWrite: false }));
    this.lines.frustumCulled = false; scene.add(this.lines);
    const fog = scene.fog as THREE.Fog;
    this.base = { fog: fog.color.clone(), far: fog.far, sun: sun.intensity, hemi: hemi.intensity, sky: hemi.color.clone(), gnd: hemi.groundColor.clone() };
    scene.traverse((o) => { if (o.name === 'road') this.road = (o as THREE.Mesh).material as THREE.MeshLambertMaterial; });
  }
  private seed(i: number, c: THREE.Vector3, anyY = false) {
    const x = c.x + (Math.random() - 0.5) * 70, z = c.z + (Math.random() - 0.5) * 70, y = c.y + (anyY ? Math.random() * 40 - 10 : 30);
    this.pos.set([x, y, z, x + 0.25, y - 1.1, z + 0.15], i * 6);
  }
  /** günün saati değişince temel değerleri yeniden al */
  rebase() { const fog = this.scene.fog as THREE.Fog; this.base = { fog: fog.color.clone(), far: fog.far, sun: this.sun.intensity, hemi: this.hemi.intensity, sky: this.hemi.color.clone(), gnd: this.hemi.groundColor.clone() }; }
  /** yarış başında: %40 ihtimalle yağmur planla */
  plan() {
    this.level = 0; this.target = 0; this.flash = 0;
    const r = Math.random();
    this.startAt = r < 0.08 ? 0.5 : r < 0.42 ? 15 + Math.random() * 55 : -1;
  }
  clear() { this.level = 0; this.target = 0; this.startAt = -1; }
  update(dt: number, raceT: number, cam: THREE.Vector3) {
    if (this.startAt >= 0 && raceT >= this.startAt && this.target === 0) { this.target = 1; this.onStart?.(); }
    this.level += (this.target - this.level) * Math.min(1, dt * 0.35);
    const L = this.level, fog = this.scene.fog as THREE.Fog;
    fog.color.copy(this.base.fog).lerp(TMP.copy(GREY).multiplyScalar(this.dim), L * 0.85); fog.far = this.base.far * (1 - L * 0.55);
    // şimşek
    this.flash = Math.max(0, this.flash - dt * 6);
    if (L > 0.7) { this.nextBolt -= dt; if (this.nextBolt <= 0) { this.nextBolt = 7 + Math.random() * 10; this.flash = 1; setTimeout(() => this.onThunder?.(), 600 + Math.random() * 900); } }
    this.sun.intensity = this.base.sun * (1 - L * 0.7);
    this.hemi.intensity = this.base.hemi * (1 - L * 0.25) + this.flash * 3;
    this.hemi.color.copy(this.base.sky).lerp(COOL, L * 0.6 * this.dim); this.hemi.groundColor.copy(this.base.gnd).lerp(COOLG, L * 0.6 * this.dim);
    for (const m of this.skyMats) if (m.uniforms.rain) m.uniforms.rain.value = L;
    facadeUniforms.uWet.value = L;
    if (this.road) this.road.color.setRGB(1 - L * 0.28, 1 - L * 0.26, 1 - L * 0.2);
    const mat = this.lines.material as THREE.LineBasicMaterial; mat.opacity = L * 0.55; this.lines.visible = L > 0.02;
    if (L > 0.02) {
      const P = this.pos;
      for (let i = 0; i < this.n; i++) {
        const o = i * 6, fall = 42 * dt;
        P[o + 1] -= fall; P[o + 4] -= fall; P[o] += 6 * dt; P[o + 3] += 6 * dt;
        if (P[o + 1] < cam.y - 12 || Math.abs(P[o] - cam.x) > 40 || Math.abs(P[o + 2] - cam.z) > 40) this.seed(i, cam);
      }
      this.lines.geometry.attributes.position.needsUpdate = true;
    }
  }
}
const TMP = new THREE.Color(), GREY = new THREE.Color(0x8a90a8), COOL = new THREE.Color(0x9aa6c8), COOLG = new THREE.Color(0x5a5f78);
