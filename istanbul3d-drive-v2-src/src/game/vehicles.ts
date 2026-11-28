// Trafik araçları (kodla üretilir): minibüs, otobüs, kamyonet, motokurye, tramvay vagonu.
// Hepsi tek malzemeyi paylaşır: beyaz (1,1,1) boyalı yüzeyler araç rengine boyanır, farlar ve levhalar gece ışır.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { loft, part, boxp, curve, sstep, wheelGeom, CAR, type Section } from './carmodel';
import { nightU } from '../world/night';

const PAINT = new THREE.Color(1, 1, 1), GLASS = new THREE.Color('#0d1218'), TRIM = new THREE.Color('#131416'), HEAD = new THREE.Color('#fff1c8'), TAIL = new THREE.Color('#c8160c'), AMBER = new THREE.Color('#ffa726');
const ROOF = new THREE.Color('#dfdfda'), CREAM = new THREE.Color('#ebe9e2');
const same = (r: number, g: number, b: number, c: THREE.Color) => Math.abs(r - c.r) < 0.004 && Math.abs(g - c.g) < 0.004 && Math.abs(b - c.b) < 0.004;

/** parçaları birleştirir; aFx = (boyanır mı, ışır mı) köşe özniteliğini renklerden çıkarır */
export function finish(parts: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const g = mergeGeometries(parts.map((q) => { const o = q.index ? q.toNonIndexed() : q; o.deleteAttribute('uv'); return o; }))!;
  const c = g.attributes.color, n = c.count, fx = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) { const r = c.getX(i), gg = c.getY(i), b = c.getZ(i); fx[2 * i] = same(r, gg, b, PAINT) ? 1 : 0; fx[2 * i + 1] = same(r, gg, b, HEAD) || same(r, gg, b, TAIL) || same(r, gg, b, AMBER) ? 1 : 0; }
  g.setAttribute('aFx', new THREE.BufferAttribute(fx, 2)); return g;
}
/** malzemeye "yalnız boyalı yüzeyleri renklendir, farları ışıt" davranışı ekler (Lambert ve Standard ile çalışır) */
export function fxPatch<T extends THREE.Material>(m: T): T {
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uNight = nightU;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute vec2 aFx; varying float vGlow;')
      .replace('#include <color_vertex>', 'vColor = color;\n#ifdef USE_INSTANCING_COLOR\n vColor *= mix(vec3(1.0), instanceColor.xyz, aFx.x);\n#endif\n vGlow = aFx.y;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vGlow; uniform float uNight;')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * vGlow * (0.5 + 1.8 * uNight);');
  };
  return m;
}
export const fleetMaterial = () => fxPatch(new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.3, roughness: 0.42, envMapIntensity: 0.8 }));

const wheels = (zs: number[], xw: number, r: number) => zs.flatMap((z) => (xw ? [-xw, xw] : [0]).map((x) => { const k = r / CAR.wheelR; return wheelGeom(0).scale(xw ? k : k * 0.6, k, k).translate(x, r, z); }));
const lamps = (x: number, yh: number, yt: number, zf: number, zr: number) => [-1, 1].flatMap((s) => [boxp(0.3, 0.13, 0.05, s * x, yh, zf, HEAD), boxp(0.13, 0.26, 0.05, s * (x + 0.08), yt, zr, TAIL)]);
/** kutu gibi gövde: yan cam bandı (direkli), üstü ayrı renk */
function shell(L: number, w: number, y0: number, top: number[][], ns: number, n: number, band: [number, number], colors: { low?: THREE.Color; roof?: THREE.Color; stripe?: [number, number, THREE.Color]; glassFrom?: number; glassTo?: number; every?: number }, endTaper = 0.08, z0 = -L, z1 = L) {
  const secs: Section[] = [];
  for (let i = 0; i < ns; i++) { const z = z0 + (z1 - z0) * i / (ns - 1), e = Math.abs(z - (z0 + z1) / 2) / ((z1 - z0) / 2); secs.push({ z, w: w * (1 - endTaper * sstep(0.86, 1, e)), y0, y1: curve(top, z), n, taper: 0.04 }); }
  const dz = (z1 - z0) / (ns - 1), gf = colors.glassFrom ?? z0 + dz, gt = colors.glassTo ?? z1 - dz, ev = colors.every ?? 3;
  return loft(secs, 16, (z, _t, y) => {
    if (y < y0 + 0.16) return TRIM;
    if (colors.roof && y > band[1] + 0.3) return colors.roof;
    if (y > band[0] && y < band[1] && z > gf && z < gt) return Math.floor((z - z0) / dz + 0.01) % ev === 0 ? (colors.low ?? PAINT) : GLASS;
    if (colors.stripe && y > colors.stripe[0] && y < colors.stripe[1]) return colors.stripe[2];
    return colors.low ?? PAINT;
  }, false);
}

/** minibüs / dolmuş / panelvan (5,2 m) */
export function vanGeom() {
  const parts = [shell(2.6, 0.95, 0.36, [[-2.6, 1.98], [-2.45, 2.1], [1.2, 2.1], [1.8, 1.72], [2.25, 1.14], [2.6, 0.98]], 16, 6, [1.24, 1.8], { glassFrom: -2.2, glassTo: 2.0, every: 4 })];
  parts.push(boxp(1.72, 1.5, 0.04, 0, 1.25, -2.58, PAINT), boxp(1.5, 0.5, 0.04, 0, 1.55, -2.6, GLASS), boxp(1.6, 0.5, 0.04, 0, 0.66, 2.585, PAINT), boxp(1.7, 0.16, 0.1, 0, 0.44, 2.6, TRIM), boxp(1.7, 0.16, 0.1, 0, 0.44, -2.6, TRIM));
  parts.push(...lamps(0.62, 0.84, 1.0, 2.61, -2.61), ...wheels([1.62, -1.62], 0.84, 0.36));
  return finish(parts);
}
/** belediye otobüsü (11,5 m) */
export function busGeom() {
  const L = 5.75, parts = [shell(L, 1.26, 0.42, [[-L, 3.05], [L, 3.05]], 24, 10, [1.45, 2.5], { roof: ROOF, every: 3 }, 0.02)];
  for (const s of [-1, 1]) parts.push(boxp(2.44, 1.05, 0.05, 0, 0.98, s * L, PAINT), boxp(2.36, 1.1, 0.05, 0, 2.05, s * (L + 0.005), GLASS), boxp(2.44, 0.42, 0.05, 0, 2.82, s * L, ROOF));
  parts.push(boxp(1.5, 0.26, 0.04, 0, 2.8, L + 0.04, AMBER), boxp(2.5, 0.2, 0.12, 0, 0.5, L, TRIM), boxp(2.5, 0.2, 0.12, 0, 0.5, -L, TRIM));
  for (const z of [3.3, -0.4]) parts.push(boxp(0.03, 1.9, 1.2, 1.262, 1.42, z, TRIM)); // kapılar (sağ yan)
  parts.push(...lamps(0.9, 0.82, 1.05, L + 0.04, -L - 0.04), ...wheels([3.7, -3.3], 1.06, 0.5));
  return finish(parts);
}
/** kamyonet: kabin + açık kasa + branda (5,6 m) */
export function truckGeom() {
  const TARP = new THREE.Color('#4f6f86'), parts = [shell(0, 0.95, 0.4, [[0.75, 1.98], [0.9, 2.08], [1.75, 2.08], [2.2, 1.55], [2.55, 1.2], [2.75, 1.02]], 9, 6, [1.3, 1.82], { glassFrom: 0.9, glassTo: 2.3, every: 9 }, 0.06, 0.75, 2.75)];
  parts.push(boxp(1.78, 1.5, 0.04, 0, 1.3, 0.76, PAINT), boxp(1.6, 0.46, 0.04, 0, 0.66, 2.74, PAINT), boxp(1.7, 0.16, 0.1, 0, 0.44, 2.75, TRIM));
  parts.push(boxp(1.5, 0.22, 3.6, 0, 0.6, -1.0, TRIM), boxp(1.92, 0.08, 3.5, 0, 0.78, -1.0, TRIM)); // şasi, kasa tabanı
  for (const s of [-1, 1]) parts.push(boxp(0.06, 0.42, 3.5, s * 0.95, 1.03, -1.0, PAINT));
  parts.push(boxp(1.92, 0.42, 0.06, 0, 1.03, -2.74, PAINT), boxp(1.92, 0.6, 0.06, 0, 1.12, 0.72, PAINT));
  parts.push(boxp(1.74, 0.62, 2.9, 0, 1.22, -1.15, TARP), boxp(1.5, 0.2, 2.7, 0, 1.62, -1.15, TARP)); // brandalı yük
  parts.push(...lamps(0.62, 0.84, 0.92, 2.76, -2.78), ...wheels([1.8, -1.75], 0.84, 0.38));
  return finish(parts);
}
/** motokurye: skuter, sürücü, arkada teslimat kutusu (kutu ve kask boyanır) */
export function motoGeom() {
  const JACKET = new THREE.Color('#2d3036'), JEANS = new THREE.Color('#2b3550'), SKIN = new THREE.Color('#d8a784');
  const ball = (r: number, x: number, y: number, z: number, c: THREE.Color) => part(new THREE.SphereGeometry(r, 8, 6).translate(x, y, z), c);
  const parts = [...wheels([0.62, -0.62], 0, 0.24)];
  parts.push(boxp(0.26, 0.2, 1.0, 0, 0.42, -0.02, TRIM), boxp(0.34, 0.5, 0.07, 0, 0.66, 0.46, CREAM), boxp(0.3, 0.3, 0.6, 0, 0.5, -0.4, CREAM), boxp(0.3, 0.07, 0.62, 0, 0.7, -0.28, TRIM));
  parts.push(boxp(0.6, 0.035, 0.035, 0, 1.0, 0.44, TRIM), boxp(0.05, 0.36, 0.05, 0, 0.84, 0.46, TRIM), boxp(0.14, 0.1, 0.05, 0, 0.9, 0.52, HEAD), boxp(0.12, 0.06, 0.04, 0, 0.62, -0.72, TAIL));
  parts.push(boxp(0.46, 0.42, 0.42, 0, 0.98, -0.66, PAINT)); // teslimat kutusu
  parts.push(boxp(0.34, 0.16, 0.46, 0, 0.8, -0.02, JEANS), boxp(0.12, 0.4, 0.14, -0.17, 0.56, 0.16, JEANS), boxp(0.12, 0.4, 0.14, 0.17, 0.56, 0.16, JEANS)); // bacaklar
  parts.push(part(new THREE.BoxGeometry(0.38, 0.54, 0.22).rotateX(0.22).translate(0, 1.13, -0.08), JACKET));
  for (const s of [-1, 1]) parts.push(part(new THREE.BoxGeometry(0.1, 0.1, 0.5).rotateX(0.35).translate(s * 0.24, 1.15, 0.2), JACKET), ball(0.05, s * 0.27, 1.03, 0.43, SKIN));
  parts.push(ball(0.135, 0, 1.56, 0.02, PAINT), boxp(0.2, 0.07, 0.03, 0, 1.56, 0.14, GLASS));
  return finish(parts);
}
/** tramvay vagonu (9,4 m): beyaz gövde, kırmızı şerit, koyu cam bandı; uçlar daralır */
export function tramCarGeom() {
  const L = 4.7, RED = new THREE.Color('#c23a2c'), GREY = new THREE.Color('#8f959c');
  const parts = [shell(L, 1.22, 0.32, [[-L, 3.1], [-L + 0.5, 3.3], [L - 0.5, 3.3], [L, 3.1]], 20, 9, [1.4, 2.6], { low: CREAM, roof: GREY, stripe: [1.02, 1.4, RED], every: 4 }, 0.16)];
  for (const s of [-1, 1]) parts.push(boxp(2.0, 2.7, 0.05, 0, 1.7, s * (L - 0.01), GLASS), boxp(2.05, 0.5, 0.06, 0, 0.6, s * L, CREAM), boxp(0.3, 0.12, 0.05, -0.7, 0.86, s * (L + 0.03), s > 0 ? HEAD : TAIL), boxp(0.3, 0.12, 0.05, 0.7, 0.86, s * (L + 0.03), s > 0 ? HEAD : TAIL));
  parts.push(boxp(1.6, 0.25, 2.2, 0, 3.4, 0, GREY)); // çatı donanımı
  return finish(parts);
}
