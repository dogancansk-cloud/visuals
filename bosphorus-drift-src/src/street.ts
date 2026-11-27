// Galata sokak hayatı: nostaljik tramvay (Yüksek Kaldırım yokuşunda gidip gelir), kafe masaları, çiçekçiler,
// mısır arabaları, sokak köpekleri, lamba direklerinde çiçek sepetleri ve kart yaklaşınca havalanan güvercinler.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Track, Textures } from './track';
import { F_BRIDGE, F_TUNNEL, F_SPIRAL, F_RAMP } from './trackpath';

/** tramvay hattı: pist metresi aralığı, taraf (+1 sağ) ve yol kenarından uzaklık */
export const TRAM = { a: 160, b: 425, side: 1, d: 4.0 };
export const inTram = (s: number, pad = 8) => s > TRAM.a - pad && s < TRAM.b + pad;

interface Ground { hAt(x: number, z: number): number }
export type Part = [THREE.BufferGeometry, number];
const UMB = [0xff4b3e, 0xffc21a, 0x1e9bff, 0x2fc46b, 0xff7ab0, 0xffffff];
const SHIRT = [0xff5a4f, 0xffc233, 0x3fa7ff, 0xffffff, 0xff8fb8, 0x41c98a, 0x9b7bff];
const SKIN = [0xf3cfb0, 0xe8b88f, 0xc98f62];
const FLOWER = [0xff3b4e, 0xff7ab0, 0xffd21a, 0xb06bff, 0xffffff, 0xff8a1f];

export const box = (x: number, y: number, z: number, px = 0, py = 0, pz = 0) => { const g = new THREE.BoxGeometry(x, y, z); g.translate(px, py, pz); return g; };
export const cyl = (r1: number, r2: number, h: number, px = 0, py = 0, pz = 0, s = 10) => { const g = new THREE.CylinderGeometry(r1, r2, h, s); g.translate(px, py, pz); return g; };
export const sph = (r: number, px = 0, py = 0, pz = 0, sx = 1, sy = 1, sz = 1, w = 8, h = 6) => { const g = new THREE.SphereGeometry(r, w, h); g.scale(sx, sy, sz); g.translate(px, py, pz); return g; };

/** parçaları köşe renkli tek ağda toplar */
export class Bag {
  private geos: THREE.BufferGeometry[] = [];
  private c = new THREE.Color(); private m = new THREE.Matrix4(); private q = new THREE.Quaternion(); private up = new THREE.Vector3(0, 1, 0); private one = new THREE.Vector3(1, 1, 1);
  /** yerel parçaları (model +x'e bakar) konuma ve yöne yerleştirir */
  put(parts: Part[], p: THREE.Vector3, yaw = 0, scale = 1) {
    this.m.compose(p, this.q.setFromAxisAngle(this.up, -yaw), this.one.set(scale, scale, scale));
    for (const [g0, col] of parts) {
      const g = g0.clone(); g.deleteAttribute('uv'); g.applyMatrix4(this.m);
      if (!g.index) g.setIndex(Array.from({ length: g.attributes.position.count }, (_, i) => i));
      const n = g.attributes.position.count, a = new Float32Array(n * 3); this.c.setHex(col);
      for (let i = 0; i < n; i++) { a[i * 3] = this.c.r; a[i * 3 + 1] = this.c.g; a[i * 3 + 2] = this.c.b; }
      g.setAttribute('color', new THREE.BufferAttribute(a, 3)); this.geos.push(g);
    }
  }
  mesh(shadow = true) { const me = new THREE.Mesh(mergeGeometries(this.geos), new THREE.MeshLambertMaterial({ vertexColors: true })); me.castShadow = shadow; me.receiveShadow = true; return me; }
  get empty() { return !this.geos.length; }
}

/** basit insan: ayakta ya da oturur (+x'e bakar) */
function person(k: number, sit = false, x = 0, z = 0): Part[] {
  const shirt = SHIRT[k % SHIRT.length], skin = SKIN[k % SKIN.length], dark = [0x2b2833, 0x1e3a6e, 0x5a3a2a][k % 3], y = sit ? -0.32 : 0;
  const out: Part[] = [
    [cyl(0.2, 0.24, 0.56, x, 0.98 + y, z, 7), shirt], [sph(0.17, x, 1.44 + y, z), skin],
    [sph(0.18, x - 0.03, 1.48 + y, z, 1, 0.8, 1), dark],
    [cyl(0.055, 0.055, 0.46, x + 0.12, 1.02 + y, z + 0.24, 5), skin], [cyl(0.055, 0.055, 0.46, x + 0.12, 1.02 + y, z - 0.24, 5), skin],
  ];
  if (sit) out.push([box(0.5, 0.15, 0.36, x + 0.2, 0.5, z), dark], [box(0.14, 0.45, 0.36, x + 0.42, 0.24, z), dark]);
  else out.push([box(0.15, 0.7, 0.14, x, 0.35, z + 0.1), dark], [box(0.15, 0.7, 0.14, x, 0.35, z - 0.1), dark]);
  return out;
}
/** kafe: iki masa, şemsiyeler, sandalyeler, oturanlar */
function cafe(k: number): Part[] {
  const out: Part[] = [];
  for (const t of [-1, 1]) {
    const z = t * 1.45, u = UMB[(k + (t > 0 ? 1 : 0)) % UMB.length], u2 = u === 0xffffff ? 0xff4b3e : 0xffffff;
    out.push([cyl(0.5, 0.5, 0.06, 0, 0.76, z, 14), 0xffffff], [cyl(0.05, 0.05, 0.74, 0, 0.38, z, 6), 0x4a4656], [cyl(0.26, 0.3, 0.05, 0, 0.03, z, 10), 0x4a4656]);
    out.push([cyl(0.035, 0.035, 2.5, 0, 1.25, z, 6), 0xe9e8f2]);
    const cone = new THREE.ConeGeometry(1.35, 0.55, 12, 1, true); cone.translate(0, 2.55, z); out.push([cone, u]);
    const rim = new THREE.CylinderGeometry(1.36, 1.36, 0.16, 12, 1, true); rim.translate(0, 2.22, z); out.push([rim, u2]);
    out.push([sph(0.07, 0, 2.86, z), u2]);
    out.push([cyl(0.06, 0.05, 0.1, 0.18, 0.84, z + 0.1, 6), 0xff5a4f], [cyl(0.06, 0.05, 0.1, -0.16, 0.84, z - 0.12, 6), 0xffffff]); // çay bardakları
    for (const sx of [-1, 1]) {
      const cx = sx * 0.82; // sandalye
      out.push([box(0.42, 0.06, 0.42, cx, 0.46, z), 0x1e9bff], [box(0.06, 0.5, 0.42, cx + sx * 0.2, 0.72, z), 0x1e9bff]);
      for (const a of [-1, 1]) for (const b of [-1, 1]) out.push([box(0.05, 0.46, 0.05, cx + a * 0.17, 0.23, z + b * 0.17), 0x4a4656]);
      if ((k + t + sx) % 3 !== 0) { // oturan kişi masaya bakar
        const pp = person(k * 3 + t + sx * 2 + 9, true);
        for (const [g, c] of pp) { if (sx > 0) g.rotateY(Math.PI); g.translate(cx, 0, z); out.push([g, c]); }
      }
    }
  }
  return out;
}
/** çiçekçi tezgâhı: basamaklı kovalar, çizgili tente */
function florist(k: number): Part[] {
  const out: Part[] = [];
  for (let t = 0; t < 3; t++) {
    out.push([box(0.5, 0.3 + t * 0.3, 3.0, -0.2 - t * 0.5, (0.3 + t * 0.3) / 2, 0), 0x9a6a3c]);
    for (let b = 0; b < 5; b++) {
      const z = -1.2 + b * 0.6, x = -0.2 - t * 0.5, y = 0.3 + t * 0.3, c = FLOWER[(k + t * 2 + b) % FLOWER.length];
      out.push([cyl(0.17, 0.13, 0.3, x, y + 0.15, z, 8), [0x2f6fb3, 0x2fa86a, 0x8a8f9c][(b + t) % 3]]);
      out.push([sph(0.24, x, y + 0.48, z, 1, 0.8, 1, 6, 5), c], [sph(0.14, x + 0.1, y + 0.6, z + 0.08, 1, 1, 1, 5, 4), FLOWER[(k + b + t + 3) % FLOWER.length]], [sph(0.2, x, y + 0.36, z, 1.05, 0.5, 1.05, 6, 4), 0x3fb85a]);
    }
  }
  for (const z of [-1.6, 1.6]) for (const x of [0.25, -1.55]) out.push([cyl(0.04, 0.04, 2.5, x, 1.25, z, 5), 0xe9e8f2]);
  for (let s = 0; s < 8; s++) { const g = box(2.1, 0.07, 0.42, -0.65, 2.52, -1.47 + s * 0.42); g.rotateZ(0.14); out.push([g, s % 2 ? 0xffffff : [0xff4b8a, 0x2fc46b, 0xffc21a][k % 3]]); }
  const pp = person(k + 4); for (const [g, c] of pp) { g.translate(0.55, 0, 0.9); out.push([g, c]); }
  return out;
}
/** haşlanmış mısır / kestane arabası */
function cart(k: number): Part[] {
  const red = k % 2 ? 0xe5342b : 0xffc21a, out: Part[] = [
    [box(1.0, 0.7, 1.7, 0, 0.85, 0), red], [box(1.06, 0.08, 1.76, 0, 1.22, 0), 0xffffff], [box(0.9, 0.5, 1.5, 0, 1.5, 0), 0xbfe8ff],
    [box(1.2, 0.07, 1.9, 0, 2.5, 0), k % 2 ? 0xffffff : 0xe5342b], [box(1.24, 0.14, 1.94, 0, 2.42, 0), red],
  ];
  for (const z of [-0.8, 0.8]) for (const x of [-0.45, 0.45]) out.push([cyl(0.03, 0.03, 1.2, x, 1.85, z, 5), 0xe9e8f2]);
  for (const z of [-0.55, 0.55]) { const w = cyl(0.36, 0.36, 0.1, 0, 0.36, z * 1.75, 12); w.rotateX(0); const g = new THREE.CylinderGeometry(0.36, 0.36, 0.1, 12); g.rotateX(Math.PI / 2); g.translate(0, 0.36, z * 1.7); out.push([g, 0x2b2833]); void w; }
  for (let c = 0; c < 6; c++) { const g = new THREE.CylinderGeometry(0.07, 0.06, 0.42, 6); g.rotateX(Math.PI / 2); g.translate(-0.2 + (c % 2) * 0.35, 1.34 + Math.floor(c / 2) * 0.12, -0.3 + (c % 3) * 0.3); out.push([g, k % 2 ? 0xffd21a : 0x7a4a24]); }
  const pp = person(k + 1); for (const [g, c] of pp) { g.translate(-0.95, 0, 0); out.push([g, c]); }
  return out;
}
/** yatan ya da oturan sokak köpeği (sarı küpeli) */
function dog(k: number): Part[] {
  const tan = [0xe6ab58, 0xf2dcb8, 0x8a5a34, 0xd9d2c4][k % 4], dk = 0x7d4a22, sit = k % 3 === 0;
  const out: Part[] = sit
    ? [[sph(0.3, 0, 0.36, 0, 0.9, 1.1, 0.85), tan], [sph(0.24, 0.16, 0.86, 0, 1, 0.95, 1), tan], [cyl(0.07, 0.07, 0.5, 0.2, 0.25, 0.13, 5), tan], [cyl(0.07, 0.07, 0.5, 0.2, 0.25, -0.13, 5), tan]]
    : [[sph(0.3, 0, 0.24, 0, 1.6, 0.7, 0.9), tan], [sph(0.23, 0.56, 0.3, 0.08, 1.05, 0.9, 1), tan], [sph(0.08, 0.5, 0.1, 0.3, 2.2, 0.8, 0.9), tan], [sph(0.08, 0.5, 0.1, -0.2, 2.2, 0.8, 0.9), tan]];
  const hx = sit ? 0.16 : 0.56, hy = sit ? 0.86 : 0.3, hz = sit ? 0 : 0.08;
  out.push([sph(0.13, hx + 0.2, hy - 0.05, hz, 1.3, 0.8, 0.9), 0xfff0d2], [sph(0.05, hx + 0.36, hy - 0.02, hz), 0x1f1a22]);
  for (const s of [-1, 1]) out.push([sph(0.1, hx - 0.04, hy + 0.06, hz + s * 0.2, 0.8, 1.4, 0.45), dk], [sph(0.035, hx + 0.19, hy + 0.07, hz + s * 0.1), 0x1f1a22]);
  out.push([cyl(0.04, 0.04, 0.02, hx - 0.02, hy - 0.06, hz + 0.25, 6), 0xffe01a]);
  out.push([sph(0.07, sit ? -0.3 : -0.52, sit ? 0.14 : 0.2, 0, 2.2, 0.8, 0.8), tan]);
  return out;
}

interface TramCar { g: THREE.Group; s: number; dir: number; wait: number }

export class Street {
  private tram: TramCar | null = null;
  private uTime = { value: 0 }; private uPlayer = { value: new THREE.Vector3(1e5, 0, 1e5) };
  private a = new THREE.Vector3(); private b = new THREE.Vector3();
  constructor(private scene: THREE.Scene, private track: Track, private world: Ground, tex: Textures, private mobile: boolean) {
    this.rails(); this.makeTram(tex); this.decor(); this.pigeons();
  }
  private side(i: number, d: number, out = new THREE.Vector3()) {
    const T = this.track.T, j = ((i % T.n) + T.n) % T.n, x = T.x[j] - T.tz[j] * d, z = T.z[j] + T.tx[j] * d;
    return out.set(x, this.world.hAt(x, z), z);
  }
  private lane(s: number, off = 0, out = new THREE.Vector3()) { const i = this.track.idxOf(s); return this.side(i, TRAM.side * (this.track.T.w[i] / 2 + TRAM.d + off), out); }

  /** raylar, taş döşeli yatak, havai hat ve direkler */
  private rails() {
    const pos: number[] = [], col: number[] = [], idx: number[] = [], c = new THREE.Color();
    const strip = (o0: number, o1: number, lift: number, hex: number) => {
      c.setHex(hex); const base = pos.length / 3; let n = 0;
      for (let s = TRAM.a - 9; s <= TRAM.b + 9; s += 2) {
        const p0 = this.lane(s, o0, this.a), p1 = this.lane(s, o1, this.b);
        pos.push(p0.x, p0.y + lift, p0.z, p1.x, p1.y + lift, p1.z); col.push(c.r, c.g, c.b, c.r, c.g, c.b);
        if (n > 0) { const k = base + n * 2; idx.push(k - 2, k, k - 1, k - 1, k, k + 1); } n++;
      }
    };
    strip(-1.25, 1.25, 0.05, 0xb9b2a6); strip(-0.82, -0.68, 0.09, 0x4a4f5c); strip(0.68, 0.82, 0.09, 0x4a4f5c);
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.setIndex(idx); g.computeVertexNormals();
    const nor = g.attributes.normal as THREE.BufferAttribute; for (let k = 0; k < nor.count; k++) if (nor.getY(k) < 0) nor.setXYZ(k, -nor.getX(k), -nor.getY(k), -nor.getZ(k));
    const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 })); m.receiveShadow = true; this.scene.add(m);
    // havai hat ve direkler
    const wire: number[] = [], bag = new Bag();
    for (let s = TRAM.a - 9; s < TRAM.b + 9; s += 3) { const p0 = this.lane(s, 0, this.a), p1 = this.lane(s + 3, 0, this.b); wire.push(p0.x, p0.y + 5.2, p0.z, p1.x, p1.y + 5.2, p1.z); }
    for (let s = TRAM.a - 6; s <= TRAM.b + 6; s += 27) {
      const p = this.lane(s, 1.55), i = this.track.idxOf(s), T = this.track.T, yaw = Math.atan2(T.tz[i], T.tx[i]);
      const arm = box(0.07, 0.07, 1.7, 0, 5.3, -TRAM.side * 0.8);
      bag.put([[cyl(0.09, 0.12, 5.6, 0, 2.8, 0, 6), 0x2f6b4a], [arm, 0x2f6b4a], [sph(0.14, 0, 5.65, 0), 0x2f6b4a]], p, yaw);
    }
    const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.Float32BufferAttribute(wire, 3));
    this.scene.add(new THREE.LineSegments(wg, new THREE.LineBasicMaterial({ color: 0x2b2833 })));
    this.scene.add(bag.mesh());
  }

  private makeTram(tex: Textures) {
    const RED = 0xe0212b, CREAM = 0xfff2d0, GLASS = 0x2d4466, DARK = 0x2b2833, bag = new Bag(), parts: Part[] = [];
    parts.push([box(8.4, 0.3, 1.8, 0, 0.6, 0), DARK]);
    parts.push([box(9.0, 1.05, 2.1, 0, 1.28, 0), RED], [box(9.04, 0.14, 2.14, 0, 1.86, 0), CREAM], [box(9.04, 0.1, 2.14, 0, 0.82, 0), CREAM]);
    parts.push([box(8.7, 0.95, 1.98, 0, 2.4, 0), GLASS], [box(9.0, 0.22, 2.1, 0, 2.97, 0), CREAM]);
    for (let k = 0; k <= 8; k++) { const x = -4.4 + k * 1.1; parts.push([box(k === 0 || k === 8 ? 0.26 : 0.14, 0.97, 2.12, x, 2.4, 0), CREAM]); }
    for (const sx of [-1, 1]) {
      parts.push([box(0.14, 0.97, 0.16, sx * 4.46, 2.4, 0.6), CREAM], [box(0.14, 0.97, 0.16, sx * 4.46, 2.4, -0.6), CREAM]);
      parts.push([sph(0.17, sx * 4.52, 1.3, 0, 0.5, 1, 1), 0xfff2a8], [box(0.3, 0.22, 2.0, sx * 4.56, 0.72, 0), DARK]);
      parts.push([box(0.5, 0.5, 1.5, sx * 3.3, 0.5, 0), DARK]);
      for (const sz of [-1, 1]) { const w = new THREE.CylinderGeometry(0.4, 0.4, 0.14, 12); w.rotateX(Math.PI / 2); w.translate(sx * 2.9, 0.4, sz * 0.75); parts.push([w, 0x4a4f5c]); }
    }
    const roof = sph(1.0, 0, 3.08, 0, 4.7, 0.2, 1.12, 12, 6); parts.push([roof, 0xe8e2d2], [box(6.6, 0.24, 1.0, 0, 3.32, 0), CREAM], [box(6.9, 0.07, 1.16, 0, 3.46, 0), 0xcfc8b6]);
    // yolcular
    for (let k = 0; k < 7; k++) { const x = -3.8 + k * 1.1 + 0.5; for (const sz of [-1, 1]) if ((k * 3 + sz) % 4 !== 0) parts.push([sph(0.19, x, 2.32, sz * 0.62), SKIN[(k + sz + 3) % 3]], [box(0.4, 0.4, 0.3, x, 1.98, sz * 0.62), SHIRT[(k * 2 + sz + 5) % SHIRT.length]]); }
    // boynuz (akım çubuğu)
    const pole = new THREE.CylinderGeometry(0.03, 0.03, 3.1, 5); pole.rotateZ(1.05); pole.translate(-1.3, 4.25, 0); parts.push([pole, DARK]);
    bag.put(parts, new THREE.Vector3());
    const g = new THREE.Group(); g.add(bag.mesh());
    const sign = tex.sign('TÜNEL · TAKSİM', '#fff2d0', '#b3121b');
    for (const sx of [-1, 1]) { const p = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 0.24), new THREE.MeshBasicMaterial({ map: sign, transparent: true })); p.position.set(sx * 4.52, 2.97, 0); p.rotation.y = sx * Math.PI / 2; g.add(p); }
    for (const sz of [-1, 1]) { const p = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 0.4), new THREE.MeshBasicMaterial({ map: sign, transparent: true })); p.position.set(0, 1.3, sz * 1.06); p.rotation.y = sz > 0 ? 0 : Math.PI; g.add(p); }
    this.scene.add(g);
    this.tram = { g, s: TRAM.a + 60, dir: 1, wait: 0 };
    this.placeTram();
  }
  private placeTram() {
    const t = this.tram!; const f = this.lane(t.s + 2.9, 0, this.a), r = this.lane(t.s - 2.9, 0, this.b);
    t.g.position.copy(f).add(r).multiplyScalar(0.5); t.g.position.y += 0.1;
    const dx = f.x - r.x, dy = f.y - r.y, dz = f.z - r.z, L = Math.hypot(dx, dz);
    t.g.rotation.set(0, -Math.atan2(dz, dx), Math.atan2(dy, L), 'YZX');
  }

  /** pist kenarı uygun mu (köprü, tünel, sarmal, tribün ve start çevresi dışında) */
  private free(s: number) {
    const T = this.track.T, L = this.track.L, i = this.track.idxOf(s);
    for (let k = -6; k <= 6; k += 3) if (T.flags[(i + k + T.n) % T.n] & (F_BRIDGE | F_TUNNEL | F_SPIRAL | F_RAMP)) return false;
    for (const [a, len] of [[1250, 70], [0, 85], [765, 50], [1200, 35]]) if (s > a - 6 && s < a + len + 6) return false;
    return s > 0 && s < L;
  }
  private decor() {
    const T = this.track.T, L = this.track.L, bag = new Bag(), yawAt = (i: number) => Math.atan2(T.tz[i], T.tx[i]);
    let k = 0;
    for (let s = 96; s < L - 20; s += 31) {
      for (const sd of [-1, 1]) {
        k++;
        if (!this.free(s) || (sd === TRAM.side && inTram(s, 14))) continue;
        const i = this.track.idxOf(s + (sd > 0 ? 9 : 0)), kind = k % 5, d = sd * (T.w[i] / 2 + (kind === 4 ? 3.4 : 4.9));
        const p = this.side(i, d), face = yawAt(i) + (sd > 0 ? -Math.PI / 2 : Math.PI / 2); // piste dönük
        if (kind === 0 || kind === 2) bag.put(cafe(k), p, yawAt(i));
        else if (kind === 1) bag.put(florist(k), p, face);
        else if (kind === 3) bag.put(cart(k), p, face);
        else { bag.put(dog(k), p, face + 0.5); bag.put(dog(k + 1), this.side(i + 2, d + sd * 0.9), face - 0.7); }
      }
    }
    // lamba direklerinde çiçek sepetleri (direkler Props ile aynı düzende)
    for (let i = 8; i < T.n; i += 26) {
      if (T.flags[i] & (F_TUNNEL | F_BRIDGE)) continue;
      let sd = (i / 26) % 2 < 1 ? 1 : -1; if (sd === TRAM.side && inTram(i)) sd = -sd;
      const p = this.side(i, sd * (T.w[i] / 2 + 2.6)), c = FLOWER[(i / 26) % FLOWER.length | 0];
      const parts: Part[] = [];
      for (const z of [-0.42, 0.42]) parts.push([cyl(0.2, 0.12, 0.2, 0, 3.5, z, 7), 0x7a4a24], [sph(0.3, 0, 3.72, z, 1, 0.75, 1, 7, 5), c], [sph(0.2, 0.05, 3.6, z * 1.2, 1, 0.9, 1, 6, 4), 0x3fb85a], [box(0.04, 0.04, 0.5, 0, 3.86, z * 0.6), 0x2c3566]);
      bag.put(parts, p, yawAt(i));
    }
    if (!bag.empty) this.scene.add(bag.mesh(!this.mobile));
  }

  /** güvercin sürüleri: yerde yemlenir, kart yaklaşınca kanat çırpıp havalanır */
  private pigeons() {
    const T = this.track.T, G = 0x8fa3c4;
    const tmp = new Bag();
    const wing = (sz: number): Part => [sph(0.16, -0.02, 0.2, sz * 0.19, 1.0, 0.16, 1.15, 6, 4), 0x66789c];
    tmp.put([[sph(0.15, 0, 0.17, 0, 1.35, 0.95, 0.9), G], [sph(0.09, 0.19, 0.33, 0), G], [sph(0.1, 0.12, 0.25, 0, 1, 0.8, 1), 0x23c79a], [(() => { const g = new THREE.ConeGeometry(0.035, 0.12, 5); g.rotateZ(-Math.PI / 2); g.translate(0.31, 0.32, 0); return g; })(), 0x4a4656], [box(0.2, 0.03, 0.16, -0.26, 0.17, 0), 0x66789c], wing(1), wing(-1)], new THREE.Vector3());
    const geo = tmp.mesh().geometry;
    const spots: THREE.Matrix4[] = [], m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), one = new THREE.Vector3(1, 1, 1);
    let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const flock = (c: THREE.Vector3, n: number, r: number) => { for (let k = 0; k < n; k++) { const a = rnd() * 6.28, d = Math.sqrt(rnd()) * r, x = c.x + Math.cos(a) * d, z = c.z + Math.sin(a) * d; m.compose(new THREE.Vector3(x, this.world.hAt(x, z) + 0.02, z), q.setFromAxisAngle(up, rnd() * 6.28), one); spots.push(m.clone()); } };
    const per = this.mobile ? 5 : 8;
    for (let s = 60; s < this.track.L - 10; s += 47) {
      if (!this.free(s)) continue;
      const i = this.track.idxOf(s), sd = (s / 47 | 0) % 2 ? 1 : -1;
      flock(this.side(i, sd * (T.w[i] / 2 + 1.9)), per, 1.3);
    }
    const tw = T.tower; for (let k = 0; k < 4; k++) { const a = k * 1.7 + 0.4; flock(new THREE.Vector3(tw.x + Math.cos(a) * 31, 0, tw.z + Math.sin(a) * 31), per + 2, 3); }
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = this.uTime; sh.uniforms.uPlayer = this.uPlayer;
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime; uniform vec3 uPlayer;').replace('#include <begin_vertex>', `#include <begin_vertex>
        vec3 ip = instanceMatrix[3].xyz; float ph = ip.x * 1.7 + ip.z * 2.3;
        float fly = 1.0 - smoothstep(9.0, 20.0, distance(ip.xz, uPlayer.xz)); fly = fly * fly * (3.0 - 2.0 * fly);
        float wingK = smoothstep(0.1, 0.3, abs(position.z));
        transformed.y += wingK * sin(uTime * 34.0 + ph) * 0.3 * fly;
        transformed.z *= 1.0 + wingK * fly * 1.3;
        transformed.y += fly * (3.5 + 3.0 * fract(ph * 0.37)) + sin(uTime * 3.0 + ph) * 0.25 * fly;
        transformed.x += fly * (5.0 + 4.0 * fract(ph * 0.61));
        // yemlenme: kafa aşağı yukarı
        transformed.y -= (1.0 - fly) * smoothstep(0.08, 0.3, position.x) * max(0.0, sin(uTime * 5.0 + ph)) * 0.12;`);
    };
    const im = new THREE.InstancedMesh(geo, mat, spots.length); spots.forEach((mm, k) => im.setMatrixAt(k, mm)); im.frustumCulled = false; im.castShadow = !this.mobile; this.scene.add(im);
  }

  update(dt: number, time: number, player: THREE.Vector3 | null) {
    this.uTime.value = time; if (player) this.uPlayer.value.copy(player);
    const t = this.tram; if (!t || dt <= 0) return;
    if (t.wait > 0) { t.wait -= dt; return; }
    // uçlara yaklaşırken yavaşlar, durakta bekler, geri döner
    const toEnd = t.dir > 0 ? TRAM.b - t.s : t.s - TRAM.a, v = Math.min(8.5, 1.2 + toEnd * 0.5);
    t.s += t.dir * v * dt;
    if (toEnd <= 0.3) { t.dir = -t.dir; t.wait = 3; }
    this.placeTram();
  }
}
