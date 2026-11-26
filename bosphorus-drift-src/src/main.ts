// Bosphorus Drift — ana döngü, oyun durumu, kamera, menüler.
import * as THREE from 'three';
import { Track, Textures } from './track';
import { Scenery } from './scenery';
import { Kart, DRIFT_ZONE } from './kart';
import { AI } from './ai';
import { Items } from './items';
import { Particles } from './fx';
import { Input } from './input';
import { Audio } from './audio';
import { CHARS, buildKart } from './characters';
import { ICONS, ITEM_NAME, MiniMap, Msg, fmt } from './hud';

const LAPS = 3;
const Q = new URLSearchParams(location.search);
const mobile = matchMedia('(pointer: coarse)').matches || /Android|iPhone|iPad/i.test(navigator.userAgent);
const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector<T>(s)!;
const store = { get(k: string) { try { return localStorage.getItem('bd.' + k); } catch { return null; } }, set(k: string, v: string) { try { localStorage.setItem('bd.' + k, v); } catch { /* yok */ } } };

// ---------- görüntü ----------
const canvas = $<HTMLCanvasElement>('#view');
let renderer: THREE.WebGLRenderer;
try { renderer = new THREE.WebGLRenderer({ canvas, antialias: !mobile, powerPreference: 'high-performance' }); }
catch { $('#loading p').textContent = 'Bu cihazda 3B görüntü başlatılamadı.'; throw new Error('webgl'); }
renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.5 : 2));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xf2e4dc, 140, 720);
const camera = new THREE.PerspectiveCamera(68, 1, 0.3, 2000);
const hemi = new THREE.HemisphereLight(0xe3f1ff, 0xf3d6bd, 1.75); scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff0dc, 2.1); sun.castShadow = true;
sun.shadow.mapSize.set(mobile ? 1024 : 2048, mobile ? 1024 : 2048);
Object.assign(sun.shadow.camera, { left: -42, right: 42, top: 42, bottom: -42, near: 1, far: 260 });
sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.04;
scene.add(sun, sun.target);

const tex = new Textures();
const track = new Track();
track.build(scene, tex);
const scenery = new Scenery(scene, track, tex, mobile);
const fx = new Particles(scene, mobile ? 600 : 1000);
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
  onUse(k, it) { if (it === 'marti') { if (near(k)) audio.gull(); } else if (k === player) { if (it === 'nazar') audio.shield(); if (it === 'turbo') audio.boost(3); if (it === 'cay') audio.splash(); } },
  onHit(v, by, owner) {
    if (near(v)) audio.hit();
    if (v === player) msg.show(by === 'marti' ? 'Martı saldırısı!' : 'Çaya bastın!', 'bad');
    else if (owner === player) msg.show(by === 'marti' ? `Martı ${v.def.name}’i yakaladı!` : `${v.def.name} çayda kaydı!`, 't1');
  },
  onBlock(k) { if (k === player) { audio.block(); msg.show('Nazar korudu!', 't1'); } },
  onPad(k) { if (k === player) audio.boost(2); },
});
const near = (k: Kart) => k === player || k.pos.distanceTo(player.pos) < 35;

function setupRace() {
  for (const k of karts) scene.remove(k.model.root);
  items.reset();
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
    scene.add(k.model.root); karts.push(k);
    if (isP) player = k; else { ais.push(new AI(k, track, skills[ai])); ai++; }
  }
  if (Q.has('at')) { player.place0(Number(Q.get('at')), 0); }
  playerAI = auto ? new AI(player, track, 1) : null;
  raceT = 0; doneT = 0; lastBeep = 4; gasEdgeT = -9; startBoostGiven = false;
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
let camFov = 68, camInit = false;
function updateCamera(dt: number, time: number) {
  if (state === 'title' || state === 'select') {
    const tw = track.T.tower, a = time * 0.07;
    const far = camera.aspect < 1 ? 95 / Math.max(0.5, camera.aspect) : 95;
    camera.position.set(tw.x + Math.cos(a) * far, 48 + (far - 95) * 0.3, tw.z + Math.sin(a) * far);
    camera.lookAt(tw.x, 26, tw.z); camera.fov = 55; camera.updateProjectionMatrix(); camInit = false; return;
  }
  const k = player, fx0 = Math.cos(k.yaw), fz0 = Math.sin(k.yaw);
  const back = 7.2, up = 3.1;
  const want = new THREE.Vector3(k.pos.x - fx0 * back, k.pos.y + up, k.pos.z - fz0 * back);
  const look = new THREE.Vector3(k.pos.x + fx0 * 5, k.pos.y + 1.3, k.pos.z + fz0 * 5);
  if (!camInit) { camPos.copy(want); camLook.copy(look); camInit = true; }
  const kp = 1 - Math.exp(-dt * (k.spinT > 0 ? 3 : 8)), kl = 1 - Math.exp(-dt * 12);
  camPos.lerp(want, kp); camLook.lerp(look, kl);
  // kameranın yere girmesini engelle
  if (camPos.y < k.f.h + 1.6) camPos.y = k.f.h + 1.6;
  camera.position.copy(camPos); camera.lookAt(camLook);
  const tf = 68 + (k.boostT > 0 ? 10 : 0) + Math.min(6, Math.max(0, k.speed - 20) * 0.6);
  camFov += (tf - camFov) * Math.min(1, dt * 4);
  camera.fov = camera.aspect < 1 ? Math.min(100, (2 * Math.atan(Math.tan((camFov * Math.PI) / 360) / camera.aspect * 0.62) * 180) / Math.PI) : camFov; camera.updateProjectionMatrix();
}

// ---------- efektler ----------
const C = { white: new THREE.Color(0xffffff), grey: new THREE.Color(0xd9d4d0), pink: new THREE.Color(0xff7aa8), l1: new THREE.Color(0x7ec0f0), l2: new THREE.Color(0xf6a65a), l3: new THREE.Color(0xb48ef0), flame: new THREE.Color(0xffb35c), flame2: new THREE.Color(0xfff1a0), dust: new THREE.Color(0xeadfce) };
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
      if (Math.random() < 0.5) fx.emit(p.x, p.y + 0.2, p.z, (Math.random() - 0.5), 1.2, (Math.random() - 0.5), C.white, 0.45, 1.0, 0.6);
    }
  }
  if (k.boostT > 0) for (const e of k.model.exhaust) {
    const p = local(k, e.x, e.y, e.z), b = -12;
    fx.emit(p.x, p.y, p.z, Math.cos(k.yaw) * b * 0.3 + (Math.random() - 0.5), Math.random(), Math.sin(k.yaw) * b * 0.3 + (Math.random() - 0.5), Math.random() < 0.5 ? C.flame : C.flame2, 1, 0.55, 0.22);
  } else if (k.speed > 2 && Math.random() < 0.25) {
    const e = k.model.exhaust[0], p = local(k, e.x, e.y, e.z);
    fx.emit(p.x, p.y, p.z, 0, 0.8, 0, C.white, 0.35, 0.5, 0.5);
  }
  if (k.spinT > 0 && Math.random() < 0.6) { const p = local(k, 0, 1.6, 0); fx.emit(p.x, p.y, p.z, (Math.random() - 0.5) * 3, 2, (Math.random() - 0.5) * 3, C.flame2, 1, 0.3, 0.5); }
}
function dust(k: Kart, n: number) { for (let i = 0; i < n; i++) fx.emit(k.pos.x + (Math.random() - 0.5) * 2, k.pos.y + 0.2, k.pos.z + (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 5, Math.random() * 2, (Math.random() - 0.5) * 5, C.dust, 0.8, 1.2, 0.7); }

// ---------- HUD ----------
const hud = { pos: $('#pos b'), lap: $('#lap'), time: $('#time'), item: $('#item'), itembox: $('#itembox'), simit: $('#simit b'), simitBox: $('#simit'), drift: $('#drift'), fill: $('#drift .fill'), zone: $('#drift .zone'), pips: [...document.querySelectorAll<HTMLElement>('#drift .pips i')], wrong: $('#wrong'), count: $('#count') };
const ZW = 1.25;
hud.zone.style.left = (DRIFT_ZONE[0] / ZW) * 100 + '%'; hud.zone.style.width = ((DRIFT_ZONE[1] + 0.12 - DRIFT_ZONE[0]) / ZW) * 100 + '%';
let rollIcon = 0, lastPlace = 0, lastLap = 0;
function updateHud(dt: number) {
  const k = player;
  hud.pos.textContent = String(k.place);
  if (k.place !== lastPlace) { hud.pos.parentElement!.animate([{ transform: 'scale(1.35)' }, { transform: 'scale(1)' }], { duration: 250 }); lastPlace = k.place; }
  hud.lap.textContent = `TUR ${Math.min(LAPS, Math.max(1, k.lap))}/${LAPS}`;
  hud.time.textContent = fmt(k.finished ? k.finishTime : raceT);
  hud.simit.textContent = String(k.simit); hud.simitBox.classList.toggle('full', k.simit >= 10);
  hud.itembox.classList.toggle('juiced', k.simit >= 10);
  if (k.rollT > 0) { rollIcon += dt * 14; const keys = Object.keys(ICONS) as (keyof typeof ICONS)[]; hud.item.style.backgroundImage = `url(${ICONS[keys[Math.floor(rollIcon) % 4]]})`; hud.item.style.opacity = '0.7'; }
  else if (k.item) { hud.item.style.backgroundImage = `url(${ICONS[k.item]})`; hud.item.style.opacity = '1'; hud.item.title = ITEM_NAME[k.item]; }
  else hud.item.style.backgroundImage = 'none';
  hud.drift.classList.toggle('hide', !k.drifting);
  if (k.drifting) {
    hud.fill.style.width = Math.min(100, (k.charge / ZW) * 100) + '%';
    hud.drift.classList.toggle('ready', k.charge >= DRIFT_ZONE[0] && k.charge <= DRIFT_ZONE[1] + 0.12);
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
    if (d2 < 3.6 && d2 > 1e-4 && Math.abs(a.pos.y - b.pos.y) < 1.6) {
      const d = Math.sqrt(d2), o = (1.9 - d) / 2, nx = dx / d, nz = dz / d;
      a.pos.x -= nx * o; a.pos.z -= nz * o; b.pos.x += nx * o; b.pos.z += nz * o;
      const rv = (b.vel.x - a.vel.x) * nx + (b.vel.z - a.vel.z) * nz;
      if (rv < 0) { a.vel.x += nx * rv * 0.6; a.vel.z += nz * rv * 0.6; b.vel.x -= nx * rv * 0.6; b.vel.z -= nz * rv * 0.6; }
    }
  }
  if (!raceOn) return;
  items.update(dt, karts, raceT);
  for (const k of karts) if (k.wantItem && k.item && k.rollT <= 0 && k.spinT <= 0) items.use(k, karts);
  if (input.c.item && player.item && !playerAI && player.wantItem) { /* use() yukarıda */ }
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
  state = 'title'; paused = false; setHud(false);
  menu.innerHTML = `<div class="title"><div class="logo">BOSPHORUS<br>DRIFT<small>GALATA KULESİ</small></div>
    <div class="row"><button class="btn" id="bPlay">Yarış</button><button class="btn alt" id="bHow">Nasıl oynanır</button></div>
    <button class="btn ghost" id="bMute">${audio.muted ? 'Ses: kapalı' : 'Ses: açık'}</button></div>`;
  $('#bPlay').onclick = () => { audio.start(); audio.click(); showSelect(); };
  $('#bHow').onclick = () => { audio.start(); audio.click(); showHelp(showTitle); };
  $('#bMute').onclick = () => { toggleMute(); showTitle(); };
}
function showSelect() {
  state = 'select'; if (!portraits.length) makePortraits();
  menu.innerHTML = `<div class="panel"><h2>Karakterini seç</h2><div class="chars">${CHARS.map((c, i) => `<button class="char${i === charIdx ? ' sel' : ''}" data-i="${i}"><img src="${portraits[i]}" alt=""><b>${c.name}</b><small>${c.blurb}</small></button>`).join('')}</div>
    <div class="seg">${(['kolay', 'normal', 'zor'] as const).map((d) => `<button data-d="${d}" class="${d === diff ? 'sel' : ''}">${d[0].toUpperCase() + d.slice(1)}</button>`).join('')}</div>
    <div class="row"><button class="btn ghost" id="bBack">Geri</button><button class="btn" id="bGo">Başla</button></div></div>`;
  menu.querySelectorAll<HTMLElement>('.char').forEach((b) => (b.onclick = () => { charIdx = Number(b.dataset.i); store.set('char', String(charIdx)); audio.click(); showSelect(); }));
  menu.querySelectorAll<HTMLElement>('.seg button').forEach((b) => (b.onclick = () => { diff = b.dataset.d as typeof diff; store.set('diff', diff); audio.click(); showSelect(); }));
  $('#bBack').onclick = () => { audio.click(); showTitle(); };
  $('#bGo').onclick = () => { audio.click(); startCountdown(); };
}
function showHelp(back: () => void) {
  const it = (k: keyof typeof ICONS, t: string) => `<div><img src="${ICONS[k]}" alt=""><span><b>${ITEM_NAME[k]}</b><br>${t}</span></div>`;
  menu.innerHTML = `<div class="panel help"><h2>Nasıl oynanır</h2>
    <p>Galata Kulesi’nin etrafında <b>3 tur</b>. İlk bitiren kazanır.</p>
    <table>
      <tr><td>Gaz / fren</td><td><kbd>W</kbd> <kbd>↑</kbd> / <kbd>S</kbd> <kbd>↓</kbd> · telefonda gaz kendiliğinden</td></tr>
      <tr><td>Direksiyon</td><td><kbd>A</kbd> <kbd>D</kbd> <kbd>←</kbd> <kbd>→</kbd> · telefonda sol yarıda parmağını kaydır</td></tr>
      <tr><td>Drift</td><td><kbd>Boşluk</kbd> veya <kbd>Shift</kbd> · bir yöne dönerken bas, kart zıplayıp kaymaya başlar</td></tr>
      <tr><td>Drift turbosu</td><td>Drift sırasında çubuk <b>yeşil bölgeye</b> gelince aynı tuşa tekrar bas. Üst üste <b>3 kez</b> tutturursan Ultra Turbo! Erken ya da geç basarsan bir an kilitlenir.</td></tr>
      <tr><td>Eşya</td><td><kbd>E</kbd> veya <kbd>Enter</kbd></td></tr>
      <tr><td>Diğer</td><td><kbd>R</kbd> piste dön · <kbd>Esc</kbd> duraklat · <kbd>M</kbd> ses · oyun kolu da çalışır</td></tr>
    </table>
    <div class="items">${it('marti', 'Öndeki karta kilitlenir.')}${it('cay', 'Arkana çay dökersin, basan kayar.')}${it('nazar', 'Bir saldırıyı geri çevirir.')}${it('turbo', 'Anında hız.')}</div>
    <p>Yoldaki <b>simitleri</b> topla: her biri biraz hız verir. 10 simitte eşyalar da güçlenir. Vurulursan 3 simit düşer. Mavi oklu pedler ve sürpriz kutuları <b>?</b> pistin her yerinde.</p>
    <div class="row"><button class="btn" id="bOk">Tamam</button></div></div>`;
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
  const rows = [...karts].sort((a, b) => a.place - b.place).map((k) => `<tr class="${k === player ? 'me' : ''}"><td class="n">${k.place}</td><td>${k.def.name}${k === player ? ' (sen)' : ''}</td><td class="t">${k.finished ? fmt(k.finishTime) : 'yolda'}</td></tr>`).join('');
  menu.innerHTML = `<div class="panel"><h2>${player.place === 1 ? 'Kazandın! 🏆' : 'Yarış bitti'}</h2><table class="res">${rows}</table>
    <div class="row"><button class="btn" id="rAgain">Tekrar yarış</button><button class="btn alt" id="rSel">Karakter seç</button></div><div class="credit">© 2026 Doğancan Işık · Bosphorus Drift · ilk sürüm</div></div>`;
  $('#rAgain').onclick = () => { audio.click(); startCountdown(); };
  $('#rSel').onclick = () => { audio.click(); audio.music(false); showSelect(); };
}
function startCountdown() {
  menu.innerHTML = ''; paused = false;
  setupRace(); state = 'count'; countT = 3.6; lastLap = 0; camInit = false;
  setHud(true); audio.start(); audio.music(true);
}
function setHud(on: boolean) {
  $('#hud').classList.toggle('hide', !on);
  $('#touch').classList.toggle('hide', !(on && (mobile || input.touch)));
}
function toggleMute() { audio.setMuted(!audio.muted); store.set('mute', audio.muted ? '1' : '0'); }

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
  const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
  fx.setScale(h * renderer.getPixelRatio());
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
    if (state === 'race' || state === 'count') updateHud(dt);
    audio.engine(player.speed, playerAI ? 1 : input.c.gas, player.drifting && player.grounded, player.boostT > 0, !paused && state !== 'done');
    if (state === 'done') { doneT += dt; if (doneT > 3 && doneT - dt <= 3) { showResults(); } }
  } else audio.engine(0, 0, false, false, false);
  audio.tick();
  fx.update(dt);
  scenery.update(dt, time);
  updateCamera(dt, time);
  // gölge kamerası oyuncuyu izler
  const focus = state === 'title' || state === 'select' ? new THREE.Vector3(track.T.tower.x, 10, track.T.tower.z) : player.pos;
  sun.position.set(focus.x + 50, focus.y + 90, focus.z + 30); sun.target.position.copy(focus);
  renderer.render(scene, camera);
}

$('#loading').remove();
showTitle();
if (Q.has('skip')) { audio.muted = true; startCountdown(); }
requestAnimationFrame(frame);
(window as unknown as Record<string, unknown>).__bd = { get player() { return player; }, get karts() { return karts; }, get state() { return state; }, track, camera, scene, renderer, get raceT() { return raceT; } };
