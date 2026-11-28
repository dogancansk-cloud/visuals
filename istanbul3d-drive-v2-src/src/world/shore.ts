// Kıyı: taş rıhtım (kıyı çizgisi boyunca), babalar, bağlı tekneler ve vapur iskeleleri.
// Kıyı çizgisi veri hazırlamada (tools/prep.mjs) pürüzsüzleştirilir; zemin rıhtımın altında QW metre denize uzar,
// buradaki taş kaplama o kenarı örter. Böylece 10 m'lik zemin ızgarasının basamakları görünmez.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Ground } from './ground';

export interface Pier { name: string; x: number; z: number; ox: number; oz: number }
export interface ShoreData { lines: { c: number; p: number[]; n: string }[]; piers: Pier[] }
export const QW = 10.6; // rıhtımın denize uzanan genişliği
const KERB = 0.7, KH = 0.22, BOTTOM = -2.6;

function stoneTexture(aniso: number) {
  const S = 256, c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d')!;
  g.fillStyle = '#a39d92'; g.fillRect(0, 0, S, S);
  let s = 7; const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) { const v = 146 + rnd() * 13; g.fillStyle = `rgb(${v + 3},${v + 1},${v - 5})`; g.fillRect(i * 64 + 1, j * 64 + 1, 62, 62); }
  for (let i = 0; i < 2600; i++) { const v = rnd(); g.fillStyle = v > 0.5 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'; g.fillRect(rnd() * S, rnd() * S, 1 + rnd() * 2, 1 + rnd() * 2); }
  g.strokeStyle = 'rgba(60,56,50,0.55)'; g.lineWidth = 1.5; for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, S); g.moveTo(0, i * 64); g.lineTo(S, i * 64); g.stroke(); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = aniso; return t;
}
function tint(g: THREE.BufferGeometry, hex: string) {
  if (g.index) g = g.toNonIndexed(); g.deleteAttribute('uv'); const c = new THREE.Color(hex), n = g.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); g.clearGroups(); return g;
}
/** küçük balıkçı teknesi: burun +z, su hattı y = 0, boy 6.5 m */
function boatGeom() {
  const hull = (hw: number, len: number, y0: number, h: number, hex: string) => { const s = new THREE.Shape(); s.moveTo(-hw * 0.8, -len / 2); s.lineTo(-hw, len * 0.1); s.quadraticCurveTo(-hw * 0.8, len * 0.4, 0, len / 2); s.quadraticCurveTo(hw * 0.8, len * 0.4, hw, len * 0.1); s.lineTo(hw * 0.8, -len / 2); s.closePath(); return tint(new THREE.ExtrudeGeometry(s, { depth: h, bevelEnabled: false, curveSegments: 4 }).rotateX(-Math.PI / 2).scale(1, 1, -1).translate(0, y0, 0), hex); };
  return mergeGeometries([hull(1.15, 6.5, -0.25, 0.75, '#ffffff'), hull(1.2, 6.6, 0.5, 0.14, '#5c4a3a'), tint(new THREE.BoxGeometry(1.5, 1.0, 1.7).translate(0, 1.1, -1.4), '#e9e4d8'), tint(new THREE.BoxGeometry(1.7, 0.1, 1.9).translate(0, 1.65, -1.4), '#5c4a3a'), tint(new THREE.CylinderGeometry(0.035, 0.035, 2.2, 4).translate(0, 1.7, 0.6), '#5c4a3a')])!;
}
function signTexture(name: string) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 96; const g = c.getContext('2d')!;
  g.fillStyle = '#14365c'; g.fillRect(0, 0, 512, 96); g.strokeStyle = '#f2efe6'; g.lineWidth = 4; g.strokeRect(5, 5, 502, 86);
  g.fillStyle = '#f2efe6'; g.font = 'bold 54px system-ui, "Segoe UI", Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(name, 256, 51, 470);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

export class Shore {
  readonly group = new THREE.Group();
  private bollards: number[] = []; private boats: number[] = []; private benches: number[] = []; // x, y, z, yaw
  private benchMesh!: THREE.InstancedMesh;
  private bollMesh: THREE.InstancedMesh; private boatMesh: THREE.InstancedMesh;
  private last = new THREE.Vector2(1e9, 1e9); private glow: THREE.MeshBasicMaterial[] = []; private lit: THREE.MeshLambertMaterial[] = [];
  readonly piers: Pier[];
  private top = new Map<number, number>(); // rıhtım üstü yüksekliği, 2.5 m'lik hücrelerde (araba rıhtımın üstünde gider)
  /** (x, z) rıhtımın üstündeyse yüzey yüksekliği, değilse -Infinity */
  topAt(x: number, z: number) { return this.top.get(Math.floor(x / 2.5) * 100003 + Math.floor(z / 2.5)) ?? -Infinity; }
  constructor(data: ShoreData, private G: Ground, aniso = 4) {
    this.piers = data.piers;
    const mat = new THREE.MeshLambertMaterial({ map: stoneTexture(aniso), vertexColors: true, side: THREE.DoubleSide });
    const H = (x: number, z: number) => G.H(x, z);
    let seed = 11; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    for (const L of data.lines) {
      const m = L.p.length / 2, closed = !!L.c, P = L.p;
      const O = new Float32Array(m * 2), Y = new Float32Array(m);
      for (let i = 0; i < m; i++) {
        const a = closed ? (i - 1 + m) % m : Math.max(0, i - 1), b = closed ? (i + 1) % m : Math.min(m - 1, i + 1);
        const tx = P[2 * b] - P[2 * a], tz = P[2 * b + 1] - P[2 * a + 1], l = Math.hypot(tx, tz) || 1; O[2 * i] = -tz / l; O[2 * i + 1] = tx / l;
        Y[i] = Math.max(1.25, H(P[2 * i] - O[2 * i] * 1.5, P[2 * i + 1] - O[2 * i + 1] * 1.5)) + 0.06;
      }
      { // rıhtım üstü yumuşak inip çıksın, zeminin altında kalmasın
        const raw = Y.slice(), idx = (i: number) => closed ? (i + m) % m : Math.max(0, Math.min(m - 1, i));
        for (let i = 0; i < m; i++) { let v = 0; for (let k = -3; k <= 3; k++) v = Math.max(v, raw[idx(i + k)]); Y[i] = v; }
        for (let it = 0; it < 4; it++) { const c = Y.slice(); for (let i = 0; i < m; i++) Y[i] = Math.max(raw[i], (c[idx(i - 1)] + 2 * c[i] + c[idx(i + 1)]) / 4); }
      }
      // rıhtım parçaları (taş dolgu kıyılarda yok), 60 noktalık dilimler halinde
      const nSeg = closed ? m : m - 1; let pos: number[] = [], uv: number[] = [], col: number[] = [], cnt = 0, along = 0;
      const flush = () => { if (!pos.length) return; const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.computeVertexNormals(); g.computeBoundingSphere(); const me = new THREE.Mesh(g, mat); me.receiveShadow = true; me.matrixAutoUpdate = false; this.group.add(me); pos = []; uv = []; col = []; cnt = 0; };
      const quad = (a: number[], b: number[], c: number[], d: number[], ua: number[], ub: number[], uc: number[], ud: number[], k: number) => { pos.push(...a, ...b, ...c, ...a, ...c, ...d); uv.push(...ua, ...ub, ...uc, ...ua, ...uc, ...ud); for (let q = 0; q < 6; q++) col.push(k, k, k * 0.985); };
      const W = 4.4; // doku tekrarı (m)
      const sect = (i: number) => { const x = P[2 * i], z = P[2 * i + 1], ox = O[2 * i], oz = O[2 * i + 1], y = Y[i]; return { in: [x - ox * 0.3, y, z - oz * 0.3], mid: [x + ox * (QW - KERB), y, z + oz * (QW - KERB)], midT: [x + ox * (QW - KERB), y + KH, z + oz * (QW - KERB)], outT: [x + ox * QW, y + KH, z + oz * QW], outB: [x + ox * QW, BOTTOM, z + oz * QW], inB: [x - ox * 0.3, BOTTOM, z - oz * 0.3], y }; };
      const cap = (s: ReturnType<typeof sect>) => quad(s.in, s.outT, s.outB, s.inB, [0, 0], [QW / W, 0], [QW / W, 0.6], [0, 0.6], 0.62);
      for (let i = 0; i < nSeg; i++) {
        const j = (i + 1) % m, quay = L.n[i] !== '1' && L.n[j] !== '1';
        const segL = Math.hypot(P[2 * j] - P[2 * i], P[2 * j + 1] - P[2 * i + 1]);
        if (!quay) { along += segL; continue; }
        const A = sect(i), B = sect(j), wu = (p: number[]) => [p[0] / W, p[2] / W];
        const prevQ = i > 0 || closed ? L.n[(i - 1 + m) % m] !== '1' : false, nextQ = j < m - 1 || closed ? L.n[(j + 1) % m] !== '1' : false;
        if (!prevQ) cap(A); if (!nextQ) cap(B);
        quad(A.in, B.in, B.mid, A.mid, wu(A.in), wu(B.in), wu(B.mid), wu(A.mid), 0.92);                                        // üst yüzey
        quad(A.mid, B.mid, B.midT, A.midT, [along / W, 0], [(along + segL) / W, 0], [(along + segL) / W, 0.05], [along / W, 0.05], 0.8); // kenar taşı (iç yüz)
        quad(A.midT, B.midT, B.outT, A.outT, wu(A.midT), wu(B.midT), wu(B.outT), wu(A.outT), 1.08);                              // kenar taşı (üst)
        quad(A.outT, B.outT, B.outB, A.outB, [along / W, 0], [(along + segL) / W, 0], [(along + segL) / W, (B.y + KH - BOTTOM) / W], [along / W, (A.y + KH - BOTTOM) / W], 0.66); // deniz duvarı
        along += segL;
        for (let u = 0; u <= 1.001; u += 0.34) for (let v = -0.3; v <= QW - 0.2; v += 1.7) { // çarpışma yüzeyi
          const ox = O[2 * i] + (O[2 * j] - O[2 * i]) * u, oz = O[2 * i + 1] + (O[2 * j + 1] - O[2 * i + 1]) * u, x = P[2 * i] + (P[2 * j] - P[2 * i]) * u + ox * v, z = P[2 * i + 1] + (P[2 * j + 1] - P[2 * i + 1]) * u + oz * v, yy = A.y + (B.y - A.y) * u;
          for (const [ex, ez] of [[0, 0], [1.25, 0], [0, 1.25], [-1.25, 0], [0, -1.25]]) { const key = Math.floor((x + ex) / 2.5) * 100003 + Math.floor((z + ez) / 2.5); if (v + 1.3 < QW && (this.top.get(key) ?? -1e9) < yy) this.top.set(key, yy); }
        }
        // babalar (15 m'de bir) ve arada bir bağlı tekne
        if (i % 9 === 5 && !data.piers.some((p) => Math.hypot(p.x - P[2 * i], p.z - P[2 * i + 1]) < 26)) this.benches.push(P[2 * i] + O[2 * i] * (QW - 3.4), A.y, P[2 * i + 1] + O[2 * i + 1] * (QW - 3.4), Math.atan2(O[2 * i], O[2 * i + 1])); // denize bakan bank
        if (i % 3 === 0) this.bollards.push(A.mid[0] - O[2 * i] * 0.45, A.y, A.mid[2] - O[2 * i + 1] * 0.45, 0);
        if (rnd() < 0.045 && !data.piers.some((p) => Math.hypot(p.x - P[2 * i], p.z - P[2 * i + 1]) < 70) && G.kindAt(P[2 * i] + O[2 * i] * (QW + 14), P[2 * i + 1] + O[2 * i + 1] * (QW + 14)) === 1)
          this.boats.push(P[2 * i] + O[2 * i] * (QW + 1.9), 0, P[2 * i + 1] + O[2 * i + 1] * (QW + 1.9), Math.atan2(-O[2 * i + 1], O[2 * i]) + (rnd() < 0.5 ? Math.PI : 0) + (rnd() - 0.5) * 0.2);
        if (++cnt >= 60) flush();
      }
      flush();
    }
    // babalar
    const iron = new THREE.MeshLambertMaterial({ color: '#2b2d31' });
    this.bollMesh = new THREE.InstancedMesh(mergeGeometries([new THREE.CylinderGeometry(0.15, 0.2, 0.5, 8).translate(0, 0.25, 0), new THREE.CylinderGeometry(0.26, 0.2, 0.14, 8).translate(0, 0.57, 0)])!, iron, 260);
    this.boatMesh = new THREE.InstancedMesh(boatGeom(), new THREE.MeshLambertMaterial({ vertexColors: true }), 48);
    { const wood = '#8a5a33', ir = '#2b2d31', bp = [tint(new THREE.BoxGeometry(1.7, 0.06, 0.46).translate(0, 0.46, 0), wood), tint(new THREE.BoxGeometry(1.7, 0.36, 0.05).rotateX(-0.18).translate(0, 0.78, -0.25), wood)]; for (const x of [-0.72, 0.72]) bp.push(tint(new THREE.BoxGeometry(0.06, 0.46, 0.4).translate(x, 0.23, 0), ir), tint(new THREE.BoxGeometry(0.06, 0.5, 0.05).rotateX(-0.18).translate(x, 0.72, -0.24), ir));
      this.benchMesh = new THREE.InstancedMesh(mergeGeometries(bp)!, new THREE.MeshLambertMaterial({ vertexColors: true }), 40); }
    for (const me of [this.bollMesh, this.boatMesh, this.benchMesh]) { me.count = 0; me.frustumCulled = false; me.castShadow = true; this.group.add(me); }
    for (const p of data.piers) this.buildPier(p);
  }

  /** vapur iskelesi: rıhtımdan çıkan köprü, yüzer duba, bekleme salonu ve isim levhası */
  private buildPier(p: Pier) {
    const g = new THREE.Group(); const y0 = Math.max(1.25, this.G.H(p.x - p.ox * 1.5, p.z - p.oz * 1.5));
    g.position.set(p.x + p.ox * QW, 0, p.z + p.oz * QW); g.rotation.y = Math.atan2(p.ox, p.oz); // yerel +z = denize doğru
    const box = (w: number, h: number, l: number, x: number, y: number, z: number, hex: string) => tint(new THREE.BoxGeometry(w, h, l).translate(x, y, z), hex);
    const parts: THREE.BufferGeometry[] = [];
    const DZ = 7, DW = 34, DL = 10, top = 1.05; // duba: rıhtımdan DZ m açıkta, kıyıya paralel
    for (const sx of [-9, 9]) { // iki iskele köprüsü (hafif eğimli), korkuluklu
      const br = new THREE.BoxGeometry(2.6, 0.18, DZ + 1.2); br.rotateX(Math.atan2(y0 + 0.2 - top, DZ + 1)); parts.push(tint(br.translate(sx, (y0 + 0.2 + top) / 2, DZ / 2 - 0.2), '#8a8478'));
      for (const e of [-1.25, 1.25]) { const r = new THREE.BoxGeometry(0.06, 0.06, DZ + 1.2); r.rotateX(Math.atan2(y0 + 0.2 - top, DZ + 1)); parts.push(tint(r.translate(sx + e, (y0 + 0.2 + top) / 2 + 1.0, DZ / 2 - 0.2), '#d8d4c8')); }
    }
    parts.push(box(DW, 1.5, DL, 0, top - 0.75, DZ + DL / 2, '#4b4f55'), box(DW + 0.3, 0.12, DL + 0.3, 0, top + 0.02, DZ + DL / 2, '#9a958c')); // duba ve üst kaplama
    for (let i = -3; i <= 3; i++) parts.push(tint(new THREE.TorusGeometry(0.45, 0.16, 5, 10).rotateY(0).translate(i * 5, top - 0.55, DZ + DL + 0.12), '#17181a')); // lastik usturmaçalar
    // bekleme salonu: açık renk gövde, kırmızı kiremit kırma çatı, saçak
    const HW = 22, HH = 3.3, HD = 5.2, hz = DZ + 3.4;
    parts.push(box(HW, HH, HD, 0, top + HH / 2, hz, '#ece6d6'), box(HW + 1.6, 0.16, HD + 1.8, 0, top + HH + 0.08, hz, '#d8d2c2'));
    { const roof = new THREE.CylinderGeometry(0.01, 1, 1.5, 4, 1).rotateY(Math.PI / 4); roof.scale((HW + 1.2) / Math.SQRT2, 1, (HD + 1.4) / Math.SQRT2); parts.push(tint(roof.translate(0, top + HH + 0.9, hz), '#a9482f')); }
    for (const sx of [-14.5, 14.5]) { parts.push(tint(new THREE.CylinderGeometry(0.06, 0.08, 5, 5).translate(sx, top + 2.5, DZ + 1.2), '#3b3d40')); } // lamba direkleri
    for (let i = -3; i <= 3; i++) for (const zz of [DZ + 0.2, DZ + DL - 0.2]) parts.push(tint(new THREE.CylinderGeometry(0.04, 0.04, 1, 4).translate(i * 5.5, top + 0.5, zz), '#d8d4c8')); // korkuluk dikmeleri
    for (const zz of [DZ + 0.2]) for (const [x0, x1] of [[-16.5, -10.4], [-7.6, 7.6], [10.4, 16.5]]) parts.push(box(x1 - x0, 0.05, 0.05, (x0 + x1) / 2, top + 1.0, zz, '#d8d4c8'));
    const body = new THREE.Mesh(mergeGeometries(parts)!, new THREE.MeshLambertMaterial({ vertexColors: true })); body.castShadow = true; body.receiveShadow = true; g.add(body);
    // camlar (gece ışıklı) ve levha
    const glass = new THREE.MeshLambertMaterial({ color: '#27323c', emissive: '#ffc070', emissiveIntensity: 0 }); this.lit.push(glass);
    const wg: THREE.BufferGeometry[] = []; for (let i = -4; i <= 4; i++) for (const s of [-1, 1]) wg.push(new THREE.PlaneGeometry(1.7, 1.5).rotateY(s > 0 ? 0 : Math.PI).translate(i * 2.3, top + 1.85, hz + s * (HD / 2 + 0.02)));
    g.add(new THREE.Mesh(mergeGeometries(wg)!, glass));
    const sm = new THREE.MeshLambertMaterial({ map: signTexture(p.name), emissive: '#ffffff', emissiveMap: null, emissiveIntensity: 0 }); sm.emissiveMap = sm.map; this.lit.push(sm);
    for (const s of [-1, 1]) { const sg = new THREE.Mesh(new THREE.PlaneGeometry(9, 1.7), sm); sg.position.set(0, top + HH + 2.6, hz + s * 0.12); sg.rotation.y = s > 0 ? 0 : Math.PI; g.add(sg); }
    g.add(new THREE.Mesh(new THREE.BoxGeometry(9.3, 1.9, 0.18).translate(0, top + HH + 2.6, hz), new THREE.MeshLambertMaterial({ color: '#0f2a48' })));
    for (const sx of [-3.8, 3.8]) g.add(new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.3, 0.14).translate(sx, top + HH + 1.2, hz), new THREE.MeshLambertMaterial({ color: '#0f2a48' })));
    const bm = new THREE.MeshBasicMaterial({ color: '#ffd9a0', transparent: true, opacity: 0 }); this.glow.push(bm);
    for (const sx of [-14.5, 14.5]) g.add(new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 6).translate(sx, top + 5.1, DZ + 1.2), bm));
    this.group.add(g);
  }
  /** vapurun yanaşacağı nokta (dubanın açığı) */
  berth(p: Pier, off = 30): [number, number] { return [p.x + p.ox * (QW + off), p.z + p.oz * (QW + off)]; }

  night(n: number) { for (const m of this.lit) m.emissiveIntensity = n * 0.9; for (const m of this.glow) { m.opacity = 0.25 + 0.75 * n; m.color.set(n > 0.3 ? '#ffd9a0' : '#d8d4c8'); } }
  update(px: number, pz: number, t: number) {
    this.boatMesh.position.y = Math.sin(t * 1.1) * 0.05;
    if (this.last.distanceTo(new THREE.Vector2(px, pz)) < 50) return; this.last.set(px, pz);
    const M = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), c = new THREE.Color();
    let a = 0; const B = this.bollards, r2 = 260 * 260;
    for (let i = 0; i < B.length && a < 260; i += 4) { const dx = B[i] - px, dz = B[i + 2] - pz; if (dx * dx + dz * dz > r2) continue; p.set(B[i], B[i + 1], B[i + 2]); q.identity(); M.compose(p, q, s); this.bollMesh.setMatrixAt(a++, M); }
    this.bollMesh.count = a; this.bollMesh.instanceMatrix.needsUpdate = true;
    { let e = 0; const E = this.benches; for (let i = 0; i < E.length && e < 40; i += 4) { const dx = E[i] - px, dz = E[i + 2] - pz; if (dx * dx + dz * dz > r2) continue; p.set(E[i], E[i + 1], E[i + 2]); q.setFromAxisAngle(up, E[i + 3]); M.compose(p, q, s); this.benchMesh.setMatrixAt(e++, M); } this.benchMesh.count = e; this.benchMesh.instanceMatrix.needsUpdate = true; }
    let b = 0; const T = this.boats, rb2 = 700 * 700, PAL = ['#ffffff', '#3a6ea5', '#c0392b', '#2a9d8f', '#f2e9d0', '#1f3a5f'];
    for (let i = 0; i < T.length && b < 48; i += 4) { const dx = T[i] - px, dz = T[i + 2] - pz; if (dx * dx + dz * dz > rb2) continue; p.set(T[i], 0, T[i + 2]); q.setFromAxisAngle(up, T[i + 3]); M.compose(p, q, s); this.boatMesh.setMatrixAt(b, M); this.boatMesh.setColorAt(b, c.set(PAL[(i / 4) % PAL.length])); b++; }
    this.boatMesh.count = b; this.boatMesh.instanceMatrix.needsUpdate = true; if (this.boatMesh.instanceColor) this.boatMesh.instanceColor.needsUpdate = true;
  }
}
