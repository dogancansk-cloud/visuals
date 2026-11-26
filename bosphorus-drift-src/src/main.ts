// Bosphorus Drift — ana döngü, oyun durumu, kamera, menüler.
import * as THREE from 'three';
import { Track, Textures } from './track';
import { World, WorldData, SUN_DIR } from './world/world';
import { Props } from './props';
import { Ink } from './post';
import { Trails } from './trails';
import { Life } from './life';
import { Weather } from './weather';
import { Kart, DRIFT_ZONE, DRIFT_LATE } from './kart';
import { AI } from './ai';
import { Items, GALATA_ITEMS, type ItemLayout } from './items';
import { buildBazaarTrack, F_HALL } from './kc/kcpath';
import { Bazaar } from './kc/bazaar';
import { Particles } from './fx';
import { Input } from './input';
import { Audio } from './audio';
import { CHARS, buildKart } from './characters';
import { ICONS, ITEM_NAME, MiniMap, Msg, fmt } from './hud';

const LAPS = 3;
const Q = new URLSearchParams(location.search);
const store0 = (() => { try { return localStorage.getItem('bd.pist'); } catch { return null; } })();
const PIST: 'galata' | 'kc' = Q.get('pist') === 'kc' ? 'kc' : 'galata'; // açılış her zaman Galata; pist ana ekrandan seçilir
void store0;
export const PISTS = { galata: 'Galata Kulesi', kc: 'Kapalıçarşı' } as const;
const mobile = matchMedia('(pointer: coarse)').matches || /Android|iPhone|iPad/i.test(navigator.userAgent);
const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector<T>(s)!;
const store = { get(k: string) { try { return localStorage.getItem('bd.' + k); } catch { return null; } }, set(k: string, v: string) { try { localStorage.setItem('bd.' + k, v); } catch { /* yok */ } } };

// ---------- görüntü ----------
const canvas = $<HTMLCanvasElement>('#view');
let renderer: THREE.WebGLRenderer;
try { renderer = new THREE.WebGLRenderer({ canvas, antialias: !mobile, powerPreference: 'high-performance' }); }
catch { $('#ltxt').textContent = 'Bu cihazda 3B görüntü başlatılamadı.'; throw new Error('webgl'); }
const PR = Math.min(devicePixelRatio, mobile ? 1.5 : 2);
renderer.setPixelRatio(1);
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
const ink = new Ink(renderer, mobile ? 0 : 4);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, 1, 0.3, 2000);
let hemi: THREE.HemisphereLight, sun: THREE.DirectionalLight;
if (PIST === 'galata') {
  scene.fog = new THREE.Fog(0xd9a7b8, 220, 1400);
  // gün batımı: sıcak, alçak güneş; mor-mavi gölgeler
  hemi = new THREE.HemisphereLight(0xc3cdf5, 0x9a88a8, 1.9);
  sun = new THREE.DirectionalLight(0xffcf9e, 2.3);
} else {
  // çarşı içi: sıcak fener ışığı, tepe pencerelerinden gelen yumuşak ışık
  scene.background = new THREE.Color(0x5a4a44);
  scene.fog = new THREE.Fog(0x9a8478, 70, 320);
  hemi = new THREE.HemisphereLight(0xfff3e0, 0x8a7066, 2.5);
  sun = new THREE.DirectionalLight(0xfff0dc, 1.5);
}
scene.add(hemi);
sun.castShadow = true;
sun.shadow.mapSize.set(mobile ? 1024 : 2048, mobile ? 1024 : 2048);
Object.assign(sun.shadow.camera, { left: -55, right: 55, top: 55, bottom: -55, near: 1, far: 400 });
sun.shadow.bias = -0.0008; sun.shadow.normalBias = 0.06;
scene.add(sun, sun.target);
const SUN_FROM = PIST === 'galata' ? SUN_DIR : new THREE.Vector3(0.25, 1, 0.15).normalize();

const loadBar = $('#loading .lbar i'), loadPct = $('#lpct'), loadTxt = $('#ltxt');
let loadShown = 0;
const setLoad = (p: number, t?: string) => { loadShown = Math.max(loadShown, p); loadBar.style.width = loadShown * 100 + '%'; loadPct.textContent = `%${Math.round(loadShown * 100)}`; if (t) loadTxt.textContent = t; };
const frameWait = () => new Promise((r) => requestAnimationFrame(() => r(0)));
const tex = new Textures();
interface Ground { hAt(x: number, z: number): number; update(t: number): void; skyMats: THREE.ShaderMaterial[] }
let track: Track, world: Ground, props: { update(dt: number, t: number): void; uPlayer: { value: THREE.Vector3 } };
let itemLayout: ItemLayout = GALATA_ITEMS, lifeCfg = { cats: 30, vendors: [120, 390, 880, 1290], gulls: 24, ferries: true };
if (PIST === 'galata') {
  setLoad(0.02, 'Harita indiriliyor…');
  const data = await WorldData.load('./', (p) => setLoad(0.02 + p * 0.38));
  setLoad(0.42, 'Pist çiziliyor…'); await frameWait();
  track = new Track(data.H);
  track.build(scene, tex);
  setLoad(0.48, 'Arazi ve sokaklar…'); await frameWait();
  const w = new World(scene, data, track, mobile);
  await w.build((m, f) => setLoad(0.5 + f * 0.44, m));
  world = w;
  setLoad(0.95, 'Seyirciler yerleşiyor…'); await frameWait();
  props = new Props(scene, track, w, tex, mobile);
} else {
  setLoad(0.1, 'Çarşı kapıları açılıyor…'); await frameWait();
  track = new Track(buildBazaarTrack());
  const stone = tex.make(256, 256, (c, w, h) => { c.fillStyle = '#d6c8b4'; c.fillRect(0, 0, w, h); c.strokeStyle = '#b3a48e'; c.lineWidth = 4; for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) c.strokeRect(k * 64 + (r % 2) * 32, r * 64, 64, 64); c.fillStyle = 'rgba(255,240,210,0.18)'; for (let k = 0; k < 30; k++) c.fillRect((k * 71) % w, (k * 37) % h, 18, 6); c.fillStyle = '#e8d9bf'; c.fillRect(w * 0.035, 0, w * 0.02, h); c.fillRect(w * 0.945, 0, w * 0.02, h); }, true);
  const carpet = tex.make(64, 64, (c, w, h) => { c.fillStyle = '#9e2b25'; c.fillRect(0, 0, w, h); c.fillStyle = '#e6c15a'; c.fillRect(0, h / 2 - 4, w, 8); c.fillStyle = '#1f3f6e'; c.fillRect(w / 2 - 6, 0, 12, h); }, true);
  const counter = tex.make(256, 64, (c, w, h) => { c.fillStyle = '#7a4a32'; c.fillRect(0, 0, w, h); ['#c8302c', '#2a5fa8', '#e6a82c', '#2a8a6a', '#8a3a7a', '#e8e0d0'].forEach((col, k) => { c.fillStyle = col; c.fillRect(6 + k * 42, 12, 36, h - 18); c.fillStyle = 'rgba(255,255,255,0.35)'; c.fillRect(6 + k * 42, 12 + (k % 3) * 9, 36, 4); }); c.fillStyle = '#e6c15a'; c.fillRect(0, 0, w, 7); }, true);
  track.build(scene, tex, { road: stone, curb: carpet, wall: counter, rail: counter, under: 0x6a4a3a });
  setLoad(0.45, 'Dükkânlar kuruluyor…'); await frameWait();
  const bz = new Bazaar(scene, track, tex, mobile);
  world = bz; props = bz;
  itemLayout = {
    boxes: [60, 250, 600, 830, 1010, 1240],
    simits: [[20, 0, 6], [120, 3, 6], [200, -2, 4], [300, 0, 5], [380, 0, 5], [445, 0, 4], [510, -3, 5], [545, 3, 5], [620, 2, 5], [690, -2, 5], [745, 3, 5], [860, 0, 6], [940, -3, 4], [1060, 2, 5], [1140, -2, 5], [1300, 0, 6]],
    pads: [{ s0: 150, s1: 157, d: 0, w: 5 }, { s0: 745, s1: 752, d: 0, w: 6 }, { s0: 1050, s1: 1057, d: 0, w: 5 }, { s0: 1260, s1: 1267, d: 2, w: 5 }],
  };
  lifeCfg = { cats: 20, vendors: [100, 350, 650, 940, 1180], gulls: 0, ferries: false };
  setLoad(0.9, 'Esnaf yerini alıyor…'); await frameWait();
}
const fx = new Particles(scene, mobile ? 600 : 1000);
const trails = new Trails(scene);
const audio = new Audio();
const input = new Input($('#ui'));
const msg = new Msg($('#msg'));
const mini = new MiniMap($<HTMLCanvasElement>('#mini'), track);

// ---------- durum ----------
type State = 'title' | 'select' | 'count' | 'race' | 'done';
let state: State = 'title', paused = false;
let charIdx = Math.max(0, Math.min(5, Number(store.get('char') ?? 0) || 0));
let diff = (store.get('diff') as 'kolay' | 'normal' | 'zor') || 'normal';
audio.muted = store.get('mute') === '1';
let karts: Kart[] = [], ais: AI[] = [], player!: Kart, playerAI: AI | null = null;
let raceT = 0, countT = 0, doneT = 0, lastBeep = 4, gasEdgeT = -9, prevGas = false, startBoostGiven = false;
const auto = Q.has('auto');

const items = new Items(scene, track, tex, fx, {
  onPickup(k, kind) { if (k === player) kind === 'simit' ? (audio.simit(), k.simit === 10 && msg.show('SİMİT DOLU!', 't2')) : audio.box(); },
  onUse(k, it) {
    if (it === 'marti') { if (near(k)) audio.gull(); return; }
    if (it === 'duduk') { if (near(k)) audio.horn(); return; }
    if (it === 'kedi') { audio.meow(); return; }
    if (k !== player) return;
    if (it === 'nazar') k.shieldT > 0 ? audio.shield() : audio.throwIt();
    if (it === 'turbo') audio.boost(3); if (it === 'cay') audio.splash(); if (it === 'simit') audio.throwIt();
  },
  onTarget(v, by) { if (v === player) { msg.show(by === 'marti' ? 'Martı geliyor!' : 'Dikkat, kediler!', 'bad'); if (by === 'marti') audio.gull(); } },
  onHit(v, by, owner) {
    if (near(v)) by === 'kedi' ? audio.meow() : audio.hit();
    const what: Record<string, [string, string]> = {
      marti: ['Martı saldırısı!', `Martı ${v.def.name}’i yakaladı!`], cay: ['Çaya bastın!', `${v.def.name} çayda kaydı!`],
      simit: ['Simit isabet!', `Simit ${v.def.name}’e çarptı!`], nazar: ['Nazar değdi!', `Nazar ${v.def.name}’e değdi!`],
      duduk: ['Vapur düdüğü!', `${v.def.name} düdükle savruldu!`], kedi: ['Kedilere takıldın!', `${v.def.name} kedilere takıldı!`],
    };
    const t = what[by] || ['Vuruldun!', `${v.def.name} vuruldu!`];
    if (v === player) msg.show(t[0] + (v.lastLoss ? ` −${v.lastLoss} simit` : ''), 'bad'); else if (owner === player) msg.show(t[1], 't1');
  },
  onBlock(k) { if (k === player) { audio.block(); msg.show('Nazar korudu!', 't1'); } },
  onPad(k) { if (k === player) audio.boost(2); },
}, itemLayout);
const near = (k: Kart) => k === player || k.pos.distanceTo(player.pos) < 35;
const life = new Life(scene, track, world, items, fx, mobile, lifeCfg);
const weather = new Weather(scene, sun, hemi, world.skyMats, mobile);
weather.onStart = () => msg.show('Yağmur başladı!', 't1');
if (PIST === 'kc') weather.onStart = null;
weather.onThunder = () => audio.thunder();

function setupRace() {
  for (const k of karts) scene.remove(k.model.root);
  items.reset(); trails.reset();
  karts = []; ais = [];
  const order = [0, 1, 2, 3, 4, 5].filter((i) => i !== charIdx);
  const grid = [0, 1, 2, 3, 4, 5]; const pSlot = 3;
  const skills = diff === 'kolay' ? [0.2, 0.3, 0.35, 0.4, 0.45] : diff === 'zor' ? [0.8, 0.85, 0.9, 0.95, 1.0] : [0.5, 0.55, 0.62, 0.68, 0.75];
  let ai = 0;
  for (const slot of grid) {
    const isP = slot === pSlot, ci = isP ? charIdx : order[ai];
    const k = new Kart(track, ci, isP, kartEvents);
    const row = Math.floor(slot / 2), side = slot % 2 ? 3.2 : -3.2;
    k.place0(track.L - 8 - row * 7.5, side);
    k.model.root.traverse((o) => { if ((o as THREE.Mesh).isMesh) o.castShadow = true; });
    const st = CHARS[ci].stats; k.stat = { spd: (st[0] - 3) / 2, acc: (st[1] - 3) / 2, han: (st[2] - 3) / 2 };
    scene.add(k.model.root); karts.push(k);
    if (isP) player = k; else { ais.push(new AI(k, track, skills[ai])); ai++; }
  }
  if (Q.has('at')) { player.place0(Number(Q.get('at')), 0); }
  playerAI = auto ? new AI(player, track, 1) : null;
  raceT = 0; doneT = 0; lastBeep = 4; gasEdgeT = -9; startBoostGiven = false;
  weather.plan(); if (Q.has('rain')) weather.startAt = 0.1;
  if (PIST === 'kc') weather.clear(); // çarşının içinde yağmur yok
  for (const k of karts) k.sync(0, 0);
}

const kartEvents = {
  onBoost(k: Kart, level: number) {
    if (k !== player) return;
    audio.boost(level);
    msg.show(['', 'TURBO!', 'SÜPER TURBO!', 'ULTRA TURBO!'][level], 't' + level);
  },
  onDriftFail(k: Kart, late: boolean) { if (k === player) { audio.fail(); msg.show(late ? 'Geç kaldın!' : 'Erken!', 'bad'); } },
  onDriftStart(k: Kart) { if (k === player) audio.hop(); },
  onLand(k: Kart, v: number) { if (k === player && v > 5) audio.land(); dust(k, v > 9 ? 14 : 6); },
  onWall(k: Kart) { if (k === player) audio.wall(); },
  onHit() { /* items olayında */ },
};

// ---------- kamera ----------
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
let camFov = 70, camInit = false, camYaw = 0, shake = 0;
function updateCamera(dt: number, time: number) {
  if (state === 'select') {
    const short = innerHeight < 500, back = camera.aspect < 1 ? 11 : short ? 8.6 : 7.2;
    camera.position.copy(SR).addScaledVector(srRight, back).add(new THREE.Vector3(0, 1.9, 0)).addScaledVector(new THREE.Vector3(-srRight.z, 0, srRight.x), camera.aspect > 1.3 ? 1.2 : 0);
    camera.lookAt(SR.x, SR.y + (short ? 1.0 : 2.2), SR.z); camera.fov = 50; camera.updateProjectionMatrix(); camInit = false;
    if (srKart) { srKart.root.rotation.y = time * 0.6; srKart.root.position.y = 0.52 + Math.abs(Math.sin(time * 3)) * 0.04; srKart.wheels.forEach((w) => (w.rotation.z -= 0.05)); }
    ink.mat.uniforms.speed.value = 0; return;
  }
  if (state === 'title' && PIST === 'kc') {
    const s = (time * 9) % track.L, p = track.point(s, 0), q = track.point(s + 14, 0);
    camera.position.set(p.x, p.y + 3.4, p.z); camera.lookAt(q.x, q.y + 2.2, q.z); camera.fov = 62; camera.updateProjectionMatrix(); camInit = false; return;
  }
  if (state === 'title') {
    const tw = track.T.tower, a = time * 0.06 + 2.2;
    const far = camera.aspect < 1 ? 150 / Math.max(0.5, camera.aspect) : 150;
    camera.position.set(tw.x + Math.cos(a) * far, tw.y0 + 52 + (far - 150) * 0.25, tw.z + Math.sin(a) * far);
    camera.lookAt(tw.x, tw.y0 + 26, tw.z); camera.fov = 50; camera.updateProjectionMatrix(); camInit = false; return;
  }
  const k = player;
  // kamera yönü kartı biraz geriden izler: driftte kayış görünür
  const lag = k.drifting ? 3.2 : k.spinT > 0 ? 1.5 : 6.5;
  if (!camInit) camYaw = k.yaw;
  let dy = k.yaw - camYaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); camYaw += dy * Math.min(1, dt * lag);
  const fx0 = Math.cos(camYaw), fz0 = Math.sin(camYaw);
  const sp = Math.max(0, k.speed), back = 5.9 + Math.min(1.2, sp * 0.03), up = 2.95 + Math.min(0.5, sp * 0.012);
  const want = new THREE.Vector3(k.pos.x - fx0 * back, k.pos.y + up, k.pos.z - fz0 * back);
  const look = new THREE.Vector3(k.pos.x + fx0 * 7, k.pos.y + 1.0, k.pos.z + fz0 * 7);
  if (!camInit) { camPos.copy(want); camLook.copy(look); camInit = true; }
  const kp = 1 - Math.exp(-dt * 14), kl = 1 - Math.exp(-dt * 16);
  camPos.lerp(want, kp); camLook.lerp(look, kl);
  if (camPos.y < k.f.h + 1.3) camPos.y = k.f.h + 1.3;
  shake = Math.max(shake * Math.exp(-dt * 7), k.squash * 0.35, k.boostT > 0 ? 0.04 : 0);
  camera.position.copy(camPos).add(new THREE.Vector3((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake));
  camera.lookAt(camLook);
  camera.rotateZ(-k.driftVis * 0.035);
  const tf = 70 + Math.min(9, Math.max(0, sp - 18) * 0.45) + (k.boostT > 0 ? 9 : 0);
  camFov += (tf - camFov) * Math.min(1, dt * 5);
  camera.fov = camera.aspect < 1 ? Math.min(100, (2 * Math.atan(Math.tan((camFov * Math.PI) / 360) / camera.aspect * 0.62) * 180) / Math.PI) : camFov; camera.updateProjectionMatrix();
  ink.mat.uniforms.speed.value = state === 'race' ? Math.min(1, Math.max(0, (sp - 30) / 9) + (k.boostT > 0 ? 0.6 : 0)) : 0;
  ink.mat.uniforms.time.value = time;
}

// ---------- efektler ----------
const C = { white: new THREE.Color(0xffffff), grey: new THREE.Color(0xd9d4d0), pink: new THREE.Color(0xff7aa8), l1: new THREE.Color(0x7ec0f0), l2: new THREE.Color(0xf6a65a), l3: new THREE.Color(0xb48ef0), flame: new THREE.Color(0xffb35c), flame2: new THREE.Color(0xfff1a0), dust: new THREE.Color(0xeadfce), spray: new THREE.Color(0xdfe6f5) };
const tmp = new THREE.Vector3();
function local(k: Kart, lx: number, ly: number, lz: number) {
  const c = Math.cos(k.yaw), s = Math.sin(k.yaw);
  return tmp.set(k.pos.x + lx * c - lz * s, k.pos.y + ly, k.pos.z + lx * s + lz * c);
}
function kartFx(k: Kart) {
  const close = k.pos.distanceToSquared(camera.position) < 70 * 70; if (!close) return;
  if (k.drifting && k.grounded) {
    const ready = k.charge >= DRIFT_ZONE[0];
    const col = k.boosts >= 3 ? C.l3 : ready ? C.pink : k.boosts === 2 ? C.l2 : k.boosts === 1 ? C.l1 : C.grey;
    for (const sd of [-1, 1]) {
      const p = local(k, -0.8, 0.15, sd * 0.85);
      if (ready || k.boosts > 0) fx.emit(p.x, p.y, p.z, (Math.random() - 0.5) * 4, Math.random() * 3 + 1, (Math.random() - 0.5) * 4, col, 1, 0.22, 0.35, 12);
      if (Math.random() < 0.3) fx.emit(p.x, p.y + 0.2, p.z, (Math.random() - 0.5), 1.2, (Math.random() - 0.5), C.white, 0.3, 0.7, 0.45);
    }
  }
  if (k.boostT > 0) for (const e of k.model.exhaust) {
    const p = local(k, e.x, e.y, e.z), b = -12;
    fx.emit(p.x, p.y, p.z, Math.cos(k.yaw) * b * 0.3 + (Math.random() - 0.5), Math.random(), Math.sin(k.yaw) * b * 0.3 + (Math.random() - 0.5), Math.random() < 0.5 ? C.flame : C.flame2, 1, 0.55, 0.22);
  } else if (k.speed > 2 && k.speed < 20 && Math.random() < 0.1) {
    const e = k.model.exhaust[0], p = local(k, e.x, e.y, e.z);
    fx.emit(p.x, p.y, p.z, 0, 0.8, 0, C.white, 0.2, 0.3, 0.4);
  }
  if (weather.level > 0.4 && k.grounded && k.speed > 8) for (const sd of [-1, 1]) {
    const p = local(k, -0.9, 0.2, sd * 0.75);
    fx.emit(p.x, p.y, p.z, -Math.cos(k.yaw) * 3 + (Math.random() - 0.5) * 2, 1.5 + Math.random() * 2, -Math.sin(k.yaw) * 3 + (Math.random() - 0.5) * 2, C.spray, 0.3 * weather.level, 0.26, 0.4, 10);
  }
  if (k.spinT > 0 && Math.random() < 0.6) { const p = local(k, 0, 1.6, 0); fx.emit(p.x, p.y, p.z, (Math.random() - 0.5) * 3, 2, (Math.random() - 0.5) * 3, C.flame2, 1, 0.3, 0.5); }
}
function dust(k: Kart, n: number) { for (let i = 0; i < n; i++) fx.emit(k.pos.x + (Math.random() - 0.5) * 2, k.pos.y + 0.2, k.pos.z + (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 5, Math.random() * 2, (Math.random() - 0.5) * 5, C.dust, 0.8, 1.2, 0.7); }

// ---------- HUD ----------
const hud = { spd: $('#spd b'), pos: $('#pos b'), lap: $('#lap'), time: $('#time'), item: $('#item'), itembox: $('#itembox'), simit: $('#simit b'), simitBox: $('#simit'), drift: $('#drift'), fill: $('#drift .fill'), zone: $('#drift .zone'), pips: [...document.querySelectorAll<HTMLElement>('#drift .pips i')], wrong: $('#wrong'), count: $('#count') };
const ZW = 1.4;
hud.zone.style.left = (DRIFT_ZONE[0] / ZW) * 100 + '%'; hud.zone.style.width = ((DRIFT_ZONE[1] + DRIFT_LATE - DRIFT_ZONE[0]) / ZW) * 100 + '%';
let rollIcon = 0, lastPlace = 0, lastLap = 0, wasReady = false;
function updateHud(dt: number) {
  const k = player;
  hud.pos.textContent = String(k.place);
  hud.spd.textContent = String(Math.max(0, Math.round(k.speed * 3.6 * 1.65)));
  hud.spd.parentElement!.classList.toggle('boost', k.boostT > 0);
  if (k.place !== lastPlace) { hud.pos.parentElement!.animate([{ transform: 'scale(1.35)' }, { transform: 'scale(1)' }], { duration: 250 }); lastPlace = k.place; }
  hud.lap.textContent = `TUR ${Math.min(LAPS, Math.max(1, k.lap))}/${LAPS}`;
  hud.time.textContent = fmt(k.finished ? k.finishTime : raceT);
  hud.simit.textContent = String(k.simit); hud.simitBox.classList.toggle('full', k.simit >= 10);
  hud.itembox.classList.toggle('juiced', k.simit >= 10);
  if (k.rollT > 0) { rollIcon += dt * 14; const keys = Object.keys(ICONS) as (keyof typeof ICONS)[]; hud.item.style.backgroundImage = `url(${ICONS[keys[Math.floor(rollIcon) % keys.length]]})`; hud.item.style.opacity = '0.7'; }
  else if (k.shieldT > 0) { hud.item.style.backgroundImage = `url(${ICONS.nazar})`; hud.item.style.opacity = String(k.shieldT < 3 ? 0.35 + Math.abs(Math.sin(raceT * 10)) * 0.5 : 0.75 + Math.sin(raceT * 6) * 0.2); hud.item.title = 'Nazarı fırlat'; }
  else if (k.item) { hud.item.style.backgroundImage = `url(${ICONS[k.item]})`; hud.item.style.opacity = '1'; hud.item.title = ITEM_NAME[k.item]; }
  else hud.item.style.backgroundImage = 'none';
  hud.drift.classList.toggle('hide', !k.drifting);
  if (k.drifting) {
    hud.fill.style.width = Math.min(100, (k.charge / ZW) * 100) + '%';
    const ready = k.charge >= DRIFT_ZONE[0] && k.charge <= DRIFT_ZONE[1] + DRIFT_LATE && k.boosts < 3 && k.lockT <= 0;
    if (ready && !wasReady) { audio.ready(); try { navigator.vibrate?.(18); } catch { /* yok */ } }
    wasReady = ready;
    hud.drift.classList.toggle('ready', ready);
    hud.pips.forEach((p, i) => p.classList.toggle('on', i < k.boosts));
  }
  hud.wrong.classList.toggle('hide', !(k.wrongT > 1.2 && !k.finished));
  mini.draw(karts, player);
}

// ---------- oyun adımı ----------
function updatePlaces() {
  const sorted = [...karts].sort((a, b) => (a.finished && b.finished ? a.finishTime - b.finishTime : a.finished ? -1 : b.finished ? 1 : b.progress - a.progress));
  sorted.forEach((k, i) => (k.place = i + 1));
}
function step(dt: number) {
  const raceOn = state === 'race' || state === 'done';
  input.update(dt);
  // başlangıç turbosu: "BAŞLA"dan hemen önce gaza basmak
  const g = input.c.gas > 0;
  if (state === 'count' && g && !prevGas) gasEdgeT = countT;
  prevGas = g;
  const pc = playerAI ? (playerAI.update(dt, karts, player, true), playerAI.ctl) : input.c;
  player.step(dt, pc, raceOn);
  for (const a of ais) { a.update(dt, karts, player); a.k.step(dt, a.ctl, raceOn); }
  // kart-kart çarpışması
  for (let i = 0; i < karts.length; i++) for (let j = i + 1; j < karts.length; j++) {
    const a = karts[i], b = karts[j], dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z, d2 = dx * dx + dz * dz;
    if (d2 < 2.4 && d2 > 1e-4 && Math.abs(a.pos.y - b.pos.y) < 1.6) {
      const d = Math.sqrt(d2), o = (1.55 - d) / 2, nx = dx / d, nz = dz / d;
      a.pos.x -= nx * o; a.pos.z -= nz * o; b.pos.x += nx * o; b.pos.z += nz * o;
      const rv = (b.vel.x - a.vel.x) * nx + (b.vel.z - a.vel.z) * nz;
      if (rv < 0) { a.vel.x += nx * rv * 0.6; a.vel.z += nz * rv * 0.6; b.vel.x -= nx * rv * 0.6; b.vel.z -= nz * rv * 0.6; }
    }
  }
  if (!raceOn) return;
  items.update(dt, karts, raceT);
  for (const k of karts) if (k.wantItem && (k.item || k.shieldT > 0) && k.rollT <= 0 && k.spinT <= 0) items.use(k, karts);
  updatePlaces();
  // tur ve bitiş
  for (const k of karts) {
    if (!k.finished && k.lap > LAPS) {
      k.finished = true; k.finishTime = raceT;
      if (k === player) onPlayerFinish();
    }
  }
  if (player.lap !== lastLap && state === 'race') {
    if (player.lap === LAPS) { msg.show('SON TUR!', 'big'); audio.lap(); }
    else if (player.lap > 1 && player.lap < LAPS) { msg.show(`${player.lap}. TUR`, 'big'); audio.lap(); }
    lastLap = player.lap;
  }
  if (!playerAI && (player.stuckT > 3 || player.wrongT > 5)) { player.respawn(); player.stuckT = 0; player.wrongT = 0; }
}

function onPlayerFinish() {
  state = 'done'; doneT = 0;
  playerAI = new AI(player, track, 0.7);
  const win = player.place === 1;
  audio.finish(win);
  msg.show(win ? 'BİRİNCİSİN!' : `${player.place}. oldun!`, 'big');
  life.fireworks(track.point(0, 0));
  $('#touch').classList.add('hide');
}

// ---------- menüler ----------
const menu = $('#menu');
let portraits: string[] = [];
function makePortraits() {
  const rt = new THREE.WebGLRenderTarget(256, 256, { colorSpace: THREE.SRGBColorSpace } as THREE.RenderTargetOptions);
  const sc = new THREE.Scene(); sc.background = new THREE.Color(0xfff3e6);
  sc.add(new THREE.HemisphereLight(0xffffff, 0xf3d6bd, 2.2)); const dl = new THREE.DirectionalLight(0xffffff, 1.6); dl.position.set(3, 5, 4); sc.add(dl);
  const cam = new THREE.PerspectiveCamera(32, 1, 0.1, 50); cam.position.set(3.2, 2.2, 3.6); cam.lookAt(0, 0.85, 0);
  const buf = new Uint8Array(256 * 256 * 4), cv = document.createElement('canvas'); cv.width = cv.height = 256; const c2 = cv.getContext('2d')!;
  for (const d of CHARS) {
    const m = buildKart(d); m.root.rotation.y = -0.5; sc.add(m.root);
    renderer.setRenderTarget(rt); renderer.render(sc, cam); renderer.readRenderTargetPixels(rt, 0, 0, 256, 256, buf); renderer.setRenderTarget(null);
    const img = c2.createImageData(256, 256);
    for (let y = 0; y < 256; y++) img.data.set(buf.subarray((255 - y) * 1024, (256 - y) * 1024), y * 1024);
    c2.putImageData(img, 0, 0); portraits.push(cv.toDataURL()); sc.remove(m.root);
  }
  rt.dispose();
}

function showTitle() {
  state = 'title'; paused = false; setHud(false); weather.clear(); audio.rain(0);
  menu.innerHTML = `<div class="title"><div class="logo">BOSPHORUS<br>DRIFT<small>${PISTS[PIST].toLocaleUpperCase("tr")}</small></div>
    <div class="seg pist tpist">${(Object.keys(PISTS) as (keyof typeof PISTS)[]).map((k) => `<button data-p="${k}" class="${k === PIST ? 'sel' : ''}">${PISTS[k]}</button>`).join('')}</div>
    <div class="row"><button class="btn" id="bPlay">Yarış</button><button class="btn alt" id="bHow">Nasıl oynanır</button></div>
    <button class="btn ghost" id="bMute">${audio.muted ? 'Ses: kapalı' : 'Ses: açık'}</button></div>`;
  $('#bPlay').onclick = () => { audio.start(); audio.click(); showSelect(); };
  $('#bHow').onclick = () => { audio.start(); audio.click(); showHelp(showTitle); };
  $('#bMute').onclick = () => { toggleMute(); showTitle(); };
  menu.querySelectorAll<HTMLElement>('.tpist button[data-p]').forEach((b) => (b.onclick = () => {
    const p = b.dataset.p!; if (p === PIST) return; audio.click();
    const u = new URL(location.href); u.search = ''; if (p !== 'galata') u.searchParams.set('pist', p); location.href = u.toString();
  }));
}
// ---------- karakter seçimi: kule önünde döner kaide ----------
const showroom = new THREE.Group(); scene.add(showroom); showroom.visible = false;
const SR_S = PIST === 'galata' ? 698 : 300, SR = track.point(SR_S, 0);
// Galata: kule çıkışındaki köprü, arkada kule · Kapalıçarşı: Sandal Bedesteni salonu
const srRight = PIST === 'galata' ? new THREE.Vector3(SR.x - track.T.tower.x, 0, SR.z - track.T.tower.z).normalize() : new THREE.Vector3(track.T.tx[track.idxOf(SR_S)], 0, track.T.tz[track.idxOf(SR_S)]);
{
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.6, 0.5, 40), new THREE.MeshLambertMaterial({ color: 0x3f6fd6 })); ped.position.y = 0.25; ped.receiveShadow = true; showroom.add(ped);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(2.45, 0.12, 8, 48), new THREE.MeshLambertMaterial({ color: 0xf2c94c })); rim.rotation.x = Math.PI / 2; rim.position.y = 0.5; showroom.add(rim);
  const top = new THREE.Mesh(new THREE.CircleGeometry(2.3, 40), new THREE.MeshLambertMaterial({ map: tex.make(256, 256, (c, w, h) => { for (const [r, col] of [[128, '#2f6fb3'], [92, '#ffffff'], [64, '#7ec0f0'], [34, '#191e2d']] as const) { c.fillStyle = col; c.beginPath(); c.arc(w / 2, h / 2, r, 0, 7); c.fill(); } }) }));
  top.rotation.x = -Math.PI / 2; top.position.y = 0.51; showroom.add(top);
  showroom.position.copy(SR);
}
let srKart: ReturnType<typeof buildKart> | null = null, srIdx = -1;
function setShowroomKart(i: number) {
  if (srIdx === i) return; srIdx = i;
  if (srKart) showroom.remove(srKart.root);
  srKart = buildKart(CHARS[i]); srKart.root.position.y = 0.52; srKart.root.scale.setScalar(1.25);
  srKart.root.traverse((o) => { if ((o as THREE.Mesh).isMesh) o.castShadow = true; });
  showroom.add(srKart.root);
}
const STAT_NAMES = ['Hız', 'İvme', 'Yol tutuş'];
function showSelect() {
  state = 'select'; if (!portraits.length) makePortraits();
  showroom.visible = true; setShowroomKart(charIdx);
  for (const k of karts) k.model.root.visible = false;
  const c = CHARS[charIdx];
  menu.innerHTML = `<div class="cs">
    <div class="selInfo"><small>KARAKTER ${charIdx + 1}/6</small><h1>${c.name}</h1><p>${c.blurb}</p>
      ${c.stats.map((v, i) => `<div class="stat"><span>${STAT_NAMES[i]}</span><div class="bars">${[1, 2, 3, 4, 5].map((n) => `<i class="${n <= v ? 'on' : ''}"></i>`).join('')}</div></div>`).join('')}
    </div>
    <button class="selArrow l" id="sPrev" aria-label="Önceki">‹</button><button class="selArrow r" id="sNext" aria-label="Sonraki">›</button>
    <div class="selBottom">
      <div class="chips">${CHARS.map((ch, i) => `<button class="chip${i === charIdx ? ' sel' : ''}" data-i="${i}" style="--c:#${ch.color.toString(16).padStart(6, '0')}"><img src="${portraits[i]}" alt="${ch.name}"></button>`).join('')}</div>
      <div class="selRow"><div class="seg pist">${(Object.keys(PISTS) as (keyof typeof PISTS)[]).map((k) => `<button data-p="${k}" class="${k === PIST ? 'sel' : ''}">${PISTS[k]}</button>`).join('')}</div><div class="seg">${(['kolay', 'normal', 'zor'] as const).map((d) => `<button data-d="${d}" class="${d === diff ? 'sel' : ''}">${d[0].toUpperCase() + d.slice(1)}</button>`).join('')}</div>
      <button class="btn ghost" id="bBack">Geri</button><button class="btn" id="bGo">Başla</button></div>
    </div></div>`;
  const pick = (i: number) => { charIdx = (i + 6) % 6; store.set('char', String(charIdx)); audio.click(); showSelect(); };
  menu.querySelectorAll<HTMLElement>('.chip').forEach((b) => (b.onclick = () => pick(Number(b.dataset.i))));
  $('#sPrev').onclick = () => pick(charIdx - 1); $('#sNext').onclick = () => pick(charIdx + 1);
  menu.querySelectorAll<HTMLElement>('.seg button[data-d]').forEach((b) => (b.onclick = () => { diff = b.dataset.d as typeof diff; store.set('diff', diff); audio.click(); showSelect(); }));
  menu.querySelectorAll<HTMLElement>('.seg button[data-p]').forEach((b) => (b.onclick = () => {
    const p = b.dataset.p!; if (p === PIST) return;
    store.set('pist', p); audio.click();
    const u = new URL(location.href); u.searchParams.set('pist', p); u.searchParams.set('sel', '1'); location.href = u.toString();
  }));
  $('#bBack').onclick = () => { audio.click(); showroom.visible = false; showTitle(); };
  $('#bGo').onclick = () => { audio.click(); startCountdown(); };
}
function showHelp(back: () => void) {
  const it = (k: keyof typeof ICONS, t: string) => `<div><img src="${ICONS[k]}" alt=""><span><b>${ITEM_NAME[k]}</b><br>${t}</span></div>`;
  menu.innerHTML = `<div class="panel help"><h2>Nasıl oynanır</h2>
    <p>Galata Kulesi’nin etrafında <b>3 tur</b>. İlk bitiren kazanır.</p>
    <table>
      <tr><td>Gaz / fren</td><td><kbd>W</kbd> <kbd>↑</kbd> / <kbd>S</kbd> <kbd>↓</kbd> · telefonda <b>GAZ</b> ve <b>FREN</b> düğmeleri</td></tr>
      <tr><td>Direksiyon</td><td><kbd>A</kbd> <kbd>D</kbd> <kbd>←</kbd> <kbd>→</kbd> · telefonda sol yarıda parmağını kaydır</td></tr>
      <tr style="display:none"><td>Drift</td><td><kbd>Boşluk</kbd> / <kbd>Shift</kbd> ya da <b>DRİFT</b> düğmesi · dönerken dokun, kart zıplayıp kaymaya başlar. Direksiyonu bıraksan da hemen bitmez; bitirmek için ters yöne çevir ya da frene bas.</td></tr>
      <tr style="display:none"><td>Drift turbosu</td><td>Drift sırasında çubuk <b>yeşile</b> dönünce (zil sesi, telefonda titreşim) aynı tuşa bir kez daha dokun. Üst üste <b>3 kez</b>: Ultra Turbo!</td></tr>
      <tr><td>Eşya</td><td><kbd>E</kbd> veya <kbd>Enter</kbd></td></tr>
      <tr><td>Diğer</td><td>Mavi oklu pedler ve çıkardığın turbo seni hızlandırır · <kbd>R</kbd> piste dön · <kbd>Esc</kbd> duraklat · <kbd>M</kbd> ses · oyun kolu da çalışır</td></tr>
    </table>
    <div class="items">${it('marti', 'Öndeki karta kilitlenir.')}${it('cay', 'Arkana çay dökersin, basan kayar.')}${it('nazar', '10 saniye kalkan olur. Tekrar basarsan öndekine fırlatırsın.')}${it('turbo', 'Anında hız.')}${it('simit', 'Düz gider, duvardan seker. 10 simitle üçlü.')}${it('duduk', 'Yakındaki kartları savurur.')}${it('kedi', 'Öndeki kartların önüne kediler çıkar.')}</div>
    <p>Yoldaki <b>simitleri</b> topla: her biri biraz hız verir. 10 simitte eşyalar da güçlenir. Vurulursan ya da çaya basarsan 4 simit düşer. Mavi oklu pedler ve sürpriz kutuları <b>?</b> pistin her yerinde.</p>
    <div class="row sticky"><button class="btn" id="bOk">Tamam</button></div></div>`;
  $('#bOk').onclick = () => { audio.click(); back(); };
}
function showPause() {
  paused = true;
  menu.innerHTML = `<div class="panel"><h2>Duraklatıldı</h2><div class="row" style="flex-direction:column;align-items:center">
    <button class="btn" id="pRes">Devam</button><button class="btn alt" id="pRe">Yeniden başla</button><button class="btn ghost" id="pHow">Nasıl oynanır</button><button class="btn ghost" id="pMute">${audio.muted ? 'Ses: kapalı' : 'Ses: açık'}</button><button class="btn ghost" id="pMenu">Ana menü</button></div></div>`;
  $('#pRes').onclick = resume;
  $('#pRe').onclick = () => { paused = false; startCountdown(); };
  $('#pHow').onclick = () => showHelp(showPause);
  $('#pMute').onclick = () => { toggleMute(); showPause(); };
  $('#pMenu').onclick = () => { paused = false; audio.music(false); showTitle(); };
  audio.music(false);
}
function resume() { paused = false; menu.innerHTML = ''; audio.music(true); last = performance.now(); }
function showResults() {
  $('#hud').classList.add('hide');
  menu.innerHTML = `<div class="panel"><h2>${player.place === 1 ? 'Kazandın! 🏆' : 'Yarış bitti'}</h2><table class="res" id="resT">${resRows()}</table>
    <div class="row"><button class="btn" id="rAgain">Tekrar yarış</button><button class="btn alt" id="rSel">Karakter seç</button></div><div class="credit">© 2026 Doğancan Işık · Bosphorus Drift · ilk sürüm</div></div>`;
  $('#rAgain').onclick = () => { audio.click(); startCountdown(); };
  $('#rSel').onclick = () => { audio.click(); audio.music(false); showSelect(); };
}
/** sonuç tablosu: diğerleri bitirdikçe dereceleri yazılır, yoldakiler kalan turu gösterir */
function resRows() {
  return [...karts].sort((a, b) => a.place - b.place).map((k) => `<tr class="${k === player ? 'me' : ''}"><td class="n">${k.place}</td><td>${k.def.name}${k === player ? ' (sen)' : ''}</td><td class="t">${k.finished ? fmt(k.finishTime) : `<span class="ongoing">${Math.min(LAPS, k.lap)}. tur…</span>`}</td></tr>`).join('');
}
let resLast = '';
function startCountdown() {
  menu.innerHTML = ''; paused = false; showroom.visible = false;
  setupRace(); state = 'count'; countT = 3.6; lastLap = 0; camInit = false;
  setHud(true); audio.start(); audio.music(true);
}
function setHud(on: boolean) {
  $('#hud').classList.toggle('hide', !on);
  $('#touch').classList.toggle('hide', !(on && (mobile || input.touch)));
}
function toggleMute() { audio.setMuted(!audio.muted); store.set('mute', audio.muted ? '1' : '0'); }

// Telefonda yakınlaştırmayı engelle: iki parmak, çift dokunma, iOS jestleri. Menü paneli kaydırılabilir kalır.
for (const ev of ['gesturestart', 'gesturechange', 'gestureend']) document.addEventListener(ev, (e) => e.preventDefault(), { passive: false } as AddEventListenerOptions);
document.addEventListener('touchmove', (e) => { const inPanel = (e.target as HTMLElement)?.closest?.('.panel'); if (e.touches.length > 1 || !inPanel) e.preventDefault(); }, { passive: false });
let lastTap = 0;
document.addEventListener('touchend', (e) => { const now = performance.now(); if (now - lastTap < 350 && !(e.target as HTMLElement)?.closest?.('button')) e.preventDefault(); lastTap = now; }, { passive: false });
document.addEventListener('dblclick', (e) => e.preventDefault(), { passive: false });

input.onKey = (k) => {
  audio.start();
  if (k === 'escape' || k === 'p') { if (state === 'race' || state === 'count') paused ? resume() : showPause(); }
  if (k === 'm') toggleMute();
  if (k === 'r' && state === 'race' && !paused) player.respawn();
};
$('#pauseBtn').addEventListener('click', () => { if (state === 'race' || state === 'count') paused ? resume() : showPause(); });
document.addEventListener('visibilitychange', () => { if (document.hidden && (state === 'race' || state === 'count') && !paused) showPause(); });

// ---------- döngü ----------
function resize() {
  const w = innerWidth, h = innerHeight; renderer.setSize(Math.floor(w * PR), Math.floor(h * PR), false); canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
  camera.aspect = w / h; camera.updateProjectionMatrix(); ink.setSize(w, h, PR);
  fx.setScale(h * PR);
}
addEventListener('resize', resize); resize();

let last = performance.now(), time = 0;
const ts = Number(Q.get('t') || 1), fast = Number(Q.get('fast') || 0);
function frame(now: number) {
  requestAnimationFrame(frame);
  let dt = Math.min(0.05, (now - last) / 1000) * ts; last = now;
  if (fast) dt = fast / 60;
  if (paused) dt = 0;
  time += dt;
  if (state === 'count') {
    countT -= dt;
    const n = Math.ceil(countT - 0.6);
    if (n < lastBeep && n >= 1 && n <= 3) { lastBeep = n; hud.count.innerHTML = `<div>${n}</div>`; audio.beep(false); }
    if (countT <= 0.6 && lastBeep > 0) {
      lastBeep = 0; hud.count.innerHTML = '<div class="go">BAŞLA!</div>'; audio.beep(true);
      state = 'race'; raceT = 0;
      // başlangıç turbosu: son 0.45 sn içinde basıldıysa
      if (gasEdgeT <= 1.05 && gasEdgeT > 0.6 && !startBoostGiven) { startBoostGiven = true; player.boost(7, 1.3); msg.show('Süper kalkış!', 't2'); }
      for (const a of ais) if (Math.random() < a.skill * 0.7) a.k.boost(6, 1.1);
    }
  }
  if (state === 'race' || state === 'done') raceT += dt;
  if (state !== 'title' && state !== 'select') {
    const sub = Math.max(2, Math.ceil(dt / 0.009));
    for (let i = 0; i < sub; i++) step(dt / sub);
    for (const k of karts) { k.sync(dt, time); kartFx(k); }
    if (dt > 0) trails.update(karts, camera.position);
    if (state === 'race' || state === 'count') updateHud(dt);
    audio.engine(player.speed, playerAI ? 1 : input.c.gas, player.drifting && player.grounded, player.boostT > 0, !paused && state !== 'done');
    if (state === 'done') {
      doneT += dt; if (doneT > 3 && doneT - dt <= 3) { showResults(); resLast = ''; }
      const rt = document.getElementById('resT'); if (rt && Math.floor(doneT * 4) !== Math.floor((doneT - dt) * 4)) { const h = resRows(); if (h !== resLast) { rt.innerHTML = h; resLast = h; } }
    }
  } else audio.engine(0, 0, false, false, false);
  audio.tick();
  fx.update(dt);
  world.update(time); props.update(dt, time);
  const racing = state === 'race' || state === 'done';
  if (dt > 0) {
    weather.update(dt, racing ? raceT : -1, camera.position);
    life.update(dt, time, karts, state === 'title' || state === 'select' ? null : player, state === 'race');
    for (const k of karts) k.grip = weather.level > 0.5 ? 0.88 : 1;
    audio.rain(paused ? 0 : weather.level);
    if (player && (racing || state === 'count')) props.uPlayer.value.copy(player.pos);
  }
  updateCamera(dt, time);
  // gölge kamerası oyuncuyu izler
  const focus = state === 'title' ? (PIST === 'kc' ? camera.position : new THREE.Vector3(track.T.tower.x, track.T.tower.y0 + 10, track.T.tower.z)) : state === 'select' ? SR : player.pos;
  sun.position.copy(focus).addScaledVector(SUN_FROM, 220); sun.target.position.copy(focus);
  ink.render(scene, camera);
}

setLoad(1, 'Hazır!');
setTimeout(() => $('#loading').remove(), 250);
if (Q.has('sel')) { audio.start(); showSelect(); } else showTitle();
if (Q.has('skip')) { audio.muted = true; startCountdown(); }
requestAnimationFrame(frame);
(window as unknown as Record<string, unknown>).__bd = { get player() { return player; }, get karts() { return karts; }, get state() { return state; }, track, camera, scene, renderer, get raceT() { return raceT; } };
