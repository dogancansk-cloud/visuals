// Gerçek Galata–Karaköy: arazi (pist çevresinde düzeltilmiş), sokaklar, binalar, ağaçlar, simge yapılar, deniz, gün batımı göğü.
import { inTram } from '../street';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import BWorker from './buildings.worker.ts?worker';
import { facadeMaterial, facadeUniforms } from './facade';
import type { Track } from '../track';
import { F_BRIDGE } from '../trackpath';

interface Grid { x0: number; z0: number; step: number; nx: number; nz: number }
interface Meta { grid: Grid; chunk: number; chunks: number[][]; palette: { walls: string[]; roofs: string[]; flats: string[] }; landmarks: { id: string; model: string; x: number; z: number; y: number; ry: number; s: number }[] }

export const SUN_DIR = new THREE.Vector3(-0.5, 0.74, 0.46).normalize(); // parlak öğle: güneybatıdan, yüksek

export class WorldData {
  constructor(readonly meta: Meta, readonly ground: DataView, readonly buildings: ArrayBuffer, readonly trees: DataView, readonly roads: [number, number, number[]][]) {}
  static async load(base: string, onProgress: (p: number) => void) {
    let done = 0; const tick = <T>(p: Promise<T>) => p.then((v) => { onProgress(++done / 5); return v; });
    const [meta, g, b, t, r] = await Promise.all([
      tick(fetch(base + 'data/meta.json').then((x) => x.json())),
      tick(fetch(base + 'data/ground.bin').then((x) => x.arrayBuffer())),
      tick(fetch(base + 'data/buildings.bin').then((x) => x.arrayBuffer())),
      tick(fetch(base + 'data/trees.bin').then((x) => x.arrayBuffer())),
      tick(fetch(base + 'data/roads.json').then((x) => x.json())),
    ]);
    return new WorldData(meta, new DataView(g), b, new DataView(t), r);
  }
  /** ham arazi yüksekliği */
  H = (x: number, z: number) => {
    const g = this.meta.grid, fx = Math.min(Math.max((x - g.x0) / g.step, 0), g.nx - 1.001), fz = Math.min(Math.max((z - g.z0) / g.step, 0), g.nz - 1.001);
    const i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j, h = (a: number, b: number) => this.ground.getInt16(((j + b) * g.nx + i + a) * 2, true) / 100;
    return (h(0, 0) * (1 - u) + h(1, 0) * u) * (1 - v) + (h(0, 1) * (1 - u) + h(1, 1) * u) * v;
  };
  kind(x: number, z: number) {
    const g = this.meta.grid, i = Math.round((x - g.x0) / g.step), j = Math.round((z - g.z0) / g.step);
    if (i < 0 || j < 0 || i >= g.nx || j >= g.nz) return 1;
    return this.ground.getUint8(g.nx * g.nz * 2 + j * g.nx + i);
  }
}

export class World {
  readonly fine: Grid = { x0: -1100, z0: -800, step: 5, nx: 301, nz: 341 };
  readonly hm: Float32Array; // düzeltilmiş arazi (5 m)
  private hash = new Map<string, number[]>();
  sea!: THREE.Mesh; sky!: THREE.Mesh; skyMats: THREE.ShaderMaterial[] = [];
  readonly landmarks = new THREE.Group();
  private worker?: Worker;
  constructor(readonly scene: THREE.Scene, readonly data: WorldData, readonly track: Track, readonly mobile: boolean) {
    const T = track.T;
    for (let i = 0; i < T.n; i++) { const k = `${Math.floor(T.x[i] / 20)},${Math.floor(T.z[i] / 20)}`; (this.hash.get(k) || this.hash.set(k, []).get(k)!).push(i); }
    this.hm = this.buildHeights();
  }

  /** en yakın pist örneği (xz) */
  nearest(x: number, z: number, skipBridge = false) {
    const T = this.track.T, ci = Math.floor(x / 20), cj = Math.floor(z / 20); let bi = -1, bd = 1e18;
    for (let r = 1; r <= 2 && bi < 0; r++) for (let a = -r; a <= r; a++) for (let b = -r; b <= r; b++) {
      const l = this.hash.get(`${ci + a},${cj + b}`); if (!l) continue;
      for (const i of l) { if (skipBridge && T.flags[i] & F_BRIDGE) continue; const d = (x - T.x[i]) ** 2 + (z - T.z[i]) ** 2; if (d < bd) { bd = d; bi = i; } }
    }
    return { i: bi, d: Math.sqrt(bd) };
  }

  private buildHeights() {
    const F = this.fine, out = new Float32Array(F.nx * F.nz), T = this.track.T, tw = T.tower, D = this.data;
    for (let j = 0; j < F.nz; j++) for (let i = 0; i < F.nx; i++) {
      const x = F.x0 + i * F.step, z = F.z0 + j * F.step;
      let h = D.H(x, z);
      if (D.kind(x, z) === 1) { out[j * F.nx + i] = -3; continue; }
      // kule meydanı düz
      const dt = Math.hypot(x - tw.x, z - tw.z);
      if (dt < 72) { const k = sm((dt - 40) / 32); h = tw.y0 * (1 - k) + h * k; }
      const nb = this.nearest(x, z, true);
      if (nb.i >= 0) {
        const half = T.w[nb.i] / 2 + 2.6, k = sm((nb.d - half) / 20);
        h = (T.y[nb.i] - 0.3) * (1 - k) + h * k;
      }
      out[j * F.nx + i] = Math.max(0.6, h);
    }
    return out;
  }
  /** düzeltilmiş zemin yüksekliği */
  hAt(x: number, z: number) {
    const F = this.fine, fx = Math.min(Math.max((x - F.x0) / F.step, 0), F.nx - 1.001), fz = Math.min(Math.max((z - F.z0) / F.step, 0), F.nz - 1.001);
    const i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j, h = this.hm, n = F.nx;
    return (h[j * n + i] * (1 - u) + h[j * n + i + 1] * u) * (1 - v) + (h[(j + 1) * n + i] * (1 - u) + h[(j + 1) * n + i + 1] * u) * v;
  }

  async build(onStep: (msg: string, frac: number) => void) {
    const wait = () => new Promise((r) => setTimeout(r, 0));
    this.buildSky(); this.buildSea(); this.buildTerrain(); onStep('Sokaklar çiziliyor…', 0.12); await wait();
    this.buildRoads(); this.buildTrees(); onStep('Binalar yükseliyor…', 0.22); await wait();
    let lm = 0, bd = 0; const tell = () => onStep(bd < 1 ? `Binalar yükseliyor… ` : 'Galata Kulesi yerleşiyor…', 0.22 + bd * 0.68 + lm * 0.1);
    await Promise.all([this.buildBuildings((f) => { bd = f; tell(); }), this.loadLandmarks((f) => { lm = f; tell(); })]);
  }

  private buildSky() {
    const g = new THREE.SphereGeometry(1800, 40, 20);
    const m = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { sun: { value: SUN_DIR }, rain: { value: 0 } },
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }',
      fragmentShader: `uniform vec3 sun; uniform float rain; varying vec3 vP;
        void main(){
          float h = vP.y; float s = max(0.0, dot(normalize(vP), sun));
          vec3 top = vec3(0.07, 0.36, 0.92), mid = vec3(0.26, 0.62, 1.0), low = vec3(0.66, 0.88, 1.0), hor = vec3(0.80, 0.94, 1.0);
          vec3 c = mix(low, mid, smoothstep(0.02, 0.22, h)); c = mix(c, top, smoothstep(0.22, 0.75, h));
          c = mix(c, hor, smoothstep(0.08, -0.02, h) * 0.8);
          c += vec3(1.0, 0.97, 0.85) * pow(s, 10.0) * 0.22 + vec3(1.0, 0.98, 0.9) * pow(s, 260.0) * 1.6;
          if (h < -0.02) c = mix(hor, vec3(0.45, 0.72, 0.95), smoothstep(-0.02, -0.2, h));
          c = mix(c, vec3(0.47, 0.5, 0.6) * (0.85 + 0.25 * h), rain * 0.88);
          gl_FragColor = vec4(c, 1.0);
        }`,
    });
    this.skyMats.push(m);
    this.sky = new THREE.Mesh(g, m); this.sky.renderOrder = -10; this.sky.frustumCulled = false; this.scene.add(this.sky);
    // pembe-turuncu bulutlar (düz, çizgi film)
    const parts: THREE.BufferGeometry[] = [];
    let seed = 11; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let k = 0; k < 26; k++) {
      const a = rnd() * Math.PI * 2, r = 900 + rnd() * 500, y = 160 + rnd() * 260, cx = Math.cos(a) * r, cz = Math.sin(a) * r, s = 40 + rnd() * 50;
      for (let b = 0; b < 6; b++) { const sg = new THREE.SphereGeometry(s * (0.6 + rnd() * 0.6), 9, 6); sg.scale(1.7, 0.55, 1.1); sg.translate(cx + (b - 3) * s * 0.8, y + rnd() * s * 0.3, cz + (rnd() - 0.5) * s); parts.push(sg); }
    }
    const cm = new THREE.ShaderMaterial({
      fog: false, uniforms: { sun: { value: SUN_DIR }, rain: { value: 0 } },
      vertexShader: 'varying vec3 vN; varying vec3 vW; void main(){ vN = normalize(mat3(modelMatrix) * normal); vW = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vW,1.0); }',
      fragmentShader: 'uniform vec3 sun; uniform float rain; varying vec3 vN; varying vec3 vW; void main(){ float l = dot(vN, sun) * 0.5 + 0.5; float t = step(0.55, l) * 0.5 + step(0.8, l) * 0.5; vec3 c = mix(vec3(0.74, 0.84, 0.97), vec3(0.95, 0.97, 1.0), t); c = mix(c, vec3(1.0, 1.0, 1.0), step(0.93, l) * 0.8); c = mix(c, mix(vec3(0.36, 0.38, 0.47), vec3(0.56, 0.58, 0.66), t), rain); gl_FragColor = vec4(c, 1.0); }',
    });
    this.skyMats.push(cm);
    const clouds = new THREE.Mesh(mergeGeometries(parts), cm); clouds.renderOrder = -9; this.scene.add(clouds);
  }

  private buildSea() {
    const g = new THREE.PlaneGeometry(6000, 6000, 1, 1); g.rotateX(-Math.PI / 2);
    const m = new THREE.ShaderMaterial({
      fog: true,
      uniforms: { t: { value: 0 }, sun: { value: SUN_DIR }, fogColor: { value: new THREE.Color() }, fogNear: { value: 1 }, fogFar: { value: 1000 } },
      vertexShader: '#include <fog_pars_vertex>\nvarying vec3 vW; void main(){ vW = (modelMatrix * vec4(position,1.0)).xyz; vec4 mvPosition = viewMatrix * vec4(vW,1.0); gl_Position = projectionMatrix * mvPosition;\n#include <fog_vertex>\n}',
      fragmentShader: `#include <fog_pars_fragment>
        uniform float t; uniform vec3 sun; varying vec3 vW;
        void main(){
          vec3 V = normalize(cameraPosition - vW); vec3 R = reflect(-V, vec3(0.0,1.0,0.0));
          float w = sin(vW.x*0.09 + t*0.8)*sin(vW.z*0.12 - t*0.6) + 0.5*sin(vW.x*0.27 - vW.z*0.2 + t*1.6);
          vec3 c = mix(vec3(0.05, 0.42, 0.78), vec3(0.12, 0.62, 0.90), smoothstep(-0.6, 1.0, w));
          float glint = pow(max(0.0, dot(R, sun)), 40.0);
          c = mix(c, vec3(1.0, 0.98, 0.9), clamp(glint * 1.4, 0.0, 0.85));
          c = mix(c, vec3(0.9, 0.97, 1.0), step(1.25, w + glint * 0.8) * 0.7);
          gl_FragColor = vec4(c, 1.0);
        #include <fog_fragment>
        }`,
    });
    this.sea = new THREE.Mesh(g, m); this.sea.position.y = 0; this.scene.add(this.sea);
  }

  private buildTerrain() {
    const F = this.fine, D = this.data;
    const g = new THREE.PlaneGeometry((F.nx - 1) * F.step, (F.nz - 1) * F.step, F.nx - 1, F.nz - 1);
    g.rotateX(-Math.PI / 2); g.translate(F.x0 + ((F.nx - 1) * F.step) / 2, 0, F.z0 + ((F.nz - 1) * F.step) / 2);
    const pos = g.attributes.position as THREE.BufferAttribute, col = new Float32Array(pos.count * 3), c = new THREE.Color();
    const land = new THREE.Color(0xddd3bf), park = new THREE.Color(0x86dc6e), plaza = new THREE.Color(0xf3ead8), shore = new THREE.Color(0xf0dfb8);
    for (let k = 0; k < pos.count; k++) {
      const x = pos.getX(k), z = pos.getZ(k), i = Math.round((x - F.x0) / F.step), j = Math.round((z - F.z0) / F.step);
      const h = this.hm[j * F.nx + i]; pos.setY(k, h);
      const kd = D.kind(x, z);
      c.copy(kd === 2 ? park : kd === 3 ? plaza : land);
      if (h < 2.2 && kd !== 1) c.lerp(shore, 0.35);
      col.set([c.r, c.g, c.b], k * 3);
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.computeVertexNormals();
    const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true }));
    m.receiveShadow = true; this.scene.add(m);
  }

  private buildRoads() {
    const pos: number[] = [], idx: number[] = [], T = this.track.T;
    for (const [code, w0, c] of this.data.roads) {
      const w = Math.max(3, w0) / 2;
      for (let i = 0; i + 3 < c.length; i += 2) {
        const ax = c[i], az = c[i + 1], bx = c[i + 2], bz = c[i + 3], L = Math.hypot(bx - ax, bz - az); if (L < 0.5) continue;
        const n = Math.ceil(L / 4), ux = (bx - ax) / L, uz = (bz - az) / L, rx = -uz * w, rz = ux * w;
        for (let k = 0; k < n; k++) {
          const x0 = ax + ux * (L * k / n), z0 = az + uz * (L * k / n), x1 = ax + ux * (L * (k + 1) / n), z1 = az + uz * (L * (k + 1) / n);
          const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2, nb = this.nearest(mx, mz);
          if (nb.i >= 0 && nb.d < T.w[nb.i] / 2 + w + 1.5 && !(T.flags[nb.i] & F_BRIDGE)) continue;
          if (this.data.kind(mx, mz) === 1) continue;
          const o = pos.length / 3, y = (x: number, z: number) => this.hAt(x, z) + 0.07;
          pos.push(x0 - rx, y(x0 - rx, z0 - rz), z0 - rz, x0 + rx, y(x0 + rx, z0 + rz), z0 + rz, x1 + rx, y(x1 + rx, z1 + rz), z1 + rz, x1 - rx, y(x1 - rx, z1 - rz), z1 - rz);
          idx.push(o, o + 1, o + 2, o, o + 2, o + 3);
        }
      }
      void code;
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
    // ters sarmalı yüzleri yukarı çevir
    const nor = g.attributes.normal as THREE.BufferAttribute; for (let k = 0; k < nor.count; k++) if (nor.getY(k) < 0) nor.setXYZ(k, -nor.getX(k), -nor.getY(k), -nor.getZ(k));
    const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ color: 0x8b92a3, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }));
    m.receiveShadow = true; this.scene.add(m);
  }

  private buildTrees() {
    const D = this.data, pts: [number, number, number][] = [];
    for (let p = 0; p + 10 <= D.trees.byteLength; p += 10) pts.push([D.trees.getFloat32(p, true), D.trees.getFloat32(p + 4, true), D.trees.getUint8(p + 8) / 100]);
    // pist kenarına ek ağaçlar
    const T = this.track.T; let seed = 5; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < T.n; i += 13) {
      if (T.flags[i] & (F_BRIDGE | 2)) continue;
      const sd = rnd() < 0.5 ? -1 : 1, d = sd * (T.w[i] / 2 + 5 + rnd() * 3); pts.push([T.x[i] - T.tz[i] * d, T.z[i] + T.tx[i] * d, 1]);
    }
    const ok = pts.filter(([x, z]) => { const nb = this.nearest(x, z); return !(nb.i >= 0 && nb.d < T.w[nb.i] / 2 + (inTram(nb.i) ? 6.6 : 3.2)) && this.data.kind(x, z) !== 1; });
    const canopy = mergeGeometries([0, 1, 2, 3].map((k) => { const s = new THREE.IcosahedronGeometry(1, 0); const a = k * 2.1; s.scale(k === 3 ? 1.1 : 0.85, k === 3 ? 0.95 : 0.8, k === 3 ? 1.1 : 0.85); s.translate(k === 3 ? 0 : Math.cos(a) * 0.8, k === 3 ? 0.9 : 0.35, k === 3 ? 0 : Math.sin(a) * 0.8); return s; }));
    const trunk = new THREE.CylinderGeometry(0.16, 0.26, 3.2, 6); trunk.translate(0, 1.6, 0);
    const cm = new THREE.InstancedMesh(canopy, new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true }), ok.length);
    const tm = new THREE.InstancedMesh(trunk, new THREE.MeshLambertMaterial({ color: 0x8a6a5a }), ok.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color(), greens = [0x3fc45a, 0x56d466, 0x2fae4e, 0x74dc62];
    ok.forEach(([x, z, s0], k) => {
      const s = (1.6 + rnd() * 0.9) * Math.max(0.8, Math.min(1.4, s0 || 1)), y = this.hAt(x, z);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd() * 6);
      m.compose(new THREE.Vector3(x, y + 2.6 + s * 0.6, z), q, new THREE.Vector3(s, s, s)); cm.setMatrixAt(k, m);
      m.compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(1, 0.8 + s * 0.15, 1)); tm.setMatrixAt(k, m);
      cm.setColorAt(k, c.setHex(greens[k % 4]));
    });
    cm.castShadow = true; tm.castShadow = true; cm.receiveShadow = true;
    this.scene.add(cm, tm);
  }

  private buildBuildings(onProgress: (f: number) => void) {
    const D = this.data, T = this.track.T, trk = new Float32Array(T.n * 3), tw = T.tower;
    let n = 0;
    for (let i = 0; i < T.n; i += 2) { trk[n * 3] = T.x[i]; trk[n * 3 + 1] = T.z[i]; trk[n * 3 + 2] = T.w[i] / 2 + (T.flags[i] & F_BRIDGE ? 5.5 : 6.4); n++; }
    // kule meydanı
    for (let k = 0; k < 24; k++) { const a = (k / 24) * Math.PI * 2; for (const r of [8, 22, 34]) { if (n * 3 + 2 >= trk.length) break; trk[n * 3] = tw.x + Math.cos(a) * r; trk[n * 3 + 1] = tw.z + Math.sin(a) * r; trk[n * 3 + 2] = 14; n++; } }
    const F = this.fine;
    const w = (this.worker = new BWorker());
    w.postMessage({ type: 'init', buf: D.buildings, index: D.meta.chunks, palette: D.meta.palette, keep: { gx0: F.x0, gz0: F.z0, step: F.step, nx: F.nx, nz: F.nz, h: this.hm, trk: trk.subarray(0, n * 3) } });
    const mat = facadeMaterial(); facadeUniforms.uNight.value = 0.42;
    const chunks = D.meta.chunks.map((r, ci) => ({ ci, cx: (r[0] + 0.5) * D.meta.chunk, cz: (r[1] + 0.5) * D.meta.chunk }));
    // pistten uzaklığa göre detay
    const lodOf = (cx: number, cz: number) => { let best = 1e9; for (let i = 0; i < T.n; i += 20) best = Math.min(best, Math.hypot(cx - T.x[i], cz - T.z[i])); return best < (this.mobile ? 160 : 230) ? (best < 90 && !this.mobile ? 0 : 1) : 2; };
    let pending = chunks.length;
    return new Promise<void>((res) => {
      w.onmessage = (e) => {
        const d = e.data as { pos: Float32Array; nor: Float32Array; col: Float32Array; fac: Float32Array; lod: number };
        if (d.pos.length) {
          const g = new THREE.BufferGeometry();
          g.setAttribute('position', new THREE.BufferAttribute(d.pos, 3)); g.setAttribute('normal', new THREE.BufferAttribute(d.nor, 3));
          g.setAttribute('color', new THREE.BufferAttribute(d.col, 3)); g.setAttribute('fac', new THREE.BufferAttribute(d.fac, 4));
          g.computeBoundingSphere();
          const m = new THREE.Mesh(g, mat); m.matrixAutoUpdate = false; m.castShadow = d.lod < 2 && !this.mobile; m.receiveShadow = true; this.scene.add(m);
        }
        onProgress(1 - (pending - 1) / chunks.length);
        if (--pending === 0) { w.terminate(); res(); }
      };
      for (const c of chunks) w.postMessage({ type: 'build', id: c.ci, chunk: c.ci, lod: lodOf(c.cx, c.cz) });
    });
  }

  private async loadLandmarks(onProgress: (f: number) => void) {
    const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
    for (const L of this.data.meta.landmarks) {
      try {
        const gltf = await loader.loadAsync(`./models/${L.model}`);
        const node = gltf.scene.getObjectByName('LOD0') || gltf.scene;
        node.traverse((o) => { const m = o as THREE.Mesh; if (m.isMesh) { m.material = mat; m.castShadow = true; m.receiveShadow = true; if (!m.geometry.getAttribute('color')) { const a = new Float32Array(m.geometry.attributes.position.count * 3).fill(0.85); m.geometry.setAttribute('color', new THREE.BufferAttribute(a, 3)); } } });
        const y = L.id === 'galata' ? this.track.T.tower.y0 - 0.2 : this.hAt(L.x, L.z) - 0.3;
        node.position.set(L.x, y, L.z); node.rotation.y = L.ry; node.scale.setScalar(L.s);
        this.landmarks.add(node);
      } catch (e) { console.warn('model', L.id, e); }
      onProgress((this.data.meta.landmarks.indexOf(L) + 1) / this.data.meta.landmarks.length);
    }
    this.scene.add(this.landmarks);
  }

  update(time: number) { (this.sea.material as THREE.ShaderMaterial).uniforms.t.value = time; }
}

function sm(t: number) { const k = Math.min(1, Math.max(0, t)); return k * k * (3 - 2 * k); }
