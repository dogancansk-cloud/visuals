// Sürüş efektleri: lastik izi (yere serilen koyu şeritler) ve lastik dumanı. İkisi de sabit boyutlu halka tamponlardır.
import * as THREE from 'three';

const NQ = 700; // iz parçası sayısı
export class SkidFx {
  readonly group = new THREE.Group();
  private pos = new Float32Array(NQ * 18); private mesh: THREE.Mesh; private head = 0; private last: (number[] | null)[] = [null, null];
  private NS = 90; private sp = new Float32Array(90 * 3); private sc = new Float32Array(90 * 4); private age = new Float32Array(90).fill(9); private sh = 0; private smoke: THREE.Points; private emit = 0;
  constructor() {
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x0c0c0d, transparent: true, opacity: 0.55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -10 }));
    this.mesh.frustumCulled = false; this.mesh.renderOrder = 3; this.group.add(this.mesh);
    const cv = document.createElement('canvas'); cv.width = cv.height = 64; const c = cv.getContext('2d')!; const gr = c.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,0.9)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = gr; c.fillRect(0, 0, 64, 64);
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(this.sp, 3)); sg.setAttribute('color', new THREE.BufferAttribute(this.sc, 4));
    this.smoke = new THREE.Points(sg, new THREE.PointsMaterial({ map: new THREE.CanvasTexture(cv), size: 2.4, sizeAttenuation: true, transparent: true, vertexColors: true, depthWrite: false }));
    this.smoke.frustumCulled = false; this.smoke.renderOrder = 6; this.group.add(this.smoke);
    for (let i = 0; i < this.NS; i++) this.sp[i * 3 + 1] = -999;
  }
  /** amount 0-1: kayma şiddeti. wheels: arka iki tekerleğin yerdeki konumu [[x,y,z],[x,y,z]], yan = arabanın sağ vektörü */
  update(dt: number, amount: number, wheels: number[][], rx: number, rz: number) {
    if (amount > 0.12) {
      for (let w = 0; w < 2; w++) {
        const p = wheels[w], l = this.last[w];
        if (l && Math.hypot(p[0] - l[0], p[2] - l[2]) < 3 && Math.hypot(p[0] - l[0], p[2] - l[2]) > 0.12) {
          const o = this.head * 18, hw = 0.11, a = this.pos; this.head = (this.head + 1) % NQ;
          const A = [l[0] - rx * hw, l[1] + 0.03, l[2] - rz * hw], B = [l[0] + rx * hw, l[1] + 0.03, l[2] + rz * hw], C = [p[0] - rx * hw, p[1] + 0.03, p[2] - rz * hw], D = [p[0] + rx * hw, p[1] + 0.03, p[2] + rz * hw];
          a.set([...A, ...C, ...B, ...B, ...C, ...D], o); this.last[w] = p;
        } else if (!l || Math.hypot(p[0] - l[0], p[2] - l[2]) >= 3) this.last[w] = p;
      }
      this.mesh.geometry.attributes.position.needsUpdate = true;
      // duman
      this.emit += dt * 30 * amount;
      while (this.emit > 1) { this.emit -= 1; const w = wheels[(Math.random() * 2) | 0], i = this.sh; this.sh = (this.sh + 1) % this.NS; this.sp[i * 3] = w[0] + (Math.random() - 0.5) * 0.4; this.sp[i * 3 + 1] = w[1] + 0.25; this.sp[i * 3 + 2] = w[2] + (Math.random() - 0.5) * 0.4; this.age[i] = 0; }
    } else this.last[0] = this.last[1] = null;
    for (let i = 0; i < this.NS; i++) {
      const a = (this.age[i] += dt); if (a > 1.6) { this.sc[i * 4 + 3] = 0; continue; }
      this.sp[i * 3 + 1] += dt * 0.9; const k = 1 - a / 1.6;
      this.sc[i * 4] = this.sc[i * 4 + 1] = this.sc[i * 4 + 2] = 0.82; this.sc[i * 4 + 3] = 0.3 * k;
    }
    this.smoke.geometry.attributes.position.needsUpdate = true; this.smoke.geometry.attributes.color.needsUpdate = true;
  }
}
