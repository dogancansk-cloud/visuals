// İstanbul 3D Sürüş — trafik ve yayalar.
// Arabalar OSM yol ağında (drive_world.json) sağdan gider, kavşakta yön seçer, öndeki araca ve oyuncuya göre yavaşlar.
// Yayalar yol kenarındaki kaldırımlarda yürür. Yalnızca oyuncunun çevresinde (birkaç yüz metre) canlı tutulur.
const PHONE = matchMedia('(pointer:coarse)').matches && Math.min(screen.width, screen.height) < 820 || innerWidth < 700;
const Q = new URLSearchParams(location.search);
const OFF = Q.get('traffic') === '0';
const N_CAR = PHONE ? 22 : 55, N_BUS = PHONE ? 2 : 5, N_PED = PHONE ? 36 : 110;
const R_SPAWN_MIN = 70, R_SPAWN = PHONE ? 260 : 360, R_KILL = PHONE ? 320 : 440;
const P_SPAWN = PHONE ? 170 : 230, P_KILL = PHONE ? 210 : 280;
const DRIVE = new Set([1, 2, 3, 4, 5, 6, 9]);          // trunk … residential, tram avenue
const BIG = new Set([1, 2, 3, 9]);
const SPEED = { 1: 15, 2: 13, 3: 11, 4: 9.5, 5: 10, 6: 7, 9: 9 };
const CAR_COLS = ['#f2c200', '#f2c200', '#f2c200', '#ffffff', '#ffffff', '#d9d9d9', '#2b2b2b', '#1f3b70', '#8a1c1c', '#7d8a93', '#4a5a3a', '#c9b48a'];
const PED_COLS = ['#2d4a7a', '#7a2d2d', '#3d3d3d', '#d9d2c3', '#5b7a3a', '#a86b2d', '#6b4a8a', '#c94f3d', '#1e1e1e', '#8fa8c8'];

function ready(fn) {
  const t = setInterval(() => {
    const D = window.__drv;
    if (D && D.__ready && D.__game && D.__scene && D.__game.world) { clearInterval(t); fn(D); }
  }, 400);
}

// ---------- küçük geometri yardımcıları (kutu + köşe rengi) ----------
function boxes(list) {
  const pos = [], col = [];
  for (const [x0, y0, z0, x1, y1, z1, c] of list) {
    const P = [[x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]];
    const F = [[0, 3, 2, 1], [4, 5, 6, 7], [0, 1, 5, 4], [3, 7, 6, 2], [0, 4, 7, 3], [1, 2, 6, 5]];
    for (const f of F) for (const k of [0, 1, 2, 0, 2, 3]) { pos.push(...P[f[k]]); col.push(...c); }
  }
  return { pos, col };
}
const W = [1, 1, 1], GLASS = [0.16, 0.19, 0.22], TYRE = [0.07, 0.07, 0.07], HEAD = [1, 0.97, 0.85], TAIL = [0.75, 0.08, 0.06], SKIN = [0.86, 0.7, 0.58];
const CAR = boxes([
  [-0.88, 0.32, -2.1, 0.88, 0.95, 2.1, W],          // gövde
  [-0.78, 0.95, -1.05, 0.78, 1.42, 0.85, GLASS],    // cam
  [-0.8, 1.42, -1.0, 0.8, 1.5, 0.8, W],             // tavan
  [-0.98, 0, 1.05, -0.72, 0.62, 1.65, TYRE], [0.72, 0, 1.05, 0.98, 0.62, 1.65, TYRE],
  [-0.98, 0, -1.65, -0.72, 0.62, -1.05, TYRE], [0.72, 0, -1.65, 0.98, 0.62, -1.05, TYRE],
  [-0.75, 0.62, 2.08, -0.4, 0.8, 2.14, HEAD], [0.4, 0.62, 2.08, 0.75, 0.8, 2.14, HEAD],
  [-0.78, 0.66, -2.14, -0.42, 0.82, -2.08, TAIL], [0.42, 0.66, -2.14, 0.78, 0.82, -2.08, TAIL],
]);
const BUS = boxes([
  [-1.25, 0.45, -5.6, 1.25, 1.35, 5.6, W],
  [-1.27, 1.35, -5.4, 1.27, 2.45, 5.5, GLASS],
  [-1.25, 2.45, -5.6, 1.25, 3.0, 5.6, W],
  [-1.32, 0, 3.2, -1.05, 0.95, 4.3, TYRE], [1.05, 0, 3.2, 1.32, 0.95, 4.3, TYRE],
  [-1.32, 0, -4.1, -1.05, 0.95, -3.0, TYRE], [1.05, 0, -4.1, 1.32, 0.95, -3.0, TYRE],
  [-1.0, 0.7, 5.58, -0.6, 0.95, 5.66, HEAD], [0.6, 0.7, 5.58, 1.0, 0.95, 5.66, HEAD],
]);
const PED = boxes([
  [-0.2, 0, -0.1, -0.03, 0.82, 0.1, [0.25, 0.25, 0.3]], [0.03, 0, -0.1, 0.2, 0.82, 0.1, [0.25, 0.25, 0.3]],
  [-0.23, 0.8, -0.13, 0.23, 1.42, 0.13, W],
  [-0.11, 1.44, -0.11, 0.11, 1.7, 0.11, SKIN],
]);

ready((D) => {
  if (OFF) return;
  const S = D.__scene, G = D.__game, world = G.world;
  // three sınıflarını sahnedeki nesnelerden al (paketin kendi kopyası)
  let IM = null, LAMB = null, O3 = null;
  S.traverse((o) => {
    if (!IM && o.isInstancedMesh) IM = o;
    if (!LAMB && o.isMesh && o.material && o.material.type === 'MeshLambertMaterial' && !o.isInstancedMesh) LAMB = o;
    if (!O3 && o.type === 'Object3D') O3 = o;
  });
  if (!IM || !LAMB) { console.warn('traffic: three classes not found'); return; }
  let geoRef = null;
  S.traverse((o) => { if (!geoRef && o.isMesh && o.geometry && o.geometry.attributes.position && !o.geometry.attributes.position.isInterleavedBufferAttribute) geoRef = o.geometry; });
  const Geo = geoRef.constructor, Attr = geoRef.attributes.position.constructor, Col = LAMB.material.color.constructor;
  const dummy = new (O3 ? O3.constructor : S.constructor)();
  const mkGeo = (b) => { const g = new Geo(); g.setIndex(null); for (const k of Object.keys(g.attributes)) g.deleteAttribute(k); g.setAttribute('position', new Attr(new Float32Array(b.pos), 3)); g.setAttribute('color', new Attr(new Float32Array(b.col), 3)); g.computeVertexNormals(); g.computeBoundingSphere(); return g; };
  const mkMesh = (b, n) => {
    const g = mkGeo(b), mat = new LAMB.material.constructor({ vertexColors: true });
    const m = new IM.constructor(g, mat, n);
    m.geometry = g; m.material = mat;   // sahnedeki örnek sınıf kendi geometrisini kullanıyor olabilir: kendimizinkini zorla
    m.count = 0; m.frustumCulled = false; m.castShadow = !PHONE; m.receiveShadow = false; m.name = 'traffic';
    S.add(m); return m;
  };
  const carMesh = mkMesh(CAR, N_CAR), busMesh = mkMesh(BUS, N_BUS), pedMesh = mkMesh(PED, N_PED);
  pedMesh.castShadow = false;
  const C = new Col();

  fetch(new URL('data/drive_world.json', location.href).href).then((r) => r.json()).then((Wd) => start(Wd)).catch((e) => console.warn('traffic data', e));

  function start(Wd) {
    // ---------- yol ağı ----------
    const key = (x, z) => Math.round(x * 2) * 100003 + Math.round(z * 2);
    const out = new Map(), edges = [], walks = [];
    const grid = new Map(), pgrid = new Map(), GS = 100;
    const gput = (g, x, z, v) => { const k = Math.floor(x / GS) * 100003 + Math.floor(z / GS); let a = g.get(k); a || g.set(k, (a = [])); a.push(v); };
    for (const w of Wd.ways) {
      const [code, width, lanes, oneway, skip, p] = w;
      if (skip || !p || p.length < 4) continue;
      if (width >= 5 && code !== 1 && code !== 5) walks.push({ p, off: width / 2 + 1.7, code });
      if (!DRIVE.has(code)) continue;
      const nl = Math.max(1, lanes || (width > 9 ? 2 : 1));
      for (let i = 0; i + 3 < p.length; i += 2) {
        const ax = p[i], az = p[i + 1], bx = p[i + 2], bz = p[i + 3], len = Math.hypot(bx - ax, bz - az);
        if (len < 0.3) continue;
        const mk = (ax, az, bx, bz) => {
          const e = { ax, az, bx, bz, len, dx: (bx - ax) / len, dz: (bz - az) / len, code, width, lanes: nl, oneway: !!oneway, to: key(bx, bz), from: key(ax, az), id: edges.length };
          edges.push(e); const k = e.from; let a = out.get(k); a || out.set(k, (a = [])); a.push(e);
          gput(grid, (ax + bx) / 2, (az + bz) / 2, e);
        };
        mk(ax, az, bx, bz);
        if (!oneway) mk(bx, bz, ax, az);
      }
    }
    walks.forEach((w, i) => { const p = w.p; for (let j = 0; j < p.length; j += 6) gput(pgrid, p[j], p[j + 1], i); });

    const near = (g, x, z, r) => {
      const res = [], x0 = Math.floor((x - r) / GS), x1 = Math.floor((x + r) / GS), z0 = Math.floor((z - r) / GS), z1 = Math.floor((z + r) / GS);
      for (let gx = x0; gx <= x1; gx++) for (let gz = z0; gz <= z1; gz++) { const a = g.get(gx * 100003 + gz); if (a) res.push(...a); }
      return res;
    };
    const laneOff = (e, lane) => e.oneway ? ((lane + 0.5) * e.width) / e.lanes - e.width / 2 : (e.width / 2) * ((lane + 0.5) / e.lanes);
    const nextEdge = (e) => {
      const opts = (out.get(e.to) || []).filter((n) => !(Math.abs(n.bx - e.ax) < 0.6 && Math.abs(n.bz - e.az) < 0.6));
      if (!opts.length) { const back = (out.get(e.to) || []); return back.length ? back[0] : null; }
      // düz devam etmeyi tercih et
      let tot = 0; const wts = opts.map((n) => { const d = n.dx * e.dx + n.dz * e.dz, w = d > 0.85 ? 5 : d > 0.2 ? 1.6 : 0.7; tot += w; return w; });
      let r = Math.random() * tot; for (let i = 0; i < opts.length; i++) { r -= wts[i]; if (r <= 0) return opts[i]; }
      return opts[0];
    };

    // ---------- araçlar ----------
    const cars = [];
    const pst = () => G.state();
    function spawnCar(bus, initial) {
      const st = pst();
      const cand = near(grid, st.x, st.z, R_SPAWN).filter((e) => (!bus || BIG.has(e.code)) && e.len > 4);
      for (let tries = 0; tries < 25 && cand.length; tries++) {
        const e = cand[(Math.random() * cand.length) | 0];
        const mx = (e.ax + e.bx) / 2, mz = (e.az + e.bz) / 2, d = Math.hypot(mx - st.x, mz - st.z);
        if (d < (initial ? 25 : R_SPAWN_MIN) || d > R_SPAWN) continue;
        // önündeki görüş konisinde yakın doğmasın
        const ahead = (Math.sin(st.yaw) * (mx - st.x) + Math.cos(st.yaw) * (mz - st.z)) / Math.max(1, d);
        if (!initial && ahead > 0.6 && d < 150) continue;
        const s = Math.random() * e.len;
        if (cars.some((c) => c.e === e && Math.abs(c.s - s) < 10)) continue;
        const lane = (Math.random() * e.lanes) | 0;
        const c = { bus, e, s, v: SPEED[e.code] * 0.6, lane, off: laneOff(e, lane), y: null, col: bus ? '#c8102e' : CAR_COLS[(Math.random() * CAR_COLS.length) | 0], stop: 0, k: Math.random() * 6 | 0, len: bus ? 11.2 : 4.2 };
        return c;
      }
      return null;
    }
    for (let i = 0; i < N_CAR; i++) { const c = spawnCar(false, true); if (c) cars.push(c); }
    for (let i = 0; i < N_BUS; i++) { const c = spawnCar(true, true); if (c) cars.push(c); }

    // ---------- yayalar ----------
    const peds = [];
    function spawnPed(initial) {
      const st = pst();
      const ids = near(pgrid, st.x, st.z, P_SPAWN);
      for (let t = 0; t < 20 && ids.length; t++) {
        const w = walks[ids[(Math.random() * ids.length) | 0]], p = w.p, n = p.length / 2;
        const j = (Math.random() * (n - 1)) | 0;
        const x = p[2 * j], z = p[2 * j + 1], d = Math.hypot(x - st.x, z - st.z);
        if (d > P_SPAWN || d < (initial ? 8 : 60)) continue;
        return { w, j, t: Math.random(), dir: Math.random() < 0.5 ? 1 : -1, side: Math.random() < 0.5 ? 1 : -1, v: 1.05 + Math.random() * 0.5, y: null, col: PED_COLS[(Math.random() * PED_COLS.length) | 0], ph: Math.random() * 6, dodge: 0, k: Math.random() * 6 | 0, x: 0, z: 0, yaw: 0 };
      }
      return null;
    }
    for (let i = 0; i < N_PED; i++) { const p = spawnPed(true); if (p) peds.push(p); }

    // renkler
    const paint = () => {
      cars.filter((c) => !c.bus).forEach((c, i) => { C.set(c.col); carMesh.setColorAt(i, C); });
      cars.filter((c) => c.bus).forEach((c, i) => { C.set(c.col); busMesh.setColorAt(i, C); });
      peds.forEach((p, i) => { C.set(p.col); pedMesh.setColorAt(i, C); });
      for (const m of [carMesh, busMesh, pedMesh]) if (m.instanceColor) m.instanceColor.needsUpdate = true;
    };
    paint();

    let last = performance.now(), frame = 0, bumpT = 0;
    function tick(now) {
      requestAnimationFrame(tick);
      const dt = Math.min(0.05, (now - last) / 1000); last = now; frame++;
      if (document.hidden) return;
      const st = pst();
      if (st.paused) return;
      const px = st.x, pz = st.z, pyaw = st.yaw, psp = st.speed;
      bumpT = Math.max(0, bumpT - dt);
      let repaint = false;

      // --- araçlar ---
      for (let i = cars.length - 1; i >= 0; i--) {
        const c = cars[i];
        const cx = c.e.ax + c.e.dx * c.s + (-c.e.dz) * c.off, cz = c.e.az + c.e.dz * c.s + c.e.dx * c.off;
        if (Math.hypot(cx - px, cz - pz) > R_KILL) {
          const n = spawnCar(c.bus, false);
          if (n) { cars[i] = n; repaint = true; } continue;
        }
        // hedef hız: yol tipi, viraj, öndeki araç, oyuncu
        let vt = SPEED[c.e.code] * (c.bus ? 0.8 : 1);
        const rem = c.e.len - c.s;
        if (!c.nx) c.nx = nextEdge(c.e);
        if (c.nx) { const turn = c.nx.dx * c.e.dx + c.nx.dz * c.e.dz; if (turn < 0.8 && rem < 25) vt = Math.min(vt, 4 + 6 * Math.max(0, turn)); }
        const fx = c.e.dx, fz = c.e.dz;
        let gap = 99;
        for (const o of cars) {
          if (o === c) continue;
          const ox = o.e.ax + o.e.dx * o.s + (-o.e.dz) * o.off, oz = o.e.az + o.e.dz * o.s + o.e.dx * o.off;
          const rx = ox - cx, rz = oz - cz, along = rx * fx + rz * fz;
          if (along <= 0 || along > 22) continue;
          if (Math.abs(rx * -fz + rz * fx) > 2.0) continue;
          if (o.e.dx * fx + o.e.dz * fz < 0.3) continue;
          gap = Math.min(gap, along - (c.len + o.len) / 2);
        }
        { const rx = px - cx, rz = pz - cz, along = rx * fx + rz * fz;
          if (along > 0 && along < 26 && Math.abs(rx * -fz + rz * fx) < 2.4) gap = Math.min(gap, along - 3.2); }
        if (gap < 99) vt = Math.min(vt, Math.max(0, (gap - 2.5) * 0.9));
        if (c.stop > 0) { c.stop -= dt; vt = 0; }
        c.v += Math.max(-7 * dt, Math.min(2.6 * dt, vt - c.v));
        if (c.v < 0) c.v = 0;
        c.s += c.v * dt;
        while (c.s > c.e.len) {
          c.s -= c.e.len; const n = c.nx || nextEdge(c.e); c.nx = null;
          if (!n) { c.s = c.e.len; c.v = 0; break; }
          c.e = n; if (c.lane >= n.lanes) c.lane = n.lanes - 1;
        }
        const ot = laneOff(c.e, c.lane); c.off += (ot - c.off) * Math.min(1, dt * 2.5);
        // oyuncuyla temas: ikisi de yavaşlar, oyuncu hafifçe itilir
        const nx = c.e.ax + c.e.dx * c.s + (-c.e.dz) * c.off, nz = c.e.az + c.e.dz * c.s + c.e.dx * c.off;
        const dx = px - nx, dz = pz - nz, dd = Math.hypot(dx, dz), R = c.bus ? 3.2 : 2.3;
        if (dd < R && bumpT <= 0) { G.bump(0.35, (dx / (dd || 1)) * (R - dd) * 0.6, (dz / (dd || 1)) * (R - dd) * 0.6); c.stop = 2; c.v = 0; bumpT = 0.6; }
        if (c.y === null || (frame + c.k) % 4 === 0) c.y = world.surface(nx, nz, c.y === null ? st.y : c.y);
        c.x = nx; c.z = nz;
      }
      // --- yayalar ---
      for (let i = peds.length - 1; i >= 0; i--) {
        const p = peds[i], P = p.w.p, n = P.length / 2;
        const ax = P[2 * p.j], az = P[2 * p.j + 1], bx = P[2 * p.j + 2], bz = P[2 * p.j + 3], L = Math.hypot(bx - ax, bz - az) || 1;
        p.t += (p.dir * p.v * dt) / L;
        if (p.t > 1) { if (p.j + 2 < n) { p.j++; p.t -= 1; } else { p.t = 1; p.dir = -1; } }
        else if (p.t < 0) { if (p.j > 0) { p.j--; p.t += 1; } else { p.t = 0; p.dir = 1; } }
        const ux = (bx - ax) / L, uz = (bz - az) / L;
        const off = p.w.off * p.side + p.dodge;
        const x = ax + (bx - ax) * p.t + -uz * off, z = az + (bz - az) * p.t + ux * off;
        if (Math.hypot(x - px, z - pz) > P_KILL) { const q = spawnPed(false); if (q) { peds[i] = q; repaint = true; } continue; }
        // araba yaklaşırsa kenara kaç
        const dpp = Math.hypot(x - px, z - pz);
        if (dpp < 3.5 && psp > 1) p.dodge += p.side * dt * 4; else p.dodge *= 1 - Math.min(1, dt * 0.8);
        if (p.y === null || (frame + p.k) % 6 === 0) p.y = world.surface(x, z, p.y === null ? st.y : p.y);
        p.x = x; p.z = z; p.yaw = Math.atan2(ux * p.dir, uz * p.dir); p.ph += dt * p.v * 6;
      }
      if (repaint) paint();
      // --- çizim ---
      let ci = 0, bi = 0;
      for (const c of cars) {
        if (c.x === undefined) continue;
        dummy.position.set(c.x, c.y + 0.02, c.z); dummy.rotation.set(0, Math.atan2(c.e.dx, c.e.dz), 0); dummy.scale.set(1, 1, 1); dummy.updateMatrix();
        if (c.bus) busMesh.setMatrixAt(bi++, dummy.matrix); else carMesh.setMatrixAt(ci++, dummy.matrix);
      }
      carMesh.count = ci; busMesh.count = bi; carMesh.instanceMatrix.needsUpdate = busMesh.instanceMatrix.needsUpdate = true;
      let pi = 0;
      for (const p of peds) {
        if (p.y === null) continue;
        dummy.position.set(p.x, p.y + Math.abs(Math.sin(p.ph)) * 0.05, p.z); dummy.rotation.set(0, p.yaw, 0); dummy.updateMatrix();
        pedMesh.setMatrixAt(pi++, dummy.matrix);
      }
      pedMesh.count = pi; pedMesh.instanceMatrix.needsUpdate = true;
    }
    requestAnimationFrame(tick);
    D.__traffic = { cars, peds, edges: edges.length, walks: walks.length };
  }
});
