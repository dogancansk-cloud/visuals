// Pist: konum sorguları (en yakın nokta, zemin yüksekliği) ve pist örgüsü.
import * as THREE from 'three';
import { buildTrack, F_BRIDGE, F_TUNNEL, F_RAMP, F_SPIRAL, type TrackData } from './trackpath';

export interface Frame { i: number; t: number; s: number; d: number; h: number; w: number; tx: number; tz: number; flags: number }

export class Track {
  readonly T: TrackData;
  readonly n: number;
  readonly L: number;
  constructor(H: (x: number, z: number) => number) { this.T = buildTrack(H); this.n = this.T.n; this.L = this.T.length; }

  wrap(i: number) { return ((i % this.n) + this.n) % this.n; }

  /** En yakın pist noktası. hint: önceki indeks; win: arama penceresi. */
  frame(x: number, y: number, z: number, hint: number, out: Frame, win = 18): Frame {
    const T = this.T; let best = -1, bd = 1e18;
    for (let k = -win; k <= win; k++) {
      const i = this.wrap(hint + k);
      const dx = x - T.x[i], dz = z - T.z[i], dy = y - T.y[i];
      const dd = dx * dx + dz * dz + (dy * dy > 25 ? dy * dy * 4 : 0);
      if (dd < bd) { bd = dd; best = i; }
    }
    return this.project(x, z, best, out);
  }

  /** Tüm pistte arama (yeniden doğma için). */
  frameGlobal(x: number, y: number, z: number, out: Frame): Frame {
    const T = this.T; let best = 0, bd = 1e18;
    for (let i = 0; i < this.n; i++) {
      const dx = x - T.x[i], dz = z - T.z[i], dy = y - T.y[i];
      const dd = dx * dx + dz * dz + dy * dy * 4;
      if (dd < bd) { bd = dd; best = i; }
    }
    return this.project(x, z, best, out);
  }

  private project(x: number, z: number, i0: number, out: Frame): Frame {
    const T = this.T;
    // komşu segmentlerden hangisine düştüğünü bul
    let i = i0, j = this.wrap(i0 + 1);
    let ax = T.x[j] - T.x[i], az = T.z[j] - T.z[i];
    let t = ((x - T.x[i]) * ax + (z - T.z[i]) * az) / (ax * ax + az * az);
    if (t < 0) { j = i; i = this.wrap(i0 - 1); ax = T.x[j] - T.x[i]; az = T.z[j] - T.z[i]; t = ((x - T.x[i]) * ax + (z - T.z[i]) * az) / (ax * ax + az * az); }
    t = Math.max(0, Math.min(1, t));
    const px = T.x[i] + ax * t, pz = T.z[i] + az * t;
    const tx = T.tx[i] + (T.tx[j] - T.tx[i]) * t, tz = T.tz[i] + (T.tz[j] - T.tz[i]) * t, tl = Math.hypot(tx, tz) || 1;
    const ux = tx / tl, uz = tz / tl;
    // sağ vektör (x,z düzleminde): (-uz, ux)
    const d = (x - px) * -uz + (z - pz) * ux;
    const bank = T.bank[i] + (T.bank[j] - T.bank[i]) * t;
    const y = T.y[i] + (T.y[j] - T.y[i]) * t;
    out.i = i; out.t = t; out.s = (i + t) * (this.L / this.n); out.d = d;
    out.w = T.w[i] + (T.w[j] - T.w[i]) * t; out.h = y + bank * d; out.tx = ux; out.tz = uz; out.flags = T.flags[i] | T.flags[j];
    return out;
  }

  /** s (metre) ve yanal kayma d için dünya noktası */
  point(s: number, d: number, out = new THREE.Vector3()) {
    const T = this.T, f = (((s / this.L) * this.n) % this.n + this.n) % this.n, i = Math.floor(f), j = (i + 1) % this.n, t = f - i;
    const tx = T.tx[i] + (T.tx[j] - T.tx[i]) * t, tz = T.tz[i] + (T.tz[j] - T.tz[i]) * t, l = Math.hypot(tx, tz) || 1;
    const bank = T.bank[i] + (T.bank[j] - T.bank[i]) * t;
    out.set(T.x[i] + (T.x[j] - T.x[i]) * t - (tz / l) * d, T.y[i] + (T.y[j] - T.y[i]) * t + bank * d, T.z[i] + (T.z[j] - T.z[i]) * t + (tx / l) * d);
    return out;
  }
  heading(s: number) { const i = this.wrap(Math.round((s / this.L) * this.n)); return Math.atan2(this.T.tz[i], this.T.tx[i]); }
  idxOf(s: number) { return this.wrap(Math.round((s / this.L) * this.n)); }

  // ---------- örgü ----------
  build(scene: THREE.Scene, tex: Textures) {
    const T = this.T, n = this.n;
    const road = new Geo(), curb = new Geo(), wall = new Geo(), under = new Geo(), rail = new Geo();
    const P = (i: number, d: number, dy = 0) => { const b = T.bank[i]; return [T.x[i] - T.tz[i] * d, T.y[i] + b * d + dy, T.z[i] + T.tx[i] * d] as const; };
    let v = 0;
    for (let k = 0; k < n; k++) {
      const i = k, j = (k + 1) % n, wi = T.w[i] / 2, wj = T.w[j] / 2, ds = this.L / n, v2 = v + ds / 12;
      const fl = T.flags[i] | T.flags[j];
      // yol
      road.quad(P(i, -wi), P(j, -wj), P(j, wj), P(i, wi), [0, v], [0, v2], [1, v2], [1, v]);
      // bordür (1 m)
      for (const side of [-1, 1]) {
        const a = side * wi, b = side * wj, a2 = side * (wi + 1.1), b2 = side * (wj + 1.1);
        const q = side < 0 ? [P(i, a2, 0.08), P(j, b2, 0.08), P(j, b, 0.02), P(i, a, 0.02)] : [P(i, a, 0.02), P(j, b, 0.02), P(j, b2, 0.08), P(i, a2, 0.08)];
        const cv = (k * ds) / 6;
        curb.quad(q[0], q[1], q[2], q[3], [0, cv], [0, cv + ds / 6], [1, cv + ds / 6], [1, cv]);
        // duvar / korkuluk
        const wd = side * (wi + 1.1), wdj = side * (wj + 1.1), wo = side * (wi + 1.7), woj = side * (wj + 1.7);
        const H = fl & F_TUNNEL ? 0 : (fl & (F_BRIDGE)) ? 1.0 : 0.9;
        if (H > 0) {
          const g = fl & F_BRIDGE ? rail : wall;
          const inner = [P(i, wd, 0), P(j, wdj, 0), P(j, wdj, H), P(i, wd, H)];
          const outer = [P(i, wo, -0.2), P(j, woj, -0.2), P(j, woj, H), P(i, wo, H)];
          const uv0 = [0, 0], uv1 = [ds / 3, 0], uv2 = [ds / 3, 1], uv3 = [0, 1];
          if (side < 0) { g.quad(inner[1], inner[0], inner[3], inner[2], uv1, uv0, uv3, uv2); g.quad(outer[0], outer[1], outer[2], outer[3], uv0, uv1, uv2, uv3); }
          else { g.quad(inner[0], inner[1], inner[2], inner[3], uv0, uv1, uv2, uv3); g.quad(outer[1], outer[0], outer[3], outer[2], uv1, uv0, uv3, uv2); }
          g.quad(P(i, wd, H), P(j, wdj, H), P(j, woj, H), P(i, wo, H), [0, 0], [ds / 3, 0], [ds / 3, 0.15], [0, 0.15]);
        }
        // alt etek
        const depth = fl & F_BRIDGE ? 1.4 : 2.5;
        const e = side * (wi + 1.7), ej = side * (wj + 1.7);
        const top = [P(i, e, -0.2), P(j, ej, -0.2)], bot = [P(i, e, -depth), P(j, ej, -depth)];
        if (side < 0) under.quad(bot[0], bot[1], top[1], top[0], [0, 0], [1, 0], [1, 1], [0, 1]);
        else under.quad(bot[1], bot[0], top[0], top[1], [0, 0], [1, 0], [1, 1], [0, 1]);
      }
      if (fl & F_BRIDGE) { // köprü altı
        const e = wi + 1.7, ej = wj + 1.7;
        under.quad(P(j, -ej, -1.4), P(i, -e, -1.4), P(i, e, -1.4), P(j, ej, -1.4), [0, 0], [1, 0], [1, 1], [0, 1]);
      }
      v = v2;
    }
    const mk = (g: Geo, m: THREE.Material, shadow = true) => { const me = new THREE.Mesh(g.build(), m); me.receiveShadow = shadow; scene.add(me); return me; };
    mk(road, new THREE.MeshLambertMaterial({ map: tex.asphalt }));
    mk(curb, new THREE.MeshLambertMaterial({ map: tex.curb }));
    mk(wall, new THREE.MeshLambertMaterial({ map: tex.wall }));
    mk(rail, new THREE.MeshLambertMaterial({ map: tex.rail }));
    mk(under, new THREE.MeshLambertMaterial({ color: 0xc9c4d8 }));
    this.buildTunnel(scene, tex);
    this.buildSupports(scene);
    this.buildStartLine(scene, tex);
  }

  private buildTunnel(scene: THREE.Scene, tex: Textures) {
    const T = this.T, arch = new Geo(); let a0 = -1, a1 = -1;
    for (let i = 0; i < this.n; i++) if (T.flags[i] & F_TUNNEL) { if (a0 < 0) a0 = i; a1 = i; }
    if (a0 < 0) return;
    const seg = 14;
    for (let i = a0; i < a1; i++) {
      const r = T.w[i] / 2 + 1.7;
      for (let k = 0; k < seg; k++) {
        const t0 = (k / seg) * Math.PI, t1 = ((k + 1) / seg) * Math.PI;
        const pt = (ii: number, th: number, rr: number) => { const c = Math.cos(th) * rr, h = Math.sin(th) * rr * 0.85; return [T.x[ii] - T.tz[ii] * c, T.y[ii] + h, T.z[ii] + T.tx[ii] * c] as const; };
        arch.quad(pt(i, t1, r), pt(i + 1, t1, r), pt(i + 1, t0, r), pt(i, t0, r), [k / seg, i / 4], [k / seg, (i + 1) / 4], [(k + 1) / seg, (i + 1) / 4], [(k + 1) / seg, i / 4]);
        arch.quad(pt(i, t0, r + 0.8), pt(i + 1, t0, r + 0.8), pt(i + 1, t1, r + 0.8), pt(i, t1, r + 0.8), [0, 0], [0, 1], [1, 1], [1, 0]);
      }
    }
    const m = new THREE.Mesh(arch.build(), new THREE.MeshLambertMaterial({ map: tex.tunnel, side: THREE.DoubleSide }));
    scene.add(m);
    // ağız cepheleri
    for (const [i, dir] of [[a0, -1], [a1, 1]] as const) {
      const g = new THREE.Group(), r = T.w[i] / 2 + 1.7, W = r + 4, H = r * 0.85 + 5;
      const sh = new THREE.Shape(); sh.moveTo(-W, -0.5); sh.lineTo(-W, H); sh.lineTo(W, H); sh.lineTo(W, -0.5); sh.lineTo(r, -0.5); sh.lineTo(r, 0);
      for (let k = 1; k < 20; k++) { const th = (k / 20) * Math.PI; sh.lineTo(Math.cos(th) * r, Math.sin(th) * r * 0.85); }
      sh.lineTo(-r, 0); sh.lineTo(-r, -0.5); sh.lineTo(-W, -0.5);
      const fg = new THREE.ExtrudeGeometry(sh, { depth: 1.6, bevelEnabled: false }); fg.translate(0, 0, -0.8);
      const face = new THREE.Mesh(fg, new THREE.MeshLambertMaterial({ color: 0xf2c6a8 })); face.castShadow = true; g.add(face);
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(8, 1.75), new THREE.MeshBasicMaterial({ map: tex.sign('TÜNEL', '#2f5d8a', '#fff7e8'), transparent: true }));
      sign.position.set(0, r * 0.85 + 2.4, dir * 0.82); if (dir < 0) sign.rotation.y = Math.PI; g.add(sign);
      g.position.set(T.x[i], T.y[i], T.z[i]);
      g.rotation.y = -Math.atan2(T.tz[i], T.tx[i]) + Math.PI / 2;
      scene.add(g);
    }
    // içerideki sıcak lambalar
    const lampG = new THREE.SphereGeometry(0.35, 8, 6), lampM = new THREE.MeshBasicMaterial({ color: 0xffe2a0 });
    const cnt = Math.floor((a1 - a0) / 6), lamps = new THREE.InstancedMesh(lampG, lampM, cnt * 2), mm = new THREE.Matrix4();
    for (let k = 0; k < cnt; k++) {
      const i = a0 + 3 + k * 6, r = T.w[i] / 2 + 1.2;
      for (const sd of [-1, 1]) { const c = Math.cos(sd < 0 ? 2.2 : 0.94) * r; mm.makeTranslation(T.x[i] - T.tz[i] * c, T.y[i] + r * 0.62, T.z[i] + T.tx[i] * c); lamps.setMatrixAt(k * 2 + (sd > 0 ? 1 : 0), mm); }
    }
    scene.add(lamps);
  }

  private buildSupports(scene: THREE.Scene) {
    const T = this.T, pillars: THREE.Matrix4[] = [], m = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3();
    for (let i = 0; i < this.n; i += 9) {
      const f = T.flags[i];
      if (!(f & F_BRIDGE) || (f & F_SPIRAL)) continue;
      if (Math.hypot(T.x[i] - T.tower.x, T.z[i] - T.tower.z) < 34) continue;
      for (const sd of [-1, 1]) {
        const d = sd * (T.w[i] / 2 - 0.5), x = T.x[i] - T.tz[i] * d, z = T.z[i] + T.tx[i] * d, top = T.y[i] - 1.2;
        const h = top + 2; if (h < 1.5) continue;
        q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.atan2(T.tz[i], T.tx[i]));
        m.compose(new THREE.Vector3(x, top - h / 2, z), q, sc.set(1, h, 1)); pillars.push(m.clone());
      }
    }
    const pm = new THREE.InstancedMesh(new THREE.BoxGeometry(1.2, 1, 1.2), new THREE.MeshLambertMaterial({ color: 0xd9bfa0 }), pillars.length);
    pillars.forEach((mm, k) => pm.setMatrixAt(k, mm)); pm.castShadow = true; scene.add(pm);
    // sarmalın kule konsolları
    const tw = T.tower, br: THREE.Matrix4[] = [];
    for (let i = 0; i < this.n; i += 6) {
      if (!(T.flags[i] & F_SPIRAL)) continue;
      const dx = T.x[i] - tw.x, dz = T.z[i] - tw.z, r = Math.hypot(dx, dz), a = Math.atan2(dz, dx);
      const len = r + T.w[i] / 2 - TOWER_R + 1;
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -a);
      const mid = TOWER_R + len / 2 - 0.5;
      m.compose(new THREE.Vector3(tw.x + Math.cos(a) * mid, T.y[i] - 2.2, tw.z + Math.sin(a) * mid), q, sc.set(len, 1.6, 1.4)); br.push(m.clone());
    }
    const bm = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial({ color: 0xe0c9ad }), br.length);
    br.forEach((mm, k) => bm.setMatrixAt(k, mm)); bm.castShadow = true; scene.add(bm);
    void F_RAMP;
  }

  private buildStartLine(scene: THREE.Scene, tex: Textures) {
    const T = this.T, i = 0, w = T.w[i];
    const lg = new THREE.PlaneGeometry(w, 2.2); lg.rotateX(-Math.PI / 2);
    const line = new THREE.Mesh(lg, new THREE.MeshLambertMaterial({ map: tex.checker }));
    line.rotation.y = -Math.atan2(T.tz[i], T.tx[i]) + Math.PI / 2;
    line.position.set(T.x[i], T.y[i] + 0.04, T.z[i]); line.receiveShadow = true; scene.add(line);
    // kemer
    const g = new THREE.Group(), pm = new THREE.MeshLambertMaterial({ color: 0xf6efe3 });
    for (const sd of [-1, 1]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 7.5, 12), pm); p.position.set(0, 3.75, sd * (w / 2 + 2)); p.castShadow = true; g.add(p); }
    const banner = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.8, w + 5), new THREE.MeshLambertMaterial({ color: 0xe57373 }));
    banner.position.y = 7.2; g.add(banner);
    for (const sd of [-1, 1]) {
      const txt = new THREE.Mesh(new THREE.PlaneGeometry(w + 3, 1.5), new THREE.MeshBasicMaterial({ map: tex.sign('BOSPHORUS DRIFT', '#e57373', '#fff7e8'), transparent: true }));
      txt.position.set(sd * 0.27, 7.2, 0); txt.rotation.y = sd * Math.PI / 2; g.add(txt);
    }
    g.position.set(T.x[i], T.y[i], T.z[i]); g.rotation.y = -Math.atan2(T.tz[i], T.tx[i]);
    scene.add(g);
  }
}

export const TOWER_R = 8.6;

/** Basit örgü biriktirici */
export class Geo {
  p: number[] = []; uv: number[] = []; idx: number[] = []; col: number[] | null = null;
  quad(a: readonly number[], b: readonly number[], c: readonly number[], d: readonly number[], ua: number[], ub: number[], uc: number[], ud: number[]) {
    const o = this.p.length / 3;
    this.p.push(...a, ...b, ...c, ...d); this.uv.push(...ua, ...ub, ...uc, ...ud);
    this.idx.push(o, o + 2, o + 1, o, o + 3, o + 2);
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setIndex(this.idx); g.computeVertexNormals(); return g;
  }
}

// ---------- dokular (kanvasla çizilir) ----------
export class Textures {
  asphalt = this.make(256, 512, (c, w, h) => {
    c.fillStyle = '#787c9e'; c.fillRect(0, 0, w, h);
    for (let k = 0; k < 900; k++) { const x = (k * 97) % w, y = (k * 53 + (k % 7) * 31) % h; c.fillStyle = k % 3 ? 'rgba(255,255,255,0.035)' : 'rgba(0,0,0,0.05)'; c.fillRect(x, y, 3, 3); }
    c.fillStyle = '#f4f2ff'; c.fillRect(w * 0.035, 0, w * 0.022, h); c.fillRect(w * 0.943, 0, w * 0.022, h);
    c.fillStyle = 'rgba(244,242,255,0.9)'; for (const u of [0.335, 0.665]) c.fillRect(w * u - 3, 0, 6, h * 0.45);
  }, true);
  cobble = this.asphalt;
  curb = this.make(64, 64, (c, w, h) => { c.fillStyle = '#e8534a'; c.fillRect(0, 0, w, h / 2); c.fillStyle = '#fbf8ff'; c.fillRect(0, h / 2, w, h / 2); }, true);
  wall = this.make(128, 64, (c, w, h) => {
    c.fillStyle = '#3f6fd6'; c.fillRect(0, 0, w / 2, h); c.fillStyle = '#f7f6ff'; c.fillRect(w / 2, 0, w / 2, h);
    c.fillStyle = '#f2c94c'; c.fillRect(0, 0, w, 9); c.fillStyle = 'rgba(30,40,90,0.25)'; c.fillRect(0, h - 6, w, 6);
  }, true);
  rail = this.make(128, 64, (c, w, h) => {
    c.fillStyle = '#f7f6ff'; c.fillRect(0, 0, w, h);
    c.fillStyle = '#3f6fd6'; for (let k = 0; k < 4; k++) { c.fillRect(k * 32 + 10, 14, 12, 44); }
    c.fillStyle = '#f2c94c'; c.fillRect(0, 0, w, 9);
  }, true);
  tunnel = this.make(128, 128, (c, w, h) => { c.fillStyle = '#cfc6dc'; c.fillRect(0, 0, w, h); c.fillStyle = '#a99fbd'; c.fillRect(0, 0, w, 14); c.fillStyle = '#e4ddef'; c.fillRect(0, 14, w, 6); }, true);
  checker = this.make(128, 32, (c, w, h) => { for (let y = 0; y < 2; y++) for (let x = 0; x < 8; x++) { c.fillStyle = (x + y) % 2 ? '#3c3a47' : '#fbf6ee'; c.fillRect(x * 16, y * 16, 16, 16); } });
  private signs = new Map<string, THREE.Texture>();
  sign(text: string, bg: string, fg: string) {
    const key = text + bg; let t = this.signs.get(key);
    if (!t) {
      t = this.make(512, 112, (c, w, h) => {
        c.fillStyle = bg; rr(c, 2, 2, w - 4, h - 4, 26); c.fill();
        c.fillStyle = fg; let fs = 76; const font = () => `900 ${fs}px ui-rounded, "SF Pro Rounded", system-ui, sans-serif`; c.font = font();
        while (fs > 24 && c.measureText(text).width > w - 48) { fs -= 4; c.font = font(); }
        c.textAlign = 'center'; c.textBaseline = 'middle';
        c.fillText(text, w / 2, h / 2 + 4);
      });
      this.signs.set(key, t);
    }
    return t;
  }
  make(w: number, h: number, draw: (c: CanvasRenderingContext2D, w: number, h: number) => void, repeat = false) {
    const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
    const c = cv.getContext('2d')!; draw(c, w, h);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
    return t;
  }
}
export function rr(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
}
