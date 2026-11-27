// Parçacıklar: drift kıvılcımı, egzoz dumanı, turbo alevi, toz, çay sıçraması.
import * as THREE from 'three';

export class Particles {
  readonly points: THREE.Points;
  private n: number; private head = 0;
  private pos: Float32Array; private vel: Float32Array; private col: Float32Array; private life: Float32Array; private max: Float32Array; private size: Float32Array; private grav: Float32Array;
  private g: THREE.BufferGeometry;
  constructor(scene: THREE.Scene, n = 900) {
    this.n = n;
    this.pos = new Float32Array(n * 3); this.vel = new Float32Array(n * 3); this.col = new Float32Array(n * 4);
    this.life = new Float32Array(n); this.max = new Float32Array(n).fill(1); this.size = new Float32Array(n); this.grav = new Float32Array(n);
    const g = (this.g = new THREE.BufferGeometry());
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    const m = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { scale: { value: 600 } },
      vertexShader: 'attribute float size; attribute vec4 color; varying vec4 vC; uniform float scale; void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }',
      fragmentShader: 'varying vec4 vC; void main(){ vec2 p = gl_PointCoord - 0.5; float d = length(p); if (d > 0.5) discard; float a = smoothstep(0.5, 0.25, d); float sat = max(vC.r, max(vC.g, vC.b)) - min(vC.r, min(vC.g, vC.b)); gl_FragColor = vec4(vC.rgb * (1.0 + 1.6 * sat), vC.a * a); }',
    });
    this.points = new THREE.Points(g, m); this.points.frustumCulled = false; scene.add(this.points);
  }
  setScale(h: number) { (this.points.material as THREE.ShaderMaterial).uniforms.scale.value = h * 0.9; }
  emit(x: number, y: number, z: number, vx: number, vy: number, vz: number, c: THREE.Color, a: number, size: number, life: number, grav = 0) {
    const i = this.head; this.head = (this.head + 1) % this.n;
    this.pos.set([x, y, z], i * 3); this.vel.set([vx, vy, vz], i * 3); this.col.set([c.r, c.g, c.b, a], i * 4);
    this.life[i] = life; this.max[i] = life; this.size[i] = size; this.grav[i] = grav;
  }
  update(dt: number) {
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) { this.size[i] = 0; continue; }
      this.life[i] -= dt;
      const k = i * 3;
      this.vel[k + 1] -= this.grav[i] * dt;
      this.pos[k] += this.vel[k] * dt; this.pos[k + 1] += this.vel[k + 1] * dt; this.pos[k + 2] += this.vel[k + 2] * dt;
      const t = Math.max(0, this.life[i] / this.max[i]);
      this.col[i * 4 + 3] = Math.min(this.col[i * 4 + 3], t * 1.2);
      if (this.life[i] <= 0) this.size[i] = 0;
    }
    this.g.attributes.position.needsUpdate = true; this.g.attributes.color.needsUpdate = true; this.g.attributes.size.needsUpdate = true;
  }
}
