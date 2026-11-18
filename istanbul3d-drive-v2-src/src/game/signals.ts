// Kavşaklar ve trafik ışıkları: ana yolların buluştuğu kavşaklarda iki fazlı döngü (yeşil → sarı → kırmızı).
// Yaya geçidi ve durma çizgisi de burada çizilir. Oyuncu kırmızıda geçerse olay bildirilir.
import * as THREE from 'three';
import type { Roads, Node } from '../world/roads';
import { DRIVE } from '../world/roads';
import type { Ground } from '../world/ground';

export type Light = 'g' | 'y' | 'r';
interface Approach { w: number; end: 0 | 1; dx: number; dz: number; hw: number; phase: 0 | 1 }
interface Sig { node: Node; ap: Approach[]; stop: number; off: number; cycle: number }

const G_A = 13, G_B = 11, Y = 3, ALLRED = 1.5;

export class Signals {
  readonly list: Sig[] = []; readonly byNode = new Map<number, Sig>();
  private t = 0;
  private poles: THREE.InstancedMesh; private heads: THREE.InstancedMesh; private lamps: THREE.InstancedMesh; private stripes: THREE.InstancedMesh;
  private shown: { s: Sig; a: Approach; i: number }[] = [];
  private last = new THREE.Vector2(1e9, 1e9);
  private redState = new Map<number, { inside: boolean; light: Light }>();
  onRedRun: (() => void) | null = null;
  constructor(private R: Roads, private G: Ground, scene: THREE.Scene) {
    for (const node of R.nodes) {
      const ws = node.ways.filter((r) => DRIVE.has(R.ways[r.w].code) && R.ways[r.w].code !== 7);
      if (ws.length < 3) continue;
      if (!ws.some((r) => R.ways[r.w].code <= 4)) continue;
      const ap: Approach[] = ws.map((r) => {
        const w = R.ways[r.w], n = w.pts.length / 2;
        // kavşaktan dışa doğru yön (ilk ~8 m)
        let k = r.end === 0 ? 0 : n - 1; const step = r.end === 0 ? 1 : -1; let dx = 0, dz = 0;
        for (let q = 0; q < 3 && k + step >= 0 && k + step < n; q++, k += step) { dx = w.pts[2 * (k + step)] - node.x; dz = w.pts[2 * (k + step) + 1] - node.z; }
        const l = Math.hypot(dx, dz) || 1; return { w: r.w, end: r.end, dx: dx / l, dz: dz / l, hw: w.width / 2, phase: 0 as 0 | 1 };
      });
      // iki faz: ilk yaklaşımla aynı eksende olanlar (±40°) A, diğerleri B
      const a0 = Math.atan2(ap[0].dz, ap[0].dx);
      let nb = 0; for (const a of ap) { let d = Math.abs(((Math.atan2(a.dz, a.dx) - a0) % Math.PI + Math.PI) % Math.PI); d = Math.min(d, Math.PI - d); a.phase = d < 0.7 ? 0 : 1; nb += a.phase; }
      if (nb === 0 || nb === ap.length) continue;
      const stop = Math.max(...ap.map((a) => a.hw)) + 4;
      const s: Sig = { node, ap, stop, off: (node.id * 7.31) % 30, cycle: G_A + G_B + 2 * (Y + ALLRED) };
      this.list.push(s); this.byNode.set(node.id, s);
    }
    const mat = new THREE.MeshLambertMaterial({ color: '#30343a' });
    this.poles = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.08, 0.1, 3.4, 6).translate(0, 1.7, 0), mat, 600);
    this.heads = new THREE.InstancedMesh(new THREE.BoxGeometry(0.34, 1.0, 0.26).translate(0, 3.6, 0), mat, 600);
    this.lamps = new THREE.InstancedMesh(new THREE.SphereGeometry(0.11, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), 1800);
    this.stripes = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 0.03, 1), new THREE.MeshLambertMaterial({ color: '#ecebe4', polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -8 }), 4000);
    for (const m of [this.poles, this.heads, this.lamps, this.stripes]) { m.count = 0; m.frustumCulled = false; scene.add(m); }
    this.poles.castShadow = this.heads.castShadow = true; this.stripes.receiveShadow = true;
  }
  /** kavşak node'unda, w yolundan gelen araç için ışık */
  state(nodeId: number, w: number): Light {
    const s = this.byNode.get(nodeId); if (!s) return 'g';
    const a = s.ap.find((q) => q.w === w); if (!a) return 'g';
    return this.phaseLight(s, a.phase);
  }
  stopDist(nodeId: number) { return this.byNode.get(nodeId)?.stop ?? 0; }
  private phaseLight(s: Sig, ph: 0 | 1): Light {
    const t = (this.t + s.off) % s.cycle;
    const aG = G_A, aY = aG + Y, aR = aY + ALLRED, bG = aR + G_B, bY = bG + Y;
    if (ph === 0) return t < aG ? 'g' : t < aY ? 'y' : 'r';
    return t >= aR && t < bG ? 'g' : t >= bG && t < bY ? 'y' : 'r';
  }
  private rebuild(px: number, pz: number) {
    this.shown = []; let p = 0, st = 0;
    const M = new THREE.Matrix4(), q = new THREE.Quaternion(), S = new THREE.Vector3(1, 1, 1), P = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
    for (const s of this.list) {
      if (Math.hypot(s.node.x - px, s.node.z - pz) > 420) continue;
      for (const a of s.ap) {
        if (p >= 600) break;
        const w = this.R.ways[a.w];
        // tek yönlü ve kavşaktan çıkan yolda ışık yok
        if (w.oneway && a.end === 0) continue;
        const rx = a.dz, rz = -a.dx; // gelen araca göre sağ taraf
        const x = s.node.x + a.dx * (s.stop - 1) + rx * (a.hw + 1.1), z = s.node.z + a.dz * (s.stop - 1) + rz * (a.hw + 1.1);
        const y = this.G.H(x, z); const yaw = Math.atan2(a.dx, a.dz);
        q.setFromAxisAngle(up, yaw); P.set(x, y, z); M.compose(P, q, S);
        this.poles.setMatrixAt(p, M); this.heads.setMatrixAt(p, M);
        this.shown.push({ s, a, i: p }); p++;
        // durma çizgisi + yaya geçidi
        const cx = s.node.x + a.dx * s.stop, cz = s.node.z + a.dz * s.stop;
        const half = w.oneway ? a.hw : 0; void half;
        const lineW = w.oneway ? w.width : a.hw; const lc = w.oneway ? 0 : a.hw / 2; // iki yönlüde yalnız gelen şerit
        const lx = cx + rx * lc, lz = cz + rz * lc;
        q.setFromAxisAngle(up, yaw); P.set(lx, this.G.H(lx, lz) + 0.08, lz); S.set(lineW - 0.3, 1, 0.4); M.compose(P, q, S); if (st < 4000) this.stripes.setMatrixAt(st++, M);
        for (let k = -a.hw + 0.5; k < a.hw - 0.3 && st < 4000; k += 1.0) {
          const zx = s.node.x + a.dx * (s.stop - 2.2) + rx * k, zz = s.node.z + a.dz * (s.stop - 2.2) + rz * k;
          P.set(zx, this.G.H(zx, zz) + 0.08, zz); S.set(0.5, 1, 2.6); M.compose(P, q, S); this.stripes.setMatrixAt(st++, M);
        }
        S.set(1, 1, 1);
      }
    }
    this.poles.count = this.heads.count = p; this.lamps.count = p * 3; this.stripes.count = st;
    this.poles.instanceMatrix.needsUpdate = this.heads.instanceMatrix.needsUpdate = this.stripes.instanceMatrix.needsUpdate = true;
  }
  update(dt: number, car: { x: number; z: number; y: number; vLong: number; fwd: [number, number] }) {
    this.t += dt;
    if (this.last.distanceTo(new THREE.Vector2(car.x, car.z)) > 80) { this.last.set(car.x, car.z); this.rebuild(car.x, car.z); }
    // lamba renkleri
    const M = new THREE.Matrix4(), q = new THREE.Quaternion(), S = new THREE.Vector3(1, 1, 1), P = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), c = new THREE.Color();
    const OFF = new THREE.Color('#2a2a2a'), COL = { r: new THREE.Color('#ff3020'), y: new THREE.Color('#ffb000'), g: new THREE.Color('#30e070') };
    for (const { s, a, i } of this.shown) {
      const L = this.phaseLight(s, a.phase); const rx = a.dz, rz = -a.dx;
      const bx = s.node.x + a.dx * (s.stop - 1) + rx * (a.hw + 1.1), bz = s.node.z + a.dz * (s.stop - 1) + rz * (a.hw + 1.1), by = this.G.H(bx, bz);
      q.setFromAxisAngle(up, Math.atan2(a.dx, a.dz));
      (['r', 'y', 'g'] as Light[]).forEach((k, j) => {
        P.set(bx + a.dx * 0.14, by + 3.95 - j * 0.33, bz + a.dz * 0.14); M.compose(P, q, S); this.lamps.setMatrixAt(i * 3 + j, M);
        this.lamps.setColorAt(i * 3 + j, L === k ? c.copy(COL[k]).multiplyScalar(2.2) : OFF);
      });
    }
    this.lamps.instanceMatrix.needsUpdate = true; if (this.lamps.instanceColor) this.lamps.instanceColor.needsUpdate = true;
    // oyuncu kırmızıda geçti mi?
    const near = this.R.nearest(car.x, car.z, 10, undefined, car.y);
    for (const s of this.list) {
      const d = Math.hypot(s.node.x - car.x, s.node.z - car.z);
      if (d > 40) { this.redState.delete(s.node.id); continue; }
      const st = this.redState.get(s.node.id) || { inside: false, light: 'g' as Light };
      const inside = d < s.stop - 1.5;
      if (!inside && near && (near.w.a === s.node.id || near.w.b === s.node.id)) st.light = this.state(s.node.id, near.w.i);
      if (inside && !st.inside && st.light === 'r' && car.vLong > 3) {
        // kavşağa doğru mu girdi?
        const toN = [(s.node.x - car.x) / (d || 1), (s.node.z - car.z) / (d || 1)];
        if (toN[0] * car.fwd[0] + toN[1] * car.fwd[1] > 0.3) this.onRedRun?.();
      }
      st.inside = inside; this.redState.set(s.node.id, st);
    }
  }
}
