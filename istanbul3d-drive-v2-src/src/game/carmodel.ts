// Araba modeli (dosya yok, kodla üretilir): kesitlerden örülen yuvarlak hatlı sedan gövdesi, eğimli camlı kabin,
// jantlı tekerlekler, farlar. Boya parlak ve çevreyi yansıtır. Oyuncu arabası ayrıntılı, trafik arabaları aynı modelin hafif hâli.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const sstep = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
/** parçalı doğrusal eğri: [[z, değer], ...] */
export function curve(pts: number[][], z: number) {
  if (z <= pts[0][0]) return pts[0][1];
  for (let i = 1; i < pts.length; i++) if (z <= pts[i][0]) { const t = (z - pts[i - 1][0]) / (pts[i][0] - pts[i - 1][0]); return lerp(pts[i - 1][1], pts[i][1], t * t * (3 - 2 * t)); }
  return pts[pts.length - 1][1];
}

export interface Section { z: number; w: number; y0: number; y1: number; n: number; taper: number }
type Colorer = (zMid: number, tMid: number, yMid: number) => THREE.Color;

/** kesitleri örerek kapalı kabuk: düzgün (yumuşak) normaller, yüz başına renk */
export function loft(secs: Section[], M: number, colorOf: Colorer, capEnds = true): THREE.BufferGeometry {
  const P: number[][][] = secs.map((s) => {
    const ring: number[][] = [];
    for (let k = 0; k < M; k++) {
      const a = (k / M) * Math.PI * 2 - Math.PI / 2; // alt ortadan başlar, sağ yandan yukarı
      const ca = Math.cos(a), sa = Math.sin(a), e = 2 / s.n;
      const yc = (s.y0 + s.y1) / 2, hh = (s.y1 - s.y0) / 2;
      const y = yc + hh * Math.sign(sa) * Math.pow(Math.abs(sa), e);
      const tp = 1 - s.taper * sstep(s.y0, s.y1, y); // yukarı doğru daralma (cam eğimi)
      ring.push([s.w * tp * Math.sign(ca) * Math.pow(Math.abs(ca), e), y, s.z]);
    }
    return ring;
  });
  // yumuşak normaller: komşu noktalardan
  const N: THREE.Vector3[][] = P.map((ring, i) => ring.map((p, k) => {
    const a = P[Math.min(P.length - 1, i + 1)][k], b = P[Math.max(0, i - 1)][k], c = ring[(k + 1) % M], d = ring[(k + M - 1) % M];
    const u = new THREE.Vector3(a[0] - b[0], a[1] - b[1], a[2] - b[2]), v = new THREE.Vector3(c[0] - d[0], c[1] - d[1], c[2] - d[2]);
    const n = new THREE.Vector3().crossVectors(u, v).normalize(); const yc = (secs[i].y0 + secs[i].y1) / 2;
    if (n.lengthSq() < 0.5) n.set(p[0], p[1] - yc, 0).normalize();
    if (n.x * p[0] + n.y * (p[1] - yc) < 0) n.negate(); // dışa baksın
    return n;
  }));
  const pos: number[] = [], nor: number[] = [], col: number[] = [];
  const push = (i: number, k: number, c: THREE.Color) => { const p = P[i][k % M], n = N[i][k % M]; pos.push(p[0], p[1], p[2]); nor.push(n.x, n.y, n.z); col.push(c.r, c.g, c.b); };
  for (let i = 0; i < secs.length - 1; i++) for (let k = 0; k < M; k++) {
    const zm = (secs[i].z + secs[i + 1].z) / 2, ym = (P[i][k][1] + P[i][(k + 1) % M][1] + P[i + 1][k][1] + P[i + 1][(k + 1) % M][1]) / 4;
    const c = colorOf(zm, (k + 0.5) / M, ym);
    push(i, k, c); push(i, k + 1, c); push(i + 1, k + 1, c); push(i, k, c); push(i + 1, k + 1, c); push(i + 1, k, c);
  }
  if (capEnds) for (const [i, flip] of [[0, false], [secs.length - 1, true]] as [number, boolean][]) {
    const ring = P[i], cx = 0, cy = (secs[i].y0 + secs[i].y1) / 2, nz = flip ? 1 : -1, c = colorOf(secs[i].z, 0.25, cy);
    for (let k = 0; k < M; k++) {
      const a = ring[k], b = ring[(k + 1) % M]; const tri = flip ? [[cx, cy, secs[i].z], a, b] : [[cx, cy, secs[i].z], b, a];
      for (const p of tri) { pos.push(p[0], p[1], p[2]); nor.push(0, 0, nz); col.push(c.r, c.g, c.b); }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  // sarma yönü: normaller dışa baksın
  const p = g.attributes.position, n = g.attributes.normal, a = new THREE.Vector3(), b = new THREE.Vector3(), c2 = new THREE.Vector3(), fn = new THREE.Vector3(), vn = new THREE.Vector3();
  for (let i = 0; i < p.count; i += 3) {
    a.fromBufferAttribute(p, i); b.fromBufferAttribute(p, i + 1); c2.fromBufferAttribute(p, i + 2); fn.crossVectors(b.clone().sub(a), c2.clone().sub(a)); vn.fromBufferAttribute(n, i);
    if (fn.dot(vn) < 0) for (const arr of [p, n, g.attributes.color]) { const x = arr.getX(i + 1), y = arr.getY(i + 1), z = arr.getZ(i + 1); arr.setXYZ(i + 1, arr.getX(i + 2), arr.getY(i + 2), arr.getZ(i + 2)); arr.setXYZ(i + 2, x, y, z); }
  }
  return g;
}
export function part(g: THREE.BufferGeometry, c: THREE.Color) {
  if (g.index) g = g.toNonIndexed(); g.deleteAttribute('uv');
  const n = g.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3)); g.clearGroups(); return g;
}
export const boxp = (w: number, h: number, l: number, x: number, y: number, z: number, c: THREE.Color) => part(new THREE.BoxGeometry(w, h, l).translate(x, y, z), c);

export const CAR = { length: 4.5, halfW: 0.9, wheelR: 0.33, wheelZ: 1.36, wheelX: 0.8 };
const GLASS = new THREE.Color('#0d1218'), TRIM = new THREE.Color('#0c0d0f'), CHROME = new THREE.Color('#c8ccd2'), TYRE = new THREE.Color('#0b0b0c'), RIM = new THREE.Color('#b9bdc4');

/** gövde + kabin (boya rengi köşe renginde; trafik için örnek rengiyle çarpılır) */
export function sedanBody(paintHex: string, detail: 0 | 1, taxi = false): THREE.BufferGeometry {
  const P = new THREE.Color(paintHex), parts: THREE.BufferGeometry[] = [];
  const NS = detail ? 34 : 14, M = detail ? 28 : 14, L = CAR.length / 2;
  // ---- gövde: burundan kuyruğa kesitler ----
  const deck = [[-2.25, 0.9], [-2.16, 0.98], [-1.5, 1.01], [-1.3, 1.0], [1.0, 0.98], [1.6, 0.93], [2.1, 0.86], [2.25, 0.76]]; // bagaj – kemer – kaput hattı
  const belly = [[-2.25, 0.38], [-2.1, 0.29], [2.05, 0.27], [2.25, 0.36]];
  const secs: Section[] = [];
  for (let i = 0; i < NS; i++) {
    const u = i / (NS - 1), z = -L + u * 2 * L, e = Math.abs(z) / L;
    const w = CAR.halfW * (1 - 0.07 * Math.pow(e, 3)) * (1 - 0.13 * sstep(0.93, 1.0, e)); // plan görünüşte uçlara doğru daralan, yuvarlak köşeli
    secs.push({ z, w, y0: curve(belly, z), y1: curve(deck, z), n: lerp(4.6, 2.8, sstep(0.8, 1, e)), taper: 0.04 });
  }
  parts.push(loft(secs, M, (z, t, y) => {
    if (y < 0.4) return TRIM;                                     // alt etek / tampon altı
    if (Math.abs(z) > L - 0.16 && y < 0.56) return TRIM;          // tampon girişi
    return P;
  }));
  // ---- kabin: ön/arka cam eğimli, yanlar içe yatık ----
  const roof = [[-1.5, 0.96], [-0.95, 1.43], [-0.3, 1.48], [0.25, 1.46], [1.12, 0.95]];
  const cab: Section[] = []; const NC = detail ? 22 : 9;
  for (let i = 0; i < NC; i++) {
    const z = lerp(-1.5, 1.12, i / (NC - 1));
    cab.push({ z, w: 0.86 * (1 - 0.05 * Math.pow(Math.abs(z + 0.17) / 1.3, 3)), y0: 0.9, y1: Math.max(0.93, curve(roof, z)), n: 4.2, taper: 0.17 });
  }
  parts.push(loft(cab, M, (z, t, y) => {
    const top = t > 0.4 && t < 0.6;                               // tavan
    if (z > -0.95 && z < 0.27) { if (top || y > 1.37 || y < 1.01) return P; if (Math.abs(z + 0.32) < 0.07) return P; return GLASS; } // yan camlar, orta direk
    return (Math.abs(t - 0.5) > 0.17 && Math.abs(t - 0.5) < 0.22) || y < 1.0 ? P : GLASS;  // ön/arka cam, köşelerde direk
  }));
  if (detail) {
    // çamurluk kemerleri (koyu yay), kapı çizgileri, kollar, aynalar, ızgara, plakalar, tampon dudakları
    for (const sx of [-1, 1]) for (const wz of [CAR.wheelZ, -CAR.wheelZ]) {
      const sh = new THREE.Shape(); const r = CAR.wheelR + 0.1, a0 = Math.asin((0.3 - CAR.wheelR) / r);
      sh.absarc(0, 0, r, a0, Math.PI - a0, false); sh.closePath();
      parts.push(part(new THREE.ShapeGeometry(sh, 14).rotateY(sx * Math.PI / 2).translate(sx * (CAR.halfW - 0.012), CAR.wheelR, wz), TRIM));
      parts.push(boxp(0.012, 0.6, 0.014, sx * (CAR.halfW - 0.004), 0.68, 0.28, TRIM), boxp(0.012, 0.56, 0.014, sx * (CAR.halfW - 0.004), 0.7, -0.74, TRIM)); // kapı aralıkları
      parts.push(boxp(0.02, 0.03, 0.16, sx * (CAR.halfW + 0.002), 0.84, -0.05, CHROME), boxp(0.02, 0.03, 0.16, sx * (CAR.halfW + 0.002), 0.84, -1.0, CHROME)); // kapı kolları
      parts.push(boxp(0.15, 0.09, 0.08, sx * (CAR.halfW + 0.02), 1.04, 0.86, P), boxp(0.13, 0.075, 0.012, sx * (CAR.halfW + 0.02), 1.04, 0.815, GLASS)); // ayna
    }
    parts.push(boxp(0.9, 0.14, 0.04, 0, 0.52, 2.24, TRIM));          // ön ızgara
    parts.push(boxp(0.5, 0.03, 0.04, 0, 0.72, 2.235, CHROME));        // ızgara çıtası
    parts.push(boxp(0.5, 0.11, 0.02, 0, 0.42, 2.235, new THREE.Color('#e9e9e4')).translate(0, 0, 0.03), boxp(0.5, 0.11, 0.02, 0, 0.62, -2.275, new THREE.Color('#e9e9e4'))); // plakalar
    parts.push(boxp(0.9, 0.04, 0.06, 0, 0.34, -2.2, TRIM));
    if (taxi) parts.push(boxp(0.6, 0.16, 0.24, 0, 1.52, -0.3, new THREE.Color('#f7f3e8')));
  }
  return mergeGeometries(parts)!;
}

/** tekerlek: yuvarlak omuzlu lastik + 5 kollu jant. Dönme ekseni x. */
export function wheelGeom(detail: 0 | 1): THREE.BufferGeometry {
  const R = CAR.wheelR, W = 0.215, parts: THREE.BufferGeometry[] = [];
  const prof = [[R * 0.58, -W / 2], [R * 0.93, -W / 2], [R, -W / 2 + 0.035], [R, W / 2 - 0.035], [R * 0.93, W / 2], [R * 0.58, W / 2]].map(([r, y]) => new THREE.Vector2(r, y));
  parts.push(part(new THREE.LatheGeometry(prof, detail ? 22 : 12).rotateZ(Math.PI / 2), TYRE));
  parts.push(part(new THREE.CylinderGeometry(R * 0.6, R * 0.6, W * 0.9, detail ? 18 : 10, 1, false).rotateZ(Math.PI / 2), detail ? new THREE.Color('#2a2c30') : RIM));
  if (detail) {
    for (let s = 0; s < 5; s++) { const a = (s / 5) * Math.PI * 2; parts.push(part(new THREE.BoxGeometry(W + 0.012, R * 0.52, 0.055).translate(0, R * 0.3, 0).rotateX(a), RIM)); }
    parts.push(part(new THREE.CylinderGeometry(0.06, 0.06, W + 0.02, 10).rotateZ(Math.PI / 2), RIM));
    parts.push(part(new THREE.TorusGeometry(R * 0.6, 0.014, 6, 20).rotateY(Math.PI / 2).translate(W / 2, 0, 0), RIM), part(new THREE.TorusGeometry(R * 0.6, 0.014, 6, 20).rotateY(Math.PI / 2).translate(-W / 2, 0, 0), RIM));
  }
  return mergeGeometries(parts)!;
}

/** parlak boya: çevreyi yansıtır (scene.environment gerekir) */
export function paintMaterial() { return new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.45, roughness: 0.3, envMapIntensity: 0.9 }); }
export function wheelMaterial() { return new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.5, roughness: 0.5, envMapIntensity: 0.7 }); }

/** farlar: [ön sol, ön sağ] ve [arka sol, arka sağ] mercek geometrisi (gövde köşelerine oturur) */
export function lampGeom(front: boolean): THREE.BufferGeometry {
  const z = front ? 2.2 : -2.21, y = front ? 0.74 : 0.84, parts: THREE.BufferGeometry[] = [];
  for (const sx of [-1, 1]) {
    const g = new THREE.SphereGeometry(1, 10, 8).scale(0.2, front ? 0.075 : 0.07, 0.06).rotateY(sx * (front ? -0.3 : 0.3)).translate(sx * 0.56, y, z);
    g.deleteAttribute('uv'); parts.push(g.index ? g.toNonIndexed() : g);
  }
  return mergeGeometries(parts)!;
}
