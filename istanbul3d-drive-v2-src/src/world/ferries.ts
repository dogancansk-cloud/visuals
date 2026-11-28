// Vapurlar: denizde gidip gelen birkaç yolcu vapuru. Rotalar su hücreleri üzerinden bulunur (karaya çıkmaz).
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { KIND_WATER, type Ground } from './ground';

function tint(g: THREE.BufferGeometry, hex: string) {
  if (g.index) g = g.toNonIndexed(); g.deleteAttribute('uv'); const c = new THREE.Color(hex), n = g.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); g.clearGroups(); return g;
}
/** burun +z yönünde, su hattı y = 0 */
function ferryGeom(): THREE.BufferGeometry {
  const hull = (hw: number, len: number, y0: number, h: number, hex: string) => {
    const s = new THREE.Shape(); s.moveTo(-hw, -len * 0.42); s.lineTo(-hw, len * 0.2); s.quadraticCurveTo(-hw, len * 0.42, 0, len * 0.5); s.quadraticCurveTo(hw, len * 0.42, hw, len * 0.2); s.lineTo(hw, -len * 0.42); s.quadraticCurveTo(hw * 0.9, -len * 0.5, 0, -len * 0.5); s.quadraticCurveTo(-hw * 0.9, -len * 0.5, -hw, -len * 0.42);
    return tint(new THREE.ExtrudeGeometry(s, { depth: h, bevelEnabled: false, curveSegments: 6 }).rotateX(-Math.PI / 2).scale(1, 1, -1).translate(0, y0, 0), hex);
  };
  const box = (w: number, h: number, l: number, y: number, z: number, hex: string) => tint(new THREE.BoxGeometry(w, h, l).translate(0, y, z), hex);
  const parts = [hull(4.2, 36, -0.6, 1.0, '#23262b'), hull(4.3, 36.4, 0.4, 1.6, '#f3f1ea'), box(7.4, 2.3, 24, 3.15, -1, '#f3f1ea'), box(7.5, 0.8, 22, 3.3, -1, '#1e2a36'), box(6.4, 2.1, 15, 5.3, -2, '#f3f1ea'), box(6.5, 0.7, 13.5, 5.5, -2, '#1e2a36'), box(7.8, 0.14, 25, 4.34, -1, '#d9d5c8'), box(6.8, 0.14, 16, 6.4, -2, '#d9d5c8'), box(3.6, 1.7, 3.6, 7.3, 2.5, '#f3f1ea'),
    tint(new THREE.CylinderGeometry(0.9, 1.1, 3.2, 10).translate(0, 8.0, -4), '#e0a020'), tint(new THREE.CylinderGeometry(0.95, 0.95, 0.6, 10).translate(0, 9.5, -4), '#1b1b1d'), tint(new THREE.CylinderGeometry(0.06, 0.06, 4, 5).translate(0, 9.5, 4), '#d9d5c8')];
  return mergeGeometries(parts)!;
}

interface Boat { path: number[]; cum: number[]; len: number; s: number; dir: 1 | -1; wait: number; obj: THREE.Group; ph: number }

export class Ferries {
  readonly group = new THREE.Group(); private boats: Boat[] = [];
  constructor(G: Ground, spawns: { id: string; x: number; z: number }[]) {
    const [x0, z0, x1, z1] = G.bounds, ST = 40, nx = Math.floor((x1 - x0) / ST), nz = Math.floor((z1 - z0) / ST);
    const ok = new Uint8Array(nx * nz);
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) { const x = x0 + (i + 0.5) * ST, z = z0 + (j + 0.5) * ST; let w = 1; for (const [a, b] of [[0, 0], [45, 0], [-45, 0], [0, 45], [0, -45], [32, 32], [-32, 32], [32, -32], [-32, -32]]) if (G.kindAt(x + a, z + b) !== KIND_WATER) { w = 0; break; } ok[j * nx + i] = w; }
    const cell = (x: number, z: number) => { // en yakın uygun su hücresi
      const ci = Math.floor((x - x0) / ST), cj = Math.floor((z - z0) / ST); let best = -1, bd = 1e9;
      for (let j = Math.max(0, cj - 14); j <= Math.min(nz - 1, cj + 14); j++) for (let i = Math.max(0, ci - 14); i <= Math.min(nx - 1, ci + 14); i++) if (ok[j * nx + i]) { const d = (i - ci) ** 2 + (j - cj) ** 2; if (d < bd) { bd = d; best = j * nx + i; } }
      return best;
    };
    const bfs = (a: number) => { const prev = new Int32Array(nx * nz).fill(-2); prev[a] = -1; const q = [a]; for (let h = 0; h < q.length; h++) { const c = q[h], i = c % nx, j = (c / nx) | 0; for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]) { const ii = i + di, jj = j + dj; if (ii < 0 || jj < 0 || ii >= nx || jj >= nz) continue; const n = jj * nx + ii; if (!ok[n] || prev[n] !== -2) continue; prev[n] = c; q.push(n); } } return { prev, reach: q }; };
    const S = (id: string) => spawns.find((s) => s.id === id);
    const E = S('eminonu'), K = S('karakoy'), B = S('besiktas');
    const routes: [number, number][] = [];
    const cE = E ? cell(E.x, E.z) : -1, cK = K ? cell(K.x, K.z) : -1, cB = B ? cell(B.x, B.z) : -1;
    if (cE >= 0 && cB >= 0) routes.push([cE, cB]);
    if (cK >= 0) { const { reach } = bfs(cK); let far = cK, fx = -1e9, south = cK, sz = -1e9; for (const c of reach) { const i = c % nx, j = (c / nx) | 0; if (i - j * 0.3 > fx) { fx = i - j * 0.3; far = c; } if (j + i * 0.4 > sz) { sz = j + i * 0.4; south = c; } } routes.push([cK, far]); if (cE >= 0) routes.push([cE, south]); }
    const geo = ferryGeom(), mat = new THREE.MeshLambertMaterial({ vertexColors: true });
    const wcv = document.createElement('canvas'); wcv.width = 32; wcv.height = 128; const wc = wcv.getContext('2d')!; const gr = wc.createLinearGradient(0, 0, 0, 128); gr.addColorStop(0, 'rgba(255,255,255,0.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); wc.fillStyle = gr; wc.beginPath(); wc.moveTo(10, 0); wc.lineTo(22, 0); wc.lineTo(32, 128); wc.lineTo(0, 128); wc.fill();
    const wakeMat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(wcv), transparent: true, depthWrite: false });
    routes.forEach(([a, b], ri) => {
      const { prev } = bfs(a); if (prev[b] === -2) return;
      let pts: number[][] = []; for (let c = b; c >= 0; c = prev[c]) pts.push([x0 + ((c % nx) + 0.5) * ST, z0 + (((c / nx) | 0) + 0.5) * ST]); pts.reverse();
      for (let it = 0; it < 3; it++) { const o = [pts[0]]; for (let i = 0; i < pts.length - 1; i++) { const p = pts[i], q = pts[i + 1]; o.push([p[0] * 0.75 + q[0] * 0.25, p[1] * 0.75 + q[1] * 0.25], [p[0] * 0.25 + q[0] * 0.75, p[1] * 0.25 + q[1] * 0.75]); } o.push(pts[pts.length - 1]); pts = o; }
      const cum = [0]; for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
      if (cum[cum.length - 1] < 300) return;
      const obj = new THREE.Group(); const m = new THREE.Mesh(geo, mat); m.castShadow = true; obj.add(m);
      const wake = new THREE.Mesh(new THREE.PlaneGeometry(14, 60).rotateX(-Math.PI / 2).translate(0, 0.08, -46), wakeMat); wake.renderOrder = 2; obj.add(wake);
      this.group.add(obj);
      this.boats.push({ path: pts.flat(), cum, len: cum[cum.length - 1], s: (ri * 0.37 % 1) * cum[cum.length - 1], dir: ri % 2 ? -1 : 1, wait: 0, obj, ph: ri * 2.1 });
    });
  }
  update(dt: number, t: number) {
    for (const b of this.boats) {
      if (b.wait > 0) b.wait -= dt; else { b.s += b.dir * 6.5 * dt; if (b.s >= b.len) { b.s = b.len; b.dir = -1; b.wait = 10; } else if (b.s <= 0) { b.s = 0; b.dir = 1; b.wait = 10; } }
      let lo = 0, hi = b.cum.length - 1; while (lo < hi) { const m = (lo + hi + 1) >> 1; if (b.cum[m] <= b.s) lo = m; else hi = m - 1; } const k = Math.min(lo, b.cum.length - 2), u = (b.s - b.cum[k]) / (b.cum[k + 1] - b.cum[k] || 1);
      const ax = b.path[2 * k], az = b.path[2 * k + 1], bx = b.path[2 * k + 2], bz = b.path[2 * k + 3];
      b.obj.position.set(ax + (bx - ax) * u, 0.15 + Math.sin(t * 0.9 + b.ph) * 0.12, az + (bz - az) * u);
      const yaw = Math.atan2((bx - ax) * b.dir, (bz - az) * b.dir); let d = yaw - b.obj.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d)); b.obj.rotation.y += d * Math.min(1, dt * 0.8);
      b.obj.rotation.z = Math.sin(t * 0.7 + b.ph) * 0.012; b.obj.children[1].visible = b.wait <= 0;
    }
  }
  get count() { return this.boats.length; }
}
