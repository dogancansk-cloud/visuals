// Pist kenarındaki insanlar: el sallayıp zıplayan seyirciler ve kaldırımda yürüyenler (örneklenmiş, ucuz).
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Track } from './track';

export interface CrowdCfg {
  /** bu pist örneğinin kenarında insan durabilir mi */
  ok: (i: number) => boolean;
  /** kenardan uzaklık aralığı (yol kenarından, m) */
  near: number; far: number;
  /** zemin yüksekliği; verilmezse pist yüksekliği */
  yAt?: (x: number, z: number, i: number) => number;
  sides?: number[];
  every: number; walkers: number;
}

const SHIRTS = [0xff5a4f, 0xffc233, 0x3fa7ff, 0xffffff, 0xff8fb8, 0x41c98a, 0xff9340, 0x9b7bff, 0x35c8d6, 0xe8e0d0, 0xd93a3a, 0x2f6fb3];
const SKINS = [0xf3cfb0, 0xe8b88f, 0xc98f62, 0xf7dcc4, 0x9c6b46];
const DARKS = [0x2b2833, 0x3c3a47, 0x1e3a6e, 0x5a3a2a, 0x4a4a5a, 0x7a5a3a];

interface Walker { s: number; d: number; dir: number; sp: number; k: number }

export class Crowd {
  readonly uTime = { value: 0 }; readonly uPlayer = { value: new THREE.Vector3(1e5, 0, 1e5) };
  private walkers: Walker[] = []; private wMesh: THREE.InstancedMesh[] = [];
  private m = new THREE.Matrix4(); private q = new THREE.Quaternion(); private v = new THREE.Vector3(); private up = new THREE.Vector3(0, 1, 0); private one = new THREE.Vector3(1, 1, 1);
  constructor(scene: THREE.Scene, private track: Track, private cfg: CrowdCfg, mobile: boolean) {
    const T = track.T, sides = cfg.sides || [-1, 1];
    let seed = 91; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    // --- gövde parçaları (yaklaşık 1,5 m) ---
    const torso = new THREE.CylinderGeometry(0.2, 0.24, 0.56, 7); torso.translate(0, 0.98, 0);
    const armL = new THREE.CylinderGeometry(0.055, 0.055, 0.5, 5); armL.translate(0, 0.25, 0); armL.rotateX(0.5); armL.translate(0, 1.18, 0.22);
    const armR = new THREE.CylinderGeometry(0.055, 0.055, 0.5, 5); armR.translate(0, 0.25, 0); armR.rotateX(-0.5); armR.translate(0, 1.18, -0.22);
    const head = new THREE.SphereGeometry(0.17, 8, 6); head.translate(0, 1.44, 0);
    const legs = [-1, 1].map((sd) => { const g = new THREE.BoxGeometry(0.15, 0.7, 0.14); g.translate(0, 0.35, sd * 0.1); return g; });
    const hair = new THREE.SphereGeometry(0.18, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2); hair.translate(-0.02, 1.47, 0);
    const parts: [THREE.BufferGeometry, number[]][] = [[torso, SHIRTS], [mergeGeometries([head, armL, armR]), SKINS], [mergeGeometries([...legs, hair]), DARKS]];
    const mat = (amp: number, wave: number) => {
      const m = new THREE.MeshLambertMaterial({ color: 0xffffff });
      m.onBeforeCompile = (sh) => {
        sh.uniforms.uTime = this.uTime; sh.uniforms.uPlayer = this.uPlayer;
        sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime; uniform vec3 uPlayer;').replace('#include <begin_vertex>', `#include <begin_vertex>
          float ph = instanceMatrix[3].x * 0.71 + instanceMatrix[3].z * 1.31;
          float cheer = 1.0 - smoothstep(10.0, 34.0, distance(instanceMatrix[3].xz, uPlayer.xz));
          float up = smoothstep(1.15, 1.7, position.y) * step(0.15, abs(position.z));
          transformed.z += sin(uTime * (5.0 + cheer * 6.0) + ph) * ${wave.toFixed(2)} * up * (0.4 + cheer);
          transformed.y += abs(sin(uTime * (3.2 + cheer * 5.0) + ph)) * ${amp.toFixed(2)} * (0.25 + cheer);`);
      };
      return m;
    };
    // --- duran seyirciler ---
    const spots: { p: THREE.Vector3; yaw: number; k: number; s: number }[] = [];
    const step = mobile ? cfg.every * 2 : cfg.every;
    for (let i = 0; i < T.n; i += step) {
      if (!cfg.ok(i)) continue;
      for (const sd of sides) {
        if (rnd() < 0.3) continue;
        const d = sd * (T.w[i] / 2 + cfg.near + rnd() * (cfg.far - cfg.near)), x = T.x[i] - T.tz[i] * d, z = T.z[i] + T.tx[i] * d;
        const y = cfg.yAt ? cfg.yAt(x, z, i) : T.y[i];
        spots.push({ p: new THREE.Vector3(x, y, z), yaw: Math.atan2(-T.tx[i] * sd, T.tz[i] * sd) + (rnd() - 0.5) * 0.7, k: Math.floor(rnd() * 1000), s: 0.85 + rnd() * 0.3 });
      }
    }
    const c = new THREE.Color();
    for (const [geo, pal] of parts) {
      const im = new THREE.InstancedMesh(geo, mat(0.5, 0.22), spots.length);
      spots.forEach((s, k) => { this.q.setFromAxisAngle(this.up, -s.yaw); this.m.compose(s.p, this.q, this.v.set(s.s, s.s, s.s)); im.setMatrixAt(k, this.m); im.setColorAt(k, c.setHex(pal[(s.k * (pal === SHIRTS ? 1 : pal === SKINS ? 7 : 13)) % pal.length])); });
      im.castShadow = !mobile; im.frustumCulled = false; scene.add(im);
    }
    // --- yürüyenler ---
    const nW = Math.round(cfg.walkers * (mobile ? 0.5 : 1));
    for (let k = 0; k < nW; k++) {
      let s = 0, tries = 0; do { s = rnd() * track.L; } while (!cfg.ok(track.idxOf(s)) && tries++ < 40);
      const sd = sides[k % sides.length];
      this.walkers.push({ s, d: sd * (cfg.near + 0.6 + rnd() * Math.max(0.2, cfg.far - cfg.near - 0.8)), dir: k % 2 ? 1 : -1, sp: 1.3 + rnd() * 1.1, k: Math.floor(rnd() * 1000) });
    }
    for (const [geo, pal] of parts) {
      const im = new THREE.InstancedMesh(geo, mat(0.07, 0.0), Math.max(1, nW));
      this.walkers.forEach((w, k) => im.setColorAt(k, c.setHex(pal[(w.k * (pal === SHIRTS ? 1 : pal === SKINS ? 7 : 13)) % pal.length])));
      im.count = nW; im.castShadow = !mobile; im.frustumCulled = false; scene.add(im); this.wMesh.push(im);
    }
  }

  update(dt: number, time: number, player: THREE.Vector3 | null) {
    this.uTime.value = time; if (player) this.uPlayer.value.copy(player);
    if (!this.walkers.length || dt <= 0) return;
    const tr = this.track, T = tr.T;
    this.walkers.forEach((w, k) => {
      const ns = w.s + w.dir * w.sp * dt, i = tr.idxOf(ns);
      if (!this.cfg.ok(i)) w.dir = -w.dir; else w.s = (ns + tr.L) % tr.L;
      const j = tr.idxOf(w.s), d = Math.sign(w.d) * (T.w[j] / 2) + w.d;
      tr.point(w.s, d, this.v); if (this.cfg.yAt) this.v.y = this.cfg.yAt(this.v.x, this.v.z, j); else this.v.y = T.y[j];
      this.q.setFromAxisAngle(this.up, -(Math.atan2(T.tz[j], T.tx[j]) + (w.dir < 0 ? Math.PI : 0)));
      this.m.compose(this.v, this.q, this.one);
      for (const im of this.wMesh) im.setMatrixAt(k, this.m);
    });
    for (const im of this.wMesh) im.instanceMatrix.needsUpdate = true;
  }
}
