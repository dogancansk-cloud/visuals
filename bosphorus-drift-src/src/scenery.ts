// Manzara: gökyüzü, deniz, arazi, pastel evler, Galata Kulesi, karşı kıyı silueti, vapurlar, martılar.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Track, TOWER_R, Textures, rr } from './track';
import { F_BRIDGE } from './trackpath';

const PASTEL = [0xf6c1c1, 0xf9d9b5, 0xfbeeb3, 0xc9e7cf, 0xbfdcef, 0xd8ccef, 0xf4cfe0, 0xfde3c8, 0xd3ead9, 0xe9d7c3];
const ROOF = [0xd98a6e, 0xc97a63, 0xe39d7d, 0xcf8f7a];
const SEA_Z = 134;

export class Scenery {
  sea!: THREE.Mesh;
  ferries: THREE.Group[] = [];
  gulls: { g: THREE.Group; wl: THREE.Object3D; wr: THREE.Object3D; r: number; a: number; sp: number; h: number; cx: number; cz: number }[] = [];
  private nearest: Float32Array; // ızgara için yardımcı
  constructor(private scene: THREE.Scene, private track: Track, private tex: Textures, mobile: boolean) {
    this.nearest = new Float32Array(0);
    this.sky();
    this.water();
    this.terrain();
    this.houses(mobile);
    this.tower();
    this.skyline();
    this.boats();
    this.birds();
    this.props();
  }

  /** Arazi yüksekliği (ev yerleştirme için) */
  baseH(x: number, z: number) {
    void x;
    if (z > SEA_Z) return -3;
    const t = Math.min(1, Math.max(0, (118 - z) / 78));
    return 1 + 5.4 * t * t * (3 - 2 * t);
  }
  groundH(x: number, z: number) {
    const T = this.track.T; let bd = 1e9, bi = -1;
    for (let i = 0; i < T.n; i += 2) {
      if (T.flags[i] & F_BRIDGE) continue;
      const dx = x - T.x[i], dz = z - T.z[i], d = dx * dx + dz * dz;
      if (d < bd) { bd = d; bi = i; }
    }
    const base = this.baseH(x, z); if (bi < 0) return base;
    const d = Math.sqrt(bd), w = T.w[bi] / 2 + 1.7;
    const k = Math.min(1, Math.max(0, (d - w) / 34)), e = k * k * (3 - 2 * k);
    return (T.y[bi] - 0.12) * (1 - e) + base * e;
  }
  /** xz'de pistin (köprüler dahil) en yakın kenarına uzaklık */
  clearance(x: number, z: number) {
    const T = this.track.T; let best = 1e9;
    for (let i = 0; i < T.n; i += 2) { const d = Math.hypot(x - T.x[i], z - T.z[i]) - T.w[i] / 2 - 1.7; if (d < best) best = d; }
    return best;
  }

  private sky() {
    const g = new THREE.SphereGeometry(900, 32, 16);
    const m = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { top: { value: new THREE.Color(0x8ec5f0) }, mid: { value: new THREE.Color(0xcfe6f7) }, hor: { value: new THREE.Color(0xffe0cc) } },
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 top; uniform vec3 mid; uniform vec3 hor; varying vec3 vP; void main(){ float h = vP.y; vec3 c = h > 0.18 ? mix(mid, top, smoothstep(0.18, 0.7, h)) : mix(hor, mid, smoothstep(-0.02, 0.18, h)); gl_FragColor = vec4(c, 1.0); }',
    });
    const s = new THREE.Mesh(g, m); s.renderOrder = -1; this.scene.add(s);
    // pastel bulutlar
    const cm = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0xfff3ea, emissiveIntensity: 0.55 });
    const blobs: THREE.BufferGeometry[] = [];
    for (let k = 0; k < 14; k++) {
      const a = (k / 14) * Math.PI * 2 + k * 0.7, r = 420 + (k % 3) * 80, y = 120 + (k % 4) * 25;
      for (let b = 0; b < 5; b++) { const sg = new THREE.SphereGeometry(18 + (b % 3) * 9, 10, 7); sg.scale(1.4, 0.6, 1); sg.translate(Math.cos(a) * r + b * 22 - 44, y + (b % 2) * 6, Math.sin(a) * r + (b % 3) * 8); blobs.push(sg); }
    }
    this.scene.add(new THREE.Mesh(mergeGeometries(blobs), cm));
  }

  private water() {
    const g = new THREE.PlaneGeometry(2400, 1600, 1, 1); g.rotateX(-Math.PI / 2); g.translate(0, 0, 900);
    const m = new THREE.ShaderMaterial({
      fog: true,
      uniforms: { t: { value: 0 }, fogColor: { value: new THREE.Color() }, fogNear: { value: 1 }, fogFar: { value: 1000 } },
      vertexShader: '#include <fog_pars_vertex>\nvarying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition; \n#include <fog_vertex>\n}',
      fragmentShader: '#include <fog_pars_fragment>\nuniform float t; varying vec3 vW; void main(){ float w = sin(vW.x*0.08 + t*0.9)*sin(vW.z*0.11 - t*0.7) + 0.5*sin(vW.x*0.23 - vW.z*0.17 + t*1.7); vec3 c = mix(vec3(0.49,0.78,0.82), vec3(0.62,0.86,0.88), smoothstep(-0.4, 1.2, w)); float sp = smoothstep(1.15, 1.4, w); c = mix(c, vec3(0.97,0.99,1.0), sp*0.7); gl_FragColor = vec4(c,1.0); \n#include <fog_fragment>\n}',
    });
    this.sea = new THREE.Mesh(g, m); this.sea.position.y = -0.2; this.scene.add(this.sea);
    // rıhtım kenarı
    const q = new THREE.Mesh(new THREE.BoxGeometry(800, 4, 3), new THREE.MeshLambertMaterial({ color: 0xe9dcc8 }));
    q.position.set(0, -1.1, SEA_Z + 1.5); this.scene.add(q);
  }

  private terrain() {
    const x0 = -260, x1 = 260, z0 = -200, z1 = SEA_Z + 6, st = 4;
    const nx = Math.round((x1 - x0) / st) + 1, nz = Math.round((z1 - z0) / st) + 1;
    const g = new THREE.PlaneGeometry(x1 - x0, z1 - z0, nx - 1, nz - 1); g.rotateX(-Math.PI / 2); g.translate((x0 + x1) / 2, 0, (z0 + z1) / 2);
    const pos = g.attributes.position as THREE.BufferAttribute, col = new Float32Array(pos.count * 3);
    const paved = new THREE.Color(0xeadfce), grass = new THREE.Color(0xcfe5b8), c = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i), h = this.groundH(x, z);
      pos.setY(i, Math.min(h, z > SEA_Z - 1 ? -1.5 : h));
      const k = Math.min(1, Math.max(0, (Math.abs(x) - 150) / 80 + (-z - 120) / 80));
      c.copy(paved).lerp(grass, k); col.set([c.r, c.g, c.b], i * 3);
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.computeVertexNormals();
    const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true }));
    m.receiveShadow = true; this.scene.add(m);
  }

  private houses(mobile: boolean) {
    const win = this.tex.make(128, 128, (c, w, h) => {
      c.fillStyle = '#ffffff'; c.fillRect(0, 0, w, h);
      c.fillStyle = '#ffffff'; c.fillRect(0, 0, w, 6);
      c.fillStyle = '#b9d1e6'; rr(c, 38, 30, 52, 70, 10); c.fill();
      c.strokeStyle = '#fff8f0'; c.lineWidth = 7; rr(c, 38, 30, 52, 70, 10); c.stroke();
      c.beginPath(); c.moveTo(64, 30); c.lineTo(64, 100); c.moveTo(38, 62); c.lineTo(90, 62); c.lineWidth = 4; c.stroke();
      c.fillStyle = 'rgba(0,0,0,0.08)'; c.fillRect(30, 100, 68, 7);
    }, true);
    const T = this.track.T, tw = T.tower;
    const bodies: THREE.BufferGeometry[] = [], roofs: THREE.BufferGeometry[] = [];
    const step = mobile ? 13 : 11;
    let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let gx = -230; gx <= 230; gx += step) for (let gz = -170; gz <= SEA_Z - 8; gz += step) {
      const x = gx + (rnd() - 0.5) * 3, z = gz + (rnd() - 0.5) * 3;
      if (Math.hypot(x - tw.x, z - tw.z) < 40) continue;
      const cl = this.clearance(x, z);
      const w = 6 + rnd() * 4, d = 6 + rnd() * 3;
      if (cl < Math.hypot(w, d) / 2 + 1.5) continue;
      if (cl > 90 && rnd() < 0.35) continue;
      // en yakın pist teğetine hizala
      let bi = 0, bd = 1e9; for (let i = 0; i < T.n; i += 3) { const dd = (x - T.x[i]) ** 2 + (z - T.z[i]) ** 2; if (dd < bd) { bd = dd; bi = i; } }
      const yaw = cl < 30 ? Math.atan2(T.tz[bi], T.tx[bi]) : 0.2;
      const floors = cl < 25 ? 3 + Math.floor(rnd() * 2) : 2 + Math.floor(rnd() * 3);
      const H = floors * 3 + 0.6, base = this.groundH(x, z) - 1.5;
      const color = new THREE.Color(PASTEL[Math.floor(rnd() * PASTEL.length)]);
      const b = box(w, H + 1.5, d, color); b.translate(0, base + (H + 1.5) / 2, 0);
      const parts = [b];
      // cumba: piste bakan yüzde
      if (floors >= 3 && rnd() < 0.75) {
        const side = ((x - T.x[bi]) * -T.tz[bi] + (z - T.z[bi]) * T.tx[bi]) > 0 ? -1 : 1; // pist tarafı (yerel z)
        const cw = w * 0.55, ch = (floors - 1) * 3 - 0.4, cb = box(cw, ch, 1.2, color.clone().multiplyScalar(0.96));
        cb.translate((rnd() - 0.5) * (w - cw) * 0.6, base + 1.5 + 3 + ch / 2 + 0.2, side * (d / 2 + 0.6)); parts.push(cb);
      }
      const roof = new THREE.ConeGeometry(Math.SQRT1_2, 1, 4, 1); roof.rotateY(Math.PI / 4);
      roof.scale(w + 0.8, 2 + rnd() * 1.2, d + 0.8); roof.translate(0, base + H + 1.5 + 1.1, 0);
      const rc = new THREE.Color(ROOF[Math.floor(rnd() * ROOF.length)]); paint(roof, rc);
      const rot = new THREE.Matrix4().makeRotationY(-yaw), tr = new THREE.Matrix4().makeTranslation(x, 0, z);
      for (const p of parts) { p.applyMatrix4(rot); p.applyMatrix4(tr); bodies.push(p); }
      roof.applyMatrix4(rot); roof.applyMatrix4(tr); roofs.push(roof);
    }
    const hb = new THREE.Mesh(mergeGeometries(bodies), new THREE.MeshLambertMaterial({ map: win, vertexColors: true }));
    hb.castShadow = !mobile; hb.receiveShadow = true; this.scene.add(hb);
    const rf = new THREE.Mesh(mergeGeometries(roofs.map((r) => r.toNonIndexed())), new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }));
    rf.castShadow = !mobile; this.scene.add(rf);
  }

  private tower() {
    const T = this.track.T, tw = T.tower, g = new THREE.Group();
    const R = TOWER_R, H = 52;
    const stone = this.tex.make(256, 256, (c, w, h) => {
      c.fillStyle = '#efe0c9'; c.fillRect(0, 0, w, h);
      c.strokeStyle = '#e0ccb0'; c.lineWidth = 2;
      for (let r = 0; r < 16; r++) for (let k = 0; k < 8; k++) c.strokeRect(k * 32 + (r % 2) * 16, r * 16, 32, 16);
      c.fillStyle = '#7f8fa8';
      for (let r = 0; r < 2; r++) for (let k = 0; k < 4; k++) { const x = k * 64 + 22, y = r * 128 + 40; rr(c, x, y, 20, 46, 10); c.fill(); }
    }, true);
    stone.repeat.set(6, 4);
    const body = new THREE.Mesh(new THREE.CylinderGeometry(R, R * 1.08, H, 40, 1, true), new THREE.MeshLambertMaterial({ map: stone }));
    body.position.y = H / 2; body.castShadow = true; body.receiveShadow = true; g.add(body);
    const cream = new THREE.MeshLambertMaterial({ color: 0xf7ecdb });
    const ring = (r: number, h: number, y: number, m: THREE.Material = cream) => { const me = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 40), m); me.position.y = y; me.castShadow = true; g.add(me); return me; };
    ring(R + 0.6, 1.0, 22); ring(R + 0.6, 1.0, 36);
    ring(R + 2.2, 1.4, H + 0.6); // balkon
    const rail = new THREE.Mesh(new THREE.CylinderGeometry(R + 2.1, R + 2.1, 1.3, 40, 1, true), new THREE.MeshLambertMaterial({ color: 0xa9c4da, side: THREE.DoubleSide }));
    rail.position.y = H + 2; g.add(rail);
    const drumTex = this.tex.make(256, 64, (c, w, h) => { c.fillStyle = '#f4e6d1'; c.fillRect(0, 0, w, h); c.fillStyle = '#5b6b86'; for (let k = 0; k < 4; k++) { rr(c, k * 64 + 18, 12, 28, 46, 13); c.fill(); } }, true);
    drumTex.repeat.set(6, 1);
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(R - 1, R - 1, 7, 40), new THREE.MeshLambertMaterial({ map: drumTex }));
    drum.position.y = H + 4.8; g.add(drum);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(R + 0.4, 17, 40), new THREE.MeshLambertMaterial({ color: 0x8da6c2 }));
    cone.position.y = H + 8.3 + 8.5; cone.castShadow = true; g.add(cone);
    const fin = new THREE.Mesh(new THREE.ConeGeometry(0.4, 4, 8), new THREE.MeshLambertMaterial({ color: 0xf2c14e })); fin.position.y = H + 8.3 + 17 + 1.8; g.add(fin);
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.8, 12, 8), fin.material); ball.position.y = H + 8.3 + 17 + 0.2; g.add(ball);
    g.position.set(tw.x, tw.y0 - 0.3, tw.z);
    this.scene.add(g);
    // kule meydanı
    const plaza = new THREE.Mesh(new THREE.CircleGeometry(R + 6, 40), new THREE.MeshLambertMaterial({ map: this.tex.cobble }));
    plaza.rotation.x = -Math.PI / 2; plaza.position.set(tw.x, tw.y0 - 0.1, tw.z); plaza.receiveShadow = true; this.scene.add(plaza);
  }

  private skyline() {
    const far = new THREE.MeshLambertMaterial({ color: 0xd9cfe6 }), far2 = new THREE.MeshLambertMaterial({ color: 0xcfc3e0 }), hill = new THREE.MeshLambertMaterial({ color: 0xe3dcea });
    const parts: THREE.BufferGeometry[] = [], parts2: THREE.BufferGeometry[] = [], hills: THREE.BufferGeometry[] = [];
    for (let k = 0; k < 9; k++) { const s = new THREE.SphereGeometry(110 + (k % 3) * 30, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2); s.scale(1.5, 0.28, 0.7); s.translate(-520 + k * 140, -4, 520 + (k % 2) * 60); hills.push(s); }
    const mosque = (x: number, z: number, y: number, s: number, minarets: number, arr: THREE.BufferGeometry[]) => {
      const b = new THREE.BoxGeometry(34 * s, 12 * s, 34 * s); b.translate(x, y + 6 * s, z); arr.push(b);
      const d = new THREE.SphereGeometry(14 * s, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2); d.translate(x, y + 16 * s, z); arr.push(d);
      const dr = new THREE.CylinderGeometry(14 * s, 14 * s, 4 * s, 20); dr.translate(x, y + 14 * s, z); arr.push(dr);
      for (const [ox, oz] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) { const sd = new THREE.SphereGeometry(8 * s, 14, 7, 0, Math.PI * 2, 0, Math.PI / 2); sd.translate(x + ox * 15 * s, y + 12 * s, z + oz * 15 * s); arr.push(sd); }
      const corners = [[-1, -1], [1, -1], [-1, 1], [1, 1]].slice(0, minarets);
      for (const [ox, oz] of corners) {
        const m = new THREE.CylinderGeometry(1.3 * s, 1.5 * s, 46 * s, 10); m.translate(x + ox * 21 * s, y + 23 * s, z + oz * 21 * s); arr.push(m);
        const c = new THREE.ConeGeometry(1.6 * s, 8 * s, 10); c.translate(x + ox * 21 * s, y + 50 * s, z + oz * 21 * s); arr.push(c);
        const bal = new THREE.CylinderGeometry(2.2 * s, 2.2 * s, 1 * s, 10); bal.translate(x + ox * 21 * s, y + 36 * s, z + oz * 21 * s); arr.push(bal);
      }
    };
    mosque(-160, 470, 22, 1.6, 4, parts);   // Süleymaniye
    mosque(-20, 330, 0, 1.0, 2, parts2);    // Yeni Cami
    mosque(160, 520, 26, 1.5, 4, parts);    // Sultanahmet yönü
    mosque(260, 470, 16, 1.2, 4, parts);
    for (let k = 0; k < 60; k++) { const w = 8 + (k % 4) * 3, h = 6 + (k % 5) * 3; const b = new THREE.BoxGeometry(w, h, 8); b.translate(-360 + k * 12 + (k % 3) * 4, h / 2 + (k % 7), 345 + (k % 6) * 14); parts2.push(b); }
    this.scene.add(new THREE.Mesh(mergeGeometries(hills), hill));
    this.scene.add(new THREE.Mesh(mergeGeometries(parts), far));
    this.scene.add(new THREE.Mesh(mergeGeometries(parts2), far2));
    // Galata Köprüsü
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(16, 2.2, 200), new THREE.MeshLambertMaterial({ color: 0xc8d3e0 }));
    bridge.position.set(-215, 1.4, 240); this.scene.add(bridge);
    const pm = new THREE.MeshLambertMaterial({ color: 0xb0bfd0 });
    for (let k = 0; k < 9; k++) { const p = new THREE.Mesh(new THREE.BoxGeometry(3, 6, 3), pm); p.position.set(-215, -1, 150 + k * 22); this.scene.add(p); }
  }

  private boats() {
    const mk = (hullC: number) => {
      const g = new THREE.Group();
      const hull = new THREE.Mesh(new THREE.BoxGeometry(26, 3, 8), new THREE.MeshLambertMaterial({ color: hullC })); hull.position.y = 1; g.add(hull);
      const deck = new THREE.Mesh(new THREE.BoxGeometry(22, 3, 7), new THREE.MeshLambertMaterial({ color: 0xfbf7f0 })); deck.position.y = 4; g.add(deck);
      const top = new THREE.Mesh(new THREE.BoxGeometry(14, 2.4, 6), new THREE.MeshLambertMaterial({ color: 0xfbf7f0 })); top.position.y = 6.6; g.add(top);
      const fun = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 4, 12), new THREE.MeshLambertMaterial({ color: 0xf2c14e })); fun.position.set(0, 9.4, 0); g.add(fun);
      const band = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, 0.8, 12), new THREE.MeshLambertMaterial({ color: 0x3c3a47 })); band.position.set(0, 11.2, 0); g.add(band);
      this.scene.add(g); return g;
    };
    for (let k = 0; k < 3; k++) { const f = mk(k === 1 ? 0x4f7cac : 0x2f4b6e); f.userData = { z: 190 + k * 55, sp: (k % 2 ? -1 : 1) * (6 + k * 2), x: -200 + k * 170 }; this.ferries.push(f); }
  }

  private birds() {
    const bm = new THREE.MeshLambertMaterial({ color: 0xffffff }), gm = new THREE.MeshLambertMaterial({ color: 0xc9d0d8 });
    for (let k = 0; k < 14; k++) {
      const g = new THREE.Group();
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 6), bm); body.scale.set(1.6, 0.8, 0.8); g.add(body);
      const wl = new THREE.Object3D(), wr = new THREE.Object3D();
      const wg = new THREE.BoxGeometry(0.7, 0.08, 1.8); wg.translate(0, 0, 0.9);
      const a = new THREE.Mesh(wg, gm); wr.add(a); const b = new THREE.Mesh(wg, gm); b.rotation.y = Math.PI; wl.add(b);
      g.add(wl, wr);
      const tw = this.track.T.tower, cx = k < 7 ? tw.x : -40 + (k - 7) * 30, cz = k < 7 ? tw.z : 80;
      this.gulls.push({ g, wl, wr, r: 22 + (k % 5) * 9, a: k * 1.3, sp: (0.18 + (k % 3) * 0.05) * (k % 2 ? 1 : -1), h: (k < 7 ? 75 : 30) + (k % 4) * 6, cx, cz });
      this.scene.add(g);
    }
  }

  private props() {
    const T = this.track.T, n = T.n;
    // sokak lambaları
    const mats: THREE.Matrix4[] = [], heads: THREE.Matrix4[] = [], m = new THREE.Matrix4();
    for (let i = 5; i < n; i += 24) {
      if (T.flags[i] & 2) continue;
      for (const sd of [-1, 1]) {
        if ((i / 24) % 2 < 1 && sd < 0) continue;
        const d = sd * (T.w[i] / 2 + 2.3), x = T.x[i] - T.tz[i] * d, z = T.z[i] + T.tx[i] * d, y = T.y[i] + T.bank[i] * d;
        m.makeTranslation(x, y + 2.5, z); mats.push(m.clone());
        m.makeTranslation(x, y + 5.2, z); heads.push(m.clone());
      }
    }
    const pole = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.12, 0.16, 5, 6), new THREE.MeshLambertMaterial({ color: 0x5f6f86 }), mats.length);
    mats.forEach((mm, k) => pole.setMatrixAt(k, mm)); this.scene.add(pole);
    const head = new THREE.InstancedMesh(new THREE.SphereGeometry(0.45, 10, 8), new THREE.MeshLambertMaterial({ color: 0xfff1c7, emissive: 0xffe3a3, emissiveIntensity: 0.6 }), heads.length);
    heads.forEach((mm, k) => head.setMatrixAt(k, mm)); this.scene.add(head);
    // flama ipleri (kırmızı-beyaz üçgenler)
    const flagsAt = [40, 120, 230, 650, 760];
    const fg: THREE.BufferGeometry[] = [];
    for (const i of flagsAt) {
      const w = T.w[i] / 2 + 2.3, y0 = T.y[i] + 6.5;
      for (let k = 0; k <= 12; k++) {
        const t = k / 12, d = -w + 2 * w * t, sag = Math.sin(t * Math.PI) * 1.1;
        const x = T.x[i] - T.tz[i] * d, z = T.z[i] + T.tx[i] * d;
        const tri = new THREE.BufferGeometry();
        const ax = -T.tz[i] * 0.45, az = T.tx[i] * 0.45;
        tri.setAttribute('position', new THREE.Float32BufferAttribute([x - ax, y0 - sag, z - az, x + ax, y0 - sag, z + az, x, y0 - sag - 1.0, z], 3));
        const c = new THREE.Color(k % 2 ? 0xf6f0e6 : 0xea7a7a); tri.setAttribute('color', new THREE.Float32BufferAttribute([c.r, c.g, c.b, c.r, c.g, c.b, c.r, c.g, c.b], 3));
        tri.computeVertexNormals(); fg.push(tri);
      }
    }
    this.scene.add(new THREE.Mesh(mergeGeometries(fg), new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide })));
    // ağaçlar (yuvarlak, pastel)
    const trees: THREE.Matrix4[] = [], trunks: THREE.Matrix4[] = [];
    let seed = 3; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < n; i += 17) {
      if (T.flags[i] & (F_BRIDGE | 2)) continue;
      const sd = rnd() < 0.5 ? -1 : 1, d = sd * (T.w[i] / 2 + 4 + rnd() * 2), x = T.x[i] - T.tz[i] * d, z = T.z[i] + T.tx[i] * d;
      if (this.clearance(x, z) < 1.5 || z > SEA_Z - 3) continue;
      const y = this.groundH(x, z), s = 1.6 + rnd() * 0.8;
      m.compose(new THREE.Vector3(x, y + 1.2, z), new THREE.Quaternion(), new THREE.Vector3(1, 1, 1)); trunks.push(m.clone());
      m.compose(new THREE.Vector3(x, y + 2.6 + s, z), new THREE.Quaternion(), new THREE.Vector3(s, s * 1.1, s)); trees.push(m.clone());
    }
    const tr = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.2, 0.28, 2.4, 6), new THREE.MeshLambertMaterial({ color: 0xb58b6b }), trunks.length);
    trunks.forEach((mm, k) => tr.setMatrixAt(k, mm)); this.scene.add(tr);
    const tc = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), new THREE.MeshLambertMaterial({ color: 0x9fd39b, flatShading: true }), trees.length);
    trees.forEach((mm, k) => tc.setMatrixAt(k, mm)); tc.castShadow = true; this.scene.add(tc);
  }

  update(dt: number, time: number) {
    (this.sea.material as THREE.ShaderMaterial).uniforms.t.value = time;
    for (const f of this.ferries) {
      const u = f.userData as { z: number; sp: number; x: number };
      u.x += u.sp * dt; if (u.x > 420) u.x = -420; if (u.x < -420) u.x = 420;
      f.position.set(u.x, Math.sin(time * 0.8 + u.z) * 0.15, u.z); f.rotation.y = u.sp > 0 ? 0 : Math.PI;
    }
    for (const b of this.gulls) {
      b.a += b.sp * dt;
      const x = b.cx + Math.cos(b.a) * b.r, z = b.cz + Math.sin(b.a) * b.r;
      b.g.position.set(x, b.h + Math.sin(time + b.r) * 2, z);
      b.g.rotation.y = -(b.a + (b.sp > 0 ? Math.PI / 2 : -Math.PI / 2));
      const fl = Math.sin(time * 6 + b.r) * 0.5;
      b.wl.rotation.x = fl; b.wr.rotation.x = -fl;
    }
  }
}

function box(w: number, h: number, d: number, c: THREE.Color) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv as THREE.BufferAttribute;
  const faceU = [d, d, w, w, w, w], faceV = [h, h, d, d, h, h];
  for (let f = 0; f < 6; f++) for (let k = 0; k < 4; k++) {
    const i = f * 4 + k;
    if (f === 2 || f === 3) { uv.setXY(i, 0.01, 0.99); continue; } // üst/alt: düz duvar
    uv.setXY(i, uv.getX(i) * Math.max(1, Math.round(faceU[f] / 3)), uv.getY(i) * (faceV[f] / 3));
  }
  paint(g, c); return g;
}
function paint(g: THREE.BufferGeometry, c: THREE.Color) {
  const n = g.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) a.set([c.r, c.g, c.b], i * 3);
  g.setAttribute('color', new THREE.BufferAttribute(a, 3));
  if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
}
