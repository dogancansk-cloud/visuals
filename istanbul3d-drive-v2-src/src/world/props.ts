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
const AUTUMN = ['#f0b52a', '#e8891f', '#d4581f', '#b8321e', '#efc93a', '#8aa83a', '#5b8a32', '#d97a26', '#c9a227', '#7fa03c'].map((c) => new THREE.Color(c));
export const lampUniform = { uNight: { value: 0 } };
/** yumuşak ışık lekesi dokusu (lamba ve far altındaki aydınlık) */
export function glowTexture(warm = true) {
  const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d')!;
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); const col = warm ? '255,190,110' : '255,245,220';
  gr.addColorStop(0, `rgba(${col},1)`); gr.addColorStop(0.45, `rgba(${col},0.45)`); gr.addColorStop(1, `rgba(${col},0)`);
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export class Props {
  readonly group = new THREE.Group();
  private trees: Float32Array; private nTrees: number;
  private poolMesh: THREE.InstancedMesh; private poolMat: THREE.MeshBasicMaterial; private treeMesh: THREE.InstancedMesh; private pineMesh: THREE.InstancedMesh; private lampMesh: THREE.InstancedMesh; private bulbMesh: THREE.InstancedMesh;
  private last = new THREE.Vector2(1e9, 1e9);
  constructor(treeBuf: ArrayBuffer, private lamps: number[][], private G: Ground, private maxTrees: number, private maxLamps: number) {
    const dv = new DataView(treeBuf); this.nTrees = treeBuf.byteLength / 10; this.trees = new Float32Array(this.nTrees * 4);
    for (let i = 0; i < this.nTrees; i++) { this.trees[i * 4] = dv.getFloat32(i * 10, true); this.trees[i * 4 + 1] = dv.getFloat32(i * 10 + 4, true); this.trees[i * 4 + 2] = dv.getUint8(i * 10 + 8) / 100; this.trees[i * 4 + 3] = dv.getUint8(i * 10 + 9); }
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
    // yuvarlak taçlı ağaç
    const trunk = colored(new THREE.CylinderGeometry(0.2, 0.3, 3, 5).translate(0, 1.5, 0), '#4a3a30');
    const crown = colored(new THREE.IcosahedronGeometry(3.0, 0).scale(1, 0.92, 1).translate(0, 5.0, 0), '#ffffff');
    const crown2 = colored(new THREE.IcosahedronGeometry(1.9, 0).translate(1.3, 6.3, 0.5), '#f1f1f1');
    this.treeMesh = new THREE.InstancedMesh(mergeGeometries([trunk, crown, crown2])!, mat, maxTrees);
    // selvi / çam
    const t2 = colored(new THREE.CylinderGeometry(0.15, 0.2, 2, 5).translate(0, 1, 0), '#5d4a3a');
    const c2 = colored(new THREE.ConeGeometry(1.3, 8, 6).translate(0, 5.5, 0), '#3f5f3a');
    this.pineMesh = new THREE.InstancedMesh(mergeGeometries([t2, c2])!, mat, Math.ceil(maxTrees / 3));
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
    for (const m of [this.treeMesh, this.pineMesh, this.lampMesh, this.bulbMesh]) { m.count = 0; m.castShadow = m !== this.bulbMesh; m.frustumCulled = false; this.group.add(m); }
  }
  night(n: number) { this.poolMat.opacity = n * 0.55; this.poolMesh.visible = n > 0.05; }
  update(px: number, pz: number, rTree: number, rLamp: number) {
    if (this.last.distanceTo(new THREE.Vector2(px, pz)) < 60) return;
    this.last.set(px, pz);
    const M = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
    let a = 0, b = 0; const T = this.trees;
    const r2 = rTree * rTree;
    for (let i = 0; i < this.nTrees; i++) {
      const x = T[i * 4], z = T[i * 4 + 1], dx = x - px, dz = z - pz; if (dx * dx + dz * dz > r2) continue;
      const sc = Math.max(0.6, Math.min(1.6, T[i * 4 + 2] || 1)); const pine = T[i * 4 + 3] % 3 === 2;
      q.setFromAxisAngle(up, (i * 2.399) % 6.283); s.setScalar(sc); p.set(x, this.G.H(x, z) - 0.2, z); M.compose(p, q, s);
      if (pine) { if (b < this.pineMesh.instanceMatrix.count) this.pineMesh.setMatrixAt(b++, M); } else if (a < this.treeMesh.instanceMatrix.count) { this.treeMesh.setColorAt(a, AUTUMN[(i * 7 + (i >> 3)) % AUTUMN.length]); this.treeMesh.setMatrixAt(a++, M); }
    }
    this.treeMesh.count = a; this.pineMesh.count = b;
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
