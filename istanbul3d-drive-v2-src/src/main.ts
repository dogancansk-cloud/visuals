// İstanbul 3D Sürüş v2 — giriş noktası: yükleme, sahne, döngü, arayüz.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import './style.css';
import { Ground, GroundView, groundUniforms } from './world/ground';
import { makeRoadPainter } from './world/roadpaint';
import { Roads } from './world/roads';
import { Buildings, loadFacadeTextures } from './world/buildings';
import { Props } from './world/props';
import { loadLandmarks, type LM } from './world/landmarks';
import { Env, WEATHER_TR, type Weather } from './env';
import { Input } from './game/input';
import { Audio } from './game/audio';
import { Car, Walls } from './game/car';
import { Signals } from './game/signals';
import { Traffic } from './game/traffic';
import { Minimap } from './game/minimap';
import { SkidFx } from './game/fx';
import { Explore } from './game/explore';
import { Sea } from './world/sea';
import { Ferries } from './world/ferries';

const QS = new URLSearchParams(location.search);
const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;
const DATA = './data/';
const MAP = new URL('../istanbul3d/', location.href).href; // modeller haritanın kendi klasöründen

// ---------- kalite ----------
const PHONE = (matchMedia('(pointer:coarse)').matches && Math.min(screen.width, screen.height) < 820) || innerWidth < 700;
type QName = 'dusuk' | 'orta' | 'yuksek';
const QUAL: Record<QName, { pr: number; shadows: boolean; near: number; far: number; groundNear: number; fog: number; trees: number; lamps: number; detail: number; mask: number; park: number; cars: number; peds: number; lights: boolean }> = {
  dusuk: { park: 50, mask: 512, detail: 90, pr: 1.25, shadows: true, near: 330, far: 900, groundNear: 500, fog: 900, trees: 600, lamps: 120, cars: 24, peds: 30, lights: false },
  orta: { park: 90, mask: 1024, detail: 160, pr: 1.5, shadows: true, near: 450, far: 1300, groundNear: 700, fog: 1300, trees: 1400, lamps: 220, cars: 42, peds: 60, lights: true },
  yuksek: { park: 150, mask: 1024, detail: 280, pr: 2, shadows: true, near: 650, far: 1900, groundNear: 950, fog: 1900, trees: 2600, lamps: 360, cars: 70, peds: 100, lights: true },
};
const qStored = (() => { try { return localStorage.getItem('drv2_q'); } catch { return null; } })();
const qAuto = !QS.get('q') && (!qStored || qStored === 'oto');
let qName: QName = (QS.get('q') as QName) || (qStored && qStored !== 'oto' ? (qStored as QName) : 'orta');
if (!QUAL[qName]) qName = 'orta';
const Q = QUAL[qName];

// ---------- yükleme ----------
const lbar = $('lbar'), ltext = $('ltext');
let loaded = 0; const TOTAL = 5;
const tick = (t: string) => { loaded++; lbar.style.width = `${(loaded / (TOTAL + 1)) * 100}%`; ltext.textContent = t; };
async function get<T>(name: string, kind: 'json' | 'bin', label: string): Promise<T> {
  const r = await fetch(DATA + name); if (!r.ok) throw new Error(`${name}: ${r.status}`);
  const v = kind === 'json' ? await r.json() : await r.arrayBuffer(); tick(label); return v as T;
}

async function main() {
  const [meta, groundBuf, roadsData, bldBuf, treeBuf] = await Promise.all([
    get<{ grid: { x0: number; z0: number; step: number; nx: number; nz: number }; look: { oldZ: number; sa: number[]; gk: number[] }; chunk: number; chunks: number[][]; spawns: { id: string; x: number; z: number; yaw: number; road: string }[]; landmarks: LM[] }>('meta.json', 'json', 'Bilgiler'),
    get<ArrayBuffer>('ground.bin', 'bin', 'Zemin'),
    get<{ ways: (number | number[])[][]; names: Record<string, string>; lamps: number[][] }>('roads.json', 'json', 'Yollar'),
    get<ArrayBuffer>('buildings.bin', 'bin', 'Binalar'),
    get<ArrayBuffer>('trees.bin', 'bin', 'Ağaçlar'),
  ]);
  ltext.textContent = 'Şehir kuruluyor…';
  await new Promise((r) => setTimeout(r, 30));

  // ---------- çizici ----------
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  let pr = Math.min(devicePixelRatio, Q.pr); renderer.setPixelRatio(pr);
  const PR_MIN = Math.min(devicePixelRatio, 1.1);
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = Q.shadows; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.0;
  $('app').appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  // araba boyasındaki yansımalar için basit ortam (yalnız parlak malzemeleri etkiler)
  { const pm = new THREE.PMREMGenerator(renderer); scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; pm.dispose(); }
  const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.3, 6000);
  addEventListener('resize', () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); });

  // ---------- dünya ----------
  const G = new Ground(meta.grid, groundBuf);
  const groundView = new GroundView(G); scene.add(groundView.group);
  const roads = new Roads(roadsData, G); scene.add(roads.group);
  groundView.painter = makeRoadPainter(roads, Math.min(8, renderer.capabilities.getMaxAnisotropy())); groundView.res = [Q.mask, 192];
  const blds = new Buildings(bldBuf, meta.chunks, meta.look, meta.chunk); scene.add(blds.group);
  const props = new Props(treeBuf, roads.lamps, G, Q.trees, Q.lamps); scene.add(props.group);
  const sea = new Sea(PHONE); scene.add(sea.mesh);
  const ferries = new Ferries(G, meta.spawns); scene.add(ferries.group);
  const env = new Env(scene, Q.shadows, Q.fog, PHONE);
  const walls = new Walls(); blds.onCollidersChanged = () => { wallsDirty = true; }; let wallsDirty = false;
  const lmGroup = new THREE.Group(); scene.add(lmGroup);

  // ---------- oyun ----------
  const input = new Input($('wheel'), $('steerzone'), $('gas'), $('brake'), $('hb'), $('horn'));
  const audio = new Audio();
  const car = new Car(G, roads, walls, Q.lights); scene.add(car.obj, car.groundFx);
  const signals = new Signals(roads, G, scene);
  const traffic = new Traffic(roads, G, signals, scene, Q.cars, Q.peds, Q.park);
  const minimap = new Minimap($<HTMLCanvasElement>('minimap'), roads, G);
  const toast = (t: string, ms = 1800) => { const el = $('toast'); el.textContent = t; el.classList.add('on'); clearTimeout((toast as unknown as { h: number }).h); (toast as unknown as { h: number }).h = window.setTimeout(() => el.classList.remove('on'), ms); };
  let shake = 0; // çarpınca kamera sarsılır
  car.onHit = (p) => { audio.bump(p); shake = Math.min(1, shake + 0.35 + p * 0.8); };
  const skid = new SkidFx(); scene.add(skid.group);
  const explore = new Explore(roads, meta.landmarks, { chip: $('explore'), card: $('card'), cardTitle: $('card-title'), cardText: $('card-text'), chime: () => audio.chime(true) });
  car.onSplash = () => { audio.splash(); toast('Denize düştün!\nYola geri alınıyorsun', 1600); };
  traffic.onPedHit = () => toast('Yayaya dikkat!', 1200);

  const spawn = meta.spawns.find((s) => s.id === (QS.get('spawn') || 'eminonu')) || meta.spawns[0];
  if (QS.get('at')) { const [ax, az, ay] = QS.get('at')!.split(',').map(Number); spawn.x = ax; spawn.z = az; spawn.yaw = ay || 0; }
  car.place(spawn.x, spawn.z, spawn.yaw);

  const texReady = loadFacadeTextures(MAP, renderer, PHONE);
  // landmark modelleri arka planda
  loadLandmarks(meta.landmarks, MAP, lmGroup, (x, z) => G.H(x, z)).catch(() => {});

  // ---------- arayüz ----------
  if (matchMedia('(pointer:coarse)').matches) document.body.classList.add('touch');
  addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') document.body.classList.add('touch'); audio.start(); }, { capture: true });
  addEventListener('keydown', () => audio.start(), { capture: true });
  let camMode = 0; const CAMS = ['Takip', 'Uzak', 'Kaput'];
  const weathers: Weather[] = ['acik', 'bulutlu', 'yagmur', 'sis'];
  const wIcon: Record<Weather, string> = { acik: '☀︎', bulutlu: '☁︎', yagmur: '🌧', sis: '🌫' };
  const nextWeather = () => { const w = weathers[(weathers.indexOf(env.weather) + 1) % weathers.length]; env.setWeather(w); $('b-weather').textContent = wIcon[w]; toast(`Hava: ${WEATHER_TR[w]}`); };
  const nextHour = () => { env.hour = (Math.floor(env.hour) + 1) % 24; toast(`Saat ${env.hourText()}`, 900); };
  const nextCam = () => { camMode = (camMode + 1) % CAMS.length; toast(`Kamera: ${CAMS[camMode]}`, 900); };
  $('b-weather').onclick = nextWeather; $('b-time').onclick = nextHour; $('b-cam').onclick = nextCam;
  $('b-reset').onclick = () => car.resetToRoad();
  $('b-sound').onclick = () => { audio.start(); audio.setMuted(!audio.muted); $('b-sound').textContent = audio.muted ? '🔇' : '🔊'; };
  const qLabels: Record<string, string> = { oto: 'Oto', dusuk: 'Düşük', orta: 'Orta', yuksek: 'Yüksek' };
  $('b-q').textContent = qAuto ? 'Oto' : qLabels[qName];
  $('b-q').onclick = () => {
    const order = ['oto', 'dusuk', 'orta', 'yuksek']; const cur = qAuto ? 'oto' : qName; const nx = order[(order.indexOf(cur) + 1) % order.length];
    try { localStorage.setItem('drv2_q', nx); } catch { /* */ }
    toast(`Kalite: ${qLabels[nx]} — yeniden yükleniyor`, 1200); setTimeout(() => location.reload(), 700);
  };
  $('minimap').onclick = () => $('minimap').classList.toggle('big');
  input.onKey = (k) => {
    if (k === 'c') nextCam(); else if (k === 'r') car.resetToRoad(); else if (k === 't') nextHour(); else if (k === 'y') nextWeather(); else if (k === 'm') $('minimap').classList.toggle('big');
  };
  if (QS.get('hour')) env.hour = Number(QS.get('hour'));
  if (QS.get('weather') && weathers.includes(QS.get('weather') as Weather)) { env.setWeather(QS.get('weather') as Weather); env.rainAmt = env.weather === 'yagmur' ? 1 : 0; $('b-weather').textContent = wIcon[env.weather]; }

  // ---------- ilk yükleme: çevre hazır olana kadar bekle ----------
  const warm = async () => {
    for (let i = 0; i < 60; i++) {
      const left = groundView.update(car.x, car.z, Q.groundNear, Q.far + 400, 40);
      blds.update(car.x, car.z, Q.near, Q.far, Q.detail);
      if (!left && !blds.busy && i > 3) break;
      ltext.textContent = 'Binalar kuruluyor…'; lbar.style.width = `${(5 + Math.min(1, i / 20)) / 6 * 100}%`;
      await new Promise((r) => setTimeout(r, 60));
    }
    walls.rebuild(blds.colliders.values()); wallsDirty = false;
    car.place(spawn.x, spawn.z, spawn.yaw);
  };
  await warm(); await Promise.race([texReady, new Promise((r) => setTimeout(r, 6000))]);
  props.update(car.x, car.z, 260, 300);
  $('loading').classList.add('done');
  toast(PHONE || document.body.classList.contains('touch') ? 'Sağda gaz/fren, solda sürükle: direksiyon' : 'W A S D ile sür', 3500);

  // ---------- kamera ----------
  const camPos = new THREE.Vector3(), camLook = new THREE.Vector3(); let camInit = false;
  const updateCamera = (dt: number) => {
    const [fx, fz] = car.fwd; const v = car.speed;
    let dist = 7.6, h = 2.7, look = 1.4;
    if (camMode === 1) { dist = 14; h = 5.5; look = 1.2; }
    const tallScreen = camera.aspect < 0.8; if (tallScreen) { dist *= 1.25; h *= 1.25; } // dik telefon: biraz geriden, geniş açı
    const want = new THREE.Vector3();
    if (camMode === 2) {
      want.set(car.x + fx * 0.3, car.y + 1.45, car.z + fz * 0.3);
      camPos.copy(want); camLook.set(car.x + fx * 20, car.y + 1.2 + Math.sin(car.pitch) * 20, car.z + fz * 20);
    } else {
      // arkadan, hız yönüne biraz kayan takip
      const vy = Math.atan2(car.vx, car.vz); const useV = v > 3 && car.vLong > 0 ? 0.35 : 0; const dirx = Math.sin(car.yaw) * (1 - useV) + Math.sin(vy) * useV, dirz = Math.cos(car.yaw) * (1 - useV) + Math.cos(vy) * useV;
      want.set(car.x - dirx * dist, car.y + h + v * 0.02, car.z - dirz * dist);
      // kamera binanın içine girmesin: arabadan geriye doğru duvar varsa yaklaş
      for (let k = 1; k <= 8; k++) {
        const f = k / 8, sx = car.x + (want.x - car.x) * f, sz = car.z + (want.z - car.z) * f;
        if (walls.push(sx, sz, 0.6)) { const ff = Math.max(0.25, (k - 1) / 8); want.set(car.x + (want.x - car.x) * ff, want.y, car.z + (want.z - car.z) * ff); break; }
      }
      // kamera zeminin içine girmesin
      const gy = G.H(want.x, want.z) + 1.2; if (want.y < gy) want.y = gy;
      if (!camInit) { camPos.copy(want); camInit = true; }
      camPos.lerp(want, 1 - Math.exp(-dt * 6));
      // viraja doğru bak: dönüş hızına göre bakış noktası içe kayar
      const la = THREE.MathUtils.clamp(car.yawRate * 2.2, -3, 3) * Math.min(1, v / 8);
      camLook.lerp(new THREE.Vector3(car.x + fx * 4 + fz * la, car.y + look, car.z + fz * 4 - fx * la), 1 - Math.exp(-dt * 10));
    }
    camera.position.copy(camPos); camera.lookAt(camLook);
    // sarsıntı: çarpma (söner) + yol dışında hafif titreme
    shake *= Math.exp(-dt * 5); const sk = shake * 0.22 + car.offroad * Math.min(1, v / 10) * 0.025;
    if (sk > 0.002) { camera.position.x += (Math.random() - 0.5) * sk; camera.position.y += (Math.random() - 0.5) * sk; camera.rotation.z += (Math.random() - 0.5) * sk * 0.06; }
    const fov = (camMode === 2 ? 70 : 58) + (tallScreen ? 16 : 0) + Math.min(14, v * 0.32); if (Math.abs(camera.fov - fov) > 0.1) { camera.fov += (fov - camera.fov) * Math.min(1, dt * 3); camera.updateProjectionMatrix(); }
  };

  // ---------- döngü ----------
  const clock = new THREE.Clock(); let acc = 0; const FIX = 1 / 120;
  let ftAvg = 16, adaptT = 0, lodT = 0, hudT = 0, t = 0;
  const kmh = $('kmh'), gearEl = $('gear'), clockEl = $('clock'), streetEl = $('street');
  const frame = () => {
    const dt = Math.min(0.1, clock.getDelta()); t += dt;
    input.update(dt);
    acc += dt; let n = 0;
    while (acc >= FIX && n < 12) { car.step(FIX, input.c, traffic.obstacles); acc -= FIX; n++; } // yavaş cihazda da araba gerçek hızında gitsin
    if (n === 12) acc = 0;
    if (wallsDirty) { walls.rebuild(blds.colliders.values()); wallsDirty = false; }
    signals.update(dt, car);
    traffic.update(dt, car, env.night);
    env.update(dt, camera.position, car.obj.position);
    sea.update(t, env, camera.position); props.night(env.night); ferries.update(dt, t);
    car.sync(input.c, env.night, dt); scene.environmentIntensity = 1 - 0.8 * env.night;
    { // lastik izi ve duman: arka tekerlekler kayarken
      const [fx, fz] = car.fwd, rx = -fz, rz = fx, amt = car.airborne ? 0 : THREE.MathUtils.clamp((car.slip - 3.2) / 5, 0, 1) * Math.min(1, car.speed / 5);
      const wl = [car.x - fx * 1.36 - rx * 0.8, 0, car.z - fz * 1.36 - rz * 0.8], wr = [car.x - fx * 1.36 + rx * 0.8, 0, car.z - fz * 1.36 + rz * 0.8];
      wl[1] = car.groundY(wl[0], wl[2], car.y); wr[1] = car.groundY(wr[0], wr[2], car.y);
      skid.update(dt, amt * (1 - car.offroad), [wl, wr], rx, rz);
    }
    explore.update(dt, car);
    updateCamera(dt);
    // dünya parçaları (her karede biraz)
    lodT += dt; if (lodT > 0.15) { lodT = 0; groundView.update(car.x, car.z, Q.groundNear, Q.far + 400, 3); blds.update(car.x, car.z, Q.near, Q.far, Q.detail); roads.update(car.x, car.z, Q.far); props.update(car.x, car.z, Q.trees > 1000 ? 380 : 260, Q.lamps > 200 ? 320 : 230); }
    roads.asphalt.color.setScalar(1 - env.wet * 0.3); groundUniforms.uWet.value = env.wet; groundUniforms.uTime.value = t;
    audio.update({ rpm: car.rpm, throttle: input.c.throttle, speed: car.speed, slip: car.slip, horn: input.c.horn, rain: env.rainAmt, sea: G.kindAt(car.x + car.fwd[0] * 30, car.z + car.fwd[1] * 30) === 1 ? 1 : 0, t });
    hudT += dt; if (hudT > 0.1) {
      hudT = 0; kmh.textContent = String(Math.round(car.speed * 3.6)); gearEl.textContent = car.vLong < -0.5 ? 'G' : String(car.gear); clockEl.textContent = env.hourText();
      minimap.draw(car, null, [], traffic, explore.markers);
      const nr = roads.nearest(car.x, car.z, 12, undefined, car.y); streetEl.textContent = nr?.w.name || '';
    }
    renderer.render(scene, camera);
    // telefon akıcılığı: kare süresine göre çözünürlük
    ftAvg += (dt * 1000 - ftAvg) * 0.05; adaptT += dt;
    if (qAuto && adaptT > 1.5) {
      adaptT = 0;
      if (ftAvg > 30 && pr > PR_MIN) { pr = Math.max(PR_MIN, pr - 0.1); renderer.setPixelRatio(pr); } // görüntü asla bloklaşacak kadar düşmez
      else if (ftAvg < 15 && pr < Math.min(devicePixelRatio, Q.pr)) { pr = Math.min(Math.min(devicePixelRatio, Q.pr), pr + 0.1); renderer.setPixelRatio(pr); }
    }
    requestAnimationFrame(frame);
  };
  (window as unknown as Record<string, unknown>).__drv2 = { groundView, explore, ferries, car, env, roads, G, traffic, signals, blds, camera, renderer, scene, setCam: (m: number) => (camMode = m), get ft() { return ftAvg; }, get pr() { return pr; } };
  requestAnimationFrame(frame);
}

main().catch((e) => { console.error(e); ltext.textContent = `Hata: ${e.message}`; });
