// Kapalıçarşı (v0.5, baştan): gerçeğe yakın çarşı sokakları.
// 5 m'lik kemer açıklıkları: her açıklıkta bir dükkân, kırmızı-krem taşlı kemer, süslü krem tonoz, tepe pencereleri.
// 3B dükkânlar (tabela, camekân, dışarıda sergilenen mallar), ara sokaklar, bedesten salonları, açık hava han avlusu ve üst kat galerisi.
import { critterGeos } from '../critters';
import { Bag, box, cyl, sph, type Part } from '../street';
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Geo, rr, type Track, type Textures } from '../track';
import { F_HALL, F_GATE, F_HAN, F_GAL } from './kcpath';
import { F_BRIDGE } from '../trackpath';
import { toon } from '../characters';

const BAY = 5;        // kemer aralığı (m)
const FAC_H = 4.6;    // cephe (kemer üzengisi) yüksekliği
const SHOP_D = 2.4;   // bariyer dışından cepheye
const ALLEY_D = 16;   // ara sokak derinliği

const SHOPS = [
  { name: 'HALICI', bg: '#9e2b25', fg: '#f6d38a', goods: 'carpet' },
  { name: 'KUYUMCU', bg: '#1f4f8a', fg: '#ffd96a', goods: 'gold' },
  { name: 'FENERCİ', bg: '#2d6a4f', fg: '#ffe9a8', goods: 'lamp' },
  { name: 'BAHARATÇI', bg: '#a45a1c', fg: '#fff1d6', goods: 'spice' },
  { name: 'ÇİNİCİ', bg: '#1d3f6e', fg: '#ffffff', goods: 'plate' },
  { name: 'LOKUMCU', bg: '#b03a6a', fg: '#fff1f6', goods: 'candy' },
  { name: 'ŞALCI', bg: '#4b3a6e', fg: '#ffe9a8', goods: 'cloth' },
  { name: 'ANTİKACI', bg: '#5a4632', fg: '#f6d38a', goods: 'gold' },
  { name: 'BAKIRCI', bg: '#7a3a1c', fg: '#ffd9a8', goods: 'copper' },
  { name: 'DERİCİ', bg: '#3a2a1c', fg: '#f2d8a0', goods: 'cloth' },
  { name: 'TESPİHÇİ', bg: '#2a5a5a', fg: '#ffffff', goods: 'gold' },
  { name: 'ÇAYCI', bg: '#c8662d', fg: '#ffffff', goods: 'tea' },
] as const;
type Goods = (typeof SHOPS)[number]['goods'];

interface Bay { i0: number; i1: number; side: number; kind: 'shop' | 'alley'; shop: number }

export class Bazaar {
  skyMats: THREE.ShaderMaterial[] = [];
  readonly uTime = { value: 0 };
  readonly uPlayer = { value: new THREE.Vector3(1e5, 0, 1e5) };
  private T: Track['T'];
  private rnd: () => number;
  // dışarıda sergilenen mallar (örneklenmiş)
  private lampPos: { p: THREE.Vector3; c: number }[] = [];
  private platePos: THREE.Matrix4[] = []; private sackPos: { m: THREE.Matrix4; c: number }[] = [];
  private hang = new Geo(); // asılı halı ve şallar (doku atlası)
  private rich = new Map<number, Bag>(); // dükkân önü malları: 100 m'lik parçalar hâlinde (görüş dışı olanlar çizilmez)
  private boxes: THREE.BufferGeometry[] = []; private boxCols: number[] = [];
  constructor(private scene: THREE.Scene, private track: Track, private tex: Textures, private mobile: boolean) {
    this.T = track.T;
    let seed = 17; this.rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    this.scene.background = new THREE.Color(0x8fbbe6);
    const bays = this.planBays();
    this.streetFloor();
    this.facades(bays);
    this.vault();
    this.alleys(bays);
    this.halls();
    this.han();
    this.gates();
    this.streetLanterns();
    this.goodsMeshes();
    this.shoppers();
  }
  hAt(x: number, z: number) {
    const T = this.T; let bi = 0, bd = 1e18;
    for (let i = 0; i < T.n; i += 3) { const d = (x - T.x[i]) ** 2 + (z - T.z[i]) ** 2; if (d < bd) { bd = d; bi = i; } }
    return T.y[bi];
  }
  update(a: number, b?: number) { this.uTime.value = b ?? a; }

  // ---------- yardımcılar ----------
  private P(i: number, d: number, dy = 0) { const T = this.T, k = ((i % T.n) + T.n) % T.n; return [T.x[k] - T.tz[k] * d, T.y[k] + dy, T.z[k] + T.tx[k] * d] as const; }
  private V(i: number, d: number, dy = 0) { const p = this.P(i, d, dy); return new THREE.Vector3(p[0], p[1], p[2]); }
  private half(i: number) { return this.T.w[((i % this.T.n) + this.T.n) % this.T.n] / 2 + 1.7; }
  private street(i: number) { return !(this.T.flags[((i % this.T.n) + this.T.n) % this.T.n] & (F_HALL | F_GATE | F_HAN)); }
  private yaw(i: number) { const k = ((i % this.T.n) + this.T.n) % this.T.n; return Math.atan2(this.T.tz[k], this.T.tx[k]); }
  /** pist kenarında, yüzü piste dönük kutu (yerel: x boyuna, z dışa) */
  private boxAt(i: number, d: number, y: number, sx: number, sy: number, sz: number, col: number) {
    const b = new THREE.BoxGeometry(sx, sy, sz), p = this.P(i, d, y);
    b.rotateY(-this.yaw(i)); b.translate(p[0], p[1], p[2]);
    this.boxes.push(b.toNonIndexed()); this.boxCols.push(col);
  }

  private sky() {
    const g = new THREE.SphereGeometry(900, 24, 12);
    const m = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, depthTest: false, fog: false,
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }',
      fragmentShader: 'varying vec3 vP; void main(){ float h = vP.y; vec3 c = mix(vec3(0.98, 0.88, 0.78), vec3(0.55, 0.74, 0.95), smoothstep(0.0, 0.5, h)); c = mix(c, vec3(0.35, 0.55, 0.88), smoothstep(0.5, 1.0, h)); gl_FragColor = vec4(c, 1.0); }',
    });
    const s = new THREE.Mesh(g, m); s.renderOrder = -10; s.frustumCulled = false; this.scene.add(s);
    this.skyMats.push(m);
  }

  /** sokak boyunca 5 m'lik açıklıklar; her 6–8 açıklıkta bir ara sokak */
  private planBays(): Bay[] {
    const T = this.T, bays: Bay[] = [];
    for (const side of [-1, 1]) {
      let i = 0, sinceAlley = side > 0 ? 3 : 0;
      while (i < T.n) {
        if (!this.street(i)) { i++; continue; }
        let j = i; while (j < i + BAY && j < T.n && this.street(j)) j++;
        if (j - i < BAY) { i = j; continue; }
        sinceAlley++;
        const alley = sinceAlley > 6 && this.rnd() < 0.45;
        if (alley) sinceAlley = 0;
        bays.push({ i0: i, i1: j, side, kind: alley ? 'alley' : 'shop', shop: Math.floor(this.rnd() * SHOPS.length) });
        i = j;
      }
    }
    return bays;
  }

  private marble(light = '#efe6d8', line = '#d9ccb8') {
    return this.tex.make(128, 128, (c, w, h) => {
      c.fillStyle = light; c.fillRect(0, 0, w, h); c.strokeStyle = line; c.lineWidth = 2;
      for (let r = 0; r < 2; r++) for (let k = 0; k < 2; k++) c.strokeRect(k * 64 + (r % 2) * 32, r * 64, 64, 64);
      c.strokeStyle = 'rgba(160,140,120,0.25)'; c.lineWidth = 1; for (let k = 0; k < 8; k++) { c.beginPath(); c.moveTo((k * 37) % w, 0); c.bezierCurveTo(40, 40, 80, 70, (k * 53) % w, h); c.stroke(); }
    }, true);
  }

  /** bariyerle cephe arasındaki mermer şerit */
  private streetFloor() {
    const T = this.T, g = new Geo();
    for (let i = 0; i < T.n; i++) {
      const j = (i + 1) % T.n, f = T.flags[i] | T.flags[j];
      if (f & (F_HALL | F_HAN | F_BRIDGE)) continue;
      const a = this.half(i), b = this.half(j), ea = a + SHOP_D + 0.4, eb = b + SHOP_D + 0.4;
      g.quad(this.P(i, -ea, -0.02), this.P(j, -eb, -0.02), this.P(j, -b, -0.02), this.P(i, -a, -0.02), [0, 0], [0, 0.5], [0.5, 0.5], [0.5, 0]);
      g.quad(this.P(i, a, -0.02), this.P(j, b, -0.02), this.P(j, eb, -0.02), this.P(i, ea, -0.02), [0, 0], [0, 0.5], [0.5, 0.5], [0.5, 0]);
    }
    const m = new THREE.Mesh(g.build(), new THREE.MeshLambertMaterial({ map: this.marble() })); m.receiveShadow = true; this.scene.add(m);
  }

  /** dükkân cepheleri: her açıklıkta pilaster + tabela + camekân + dışarıdaki mallar */
  private facades(bays: Bay[]) {
    const signAtlas = this.signAtlas(), goodsAtlas = this.goodsAtlas();
    const wall = new Geo(), signs = new Geo(), glass = new Geo();
    const cream = 0xf1e7d6, stoneC = 0xd9ccb5, wood = 0x6a4030;
    for (const b of bays) {
      const { i0, i1, side } = b, im = Math.floor((i0 + i1) / 2);
      const d0 = side * (this.half(i0) + SHOP_D), d1 = side * (this.half(i1) + SHOP_D);
      // pilaster (açıklık başında) — taş ayak
      this.boxAt(i0, d0 - side * 0.2, FAC_H / 2, 0.7, FAC_H, 0.7, stoneC);
      if (b.kind === 'alley') continue;
      const sh = SHOPS[b.shop];
      // üst duvar (tabela üstü) ve alt kaide
      const quad = (g: Geo, dA: number, dB: number, y0: number, y1: number, u0: number, u1: number, v0: number, v1: number) => {
        const A = this.P(i0, dA, y0), B = this.P(i1, dB, y0), C = this.P(i1, dB, y1), D = this.P(i0, dA, y1);
        // piste bakan yüz: sağ taraftaki cephede sıra ters (yazı ayna olmasın)
        if (side > 0) g.quad(B, A, D, C, [u0, v0], [u1, v0], [u1, v1], [u0, v1]);
        else g.quad(A, B, C, D, [u0, v0], [u1, v0], [u1, v1], [u0, v1]);
      };
      quad(wall, d0, d1, 3.9, FAC_H, 0, 1, 0, 1);
      // tabela (doğru okunur)
      const k = b.shop, su = (k % 4) / 4, sv = 1 - (Math.floor(k / 4) + 1) / 3;
      const dS0 = d0 - side * 0.12, dS1 = d1 - side * 0.12;
      quad(signs, dS0, dS1, 3.2, 3.85, su + 0.01, su + 0.24, sv + 0.01, sv + 0.32);
      // camekân (0.35 m içeride)
      const g0 = d0 + side * 0.35, g1 = d1 + side * 0.35, gk = ['carpet', 'gold', 'lamp', 'spice', 'plate', 'candy', 'cloth', 'copper', 'tea'].indexOf(sh.goods);
      const gu = (gk % 3) / 3, gv = 1 - (Math.floor(gk / 3) + 1) / 3;
      quad(glass, g0, g1, 0.55, 3.15, gu + 0.01, gu + 0.32, gv + 0.01, gv + 0.32);
      // kapı söveleri (ahşap) ve kaide
      this.boxAt(i0 + 0.6, d0 + side * 0.15, 1.6, 0.18, 3.2, 0.5, wood); this.boxAt(i1 - 0.6, d1 + side * 0.15, 1.6, 0.18, 3.2, 0.5, wood);
      this.boxAt(im, (d0 + d1) / 2 + side * 0.15, 0.27, BAY - 1, 0.55, 0.5, stoneC);
      // tabela altında dükkân renginde saçak ve mozaik lambalar
      this.boxAt(im, (d0 + d1) / 2 - side * 0.22, 3.06, BAY - 1.3, 0.24, 0.07, parseInt(sh.bg.slice(1), 16));
      { const cols = [0xff5a5a, 0x4fb8ff, 0xffd23a, 0x5fe08a, 0xd07bff, 0xff9a3a]; for (const t of [0.3, 0.7]) this.lampPos.push({ p: this.V(i0 + (i1 - i0) * t, (d0 + d1) / 2 - side * 0.55, 2.62), c: cols[(i0 + Math.round(t * 10) + b.shop) % cols.length] }); }
      // dışarıda sergilenen mallar
      this.displayGoods(sh.goods, i0, i1, side, d0, d1);
      this.richGoods(sh.goods, im, (d0 + d1) / 2 - side * 0.78, side, i0 + b.shop);
    }
    const mk = (g: Geo, m: THREE.Material) => { const me = new THREE.Mesh(g.build(), m); me.receiveShadow = true; this.scene.add(me); return me; };
    mk(wall, new THREE.MeshLambertMaterial({ color: cream, side: THREE.DoubleSide }));
    mk(signs, new THREE.MeshLambertMaterial({ map: signAtlas, emissive: 0x2a2018, side: THREE.DoubleSide }));
    mk(glass, new THREE.MeshLambertMaterial({ map: goodsAtlas, emissive: 0x3a2a1a, side: THREE.DoubleSide }));
  }

  private displayGoods(g: Goods, i0: number, i1: number, side: number, d0: number, d1: number) {
    const im = (i0 + i1) / 2, dm = (d0 + d1) / 2;
    if (g === 'lamp') { // tabela önünden sarkan fener demeti
      const cols = [0xff6b6b, 0x6bc0ff, 0xffd54a, 0x7bdc9a, 0xd38bff, 0xff9f5a];
      for (let k = 0; k < 7; k++) { const t = (k + 0.5) / 7, i = i0 + (i1 - i0) * t; this.lampPos.push({ p: this.V(i, dm - side * (0.7 + (k % 2) * 0.35), 2.2 + (k % 3) * 0.35), c: cols[(k + i0) % cols.length] }); }
    } else if (g === 'carpet' || g === 'cloth') { // cephe yanlarında asılı halı / şal
      for (const t of [0.12, 0.88]) {
        const i = i0 + (i1 - i0) * t, wv = g === 'carpet' ? 1.1 : 0.5, k = Math.floor(this.rnd() * 6);
        const u0 = (k % 3) / 3, v0 = 1 - (Math.floor(k / 3) + 1) / 2, A = this.P(i - wv, dm - side * 0.3, 0.5), B = this.P(i + wv, dm - side * 0.3, 0.5), C = this.P(i + wv, dm - side * 0.3, 3.1), D = this.P(i - wv, dm - side * 0.3, 3.1);
        if (side > 0) this.hang.quad(B, A, D, C, [u0, v0], [u0 + 0.33, v0], [u0 + 0.33, v0 + 0.5], [u0, v0 + 0.5]); else this.hang.quad(A, B, C, D, [u0, v0], [u0 + 0.33, v0], [u0 + 0.33, v0 + 0.5], [u0, v0 + 0.5]);
      }
    } else if (g === 'plate' || g === 'copper') { // raf üstünde tabaklar / bakır kaplar
      this.boxAt(im, dm - side * 0.6, 1.0, 3.2, 0.08, 0.6, 0x6a4030);
      this.boxAt(im, dm - side * 0.6, 1.8, 3.2, 0.08, 0.6, 0x6a4030);
      const m = new THREE.Matrix4(), q = new THREE.Quaternion();
      for (let k = 0; k < 10; k++) { const t = (k % 5 + 0.5) / 5, i = i0 + 0.9 + (i1 - i0 - 1.8) * t, p = this.V(i, dm - side * 0.6, k < 5 ? 1.3 : 2.1); q.setFromEuler(new THREE.Euler(Math.PI / 2 - 0.25 * side, 0, -this.yaw(Math.round(i)), 'YXZ')); m.compose(p, q, new THREE.Vector3(1, 1, 1)); this.platePos.push(m.clone()); }
    } else if (g === 'tea') { // yerde çuvallar
      const cols = [0x3a8a2a, 0x9a4a1c, 0xe07a2d, 0x2a6a3a];
      const m = new THREE.Matrix4();
      for (let k = 0; k < 2; k++) { const t = k ? 0.9 : 0.1, i = i0 + 0.6 + (i1 - i0 - 1.2) * t; m.makeTranslation(...this.P(i, dm - side * 0.7, 0)); this.sackPos.push({ m: m.clone(), c: cols[k % cols.length] }); }
    }
  }

  private signAtlas() {
    const W = 1024, H = 384, cw = W / 4, ch = H / 3;
    return this.tex.make(W, H, (c) => {
      SHOPS.forEach((s, k) => {
        const x = (k % 4) * cw, y = Math.floor(k / 4) * ch;
        c.fillStyle = s.bg; c.fillRect(x, y, cw, ch);
        c.strokeStyle = s.fg; c.lineWidth = 5; rr(c, x + 8, y + 8, cw - 16, ch - 16, 10); c.stroke();
        c.fillStyle = s.fg; let fs = 54; c.font = `900 ${fs}px ui-rounded, system-ui, sans-serif`;
        while (c.measureText(s.name).width > cw - 96 && fs > 18) { fs -= 2; c.font = `900 ${fs}px ui-rounded, system-ui, sans-serif`; }
        c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(s.name, x + cw / 2, y + ch / 2 + 3);
      });
    });
  }

  private goodsAtlas() {
    const W = 768, H = 768, cw = 256, ch = 256;
    const kinds: Goods[] = ['carpet', 'gold', 'lamp', 'spice', 'plate', 'candy', 'cloth', 'copper', 'tea'];
    return this.tex.make(W, H, (c) => {
      kinds.forEach((g, idx) => {
        const x0 = (idx % 3) * cw, y0 = Math.floor(idx / 3) * ch;
        c.save(); c.translate(x0, y0);
        const grd = c.createLinearGradient(0, 0, 0, ch); grd.addColorStop(0, '#f6e2bf'); grd.addColorStop(1, '#c9a27a');
        c.fillStyle = grd; c.fillRect(0, 0, cw, ch);
        const R = (a: number) => Math.abs(Math.sin(idx * 13.7 + a * 7.1));
        if (g === 'carpet') for (let q = 0; q < 4; q++) { const cx = 10 + q * 60; c.fillStyle = ['#b8322c', '#2f4f8a', '#c98a2c', '#6a2c5a'][q]; c.fillRect(cx, 14, 54, ch - 28); c.strokeStyle = '#f2d8a0'; c.lineWidth = 3; c.strokeRect(cx + 6, 22, 42, ch - 44); c.beginPath(); c.moveTo(cx + 27, 40); c.lineTo(cx + 46, ch / 2); c.lineTo(cx + 27, ch - 40); c.lineTo(cx + 8, ch / 2); c.closePath(); c.stroke(); }
        if (g === 'gold') { c.fillStyle = '#3a1f3a'; c.fillRect(10, 10, cw - 20, ch - 20); for (let q = 0; q < 30; q++) { c.fillStyle = q % 3 ? '#ffd54a' : '#fff3b0'; c.beginPath(); c.arc(26 + (q % 6) * 41, 34 + Math.floor(q / 6) * 46, 8 + R(q) * 7, 0, 7); c.fill(); } }
        if (g === 'lamp') for (let q = 0; q < 14; q++) { const cx = 26 + (q % 5) * 50, cy = 40 + Math.floor(q / 5) * 72 + (q % 2) * 12; c.strokeStyle = '#b08a4a'; c.lineWidth = 2; c.beginPath(); c.moveTo(cx, 0); c.lineTo(cx, cy - 20); c.stroke(); c.fillStyle = ['#ff6b6b', '#6bc0ff', '#ffd54a', '#7bdc9a', '#d38bff'][q % 5]; c.beginPath(); c.ellipse(cx, cy, 17, 22, 0, 0, 7); c.fill(); c.fillStyle = 'rgba(255,255,230,0.75)'; c.beginPath(); c.arc(cx - 5, cy - 7, 5, 0, 7); c.fill(); }
        if (g === 'spice') for (let q = 0; q < 10; q++) { const cx = 26 + (q % 5) * 50, by = q < 5 ? ch - 14 : ch - 110; c.fillStyle = ['#d9461c', '#f2b31c', '#7a3a1c', '#c7a01c', '#9a2c1c', '#5a7a2c'][q % 6]; c.beginPath(); c.moveTo(cx - 22, by); c.lineTo(cx, by - 60 - R(q) * 20); c.lineTo(cx + 22, by); c.fill(); }
        if (g === 'plate') for (let q = 0; q < 12; q++) { const cx = 36 + (q % 4) * 62, cy = 44 + Math.floor(q / 4) * 80; c.fillStyle = '#f7f3ea'; c.beginPath(); c.arc(cx, cy, 27, 0, 7); c.fill(); c.strokeStyle = '#2a5fa8'; c.lineWidth = 5; c.beginPath(); c.arc(cx, cy, 18, 0, 7); c.stroke(); c.fillStyle = q % 2 ? '#c8302c' : '#2a8a6a'; c.beginPath(); c.arc(cx, cy, 7, 0, 7); c.fill(); }
        if (g === 'candy') for (let q = 0; q < 36; q++) { c.fillStyle = ['#ff8fb1', '#ffe08a', '#a8e6cf', '#ffffff', '#c8a0e8'][q % 5]; c.fillRect(12 + (q % 6) * 39, 16 + Math.floor(q / 6) * 39, 33, 33); }
        if (g === 'cloth') for (let q = 0; q < 9; q++) { c.fillStyle = ['#e85d75', '#5d8be8', '#e8c35d', '#5de8a5', '#b15de8', '#e8865d', '#ffffff', '#2a8a8a', '#c83a3a'][q]; c.fillRect(8 + q * 27, 8, 23, ch - 16 - R(q) * 40); }
        if (g === 'copper') for (let q = 0; q < 8; q++) { const cx = 40 + (q % 4) * 58, cy = q < 4 ? 90 : 200; c.fillStyle = q % 2 ? '#c87533' : '#e0954a'; c.beginPath(); c.ellipse(cx, cy, 24, 30, 0, 0, 7); c.fill(); c.fillRect(cx - 10, cy - 46, 20, 18); }
        if (g === 'tea') for (let q = 0; q < 12; q++) { const cx = 30 + (q % 6) * 40, cy = q < 6 ? 120 : 220; c.fillStyle = ['#3a6a2a', '#7a3a1c', '#c8662d', '#2a4a2a'][q % 4]; c.fillRect(cx - 15, cy - 60, 30, 60); c.fillStyle = '#f2d8a0'; c.fillRect(cx - 15, cy - 44, 30, 10); }
        c.strokeStyle = '#6a4030'; c.lineWidth = 10; c.strokeRect(0, 0, cw, ch);
        c.restore();
      });
    });
  }

  /** süslü krem tonoz, kırmızı-krem taşlı kemerler, tepe pencereleri */
  private vault() {
    const T = this.T, seg = 14, g = new Geo(), win = new Geo();
    const orn = this.tex.make(256, 256, (c, w, h) => {
      c.fillStyle = '#f7f0e2'; c.fillRect(0, 0, w, h);
      c.strokeStyle = '#2f6a8a'; c.lineWidth = 3;
      for (let k = 0; k < 2; k++) { const cx = 64 + k * 128, cy = 128; c.beginPath(); for (let a = 0; a < 8; a++) { const t = (a / 8) * Math.PI * 2; c.moveTo(cx, cy); c.quadraticCurveTo(cx + Math.cos(t + 0.4) * 40, cy + Math.sin(t + 0.4) * 40, cx + Math.cos(t) * 54, cy + Math.sin(t) * 54); } c.stroke(); c.fillStyle = '#c8402c'; c.beginPath(); c.arc(cx, cy, 10, 0, 7); c.fill(); c.strokeStyle = '#d4a85a'; c.beginPath(); c.arc(cx, cy, 30, 0, 7); c.stroke(); c.strokeStyle = '#2f6a8a'; }
      c.fillStyle = '#7aa35a'; for (let k = 0; k < 16; k++) { c.beginPath(); c.ellipse(k * 16 + 8, 14, 4, 8, 0.5, 0, 7); c.fill(); c.beginPath(); c.ellipse(k * 16 + 8, h - 14, 4, 8, -0.5, 0, 7); c.fill(); }
      c.fillStyle = '#c8402c'; c.fillRect(0, 0, w, 4); c.fillRect(0, h - 4, w, 4);
    }, true);
    const vous = this.tex.make(256, 32, (c, w, h) => { for (let k = 0; k < 16; k++) { c.fillStyle = k % 2 ? '#b8322c' : '#f6ecdc'; c.fillRect(k * 16, 0, 16, h); } c.fillStyle = '#2f6a8a'; c.fillRect(0, 0, w, 3); c.fillRect(0, h - 3, w, 3); }, true);
    const arches: THREE.BufferGeometry[] = [];
    let acc = 0;
    for (let i = 0; i < T.n; i++) {
      const j = (i + 1) % T.n;
      if (!this.street(i) || !this.street(j) || (T.flags[i] & F_BRIDGE)) continue;
      const ri = this.half(i) + SHOP_D, rj = this.half(j) + SHOP_D;
      const pt = (ii: number, r: number, th: number, off = 0) => { const c = Math.cos(th) * (r + off), hgt = FAC_H + Math.sin(th) * (r * 0.5 + off); return [T.x[ii] - T.tz[ii] * c, T.y[ii] + hgt, T.z[ii] + T.tx[ii] * c] as const; };
      for (let k = 0; k < seg; k++) {
        const t0 = (k / seg) * Math.PI, t1 = ((k + 1) / seg) * Math.PI;
        g.quad(pt(i, ri, t1), pt(j, rj, t1), pt(j, rj, t0), pt(i, ri, t0), [k / seg, acc / BAY], [k / seg, (acc + 1) / BAY], [(k + 1) / seg, (acc + 1) / BAY], [(k + 1) / seg, acc / BAY]);
      }
      // her açıklığın ortasında iki yanda kemerli tepe penceresi (parlak)
      if (i % BAY === 2) for (const th of [0.62, Math.PI - 0.62]) {
        const p = pt(i, ri, th, -0.05), q = pt(j + 1, rj, th, -0.05), p2 = pt(i, ri, th + (th < 1.5 ? 0.22 : -0.22), -0.05), q2 = pt(j + 1, rj, th + (th < 1.5 ? 0.22 : -0.22), -0.05);
        win.quad(p, q, q2, p2, [0, 0], [1, 0], [1, 1], [0, 1]);
      }
      acc++;
      // kemer: her 5 m
      if (i % BAY === 0) {
        const pts: THREE.Vector3[] = [];
        for (let k = 0; k <= seg; k++) { const p = pt(i, ri, (k / seg) * Math.PI, -0.25); pts.push(new THREE.Vector3(p[0], p[1], p[2])); }
        const tube = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.32, 6, false);
        arches.push(tube);
      }
    }
    const vm = new THREE.Mesh(g.build(), new THREE.MeshLambertMaterial({ map: orn, side: THREE.DoubleSide })); this.scene.add(vm);
    this.scene.add(new THREE.Mesh(win.build(), new THREE.MeshBasicMaterial({ color: 0xfff0cc, side: THREE.DoubleSide })));
    if (arches.length) { const vt = vous; vt.repeat.set(1, 1); const am = new THREE.Mesh(mergeGeometries(arches), new THREE.MeshLambertMaterial({ map: vt })); this.scene.add(am); }
  }

  /** ara sokaklar: cepheden dışa doğru kısa, dükkânlı, tonozlu geçitler */
  private alleys(bays: Bay[]) {
    const floor = new Geo(), walls = new Geo(), ends = new Geo(), vault = new Geo();
    const signAtlas = this.signAtlas();
    for (const b of bays) {
      if (b.kind !== 'alley') continue;
      const { i0, i1, side } = b, w0 = this.half(i0) + SHOP_D, w1 = this.half(i1) + SHOP_D;
      const A0 = this.V(i0, side * w0), A1 = this.V(i1, side * w1);
      const out = new THREE.Vector3(-this.T.tz[i0] * side, 0, this.T.tx[i0] * side);
      const B0 = A0.clone().addScaledVector(out, ALLEY_D), B1 = A1.clone().addScaledVector(out, ALLEY_D);
      const v = (p: THREE.Vector3, dy = 0) => [p.x, p.y + dy, p.z] as const;
      floor.quad(v(A0, -0.02), v(A1, -0.02), v(B1, -0.02), v(B0, -0.02), [0, 0], [1, 0], [1, 3], [0, 3]);
      // yan duvarlar: dükkân dizisi dokusu
      const sideWall = (P: THREE.Vector3, Q: THREE.Vector3, flip: boolean) => { const q = [v(P), v(Q), v(Q, FAC_H), v(P, FAC_H)] as const; if (flip) walls.quad(q[1], q[0], q[3], q[2], [0, 0], [3, 0], [3, 1], [0, 1]); else walls.quad(q[0], q[1], q[2], q[3], [0, 0], [3, 0], [3, 1], [0, 1]); };
      sideWall(A0, B0, side > 0); sideWall(A1, B1, side < 0);
      // uç: ışıklı dükkân
      const k = Math.floor(this.rnd() * SHOPS.length), su = (k % 4) / 4, sv = 1 - (Math.floor(k / 4) + 1) / 3;
      const e = [v(B0), v(B1), v(B1, FAC_H), v(B0, FAC_H)] as const;
      if (side > 0) ends.quad(e[0], e[1], e[2], e[3], [0, 0], [1, 0], [1, 1], [0, 1]); else ends.quad(e[1], e[0], e[3], e[2], [0, 0], [1, 0], [1, 1], [0, 1]);
      void su; void sv;
      // tonoz
      const mid = (p: THREE.Vector3, q: THREE.Vector3) => p.clone().add(q).multiplyScalar(0.5);
      const segs = 8;
      for (let s = 0; s < segs; s++) {
        const t0 = (s / segs) * Math.PI, t1 = ((s + 1) / segs) * Math.PI;
        const ring = (P: THREE.Vector3, Q: THREE.Vector3, t: number) => { const m = mid(P, Q), hw = P.distanceTo(Q) / 2, dir = Q.clone().sub(P).normalize(); return [m.x + dir.x * Math.cos(t) * hw, m.y + FAC_H + Math.sin(t) * hw * 0.6, m.z + dir.z * Math.cos(t) * hw] as const; };
        vault.quad(ring(A0, A1, t1), ring(B0, B1, t1), ring(B0, B1, t0), ring(A0, A1, t0), [s / segs, 0], [s / segs, 3], [(s + 1) / segs, 3], [(s + 1) / segs, 0]);
      }
      // ara sokak feneri
      this.lampPos.push({ p: mid(A0, B1).add(new THREE.Vector3(0, 3.6, 0)), c: 0xffd54a });
    }
    const shopRow = this.tex.make(512, 128, (c, w, h) => {
      for (let k = 0; k < 3; k++) { const x = k * 170 + 4; c.fillStyle = '#f1e7d6'; c.fillRect(x, 0, 166, h); c.fillStyle = ['#9e2b25', '#1f4f8a', '#2d6a4f'][k]; c.fillRect(x + 10, 6, 146, 20); c.fillStyle = '#4a2a1c'; c.fillRect(x + 14, 34, 138, 80); c.fillStyle = 'rgba(255,214,150,0.35)'; c.fillRect(x + 14, 34, 138, 30); }
      c.fillStyle = '#d9ccb5'; for (let k = 0; k < 4; k++) c.fillRect(k * 170 - 4, 0, 10, h);
    }, true);
    const mk = (g: Geo, m: THREE.Material) => { const me = new THREE.Mesh(g.build(), m); me.receiveShadow = true; this.scene.add(me); };
    mk(floor, new THREE.MeshLambertMaterial({ map: this.marble() }));
    mk(walls, new THREE.MeshLambertMaterial({ map: shopRow, side: THREE.DoubleSide }));
    mk(ends, new THREE.MeshLambertMaterial({ map: shopRow, emissive: 0x403020 }));
    mk(vault, new THREE.MeshLambertMaterial({ color: 0xf3ead8, side: THREE.DoubleSide }));
    void signAtlas;
  }

  /** bedesten salonları */
  private halls() {
    const T = this.T, ranges: [number, number][] = [];
    let a = -1;
    for (let i = 0; i < T.n; i++) { const h = T.flags[i] & F_HALL; if (h && a < 0) a = i; if (!h && a >= 0) { ranges.push([a, i - 1]); a = -1; } }
    const stone = this.tex.make(256, 256, (c, w, h) => {
      c.fillStyle = '#ebe0cc'; c.fillRect(0, 0, w, h); c.strokeStyle = '#d2c3a8'; c.lineWidth = 3;
      for (let r = 0; r < 8; r++) for (let k = 0; k < 4; k++) c.strokeRect(k * 64 + (r % 2) * 32, r * 32, 64, 32);
      c.fillStyle = '#8a5a3a'; rr(c, 84, 90, 88, 150, 44); c.fill(); c.fillStyle = '#f6d9a0'; rr(c, 94, 100, 68, 70, 34); c.fill();
    }, true);
    const wallMat = new THREE.MeshLambertMaterial({ map: stone }), pierMat = new THREE.MeshLambertMaterial({ color: 0xe0d2b8 });
    const domeTex = this.tex.make(256, 256, (c, w, h) => { c.fillStyle = '#f8f2e6'; c.fillRect(0, 0, w, h); c.strokeStyle = '#2f6a8a'; c.lineWidth = 5; c.beginPath(); c.arc(w / 2, h / 2, 100, 0, 7); c.stroke(); c.strokeStyle = '#c8402c'; c.lineWidth = 3; for (let k = 0; k < 12; k++) { const t = (k / 12) * Math.PI * 2; c.beginPath(); c.moveTo(w / 2 + Math.cos(t) * 40, h / 2 + Math.sin(t) * 40); c.lineTo(w / 2 + Math.cos(t) * 92, h / 2 + Math.sin(t) * 92); c.stroke(); } });
    const domeMat = new THREE.MeshLambertMaterial({ map: domeTex, emissive: 0x504436, side: THREE.DoubleSide });
    for (const [i0, i1] of ranges) {
      const c0 = this.track.point(i0 * (this.track.L / T.n), 0), c1 = this.track.point(i1 * (this.track.L / T.n), 0);
      const mid = c0.clone().add(c1).multiplyScalar(0.5), len = c0.distanceTo(c1) + 8, wid = T.w[i0] + 2 * 12.5, H = 9.5, yaw = Math.atan2(c1.z - c0.z, c1.x - c0.x);
      const grp = new THREE.Group(); grp.position.set(mid.x, Math.min(c0.y, c1.y) - 0.05, mid.z); grp.rotation.y = -yaw;
      const fl = new THREE.Mesh(new THREE.PlaneGeometry(len, wid), new THREE.MeshLambertMaterial({ map: this.marble('#e8dcc6', '#cdbd9f') })); fl.rotation.x = -Math.PI / 2; fl.position.y = -0.04; fl.receiveShadow = true; grp.add(fl);
      const wall = (L: number, x: number, z: number, ry: number, gap: number) => {
        const sh = new THREE.Shape(); sh.moveTo(-L / 2, 0); sh.lineTo(L / 2, 0); sh.lineTo(L / 2, H); sh.lineTo(-L / 2, H); sh.lineTo(-L / 2, 0);
        if (gap > 0) { const hole = new THREE.Path(); hole.moveTo(-gap / 2, 0); hole.lineTo(gap / 2, 0); hole.lineTo(gap / 2, 4.6); hole.absarc(0, 4.6, gap / 2, 0, Math.PI, false); hole.lineTo(-gap / 2, 0); sh.holes.push(hole); }
        const geo = new THREE.ExtrudeGeometry(sh, { depth: 1.2, bevelEnabled: false }); geo.translate(0, 0, -0.6);
        const uv = geo.attributes.uv as THREE.BufferAttribute; for (let k = 0; k < uv.count; k++) uv.setXY(k, uv.getX(k) / 8, uv.getY(k) / 8);
        const m = new THREE.Mesh(geo, wallMat); m.position.set(x, 0, z); m.rotation.y = ry; m.receiveShadow = true; grp.add(m);
      };
      wall(len, 0, -wid / 2, 0, 0); wall(len, 0, wid / 2, 0, 0);
      wall(wid + 1.2, -len / 2, 0, Math.PI / 2, T.w[i0] + 3.8); wall(wid + 1.2, len / 2, 0, Math.PI / 2, T.w[i1] + 3.8);
      const nx = Math.max(2, Math.round(len / 10)), nz = 3, dx = len / nx, dz = wid / nz;
      for (let ix = 1; ix < nx; ix++) for (const zz of [-wid / 2 + dz, wid / 2 - dz]) {
        const p = new THREE.Mesh(new THREE.BoxGeometry(1.4, H, 1.4), pierMat); p.position.set(-len / 2 + ix * dx, H / 2, zz); p.castShadow = true; grp.add(p);
      }
      for (let ix = 0; ix < nx; ix++) for (let iz = 0; iz < nz; iz++) {
        const r = Math.min(dx, dz) / 2, d = new THREE.Mesh(new THREE.SphereGeometry(r, 18, 9, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
        d.position.set(-len / 2 + (ix + 0.5) * dx, H, -wid / 2 + (iz + 0.5) * dz); grp.add(d);
        const ocu = new THREE.Mesh(new THREE.CircleGeometry(r * 0.2, 12), new THREE.MeshBasicMaterial({ color: 0xfff6dc })); ocu.rotation.x = Math.PI / 2; ocu.position.set(d.position.x, H + r - 0.05, d.position.z); grp.add(ocu);
        const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.2, 6, 24), toon(0xb8322c)); ring.rotation.x = Math.PI / 2; ring.position.copy(d.position); grp.add(ring);
      }
      const ceil = new THREE.Mesh(new THREE.PlaneGeometry(len, wid), new THREE.MeshLambertMaterial({ map: domeTex, color: 0xf3ead8, emissive: 0x6a5e4c, side: THREE.DoubleSide })); (ceil.material as THREE.MeshLambertMaterial).map = domeTex.clone(); (ceil.material as THREE.MeshLambertMaterial).map!.wrapS = (ceil.material as THREE.MeshLambertMaterial).map!.wrapT = THREE.RepeatWrapping; (ceil.material as THREE.MeshLambertMaterial).map!.repeat.set(nx, nz); ceil.rotation.x = Math.PI / 2; ceil.position.y = H; grp.add(ceil);
      for (let k = 0; k < 12; k++) {
        const side = k % 2 ? 1 : -1, x = -len / 2 + 4 + (k / 12) * (len - 8), z = side * (T.w[i0] / 2 + 6.5 + (k % 3) * 1.6);
        const stack = new THREE.Group();
        for (let q = 0; q < 4; q++) { const cp = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.22, 1.8), toon([0xb8322c, 0x2f4f8a, 0xc98a2c, 0x6a2c5a, 0x2a7a5a][(k + q) % 5])); cp.position.y = 0.11 + q * 0.22; cp.rotation.y = q * 0.15; stack.add(cp); }
        stack.position.set(x, 0, z); grp.add(stack);
      }
      this.scene.add(grp);
    }
  }

  /** açık hava han avlusu: iki katlı revaklar, şadırvan, çınarlar; üst kat galerisi revakın içinden geçer */
  private han() {
    const T = this.T; let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9, y = 1e9;
    for (let i = 0; i < T.n; i++) if (T.flags[i] & F_HAN) { x0 = Math.min(x0, T.x[i]); x1 = Math.max(x1, T.x[i]); z0 = Math.min(z0, T.z[i]); z1 = Math.max(z1, T.z[i]); if (!(T.flags[i] & F_BRIDGE)) y = Math.min(y, T.y[i]); }
    if (x0 > x1) return;
    const pad = 11, X0 = x0 - pad, X1 = x1 + pad, Z0 = z0 - pad, Z1 = z1 + 2, cx = (X0 + X1) / 2, cz = (Z0 + Z1) / 2, W = X1 - X0, D = Z1 - Z0;
    const grp = new THREE.Group(); grp.position.set(cx, y - 0.05, cz);
    const court = new THREE.Mesh(new THREE.PlaneGeometry(W, D), new THREE.MeshLambertMaterial({ map: this.marble('#ddd2bf', '#bfb39c') })); court.rotation.x = -Math.PI / 2; court.receiveShadow = true; grp.add(court);
    // revak cepheleri: alt kat sivri kemerler, üst kat pencereli galeri
    const arcade = this.tex.make(512, 256, (c, w, h) => {
      c.fillStyle = '#e9dcc4'; c.fillRect(0, 0, w, h);
      c.fillStyle = '#c45a3a'; c.fillRect(0, 118, w, 10); c.fillStyle = '#b14a2e'; c.fillRect(0, 0, w, 14);
      for (let k = 0; k < 4; k++) {
        const x = k * 128 + 64;
        c.fillStyle = '#4a2e22'; c.beginPath(); c.moveTo(x - 40, 256); c.lineTo(x - 40, 186); c.quadraticCurveTo(x - 40, 140, x, 132); c.quadraticCurveTo(x + 40, 140, x + 40, 186); c.lineTo(x + 40, 256); c.fill();
        c.strokeStyle = '#f6ecdc'; c.lineWidth = 6; c.stroke();
        c.fillStyle = '#3a2a24'; c.beginPath(); c.moveTo(x - 34, 110); c.lineTo(x - 34, 60); c.quadraticCurveTo(x - 34, 26, x, 22); c.quadraticCurveTo(x + 34, 26, x + 34, 60); c.lineTo(x + 34, 110); c.fill();
        c.strokeStyle = '#b8322c'; c.lineWidth = 5; c.stroke();
      }
    }, true);
    const H = 12, am = new THREE.MeshLambertMaterial({ map: arcade });
    const side = (L: number, x: number, z: number, ry: number, gaps: number[]) => {
      const sh = new THREE.Shape(); sh.moveTo(-L / 2, 0); sh.lineTo(L / 2, 0); sh.lineTo(L / 2, H); sh.lineTo(-L / 2, H); sh.lineTo(-L / 2, 0);
      for (const gx of gaps) { const hole = new THREE.Path(), gw = 8; hole.moveTo(gx - gw, 0); hole.lineTo(gx + gw, 0); hole.lineTo(gx + gw, 5); hole.absarc(gx, 5, gw, 0, Math.PI, false); hole.lineTo(gx - gw, 0); sh.holes.push(hole); }
      const geo = new THREE.ExtrudeGeometry(sh, { depth: 1.5, bevelEnabled: false }); geo.translate(0, 0, -0.75);
      const uv = geo.attributes.uv as THREE.BufferAttribute; for (let k = 0; k < uv.count; k++) uv.setXY(k, (uv.getX(k) + L / 2) / 16, uv.getY(k) / H);
      const m = new THREE.Mesh(geo, am); m.position.set(x, 0, z); m.rotation.y = ry; m.receiveShadow = true; grp.add(m);
      // saçak
      const eave = new THREE.Mesh(new THREE.BoxGeometry(L + 2, 0.5, 3), toon(0xc45a3a)); eave.position.set(x, H + 0.25, z); eave.rotation.y = ry; grp.add(eave);
    };
    // kapılar güney duvarında (pistin girip çıktığı yerler)
    const gates: number[] = [];
    for (let i = 0; i < T.n; i++) if ((T.flags[i] & F_GATE) && Math.abs(T.z[i] - Z1) < 14 && T.x[i] > X0 - 5 && T.x[i] < X1 + 5) gates.push(T.x[i] - cx);
    const uniq = gates.filter((g, k) => gates.findIndex((h) => Math.abs(h - g) < 6) === k);
    side(W, 0, -D / 2, 0, []); side(W, 0, D / 2, Math.PI, uniq.map((g) => -g)); side(D, -W / 2, 0, Math.PI / 2, []); side(D, W / 2, 0, -Math.PI / 2, []);
    // şadırvan (pistin ortasında kalan boşlukta)
    let sx = 0, sz = 0, sn = 0; for (let i = 0; i < T.n; i++) if ((T.flags[i] & F_HAN) && !(T.flags[i] & F_BRIDGE)) { sx += T.x[i]; sz += T.z[i]; sn++; }
    const f = new THREE.Group();
    const basin = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.6, 0.9, 8), toon(0xe6dcc8)); basin.position.y = 0.45; f.add(basin);
    const water = new THREE.Mesh(new THREE.CylinderGeometry(3.8, 3.8, 0.1, 8), new THREE.MeshLambertMaterial({ color: 0x6cb6ea, emissive: 0x1a3a5a })); water.position.y = 0.9; f.add(water);
    for (let k = 0; k < 8; k++) { const a = (k / 8) * Math.PI * 2, col = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, 4.2, 8), toon(0xf2ece0)); col.position.set(Math.cos(a) * 3.6, 3, Math.sin(a) * 3.6); f.add(col); }
    const roof = new THREE.Mesh(new THREE.ConeGeometry(5.2, 2.4, 8), toon(0x7a8c9a)); roof.position.y = 6.3; f.add(roof);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(1.4, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), toon(0x7a8c9a)); dome.position.y = 7.4; f.add(dome);
    const fin = new THREE.Mesh(new THREE.ConeGeometry(0.18, 1.2, 6), toon(0xf2c14e)); fin.position.y = 9.2; f.add(fin);
    f.position.set(T.tower.x - cx, 0, T.tower.z - cz); f.scale.setScalar(1.45); void sx; void sz; f.traverse((o) => { if ((o as THREE.Mesh).isMesh) o.castShadow = true; }); grp.add(f);
    // çınarlar
    const fx0 = T.tower.x - cx, fz0 = T.tower.z - cz;
    // şadırvanın çevresinde bahçe: çim halka ve çınarlar
    const lawn = new THREE.Mesh(new THREE.RingGeometry(7.2, 11.6, 40), new THREE.MeshLambertMaterial({ color: 0x8cc66a })); lawn.rotation.x = -Math.PI / 2; lawn.position.set(fx0, 0.03, fz0); grp.add(lawn);
    const path = new THREE.Mesh(new THREE.RingGeometry(11.6, 12.6, 40), new THREE.MeshLambertMaterial({ color: 0xc9b89c })); path.rotation.x = -Math.PI / 2; path.position.set(fx0, 0.04, fz0); grp.add(path);
    for (const [tx, tz] of [[-W / 2 + 5, -D / 2 + 5], [W / 2 - 5, -D / 2 + 5], [fx0 + 7, fz0 - 6], [fx0 - 6, fz0 + 7], [fx0 + 20, fz0 + 14], [fx0 + 34, fz0 - 2]]) {
      const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.7, 7, 8), toon(0x8a6a5a)); tr.position.set(tx, 3.5, tz); grp.add(tr);
      for (let k = 0; k < 4; k++) { const c = new THREE.Mesh(new THREE.IcosahedronGeometry(3.4, 0), new THREE.MeshLambertMaterial({ color: [0x5fb873, 0x6cc27a, 0x4fa86a][k % 3], flatShading: true })); c.position.set(tx + Math.cos(k * 2) * 2.2, 8 + (k % 2) * 1.5, tz + Math.sin(k * 2) * 2.2); c.castShadow = true; grp.add(c); }
    }
    this.scene.add(grp);
  }

  /** kemerli kapılar + yeşil kitabe */
  private gates() {
    const T = this.T;
    const board = this.tex.make(512, 128, (c, w, h) => {
      c.fillStyle = '#1f5a3a'; rr(c, 4, 4, w - 8, h - 8, 20); c.fill(); c.strokeStyle = '#e6c15a'; c.lineWidth = 6; rr(c, 14, 14, w - 28, h - 28, 14); c.stroke();
      c.fillStyle = '#f2d06a'; c.font = '900 56px ui-rounded, system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('KAPALIÇARŞI', w / 2, h / 2 + 3);
    });
    let last = -99;
    for (let i = 0; i < T.n; i++) {
      if (!(T.flags[i] & F_GATE) || i - last < 30) continue; last = i;
      const g = new THREE.Group(), r = T.w[i] / 2 + 1.9, W = r + SHOP_D + 1.2, H = FAC_H + 5.5;
      const sh = new THREE.Shape(); sh.moveTo(-W, -0.2); sh.lineTo(-r, -0.2); sh.lineTo(-r, 4.4); sh.absarc(0, 4.4, r, Math.PI, 0, true); sh.lineTo(r, -0.2); sh.lineTo(W, -0.2); sh.lineTo(W, H); sh.lineTo(-W, H); sh.lineTo(-W, -0.2);
      const geo = new THREE.ExtrudeGeometry(sh, { depth: 1.6, bevelEnabled: false }); geo.translate(0, 0, -0.8);
      g.add(new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: 0xece0c8 })));
      for (let k = 0; k < 15; k++) { const th = Math.PI - (k / 14) * Math.PI, v = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.75, 1.7), toon(k % 2 ? 0xb8322c : 0xf6ecdc)); v.position.set(Math.cos(th) * (r + 0.38), 4.4 + Math.sin(th) * (r + 0.38), 0); v.rotation.z = th - Math.PI / 2; g.add(v); }
      for (const sd of [-1, 1]) { const b = new THREE.Mesh(new THREE.PlaneGeometry(7, 1.75), new THREE.MeshBasicMaterial({ map: board, transparent: true })); b.position.set(0, H - 1.5, sd * 0.82); if (sd < 0) b.rotation.y = Math.PI; g.add(b); }
      g.position.set(T.x[i], T.y[i], T.z[i]); g.rotation.y = -Math.atan2(T.tz[i], T.tx[i]) + Math.PI / 2;
      this.scene.add(g);
    }
  }

  /** sokak ortasında asılı Osmanlı fenerleri (her iki açıklıkta) */
  private streetLanterns() {
    const T = this.T, pos: THREE.Vector3[] = [], chain: number[] = [];
    for (let i = BAY; i < T.n; i += BAY * 2) {
      if (!this.street(i) || (T.flags[i] & F_BRIDGE)) continue;
      const crown = FAC_H + (this.half(i) + SHOP_D) * 0.5;
      const p = this.V(i, 0, crown - 2.6); pos.push(p); chain.push(p.x, p.y + 0.7, p.z, p.x, T.y[i] + crown - 0.2, p.z);
    }
    const frame = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.42, 0.3, 0.9, 6), new THREE.MeshLambertMaterial({ color: 0x3a2a20 }), pos.length);
    const glow = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.36, 0.26, 0.8, 6), new THREE.MeshBasicMaterial({ color: 0xffe2a0 }), pos.length);
    const cap = new THREE.InstancedMesh(new THREE.ConeGeometry(0.5, 0.45, 6), new THREE.MeshLambertMaterial({ color: 0xc8a15a }), pos.length);
    const m = new THREE.Matrix4();
    pos.forEach((p, k) => { m.makeTranslation(p.x, p.y, p.z); frame.setMatrixAt(k, m); glow.setMatrixAt(k, m); m.makeTranslation(p.x, p.y + 0.65, p.z); cap.setMatrixAt(k, m); });
    (glow.material as THREE.MeshBasicMaterial).transparent = true; (glow.material as THREE.MeshBasicMaterial).opacity = 0.95;
    this.scene.add(glow, cap);
    const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(chain, 3));
    this.scene.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0x3a2a20 })));
    void frame;
  }

  /** dışarıdaki mallar: fenerler, tabaklar, çuvallar, asılı halılar, raflar */
  /** dükkân önünde üç boyutlu mallar: halı ruloları, altın vitrini, baharat tepeleri, lokum, kumaş topları, bakır kazanlar, semaver */
  private richGoods(g: Goods, i: number, d: number, side: number, k: number) {
    const P: Part[] = [], t = -side, WOOD = 0x7a4a2c, pick = <T,>(a: T[], n: number) => a[((n % a.length) + a.length) % a.length];
    const CARPET = [0xc8322c, 0x2456b8, 0xe0962c, 0x8a2c7a, 0x1f9a6a, 0xe8553a], BRIGHT = [0xff3b4e, 0xffc21a, 0x1e9bff, 0x2fc46b, 0xb06bff, 0xff7ab0, 0xff8a1f, 0x23c7c0];
    const lying = (r: number, L: number, x: number, y: number, z: number, c: number) => { const q = new THREE.CylinderGeometry(r, r, L, 7); q.rotateZ(Math.PI / 2); q.translate(x, y, z); P.push([q, c]); };
    if (g === 'carpet') {
      for (let n = 0; n < 6; n++) { const row = n < 3 ? 0 : n < 5 ? 1 : 2, col = n < 3 ? n : n < 5 ? n - 3 : 0; lying(0.2, 1.7, -0.95, 0.2 + row * 0.35, (col - (2 - row) / 2) * 0.4 * 1 + t * 0.1, pick(CARPET, k + n)); }
      for (let n = 0; n < 4; n++) P.push([cyl(0.15, 0.15, 1.9, 0.75 + n * 0.36, 0.95, -t * 0.25 + (n % 2) * 0.12, 7), pick(CARPET, k + n + 2)], [cyl(0.16, 0.16, 0.08, 0.75 + n * 0.36, 1.9, -t * 0.25 + (n % 2) * 0.12, 7), 0xf6e0b0]);
    } else if (g === 'gold') {
      P.push([box(3.4, 0.85, 0.62, 0, 0.42, 0), 0x4a2c1c], [box(3.3, 0.34, 0.56, 0, 1.02, 0), 0xbfeaff], [box(3.44, 0.05, 0.66, 0, 1.2, 0), 0xffd84a], [box(3.44, 0.05, 0.66, 0, 0.86, 0), 0xffd84a]);
      for (let n = 0; n < 9; n++) { const x = -1.4 + n * 0.35; if (n % 3 === 1) { const r = new THREE.TorusGeometry(0.09, 0.03, 5, 9); r.rotateX(1.1); r.translate(x, 1.0, 0); P.push([r, 0xffd21a]); } else P.push([sph(0.075, x, 0.98, t * 0.05, 1, 0.7, 1, 6, 4), n % 3 ? 0xffd21a : pick([0xff3b4e, 0x23c7c0, 0xb06bff], n + k)]); }
      for (const x of [-1.2, 1.2]) { const cone = new THREE.ConeGeometry(0.2, 0.55, 8); cone.translate(x, 1.5, -t * 0.08); const n2 = new THREE.TorusGeometry(0.14, 0.03, 5, 10); n2.rotateX(1.2); n2.translate(x, 1.5, 0); P.push([cone, 0x5a1f3a], [n2, 0xffd21a], [sph(0.05, x, 1.38, t * 0.13), 0xff3b4e]); }
    } else if (g === 'spice') {
      const SP = [0xe8401c, 0xffb81c, 0x8a4a1c, 0xd9c01c, 0xb82c1c, 0x4a9a2c, 0xe87a1c];
      P.push([box(3.5, 0.55, 0.8, 0, 0.3, 0), WOOD], [box(3.6, 0.1, 0.9, 0, 0.6, 0), 0x9a6a3c]);
      for (let n = 0; n < 7; n++) { const x = -1.5 + n * 0.5, c = pick(SP, n + k); const cone = new THREE.ConeGeometry(0.25, 0.46, 8); cone.translate(x, 0.98, 0); P.push([cyl(0.25, 0.22, 0.14, x, 0.7, 0, 8), 0xe8d8b8], [cone, c]); }
      for (let n = 0; n < 8; n++) P.push([sph(0.07, -1.6 + n * 0.12, 2.5 - n * 0.14, -t * 0.4, 1, 1.5, 1, 5, 4), 0xd9201c], [sph(0.07, 1.6 - n * 0.12, 2.5 - n * 0.14, -t * 0.4, 1, 1.5, 1, 5, 4), n % 2 ? 0xffd21a : 0xd9201c]);
    } else if (g === 'candy') {
      for (let r = 0; r < 3; r++) {
        P.push([box(3.2, 0.08, 0.5, 0, 0.5 + r * 0.42, -t * r * 0.22), 0xffffff], [box(0.08, 0.5 + r * 0.42, 0.08, -1.5, (0.5 + r * 0.42) / 2, -t * r * 0.22), 0xd9a23a], [box(0.08, 0.5 + r * 0.42, 0.08, 1.5, (0.5 + r * 0.42) / 2, -t * r * 0.22), 0xd9a23a]);
        for (let n = 0; n < 9; n++) P.push([box(0.22, 0.14 + ((n + r) % 3) * 0.06, 0.26, -1.36 + n * 0.34, 0.62 + r * 0.42, -t * r * 0.22), pick([0xff8fb1, 0xffe14a, 0x8fe6c0, 0xffffff, 0xff5a7a, 0xb8f06a, 0xc79bff], n * 2 + r + k)]);
      }
    } else if (g === 'cloth') {
      P.push([box(2.2, 0.5, 0.7, -0.6, 0.25, 0), WOOD]);
      for (let n = 0; n < 8; n++) P.push([cyl(0.14, 0.14, 1.5 + (n % 3) * 0.2, -1.5 + n * 0.26, 1.0 + (n % 3) * 0.1, ((n % 2) - 0.5) * 0.3, 7), pick(BRIGHT, n + k)]);
      for (let n = 0; n < 4; n++) lying(0.15, 1.2, 1.2, 0.16 + (n >> 1) * 0.3, ((n % 2) - 0.5) * 0.34, pick(BRIGHT, n + k + 3));
    } else if (g === 'copper') {
      const CU = 0xe8833a, CU2 = 0xffb060;
      for (const [x, r] of [[-1.3, 0.42], [-0.3, 0.3], [1.2, 0.36]] as const) { const rim = new THREE.TorusGeometry(r * 0.92, 0.045, 5, 12); rim.rotateX(Math.PI / 2); rim.translate(x, r * 1.25, 0); P.push([sph(r, x, r * 0.72, 0, 1, 0.75, 1, 8, 5), CU], [rim, CU2]); }
      P.push([cyl(0.1, 0.16, 0.5, 0.45, 0.25, t * 0.2, 7), CU2], [cyl(0.05, 0.1, 0.22, 0.45, 0.6, t * 0.2, 6), CU]);
      for (let n = 0; n < 5; n++) { const pan = new THREE.CylinderGeometry(0.24 - (n % 2) * 0.05, 0.24 - (n % 2) * 0.05, 0.04, 10); pan.rotateX(Math.PI / 2); pan.translate(-1.5 + n * 0.75, 2.45 - (n % 2) * 0.2, -t * 0.42); P.push([pan, n % 2 ? CU2 : CU]); }
    } else if (g === 'tea') {
      P.push([cyl(0.36, 0.36, 0.06, 0, 0.62, 0, 10), 0xd9a23a], [cyl(0.05, 0.2, 0.6, 0, 0.3, 0, 6), WOOD]);
      P.push([cyl(0.17, 0.2, 0.42, 0, 0.88, 0, 8), 0xffc23a], [sph(0.15, 0, 1.14, 0, 1, 0.8, 1, 7, 4), 0xffc23a], [cyl(0.09, 0.11, 0.18, 0, 1.3, 0, 7), 0xffffff]);
      for (const [x, z] of [[0.24, 0.12], [-0.22, 0.14], [0.05, -0.26]] as const) P.push([cyl(0.05, 0.04, 0.1, x, 0.7, z * t, 6), 0xd9301c]);
      for (const x of [-0.8, 0.8]) P.push([cyl(0.2, 0.2, 0.06, x, 0.42, t * 0.15, 8), 0xe8401c], [cyl(0.04, 0.14, 0.4, x, 0.2, t * 0.15, 5), WOOD]);
      for (let n = 0; n < 6; n++) P.push([box(0.4, 0.26, 0.34, 1.5 - (n % 2) * 0.02, 0.13 + (n >> 1) * 0.27, ((n % 2) - 0.5) * 0.4), pick([0x2fa84a, 0xe8401c, 0xffc21a, 0x1e7ad0], n + k)]);
    } else if (g === 'plate') {
      for (const [x, c] of [[-1.55, 0x1e6fd0], [1.55, 0x23b7c0], [0, 0xffffff]] as const) P.push([sph(0.3, x, 0.34, 0, 1, 1.1, 1, 8, 5), c], [cyl(0.1, 0.16, 0.3, x, 0.78, 0, 7), c], [cyl(0.15, 0.1, 0.07, x, 0.96, 0, 7), 0xffd21a]);
    } else if (g === 'lamp') {
      for (const x of [-1.5, 1.5]) { P.push([cyl(0.04, 0.2, 1.7, x, 0.85, 0, 6), 0xb08a4a]); for (let n = 0; n < 3; n++) P.push([sph(0.17, x + (n - 1) * 0.3, 1.75 - Math.abs(n - 1) * 0.25, 0, 1, 1.25, 1, 7, 5), pick(BRIGHT, n + k)]); }
    }
    if (!P.length) return;
    const key = Math.floor(i / 100); let bag = this.rich.get(key); if (!bag) this.rich.set(key, (bag = new Bag()));
    bag.put(P, this.V(i, d, 0), this.yaw(i));
  }

  private goodsMeshes() {
    for (const bag of this.rich.values()) { const me = bag.mesh(false); this.scene.add(me); }
    if (this.lampPos.length) {
      const g = new THREE.SphereGeometry(0.26, 7, 5); g.scale(1, 1.25, 1);
      const byCol = new Map<number, THREE.Vector3[]>(); for (const l of this.lampPos) (byCol.get(l.c) || byCol.set(l.c, []).get(l.c)!).push(l.p);
      const m = new THREE.Matrix4();
      for (const [c, list] of byCol) { const im = new THREE.InstancedMesh(g, new THREE.MeshBasicMaterial({ color: c }), list.length); list.forEach((p, k) => { m.makeTranslation(p.x, p.y, p.z); im.setMatrixAt(k, m); }); this.scene.add(im); }
      const chain: number[] = []; for (const l of this.lampPos) chain.push(l.p.x, l.p.y + 0.3, l.p.z, l.p.x, l.p.y + 1.1, l.p.z);
      const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(chain, 3)); this.scene.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0xb08a4a })));
    }
    if (this.platePos.length) {
      const pg = new THREE.CylinderGeometry(0.28, 0.2, 0.06, 14);
      const im = new THREE.InstancedMesh(pg, new THREE.MeshLambertMaterial({ map: this.tex.make(64, 64, (c) => { c.fillStyle = '#f7f3ea'; c.fillRect(0, 0, 64, 64); c.strokeStyle = '#2a5fa8'; c.lineWidth = 6; c.beginPath(); c.arc(32, 32, 20, 0, 7); c.stroke(); c.fillStyle = '#c8302c'; c.beginPath(); c.arc(32, 32, 8, 0, 7); c.fill(); }) }), this.platePos.length);
      this.platePos.forEach((mm, k) => im.setMatrixAt(k, mm)); this.scene.add(im);
    }
    if (this.sackPos.length) {
      const sg = mergeGeometries([((g) => { g.translate(0, 0.35, 0); return g; })(new THREE.CylinderGeometry(0.32, 0.38, 0.7, 10)), ((g) => { g.translate(0, 0.78, 0); return g; })(new THREE.ConeGeometry(0.33, 0.3, 10))]);
      const im = new THREE.InstancedMesh(sg, new THREE.MeshLambertMaterial({ color: 0xffffff }), this.sackPos.length), c = new THREE.Color();
      this.sackPos.forEach((s, k) => { im.setMatrixAt(k, s.m); im.setColorAt(k, c.setHex(s.c)); }); im.castShadow = true; this.scene.add(im);
    }
    const carpetAtlas = this.tex.make(512, 256, (c) => {
      ['#b8322c', '#2f4f8a', '#c98a2c', '#6a2c5a', '#2a7a5a', '#d2553a'].forEach((col, k) => {
        const x = (k % 3) * 170 + 4, y = Math.floor(k / 3) * 128 + 4, w = 162, h = 120;
        c.fillStyle = col; c.fillRect(x, y, w, h); c.strokeStyle = '#f2d8a0'; c.lineWidth = 6; c.strokeRect(x + 8, y + 8, w - 16, h - 16);
        c.fillStyle = '#f2d8a0'; c.beginPath(); c.moveTo(x + w / 2, y + 22); c.lineTo(x + w - 30, y + h / 2); c.lineTo(x + w / 2, y + h - 22); c.lineTo(x + 30, y + h / 2); c.closePath(); c.fill();
        c.fillStyle = col; c.beginPath(); c.arc(x + w / 2, y + h / 2, 16, 0, 7); c.fill();
      });
    });
    if (this.hang.p.length) this.scene.add(new THREE.Mesh(this.hang.build(), new THREE.MeshLambertMaterial({ map: carpetAtlas, side: THREE.DoubleSide })));
    // kutular (pilaster, söve, raf, kaide): renge göre birleştir
    const byCol = new Map<number, THREE.BufferGeometry[]>();
    this.boxes.forEach((b, k) => { const c = this.boxCols[k]; (byCol.get(c) || byCol.set(c, []).get(c)!).push(b); });
    for (const [c, list] of byCol) { const me = new THREE.Mesh(mergeGeometries(list), new THREE.MeshLambertMaterial({ color: c })); me.castShadow = !this.mobile; me.receiveShadow = true; this.scene.add(me); }
  }

  /** dükkân önlerinde alışveriş yapan martılar ve kediler */
  private shoppers() {
    const T = this.T, spots: { p: THREE.Vector3; yaw: number; k: number }[] = [];
    for (let i = 0; i < T.n; i += this.mobile ? 8 : 5) {
      const f = T.flags[i]; if (f & F_BRIDGE) continue;
      const hall = f & (F_HALL | F_HAN);
      for (const sd of [-1, 1]) {
        if (((i / 5) | 0) % 3 === (sd > 0 ? 0 : 1)) continue;
        const d = sd * (this.half(i) + (hall ? 3 + (i % 5) : 1.0)), p = this.P(i, d, 0);
        spots.push({ p: new THREE.Vector3(p[0], p[1], p[2]), yaw: Math.atan2(-T.tx[i] * sd, T.tz[i] * sd), k: (i + (sd > 0 ? 1 : 0)) % 3 });
      }
    }
    const G = critterGeos();
    const mat = (c: number) => { const m = new THREE.MeshLambertMaterial({ color: c }); m.onBeforeCompile = (sh) => { sh.uniforms.uTime = this.uTime; sh.uniforms.uPlayer = this.uPlayer; sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime; uniform vec3 uPlayer;').replace('#include <begin_vertex>', '#include <begin_vertex>\nfloat ph = instanceMatrix[3].x * 0.71 + instanceMatrix[3].z * 1.31; float cheer = 1.0 - smoothstep(8.0, 26.0, distance(instanceMatrix[3].xz, uPlayer.xz));\ntransformed.y += abs(sin(uTime * (4.0 + cheer * 5.0) + ph)) * (0.12 + cheer * 0.5);'); }; return m; };
    const kinds: [THREE.BufferGeometry, number][][] = [
      [[G.gull, 0xffffff], [G.beak, 0xffb300], [G.wing, 0xaab6c6], [G.gullEyes, 0x1f1a26]],
      [[G.cat, 0xff9a3c], [G.catWhite, 0xfff6e8], [G.catEyes, 0x1f1a26]],
      [[G.cat, 0xa7a3a0], [G.catWhite, 0xfff6e8], [G.catEyes, 0x1f1a26]],
    ];
    kinds.forEach((parts, ki) => {
      const list = spots.filter((s) => s.k === ki), m = new THREE.Matrix4(), q = new THREE.Quaternion();
      for (const [g, c] of parts) {
        const im = new THREE.InstancedMesh(g, mat(c), list.length);
        list.forEach((s, k) => { q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -s.yaw); m.compose(s.p, q, new THREE.Vector3(1, 1, 1)); im.setMatrixAt(k, m); });
        im.castShadow = !this.mobile; this.scene.add(im);
      }
    });
    void F_GAL;
  }
}
