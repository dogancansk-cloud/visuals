// Karakterler ve kartlar: CTR tarzı çizgi film — büyük kafa, iri gözler, yuvarlak hatlar, canlı renkler.
// Tamamen ilkel şekillerden. Model +x yönüne bakar.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export interface CharDef { id: string; name: string; color: number; accent: number; blurb: string; stats: [number, number, number] }
export const CHARS: CharDef[] = [
  { id: 'marti', name: 'Martı', color: 0x1e9bff, accent: 0xffc21a, blurb: 'Simit kapmada usta', stats: [3, 4, 4] },
  { id: 'kedi', name: 'Sokak Kedisi', color: 0xf0304a, accent: 0xfff2d9, blurb: 'Dar sokakların kralı', stats: [3, 3, 5] },
  { id: 'simitci', name: 'Simitçi', color: 0xffc61a, accent: 0xe0352f, blurb: 'Tablası hiç düşmez', stats: [4, 4, 3] },
  { id: 'kaptan', name: 'Vapur Kaptanı', color: 0x2748c8, accent: 0xffffff, blurb: 'Boğaz’ın eski kurdu', stats: [5, 3, 3] },
  { id: 'balikci', name: 'Balıkçı', color: 0x0fb9a3, accent: 0xffd21a, blurb: 'Oltası hep hazır', stats: [4, 3, 4] },
  { id: 'tekir', name: 'Tekir', color: 0x74d62c, accent: 0x2b2833, blurb: 'Sessiz ve hızlı', stats: [2, 5, 4] },
  { id: 'guvercin', name: 'Güvercin', color: 0x9a5cf0, accent: 0x34d6b0, blurb: 'Her meydanda tanıdığı var', stats: [2, 4, 5] },
  { id: 'kopek', name: 'Sokak Köpeği', color: 0xff8a1f, accent: 0x3b2f8f, blurb: 'Mahallenin bekçisi', stats: [5, 2, 4] },
];

let grad: THREE.Texture | null = null;
function gradient() {
  if (grad) return grad;
  const d = new Uint8Array([105, 175, 232, 255]);
  const t = new THREE.DataTexture(d, 4, 1, THREE.RedFormat); t.minFilter = t.magFilter = THREE.NearestFilter; t.needsUpdate = true;
  return (grad = t);
}
function rim(m: THREE.MeshToonMaterial) {
  m.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <opaque_fragment>', `
      float rimK = pow(1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0), 2.6);
      outgoingLight += (diffuseColor.rgb * 0.55 + 0.12) * rimK * 0.75;
      #include <opaque_fragment>`);
  };
}
let vcMat: THREE.MeshToonMaterial | null = null;
/** köşe renkli ortak malzeme: birleştirilmiş kart parçaları tek çizimde basılır */
function toonVC() { if (!vcMat) { vcMat = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: gradient() }); rim(vcMat); } return vcMat; }
/** hareketli parça: birleştirmede ayrı tutulur */
const D = <T extends THREE.Object3D>(o: T) => { o.userData.dyn = true; return o; };
/** kökün altındaki sabit parçaları tek ağda birleştirir (hareketli alt ağaçlar kendi içinde birleşir) */
function bake(root: THREE.Object3D) {
  root.updateMatrixWorld(true);
  const inv = root.matrixWorld.clone().invert(), geos: THREE.BufferGeometry[] = [], gone: THREE.Object3D[] = [], m4 = new THREE.Matrix4();
  const walk = (o: THREE.Object3D) => {
    for (const c of [...o.children]) {
      if (c.userData.dyn) { bake(c); continue; }
      const me = c as THREE.Mesh;
      if (me.isMesh) {
        const g0 = me.geometry.index ? me.geometry.toNonIndexed() : me.geometry.clone(); g0.deleteAttribute('uv');
        g0.applyMatrix4(m4.multiplyMatrices(inv, me.matrixWorld));
        const col = (me.material as THREE.MeshToonMaterial).color, n = g0.attributes.position.count, a = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) { a[i * 3] = col.r; a[i * 3 + 1] = col.g; a[i * 3 + 2] = col.b; }
        g0.setAttribute('color', new THREE.BufferAttribute(a, 3)); geos.push(g0); gone.push(me);
      } else walk(c);
    }
  };
  walk(root);
  for (const o of gone) o.parent!.remove(o);
  if (geos.length) { const m = new THREE.Mesh(mergeGeometries(geos), toonVC()); m.castShadow = true; root.add(m); }
}
const matCache = new Map<number, THREE.MeshToonMaterial>();
/** çizgi film malzemesi: kademeli gölge + kenar ışığı (siluet parlar) */
export function toon(c: number) {
  let m = matCache.get(c);
  if (!m) {
    m = new THREE.MeshToonMaterial({ color: c, gradientMap: gradient() }); rim(m);
    matCache.set(c, m);
  }
  return m;
}

export type Anim = (t: number, v: number, steer: number) => void;
export interface KartModel { root: THREE.Group; body: THREE.Group; wheels: THREE.Object3D[]; front: THREE.Object3D[]; driver: THREE.Group; exhaust: THREE.Vector3[]; anim: Anim[] }

function add(p: THREE.Object3D, g: THREE.BufferGeometry, c: number, x = 0, y = 0, z = 0, shadow = true) {
  const m = new THREE.Mesh(g, toon(c)); m.position.set(x, y, z); m.castShadow = shadow; p.add(m); return m;
}
const S = (r: number, w = 14, h = 10) => new THREE.SphereGeometry(r, w, h);
const B = (x: number, y: number, z: number) => new THREE.BoxGeometry(x, y, z);
const RB = (x: number, y: number, z: number, r = 0.08) => new RoundedBoxGeometry(x, y, z, 2, Math.min(r, x / 2, y / 2, z / 2));
const C = (r1: number, r2: number, h: number, s = 16) => new THREE.CylinderGeometry(r1, r2, h, s);
const CAP = (r: number, l: number) => new THREE.CapsuleGeometry(r, l, 5, 12);
const CONE = (r: number, h: number, s = 12) => new THREE.ConeGeometry(r, h, s);
const UP = new THREE.Vector3(0, 1, 0);
/** iki nokta arasında kapsül (kol, bacak, boru) */
function limb(p: THREE.Object3D, c: number, a: [number, number, number], b: [number, number, number], r: number) {
  const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b), d = vb.clone().sub(va), L = d.length();
  const m = add(p, CAP(r, L), c); m.position.copy(va).addScaledVector(d, 0.5); m.quaternion.setFromUnitVectors(UP, d.normalize()); return m;
}
/** +x'e bakan gülümseme yayı */
function smile(p: THREE.Object3D, c: number, x: number, y: number, r: number, arc = 2.0, tube = 0.022) {
  const g = new THREE.TorusGeometry(r, tube, 6, 14, arc); g.rotateZ(-Math.PI / 2 - arc / 2); g.rotateY(Math.PI / 2);
  return add(p, g, c, x, y, 0, false);
}

const DARK = 0x2b2833, WHITE = 0xfffaf2, CHROME = 0xcfd3de, TYRE = 0x2a2731;

function wheel(r: number, w: number, hub: number) {
  const g = new THREE.Group();
  const pts = [[r * 0.5, -w], [r * 0.88, -w], [r, -w * 0.62], [r, w * 0.62], [r * 0.88, w], [r * 0.5, w]].map(([a, b]) => new THREE.Vector2(a, b));
  const tg = new THREE.LatheGeometry(pts, 18); tg.rotateX(Math.PI / 2);
  add(g, tg, TYRE);
  const h = add(g, C(r * 0.56, r * 0.56, w * 2.06, 14), hub, 0, 0, 0, false); h.rotation.x = Math.PI / 2;
  for (const sd of [-1, 1]) {
    add(g, RB(r * 0.9, r * 0.2, 0.03, 0.02), WHITE, 0, 0, sd * (w * 1.04), false);
    add(g, RB(r * 0.2, r * 0.9, 0.03, 0.02), WHITE, 0, 0, sd * (w * 1.04), false);
    const cap = add(g, S(r * 0.17, 8, 6), CHROME, 0, 0, sd * (w * 1.05), false); cap.scale.z = 0.5;
  }
  return g;
}

export function buildKart(def: CharDef): KartModel {
  const root = new THREE.Group(), body = D(new THREE.Group()); root.add(body);
  const col = def.color, acc = def.accent;
  // --- gövde: yuvarlak hatlı, önü alçalan şasi ---
  add(body, RB(2.0, 0.3, 1.16, 0.13), col, -0.05, 0.44, 0);
  const nose = add(body, S(0.6, 18, 12), col, 1.0, 0.47, 0); nose.scale.set(1.25, 0.42, 0.86);
  const stripe = add(body, S(0.6, 16, 10), acc, 1.0, 0.47, 0, false); stripe.scale.set(1.27, 0.445, 0.24);
  const bump = add(body, CAP(0.11, 1.3), WHITE, 1.62, 0.34, 0); bump.rotation.x = Math.PI / 2;
  for (const sd of [-1, 1]) add(body, S(0.085, 10, 8), 0xfff2a8, 1.6, 0.47, sd * 0.36, false).scale.set(0.6, 1, 1.2); // farlar
  // yan dubalar
  for (const sd of [-1, 1]) {
    const pod = add(body, CAP(0.19, 0.95), acc, -0.08, 0.5, sd * 0.7); pod.rotation.z = Math.PI / 2;
    const fl = add(body, RB(0.7, 0.06, 0.1, 0.03), col, -0.05, 0.62, sd * 0.78, false); void fl;
  }
  // koltuk
  const seat = add(body, RB(0.3, 0.72, 0.84, 0.13), DARK, -0.72, 0.9, 0); seat.rotation.z = 0.2;
  add(body, RB(0.7, 0.14, 0.8, 0.06), DARK, -0.32, 0.62, 0, false);
  // motor ve egzozlar
  add(body, RB(0.56, 0.44, 0.86, 0.1), 0x4a4656, -1.02, 0.66, 0);
  add(body, RB(0.3, 0.14, 0.5, 0.05), CHROME, -1.02, 0.93, 0, false);
  for (const sd of [-1, 1]) {
    limb(body, CHROME, [-1.0, 0.72, sd * 0.36], [-1.42, 0.95, sd * 0.4], 0.075);
    const tip = add(body, C(0.1, 0.085, 0.16, 12), DARK, -1.46, 0.97, sd * 0.4, false); tip.rotation.z = Math.PI / 2 + 0.5;
  }
  // arka kanat
  for (const sd of [-1, 1]) add(body, RB(0.1, 0.42, 0.08, 0.03), DARK, -1.2, 1.1, sd * 0.42);
  const wing = add(body, RB(0.36, 0.08, 1.36, 0.04), acc, -1.24, 1.32, 0); wing.rotation.z = -0.14;
  for (const sd of [-1, 1]) add(body, RB(0.42, 0.26, 0.06, 0.03), col, -1.24, 1.34, sd * 0.69);
  // direksiyon
  limb(body, DARK, [0.7, 0.62, 0], [0.46, 0.96, 0], 0.035);
  const sw = add(body, new THREE.TorusGeometry(0.2, 0.045, 8, 18), DARK, 0.44, 0.98, 0); sw.rotation.y = Math.PI / 2; sw.rotation.z = -0.55;
  // numara plakası
  add(body, C(0.19, 0.19, 0.03, 18), WHITE, 1.02, 0.728, 0, false);
  // tekerler
  const wheels: THREE.Object3D[] = [], front: THREE.Object3D[] = [];
  for (const [x, z, r, w] of [[0.82, 0.76, 0.31, 0.15], [0.82, -0.76, 0.31, 0.15], [-0.74, 0.8, 0.39, 0.2], [-0.74, -0.8, 0.39, 0.2]] as const) {
    const pivot = D(new THREE.Group()); pivot.position.set(x, r, z); root.add(pivot);
    const spin = D(wheel(r, w, acc === 0xffffff || acc === 0xfff2d9 ? col : acc)); pivot.add(spin);
    wheels.push(spin); if (x > 0) front.push(pivot);
  }
  const driver = D(new THREE.Group()); driver.position.set(-0.3, 0.9, 0); body.add(driver);
  const anim: Anim[] = [];
  DRIVERS[def.id](driver, anim);
  bake(root);
  return { root, body, wheels, front, driver, exhaust: [new THREE.Vector3(-1.56, 1.0, 0.4), new THREE.Vector3(-1.56, 1.0, -0.4)], anim };
}

// ---------------------------------------------------------------- yüz parçaları
interface EyeOpt { r?: number; iris?: number; slit?: boolean; lid?: number; lidDrop?: number; brow?: number; tilt?: number; az?: number; el?: number; look?: number }
/** iri çizgi film gözleri: ak, iris, bebek, parıltı, isteğe bağlı kapak ve kaş. R: kafa yarıçapı */
function eyes(h: THREE.Object3D, R: number, o: EyeOpt = {}) {
  const r = o.r ?? 0.13, az = o.az ?? 0.44, el = o.el ?? 0.16;
  const out: THREE.Object3D[] = [];
  for (const sd of [-1, 1]) {
    const dx = Math.cos(el) * Math.cos(az), dy = Math.sin(el), dz = Math.cos(el) * Math.sin(az) * sd;
    const g = new THREE.Group(); g.position.set(dx * R * 0.88, dy * R * 0.88, dz * R * 0.88); g.rotation.y = -sd * az * 0.75; h.add(g);
    add(g, S(r, 14, 12), 0xffffff, 0, 0, 0, false).scale.set(0.62, 1.16, 1);
    const lk = -sd * (o.look ?? 0.12) * r; // hafif şaşı değil, içe bakış
    if (o.iris !== undefined) add(g, S(r * 0.66, 12, 10), o.iris, r * 0.34, -r * 0.05, lk, false).scale.set(0.5, 1.1, 1);
    const pu = add(g, S(r * 0.42, 10, 8), 0x191622, r * (o.iris !== undefined ? 0.52 : 0.42), -r * 0.05, lk, false); pu.scale.set(0.5, o.slit ? 1.5 : 1.1, o.slit ? 0.45 : 1);
    add(g, S(r * 0.15, 6, 6), 0xffffff, r * 0.66, r * 0.26, lk + sd * r * 0.16, false);
    if (o.lid !== undefined) {
      const lg = new THREE.SphereGeometry(r * 1.07, 14, 8, 0, Math.PI * 2, 0, (o.lidDrop ?? 0.4) * Math.PI);
      add(g, lg, o.lid, 0, 0, 0, false).scale.set(0.68, 1.16, 1.02);
    }
    if (o.brow !== undefined) {
      const b = add(g, RB(0.07, 0.055, r * 1.7, 0.025), o.brow, r * 0.3, r * 1.36, 0, false); b.rotation.x = -sd * (o.tilt ?? 0.3);
    }
    out.push(g);
  }
  return out;
}
const SKIN = 0xf6c9a4, SKIN2 = 0xe7a67e;

/** insan gövdesi: kısa gövde, direksiyona uzanan kollar */
function humanBody(p: THREE.Object3D, shirt: number, sleeve: number, hand = SKIN) {
  add(p, S(0.31, 16, 12), shirt, 0, 0.14, 0).scale.set(0.86, 1.02, 1.08);
  for (const sd of [-1, 1]) {
    limb(p, sleeve, [0.04, 0.32, sd * 0.3], [0.36, 0.16, sd * 0.3], 0.085);
    limb(p, sleeve, [0.36, 0.16, sd * 0.3], [0.66, 0.12, sd * 0.2], 0.075);
    add(p, S(0.105, 10, 8), hand, 0.7, 0.11, sd * 0.19);
    limb(p, DARK, [0.1, -0.1, sd * 0.16], [0.62, -0.2, sd * 0.2], 0.1); // bacaklar
  }
}
function humanHead(p: THREE.Object3D, R = 0.42) {
  const h = D(new THREE.Group()); h.position.set(0.1, 0.76, 0); p.add(h);
  add(h, S(R, 20, 16), SKIN).scale.set(0.96, 0.98, 1.04);
  for (const sd of [-1, 1]) add(h, S(0.1, 10, 8), SKIN, -0.02, -0.02, sd * R * 1.0).scale.set(0.6, 1, 0.6);
  return h;
}

// ---------------------------------------------------------------- sürücüler
const DRIVERS: Record<string, (p: THREE.Group, anim: Anim[]) => void> = {
  marti(p, anim) {
    const W = 0xffffff, G = 0xaab6c6, BK = 0x2b2833, BEAK = 0xffb300;
    add(p, S(0.32, 16, 12), W, 0, 0.13, 0).scale.set(0.95, 1.0, 1.05);
    // kanatlar direksiyonda, uçları siyah
    for (const sd of [-1, 1]) {
      const w = D(new THREE.Group()); w.position.set(0.02, 0.3, sd * 0.3); p.add(w);
      const a = add(w, S(0.2, 12, 8), G, 0.24, -0.06, sd * 0.02); a.scale.set(1.7, 0.5, 0.75); a.rotation.z = -0.35;
      const tip = add(w, S(0.12, 10, 8), BK, 0.56, -0.18, -sd * 0.06); tip.scale.set(1.5, 0.5, 0.8); tip.rotation.z = -0.3;
      anim.push((t, v) => { w.rotation.x = sd * (0.06 + Math.sin(t * 13 + sd) * 0.05 * Math.min(1, v / 20)); });
    }
    const tail = add(p, RB(0.42, 0.07, 0.34, 0.03), G, -0.42, 0.14, 0); tail.rotation.z = 0.55;
    add(p, RB(0.2, 0.07, 0.36, 0.03), BK, -0.6, 0.27, 0).rotation.z = 0.55;
    const h = D(new THREE.Group()); h.position.set(0.1, 0.76, 0); p.add(h);
    add(h, S(0.4, 20, 16), W).scale.set(1.0, 0.95, 1.02);
    // gaga: kalın, ucu kıvrık, kırmızı benekli; ağzında simit
    const up = add(h, CONE(0.15, 0.56, 14), BEAK, 0.58, -0.06, 0); up.rotation.z = -Math.PI / 2 - 0.08; up.scale.set(1, 1, 1.05);
    add(h, S(0.07, 10, 8), BEAK, 0.83, -0.12, 0).scale.set(1, 1.3, 0.8);
    const lo = add(h, CONE(0.1, 0.4, 12), 0xf09a00, 0.5, -0.17, 0); lo.rotation.z = -Math.PI / 2 - 0.3;
    add(h, S(0.045, 8, 6), 0xe5342b, 0.64, -0.21, 0, false);
    const sim = D(add(h, new THREE.TorusGeometry(0.13, 0.055, 8, 16), 0xd98a32, 0.7, -0.3, 0)); sim.rotation.y = 0.5;
    anim.push((t, v) => { sim.rotation.z = Math.sin(t * 7) * 0.25 * Math.min(1, v / 12); });
    eyes(h, 0.4, { r: 0.125, iris: 0xffe36b, brow: 0x6f7c8e, tilt: 0.45, az: 0.5, el: 0.2 });
    const tuft = add(h, CONE(0.07, 0.2, 6), W, -0.12, 0.4, 0); tuft.rotation.z = 0.7;
    anim.push((t, _v, s) => { h.rotation.y = -s * 0.3; h.rotation.z = Math.sin(t * 2.3) * 0.03; });
  },
  kedi(p, anim) { cat(p, anim, { fur: 0xff9a3c, dark: 0xd96a1a, belly: 0xfff6e8, iris: 0x5fd35a, stripes: false, extra: 'bandana' }); },
  tekir(p, anim) { cat(p, anim, { fur: 0xa7a3a0, dark: 0x5d5863, belly: 0xf1ece6, iris: 0xffd21a, stripes: true, extra: 'goggles' }); },
  simitci(p, anim) {
    humanBody(p, 0xffffff, 0xffffff);
    add(p, S(0.325, 16, 12), 0xe0352f, -0.02, 0.12, 0).scale.set(0.84, 0.96, 1.1); // kırmızı yelek
    for (let k = 0; k < 3; k++) add(p, S(0.03, 6, 6), 0xffd21a, 0.25, 0.3 - k * 0.11, 0.08, false);
    const h = humanHead(p);
    eyes(h, 0.42, { r: 0.1, brow: 0x2b2019, tilt: -0.18, az: 0.36, el: 0.14 });
    add(h, S(0.1, 12, 10), SKIN2, 0.42, -0.04, 0).scale.set(1, 0.9, 0.95); // burun
    for (const sd of [-1, 1]) { const m = add(h, CAP(0.055, 0.2), 0x2b2019, 0.38, -0.16, sd * 0.13, false); m.rotation.x = Math.PI / 2 + sd * 0.35; } // pala bıyık
    smile(h, 0x8a3b2e, 0.33, -0.2, 0.1, 1.6);
    const hair = add(h, S(0.43, 16, 10), 0x2b2019, -0.06, 0.03, 0); hair.scale.set(0.95, 0.95, 1.03);
    // başta bez simit ve tabla
    const cloth = add(h, new THREE.TorusGeometry(0.2, 0.09, 8, 16), 0xffffff, 0, 0.42, 0); cloth.rotation.x = Math.PI / 2;
    const tray = D(new THREE.Group()); tray.position.set(0, 0.52, 0); h.add(tray);
    add(tray, C(0.62, 0.58, 0.07, 24), 0xb9753a, 0, 0, 0);
    add(tray, new THREE.TorusGeometry(0.61, 0.035, 6, 24), 0x8a5326, 0, 0.04, 0).rotation.x = Math.PI / 2;
    const tg = new THREE.TorusGeometry(0.14, 0.06, 8, 14); tg.rotateX(Math.PI / 2);
    for (let k = 0; k < 7; k++) { const a = (k / 7) * Math.PI * 2; add(tray, tg, 0xe09238, Math.cos(a) * 0.38, 0.1, Math.sin(a) * 0.38); }
    for (let k = 0; k < 4; k++) { const a = (k / 4) * Math.PI * 2 + 0.4; add(tray, tg, 0xd98a32, Math.cos(a) * 0.2, 0.2, Math.sin(a) * 0.2); }
    add(tray, tg, 0xe09238, 0, 0.3, 0);
    anim.push((t, v, s) => { h.rotation.y = -s * 0.25; tray.rotation.z = s * 0.1; tray.rotation.x = Math.sin(t * 5) * 0.03 * Math.min(1, v / 15); });
  },
  kaptan(p, anim) {
    const NAVY = 0x1f3a8a, GOLD = 0xffcf33;
    humanBody(p, NAVY, NAVY, 0xffffff);
    for (const sd of [-1, 1]) { for (let k = 0; k < 2; k++) add(p, S(0.035, 6, 6), GOLD, 0.26, 0.3 - k * 0.14, sd * 0.09, false); add(p, RB(0.2, 0.06, 0.16, 0.03), GOLD, 0.02, 0.4, sd * 0.3, false); }
    for (const sd of [-1, 1]) { const st = add(p, new THREE.TorusGeometry(0.088, 0.016, 6, 12), GOLD, 0.56, 0.125, sd * 0.215, false); st.rotation.y = Math.PI / 2 - sd * 0.33; st.rotation.x = 0.1; }
    const h = humanHead(p);
    eyes(h, 0.42, { r: 0.095, brow: 0xffffff, tilt: 0.25, az: 0.36, el: 0.16 });
    add(h, S(0.1, 12, 10), 0xe9967a, 0.42, -0.02, 0);
    // gür beyaz sakal ve bıyık
    const beard = add(h, S(0.4, 16, 12), 0xffffff, 0.08, -0.2, 0); beard.scale.set(0.9, 0.82, 1.06);
    add(h, S(0.2, 12, 10), 0xffffff, 0.22, -0.4, 0).scale.set(0.9, 0.9, 0.9);
    for (const sd of [-1, 1]) { const m = add(h, CAP(0.06, 0.16), 0xffffff, 0.4, -0.15, sd * 0.12, false); m.rotation.x = Math.PI / 2 + sd * 0.4; }
    // pipo
    limb(h, 0x5a3a2a, [0.4, -0.24, 0.1], [0.62, -0.28, 0.16], 0.025);
    add(h, C(0.06, 0.045, 0.1, 10), 0x5a3a2a, 0.64, -0.24, 0.165);
    // kaptan şapkası
    const cap = new THREE.Group(); cap.position.set(-0.02, 0.3, 0); cap.rotation.z = -0.1; h.add(cap);
    add(cap, C(0.36, 0.38, 0.14, 20), NAVY, 0, 0, 0);
    add(cap, C(0.365, 0.365, 0.035, 20), GOLD, 0, 0.01, 0, false);
    add(cap, C(0.48, 0.36, 0.16, 20), 0xffffff, 0, 0.15, 0);
    add(cap, S(0.48, 20, 8), 0xffffff, 0, 0.22, 0).scale.set(1, 0.16, 1);
    const visor = add(cap, C(0.3, 0.3, 0.04, 18), 0x1a1722, 0.26, -0.06, 0); visor.scale.set(0.9, 1, 1.25); visor.rotation.z = -0.22;
    add(cap, S(0.075, 8, 8), GOLD, 0.37, 0.07, 0, false).scale.set(0.5, 1.1, 1.1);
    anim.push((_t, _v, s) => { h.rotation.y = -s * 0.25; });
  },
  balikci(p, anim) {
    const Y = 0xffd21a, Y2 = 0xf0b400;
    humanBody(p, Y, Y);
    add(p, RB(0.06, 0.5, 0.08, 0.03), Y2, 0.27, 0.14, 0, false);
    const h = humanHead(p);
    eyes(h, 0.42, { r: 0.1, brow: 0x8f8f9a, tilt: 0.1, lid: SKIN, lidDrop: 0.32, az: 0.36, el: 0.12 });
    add(h, S(0.11, 12, 10), 0xe9866a, 0.42, -0.04, 0);
    const beard = add(h, S(0.39, 16, 12), 0xa7a7b3, 0.05, -0.17, 0); beard.scale.set(0.92, 0.8, 1.05);
    smile(h, 0x5a3a36, 0.38, -0.24, 0.09, 1.7);
    // sarı yağmurluk şapkası: arkası uzun siperlik
    const hat = new THREE.Group(); hat.position.set(-0.03, 0.2, 0); hat.rotation.z = 0.08; h.add(hat);
    const dome = add(hat, new THREE.SphereGeometry(0.4, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), Y, 0, 0, 0); dome.scale.set(1, 0.85, 1.02);
    const brim = add(hat, C(0.56, 0.62, 0.05, 22), Y2, -0.1, 0.0, 0); brim.scale.set(1.15, 1, 1); brim.rotation.z = 0.12;
    add(hat, new THREE.TorusGeometry(0.39, 0.03, 6, 20), Y2, 0, 0.04, 0, false).rotation.x = Math.PI / 2;
    // olta ve ucunda balık
    const rod = new THREE.Group(); rod.position.set(-0.3, 0.1, -0.36); rod.rotation.z = 0.7; p.add(rod);
    add(rod, C(0.022, 0.04, 2.3, 6), 0x8a5a3b, 0, 1.15, 0);
    add(rod, C(0.07, 0.07, 0.1, 10), 0x4a4656, 0.05, 0.4, 0).rotation.x = Math.PI / 2;
    const dang = D(new THREE.Group()); dang.position.set(0, 2.3, 0); dang.rotation.z = -0.7; rod.add(dang);
    add(dang, C(0.007, 0.007, 0.6, 4), 0xffffff, 0, -0.3, 0, false);
    const fish = D(new THREE.Group()); fish.position.set(0, -0.68, 0); dang.add(fish);
    add(fish, S(0.13, 12, 10), 0x4fb6ff, 0, 0, 0).scale.set(0.75, 1.6, 0.6);
    add(fish, S(0.09, 8, 6), 0xdff3ff, 0.03, 0, 0, false).scale.set(0.6, 1.5, 0.55);
    add(fish, CONE(0.11, 0.18, 4), 0x2f8fe0, 0, -0.26, 0).rotation.x = Math.PI;
    add(fish, S(0.025, 6, 6), DARK, 0.06, 0.1, 0.05, false);
    anim.push((t, v, s) => { h.rotation.y = -s * 0.25; dang.rotation.z = -0.7 + Math.sin(t * 4) * 0.2 - Math.min(0.5, v / 60); dang.rotation.x = s * 0.4 + Math.sin(t * 3.1) * 0.15; fish.rotation.y = Math.sin(t * 9) * 0.5; });
  },
  guvercin(p, anim) {
    const G = 0x8fa3c4, G2 = 0x66789c, LT = 0xc3cfe2, GR = 0x23c79a, PU = 0x9a5cf0;
    add(p, S(0.33, 16, 12), LT, 0, 0.12, 0).scale.set(0.98, 0.98, 1.08); // tombul gövde
    add(p, S(0.24, 14, 10), GR, 0.05, 0.38, 0).scale.set(0.95, 0.75, 1.0); // yanardöner boyun
    add(p, S(0.25, 14, 10), PU, 0.03, 0.28, 0).scale.set(1.02, 0.6, 1.08);
    for (const sd of [-1, 1]) {
      const w = D(new THREE.Group()); w.position.set(0.0, 0.28, sd * 0.31); p.add(w);
      const a = add(w, S(0.2, 12, 8), G, 0.24, -0.06, 0); a.scale.set(1.7, 0.5, 0.78); a.rotation.z = -0.32;
      for (const k of [0, 1]) { const bar = add(w, RB(0.07, 0.05, 0.3, 0.02), G2, 0.22 + k * 0.16, 0.0 - k * 0.055, 0, false); bar.rotation.z = -0.32; }
      add(w, S(0.11, 10, 8), G2, 0.56, -0.17, -sd * 0.06).scale.set(1.4, 0.5, 0.8);
      anim.push((t, v) => { w.rotation.x = sd * (0.05 + Math.sin(t * 15 + sd * 2) * 0.06 * Math.min(1, v / 20)); });
    }
    const tail = add(p, RB(0.46, 0.07, 0.36, 0.03), G2, -0.44, 0.12, 0); tail.rotation.z = 0.45;
    const h = D(new THREE.Group()); h.position.set(0.12, 0.8, 0); p.add(h);
    add(h, S(0.36, 20, 16), G).scale.set(1, 1.02, 1);
    // kısa gaga ve beyaz burun yumrusu
    const bk = add(h, CONE(0.085, 0.3, 10), 0x4a4656, 0.46, -0.06, 0); bk.rotation.z = -Math.PI / 2 - 0.2;
    add(h, S(0.075, 10, 8), 0xffffff, 0.36, 0.02, 0).scale.set(1, 0.75, 1.3);
    // yusyuvarlak turuncu şaşkın gözler
    eyes(h, 0.36, { r: 0.135, iris: 0xff7a1a, az: 0.62, el: 0.14, look: 0.0 });
    // deri pilot başlığı ve gözlük
    const capG = new THREE.SphereGeometry(0.385, 18, 10, 0, Math.PI * 2, 0, Math.PI * 0.36);
    add(h, capG, 0x9a5a2e, -0.05, 0.02, 0).scale.set(1, 1.02, 1.02);
    for (const sd of [-1, 1]) add(h, S(0.1, 10, 8), 0x9a5a2e, -0.05, -0.06, sd * 0.33).scale.set(0.8, 1.5, 0.5);
    add(h, new THREE.TorusGeometry(0.35, 0.03, 6, 22), 0x5a3418, -0.05, 0.18, 0, false).rotation.x = Math.PI / 2;
    for (const sd of [-1, 1]) {
      const gg = new THREE.Group(); gg.position.set(0.16, 0.36, sd * 0.13); gg.rotation.z = 0.95; gg.rotation.x = -sd * 0.2; h.add(gg);
      const ring = add(gg, new THREE.TorusGeometry(0.095, 0.03, 6, 14), 0xcfd3de, 0, 0, 0, false); ring.rotation.y = Math.PI / 2;
      add(gg, S(0.085, 10, 8), 0x7fe0ff, 0, 0, 0, false).scale.set(0.35, 1, 1);
    }
    // güvercin kafa sallaması
    anim.push((t, v, s) => { const k = Math.min(1, v / 14); h.position.x = 0.12 + Math.max(0, Math.sin(t * 9)) * 0.09 * k; h.rotation.y = -s * 0.3; h.rotation.z = Math.sin(t * 9) * 0.04 * k; });
  },
  kopek(p, anim) {
    const TAN = 0xe6ab58, BR = 0x7d4a22, CR = 0xfff0d2, NOSE = 0x1f1a22;
    add(p, S(0.33, 16, 12), TAN, 0, 0.13, 0).scale.set(0.95, 1.02, 1.1);
    add(p, S(0.24, 12, 10), CR, 0.14, 0.12, 0).scale.set(0.7, 1.15, 1.05);
    for (const sd of [-1, 1]) {
      limb(p, TAN, [0.04, 0.3, sd * 0.3], [0.36, 0.16, sd * 0.3], 0.095);
      limb(p, TAN, [0.36, 0.16, sd * 0.3], [0.64, 0.12, sd * 0.2], 0.085);
      add(p, S(0.12, 10, 8), CR, 0.7, 0.11, sd * 0.19).scale.set(1.1, 0.9, 1);
    }
    // kıvrık kuyruk, sallanır
    const tail = D(new THREE.Group()); tail.position.set(-0.3, 0.1, 0); p.add(tail);
    for (let k = 0; k < 7; k++) { const a = k / 6; add(tail, S(0.085 - a * 0.02, 8, 6), k > 4 ? CR : TAN, -0.12 - Math.sin(a * 2.6) * 0.16, 0.06 + a * 0.5 - a * a * 0.12, 0); }
    anim.push((t, v) => { tail.rotation.x = Math.sin(t * 12) * (0.35 + Math.min(0.3, v / 80)); });
    const h = D(new THREE.Group()); h.position.set(0.1, 0.76, 0); p.add(h);
    add(h, S(0.42, 20, 16), TAN).scale.set(0.98, 0.96, 1.05);
    // açık renk yüz maskesi, iri burun, sarkan dil
    add(h, S(0.3, 14, 12), CR, 0.2, -0.02, 0, false).scale.set(0.9, 1.1, 0.62);
    const muz = add(h, S(0.24, 16, 12), CR, 0.4, -0.13, 0); muz.scale.set(1.25, 0.82, 1.05);
    add(h, S(0.095, 12, 10), NOSE, 0.69, -0.06, 0).scale.set(0.9, 0.8, 1.15);
    smile(h, NOSE, 0.6, -0.14, 0.11, 2.2, 0.02);
    const tongue = D(add(h, RB(0.07, 0.22, 0.13, 0.03), 0xff6f91, 0.56, -0.33, 0.07)); tongue.rotation.z = 0.25;
    anim.push((t, v) => { tongue.rotation.x = Math.sin(t * 14) * 0.25 * Math.min(1, v / 14); tongue.scale.y = 1 + Math.min(0.5, v / 60); });
    eyes(h, 0.42, { r: 0.135, iris: 0x8a4b1c, brow: BR, tilt: -0.3, az: 0.42, el: 0.24 });
    // sarkık kulaklar, rüzgârda savrulur; birinde sarı küpe
    for (const sd of [-1, 1]) {
      const e = D(new THREE.Group()); e.position.set(-0.04, 0.3, sd * 0.3); h.add(e);
      const lobe = add(e, S(0.19, 12, 10), BR, -0.02, -0.2, sd * 0.07); lobe.scale.set(0.9, 1.5, 0.42);
      if (sd > 0) { const tag = add(e, C(0.06, 0.06, 0.025, 10), 0xffe01a, 0.06, -0.32, 0.14, false); tag.rotation.x = Math.PI / 2; }
      anim.push((t, v) => { const k = Math.min(1, v / 26); e.rotation.x = sd * (-0.12 - k * 0.9 - Math.sin(t * 11 + sd) * 0.14 * k); e.rotation.z = k * 0.5; });
    }
    anim.push((t, _v, s) => { h.rotation.y = -s * 0.3; h.rotation.x = Math.sin(t * 2.1) * 0.04; });
  },
};

interface CatOpt { fur: number; dark: number; belly: number; iris: number; stripes: boolean; extra: 'bandana' | 'goggles' }
function cat(p: THREE.Group, anim: Anim[], o: CatOpt) {
  const { fur, belly } = o, PINK = 0xff8fab;
  add(p, S(0.31, 16, 12), fur, 0, 0.12, 0).scale.set(0.92, 1.02, 1.05);
  add(p, S(0.22, 12, 10), belly, 0.14, 0.12, 0).scale.set(0.7, 1.15, 1.05);
  for (const sd of [-1, 1]) {
    limb(p, fur, [0.04, 0.3, sd * 0.28], [0.36, 0.16, sd * 0.29], 0.08);
    limb(p, fur, [0.36, 0.16, sd * 0.29], [0.64, 0.12, sd * 0.2], 0.072);
    add(p, S(0.105, 10, 8), belly, 0.7, 0.11, sd * 0.19);
  }
  const h = D(new THREE.Group()); h.position.set(0.1, 0.74, 0); p.add(h);
  add(h, S(0.42, 20, 16), fur).scale.set(0.94, 0.88, 1.1);
  // yanak tüyleri
  for (const sd of [-1, 1]) for (const k of [0, 1]) { const c = add(h, CONE(0.1, 0.24, 5), k ? fur : belly, 0.1, -0.14 - k * 0.07, sd * (0.42 - k * 0.02)); c.rotation.x = sd * (Math.PI / 2 + 0.25 + k * 0.4); }
  // ağız ve burun
  for (const sd of [-1, 1]) add(h, S(0.12, 12, 10), belly, 0.34, -0.13, sd * 0.085).scale.set(0.8, 0.72, 1);
  add(h, S(0.05, 8, 6), PINK, 0.43, -0.05, 0, false).scale.set(0.8, 0.7, 1.2);
  smile(h, o.dark, 0.4, -0.13, 0.05, 2.4, 0.014);
  eyes(h, 0.42, { r: 0.14, iris: o.iris, slit: true, az: 0.46, el: 0.14, ...(o.extra === 'goggles' ? { lid: fur, lidDrop: 0.36 } : { brow: o.dark, tilt: 0.3 }) });
  // kulaklar
  for (const sd of [-1, 1]) {
    const e = D(new THREE.Group()); e.position.set(-0.04, 0.3, sd * 0.25); e.rotation.x = sd * 0.3; h.add(e);
    add(e, CONE(0.16, 0.34, 4), fur, 0, 0.12, 0).rotation.y = Math.PI / 4;
    add(e, CONE(0.085, 0.22, 4), PINK, 0.05, 0.11, 0, false).rotation.y = Math.PI / 4;
    anim.push((t, v) => { e.rotation.z = -Math.min(0.35, v / 90) + Math.sin(t * 6 + sd * 3) * 0.05; });
  }
  // bıyıklar
  for (const sd of [-1, 1]) for (const k of [-1, 0, 1]) { const w = add(h, B(0.012, 0.012, 0.34), 0xffffff, 0.34, -0.12 + k * 0.035, sd * 0.3, false); w.rotation.x = sd * k * 0.22; w.rotation.y = -sd * 0.25; }
  if (o.stripes) {
    for (let k = 0; k < 3; k++) { const s = add(h, RB(0.09, 0.05, 0.22 - k * 0.03, 0.02), o.dark, 0.2 - k * 0.14, 0.33 - k * 0.012 + (k === 1 ? 0.02 : 0), 0, false); s.rotation.z = -0.55 + k * 0.4; }
    for (const sd of [-1, 1]) for (const k of [0, 1]) { const s = add(h, RB(0.14, 0.045, 0.05, 0.02), o.dark, 0.02 + k * 0.02, 0.02 - k * 0.1, sd * 0.445, false); s.rotation.y = sd * 0.2; }
  }
  if (o.extra === 'bandana') {
    add(p, new THREE.TorusGeometry(0.22, 0.06, 8, 16), 0x1e6fe0, 0.03, 0.4, 0).rotation.x = Math.PI / 2;
    const k = add(p, CONE(0.14, 0.26, 3), 0x1e6fe0, 0.22, 0.27, 0); k.rotation.z = Math.PI + 0.35;
    for (const dz of [-0.07, 0.07]) add(p, S(0.022, 6, 6), 0xffffff, 0.3, 0.3, dz, false);
  } else {
    // yarış gözlüğü alnında
    add(h, new THREE.TorusGeometry(0.4, 0.035, 6, 22), 0x2b2833, -0.01, 0.16, 0, false).rotation.x = Math.PI / 2 + 0.0;
    for (const sd of [-1, 1]) {
      const gg = new THREE.Group(); gg.position.set(0.27, 0.27, sd * 0.14); gg.rotation.z = 0.7; gg.rotation.x = -sd * 0.25; h.add(gg);
      add(gg, new THREE.TorusGeometry(0.1, 0.032, 6, 14), 0xff3b6b, 0, 0, 0, false).rotation.y = Math.PI / 2;
      add(gg, S(0.09, 10, 8), 0x8ff0ff, 0, 0, 0, false).scale.set(0.35, 1, 1);
    }
    add(p, new THREE.TorusGeometry(0.22, 0.055, 8, 16), 0xff3b6b, 0.03, 0.4, 0).rotation.x = Math.PI / 2; // atkı
    const sc = D(new THREE.Group()); sc.position.set(-0.2, 0.4, 0.08); p.add(sc);
    add(sc, RB(0.42, 0.05, 0.13, 0.02), 0xff3b6b, -0.2, 0, 0);
    anim.push((t, v) => { sc.rotation.z = 0.5 - Math.min(0.6, v / 40) + Math.sin(t * 13) * 0.12; sc.rotation.y = Math.sin(t * 9) * 0.25; });
  }
  // kuyruk: kıvrılır ve sallanır
  const tail = new THREE.Group(); tail.position.set(-0.3, 0.02, 0); p.add(tail);
  const segs: THREE.Mesh[] = [];
  for (let k = 0; k < 8; k++) segs.push(D(add(tail, S(0.08 - k * 0.003, 8, 6), (o.stripes && k % 2) || (!o.stripes && k === 7) ? (o.stripes ? o.dark : belly) : fur)));
  anim.push((t, v, s) => {
    for (let k = 0; k < 8; k++) { const a = k / 7, sw = Math.sin(t * 5 - a * 2.2) * 0.22 * a; segs[k].position.set(-0.06 - Math.sin(a * 1.9) * 0.36, a * 0.82, sw + s * a * 0.2); }
    h.rotation.y = -s * 0.3; h.rotation.z = Math.sin(t * 2.5) * 0.03; void v;
  });
}
