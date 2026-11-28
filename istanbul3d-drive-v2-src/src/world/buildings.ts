// Binalar: 250 m parçalar, yakında detaylı, uzakta sade.
// Görünüm eski haritadan: duvar/çatı dokuları (FreeStylized, tek KTX2 doku dizisi) bina rengini taşır; pencereler gölgelendiricide,
// piksel boyutuna göre yumuşatılarak çizilir (uzakta kum gibi titremez).
import * as THREE from 'three';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import BWorker from './buildings.worker.ts?worker';

export interface ChunkInfo { ci: number; cx: number; cz: number }
const blank = new THREE.DataArrayTexture(new Uint8Array([128, 128, 128, 255]), 1, 1, 1); blank.needsUpdate = true;
const HUE = [0.0, 0.55, 0.0, 0.45, 0.4, 0.55, 0.3, 0.15, 0.35, 0.1, 0.45]; // katman başına dokunun kendi renginin payı (0 = yalnız bina rengi)
export const facadeUniforms = {
  uNight: { value: 0 }, uWet: { value: 0 }, uTex: { value: 0 },
  tArr: { value: blank as THREE.Texture },
  uMean: { value: HUE.map(() => new THREE.Vector3(0.5, 0.5, 0.5)) },
  uHue: { value: HUE },
};
/** duvar/çatı dokularını yükle (haritanın tex klasöründen). Başarısız olursa binalar düz renkle kalır. */
export async function loadFacadeTextures(base: string, renderer: THREE.WebGLRenderer, small: boolean) {
  try {
    const info = await (await fetch(`${base}tex/tex.json`)).json();
    const ktx = new KTX2Loader().setTranscoderPath(`${base}basis/`).detectSupport(renderer);
    const tex = await ktx.loadAsync(`${base}tex/walls_${small ? 512 : 1024}.ktx2`);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.anisotropy = small ? 2 : 4; tex.colorSpace = THREE.SRGBColorSpace; tex.needsUpdate = true;
    ktx.dispose();
    facadeUniforms.uMean.value = info.means.map((c: number[]) => new THREE.Vector3(c[0], c[1], c[2]));
    facadeUniforms.tArr.value = tex; facadeUniforms.uTex.value = 1;
    return true;
  } catch (e) { console.warn('cephe dokuları yüklenemedi, düz renk kullanılıyor', e); return false; }
}

const FACADE_GLSL = `
float h1(float n){ return fract(sin(n) * 43758.5453); }
float lumi(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float boxm(float x, float a, float b, float e){ return smoothstep(a - e, a + e, x) - smoothstep(b - e, b + e, x); }
vec3 gEmis = vec3(0.0);
vec3 facade(vec3 tint){
  float L = floor(vWf.x + 0.5);
  if (L < -0.5) return tint;                                             // süs parçaları (balkon, saçak, tente): dokusuz
  int li = int(L);
  float kind = floor(vWb.z + 0.5);
  float sc = kind < 0.5 ? (li >= 6 ? 3.6 : 4.0) : 3.6;                   // doku tekrarı (metre)
  vec3 col = tint;
  if (uTex > 0.5) {
    vec3 tx = texture(tArr, vec3(vUv2 / sc, L)).rgb;
    vec3 m = uMean[li]; float ml = max(lumi(m), 1e-3);
    col = mix(tint * mix(1.0, lumi(tx) / ml, 0.7), tx * (lumi(tint) / ml), uHue[li]);
    if (kind < 0.5 && li >= 6 && li <= 7) {                              // kiremit çatılar: sıra çizgileri uzaktan da okunur
      float pr = length(fwidth(vUv2));
      col = mix(tint * max(0.0, mix(1.0, lumi(tx) / ml, 1.3)), tx * (lumi(tint) / ml), uHue[li] * 0.6);
      float rows = fract(vUv2.y / 0.36);
      col *= 1.0 - 0.22 * smoothstep(0.72, 0.98, rows) * (1.0 - smoothstep(0.06, 0.25, pr));
    }
  }
  if (kind < 0.5 || kind > 1.5) {
    if (kind > 1.5) col *= 0.82 + 0.18 * smoothstep(0.0, 2.0, vUv2.y);    // düz duvar: dipte hafif gölge
    return col;
  }
  // ---- pencereler: ~3,2 m katlar, ~3 m gözler, her duvar kenarına ortalanmış ----
  float seed = floor(vWf.y * 10.0 + 0.5) / 10.0, u = vUv2.x, v = vUv2.y, wh = vWb.x, el = vWb.y, st = vWb.w;
  bool bal = mod(st, 2.0) >= 1.0, shop = mod(floor(st / 4.0), 2.0) >= 1.0, res = st >= 8.0;
  float fh = 3.2 * (0.95 + 0.1 * h1(seed * 17.0));
  float bw0 = (res ? 2.8 : 3.0) * (0.9 + 0.2 * h1(seed * 29.0));
  float nb = max(1.0, floor(el / bw0 + 0.3)), bw = el / nb;
  float px = max(length(vec2(dFdx(u), dFdy(u))), length(vec2(dFdx(v), dFdy(v)))); // piksel başına metre
  float ex = px / bw * 0.75, ey = px / fh * 0.75;
  float f = floor(v / fh), fy = fract(v / fh), bx = fract(u / bw), bi = floor(u / bw);
  float ww = res ? (h1(seed * 43.0) < 0.4 ? 0.58 + 0.08 * h1(seed * 41.0) : 0.40 + 0.06 * h1(seed * 41.0)) : 0.36 + 0.16 * h1(seed * 41.0);
  float wy0 = 0.26, wy1 = res ? 0.86 : 0.74 + 0.1 * h1(seed * 53.0);
  float wfrac = ww * (wy1 - wy0);
  vec3 avg = col * (1.0 - 0.55 * wfrac - (bal ? 0.12 : 0.0));
  float fade = smoothstep(0.38, 1.1, px);
  col *= 0.84 + 0.16 * smoothstep(0.0, 2.0, v);                          // dipte hafif gölge
  if (wh < 4.0 || bw < 1.6) return col;
  vec3 c = col;
  bool under = (f + 1.0) * fh < wh - 0.35;                               // kat saçağın altına sığıyor
  if (f >= 1.0 && under) {
    if (fy < 0.05) c *= 0.80;                                            // kat silmesi
    else if (fy < 0.09) c = mix(c, vec3(0.80, 0.78, 0.74), 0.35);
    float fw = res ? 0.07 : 0.05;
    float frame = boxm(bx, 0.5 - ww / 2.0 - fw, 0.5 + ww / 2.0 + fw, ex) * boxm(fy, wy0 - fw, wy1 + fw * 0.7, ey);
    float glass = boxm(bx, 0.5 - ww / 2.0, 0.5 + ww / 2.0, ex) * boxm(fy, wy0, wy1, ey);
    float sill = boxm(bx, 0.5 - ww / 2.0 - 0.09, 0.5 + ww / 2.0 + 0.09, ex) * boxm(fy, wy0 - 0.075, wy0 - 0.03, ey);
    float k = h1(bi * 7.1 + f * 3.7 + seed);
    vec3 gl = mix(vec3(0.045, 0.055, 0.07), vec3(0.16, 0.18, 0.22), smoothstep(wy0, wy1, fy) * 0.7) * (0.75 + 0.5 * k);
    c = mix(c, res ? vec3(0.86, 0.86, 0.84) : vec3(0.78, 0.76, 0.72), max(frame - glass, sill) * 0.85);
    c = mix(c, gl, glass);
    float mullion = boxm(bx, 0.5 - 0.012, 0.5 + 0.012, ex) * glass * (1.0 - smoothstep(0.02, 0.06, px));
    c = mix(c, vec3(0.8, 0.79, 0.76), mullion * 0.8);                    // orta kayıt (yalnız yakında)
    if (uNight > 0.01) {                                                 // gece: pencerelerin ~%40'ı ışıklı; çoğu sıcak sarı, birkaçı soğuk (televizyon)
      float lk = h1(bi * 3.1 + f * 9.7 + seed * 2.0);
      if (lk < 0.42) { vec3 wc = lk < 0.045 ? vec3(0.5, 0.68, 1.0) : mix(vec3(1.0, 0.5, 0.18), vec3(1.0, 0.8, 0.52), h1(lk * 91.0)); gEmis += wc * (0.6 + 0.9 * h1(lk * 37.0)) * glass * uNight * (1.0 - fade * 0.55); }
    }
    if (res && h1(bi * 5.3 + f * 1.9 + seed * 3.0) < 0.12) {             // bazı pencerelerde çizgili güneşlik
      float aw = boxm(bx, 0.5 - ww / 2.0 - 0.06, 0.5 + ww / 2.0 + 0.06, ex) * boxm(fy, wy1 - 0.2, wy1 + 0.04, ey);
      float stp = step(0.5, fract(u * 2.5));
      c = mix(c, mix(vec3(0.75, 0.73, 0.68), vec3(0.42, 0.40, 0.36), stp), aw);
    }
    if (bal && (h1(seed * 71.0) < 0.5 || mod(bi, 2.0) == 0.0)) {         // balkon (uzakta): koyu korkuluk bandı + döşeme kenarı
      float bwid = res ? 0.86 : 0.7;
      float rail = boxm(bx, 0.5 - bwid / 2.0, 0.5 + bwid / 2.0, ex) * boxm(fy, 0.07, 0.36, ey);
      c = mix(c, vec3(0.035, 0.035, 0.04), rail * 0.85);
      c = mix(c, vec3(0.70, 0.69, 0.66), boxm(bx, 0.5 - bwid / 2.0 - 0.02, 0.5 + bwid / 2.0 + 0.02, ex) * boxm(fy, 0.0, 0.07, ey) * 0.7);
    }
  } else if (f < 1.0 && wh >= 6.0) {                                      // zemin kat: vitrin ya da kapılı koyu kaide
    if (shop) {
      c *= 0.62;
      float g = boxm(bx, 0.07, 0.93, ex) * boxm(fy, 0.04, 0.70, ey);
      c = mix(c, vec3(0.05, 0.06, 0.07) * (0.8 + 0.6 * h1(bi + seed)), g);
      gEmis += vec3(1.0, 0.62, 0.3) * 0.7 * g * uNight;
      vec3 sign = mix(vec3(0.12, 0.10, 0.09), vec3(0.45, 0.20, 0.12), h1(seed * 83.0 + bi));
      c = mix(c, sign, boxm(bx, 0.04, 0.96, ex) * boxm(fy, 0.75, 0.88, ey));
    } else {
      c *= 0.88;
      bool door = h1(bi * 3.3 + seed * 5.0) < 0.3;
      float g = door ? boxm(bx, 0.36, 0.64, ex) * boxm(fy, 0.0, 0.70, ey) : boxm(bx, 0.5 - ww / 2.0, 0.5 + ww / 2.0, ex) * boxm(fy, 0.32, 0.70, ey);
      c = mix(c, door ? vec3(0.09, 0.06, 0.045) : vec3(0.06, 0.07, 0.09), g);
    }
  }
  if (wh >= 5.0) {                                                        // saçak: açık bant, altında gölge çizgisi
    c = mix(c, col * 1.12, boxm(v, wh - 0.5, wh + 2.0, px * 0.75));
    c = mix(c, col * 0.62, boxm(v, wh - 0.68, wh - 0.5, px * 0.75));
  }
  if (fade > 0.0) gEmis += vec3(1.0, 0.6, 0.27) * 0.42 * wfrac * uNight * fade; // uzakta: ortalama yumuşak ışıltı
  return mix(c, avg, fade);
}`;

export function facadeMaterial(): THREE.MeshLambertMaterial {
  const m = new THREE.MeshLambertMaterial({ vertexColors: true });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, facadeUniforms);
    // katman, tohum ve cephe verisi üçgen başına sabit: 'flat' ile aktarılır (aradeğerleme gürültüsü pencereleri benekli yapıyordu)
    sh.vertexShader = 'attribute vec4 wa;\nattribute vec4 wb;\nvarying vec2 vUv2;\nflat out vec2 vWf;\nflat out vec4 vWb;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvUv2 = wa.xy; vWf = wa.zw; vWb = wb;');
    sh.fragmentShader = 'precision highp sampler2DArray;\nuniform sampler2DArray tArr;\nuniform vec3 uMean[11];\nuniform float uHue[11];\nuniform float uNight;\nuniform float uWet;\nuniform float uTex;\nvarying vec2 vUv2;\nflat in vec2 vWf;\nflat in vec4 vWb;\n' + FACADE_GLSL + '\n' +
      sh.fragmentShader
        .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb = facade(diffuseColor.rgb) * (1.0 - uWet * 0.2);')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += gEmis;');
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
  constructor(buf: ArrayBuffer, index: number[][], look: { oldZ: number; sa: number[]; gk: number[] }, readonly CH: number) {
    this.chunks = index.map((r, ci) => ({ ci, cx: (r[0] + 0.5) * CH, cz: (r[1] + 0.5) * CH }));
    this.w = new BWorker();
    this.w.postMessage({ type: 'init', buf, index, look });
    this.w.onmessage = (e) => this.done(e.data);
    this.group.name = 'buildings';
  }
  private done(d: { id: number; chunk: number; lod: number; pos: Float32Array; nor: Float32Array; col: Float32Array; wa: Float32Array; wb: Float32Array; seg: Float32Array }) {
    this.inflight--;
    const s = this.slots.get(d.chunk); if (!s || s.pending !== d.id) return;
    s.pending = undefined;
    if (s.mesh) { this.group.remove(s.mesh); s.mesh.geometry.dispose(); }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(d.pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(d.nor, 3));
    g.setAttribute('color', new THREE.BufferAttribute(d.col, 3));
    g.setAttribute('wa', new THREE.BufferAttribute(d.wa, 4)); g.setAttribute('wb', new THREE.BufferAttribute(d.wb, 4));
    g.computeBoundingSphere();
    const m = new THREE.Mesh(g, this.mat); m.matrixAutoUpdate = false; m.castShadow = d.lod < 2; m.receiveShadow = true;
    this.group.add(m); s.mesh = m; s.lod = d.lod;
    if (d.lod < 2) { this.colliders.set(d.chunk, d.seg); this.onCollidersChanged?.(); }
  }
  /** yakın / uzak yarıçapına göre parçaları iste */
  update(px: number, pz: number, near: number, far: number, detail = 0) {
    const want: [number, number, number][] = [];
    for (const c of this.chunks) {
      const d = Math.max(0, Math.hypot(c.cx - px, c.cz - pz) - this.CH * 0.71);
      if (d < far) want.push([c.ci, d < detail ? 0 : d < near ? 1 : 2, d]);
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
      if (lod === 2 && this.colliders.delete(ci)) this.onCollidersChanged?.();
      this.w.postMessage({ type: 'build', id: s.pending, chunk: ci, lod });
    }
  }
  get busy() { return this.inflight > 0; }
}
