import * as THREE from 'three';

type Ring = number[];
type Poly = Ring[];
type Bld = { h: number; p?: Poly[] };

export type DriveHandle = {
  update: (dt: number) => void;
  reset: () => void;
  focus: () => THREE.Vector3;
  state: () => { x: number; z: number; y: number; speed: number; yaw: number; onRoad: boolean };
  input: () => { throttle: number; steer: number };
  cell: (x: number, z: number) => number;
  tick: (dt: number) => void;
  setInput: (throttle: number, steer: number) => void;
};

const STEP = 2.5;
/** Eminönü end of Galata Bridge, on the first ramp, facing across the Golden Horn. */
const START = { x: -592.4, z: 572.3, yaw: Math.atan2(19, -35.2) };

function paintRing(ring: Ring, x0: number, z0: number, nx: number, nz: number, mark: (i: number, j: number) => void) {
  const n = ring.length;
  if (n < 6) return;
  let zmin = Infinity, zmax = -Infinity;
  const edges: { y0: number; y1: number; x: number; dx: number }[] = [];
  for (let i = 0; i < n; i += 2) {
    const j = (i + 2) % n;
    let x1 = ring[i], y1 = ring[i + 1], x2 = ring[j], y2 = ring[j + 1];
    if (y1 < zmin) zmin = y1;
    if (y2 < zmin) zmin = y2;
    if (y1 > zmax) zmax = y1;
    if (y2 > zmax) zmax = y2;
    if (y1 === y2) continue;
    if (y1 > y2) { const tx = x1; x1 = x2; x2 = tx; const ty = y1; y1 = y2; y2 = ty; }
    edges.push({ y0: y1, y1: y2, x: x1, dx: (x2 - x1) / (y2 - y1) });
  }
  const j0 = Math.max(0, Math.floor((zmin - z0) / STEP));
  const j1 = Math.min(nz - 1, Math.floor((zmax - z0) / STEP));
  const xs: number[] = [];
  for (let j = j0; j <= j1; j++) {
    const z = z0 + (j + 0.5) * STEP;
    xs.length = 0;
    for (const e of edges) if (z >= e.y0 && z < e.y1) xs.push(e.x + e.dx * (z - e.y0));
    xs.sort((a, b) => a - b);
    for (let k = 0; k + 1 < xs.length; k += 2) {
      const i0 = Math.max(0, Math.floor((xs[k] - x0) / STEP));
      const i1 = Math.min(nx - 1, Math.floor((xs[k + 1] - x0) / STEP));
      for (let i = i0; i <= i1; i++) mark(i, j);
    }
  }
}

function makeCar(): THREE.Group {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.55, 3.8), new THREE.MeshLambertMaterial({ color: '#d24b3a' }));
  body.position.y = 0.7;
  body.castShadow = true;
  const cab = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.48, 1.7), new THREE.MeshLambertMaterial({ color: '#d7e7f2' }));
  cab.position.set(0, 1.15, 0.15);
  cab.castShadow = true;
  g.add(body, cab);
  const shade = new THREE.Mesh(new THREE.CircleGeometry(1.55, 18), new THREE.MeshBasicMaterial({ color: '#1a140f', transparent: true, opacity: 0.35, depthWrite: false }));
  shade.rotation.x = -Math.PI / 2;
  shade.position.y = 0.22;
  shade.renderOrder = 6;
  g.add(shade);
  const wheel = new THREE.BoxGeometry(0.28, 0.42, 0.42);
  const rubber = new THREE.MeshLambertMaterial({ color: '#242424' });
  for (const [x, z] of [[0.86, 1.25], [-0.86, 1.25], [0.86, -1.2], [-0.86, -1.2]] as [number, number][]) {
    const w = new THREE.Mesh(wheel, rubber);
    w.position.set(x, 0.26, z);
    w.castShadow = true;
    g.add(w);
  }
  return g;
}

export async function attachDrive(opts: {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  controls: { enabled: boolean; target: THREE.Vector3 };
  H: (x: number, z: number) => number;
  bounds: [number, number, number, number];
  roads: Poly[];
  plazas: Poly[];
  buildings: Bld[];
  water: Poly[];
  map: string;
  narrow: boolean;
}): Promise<DriveHandle> {
  const { scene, camera, controls, H, roads, plazas, buildings, water, map, narrow } = opts;
  const [bx0, bz0, bx1, bz1] = opts.bounds;
  const x0 = bx0 - 20, z0 = bz0 - 20;
  const nx = Math.ceil((bx1 - bx0 + 40) / STEP);
  const nz = Math.ceil((bz1 - bz0 + 40) / STEP);
  const road = new Uint8Array(nx * nz);
  const block = new Uint8Array(nx * nz); // 1 building, 2 water
  const deck = new Map<number, number>();
  const id = (i: number, j: number) => j * nx + i;
  const paint = (ring: Ring, fn: (i: number, j: number) => void) => paintRing(ring, x0, z0, nx, nz, fn);
  const fillPoly = (poly: Poly, on: (i: number, j: number) => void, off?: (i: number, j: number) => void) => {
    if (!poly?.[0]) return;
    paint(poly[0], on);
    if (off) for (let r = 1; r < poly.length; r++) paint(poly[r], off);
  };

  for (const poly of roads) fillPoly(poly, (i, j) => { road[id(i, j)] = 1; }, (i, j) => { road[id(i, j)] = 0; });
  for (const poly of plazas) fillPoly(poly, (i, j) => { if (!road[id(i, j)]) road[id(i, j)] = 2; });
  try {
    const TP = await (await fetch(`${map}data/taksim_plaza.json`)).json();
    for (const ring of (TP.plazas || []) as Ring[]) paint(ring, (i, j) => { if (!road[id(i, j)]) road[id(i, j)] = 2; });
  } catch { /* plaza overlay is optional */ }

  try {
    const BR = await (await fetch(`${map}data/bridges.json`)).json();
    for (const b of BR.bridges as { id?: string; strips: { p: Ring; y: number; t: number }[] }[]) {
      for (const st of b.strips) {
        const r = st.p;
        let sx = 0, sz = 0, n = 0;
        for (let i = 0; i < r.length; i += 2) { sx += r[i]; sz += r[i + 1]; n++; }
        const lift = Math.max(0, H(sx / n, sz / n));
        if (lift > 2 && st.y < 3 && b.id !== 'w280961352') continue;
        const smooth = (t: number) => { const u = Math.max(0, Math.min(1, t)); return u * u * (3 - 2 * u); };
        const galataAt = (z: number) => {
          if (b.id !== 'w280961352') return null;
          if (z >= 530) return 0.45 + 6.05 * smooth((588 - z) / 52);
          if (z <= 236) return 0.45 + 6.05 * smooth((z - 186) / 50);
          return 6.5;
        };
        paint(r, (i, j) => {
          const k = id(i, j);
          const h = galataAt(z0 + (j + 0.5) * STEP) ?? st.y + lift;
          road[k] = 1;
          const prev = deck.get(k);
          if (prev == null || h > prev) deck.set(k, h);
        });
      }
    }
  } catch (e) { console.warn('drive bridges skipped', e); }

  const insetRing = (ring: Ring, dist: number) => {
    let sx = 0, sz = 0, n = 0;
    for (let i = 0; i < ring.length; i += 2) { sx += ring[i]; sz += ring[i + 1]; n++; }
    if (!n) return ring;
    const cx = sx / n, cz = sz / n;
    const out: number[] = [];
    for (let i = 0; i < ring.length; i += 2) {
      const dx = ring[i] - cx, dz = ring[i + 1] - cz, L = Math.hypot(dx, dz) || 1;
      const k = Math.max(0.15, (L - dist) / L);
      out.push(cx + dx * k, cz + dz * k);
    }
    return out;
  };
  for (const b of buildings) {
    if (!b.h || b.h < 2.2 || !b.p) continue;
    for (const poly of b.p) if (poly?.[0] && poly[0].length >= 6) paint(insetRing(poly[0], 3.2), (i, j) => { block[id(i, j)] = 1; });
  }
  for (const poly of water) fillPoly(poly, (i, j) => { block[id(i, j)] = 2; }, (i, j) => { if (block[id(i, j)] === 2) block[id(i, j)] = 0; });

  for (let k = 0; k < road.length; k++) if (road[k] && block[k] && !deck.has(k)) road[k] = 0;

  // One cell of slack so the curb is not an invisible wall. Buildings and water stay closed.
  const before = road.slice();
  for (let j = 1; j < nz - 1; j++) for (let i = 1; i < nx - 1; i++) {
    const k = id(i, j);
    if (before[k] || block[k]) continue;
    if (before[k - 1] || before[k + 1] || before[k - nx] || before[k + nx]) road[k] = 1;
  }

  const cellAt = (x: number, z: number) => {
    const i = Math.floor((x - x0) / STEP), j = Math.floor((z - z0) / STEP);
    if (i < 0 || j < 0 || i >= nx || j >= nz) return 0;
    return road[id(i, j)];
  };
  const deckAt = (x: number, z: number) => {
    const i = Math.floor((x - x0) / STEP), j = Math.floor((z - z0) / STEP);
    if (i < 0 || j < 0 || i >= nx || j >= nz) return 0;
    return deck.get(id(i, j)) || 0;
  };
  const surface = (x: number, z: number) => {
    const g = H(x, z);
    const d = deckAt(x, z);
    return (d > 0.3 ? Math.max(d, g) : g) + 0.42;
  };

  let sx = START.x, sz = START.z;
  if (!cellAt(sx, sz)) {
    let found = false;
    for (let r = STEP; r < 80 && !found; r += STEP) {
      for (let a = 0; a < 16; a++) {
        const x = START.x + Math.cos(a) * r, z = START.z + Math.sin(a) * r;
        if (cellAt(x, z) === 1) { sx = x; sz = z; found = true; break; }
      }
    }
  }
  let yaw = 0;
  const clearRun = (t: number) => {
    let run = 0;
    for (let s = 3; s <= 90; s += 3) {
      const px = sx + Math.sin(t) * s, pz = sz + Math.cos(t) * s;
      const side = cellAt(px + Math.cos(t) * 0.8, pz - Math.sin(t) * 0.8);
      // Prefer the paved street (1) over the open square (2) so the car starts along a road.
      if (cellAt(px, pz) !== 1 || side !== 1) break;
      run = s;
    }
    return run;
  };
  if (clearRun(START.yaw) >= 12) yaw = START.yaw;
  else {
    let best = -1;
    for (let a = 0; a < 24; a++) {
      const t = a / 24 * Math.PI * 2;
      const run = clearRun(t);
      if (run > best) { best = run; yaw = t; }
    }
  }

  const car = makeCar();
  scene.add(car);
  let x = sx, z = sz, y = surface(sx, sz), speed = 0, homeX = sx, homeZ = sz, homeYaw = yaw;
  let lastBlock: unknown = null;
  let grace = 0, blockedFor = 0, shown = 0;
  car.position.set(x, y, z);
  car.rotation.y = yaw;

  camera.fov = narrow ? 68 : 56;
  camera.near = 0.45;
  camera.far = 22000;
  camera.updateProjectionMatrix();
  controls.enabled = false;

  const keys = new Set<string>();
  let touchThrottle = 0, touchSteer = 0, scriptThrottle = 0, scriptSteer = 0;
  const onKey = (e: KeyboardEvent, down: boolean) => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (!['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k.toLowerCase()) && !k.startsWith('Arrow')) return;
    e.preventDefault();
    const name = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (down) keys.add(name); else keys.delete(name);
  };
  window.addEventListener('keydown', (e) => onKey(e, true), { passive: false });
  window.addEventListener('keyup', (e) => onKey(e, false));

  const steerEl = document.getElementById('steer');
  const gasEl = document.getElementById('gas');
  const brakeEl = document.getElementById('brake');
  const steerPtr = new Set<number>();
  const bindHold = (el: HTMLElement | null, dir: number) => {
    if (!el) return;
    const ids = new Set<number>();
    const sync = () => { touchThrottle = (gasIds.size ? 1 : 0) + (brakeIds.size ? -1 : 0); };
    el.addEventListener('pointerdown', (e) => {
      ids.add(e.pointerId);
      (el === gasEl ? gasIds : brakeIds).add(e.pointerId);
      sync();
      try { el.setPointerCapture(e.pointerId); } catch { /* synthetic tests have no live pointer */ }
      e.preventDefault();
    });
    const up = (e: PointerEvent) => { ids.delete(e.pointerId); (el === gasEl ? gasIds : brakeIds).delete(e.pointerId); sync(); };
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
  };
  const gasIds = new Set<number>();
  const brakeIds = new Set<number>();
  bindHold(gasEl, 1);
  bindHold(brakeEl, -1);
  if (steerEl) {
    const apply = (e: PointerEvent) => {
      const rect = steerEl.getBoundingClientRect();
      touchSteer = THREE.MathUtils.clamp((e.clientX - (rect.left + rect.width / 2)) / (rect.width * 0.38), -1, 1);
    };
    steerEl.addEventListener('pointerdown', (e) => { steerPtr.add(e.pointerId); apply(e); try { steerEl.setPointerCapture(e.pointerId); } catch { /* synthetic tests */ } e.preventDefault(); });
    steerEl.addEventListener('pointermove', (e) => { if (steerPtr.has(e.pointerId)) apply(e); });
    const up = (e: PointerEvent) => { steerPtr.delete(e.pointerId); if (!steerPtr.size) touchSteer = 0; };
    steerEl.addEventListener('pointerup', up);
    steerEl.addEventListener('pointercancel', up);
  }
  const resetEl = document.getElementById('reset');
  resetEl?.addEventListener('pointerdown', (e) => { e.preventDefault(); reset(); });
  const labelsEl = document.getElementById('labels');
  if (labelsEl) labelsEl.style.display = 'none';
  const knob = document.createElement('i');
  steerEl?.appendChild(knob);

  const speedEl = document.getElementById('speed');
  const cam = new THREE.Vector3();
  const look = new THREE.Vector3();
  const focus = new THREE.Vector3();
  let snapped = false;

  const readInput = () => {
    let throttle = scriptThrottle, steer = scriptSteer;
    if (keys.has('w') || keys.has('W') || keys.has('ArrowUp')) throttle += 1;
    if (keys.has('s') || keys.has('S') || keys.has('ArrowDown')) throttle -= 1;
    if (keys.has('a') || keys.has('A') || keys.has('ArrowLeft')) steer -= 1;
    if (keys.has('d') || keys.has('D') || keys.has('ArrowRight')) steer += 1;
    throttle = THREE.MathUtils.clamp(throttle + touchThrottle, -1, 1);
    steer = THREE.MathUtils.clamp(steer + touchSteer, -1, 1);
    return { throttle, steer };
  };

  const openRun = (px: number, pz: number, t: number) => {
    let run = 0;
    for (let s = 2; s <= 22; s += 2) {
      if (!cellAt(px + Math.sin(t) * s, pz + Math.cos(t) * s)) break;
      run = s;
    }
    return run;
  };

  function reset() {
    gasIds.clear(); brakeIds.clear(); steerPtr.clear();
    touchThrottle = 0; touchSteer = 0; scriptThrottle = 0; scriptSteer = 0;
    x = homeX; z = homeZ; yaw = homeYaw; speed = 0;
    y = surface(x, z);
    car.position.set(x, y, z);
    car.rotation.y = yaw;
    snapped = false;
    grace = 0.35;
    blockedFor = 0;
  }

  const asphalt = new THREE.Mesh(
    new THREE.BufferGeometry(),
    new THREE.MeshBasicMaterial({ vertexColors: true, depthWrite: false, fog: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 }),
  );
  asphalt.renderOrder = 4;
  asphalt.frustumCulled = false;
  asphalt.name = 'drive-road';
  scene.add(asphalt);
  let ribbonAt = new THREE.Vector2(1e9, 1e9);
  const paintRibbon = () => {
    const reach = 42;
    const i0 = Math.max(0, Math.floor((x - reach - x0) / STEP));
    const i1 = Math.min(nx - 1, Math.floor((x + reach - x0) / STEP));
    const j0 = Math.max(0, Math.floor((z - reach - z0) / STEP));
    const j1 = Math.min(nz - 1, Math.floor((z + reach - z0) / STEP));
    const pos: number[] = [], col: number[] = [];
    const dark = [0.16, 0.15, 0.14], dash = [0.92, 0.78, 0.22], edge = [0.72, 0.68, 0.6];
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const v = road[id(i, j)];
      if (!v || deck.has(id(i, j))) continue;
      const ax = x0 + i * STEP, az = z0 + j * STEP;
      const yy = surface(ax + STEP * 0.5, az + STEP * 0.5) + 0.12;
      const stripe = v === 1 && (i + j) % 5 === 0;
      const curb = !road[id(Math.max(0, i - 1), j)] || !road[id(Math.min(nx - 1, i + 1), j)] || !road[id(i, Math.max(0, j - 1))] || !road[id(i, Math.min(nz - 1, j + 1))];
      const c = stripe ? dash : curb ? edge : dark;
      pos.push(ax, yy, az, ax + STEP, yy, az, ax + STEP, yy, az + STEP, ax, yy, az, ax + STEP, yy, az + STEP, ax, yy, az + STEP);
      for (let k = 0; k < 6; k++) col.push(c[0], c[1], c[2]);
    }
    const g = asphalt.geometry;
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.computeBoundingSphere();
    ribbonAt.set(x, z);
  };

  function update(dt: number) {
    dt = Math.min(0.08, Math.max(0, dt));
    let { throttle, steer } = readInput();
    if (grace > 0) { grace = Math.max(0, grace - dt); throttle = 0; steer = 0; speed = 0; }
    const maxF = 11, maxR = 5;
    if (throttle > 0) {
      if (speed < 0) speed = Math.min(0, speed + 18 * dt);
      else speed = Math.min(maxF, speed + 9 * dt);
    } else if (throttle < 0) {
      if (speed > 0.3) speed = Math.max(0, speed - 18 * dt);
      else speed = Math.max(-maxR, speed - 7 * dt);
    } else {
      const d = 4 * dt;
      if (Math.abs(speed) <= d) speed = 0;
      else speed -= Math.sign(speed) * d;
    }
    const steerSign = speed < -0.2 ? -1 : 1;
    yaw += steer * steerSign * (2.1 / (1 + Math.abs(speed) / 16)) * dt;
    const px0 = x, pz0 = z;
    let moved = false;
    if (dt > 0 && Math.abs(speed) > 0.04) {
      const step = speed * dt;
      const fx = Math.sin(yaw) * step, fz = Math.cos(yaw) * step;
      const slide = (ox: number, oz: number) => {
        if (!cellAt(x + ox, z + oz)) return false;
        x += ox; z += oz; return true;
      };
      moved = slide(fx, fz) || slide(fx, 0) || slide(0, fz);
      if (!moved) {
        speed = 0;
        blockedFor += dt;
        lastBlock = { x, z, yaw };
        if (Math.abs(throttle) > 0.2 && blockedFor > 0.2) {
          let best = -1, ang = yaw;
          for (let k = -5; k <= 5; k++) {
            const t = yaw + k * 0.45;
            const run = openRun(x, z, t);
            if (run > best) { best = run; ang = t; }
          }
          let diff = ang - yaw;
          while (diff > Math.PI) diff -= Math.PI * 2;
          while (diff < -Math.PI) diff += Math.PI * 2;
          yaw += Math.max(-1.2, Math.min(1.2, diff)) * Math.min(1, dt * 3);
        }
      } else blockedFor = 0;
    }
    const travelled = Math.hypot(x - px0, z - pz0);
    const instant = dt > 0 ? travelled / dt : 0;
    shown += (instant - shown) * Math.min(1, dt * 8);
    const ty = surface(x, z);
    y = snapped ? y + (ty - y) * Math.min(1, dt * 10) : ty;
    car.position.set(x, y, z);
    car.rotation.y = yaw;
    if (knob) knob.style.transform = `translate(calc(-50% + ${touchSteer * 28}px), -50%)`;
    if (ribbonAt.distanceToSquared(new THREE.Vector2(x, z)) > 36) paintRibbon();
    let back = narrow ? 12 : 13;
    const up = narrow ? 5.4 : 5.8;
    const camX = x - Math.sin(yaw) * back, camZ = z - Math.cos(yaw) * back;
    if (!cellAt(camX, camZ)) back *= 0.55;
    const desired = new THREE.Vector3(x - Math.sin(yaw) * back, y + up, z - Math.cos(yaw) * back);
    if (!snapped) { cam.copy(desired); snapped = true; }
    else cam.lerp(desired, 1 - Math.exp(-dt * 6));
    camera.position.copy(cam);
    look.set(x + Math.sin(yaw) * 14, y + 2.4, z + Math.cos(yaw) * 14);
    camera.lookAt(look);
    focus.set(x, y + 0.8, z);
    controls.target.copy(focus);
    if (speedEl) speedEl.textContent = `${Math.round(shown * 3.6)} km/sa`;
  }

  update(0);
  const roadCells = road.reduce((n, v) => n + (v ? 1 : 0), 0);
  (window as any).__driveInfo = {
    start: { x: homeX, z: homeZ, yaw: homeYaw }, roadCells, decks: deck.size,
    ramp: [555, 565, 572, 580, 590].map((z) => ({ z, d: deckAt(-590, z) })),
  };

  return {
    update, reset, focus: () => focus,
    state: () => ({ x, z, y, speed, yaw, onRoad: !!cellAt(x, z), lastBlock }),
    input: readInput,
    cell: (px: number, pz: number) => cellAt(px, pz),
    tick: (dt: number) => update(dt),
    setInput: (throttle, steer) => { scriptThrottle = throttle; scriptSteer = steer; },
  };
}
