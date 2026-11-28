// Yollar: zemin üstüne aynı yükseklik fonksiyonuyla serilen asfalt şeritler, kaldırımlar, şerit çizgileri, köprü güverteleri.
// Ayrıca yol ağı (kavşaklar) ve "bu noktada hangi yol var" araması.
import * as THREE from 'three';
import type { Ground } from './ground';

export interface Way { i: number; code: number; width: number; lanes: number; oneway: boolean; bridge: boolean; pts: Float32Array; ys: Float32Array | null; hw: Float32Array | null; len: number; cum: Float32Array; name?: string; a: number; b: number }
export interface Node { id: number; x: number; z: number; ways: { w: number; end: 0 | 1 }[] }

export const DRIVE = new Set([1, 2, 3, 4, 5, 6, 7, 9]); // servis yolları (8) haritada var ama trafik yok
const SURF: Record<number, string> = { 1: '#665e5c', 2: '#665e5c', 3: '#6b6260', 4: '#786e6a', 5: '#665e5c', 6: '#978c84', 7: '#a2968b', 8: '#8f847c', 9: '#978c84' }; // eski haritanın sıcak yol tonları

export class Roads {
  ways: Way[] = [];
  nodes: Node[] = [];
  private grid = new Map<number, number[]>(); // 40 m hücre -> [way, seg, way, seg, ...]
  readonly CELL = 40;
  readonly group = new THREE.Group();
  readonly asphalt: THREE.MeshLambertMaterial;
  private chunks: { mesh: THREE.Group; cx: number; cz: number }[] = [];
  names: Record<string, string>;
  lamps: number[][];

  constructor(data: { ways: (number | number[])[][]; names: Record<string, string>; lamps: number[][] }, private G: Ground) {
    this.names = data.names; this.lamps = data.lamps;
    const nodeKey = new Map<string, number>();
    const nodeOf = (x: number, z: number) => {
      const k = `${Math.round(x * 2)},${Math.round(z * 2)}`;
      let id = nodeKey.get(k);
      if (id === undefined) { id = this.nodes.length; nodeKey.set(k, id); this.nodes.push({ id, x, z, ways: [] }); }
      return id;
    };
    data.ways.forEach((w, i) => {
      const raw = w[5] as number[]; let arr = raw;
      if (w[4] !== 1 && !w[7]) { // 5 m'ye böl: şerit zemini izlesin (daraltılmış yollar zaten 5 m noktalı gelir)
        arr = [];
        for (let k = 0; k + 2 < raw.length; k += 2) { const L = Math.hypot(raw[k + 2] - raw[k], raw[k + 3] - raw[k + 1]), m = Math.max(1, Math.ceil(L / 5)); for (let q = 0; q < m; q++) arr.push(raw[k] + (raw[k + 2] - raw[k]) * q / m, raw[k + 1] + (raw[k + 3] - raw[k + 1]) * q / m); }
        arr.push(raw[raw.length - 2], raw[raw.length - 1]);
      }
      const pts = new Float32Array(arr); const n = pts.length / 2;
      const cum = new Float32Array(n); for (let k = 1; k < n; k++) cum[k] = cum[k - 1] + Math.hypot(pts[2 * k] - pts[2 * k - 2], pts[2 * k + 1] - pts[2 * k - 1]);
      const way: Way = { i, code: w[0] as number, width: w[1] as number, lanes: w[2] as number, oneway: w[3] === 1, bridge: w[4] === 1, pts, ys: w[6] ? new Float32Array(w[6] as number[]) : null, hw: w[7] ? new Float32Array(w[7] as number[]) : null, len: cum[n - 1], cum, name: data.names[i], a: 0, b: 0 };
      way.a = nodeOf(pts[0], pts[1]); way.b = nodeOf(pts[2 * n - 2], pts[2 * n - 1]);
      this.nodes[way.a].ways.push({ w: i, end: 0 }); this.nodes[way.b].ways.push({ w: i, end: 1 });
      this.ways.push(way);
      for (let k = 0; k < n - 1; k++) {
        const mx = (pts[2 * k] + pts[2 * k + 2]) / 2, mz = (pts[2 * k + 1] + pts[2 * k + 3]) / 2;
        const c = this.cellKey(mx, mz); let l = this.grid.get(c); if (!l) this.grid.set(c, (l = [])); l.push(i, k);
      }
    });
    this.asphalt = new THREE.MeshLambertMaterial({ vertexColors: true, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 });
    this.buildMeshes();
  }
  private cellKey(x: number, z: number) { return Math.floor(x / this.CELL) * 100003 + Math.floor(z / this.CELL); }
  /** yolun k. noktasındaki yarı genişlik (daralan sokaklarda yerel) */
  halfAt(w: Way, k: number, t = 0) { return w.hw ? w.hw[k] + (w.hw[Math.min(k + 1, w.hw.length - 1)] - w.hw[k]) * t : w.width / 2; }
  /** yolun k. noktasındaki yükseklik */
  yAt(w: Way, k: number) { return w.ys ? w.ys[k] : this.G.H(w.pts[2 * k], w.pts[2 * k + 1]); }

  /** (x,z) çevresindeki en yakın yol parçası. maxD içinde yoksa null. yRef verilirse köprü/alt yol ayrımı yapar. */
  nearest(x: number, z: number, maxD = 20, filter?: (w: Way) => boolean, yRef?: number) {
    let best: { w: Way; k: number; t: number; d: number; px: number; pz: number; y: number; dx: number; dz: number } | null = null;
    const r = Math.ceil(maxD / this.CELL);
    const ci = Math.floor(x / this.CELL), cj = Math.floor(z / this.CELL);
    for (let a = -r; a <= r; a++) for (let b = -r; b <= r; b++) {
      const l = this.grid.get((ci + a) * 100003 + (cj + b)); if (!l) continue;
      for (let q = 0; q < l.length; q += 2) {
        const w = this.ways[l[q]], k = l[q + 1]; if (filter && !filter(w)) continue;
        const ax = w.pts[2 * k], az = w.pts[2 * k + 1], bx = w.pts[2 * k + 2] - ax, bz = w.pts[2 * k + 3] - az;
        const L2 = bx * bx + bz * bz || 1e-6; const t = Math.max(0, Math.min(1, ((x - ax) * bx + (z - az) * bz) / L2));
        const px = ax + bx * t, pz = az + bz * t; let d = Math.hypot(x - px, z - pz);
        const y = this.yAt(w, k) * (1 - t) + this.yAt(w, k + 1) * t;
        if (yRef !== undefined && Math.abs(y - yRef) > 4) continue;
        if (yRef !== undefined) d += Math.abs(y - yRef) * 0.5;
        if (d < maxD && (!best || d < best.d)) { const L = Math.sqrt(L2); best = { w, k, t, d, px, pz, y, dx: bx / L, dz: bz / L }; }
      }
    }
    return best;
  }
  /** köprü güvertesi (araba bunun üstündeyse yükseklik); yoksa null */
  deckAt(x: number, z: number, yRef: number): number | null {
    const n = this.nearest(x, z, 14, (w) => w.bridge, yRef);
    if (!n || n.d > n.w.width / 2 + 1.2) return null;
    return n.y;
  }

  // ---------- görünüm ----------
  private buildMeshes() {
    const CH = 500; const buckets = new Map<string, { road: number[][]; walk: number[][]; mark: number[][]; deck: number[][] }>();
    const bucket = (x: number, z: number) => { const k = `${Math.floor(x / CH)},${Math.floor(z / CH)}`; let b = buckets.get(k); if (!b) buckets.set(k, (b = { road: [[], []], walk: [[], []], mark: [[], []], deck: [[], []] })); return b; };
    const col = new THREE.Color(); const walkC = new THREE.Color('#b7aa9c'), markC = new THREE.Color('#f2ead8'), yel = new THREE.Color('#f2ead8'), deckC = new THREE.Color('#8f877b'), railC = new THREE.Color('#6f6a64');
    const quad = (arr: number[][], a: number[], b: number[], c: number[], d: number[], cc: THREE.Color) => { // a b sol-sağ (başlangıç), c d sol-sağ (bitiş)
      arr[0].push(...a, ...b, ...c, ...b, ...d, ...c); for (let i = 0; i < 6; i++) arr[1].push(cc.r, cc.g, cc.b);
    };
    // bir yolu (offset, genişlik) şeridi olarak döşe; s0..s1 metre aralığı
    const strip = (w: Way, off: number, wid: number, lift: number, cc: THREE.Color, target: 'road' | 'walk' | 'mark' | 'deck', s0 = 0, s1 = Infinity, dash = 0, rel = 0) => {
      const full = w.width / 2;
      const n = w.pts.length / 2; const P = w.pts;
      const side = (k: number) => { // nokta k'daki yan vektör (köşede ortalama)
        const k0 = Math.max(0, k - 1), k1 = Math.min(n - 1, k + 1);
        const dx = P[2 * k1] - P[2 * k0], dz = P[2 * k1 + 1] - P[2 * k0 + 1], l = Math.hypot(dx, dz) || 1;
        return [-dz / l, dx / l];
      };
      for (let k = 0; k < n - 1; k++) {
        const sa = w.cum[k], sb = w.cum[k + 1]; if (sb < s0 || sa > s1) continue;
        if (dash > 0 && Math.floor((sa + sb) / 2 / dash) % 2 === 1) continue;
        const ta = Math.max(0, (s0 - sa) / (sb - sa || 1)), tb = Math.min(1, (s1 - sa) / (sb - sa || 1));
        const pa = [P[2 * k] + (P[2 * k + 2] - P[2 * k]) * ta, P[2 * k + 1] + (P[2 * k + 3] - P[2 * k + 1]) * ta];
        const pb = [P[2 * k] + (P[2 * k + 2] - P[2 * k]) * tb, P[2 * k + 1] + (P[2 * k + 3] - P[2 * k + 1]) * tb];
        const na = side(k), nb = side(k + 1);
        const ya = w.ys ? this.yAt(w, k) * (1 - ta) + this.yAt(w, k + 1) * ta : null, yb = w.ys ? this.yAt(w, k) * (1 - tb) + this.yAt(w, k + 1) * tb : null;
        const pt = (p: number[], nn: number[], o: number, yy: number | null) => { const x = p[0] + nn[0] * o, z = p[1] + nn[1] * o; return [x, (yy ?? this.G.H(x, z)) + lift, z]; };
        const b = bucket(pa[0], pa[1]);
        // yerel yarı genişlik (binalar arasında daralan sokak): rel 1 = orantılı, rel 2 = yol kenarına göre
        let oa = off, ob = off, wa = wid, wb = wid;
        if (w.hw && rel) {
          const ha = w.hw[k] + (w.hw[k + 1] - w.hw[k]) * ta, hb = w.hw[k] + (w.hw[k + 1] - w.hw[k]) * tb;
          if (rel === 1) { oa *= ha / full; ob *= hb / full; wa *= ha / full; wb *= hb / full; }
          else { if (Math.min(ha, hb) < full - 0.3) continue; }
        }
        quad(b[target], pt(pa, na, oa - wa / 2, ya), pt(pa, na, oa + wa / 2, ya), pt(pb, nb, ob - wb / 2, yb), pt(pb, nb, ob + wb / 2, yb), cc);
      }
    };
    for (const w of this.ways) {
      col.set(SURF[w.code] || '#555'); const hw = w.width / 2;
      // köprü: güverte kalınlığı ve korkuluk
      if (w.bridge) {
        strip(w, 0, w.width + 1.6, 0.02, deckC, 'deck');
        this.bridgeSides(w, bucket, railC);
      }
      strip(w, 0, w.width, w.bridge ? 0.06 : 0.05, col, 'road', 0, Infinity, 0, 1);
      if (!w.bridge && w.code >= 2 && w.code <= 6) { strip(w, -(hw + 1.3), 2.6, 0.04, walkC, 'walk', 0, Infinity, 0, 2); strip(w, hw + 1.3, 2.6, 0.04, walkC, 'walk', 0, Infinity, 0, 2); }
      // çizgiler kavşak ağızlarında kesilir
      const cut = 9;
      if (w.code <= 4 && w.len > 2 * cut + 4) {
        const l = w.bridge ? 0.08 : 0.07;
        if (!w.oneway && w.lanes >= 2) strip(w, 0, 0.15, l, w.code <= 2 ? yel : markC, 'mark', cut, w.len - cut, w.code <= 2 ? 0 : 3);
        if (w.code <= 3) { strip(w, -(hw - 0.35), 0.15, l, markC, 'mark', cut, w.len - cut, 0, 2); strip(w, hw - 0.35, 0.15, l, markC, 'mark', cut, w.len - cut, 0, 2); }
        if (w.lanes >= 3) { const lw = w.width / w.lanes; for (let q = 1; q < w.lanes; q++) { const o = -hw + q * lw; if (Math.abs(o) < 0.3 && !w.oneway) continue; strip(w, o, 0.12, l, markC, 'mark', cut, w.len - cut, 3); } }
      }
    }
    const mk = (a: number[][], mat: THREE.Material, order: number, shadow = false) => {
      if (!a[0].length) return null;
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(a[0], 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(a[1], 3)); g.computeVertexNormals(); g.computeBoundingSphere();
      const m = new THREE.Mesh(g, mat); m.renderOrder = order; m.receiveShadow = true; m.castShadow = shadow; m.matrixAutoUpdate = false; return m;
    };
    const walkM = new THREE.MeshLambertMaterial({ vertexColors: true, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
    const markM = new THREE.MeshLambertMaterial({ vertexColors: true, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -8 });
    const deckM = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
    this.roadMat = this.asphalt; this.markMat = markM; this.walkMat = walkM;
    for (const [k, b] of buckets) {
      const [i, j] = k.split(',').map(Number); const grp = new THREE.Group(); grp.name = `roads_${k}`;
      for (const m of [mk(b.walk, walkM, 1), mk(b.road, this.asphalt, 2), mk(b.mark, markM, 3), mk(b.deck, deckM, 0, true)]) if (m) grp.add(m);
      this.group.add(grp); this.chunks.push({ mesh: grp, cx: (i + 0.5) * CH, cz: (j + 0.5) * CH });
    }
  }
  roadMat!: THREE.MeshLambertMaterial; markMat!: THREE.MeshLambertMaterial; walkMat!: THREE.MeshLambertMaterial;
  private bridgeSides(w: Way, bucket: (x: number, z: number) => { deck: number[][] }, c: THREE.Color) {
    const n = w.pts.length / 2, P = w.pts, hw = w.width / 2 + 0.8;
    for (let k = 0; k < n - 1; k++) {
      const dx = P[2 * k + 2] - P[2 * k], dz = P[2 * k + 3] - P[2 * k + 1], l = Math.hypot(dx, dz) || 1, nx = -dz / l, nz = dx / l;
      const ya = this.yAt(w, k), yb = this.yAt(w, k + 1); const arr = bucket(P[2 * k], P[2 * k + 1]).deck;
      for (const s of [-1, 1]) {
        const ax = P[2 * k] + nx * hw * s, az = P[2 * k + 1] + nz * hw * s, bx = P[2 * k + 2] + nx * hw * s, bz = P[2 * k + 3] + nz * hw * s;
        // korkuluk (1 m) ve güverte kenarı (1 m aşağı)
        const q = [[ax, ya - 1, az], [bx, yb - 1, bz], [ax, ya + 1, az], [bx, yb + 1, bz]];
        arr[0].push(...q[0], ...q[1], ...q[2], ...q[1], ...q[3], ...q[2]); for (let i = 0; i < 6; i++) arr[1].push(c.r, c.g, c.b);
      }
      // ayak: her ~45 m, su ya da zemine kadar
      if (Math.floor(w.cum[k] / 45) !== Math.floor(w.cum[k + 1] / 45)) {
        const g = this.G.H(P[2 * k], P[2 * k + 1]), y = ya - 1, bot = Math.min(g, 0) - 3; if (y - bot < 2.5) continue;
        const s = 1.4; const cx = P[2 * k], cz = P[2 * k + 1];
        const corners = [[-s, -s], [s, -s], [s, s], [-s, s]].map(([u, v]) => [cx + nx * u * (w.width / 4) + dx / l * v, cz + nz * u * (w.width / 4) + dz / l * v]);
        for (let e = 0; e < 4; e++) { const a = corners[e], b = corners[(e + 1) % 4]; arr[0].push(a[0], bot, a[1], b[0], bot, b[1], a[0], y, a[1], b[0], bot, b[1], b[0], y, b[1], a[0], y, a[1]); for (let i = 0; i < 6; i++) arr[1].push(c.r * 0.9, c.g * 0.9, c.b * 0.9); }
      }
    }
  }
  /** uzak yol parçalarını gizle */
  update(px: number, pz: number, far: number) {
    for (const c of this.chunks) c.mesh.visible = Math.hypot(c.cx - px, c.cz - pz) < far + 360;
  }
  /** kavşak mı (3+ yol) */
  isJunction(n: Node) { return n.ways.filter((r) => DRIVE.has(this.ways[r.w].code)).length >= 3; }
}
