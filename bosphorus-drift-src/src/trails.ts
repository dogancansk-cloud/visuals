// Turbo izleri (parlayan şeritler) ve drift lastik izleri.
import * as THREE from 'three';
import type { Kart } from './kart';

const N = 26; // nokta sayısı / şerit
const BOOST = [new THREE.Color(0xffd25a), new THREE.Color(0xff7ac0)];
const LEVEL = [new THREE.Color(0xffffff), new THREE.Color(0x7ec0f0), new THREE.Color(0xf6a65a), new THREE.Color(0xb48ef0)];

interface Ribbon { pts: THREE.Vector3[]; on: number[]; col: THREE.Color[]; geo: THREE.BufferGeometry; mesh: THREE.Mesh }

export class Trails {
  private rib = new Map<Kart, Ribbon[]>();
  private mat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false });
  // lastik izleri
  private skidMax = 900; private skidN = 0; private skidHead = 0;
  private skidPos: Float32Array; private skidGeo: THREE.BufferGeometry; private last = new Map<string, THREE.Vector3>();
  constructor(private scene: THREE.Scene) {
    this.skidPos = new Float32Array(this.skidMax * 4 * 3);
    const idx: number[] = []; for (let q = 0; q < this.skidMax; q++) { const o = q * 4; idx.push(o, o + 1, o + 2, o, o + 2, o + 3); }
    this.skidGeo = new THREE.BufferGeometry(); this.skidGeo.setAttribute('position', new THREE.BufferAttribute(this.skidPos, 3).setUsage(THREE.DynamicDrawUsage)); this.skidGeo.setIndex(idx);
    const sm = new THREE.Mesh(this.skidGeo, new THREE.MeshBasicMaterial({ color: 0x2a2d48, transparent: true, opacity: 0.55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3 }));
    sm.frustumCulled = false; scene.add(sm);
  }
  reset() {
    for (const rs of this.rib.values()) for (const r of rs) this.scene.remove(r.mesh);
    this.rib.clear(); this.skidN = 0; this.skidHead = 0; this.skidPos.fill(0); this.skidGeo.attributes.position.needsUpdate = true; this.last.clear();
  }
  private ribbons(k: Kart) {
    let rs = this.rib.get(k);
    if (!rs) {
      rs = [0, 1].map(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 2 * 3), 3).setUsage(THREE.DynamicDrawUsage));
        geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(N * 2 * 4), 4).setUsage(THREE.DynamicDrawUsage));
        const idx: number[] = []; for (let i = 0; i < N - 1; i++) { const o = i * 2; idx.push(o, o + 1, o + 3, o, o + 3, o + 2); } geo.setIndex(idx);
        const mesh = new THREE.Mesh(geo, this.mat); mesh.frustumCulled = false; this.scene.add(mesh);
        return { pts: Array.from({ length: N }, () => new THREE.Vector3()), on: new Array(N).fill(0), col: Array.from({ length: N }, () => new THREE.Color()), geo, mesh };
      });
      this.rib.set(k, rs);
    }
    return rs;
  }
  update(karts: Kart[], camPos: THREE.Vector3) {
    for (const k of karts) {
      const rs = this.ribbons(k), c = Math.cos(k.yaw), s = Math.sin(k.yaw);
      const boosting = k.boostT > 0, glowing = boosting || (k.drifting && k.boosts > 0);
      const near = k.pos.distanceToSquared(camPos) < 120 * 120;
      rs.forEach((r, side) => {
        const lz = side ? 0.62 : -0.62, lx = -0.9;
        const p = new THREE.Vector3(k.pos.x + lx * c - lz * s, k.pos.y + 0.08, k.pos.z + lx * s + lz * c);
        r.pts.pop(); r.pts.unshift(p); r.on.pop(); r.on.unshift(glowing && near ? 1 : 0); r.col.pop();
        r.col.unshift((boosting ? BOOST[side] : LEVEL[Math.min(3, k.boosts)]).clone());
        const pos = r.geo.attributes.position as THREE.BufferAttribute, col = r.geo.attributes.color as THREE.BufferAttribute;
        for (let i = 0; i < N; i++) {
          const a = r.pts[i], b = r.pts[Math.min(N - 1, i + 1)], dx = a.x - b.x, dz = a.z - b.z, l = Math.hypot(dx, dz) || 1, w = 0.13 * (1 - i / N) + 0.03;
          pos.setXYZ(i * 2, a.x - (dz / l) * w, a.y, a.z + (dx / l) * w); pos.setXYZ(i * 2 + 1, a.x + (dz / l) * w, a.y, a.z - (dx / l) * w);
          const al = r.on[i] * (1 - i / N) * 0.95, cc = r.col[i];
          col.setXYZW(i * 2, cc.r, cc.g, cc.b, al); col.setXYZW(i * 2 + 1, cc.r, cc.g, cc.b, al);
        }
        pos.needsUpdate = true; col.needsUpdate = true;
        // lastik izi
        const key = k.def.id + side;
        if (k.drifting && k.grounded && near) {
          const prev = this.last.get(key);
          if (prev && prev.distanceToSquared(p) > 0.25 && prev.distanceToSquared(p) < 9) this.skid(prev, p);
          if (!prev || prev.distanceToSquared(p) > 0.25) this.last.set(key, p.clone());
        } else this.last.delete(key);
      });
    }
  }
  private skid(a: THREE.Vector3, b: THREE.Vector3) {
    const dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz) || 1, w = 0.13, nx = (-dz / l) * w, nz = (dx / l) * w, o = this.skidHead * 12, P = this.skidPos;
    P.set([a.x - nx, a.y - 0.03, a.z - nz, a.x + nx, a.y - 0.03, a.z + nz, b.x + nx, b.y - 0.03, b.z + nz, b.x - nx, b.y - 0.03, b.z - nz], o);
    this.skidHead = (this.skidHead + 1) % this.skidMax; this.skidN = Math.min(this.skidMax, this.skidN + 1);
    this.skidGeo.attributes.position.needsUpdate = true;
  }
}
