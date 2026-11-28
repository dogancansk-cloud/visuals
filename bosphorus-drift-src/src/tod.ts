// Günün saati: öğle, gün batımı, gece. Işıklar, sis, gök, deniz ve sokak lambaları buradan yönetilir.
import * as THREE from 'three';
import type { Track } from './track';
import type { Kart } from './kart';
import { facadeUniforms } from './world/facade';

export type TodMode = 0 | 1 | 2; // 0 öğle · 1 gün batımı · 2 gece
export const TOD_NAME = ['Öğle', 'Gün batımı', 'Gece'] as const;
/** gök, bulut ve deniz gölgelendiricilerinin paylaştığı değer: x = gün batımı, y = gece */
export const todU = { value: new THREE.Vector2(0, 0) };

export const TOD_GLSL = `
uniform vec2 tod;
vec3 todSky(vec3 c, vec3 dir, vec3 sun){
  float h = dir.y, s = max(0.0, dot(dir, sun));
  vec3 ss = mix(vec3(1.0, 0.66, 0.30), vec3(1.0, 0.47, 0.40), smoothstep(-0.02, 0.16, h));
  ss = mix(ss, vec3(0.52, 0.38, 0.72), smoothstep(0.10, 0.42, h)); ss = mix(ss, vec3(0.15, 0.22, 0.55), smoothstep(0.38, 0.9, h));
  ss += vec3(1.0, 0.75, 0.4) * pow(s, 5.0) * 0.55 + vec3(1.0, 0.95, 0.8) * pow(s, 320.0) * 2.2;
  vec3 nn = mix(vec3(0.12, 0.17, 0.36), vec3(0.02, 0.03, 0.11), smoothstep(-0.02, 0.7, h));
  vec3 cell = floor(dir * 260.0);
  float st = step(0.9972, fract(sin(dot(cell, vec3(12.9898, 78.233, 37.719))) * 43758.5453));
  nn += st * smoothstep(0.04, 0.3, h) * (0.6 + 0.4 * fract(cell.x * 0.37));
  nn += vec3(0.92, 0.95, 1.0) * (smoothstep(0.9990, 0.9994, s) * 1.2 + pow(s, 30.0) * 0.16);
  c = mix(c, ss, tod.x); return mix(c, nn, tod.y);
}
vec3 todCloud(vec3 c){ c = mix(c, c * vec3(1.0, 0.62, 0.58) + vec3(0.12, 0.02, 0.03), tod.x); return mix(c, c * vec3(0.15, 0.19, 0.36), tod.y); }
vec3 todSea(vec3 c){ c = mix(c, c * vec3(0.95, 0.6, 0.62) + vec3(0.16, 0.05, 0.05), tod.x); return mix(c, c * vec3(0.10, 0.15, 0.30) + vec3(0.0, 0.01, 0.03), tod.y); }
`;

interface Look { hemiSky: number; hemiGnd: number; hemi: number; sun: number; sunI: number; fog: number; fogK: number; el: number; az: number; bloom: number }
const LOOKS: Look[] = [
  { hemiSky: 0, hemiGnd: 0, hemi: 1, sun: 0, sunI: 1, fog: 0, fogK: 1, el: 0, az: 0, bloom: 1 },
  { hemiSky: 0xffc9a8, hemiGnd: 0x8a6078, hemi: 0.8, sun: 0xff9550, sunI: 0.95, fog: 0xffb89a, fogK: 0.85, el: 0.27, az: 0.5, bloom: 1.35 },
  { hemiSky: 0x7f97e0, hemiGnd: 0x2a3160, hemi: 0.5, sun: 0xa8c0ff, sunI: 0.3, fog: 0x1a2350, fogK: 0.7, el: 0.85, az: 2.2, bloom: 1.9 },
];

export class Tod {
  mode: TodMode = 0;
  private base: { sky: THREE.Color; gnd: THREE.Color; hemi: number; sun: THREE.Color; sunI: number; fog: THREE.Color; far: number; dir: THREE.Vector3; bloom: number; bg: THREE.Color | THREE.Texture | null };
  constructor(private scene: THREE.Scene, private hemi: THREE.HemisphereLight, private sunL: THREE.DirectionalLight, private sunDir: THREE.Vector3, private ink: { bloomStrength: number; mat: THREE.ShaderMaterial }, private indoor: boolean) {
    const fog = scene.fog as THREE.Fog;
    this.base = { sky: hemi.color.clone(), gnd: hemi.groundColor.clone(), hemi: hemi.intensity, sun: sunL.color.clone(), sunI: sunL.intensity, fog: fog.color.clone(), far: fog.far, dir: sunDir.clone(), bloom: ink.bloomStrength, bg: scene.background as THREE.Color | THREE.Texture | null };
  }
  set(mode: TodMode) {
    if (this.indoor) mode = 0;
    this.mode = mode;
    const b = this.base, L = LOOKS[mode], fog = this.scene.fog as THREE.Fog;
    todU.value.set(mode === 1 ? 1 : 0, mode === 2 ? 1 : 0);
    facadeUniforms.uNight.value = mode === 2 ? 1 : mode === 1 ? 0.45 : 0;
    if (mode === 0) {
      this.hemi.color.copy(b.sky); this.hemi.groundColor.copy(b.gnd); this.hemi.intensity = b.hemi; this.sunL.color.copy(b.sun); this.sunL.intensity = b.sunI;
      fog.color.copy(b.fog); fog.far = b.far; this.sunDir.copy(b.dir);
    } else {
      this.hemi.color.setHex(L.hemiSky); this.hemi.groundColor.setHex(L.hemiGnd); this.hemi.intensity = b.hemi * L.hemi; this.sunL.color.setHex(L.sun); this.sunL.intensity = b.sunI * L.sunI;
      fog.color.setHex(L.fog); fog.far = b.far * L.fogK;
      // güneş (ya da ay) yönü: aynı vektör gök, deniz ve gölgeler tarafından paylaşılır
      const a = Math.atan2(b.dir.z, b.dir.x) + L.az; this.sunDir.set(Math.cos(a) * Math.cos(L.el), Math.sin(L.el), Math.sin(a) * Math.cos(L.el));
    }
    this.ink.bloomStrength = b.bloom * L.bloom;
    this.ink.mat.uniforms.vig.value = mode === 2 ? 0.34 : mode === 1 ? 0.27 : 0.22;
    if (b.bg && (b.bg as THREE.Texture).isTexture) this.scene.background = mode === 0 ? b.bg : new THREE.Color(mode === 1 ? 0xff9a70 : 0x070b20);
  }
}

function glowTex(inner: string, outer: string) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 64; const c = cv.getContext('2d')!;
  const g = c.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, inner); g.addColorStop(0.35, outer); g.addColorStop(1, 'rgba(0,0,0,0)');
  c.fillStyle = g; c.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
}

/** Sokak lambaları: direk her zaman görünür; ışık hâlesi ve yerdeki ışık havuzu gün batımı ve gecede yanar. */
export class Lamps {
  private glow: THREE.Points | null = null; private pools: THREE.InstancedMesh | null = null;
  private kGlow: THREE.Points; private kPos: Float32Array; private kPool: THREE.InstancedMesh; private head: THREE.PointLight;
  private m = new THREE.Matrix4(); private q = new THREE.Quaternion(); private e = new THREE.Euler(); private v = new THREE.Vector3(); private s = new THREE.Vector3();
  constructor(private scene: THREE.Scene, track: Track, cfg: { every: number; ok: (i: number) => boolean; color?: (i: number) => number; off: number } | null, mobile: boolean) {
    const T = track.T, tex = glowTex('rgba(255,255,255,1)', 'rgba(255,255,255,0.35)');
    if (cfg) {
      const spots: { x: number; y: number; z: number; c: number; gx: number; gz: number }[] = [];
      for (let i = 0, n = 0; i < T.n; i += cfg.every, n++) {
        if (!cfg.ok(i)) continue;
        const sd = n % 2 ? 1 : -1, d = sd * (T.w[i] / 2 + cfg.off), x = T.x[i] - T.tz[i] * d, z = T.z[i] + T.tx[i] * d, din = sd * (T.w[i] / 2 - 1.6);
        spots.push({ x, y: T.y[i], z, c: cfg.color ? cfg.color(i) : 0xffd9a0, gx: T.x[i] - T.tz[i] * din, gz: T.z[i] + T.tx[i] * din });
      }
      if (spots.length) {
        const pole = new THREE.CylinderGeometry(0.07, 0.1, 5.2, 6); pole.translate(0, 2.6, 0);
        const cap = new THREE.SphereGeometry(0.3, 8, 6); cap.scale(1, 0.75, 1); cap.translate(0, 5.3, 0);
        const pm = new THREE.InstancedMesh(pole, new THREE.MeshLambertMaterial({ color: 0x33485a }), spots.length);
        const cm = new THREE.InstancedMesh(cap, new THREE.MeshBasicMaterial({ color: 0xfff6dc }), spots.length);
        const pos = new Float32Array(spots.length * 3), col = new Float32Array(spots.length * 3), c = new THREE.Color();
        const pg = new THREE.PlaneGeometry(1, 1); pg.rotateX(-Math.PI / 2);
        this.pools = new THREE.InstancedMesh(pg, new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.5, fog: false, polygonOffset: true, polygonOffsetFactor: -4 }), spots.length);
        spots.forEach((p, k) => {
          this.m.makeTranslation(p.x, p.y, p.z); pm.setMatrixAt(k, this.m); cm.setMatrixAt(k, this.m);
          pos.set([p.x, p.y + 5.3, p.z], k * 3); c.setHex(p.c); col.set([c.r, c.g, c.b], k * 3);
          this.m.compose(this.v.set(p.gx, p.y + 0.07, p.gz), this.q.identity(), this.s.set(13, 1, 13)); this.pools!.setMatrixAt(k, this.m); this.pools!.setColorAt(k, c);
        });
        pm.frustumCulled = false; cm.frustumCulled = false; this.pools.frustumCulled = false; this.pools.renderOrder = 2;
        scene.add(pm, cm, this.pools);
        const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3));
        this.glow = new THREE.Points(g, new THREE.PointsMaterial({ map: tex, size: mobile ? 5 : 6, sizeAttenuation: true, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
        this.glow.frustumCulled = false; scene.add(this.glow);
      }
    }
    // kart farları ve stop lambaları (8 kart × 4 nokta)
    this.kPos = new Float32Array(8 * 4 * 3); const kc = new Float32Array(8 * 4 * 3);
    for (let k = 0; k < 8; k++) for (let j = 0; j < 4; j++) kc.set(j < 2 ? [1, 0.95, 0.75] : [1, 0.12, 0.1], (k * 4 + j) * 3);
    const kg = new THREE.BufferGeometry(); kg.setAttribute('position', new THREE.BufferAttribute(this.kPos, 3).setUsage(THREE.DynamicDrawUsage)); kg.setAttribute('color', new THREE.BufferAttribute(kc, 3));
    this.kGlow = new THREE.Points(kg, new THREE.PointsMaterial({ map: tex, size: 1.5, sizeAttenuation: true, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    this.kGlow.frustumCulled = false; scene.add(this.kGlow);
    const hg = new THREE.PlaneGeometry(1, 1); hg.rotateX(-Math.PI / 2);
    this.kPool = new THREE.InstancedMesh(hg, new THREE.MeshBasicMaterial({ map: glowTex('rgba(255,244,210,1)', 'rgba(255,230,170,0.4)'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.55, fog: false, polygonOffset: true, polygonOffsetFactor: -5 }), 8);
    this.kPool.frustumCulled = false; this.kPool.renderOrder = 2; scene.add(this.kPool);
    // oyuncunun çevresini aydınlatan tek gerçek ışık (gündüz şiddeti 0; malzemeler baştan bu ışıkla derlenir)
    this.head = new THREE.PointLight(0xffe2b0, 0, 46, 1.2); scene.add(this.head);
    this.set(0);
  }
  set(mode: TodMode) {
    const on = mode > 0, k = mode === 2 ? 1 : 0.55;
    if (this.glow) { this.glow.visible = on; (this.glow.material as THREE.PointsMaterial).opacity = k; }
    if (this.pools) { this.pools.visible = on; (this.pools.material as THREE.MeshBasicMaterial).opacity = mode === 2 ? 0.5 : 0.2; }
    this.kGlow.visible = on; this.kPool.visible = mode === 2; this.head.intensity = mode === 2 ? 16 : 0;
  }
  /** kürsü gibi sahnelerde ışığı sabit bir noktaya al */
  focus(x: number, y: number, z: number) { this.head.position.set(x, y, z); }
  update(karts: Kart[], player: Kart | null, racing: boolean) {
    if (!this.kGlow.visible) return;
    const P = this.kPos;
    for (let k = 0; k < 8; k++) {
      const kt = karts[k], o = k * 12;
      if (!kt || !racing || kt.gone) { P.fill(0, o, o + 12); P[o + 1] = P[o + 4] = P[o + 7] = P[o + 10] = -999; this.m.makeScale(0, 0, 0); this.kPool.setMatrixAt(k, this.m); continue; }
      const c = Math.cos(kt.yaw), s = Math.sin(kt.yaw), x = kt.pos.x, y = kt.pos.y, z = kt.pos.z;
      [[1.05, 0.55, 0.42], [1.05, 0.55, -0.42], [-1.0, 0.62, 0.5], [-1.0, 0.62, -0.5]].forEach(([lx, ly, lz], j) => { P[o + j * 3] = x + lx * c - lz * s; P[o + j * 3 + 1] = y + ly; P[o + j * 3 + 2] = z + lx * s + lz * c; });
      this.m.compose(this.v.set(x + c * 5.5, kt.grounded ? y + 0.09 : -999, z + s * 5.5), this.q.setFromEuler(this.e.set(0, -kt.yaw, 0)), this.s.set(11, 1, 6.5)); this.kPool.setMatrixAt(k, this.m);
    }
    this.kGlow.geometry.attributes.position.needsUpdate = true; this.kPool.instanceMatrix.needsUpdate = true;
    if (player) this.head.position.set(player.pos.x + Math.cos(player.yaw) * 7, player.pos.y + 4.5, player.pos.z + Math.sin(player.yaw) * 7);
  }
}
