// Tek parça zemin: arazi, yol yatakları, park ve meydanlar aynı yükseklik ızgarasından gelir.
// Araba, binalar, ağaçlar ve yollar hep aynı H(x, z) fonksiyonunu kullanır; bu yüzden hiçbir şey havada kalmaz ya da gömülmez.
import * as THREE from 'three';

export interface GridMeta { x0: number; z0: number; step: number; nx: number; nz: number }
export const KIND_LAND = 0, KIND_WATER = 1, KIND_PARK = 2, KIND_PLAZA = 3;

export class Ground {
  readonly g: GridMeta;
  readonly h: Float32Array;
  readonly kind: Uint8Array;
  constructor(meta: GridMeta, buf: ArrayBuffer) {
    this.g = meta;
    const n = meta.nx * meta.nz;
    const raw = new Int16Array(buf, 0, n);
    this.h = new Float32Array(n);
    for (let i = 0; i < n; i++) this.h[i] = raw[i] / 100;
    this.kind = new Uint8Array(buf, n * 2, n);
  }
  /** yükseklik (m), çift doğrusal */
  H(x: number, z: number): number {
    const g = this.g;
    let fx = (x - g.x0) / g.step, fz = (z - g.z0) / g.step;
    fx = fx < 0 ? 0 : fx > g.nx - 1.001 ? g.nx - 1.001 : fx;
    fz = fz < 0 ? 0 : fz > g.nz - 1.001 ? g.nz - 1.001 : fz;
    const i = fx | 0, j = fz | 0, u = fx - i, v = fz - j, n = g.nx, h = this.h, k = j * n + i;
    return (h[k] * (1 - u) + h[k + 1] * u) * (1 - v) + (h[k + n] * (1 - u) + h[k + n + 1] * u) * v;
  }
  kindAt(x: number, z: number): number {
    const g = this.g; const i = Math.round((x - g.x0) / g.step), j = Math.round((z - g.z0) / g.step);
    if (i < 0 || j < 0 || i >= g.nx || j >= g.nz) return KIND_WATER;
    return this.kind[j * g.nx + i];
  }
  get bounds() { const g = this.g; return [g.x0, g.z0, g.x0 + (g.nx - 1) * g.step, g.z0 + (g.nz - 1) * g.step]; }
}

// ---------- görünüm: karolar (yakın 10 m, uzak 40 m), kenarlarında aşağı inen etek ile ek yeri görünmez ----------
const TILE = 320; // m (32 hücre)
const COLS: Record<number, THREE.Color> = {
  [KIND_LAND]: new THREE.Color('#8f837a'),
  [KIND_WATER]: new THREE.Color('#5e7476'),
  [KIND_PARK]: new THREE.Color('#86a63a'),
  [KIND_PLAZA]: new THREE.Color('#a39788'),
};

export class GroundView {
  readonly group = new THREE.Group();
  readonly mat: THREE.MeshLambertMaterial;
  private tiles = new Map<string, { mesh: THREE.Mesh; lod: number }>();
  constructor(private G: Ground) {
    this.mat = new THREE.MeshLambertMaterial({ vertexColors: true });
    // ince doku: dünya koordinatından gürültü (doku dosyası gerekmez)
    this.mat.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP;').replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
varying vec3 vWP;
float hsh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(hsh(i), hsh(i+vec2(1,0)), f.x), mix(hsh(i+vec2(0,1)), hsh(i+vec2(1,1)), f.x), f.y); }`)
        .replace('#include <color_fragment>', '#include <color_fragment>\n  diffuseColor.rgb *= 0.9 + 0.12 * vn(vWP.xz * 0.35) + 0.06 * vn(vWP.xz * 2.1);');
    };
    this.mat.userData.isGround = true;
    this.group.name = 'ground';
  }
  private build(ti: number, tj: number, lod: number): THREE.Mesh {
    const G = this.G, g = G.g, st = lod === 0 ? g.step : g.step * 4;
    const n = Math.round(TILE / st) + 1;
    const x0 = g.x0 + ti * TILE, z0 = g.z0 + tj * TILE;
    const pos: number[] = [], col: number[] = [], idx: number[] = [];
    const c = new THREE.Color();
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
      const x = x0 + i * st, z = z0 + j * st, y = G.H(x, z);
      pos.push(x, y, z);
      const k = G.kindAt(x, z); c.copy(COLS[k] ?? COLS[0]);
      
      if (k === KIND_WATER) c.multiplyScalar(0.8);
      col.push(c.r, c.g, c.b);
    }
    for (let j = 0; j < n - 1; j++) for (let i = 0; i < n - 1; i++) { const a = j * n + i; idx.push(a, a + n, a + 1, a + 1, a + n, a + n + 1); }
    // etek
    const ring: number[] = [];
    for (let i = 0; i < n; i++) ring.push(i);
    for (let j = 1; j < n; j++) ring.push(j * n + n - 1);
    for (let i = n - 2; i >= 0; i--) ring.push((n - 1) * n + i);
    for (let j = n - 2; j >= 0; j--) ring.push(j * n);
    const base = pos.length / 3;
    for (const r of ring) { pos.push(pos[r * 3], pos[r * 3 + 1] - 8, pos[r * 3 + 2]); col.push(col[r * 3], col[r * 3 + 1], col[r * 3 + 2]); }
    for (let k = 0; k < ring.length - 1; k++) { const a = ring[k], b = ring[k + 1], a2 = base + k, b2 = base + k + 1; idx.push(a, b, a2, b, b2, a2, a, a2, b, b, a2, b2); }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.setIndex(idx); geo.computeVertexNormals(); geo.computeBoundingSphere();
    const m = new THREE.Mesh(geo, this.mat); m.receiveShadow = true; m.matrixAutoUpdate = false; m.name = `ground_${ti}_${tj}_${lod}`;
    return m;
  }
  /** karoları kamera konumuna göre güncelle (karo başına en fazla birkaç tane/kare) */
  update(px: number, pz: number, near: number, far: number, budget = 4) {
    const g = this.G.g, ntx = Math.ceil(((g.nx - 1) * g.step) / TILE), ntz = Math.ceil(((g.nz - 1) * g.step) / TILE);
    const want = new Map<string, number>();
    for (let tj = 0; tj < ntz; tj++) for (let ti = 0; ti < ntx; ti++) {
      const cx = g.x0 + (ti + 0.5) * TILE, cz = g.z0 + (tj + 0.5) * TILE;
      const d = Math.max(0, Math.hypot(cx - px, cz - pz) - TILE * 0.71);
      if (d < far) want.set(`${ti},${tj}`, d < near ? 0 : 1);
    }
    for (const [k, t] of this.tiles) if (!want.has(k)) { this.group.remove(t.mesh); t.mesh.geometry.dispose(); this.tiles.delete(k); }
    // önce yakınlar
    const todo = [...want].filter(([k, l]) => this.tiles.get(k)?.lod !== l).sort((a, b) => a[1] - b[1]);
    for (const [k, lod] of todo.slice(0, budget)) {
      const [ti, tj] = k.split(',').map(Number);
      const old = this.tiles.get(k); if (old) { this.group.remove(old.mesh); old.mesh.geometry.dispose(); }
      const mesh = this.build(ti, tj, lod); this.group.add(mesh); this.tiles.set(k, { mesh, lod });
    }
    return todo.length;
  }
}
