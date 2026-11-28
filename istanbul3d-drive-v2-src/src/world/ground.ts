// Tek parça zemin: arazi, yol yatakları, park ve meydanlar aynı yükseklik ızgarasından gelir.
// Araba, binalar, ağaçlar ve yollar hep aynı H(x, z) fonksiyonunu kullanır; bu yüzden hiçbir şey havada kalmaz ya da gömülmez.
// Yol yüzeyi ayrı şeritler değildir: asfalt, kaldırım ve yaya taşı her zemin karosunun dokusuna çizilir (roadpaint.ts),
// zemin gölgelendiricisi de o dokuya göre boyar. Kavşaklar kendiliğinden birleşir; üst üste binme, boşluk ya da titreme olmaz.
import * as THREE from 'three';

export interface GridMeta { x0: number; z0: number; step: number; nx: number; nz: number }
export const KIND_LAND = 0, KIND_WATER = 1, KIND_PARK = 2, KIND_PLAZA = 3;
export const TILE = 320; // m (32 hücre)

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
  /** yükseklik (m). Zemin ağıyla aynı üçgenler üzerinden hesaplanır: tekerlek ve yol çizgileri görünen yüzeye tam oturur. */
  H(x: number, z: number): number {
    const g = this.g;
    let fx = (x - g.x0) / g.step, fz = (z - g.z0) / g.step;
    fx = fx < 0 ? 0 : fx > g.nx - 1.001 ? g.nx - 1.001 : fx;
    fz = fz < 0 ? 0 : fz > g.nz - 1.001 ? g.nz - 1.001 : fz;
    const i = fx | 0, j = fz | 0, u = fx - i, v = fz - j, n = g.nx, h = this.h, k = j * n + i;
    // hücrenin köşegeni (i+1, j) – (i, j+1): build() ile aynı
    return u + v <= 1 ? h[k] + (h[k + 1] - h[k]) * u + (h[k + n] - h[k]) * v : h[k + n + 1] + (h[k + n] - h[k + n + 1]) * (1 - u) + (h[k + 1] - h[k + n + 1]) * (1 - v);
  }
  kindAt(x: number, z: number): number {
    const g = this.g; const i = Math.round((x - g.x0) / g.step), j = Math.round((z - g.z0) / g.step);
    if (i < 0 || j < 0 || i >= g.nx || j >= g.nz) return KIND_WATER;
    return this.kind[j * g.nx + i];
  }
  get bounds() { const g = this.g; return [g.x0, g.z0, g.x0 + (g.nx - 1) * g.step, g.z0 + (g.nz - 1) * g.step]; }
}

// ---------- görünüm: karolar (yakın 10 m, uzak 40 m), kenarlarında aşağı inen etek ile ek yeri görünmez ----------
const COLS: Record<number, THREE.Color> = {
  [KIND_LAND]: new THREE.Color('#978b80'),
  [KIND_WATER]: new THREE.Color('#5e7476'),
  [KIND_PARK]: new THREE.Color('#86a63a'),
  [KIND_PLAZA]: new THREE.Color('#a89c8c'),
};
export const groundUniforms = { uWet: { value: 0 } };
const blank = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1); blank.needsUpdate = true;

function compile(sh: THREE.WebGLProgramParametersWithUniforms) {
  sh.uniforms.uWet = groundUniforms.uWet;
  sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP;').replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
  sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
varying vec3 vWP; uniform float uWet;
float hsh(vec2 p){ p = fract(p * vec2(0.1031, 0.1030)); p += dot(p, p.yx + 33.33); return fract((p.x + p.y) * p.x); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(hsh(i), hsh(i+vec2(1,0)), f.x), mix(hsh(i+vec2(0,1)), hsh(i+vec2(1,1)), f.x), f.y); }`)
    // doku renk değil maske: R = asfalt, G = kaldırım, B = yaya taşı
    .replace('#include <map_fragment>', '')
    .replace('#include <color_fragment>', `#include <color_fragment>
  vec4 rm = texture2D(map, vMapUv);
  float px = length(fwidth(vWP.xz));                                  // piksel başına metre
  vec3 base = diffuseColor.rgb * (0.9 + 0.12 * vn(vWP.xz * 0.35) + 0.06 * vn(vWP.xz * 2.1));
  // kenar keskinliği doku örnekleme sıklığına göre: yakında keskin, uzakta (doku küçülürken) yumuşak; böylece kenar tırtıklanmaz
  float tpp = length(fwidth(vMapUv)) * float(textureSize(map, 0).x);
  float es = clamp(tpp * 0.6, 0.12, 0.5);
  float as = smoothstep(0.5 - es, 0.5 + es, rm.r), sw = smoothstep(0.5 - es, 0.5 + es, rm.g), pv = smoothstep(0.5 - es, 0.5 + es, rm.b);
  // kaldırım: açık taş, karo derzleri yakında görünür
  vec2 tg = abs(fract(vWP.xz / 0.6) - 0.5);
  float joint = (1.0 - smoothstep(0.44, 0.49, max(tg.x, tg.y))) ;
  vec3 walk = vec3(0.40, 0.375, 0.34) * (0.93 + 0.1 * vn(vWP.xz * 0.8)) * mix(1.0, 0.86 + 0.14 * joint, 1.0 - smoothstep(0.03, 0.12, px));
  // yaya yolu: arnavut kaldırımı tonu
  vec2 cb = abs(fract(vec2(vWP.x + floor(vWP.z / 0.22) * 0.11, vWP.z) / vec2(0.22)) - 0.5);
  vec3 pave = vec3(0.30, 0.265, 0.23) * (0.88 + 0.2 * vn(vWP.xz * 1.3)) * mix(1.0, 0.8 + 0.2 * (1.0 - smoothstep(0.38, 0.48, max(cb.x, cb.y))), 1.0 - smoothstep(0.015, 0.06, px));
  // asfalt: nötr koyu gri, hafif lekeler ve ince pürüz
  vec3 asph = vec3(0.082, 0.09, 0.108) * (0.86 + 0.22 * vn(vWP.xz * 0.11) + 0.1 * vn(vWP.xz * 3.0) * (1.0 - smoothstep(0.02, 0.2, px)));
  asph *= 1.0 - uWet * 0.3;
  vec3 gc = mix(base, pave, pv);
  gc = mix(gc, walk, sw * (1.0 - pv * 0.0));
  gc = mix(gc, asph, as); // (kenar bantları yok: doku aradeğerlemesi onları dalgalı gösteriyordu)
  diffuseColor.rgb = gc;`);
}

/** karo malzemesi: hepsi aynı programı paylaşır, yalnız yol maskesi dokusu farklıdır */
function tileMaterial(mask: THREE.Texture | null) {
  const m = new THREE.MeshLambertMaterial({ vertexColors: true, map: mask || blank });
  m.onBeforeCompile = compile; m.customProgramCacheKey = () => 'ground-v2';
  return m;
}

export type MaskPainter = (x0: number, z0: number, size: number, res: number) => THREE.Texture;

interface Tile { mesh: THREE.Mesh; lod: number; mask: THREE.Texture | null; res: number; x0: number; z0: number }

export class GroundView {
  readonly group = new THREE.Group();
  private tiles = new Map<string, Tile>();
  /** yol maskesi çizici (roadpaint.ts); çözünürlük: arabaya maskNear metreden yakın karolarda res[0], ötekilerde res[1] piksel */
  painter: MaskPainter | null = null; res: [number, number] = [1024, 192]; maskNear = 230;
  constructor(private G: Ground) { this.group.name = 'ground'; }
  private build(ti: number, tj: number, lod: number, res: number): Tile {
    const G = this.G, g = G.g, st = lod === 0 ? g.step : g.step * 4;
    const n = Math.round(TILE / st) + 1;
    const x0 = g.x0 + ti * TILE, z0 = g.z0 + tj * TILE;
    const pos: number[] = [], col: number[] = [], uv: number[] = [], idx: number[] = [];
    const c = new THREE.Color();
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
      const x = x0 + i * st, z = z0 + j * st, y = G.H(x, z);
      pos.push(x, y, z); uv.push(i / (n - 1), j / (n - 1));
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
    for (const r of ring) { pos.push(pos[r * 3], pos[r * 3 + 1] - 8, pos[r * 3 + 2]); col.push(col[r * 3], col[r * 3 + 1], col[r * 3 + 2]); uv.push(uv[r * 2], uv[r * 2 + 1]); }
    for (let k = 0; k < ring.length - 1; k++) { const a = ring[k], b = ring[k + 1], a2 = base + k, b2 = base + k + 1; idx.push(a, b, a2, b, b2, a2, a, a2, b, b, a2, b2); }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx); geo.computeVertexNormals(); geo.computeBoundingSphere();
    const mask = this.painter ? this.painter(x0, z0, TILE, res) : null;
    const m = new THREE.Mesh(geo, tileMaterial(mask)); m.receiveShadow = true; m.matrixAutoUpdate = false; m.name = `ground_${ti}_${tj}_${lod}`;
    return { mesh: m, lod, mask, res, x0, z0 };
  }
  private freeMask(t: Tile) { if (t.mask) { const cv = t.mask.image as HTMLCanvasElement; t.mask.dispose(); if (cv && 'width' in cv) cv.width = cv.height = 0; t.mask = null; } }
  private drop(t: Tile) { this.group.remove(t.mesh); t.mesh.geometry.dispose(); (t.mesh.material as THREE.Material).dispose(); this.freeMask(t); }
  /** karoları kamera konumuna göre güncelle (kare başına en fazla birkaç tane) */
  update(px: number, pz: number, near: number, far: number, budget = 4) {
    const g = this.G.g, ntx = Math.ceil(((g.nx - 1) * g.step) / TILE), ntz = Math.ceil(((g.nz - 1) * g.step) / TILE);
    const want = new Map<string, [number, number]>();
    for (let tj = 0; tj < ntz; tj++) for (let ti = 0; ti < ntx; ti++) {
      const cx = g.x0 + (ti + 0.5) * TILE, cz = g.z0 + (tj + 0.5) * TILE;
      const d = Math.max(0, Math.hypot(cx - px, cz - pz) - TILE * 0.71);
      if (d < far) want.set(`${ti},${tj}`, [d < near ? 0 : 1, d]);
    }
    for (const [k, t] of this.tiles) if (!want.has(k)) { this.drop(t); this.tiles.delete(k); }
    // önce yakınlar
    const todo = [...want].filter(([k, l]) => this.tiles.get(k)?.lod !== l[0]).sort((a, b) => a[1][1] - b[1][1]);
    for (const [k, [lod, d]] of todo.slice(0, budget)) {
      const [ti, tj] = k.split(',').map(Number);
      const old = this.tiles.get(k); if (old) this.drop(old);
      const t = this.build(ti, tj, lod, d < this.maskNear ? this.res[0] : this.res[1]); this.group.add(t.mesh); this.tiles.set(k, t);
    }
    // yol maskesi keskinliği: yaklaşınca yükselt, iyice uzaklaşınca düşür (kare başına en fazla iki karo)
    let repaint = 0;
    if (this.painter) for (const [k, [, d]] of [...want].sort((a, b) => a[1][1] - b[1][1])) {
      const t = this.tiles.get(k); if (!t) continue;
      const need = d < this.maskNear ? this.res[0] : d > this.maskNear + 120 ? this.res[1] : t.res;
      if (need === t.res) continue;
      this.freeMask(t); t.mask = this.painter(t.x0, t.z0, TILE, need); t.res = need;
      const m = t.mesh.material as THREE.MeshLambertMaterial; m.map = t.mask; m.needsUpdate = false;
      if (++repaint >= Math.max(1, budget >> 1)) break;
    }
    return todo.length + repaint;
  }
}
