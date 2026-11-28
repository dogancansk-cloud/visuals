// Ağaçlar ve sokak lambaları: tek çizimde çok kopya (instancing), sadece arabanın çevresinde.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Ground } from './ground';

function colored(g: THREE.BufferGeometry, c: string) {
  g = g.toNonIndexed(); const col = new THREE.Color(c), n = g.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = col.r; a[i * 3 + 1] = col.g; a[i * 3 + 2] = col.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g;
}
// sonbahar ağaç renkleri (eski harita)
const AUTUMN = ['#7d9a3c', '#6c8c36', '#8aa53e', '#5d8733', '#9aa33e', '#b9a23a', '#c98e30', '#b5672c', '#86a046', '#6f9440', '#a8b04a', '#c7742b'].map((c) => new THREE.Color(c)); // çoğu yeşil, arada sararmış/kızarmış
export const lampUniform = { uNight: { value: 0 } };
/** yumuşak ışık lekesi dokusu (lamba ve far altındaki aydınlık) */
export function glowTexture(warm = true) {
  const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d')!;
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); const col = warm ? '255,190,110' : '255,245,220';
  gr.addColorStop(0, `rgba(${col},1)`); gr.addColorStop(0.45, `rgba(${col},0.45)`); gr.addColorStop(1, `rgba(${col},0)`);
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

/** yapraklı ağaç: birkaç pürüzlü küreden taç (yumuşak gölgeli, altı koyu), dallı gövde. detail 1 = yakın, 0 = uzak */
function leafyTree(detail: 0 | 1): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const hsh = (a: number, b: number, c: number) => { const v = Math.sin(a * 12.9898 + b * 78.233 + c * 37.719) * 43758.5453; return v - Math.floor(v); };
  const blobs = detail ? [[0, 5.3, 0, 2.5], [1.5, 4.7, 0.6, 1.8], [-1.3, 4.9, -0.7, 1.9], [0.2, 6.6, -0.4, 1.9], [-0.4, 4.6, 1.5, 1.6]] : [[0, 5.2, 0, 2.8], [0.9, 6.3, 0.3, 1.9]];
  for (const [bx, by, bz, r] of blobs) {
    const g = new THREE.IcosahedronGeometry(r, detail ? 1 : 0).toNonIndexed(); g.deleteAttribute('uv');
    const P = g.attributes.position, N = g.attributes.normal, C = new Float32Array(P.count * 3);
    for (let i = 0; i < P.count; i++) {
      let x = P.getX(i), y = P.getY(i) * 0.9, z = P.getZ(i);
      const k = 1 + (hsh(Math.round(x * 20), Math.round(y * 20), Math.round(z * 20)) - 0.5) * (detail ? 0.3 : 0.16); x *= k; y *= k; z *= k; // pürüz
      P.setXYZ(i, x + bx, y + by, z + bz);
      const nl = Math.hypot(x, y, z) || 1, cx = x + bx, cy = y + by - 5.2, cz = z + bz, cl = Math.hypot(cx, cy, cz) || 1; // küre + ağaç merkezinden: yumuşak, bütünlüklü gölge
      const nx = x / nl * 0.55 + cx / cl * 0.45, ny = y / nl * 0.55 + cy / cl * 0.45, nz = z / nl * 0.55 + cz / cl * 0.45, l2 = Math.hypot(nx, ny, nz) || 1; N.setXYZ(i, nx / l2, ny / l2, nz / l2);
      const sh = 0.55 + 0.45 * Math.min(1, Math.max(0, (y + by - 3.2) / 4.2)) + (hsh(i, bx, r) - 0.5) * 0.1; C[i * 3] = C[i * 3 + 1] = C[i * 3 + 2] = sh;
    }
    g.setAttribute('color', new THREE.BufferAttribute(C, 3)); parts.push(g);
  }
  const bark = (g: THREE.BufferGeometry) => { const o = colored(g, '#3a2d25'); o.deleteAttribute('uv'); return o; };
  parts.push(bark(new THREE.CylinderGeometry(0.16, 0.3, 3.6, detail ? 7 : 5).translate(0, 1.8, 0)));
  if (detail) { parts.push(bark(new THREE.CylinderGeometry(0.07, 0.13, 2.2, 5).translate(0, 1.1, 0).rotateZ(-0.7).translate(0.1, 2.9, 0))); parts.push(bark(new THREE.CylinderGeometry(0.07, 0.12, 2.0, 5).translate(0, 1.0, 0).rotateZ(0.75).rotateY(1.9).translate(-0.1, 3.1, 0))); }
  return mergeGeometries(parts)!;
}
/** selvi: ince uzun, koyu yeşil */
function cypress(): THREE.BufferGeometry {
  const prof = [[0.02, 1.0], [0.6, 1.7], [0.85, 3.6], [0.74, 6.2], [0.42, 8.4], [0.02, 9.8]].map(([r, y]) => new THREE.Vector2(r, y));
  const g = new THREE.LatheGeometry(prof, 8).toNonIndexed(); g.deleteAttribute('uv');
  const P = g.attributes.position, C = new Float32Array(P.count * 3), base = new THREE.Color('#33502f');
  for (let i = 0; i < P.count; i++) { const k = 0.7 + 0.45 * (P.getY(i) / 9.8); C[i * 3] = base.r * k; C[i * 3 + 1] = base.g * k; C[i * 3 + 2] = base.b * k; }
  g.setAttribute('color', new THREE.BufferAttribute(C, 3));
  const t = colored(new THREE.CylinderGeometry(0.12, 0.18, 1.3, 5).translate(0, 0.65, 0), '#4a3a2e'); t.deleteAttribute('uv');
  return mergeGeometries([g, t])!;
}

export class Props {
  readonly group = new THREE.Group();
  private trees: Float32Array; private nTrees: number;
  private poolMesh: THREE.InstancedMesh; private poolMat: THREE.MeshBasicMaterial; private treeMesh: THREE.InstancedMesh; private treeNear!: THREE.InstancedMesh; private nearCap = 260; private pineMesh: THREE.InstancedMesh; private lampMesh: THREE.InstancedMesh; private bulbMesh: THREE.InstancedMesh;
  private last = new THREE.Vector2(1e9, 1e9); private cityMat: THREE.PointsMaterial;
  constructor(treeBuf: ArrayBuffer, private lamps: number[][], private G: Ground, private maxTrees: number, private maxLamps: number, extraLights: number[] = []) {
    const dv = new DataView(treeBuf); this.nTrees = treeBuf.byteLength / 10; this.trees = new Float32Array(this.nTrees * 4);
    for (let i = 0; i < this.nTrees; i++) { this.trees[i * 4] = dv.getFloat32(i * 10, true); this.trees[i * 4 + 1] = dv.getFloat32(i * 10 + 4, true); this.trees[i * 4 + 2] = dv.getUint8(i * 10 + 8) / 100; this.trees[i * 4 + 3] = dv.getUint8(i * 10 + 9); }
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
    // ağaçlar: yakındakiler ayrıntılı, uzaktakiler sade (ikisi de yumuşak gölgeli); selviler tek model
    this.treeMesh = new THREE.InstancedMesh(leafyTree(0), mat, maxTrees);
    this.treeNear = new THREE.InstancedMesh(leafyTree(1), mat, this.nearCap);
    this.pineMesh = new THREE.InstancedMesh(cypress(), mat, Math.ceil(maxTrees / 3));
    // lamba direği
    const pole = colored(new THREE.CylinderGeometry(0.07, 0.1, 7, 5).translate(0, 3.5, 0), '#3b3d40');
    const arm = colored(new THREE.BoxGeometry(1.4, 0.08, 0.08).translate(0.7, 7, 0), '#3b3d40');
    this.lampMesh = new THREE.InstancedMesh(mergeGeometries([pole, arm])!, mat, maxLamps);
    const bulbMat = new THREE.MeshLambertMaterial({ color: '#d8d4c8', emissive: '#ffcf86', emissiveIntensity: 0 });
    bulbMat.onBeforeCompile = (sh) => { sh.uniforms.uNight = lampUniform.uNight; sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uNight;').replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance = vec3(1.0, 0.82, 0.55) * uNight * 2.2;'); };
    this.bulbMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(0.5, 0.15, 0.3).translate(1.3, 6.9, 0), bulbMat, maxLamps);
    this.poolMat = new THREE.MeshBasicMaterial({ map: glowTexture(), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -12, fog: true });
    this.poolMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(16, 16).rotateX(-Math.PI / 2), this.poolMat, maxLamps); this.poolMesh.renderOrder = 4;
    this.group.add(this.poolMesh); this.poolMesh.count = 0; this.poolMesh.frustumCulled = false;
    // şehir ışıkları: haritadaki bütün sokak lambaları (ve köprü lambaları) uzaktan da ışık noktası olarak görünür
    { const cp: number[] = []; for (const L of lamps) { const a = L[2] ?? 0; cp.push(L[0] + Math.cos(a) * 1.3, G.H(L[0], L[1]) + 6.85, L[1] - Math.sin(a) * 1.3); } cp.push(...extraLights);
      const cg = new THREE.BufferGeometry(); cg.setAttribute('position', new THREE.Float32BufferAttribute(cp, 3));
      this.cityMat = new THREE.PointsMaterial({ map: glowTexture(), size: 4.2, sizeAttenuation: true, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
      const pts = new THREE.Points(cg, this.cityMat); pts.frustumCulled = false; pts.renderOrder = 5; pts.visible = false; this.group.add(pts); this.cityPts = pts; }
    for (const m of [this.treeMesh, this.treeNear, this.pineMesh, this.lampMesh, this.bulbMesh]) { m.count = 0; m.castShadow = m !== this.bulbMesh; m.frustumCulled = false; this.group.add(m); }
  }
  private cityPts!: THREE.Points;
  night(n: number) { this.poolMat.opacity = n * 0.6; this.poolMesh.visible = n > 0.05; this.cityMat.opacity = n; this.cityPts.visible = n > 0.05; }
  update(px: number, pz: number, rTree: number, rLamp: number) {
    if (this.last.distanceTo(new THREE.Vector2(px, pz)) < 60) return;
    this.last.set(px, pz);
    const M = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
    let a = 0, b = 0, an = 0; const T = this.trees, nr2 = 150 * 150;
    const r2 = rTree * rTree;
    // en yakın ağaçlar ayrıntılı modele: önce uzaklığa göre eşik bul
    const nd: number[] = []; for (let i = 0; i < this.nTrees; i++) { if (T[i * 4 + 3] % 3 === 2) continue; const dx = T[i * 4] - px, dz = T[i * 4 + 1] - pz, d = dx * dx + dz * dz; if (d < nr2) nd.push(d); }
    nd.sort((u, v) => u - v); const nearLim = nd.length > this.nearCap ? nd[this.nearCap - 1] : nr2;
    for (let i = 0; i < this.nTrees; i++) {
      const x = T[i * 4], z = T[i * 4 + 1], dx = x - px, dz = z - pz; if (dx * dx + dz * dz > r2) continue;
      const sc = Math.max(0.6, Math.min(1.6, T[i * 4 + 2] || 1)); const pine = T[i * 4 + 3] % 3 === 2;
      q.setFromAxisAngle(up, (i * 2.399) % 6.283); s.setScalar(sc); p.set(x, this.G.H(x, z) - 0.2, z); M.compose(p, q, s);
      const col = AUTUMN[(i * 7 + (i >> 3)) % AUTUMN.length];
      if (pine) { if (b < this.pineMesh.instanceMatrix.count) this.pineMesh.setMatrixAt(b++, M); }
      else if (dx * dx + dz * dz <= nearLim && an < this.nearCap) { this.treeNear.setColorAt(an, col); this.treeNear.setMatrixAt(an++, M); }
      else if (a < this.treeMesh.instanceMatrix.count) { this.treeMesh.setColorAt(a, col); this.treeMesh.setMatrixAt(a++, M); }
    }
    this.treeMesh.count = a; this.pineMesh.count = b; this.treeNear.count = an; this.treeNear.instanceMatrix.needsUpdate = true; if (this.treeNear.instanceColor) this.treeNear.instanceColor.needsUpdate = true;
    let c = 0; const rl2 = rLamp * rLamp;
    for (const L of this.lamps) {
      const dx = L[0] - px, dz = L[1] - pz; if (dx * dx + dz * dz > rl2 || c >= this.maxLamps) continue;
      q.setFromAxisAngle(up, L[2] ?? 0); s.setScalar(1); p.set(L[0], this.G.H(L[0], L[1]) - 0.1, L[1]); M.compose(p, q, s);
      this.lampMesh.setMatrixAt(c, M); this.bulbMesh.setMatrixAt(c, M);
      const gx = L[0] + Math.cos(L[2] ?? 0) * 1.6, gz = L[1] - Math.sin(L[2] ?? 0) * 1.6; p.set(gx, this.G.H(gx, gz) + 0.25, gz); M.compose(p, q, s); this.poolMesh.setMatrixAt(c, M);
      c++;
    }
    this.lampMesh.count = this.bulbMesh.count = this.poolMesh.count = c; this.poolMesh.instanceMatrix.needsUpdate = true;
    for (const m of [this.treeMesh, this.pineMesh, this.lampMesh, this.bulbMesh]) m.instanceMatrix.needsUpdate = true;
    if (this.treeMesh.instanceColor) this.treeMesh.instanceColor.needsUpdate = true;
  }
}
