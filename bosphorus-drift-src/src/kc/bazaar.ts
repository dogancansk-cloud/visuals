// Kapalıçarşı içi: dükkân sıraları, tonozlu tavan ve kemerler, asılı fenerler, ışık huzmeleri, bedesten salonları, çarşı kapıları.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Geo, rr, type Track, type Textures } from '../track';
import { F_HALL, F_GATE } from './kcpath';
import { toon } from '../characters';

const WALL_H = 5.2;   // dükkân cephesi yüksekliği
const SHOP_D = 2.7;   // pist kenarından (bordür dışı) cepheye uzaklık

export class Bazaar {
  skyMats: THREE.ShaderMaterial[] = [];
  readonly uTime = { value: 0 };
  readonly uPlayer = { value: new THREE.Vector3(1e5, 0, 1e5) };
  private lamps: THREE.InstancedMesh[] = [];
  constructor(private scene: THREE.Scene, private track: Track, private tex: Textures, private mobile: boolean) {
    this.floorStrips();
    this.shops();
    this.vault();
    this.halls();
    this.gates();
    this.hangingLamps();
    this.shoppers();
    this.carpets();
  }
  /** zemin yüksekliği (pist dışı): en yakın pist örneği */
  hAt(x: number, z: number) {
    const T = this.track.T; let bi = 0, bd = 1e18;
    for (let i = 0; i < T.n; i += 3) { const d = (x - T.x[i]) ** 2 + (z - T.z[i]) ** 2; if (d < bd) { bd = d; bi = i; } }
    return T.y[bi];
  }
  update(time: number) { this.uTime.value = time; }

  private P(i: number, d: number, dy = 0) { const T = this.track.T; return [T.x[i] - T.tz[i] * d, T.y[i] + dy, T.z[i] + T.tx[i] * d] as const; }
  private half(i: number) { const T = this.track.T; return T.w[i] / 2 + 1.7; }

  /** bordür ile dükkân arasındaki taş şerit */
  private floorStrips() {
    const T = this.track.T, g = new Geo();
    for (let i = 0; i < T.n; i++) {
      const j = (i + 1) % T.n, hall = (T.flags[i] | T.flags[j]) & F_HALL;
      const a = this.half(i), b = this.half(j), ea = a + (hall ? 12 : SHOP_D), eb = b + (hall ? 12 : SHOP_D);
      g.quad(this.P(i, -ea, -0.02), this.P(j, -eb, -0.02), this.P(j, -b, -0.02), this.P(i, -a, -0.02), [0, 0], [0, 1], [1, 1], [1, 0]);
      g.quad(this.P(i, a, -0.02), this.P(j, b, -0.02), this.P(j, eb, -0.02), this.P(i, ea, -0.02), [0, 0], [0, 1], [1, 1], [1, 0]);
    }
    const m = new THREE.Mesh(g.build(), new THREE.MeshLambertMaterial({ map: this.stoneTex(), side: THREE.DoubleSide }));
    m.receiveShadow = true; this.scene.add(m);
  }

  private stoneTex() {
    return this.tex.make(128, 128, (c, w, h) => {
      c.fillStyle = '#ddd0bc'; c.fillRect(0, 0, w, h); c.strokeStyle = '#bfae96'; c.lineWidth = 3;
      for (let r = 0; r < 4; r++) for (let k = 0; k < 3; k++) c.strokeRect(k * 43 + (r % 2) * 21, r * 32, 43, 32);
    }, true);
  }

  /** dükkân cepheleri: 4 m'lik birimler, 8 dükkân türü */
  private shops() {
    const T = this.track.T, TYPES = 8, atlas = this.shopAtlas(TYPES);
    const g = new Geo(), frames: THREE.BufferGeometry[] = [];
    let run = 0, unit = 0;
    let seed = 9; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (const side of [-1, 1]) {
      run = 0; unit = Math.floor(rnd() * TYPES);
      for (let i = 0; i < T.n; i++) {
        const j = (i + 1) % T.n, f = T.flags[i] | T.flags[j];
        if (f & (F_HALL | F_GATE)) { run = 0; continue; }
        const d0 = side * (this.half(i) + SHOP_D), d1 = side * (this.half(j) + SHOP_D);
        const u0 = (run % 4) / 4, u1 = u0 + 0.25; run++;
        if (run % 4 === 1) unit = (unit + 1 + Math.floor(rnd() * 3)) % TYPES;
        const col = unit % 4, row = Math.floor(unit / 4), cu = (u: number) => (col + u) / 4, cv = (v: number) => 1 - (row + 1 - v) / 2;
        const a = this.P(i, d0, 0), b = this.P(j, d1, 0), c2 = this.P(j, d1, WALL_H), d = this.P(i, d0, WALL_H);
        if (side < 0) g.quad(b, a, d, c2, [cu(u1), cv(0)], [cu(u0), cv(0)], [cu(u0), cv(1)], [cu(u1), cv(1)]);
        else g.quad(a, b, c2, d, [cu(u0), cv(0)], [cu(u1), cv(0)], [cu(u1), cv(1)], [cu(u0), cv(1)]);
        // dükkânlar arası ahşap pilaster
        if (run % 4 === 0) {
          const p = this.P(i, d0 - side * 0.15, WALL_H / 2), bx = new THREE.BoxGeometry(0.35, WALL_H, 0.35);
          bx.translate(p[0], p[1], p[2]); frames.push(bx);
        }
      }
    }
    const m = new THREE.Mesh(g.build(), new THREE.MeshLambertMaterial({ map: atlas }));
    m.receiveShadow = true; this.scene.add(m);
    if (frames.length) this.scene.add(new THREE.Mesh(mergeGeometries(frames), new THREE.MeshLambertMaterial({ color: 0x7a4a32 })));
  }

  private shopAtlas(n: number) {
    const W = 1024, H = 512, cw = W / 4, ch = H / 2;
    const kinds = [
      { name: 'HALICI', bg: '#9e2b25', fg: '#f6d38a', draw: 'carpet' }, { name: 'KUYUMCU', bg: '#1f4f8a', fg: '#ffd96a', draw: 'gold' },
      { name: 'FENERCİ', bg: '#2d6a4f', fg: '#ffe9a8', draw: 'lamp' }, { name: 'BAHARATÇI', bg: '#a45a1c', fg: '#fff1d6', draw: 'spice' },
      { name: 'ÇİNİCİ', bg: '#1d3f6e', fg: '#ffffff', draw: 'plate' }, { name: 'ŞEKERCİ', bg: '#b03a6a', fg: '#fff1f6', draw: 'candy' },
      { name: 'TERZİ', bg: '#4b3a6e', fg: '#ffe9a8', draw: 'cloth' }, { name: 'ANTİKACI', bg: '#5a4632', fg: '#f6d38a', draw: 'gold' },
    ].slice(0, n);
    return this.tex.make(W, H, (c) => {
      kinds.forEach((k, idx) => {
        const x0 = (idx % 4) * cw, y0 = Math.floor(idx / 4) * ch;
        c.save(); c.translate(x0, y0);
        c.fillStyle = '#f2e8d6'; c.fillRect(0, 0, cw, ch);                  // cephe
        c.fillStyle = '#c9b49a'; c.fillRect(0, ch - 22, cw, 22);            // kaide
        c.fillStyle = k.bg; rr(c, 10, 12, cw - 20, 46, 8); c.fill();        // tabela
        c.fillStyle = k.fg; c.font = '900 30px ui-rounded, system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
        let fs = 30; while (c.measureText(k.name).width > cw - 40 && fs > 14) { fs -= 2; c.font = `900 ${fs}px ui-rounded, system-ui, sans-serif`; }
        c.fillText(k.name, cw / 2, 36);
        // camekân (sıcak iç ışık)
        const gx = 18, gy = 70, gw = cw - 36, gh = ch - 104;
        const grd = c.createLinearGradient(0, gy, 0, gy + gh); grd.addColorStop(0, '#5a3a2a'); grd.addColorStop(1, '#2e1d16');
        c.fillStyle = grd; c.fillRect(gx, gy, gw, gh);
        c.fillStyle = 'rgba(255,214,150,0.18)'; c.fillRect(gx, gy, gw, gh * 0.35);
        // mallar
        const R = (a: number) => Math.abs(Math.sin(idx * 13.7 + a * 7.1));
        if (k.draw === 'carpet') for (let q = 0; q < 4; q++) { const cx = gx + 10 + q * (gw - 20) / 4; c.fillStyle = ['#b8322c', '#2f4f8a', '#c98a2c', '#6a2c5a'][q]; c.fillRect(cx, gy + 10, (gw - 20) / 4 - 8, gh - 20); c.strokeStyle = '#f2d8a0'; c.lineWidth = 3; c.strokeRect(cx + 6, gy + 18, (gw - 20) / 4 - 20, gh - 36); c.beginPath(); c.moveTo(cx + 6, gy + gh / 2); c.lineTo(cx + (gw - 20) / 8 - 4, gy + 24); c.lineTo(cx + (gw - 20) / 4 - 14, gy + gh / 2); c.lineTo(cx + (gw - 20) / 8 - 4, gy + gh - 24); c.closePath(); c.stroke(); }
        if (k.draw === 'gold') for (let q = 0; q < 18; q++) { c.fillStyle = q % 3 ? '#ffd54a' : '#fff3b0'; c.beginPath(); c.arc(gx + 18 + (q % 6) * (gw - 36) / 5, gy + 28 + Math.floor(q / 6) * (gh - 50) / 2, 8 + R(q) * 6, 0, 7); c.fill(); }
        if (k.draw === 'lamp') for (let q = 0; q < 9; q++) { const cx = gx + 24 + (q % 5) * (gw - 48) / 4, cy = gy + 30 + Math.floor(q / 5) * 46 + (q % 2) * 10; c.fillStyle = ['#ff6b6b', '#6bc0ff', '#ffd54a', '#7bdc9a', '#d38bff'][q % 5]; c.beginPath(); c.ellipse(cx, cy, 14, 18, 0, 0, 7); c.fill(); c.fillStyle = 'rgba(255,255,220,0.7)'; c.beginPath(); c.arc(cx - 4, cy - 5, 4, 0, 7); c.fill(); c.strokeStyle = '#d9b46a'; c.lineWidth = 2; c.beginPath(); c.moveTo(cx, cy - 18); c.lineTo(cx, gy); c.stroke(); }
        if (k.draw === 'spice') for (let q = 0; q < 6; q++) { const cx = gx + 22 + q * (gw - 44) / 5; c.fillStyle = ['#d9461c', '#f2b31c', '#7a3a1c', '#c7a01c', '#9a2c1c', '#5a7a2c'][q]; c.beginPath(); c.moveTo(cx - 18, gy + gh - 8); c.lineTo(cx, gy + gh - 60 - R(q) * 20); c.lineTo(cx + 18, gy + gh - 8); c.fill(); }
        if (k.draw === 'plate') for (let q = 0; q < 8; q++) { const cx = gx + 30 + (q % 4) * (gw - 60) / 3, cy = gy + 36 + Math.floor(q / 4) * 58; c.fillStyle = '#f7f3ea'; c.beginPath(); c.arc(cx, cy, 22, 0, 7); c.fill(); c.strokeStyle = '#2a5fa8'; c.lineWidth = 4; c.beginPath(); c.arc(cx, cy, 15, 0, 7); c.stroke(); c.fillStyle = q % 2 ? '#c8302c' : '#2a8a6a'; c.beginPath(); c.arc(cx, cy, 6, 0, 7); c.fill(); }
        if (k.draw === 'candy') for (let q = 0; q < 24; q++) { c.fillStyle = ['#ff8fb1', '#ffe08a', '#a8e6cf', '#ffffff'][q % 4]; c.fillRect(gx + 10 + (q % 8) * (gw - 20) / 8, gy + 20 + Math.floor(q / 8) * (gh - 30) / 3, (gw - 20) / 8 - 6, (gh - 30) / 3 - 8); }
        if (k.draw === 'cloth') for (let q = 0; q < 7; q++) { c.fillStyle = ['#e85d75', '#5d8be8', '#e8c35d', '#5de8a5', '#b15de8', '#e8865d', '#ffffff'][q]; c.fillRect(gx + 8 + q * (gw - 16) / 7, gy + 8, (gw - 16) / 7 - 4, gh - 16 - R(q) * 30); }
        // çerçeve
        c.strokeStyle = '#7a4a32'; c.lineWidth = 8; c.strokeRect(gx, gy, gw, gh);
        c.restore();
      });
    });
  }

  /** tonozlu tavan + kemer kaburgaları + tepe pencereleri ve ışık huzmeleri */
  private vault() {
    const T = this.track.T, g = new Geo(), seg = 12, ribs: THREE.BufferGeometry[] = [], shafts: THREE.BufferGeometry[] = [];
    const ornament = this.tex.make(256, 256, (c, w, h) => {
      c.fillStyle = '#f8f1e4'; c.fillRect(0, 0, w, h);
      c.fillStyle = '#d4a85a'; c.fillRect(0, 0, w, 10); c.fillRect(0, h - 10, w, 10);
      c.strokeStyle = '#2f5d8a'; c.lineWidth = 4;
      for (let k = 0; k < 4; k++) { const cx = 32 + k * 64; c.beginPath(); c.moveTo(cx, 30); c.quadraticCurveTo(cx + 26, 128, cx, 226); c.quadraticCurveTo(cx - 26, 128, cx, 30); c.stroke(); c.fillStyle = '#b8322c'; c.beginPath(); c.arc(cx, 128, 7, 0, 7); c.fill(); }
      c.strokeStyle = '#7aa35a'; c.lineWidth = 2; for (let k = 0; k < 8; k++) { c.beginPath(); c.arc(k * 32 + 16, 70, 9, 0, Math.PI); c.stroke(); c.beginPath(); c.arc(k * 32 + 16, 186, 9, Math.PI, 7); c.stroke(); }
    }, true);
    let acc = 0;
    for (let i = 0; i < T.n; i++) {
      const j = (i + 1) % T.n, f = T.flags[i] | T.flags[j];
      if (f & F_HALL) continue;
      const ri = this.half(i) + SHOP_D, rj = this.half(j) + SHOP_D;
      const pt = (ii: number, r: number, th: number, off = 0) => { const c = Math.cos(th) * (r + off), hgt = WALL_H + Math.sin(th) * (r * 0.55 + off); return [T.x[ii] - T.tz[ii] * c, T.y[ii] + hgt, T.z[ii] + T.tx[ii] * c] as const; };
      for (let k = 0; k < seg; k++) {
        const t0 = (k / seg) * Math.PI, t1 = ((k + 1) / seg) * Math.PI;
        g.quad(pt(i, ri, t1), pt(j, rj, t1), pt(j, rj, t0), pt(i, ri, t0), [k / seg, acc / 6], [k / seg, (acc + 1) / 6], [(k + 1) / seg, (acc + 1) / 6], [(k + 1) / seg, acc / 6]);
      }
      acc++;
      // kaburga kemer: her 6 m
      if (i % 6 === 0) {
        const pts: THREE.Vector3[] = [];
        for (let k = 0; k <= seg; k++) { const p = pt(i, ri, (k / seg) * Math.PI, -0.15); pts.push(new THREE.Vector3(p[0], p[1], p[2])); }
        const curve = new THREE.CatmullRomCurve3(pts);
        ribs.push(new THREE.TubeGeometry(curve, 16, 0.22, 6, false));
        // pilaster ayakları
        for (const sd of [-1, 1]) { const p = this.P(i, sd * (ri - 0.2), WALL_H / 2), b = new THREE.BoxGeometry(0.45, WALL_H, 0.45); b.translate(p[0], p[1], p[2]); ribs.push(b); }
      }
      // tepe penceresi ışık huzmesi: her 24 m
      if (i % 24 === 12 && !this.mobile) {
        const top = pt(i, ri, Math.PI / 2, -0.1), cone = new THREE.CylinderGeometry(1.0, 2.6, top[1] - T.y[i], 12, 1, true);
        cone.translate(top[0], (top[1] + T.y[i]) / 2, top[2]); shafts.push(cone);
      }
    }
    const vm = new THREE.Mesh(g.build(), new THREE.MeshLambertMaterial({ map: ornament, side: THREE.DoubleSide }));
    this.scene.add(vm);
    if (ribs.length) this.scene.add(new THREE.Mesh(mergeGeometries(ribs.map((r) => (r.index ? r.toNonIndexed() : r))), new THREE.MeshLambertMaterial({ color: 0xd8c3a0 })));
    if (shafts.length) {
      const sm = new THREE.ShaderMaterial({
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
        uniforms: { t: this.uTime },
        vertexShader: 'varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = uv.y; vec4 w = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }',
        fragmentShader: 'uniform float t; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float rim = abs(dot(vN, vV)); float a = 0.16 * vY * rim * (0.85 + 0.15 * sin(t * 1.3 + vY * 6.0)); gl_FragColor = vec4(1.0, 0.86, 0.6, a); }',
      });
      this.scene.add(new THREE.Mesh(mergeGeometries(shafts), sm));
    }
  }

  /** bedesten salonları: kalın taş duvarlar, ayaklar, kubbe ızgarası */
  private halls() {
    const T = this.track.T, ranges: [number, number][] = [];
    let a = -1;
    for (let i = 0; i < T.n; i++) { const h = T.flags[i] & F_HALL; if (h && a < 0) a = i; if (!h && a >= 0) { ranges.push([a, i - 1]); a = -1; } }
    const stone = this.tex.make(256, 256, (c, w, h) => {
      c.fillStyle = '#d9c7a8'; c.fillRect(0, 0, w, h); c.strokeStyle = '#b9a281'; c.lineWidth = 3;
      for (let r = 0; r < 8; r++) for (let k = 0; k < 4; k++) c.strokeRect(k * 64 + (r % 2) * 32, r * 32, 64, 32);
      c.fillStyle = '#5a3a2a'; rr(c, 84, 90, 88, 150, 44); c.fill(); c.fillStyle = 'rgba(255,214,150,0.25)'; rr(c, 92, 100, 72, 60, 36); c.fill();
    }, true);
    stone.repeat.set(1, 1);
    const wallMat = new THREE.MeshLambertMaterial({ map: stone }), pierMat = new THREE.MeshLambertMaterial({ color: 0xcdb592 }), domeMat = new THREE.MeshLambertMaterial({ color: 0xf1e4cc, emissive: 0x5a4a3a, side: THREE.DoubleSide });
    for (const [i0, i1] of ranges) {
      const c0 = this.track.point(i0 * (this.track.L / T.n), 0), c1 = this.track.point(i1 * (this.track.L / T.n), 0);
      const mid = c0.clone().add(c1).multiplyScalar(0.5), len = c0.distanceTo(c1) + 8, wid = T.w[i0] + 2 * 12.5, H = 9, yaw = Math.atan2(c1.z - c0.z, c1.x - c0.x);
      const grp = new THREE.Group(); grp.position.set(mid.x, Math.min(c0.y, c1.y) - 0.05, mid.z); grp.rotation.y = -yaw;
      // duvarlar (uçlarda kapı açıklığı)
      const wall = (L: number, x: number, z: number, ry: number, gap: number) => {
        const sh = new THREE.Shape(); sh.moveTo(-L / 2, 0); sh.lineTo(L / 2, 0); sh.lineTo(L / 2, H); sh.lineTo(-L / 2, H); sh.lineTo(-L / 2, 0);
        if (gap > 0) { const hole = new THREE.Path(); hole.moveTo(-gap / 2, 0); hole.lineTo(gap / 2, 0); hole.lineTo(gap / 2, 4.5); hole.absarc(0, 4.5, gap / 2, 0, Math.PI, false); hole.lineTo(-gap / 2, 0); sh.holes.push(hole); }
        const geo = new THREE.ExtrudeGeometry(sh, { depth: 1.2, bevelEnabled: false }); geo.translate(0, 0, -0.6);
        const uv = geo.attributes.uv as THREE.BufferAttribute; for (let k = 0; k < uv.count; k++) uv.setXY(k, uv.getX(k) / 8, uv.getY(k) / 8);
        const m = new THREE.Mesh(geo, wallMat); m.position.set(x, 0, z); m.rotation.y = ry; m.receiveShadow = true; grp.add(m);
      };
      wall(len, 0, -wid / 2, 0, 0); wall(len, 0, wid / 2, 0, 0);
      wall(wid + 1.2, -len / 2, 0, Math.PI / 2, T.w[i0] + 3.6); wall(wid + 1.2, len / 2, 0, Math.PI / 2, T.w[i1] + 3.6);
      // ayaklar ve kubbeler
      const nx = Math.max(2, Math.round(len / 10)), nz = 3, dx = len / nx, dz = wid / nz;
      for (let ix = 1; ix < nx; ix++) for (const zz of [-wid / 2 + dz, wid / 2 - dz]) {
        const p = new THREE.Mesh(new THREE.BoxGeometry(1.3, H, 1.3), pierMat); p.position.set(-len / 2 + ix * dx, H / 2, zz); p.castShadow = true; grp.add(p);
      }
      for (let ix = 0; ix < nx; ix++) for (let iz = 0; iz < nz; iz++) {
        const r = Math.min(dx, dz) / 2, d = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
        d.position.set(-len / 2 + (ix + 0.5) * dx, H, -wid / 2 + (iz + 0.5) * dz); grp.add(d);
        const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.18, 6, 24), pierMat); ring.rotation.x = Math.PI / 2; ring.position.copy(d.position); grp.add(ring);
        const ocu = new THREE.Mesh(new THREE.CircleGeometry(r * 0.22, 12), new THREE.MeshBasicMaterial({ color: 0xfff1cc })); ocu.rotation.x = Math.PI / 2; ocu.position.set(d.position.x, H + r - 0.05, d.position.z); grp.add(ocu);
      }
      // tavan düzlüğü (kubbeler arası)
      const ceil = new THREE.Mesh(new THREE.PlaneGeometry(len, wid), domeMat); ceil.rotation.x = Math.PI / 2; ceil.position.y = H; grp.add(ceil);
      // salon tezgâhları ve halı yığınları (pistin dışında)
      for (let k = 0; k < 10; k++) {
        const side = k % 2 ? 1 : -1, x = -len / 2 + 4 + (k / 10) * (len - 8), z = side * (T.w[i0] / 2 + 6.5 + (k % 3) * 1.6);
        const stack = new THREE.Group();
        for (let q = 0; q < 4; q++) { const cp = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.22, 1.8), toon([0xb8322c, 0x2f4f8a, 0xc98a2c, 0x6a2c5a, 0x2a7a5a][(k + q) % 5])); cp.position.y = 0.11 + q * 0.22; cp.rotation.y = q * 0.15; stack.add(cp); }
        stack.position.set(x, 0, z); grp.add(stack);
      }
      this.scene.add(grp);
    }
  }

  /** çarşı kapıları: kemerli geçit + yeşil kitabe */
  private gates() {
    const T = this.track.T;
    const board = this.tex.make(512, 128, (c, w, h) => {
      c.fillStyle = '#1f5a3a'; rr(c, 4, 4, w - 8, h - 8, 20); c.fill(); c.strokeStyle = '#e6c15a'; c.lineWidth = 6; rr(c, 14, 14, w - 28, h - 28, 14); c.stroke();
      c.fillStyle = '#f2d06a'; c.font = '900 56px ui-rounded, system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('KAPALIÇARŞI', w / 2, h / 2 + 3);
    });
    let last = -99;
    for (let i = 0; i < T.n; i++) {
      if (!(T.flags[i] & F_GATE) || i - last < 30) continue; last = i;
      const g = new THREE.Group(), r = T.w[i] / 2 + 1.9, W = r + SHOP_D + 1, H = WALL_H + 4.5;
      const sh = new THREE.Shape(); sh.moveTo(-W, -0.2); sh.lineTo(-r, -0.2); sh.lineTo(-r, 4.2); sh.absarc(0, 4.2, r, Math.PI, 0, true); sh.lineTo(r, -0.2); sh.lineTo(W, -0.2); sh.lineTo(W, H); sh.lineTo(-W, H); sh.lineTo(-W, -0.2);
      const geo = new THREE.ExtrudeGeometry(sh, { depth: 1.6, bevelEnabled: false }); geo.translate(0, 0, -0.8);
      const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: 0xe6d6b8 })); g.add(m);
      // kırmızı-beyaz kemer taşları
      for (let k = 0; k < 13; k++) { const th = Math.PI - (k / 12) * Math.PI, v = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.7, 1.7), toon(k % 2 ? 0xb8322c : 0xf4ecdc)); v.position.set(Math.cos(th) * (r + 0.35), 4.2 + Math.sin(th) * (r + 0.35), 0); v.rotation.z = th - Math.PI / 2; g.add(v); }
      for (const sd of [-1, 1]) { const b = new THREE.Mesh(new THREE.PlaneGeometry(7, 1.75), new THREE.MeshBasicMaterial({ map: board, transparent: true })); b.position.set(0, H - 1.4, sd * 0.82); if (sd < 0) b.rotation.y = Math.PI; g.add(b); }
      g.position.set(T.x[i], T.y[i], T.z[i]); g.rotation.y = -Math.atan2(T.tz[i], T.tx[i]) + Math.PI / 2;
      this.scene.add(g);
    }
  }

  /** tavandan sarkan renkli fenerler */
  private hangingLamps() {
    const T = this.track.T, pos: THREE.Vector3[] = [], chain: number[] = [];
    for (let i = 4; i < T.n; i += 9) {
      if (T.flags[i] & F_HALL) continue;
      const crown = WALL_H + (this.half(i) + SHOP_D) * 0.55;
      for (const d of [-2.6, 2.6]) { const p = this.P(i, d * (i % 2 ? 1 : 0.6), crown - 1.8 - (i % 3) * 0.5); pos.push(new THREE.Vector3(p[0], p[1], p[2])); chain.push(p[0], p[1] + 0.4, p[2], p[0], T.y[i] + crown, p[2]); }
    }
    const cols = [0xff6b6b, 0x6bc0ff, 0xffd54a, 0x7bdc9a, 0xd38bff];
    const glass = new THREE.SphereGeometry(0.42, 10, 8); glass.scale(1, 1.25, 1);
    cols.forEach((c, ci) => {
      const list = pos.filter((_, k) => k % cols.length === ci);
      const im = new THREE.InstancedMesh(glass, new THREE.MeshBasicMaterial({ color: c }), list.length), m = new THREE.Matrix4();
      list.forEach((p, k) => { m.makeTranslation(p.x, p.y, p.z); im.setMatrixAt(k, m); });
      this.scene.add(im); this.lamps.push(im);
    });
    const caps = new THREE.InstancedMesh(new THREE.ConeGeometry(0.32, 0.35, 8), new THREE.MeshLambertMaterial({ color: 0xc8a15a }), pos.length), m = new THREE.Matrix4();
    pos.forEach((p, k) => { m.makeTranslation(p.x, p.y + 0.62, p.z); caps.setMatrixAt(k, m); }); this.scene.add(caps);
    const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(chain, 3));
    this.scene.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0x3a2a20 })));
  }

  /** dükkân cephelerinden sarkan renkli halılar */
  private carpets() {
    const T = this.track.T, cols = ['#b8322c', '#2f4f8a', '#c98a2c', '#6a2c5a', '#2a7a5a', '#d2553a'];
    const atlas = this.tex.make(512, 256, (c) => {
      cols.forEach((col, k) => {
        const x = (k % 3) * 170 + 4, y = Math.floor(k / 3) * 128 + 4, w = 162, h = 120;
        c.fillStyle = col; c.fillRect(x, y, w, h); c.strokeStyle = '#f2d8a0'; c.lineWidth = 6; c.strokeRect(x + 8, y + 8, w - 16, h - 16);
        c.fillStyle = '#f2d8a0'; c.beginPath(); c.moveTo(x + w / 2, y + 22); c.lineTo(x + w - 30, y + h / 2); c.lineTo(x + w / 2, y + h - 22); c.lineTo(x + 30, y + h / 2); c.closePath(); c.fill();
        c.fillStyle = col; c.beginPath(); c.arc(x + w / 2, y + h / 2, 16, 0, 7); c.fill();
      });
    });
    const g = new Geo();
    for (let i = 7; i < T.n; i += 11) {
      if (T.flags[i] & (F_HALL | F_GATE)) continue;
      const sd = (i / 11) % 2 < 1 ? 1 : -1, d = sd * (this.half(i) + SHOP_D - 0.12), k = (i * 7) % 6;
      const u0 = (k % 3) / 3, v0 = 1 - (Math.floor(k / 3) + 1) / 2, u1 = u0 + 0.33, v1 = v0 + 0.5;
      const a = this.P(i, d, 0.6), b = this.P((i + 2) % T.n, d, 0.6), c2 = this.P((i + 2) % T.n, d, 3.9), dd = this.P(i, d, 3.9);
      if (sd > 0) g.quad(a, b, c2, dd, [u0, v0], [u1, v0], [u1, v1], [u0, v1]); else g.quad(b, a, dd, c2, [u0, v0], [u1, v0], [u1, v1], [u0, v1]);
    }
    const m = new THREE.Mesh(g.build(), new THREE.MeshLambertMaterial({ map: atlas, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2 }));
    this.scene.add(m);
  }

  /** dükkân önlerinde alışveriş yapan martılar ve kediler (seyirci) */
  private shoppers() {
    const T = this.track.T, spots: { p: THREE.Vector3; yaw: number; k: number }[] = [];
    for (let i = 0; i < T.n; i += this.mobile ? 9 : 6) {
      const hall = T.flags[i] & F_HALL;
      for (const sd of [-1, 1]) {
        if (((i / 6) | 0) % 3 === (sd > 0 ? 0 : 1)) continue;
        const d = sd * (this.half(i) + (hall ? 3 + (i % 5) : 1.3)), p = this.P(i, d, 0);
        spots.push({ p: new THREE.Vector3(p[0], p[1], p[2]), yaw: Math.atan2(-T.tx[i] * sd, T.tz[i] * sd), k: (i + (sd > 0 ? 1 : 0)) % 3 });
      }
    }
    const body = new THREE.SphereGeometry(0.36, 8, 5); body.scale(0.85, 1, 0.75); body.translate(0, 0.45, 0);
    const head = new THREE.SphereGeometry(0.26, 7, 5); head.translate(0, 0.98, 0);
    const ears = [-1, 1].map((sd) => { const e = new THREE.ConeGeometry(0.09, 0.2, 4); e.translate(0, 1.22, sd * 0.15); return e; });
    const cat = mergeGeometries([body, head, ...ears]), gull = mergeGeometries([body.clone(), head.clone(), ((g) => { g.rotateZ(-Math.PI / 2); g.translate(0.3, 0.95, 0); return g; })(new THREE.ConeGeometry(0.07, 0.25, 6))]);
    const mat = (c: number) => { const m = new THREE.MeshLambertMaterial({ color: c }); m.onBeforeCompile = (sh) => { sh.uniforms.uTime = this.uTime; sh.uniforms.uPlayer = this.uPlayer; sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime; uniform vec3 uPlayer;').replace('#include <begin_vertex>', '#include <begin_vertex>\nfloat ph = instanceMatrix[3].x * 0.71 + instanceMatrix[3].z * 1.31; float cheer = 1.0 - smoothstep(8.0, 26.0, distance(instanceMatrix[3].xz, uPlayer.xz));\ntransformed.y += abs(sin(uTime * (4.0 + cheer * 5.0) + ph)) * (0.12 + cheer * 0.5);'); }; return m; };
    [[gull, 0xffffff], [cat, 0xf3a65a], [cat, 0xa9a39d]].forEach(([g, c], ki) => {
      const list = spots.filter((s) => s.k === ki), im = new THREE.InstancedMesh(g as THREE.BufferGeometry, mat(c as number), list.length), m = new THREE.Matrix4(), q = new THREE.Quaternion();
      list.forEach((s, k) => { q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -s.yaw); m.compose(s.p, q, new THREE.Vector3(1, 1, 1)); im.setMatrixAt(k, m); });
      im.castShadow = !this.mobile; this.scene.add(im);
    });
  }
}
