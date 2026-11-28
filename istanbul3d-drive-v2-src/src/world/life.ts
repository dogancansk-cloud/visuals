// Sokak hayatı: raylarda tramvaylar, kıyıda martılar, simitçi arabaları.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Ground } from './ground';
import type { Roads } from './roads';
import type { Obstacle } from '../game/car';
import { tramCarGeom, fleetMaterial } from '../game/vehicles';
import { staticPerson } from '../game/people';

// ---------- tramvay ----------
interface Line { p: Float32Array; cum: Float32Array; len: number } // p: x, y, z
interface Tram { line: Line; s: number; wait: number; next: number; v: number }
const CARS = 3, GAP = 9.75;
export class Trams {
  readonly group = new THREE.Group(); obstacles: Obstacle[] = [];
  /** yakındaki vagonların konumu (x, z çiftleri): trafik araçları arkasında bekler */
  carPos: number[] = [];
  private lines: Line[] = []; private trams: Tram[] = []; private mesh: THREE.InstancedMesh;
  onBell: ((dist: number) => void) | null = null;
  constructor(data: number[][], R: Roads, G: Ground) {
    const railPos: number[] = [];
    for (const raw of data) {
      // 4 m'de bir örnekle, yüksekliği zeminden (köprüde güverteden) al
      const pts: number[] = []; let len = 0;
      for (let i = 0; i + 2 < raw.length; i += 2) { const L = Math.hypot(raw[i + 2] - raw[i], raw[i + 3] - raw[i + 1]), n = Math.max(1, Math.round(L / 4)); for (let q = i === 0 ? 0 : 1; q <= n; q++) { const x = raw[i] + (raw[i + 2] - raw[i]) * q / n, z = raw[i + 1] + (raw[i + 3] - raw[i + 1]) * q / n, g = G.H(x, z), d = R.deckAt(x, z, g + 6); pts.push(x, (d !== null && d > g + 0.8 ? d : Math.max(g, 0.4)) + 0.05, z); } len += L; }
      const n = pts.length / 3; if (n < 3) continue;
      for (let it = 0; it < 2; it++) for (let i = 1; i < n - 1; i++) pts[3 * i + 1] = (pts[3 * i - 2] + 2 * pts[3 * i + 1] + pts[3 * i + 4]) / 4;
      const p = new Float32Array(pts), cum = new Float32Array(n); for (let i = 1; i < n; i++) cum[i] = cum[i - 1] + Math.hypot(p[3 * i] - p[3 * i - 3], p[3 * i + 2] - p[3 * i - 1]);
      const line = { p, cum, len: cum[n - 1] }; this.lines.push(line);
      // raylar: iki ince şerit
      for (let i = 0; i < n - 1; i++) {
        const ax = p[3 * i], ay = p[3 * i + 1], az = p[3 * i + 2], bx = p[3 * i + 3], by = p[3 * i + 4], bz = p[3 * i + 5]; let nx = -(bz - az), nz = bx - ax; const l = Math.hypot(nx, nz) || 1; nx /= l; nz /= l;
        for (const o of [-0.72, 0.72]) { const a0 = [ax + nx * (o - 0.05), ay, az + nz * (o - 0.05)], a1 = [ax + nx * (o + 0.05), ay, az + nz * (o + 0.05)], b0 = [bx + nx * (o - 0.05), by, bz + nz * (o - 0.05)], b1 = [bx + nx * (o + 0.05), by, bz + nz * (o + 0.05)]; railPos.push(...a0, ...b0, ...b1, ...a0, ...b1, ...a1); }
      }
      if (line.len >= 600) { const k = Math.max(1, Math.round(line.len / 1700)); for (let q = 0; q < k; q++) this.trams.push({ line, s: 30 + (line.len - 60) * (q + 0.37) / k, wait: 0, next: 0, v: 0 }); }
    }
    for (const t of this.trams) t.next = t.s + 200 + Math.random() * 250;
    const rg = new THREE.BufferGeometry(); rg.setAttribute('position', new THREE.Float32BufferAttribute(railPos, 3)); rg.computeVertexNormals();
    const rails = new THREE.Mesh(rg, new THREE.MeshLambertMaterial({ color: '#2c2e33', side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -10 })); rails.frustumCulled = false; rails.renderOrder = 3; this.group.add(rails);
    this.mesh = new THREE.InstancedMesh(tramCarGeom(), fleetMaterial(), Math.max(1, this.trams.length * CARS)); this.mesh.count = 0; this.mesh.frustumCulled = false; this.mesh.castShadow = true; this.group.add(this.mesh);
  }
  private at(L: Line, s: number, out: THREE.Vector3) {
    s = Math.max(0, Math.min(L.len - 0.01, s)); let lo = 0, hi = L.cum.length - 1; while (lo < hi) { const m = (lo + hi + 1) >> 1; if (L.cum[m] <= s) lo = m; else hi = m - 1; } const k = Math.min(lo, L.cum.length - 2), u = (s - L.cum[k]) / (L.cum[k + 1] - L.cum[k] || 1);
    return out.set(L.p[3 * k] + (L.p[3 * k + 3] - L.p[3 * k]) * u, L.p[3 * k + 1] + (L.p[3 * k + 4] - L.p[3 * k + 1]) * u, L.p[3 * k + 2] + (L.p[3 * k + 5] - L.p[3 * k + 2]) * u);
  }
  private A = new THREE.Vector3(); private B = new THREE.Vector3(); private M = new THREE.Matrix4(); private q = new THREE.Quaternion(); private e = new THREE.Euler(); private S = new THREE.Vector3(1, 1, 1);
  update(dt: number, px: number, pz: number) {
    let n = 0; this.obstacles.length = 0; this.carPos.length = 0;
    for (const t of this.trams) {
      const head = this.at(t.line, t.s, this.A), d = Math.hypot(head.x - px, head.z - pz);
      if (t.wait > 0) { t.wait -= dt; t.v = 0; if (t.wait <= 0 && d < 170) this.onBell?.(d); }
      else {
        t.v += Math.sign(9.5 - t.v) * Math.min(Math.abs(9.5 - t.v), 1.2 * dt); if (t.next - t.s < 30) t.v = Math.min(t.v, Math.max(0.6, Math.sqrt(2 * 1.0 * Math.max(0, t.next - t.s))));
        t.s += t.v * dt;
        if (t.s >= t.line.len - 2) { t.s = 30; t.next = 230 + Math.random() * 250; t.wait = d < 400 ? 0 : 0; }        // hat sonu: başa döner
        else if (t.s >= t.next) { t.wait = 7; t.next = t.s + 380 + Math.random() * 220; }                                // durak
      }
      if (d > 700) continue;
      for (let c = 0; c < CARS; c++) {
        const sc = t.s - c * GAP; if (sc < 5) continue;
        const a = this.at(t.line, sc + 3.2, this.A), b = this.at(t.line, sc - 3.2, this.B); const dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
        this.e.set(-Math.atan2(dy, Math.hypot(dx, dz)), Math.atan2(dx, dz), 0, 'YXZ'); this.q.setFromEuler(this.e); a.add(b).multiplyScalar(0.5); this.M.compose(a, this.q, this.S); this.mesh.setMatrixAt(n++, this.M); this.carPos.push(a.x, a.z);
        if (d < 70) for (const o of [-3, 0, 3]) this.obstacles.push({ x: a.x + (dx / 6.4) * o, z: a.z + (dz / 6.4) * o, r: 1.55, vx: (dx / 6.4) * t.v, vz: (dz / 6.4) * t.v });
      }
    }
    this.mesh.count = n; this.mesh.instanceMatrix.needsUpdate = true;
  }
  dots() { const o: number[][] = []; for (const t of this.trams) { const p = this.at(t.line, t.s, this.A); o.push([p.x, p.z]); } return o; }
}

// ---------- martılar ----------
interface Gull { f: number; r: number; h: number; a: number; w: number }
export class Gulls {
  readonly mesh: THREE.InstancedMesh; private gulls: Gull[] = []; private flocks: { x: number; z: number; tx: number; tz: number; sea: boolean }[] = []; private timer = 0; private uTime = { value: 0 };
  /** en yakın sürünün uzaklığı ve deniz üstünde olup olmadığı (ses için) */
  nearest = { d: 1e9, sea: false };
  constructor(private G: Ground, count: number) {
    const col = (g: THREE.BufferGeometry, hex: string) => { g = g.index ? g.toNonIndexed() : g; g.deleteAttribute('uv'); g.deleteAttribute('normal'); const c = new THREE.Color(hex), n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { a[3 * i] = c.r; a[3 * i + 1] = c.g; a[3 * i + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g; };
    const wing = (s: number) => { const g = new THREE.BufferGeometry(), x0 = 0.05 * s, x1 = 0.36 * s, x2 = 0.68 * s; g.setAttribute('position', new THREE.Float32BufferAttribute([x0, 0, 0.12, x1, 0, 0.1, x1, 0, -0.1, x0, 0, 0.12, x1, 0, -0.1, x0, 0, -0.1, x1, 0, 0.1, x2, 0, -0.02, x1, 0, -0.1], 3)); const W = [0.86, 0.88, 0.9], T = [0.2, 0.21, 0.23]; g.setAttribute('color', new THREE.Float32BufferAttribute([...W, ...W, ...W, ...W, ...W, ...W, ...W, ...T, ...W], 3)); return g; };
    const geo = mergeGeometries([col(new THREE.SphereGeometry(1, 6, 5).scale(0.07, 0.065, 0.24), '#f4f4f0'), col(new THREE.ConeGeometry(0.02, 0.07, 4).rotateX(Math.PI / 2).translate(0, 0, 0.27), '#e0a020'), wing(1), wing(-1)])!;
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
    mat.onBeforeCompile = (sh) => { sh.uniforms.uTime = this.uTime; sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime;').replace('#include <begin_vertex>', '#include <begin_vertex>\n#ifdef USE_INSTANCING\n float fl = sin(uTime * 6.5 + instanceMatrix[3][0] * 0.31 + instanceMatrix[3][2] * 0.17);\n transformed.y += abs(position.x) * (0.25 + fl * 0.55) - 0.1 * step(0.3, abs(position.x)) * (abs(position.x) - 0.3) * (1.0 + fl);\n#endif'); };
    this.mesh = new THREE.InstancedMesh(geo, mat, count); this.mesh.frustumCulled = false; this.mesh.count = 0;
    const nf = Math.max(2, Math.round(count / 6)); for (let f = 0; f < nf; f++) this.flocks.push({ x: 1e9, z: 0, tx: 0, tz: 0, sea: false });
    for (let i = 0; i < count; i++) this.gulls.push({ f: i % nf, r: 7 + Math.random() * 24, h: 9 + Math.random() * 20, a: Math.random() * 6.28, w: (Math.random() < 0.5 ? -1 : 1) * (6 + Math.random() * 3) });
  }
  private M = new THREE.Matrix4(); private q = new THREE.Quaternion(); private e = new THREE.Euler(); private P = new THREE.Vector3(); private S = new THREE.Vector3(1.5, 1.5, 1.5);
  update(dt: number, t: number, px: number, pz: number, night: number) {
    this.uTime.value = t; this.mesh.visible = night < 0.75; if (!this.mesh.visible) { this.nearest.d = 1e9; return; }
    this.timer -= dt;
    if (this.timer <= 0) { // sürüler denizin, kıyının üstünde toplanır; deniz uzaksa arabanın çevresinde yüksekten süzülür
      this.timer = 5;
      this.flocks.forEach((f, fi) => {
        let best: number[] | null = null;
        for (let k = 0; k < 14; k++) { const a = Math.random() * 6.28, r = 50 + Math.random() * 220, x = px + Math.cos(a) * r, z = pz + Math.sin(a) * r; if (this.G.kindAt(x, z) === 1 && (!best || r < best[2])) best = [x, z, r]; }
        f.sea = !!best; if (!best) { const a = fi * 2.4 + t * 0.05; best = [px + Math.cos(a) * 70, pz + Math.sin(a) * 70, 0]; }
        f.tx = best[0]; f.tz = best[1]; if (Math.hypot(f.x - px, f.z - pz) > 600) { f.x = f.tx; f.z = f.tz; }
      });
    }
    this.nearest.d = 1e9;
    for (const f of this.flocks) { const k = Math.min(1, dt * 0.25); f.x += (f.tx - f.x) * k; f.z += (f.tz - f.z) * k; const d = Math.hypot(f.x - px, f.z - pz); if (d < this.nearest.d) { this.nearest.d = d; this.nearest.sea = f.sea; } }
    this.gulls.forEach((g, i) => {
      const f = this.flocks[g.f]; g.a += (g.w / g.r) * dt; const rr = g.r * (1 + 0.25 * Math.sin(g.a * 0.37 + i));
      this.P.set(f.x + Math.cos(g.a) * rr, g.h + (f.sea ? 0 : 14) + Math.sin(g.a * 0.6 + i) * 2.5, f.z + Math.sin(g.a) * rr);
      const dir = Math.sign(g.w); this.e.set(0, Math.atan2(-Math.sin(g.a) * dir, Math.cos(g.a) * dir), -0.4 * dir, 'YXZ'); this.q.setFromEuler(this.e); this.M.compose(this.P, this.q, this.S); this.mesh.setMatrixAt(i, this.M);
    });
    this.mesh.count = this.gulls.length; this.mesh.instanceMatrix.needsUpdate = true;
  }
}

// ---------- simitçi arabaları ----------
/** tek geometri: kırmızı camekânlı araba, çizgili tente, simitler, satıcı. Konumlar: [x, y, z, yaw] */
export function simitCarts(spots: number[][]) {
  const C = (hex: string) => new THREE.Color(hex), parts: THREE.BufferGeometry[] = [];
  const col = (g: THREE.BufferGeometry, c: THREE.Color) => { g = g.index ? g.toNonIndexed() : g; g.deleteAttribute('uv'); const n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { a[3 * i] = c.r; a[3 * i + 1] = c.g; a[3 * i + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g; };
  const box = (w: number, h: number, l: number, x: number, y: number, z: number, hex: string) => col(new THREE.BoxGeometry(w, h, l).translate(x, y, z), C(hex));
  const one: THREE.BufferGeometry[] = [];
  one.push(box(1.5, 0.55, 0.78, 0, 0.82, 0, '#b3261e'), box(1.56, 0.05, 0.84, 0, 1.11, 0, '#e8e2d2'), box(1.42, 0.5, 0.7, 0, 1.38, 0, '#d7e6ea'), box(1.5, 0.05, 0.78, 0, 1.65, 0, '#b3261e'));
  for (const [x, z] of [[-0.72, -0.36], [0.72, -0.36], [-0.72, 0.36], [0.72, 0.36]]) one.push(box(0.04, 1.0, 0.04, x, 1.62, z, '#e8e2d2'));
  for (let i = 0; i < 6; i++) one.push(box(0.3, 0.05, 1.06, -0.75 + i * 0.3, 2.14, 0, i % 2 ? '#f2efe6' : '#c8281e')); // çizgili tente
  for (const x of [-0.5, 0.5]) one.push(col(new THREE.CylinderGeometry(0.3, 0.3, 0.06, 14).rotateX(Math.PI / 2).translate(x, 0.3, 0.42), C('#2a2c30')), col(new THREE.CylinderGeometry(0.3, 0.3, 0.06, 14).rotateX(Math.PI / 2).translate(x, 0.3, -0.42), C('#2a2c30')));
  for (let i = 0; i < 9; i++) one.push(col(new THREE.TorusGeometry(0.085, 0.03, 5, 10).rotateX(Math.PI / 2 - 0.3).translate(-0.5 + (i % 5) * 0.25, 1.2 + Math.floor(i / 5) * 0.07, 0.2 - Math.floor(i / 5) * 0.12), C('#b5732a'))); // simitler
  one.push(...staticPerson('#f1ede4', '#30343c', 0).map((g) => g.translate(0, 0, -0.85)));
  const base = mergeGeometries(one)!;
  for (const [x, y, z, yaw] of spots) parts.push(base.clone().rotateY(yaw).translate(x, y, z));
  const mesh = new THREE.Mesh(parts.length ? mergeGeometries(parts)! : new THREE.BufferGeometry(), new THREE.MeshLambertMaterial({ vertexColors: true })); mesh.castShadow = true; mesh.receiveShadow = true; mesh.frustumCulled = false; return mesh;
}
