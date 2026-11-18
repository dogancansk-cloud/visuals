// Binalar: 250 m parçalar, yakında detaylı, uzakta sade. Cephe pencereleri doku dosyası olmadan gölgelendiricide çizilir.
import * as THREE from 'three';
import BWorker from './buildings.worker.ts?worker';

export interface ChunkInfo { ci: number; cx: number; cz: number }
export const facadeUniforms = { uNight: { value: 0 }, uWet: { value: 0 } };

export function facadeMaterial(): THREE.MeshLambertMaterial {
  const m = new THREE.MeshLambertMaterial({ vertexColors: true });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uNight = facadeUniforms.uNight; sh.uniforms.uWet = facadeUniforms.uWet;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec4 fac;\nvarying vec4 vFac;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvFac = fac;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
varying vec4 vFac; uniform float uNight; uniform float uWet;
float h21(vec2 p){ p = fract(p * vec2(0.1031, 0.1030)); p += dot(p, p.yx + 33.33); return fract((p.x + p.y) * p.x); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
  float kind = floor(vFac.z + 0.5); vec3 glow = vec3(0.0);
  float sd = floor(vFac.w * 997.0 + 0.5); // tohum: ara değer gürültüsünü yok et
  if (kind == 1.0) {
    float u = vFac.x, v = vFac.y, sp = 2.9 + sd / 997.0 * 0.8, fh = 3.2;
    vec2 cell = vec2(floor(u / sp), floor(v / fh));
    float fu = fract(u / sp), fv = fract(v / fh);
    bool ground = v < 3.6;
    bool win = ground ? (fu > 0.12 && fu < 0.88 && v > 0.5 && v < 3.0) : (fu > 0.3 && fu < 0.7 && fv > 0.3 && fv < 0.82);
    // pencere pervazı
    bool sill = !ground && fu > 0.27 && fu < 0.73 && fv > 0.26 && fv < 0.3;
    if (sill) diffuseColor.rgb *= 1.12;
    if (win) {
      float r = h21(cell + sd * 0.137);
      vec3 glass = mix(vec3(0.16, 0.2, 0.24), vec3(0.32, 0.38, 0.42), r * 0.6);
      if (ground) glass = vec3(0.12, 0.13, 0.14);
      diffuseColor.rgb = mix(diffuseColor.rgb, glass, 0.85);
      float lit = step(0.52, h21(cell * 1.7 + sd * 0.071 + 3.1));
      glow = (ground ? vec3(1.0, 0.78, 0.45) : mix(vec3(1.0, 0.72, 0.4), vec3(0.85, 0.9, 1.0), step(0.8, r))) * lit * uNight * (ground ? 1.1 : 0.85);
    }
    // kat bandı
    if (!ground && fv < 0.04) diffuseColor.rgb *= 0.93;
  } else if (kind == 0.0) {
    float row = fract(vFac.y / 0.42);
    diffuseColor.rgb *= 0.9 + 0.12 * smoothstep(0.0, 0.25, row) - 0.05 * step(0.85, row);
  }
  diffuseColor.rgb *= 1.0 - uWet * 0.22;`)
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n  totalEmissiveRadiance += glow;');
  };
  return m;
}

interface Slot { lod: number; mesh?: THREE.Mesh; pending?: number; seg?: Float32Array }

export class Buildings {
  readonly group = new THREE.Group();
  readonly mat = facadeMaterial();
  private w: Worker;
  private slots = new Map<number, Slot>();
  private reqId = 0; private inflight = 0;
  private chunks: ChunkInfo[];
  /** çarpışma: parçalara göre duvar parçaları */
  readonly colliders = new Map<number, Float32Array>();
  onCollidersChanged: (() => void) | null = null;
  constructor(buf: ArrayBuffer, index: number[][], palette: { walls: string[]; roofs: string[]; flats: string[] }, readonly CH: number) {
    this.chunks = index.map((r, ci) => ({ ci, cx: (r[0] + 0.5) * CH, cz: (r[1] + 0.5) * CH }));
    this.w = new BWorker();
    this.w.postMessage({ type: 'init', buf, index, palette });
    this.w.onmessage = (e) => this.done(e.data);
    this.group.name = 'buildings';
  }
  private done(d: { id: number; chunk: number; lod: number; pos: Float32Array; nor: Float32Array; col: Float32Array; fac: Float32Array; seg: Float32Array }) {
    this.inflight--;
    const s = this.slots.get(d.chunk); if (!s || s.pending !== d.id) return;
    s.pending = undefined;
    if (s.mesh) { this.group.remove(s.mesh); s.mesh.geometry.dispose(); }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(d.pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(d.nor, 3));
    g.setAttribute('color', new THREE.BufferAttribute(d.col, 3));
    g.setAttribute('fac', new THREE.BufferAttribute(d.fac, 4));
    g.computeBoundingSphere();
    const m = new THREE.Mesh(g, this.mat); m.matrixAutoUpdate = false; m.castShadow = d.lod === 0; m.receiveShadow = true;
    this.group.add(m); s.mesh = m; s.lod = d.lod;
    if (d.lod === 0) { this.colliders.set(d.chunk, d.seg); this.onCollidersChanged?.(); }
  }
  /** yakın / uzak yarıçapına göre parçaları iste */
  update(px: number, pz: number, near: number, far: number) {
    const want: [number, number, number][] = [];
    for (const c of this.chunks) {
      const d = Math.max(0, Math.hypot(c.cx - px, c.cz - pz) - this.CH * 0.71);
      if (d < far) want.push([c.ci, d < near ? 0 : 1, d]);
    }
    const keep = new Set(want.map((w) => w[0]));
    for (const [ci, s] of this.slots) if (!keep.has(ci)) {
      if (s.mesh) { this.group.remove(s.mesh); s.mesh.geometry.dispose(); }
      this.slots.delete(ci); if (this.colliders.delete(ci)) this.onCollidersChanged?.();
    }
    want.sort((a, b) => a[2] - b[2]);
    for (const [ci, lod] of want) {
      if (this.inflight >= 3) break;
      let s = this.slots.get(ci);
      if (s && (s.pending !== undefined ? s.lod === lod : s.lod === lod && s.mesh)) continue;
      if (!s) { s = { lod }; this.slots.set(ci, s); }
      s.lod = lod; s.pending = ++this.reqId; this.inflight++;
      if (lod === 1 && this.colliders.delete(ci)) this.onCollidersChanged?.();
      this.w.postMessage({ type: 'build', id: s.pending, chunk: ci, lod });
    }
  }
  get busy() { return this.inflight > 0; }
}
