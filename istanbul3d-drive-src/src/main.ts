import * as THREE from 'three';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { HorizontalTiltShiftShader } from 'three/examples/jsm/shaders/HorizontalTiltShiftShader.js';
import { VerticalTiltShiftShader } from 'three/examples/jsm/shaders/VerticalTiltShiftShader.js';
import { buildAyasofya } from './landmarks/ayasofya';
import { buildTopkapi, buildGltfLandmark } from './landmarks/topkapi';
import { buildSultanahmet } from './landmarks/sultanahmet';
import { buildYeniCami } from './landmarks/yenicami';
import { buildRustemPasa } from './landmarks/rustempasa';
import { buildGalata } from './landmarks/galata';
import { buildExtra } from './landmarks/extras';
import { buildKapalicarsi } from './landmarks/kapalicarsi';
import './style.css';

// Published page is istanbul3d-drive/; the reviewed map files stay in istanbul3d/.
function mapRoot(): string {
  const u = new URL(import.meta.url);
  const seg = u.pathname.split('/').filter(Boolean);
  seg.pop();
  if (seg[seg.length - 1] === 'assets') seg.pop();
  if (seg[seg.length - 1] === 'src') seg.pop();
  if (seg[seg.length - 1] === 'istanbul3d-drive') seg.pop();
  seg.push('istanbul3d');
  u.pathname = `/${seg.join('/')}/`;
  u.search = '';
  u.hash = '';
  return u.href;
}
const MAP = mapRoot();

// ?step=N shows the build up to step N (1 base, 2 toy look, 3 flat layers, 4 trees, 5 time of day, 6 landmarks). Default: all.
const QS = new URLSearchParams(location.search);
const STEP = Number(QS.get('step') || 99);
const T0 = performance.now(); const PROF: Record<string, number> = {}; (window as any).__prof = PROF; const mark = (k: string) => { PROF[k] = Math.round(performance.now() - T0); };
// look pass 1 (soft + warm). ?look=0 shows the old step-6 colours and light for comparison.
const LOOK = QS.get('look') !== '0';
// roof pass 2 (fitted roofs, rows, band roofs, chimneys/dormers). ?roofs=1 shows roof pass 1 for comparison.
const FIT = QS.get('roofs') !== '1';
// walls pass 1: FreeStylized wall/roof textures + procedural windows, Warsaw-style light and camera. ?walls=0 shows roof pass 2.
const WALLS = LOOK && FIT && QS.get('walls') !== '0';
// colour pass 1: richer roofs (eaves, ridges, tile rows), richer palette, less haze, more trees. ?colour=0 shows walls pass 1.
const COL = WALLS && QS.get('colour') !== '0';
type Poly = number[][]; // [exterior, ...holes], each a flat [x,z,x,z,...] ring
interface Bld { c: number; h: number; m: number; e: number; w: number; r: number; hip: number[] | null; k?: number; g?: number; rh?: number; in?: Poly[]; bd?: Poly[]; p: Poly[] }
interface Prim { t: string; p?: Poly[]; z0: number; z1?: number; x?: number; z?: number; r?: number; hr?: number; col: string; seg?: number; tx?: number; st?: number; pr?: number[][]; k?: number; rib?: number; a?: number[]; cols?: string[] }
interface Scene {
  origin: [number, number]; bounds_m: [number, number, number, number]; chunk: number;
  palette: { walls: string[]; roofs: string[]; flats: string[] };
  buildings: Bld[]; water: Poly[]; parks: Poly[]; plazas: Poly[]; roads: Record<string, Poly[]>;
  trees: number[][]; landmarks: { id: string; name: string; label: [number, number, number]; prims: Prim[]; model?: { url: string; x: number; z: number; ry: number; s: number } }[];
}

const narrow = window.innerWidth < 600;
// quality: 'high' = ambient occlusion + bloom + tilt-shift; 'low' = plain render (default on phones). Override with ?q=high|low
const HIGH = LOOK && (QS.get('q') ? QS.get('q') === 'high' : !narrow);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, narrow ? 1.5 : 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = STEP >= 2;
renderer.shadowMap.type = LOOK && !narrow ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
if (LOOK) { renderer.toneMapping = QS.get('tm') === 'agx' ? THREE.AgXToneMapping : THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = Number(QS.get('exp') || 1.0); }
document.getElementById('app')!.appendChild(renderer.domElement);

const scene = new THREE.Scene();
// warm gradient sky (screen-space background), its bottom colour is also the haze colour
const HAZE = new THREE.Color('#f1dcc4');
function skyTex(top: string, bottom: string) {
  const c = document.createElement('canvas'); c.width = 2; c.height = 256; const g = c.getContext('2d')!;
  const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, top); gr.addColorStop(0.5, '#e6b4a3'); gr.addColorStop(1, bottom);
  g.fillStyle = gr; g.fillRect(0, 0, 2, 256); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const BG = new THREE.Color('#f3ead9');
scene.background = BG.clone();
scene.fog = new THREE.Fog(BG.clone(), 11000, 28000);
const FOV = WALLS ? (narrow ? 32 : 22) : (narrow ? 50 : 35);
const FOVK = Math.tan(THREE.MathUtils.degToRad(FOV / 2)) / Math.tan(THREE.MathUtils.degToRad(17.5)); // visible width per metre of distance, vs the old 35° lens
const camera = new THREE.PerspectiveCamera(FOV, window.innerWidth / window.innerHeight, 0.45, 22000);

const controls = new MapControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.maxPolarAngle = 1.2;
controls.minDistance = 60;
controls.maxDistance = WALLS ? 22000 : 14000;
controls.screenSpacePanning = false;
controls.zoomToCursor = true;

const hemi = LOOK ? new THREE.HemisphereLight('#b0a8b8', '#7a6a5c', 0.95) : new THREE.HemisphereLight('#fff6e8', '#c9b79a', STEP >= 2 ? 1.6 : 2.4);
scene.add(hemi);
const sun = new THREE.DirectionalLight('#fff0d8', STEP >= 2 ? 2.2 : 0.9);
sun.castShadow = STEP >= 2;
sun.shadow.mapSize.set(narrow ? 1024 : 2048, narrow ? 1024 : 2048);
const SH = 650;
Object.assign(sun.shadow.camera, { left: -SH, right: SH, top: SH, bottom: -SH, near: 10, far: 6000 });
sun.shadow.bias = -0.0006;
if (LOOK && !narrow) { sun.shadow.radius = WALLS ? 4 : 2; sun.shadow.blurSamples = WALLS ? 12 : 8; }
sun.shadow.normalBias = 0.6;
scene.add(sun, sun.target);

let sunDir = new THREE.Vector3(0.5, 0.6, 0.4).normalize();
const uNight = { value: 0 }; // 0 day .. 1 night: lit windows in the facade shader
function setHour(hh: number) {
  // late October in Istanbul, simplified: sun rises ≈07:50, sets ≈18:30, noon height ≈38°
  const f = THREE.MathUtils.clamp((hh - 7.2) / 11.6, 0, 1);
  const el = THREE.MathUtils.degToRad(Math.max(2, (WALLS ? 50 : 38) * Math.sin(Math.PI * f))); // walls pass: stylised higher sun -> shorter shadows
  const az = THREE.MathUtils.degToRad(105 + 150 * f);
  sunDir = new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), -Math.cos(az) * Math.cos(el)).normalize();
  const low = 1 - Math.min(1, Math.sin(el) / Math.sin(THREE.MathUtils.degToRad(30)));
  if (LOOK) {
    // look 3 (Warsaw match): strong golden low sun, weak cool fill -> deep, grounded shadows; sky sampled from the Warsaw frames
    sun.color.set('#ffcf90').lerp(new THREE.Color('#ff9a50'), low * 0.55);
    const nightK = WALLS ? THREE.MathUtils.smoothstep(hh, 18.2, 19.6) : 0; // (night itself unchanged: day values blend back to walls-1 values)
    sun.intensity = (WALLS ? THREE.MathUtils.lerp(COL ? 5.5 : 4.7, 4.7, nightK) : 5.6) - low * 1.6;
    hemi.intensity = (WALLS ? 1.45 : 0.95) - low * 0.2;
    hemi.color.set('#b0a8b8'); hemi.groundColor.set('#7a6a5c');
    if (WALLS) { // golden hour (Pera sunset reference): warm, lifted shadows instead of dark violet ones
      hemi.color.lerp(new THREE.Color('#d0a585'), low * 0.6); hemi.groundColor.lerp(new THREE.Color('#9a7458'), low * 0.6);
      hemi.intensity = THREE.MathUtils.lerp(COL ? 1.12 : 1.45, 1.45, nightK) + low * 0.15;
    }
    // night (after ~18:30): sun fades, navy fill and haze, a random subset of windows glows warm
    const night = WALLS ? THREE.MathUtils.smoothstep(hh, 18.2, 19.6) : 0; uNight.value = night;
    HAZE.set('#ea9b7d');
    const old = scene.background;
    if (WALLS && night > 0) {
      sun.intensity *= 1 - 0.85 * night; hemi.intensity *= 1 - 0.55 * night;
      hemi.color.lerp(new THREE.Color('#34406a'), night); hemi.groundColor.lerp(new THREE.Color('#1c2236'), night);
      scene.background = skyTex(new THREE.Color('#b5b1d0').lerp(new THREE.Color('#0e1430'), night).getStyle(), new THREE.Color('#ea9b7d').lerp(new THREE.Color('#2a3358'), night).getStyle());
    } else scene.background = skyTex('#b5b1d0', '#ea9b7d');
    if (old instanceof THREE.Texture) old.dispose();
    scene.fog!.color.set('#a49ca2');
    if (WALLS) { // haze tinted toward the sky's horizon colour: golden at sunset, navy at night (hides the map edge)
      scene.fog!.color.lerp(new THREE.Color('#e0a07f'), low * 0.6).lerp(new THREE.Color('#252c48'), night);
    }
    const t = document.getElementById('hourtxt');
    if (t) t.textContent = `${String(Math.floor(hh)).padStart(2, '0')}:${String(Math.round((hh % 1) * 60)).padStart(2, '0')}`;
    return;
  }
  sun.color.set('#fff3e0').lerp(new THREE.Color('#ff9a4d'), low * 0.85);
  sun.intensity = 2.8 - low * 1.0;
  hemi.intensity = 1.15 - low * 0.35;
  hemi.color.set('#fff6e8').lerp(new THREE.Color('#ffd2a8'), low * 0.7);
  const bg = new THREE.Color('#f3ead9').lerp(new THREE.Color('#f1c9a3'), low * 0.6);
  (scene.background as THREE.Color).copy(bg); scene.fog!.color.copy(bg);
  const t = document.getElementById('hourtxt');
  if (t) t.textContent = `${String(Math.floor(hh)).padStart(2, '0')}:${String(Math.round((hh % 1) * 60)).padStart(2, '0')}`;
}
const HOUR0 = WALLS ? 14.0 : 16.25;
setHour(STEP >= 5 ? (LOOK ? HOUR0 : 15.5) : 14);

// ---------- terrain (step 7) ----------
const EXAG = 1.2; // gentle vertical exaggeration of the ground only (buildings keep their own heights)
let TER: { x0: number; z0: number; step: number; nx: number; nz: number; h: number[] } | null = null;
// wm6 terrain fit: flat pads under compact landmarks / monuments (everything that samples H() agrees: buildings, trees, roads, models)
const PADS: { x: number; z: number; r: number; b: number; h: number }[] = [];
// wm7: Topkapı stands on ONE flat platform (courts 2-4 + Harem), held by retaining walls where the hill drops (Doğancan t125u, photo from the Bosphorus).
// Platform = convex hull of the palace recipe groups babusselam..fourth_court (+6 m); height TK_HP = map metres incl. the ×1.2 ground exaggeration (yaklaşık: 75th percentile of the DEM under it)
const TK_PLAT: number[] = [467.7, 1011.1, 455.9, 1012.6, 349.7, 1092.8, 287.3, 1163.4, 273.4, 1182.5, 249.9, 1290.8, 255.3, 1300.3, 361.9, 1370.5, 392.5, 1385.8, 436.0, 1398.0, 441.8, 1394.8, 572.2, 1142.1, 585.8, 1064.4, 563.1, 1039.6, 543.3, 1027.9]; const TK_HP = 45;
const TKB = (() => { let a = 1e9, b = 1e9, c = -1e9, d = -1e9; for (let i = 0; i < TK_PLAT.length; i += 2) { a = Math.min(a, TK_PLAT[i]); c = Math.max(c, TK_PLAT[i]); b = Math.min(b, TK_PLAT[i + 1]); d = Math.max(d, TK_PLAT[i + 1]); } return [a, b, c, d]; })();
function inTK(x: number, z: number) { if (x < TKB[0] || x > TKB[2] || z < TKB[1] || z > TKB[3]) return false; const r = TK_PLAT; let c = false; for (let i = 0, j = r.length - 2; i < r.length; j = i, i += 2) if ((r[i + 1] > z) !== (r[j + 1] > z) && x < ((r[j] - r[i]) * (z - r[i + 1])) / (r[j + 1] - r[i + 1]) + r[i]) c = !c; return c; }
function dTK(x: number, z: number) { const r = TK_PLAT; let m = 1e9; for (let i = 0, j = r.length - 2; i < r.length; j = i, i += 2) { const ax = r[j], az = r[j + 1], bx = r[i] - ax, bz = r[i + 1] - az; const t = Math.max(0, Math.min(1, ((x - ax) * bx + (z - az) * bz) / (bx * bx + bz * bz))); m = Math.min(m, Math.hypot(x - ax - bx * t, z - az - bz * t)); } return m; }
// wm8: Dolmabahçe waterside platform (Selamlık + quay terrace). Flat at ~shore height (yaklaşık); short retaining wall inland where the hill rises (t127u / photo49 / sea refs). No new palace model.
const DH_PLAT: number[] = [1924.6, -1890.6, 1904.9, -1903.4, 1855.5, -1885.5, 1656.8, -1710.2, 1651.5, -1698.3, 1653.6, -1676.6, 1674.3, -1637.9, 1692.3, -1632.5, 1825.9, -1673.0, 1966.1, -1738.9, 1970.9, -1769.5]; const DH_HP = 4.0; // wm9: union Selamlık+Muayede+Harem (yaklaşık shore height) // yaklaşık: waterside terrace a little above the DEM shore (photo49 / sea refs)
const DHB = (() => { let a = 1e9, b = 1e9, c = -1e9, d = -1e9; for (let i = 0; i < DH_PLAT.length; i += 2) { a = Math.min(a, DH_PLAT[i]); c = Math.max(c, DH_PLAT[i]); b = Math.min(b, DH_PLAT[i + 1]); d = Math.max(d, DH_PLAT[i + 1]); } return [a, b, c, d]; })();
function inDH(x: number, z: number) { if (x < DHB[0] || x > DHB[2] || z < DHB[1] || z > DHB[3]) return false; const r = DH_PLAT; let c = false; for (let i = 0, j = r.length - 2; i < r.length; j = i, i += 2) if ((r[i + 1] > z) !== (r[j + 1] > z) && x < ((r[j] - r[i]) * (z - r[i + 1])) / (r[j + 1] - r[i + 1]) + r[i]) c = !c; return c; }
function dDH(x: number, z: number) { const r = DH_PLAT; let m = 1e9; for (let i = 0, j = r.length - 2; i < r.length; j = i, i += 2) { const ax = r[j], az = r[j + 1], bx = r[i] - ax, bz = r[i + 1] - az; const t = Math.max(0, Math.min(1, ((x - ax) * bx + (z - az) * bz) / (bx * bx + bz * bz))); m = Math.min(m, Math.hypot(x - ax - bx * t, z - az - bz * t)); } return m; }
function H(x: number, z: number) {
  let h0 = Hraw(x, z);
  if (TER && x > TKB[0] - 40 && x < TKB[2] + 40 && z > TKB[1] - 40 && z < TKB[3] + 40) { if (inTK(x, z)) return TK_HP; if (h0 > TK_HP) { const d = dTK(x, z); if (d < 40) { const w = 1 - d / 40, s = w * w * (3 - 2 * w); h0 += (TK_HP - h0) * s; } } }
  if (TER && x > DHB[0] - 30 && x < DHB[2] + 30 && z > DHB[1] - 30 && z < DHB[3] + 30) { if (inDH(x, z)) return DH_HP; const d = dDH(x, z);
    if (d < 25 && h0 < DH_HP) { const w = 1 - d / 25, s = w * w * (3 - 2 * w); h0 += (DH_HP - h0) * s; } // lift shore gaps to the terrace; do not carve the inland hill (retaining walls show the drop)
    else if (d < 8 && h0 > DH_HP) { const w = 1 - d / 8, s = w * w * (3 - 2 * w); h0 += (DH_HP - h0) * s * 0.35; } }
  if (!PADS.length) return h0;
  let h = h0; for (const p of PADS) { const d = Math.hypot(x - p.x, z - p.z); if (d >= p.r + p.b) continue; const w = d <= p.r ? 1 : 1 - (d - p.r) / p.b; const s = w * w * (3 - 2 * w); h = h + (p.h - h) * s; }
  return h;
}
function addPad(x: number, z: number, r: number, b = 25) { if (!TER) return; let s = 0, n = 0; for (let a = 0; a < 16; a++) for (const f of [0, 0.5, 1]) { s += Hraw(x + Math.cos(a * 0.3927) * r * f, z + Math.sin(a * 0.3927) * r * f); n++; } PADS.push({ x, z, r, b, h: s / n }); }
function Hraw(x: number, z: number) {
  if (!TER) return 0;
  const fx = THREE.MathUtils.clamp((x - TER.x0) / TER.step, 0, TER.nx - 1.001), fz = THREE.MathUtils.clamp((z - TER.z0) / TER.step, 0, TER.nz - 1.001);
  const i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j, n = TER.nx, h = TER.h;
  return EXAG * ((h[j * n + i] * (1 - u) + h[j * n + i + 1] * u) * (1 - v) + (h[(j + 1) * n + i] * (1 - u) + h[(j + 1) * n + i + 1] * u) * v);
}

// ---------- geometry helpers ----------
const tmpC = new THREE.Color();
class Builder {
  pos: number[] = []; col: number[] = [];
  // walls pass: per-vertex facade data. wa = (u, v, texture layer, building seed), wb = (wall height, edge length, kind, 0)
  // kind 0 = roof / flat (u,v = metres on the surface), 1 = wall with windows (u along the edge, v above the base), 2 = plain wall
  tex = false; wa: number[] = []; wb: number[] = [];
  wl = 0; rl = 6; seed = 0; base = 0; wh = 0; st = 0; ridge = 0; // st: facade style bits (1 balconies, 2 bay window, 4 shopfront, 8 residential grid)
  tri(a: number[], b: number[], c: number[], color: THREE.Color, up = false, uv?: number[][], kind = 0, elen = 0) {
    if (up) { // make sure horizontal/roof faces point up
      const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
      const ny = uz * vx - ux * vz;
      if (ny < 0) { const t = b; b = c; c = t; if (uv) uv = [uv[0], uv[2], uv[1]]; }
      void uy; void vy;
    }
    this.pos.push(...a, ...b, ...c);
    for (let i = 0; i < 3; i++) this.col.push(color.r, color.g, color.b);
    if (this.tex) {
      const P = [a, b, c], L = kind === 0 ? this.rl : this.wl;
      for (let i = 0; i < 3; i++) {
        const t = uv ? uv[i] : [P[i][0], P[i][2]];
        this.wa.push(t[0], t[1], L, this.seed);
        // roofs: wb.y = height above the eave (-1 = unknown), wb.w = ridge height; walls: edge length and facade style
        if (kind === 0) this.wb.push(this.wh, uv && uv[i].length > 2 ? uv[i][2] : -1, 0, this.ridge); else this.wb.push(this.wh, elen, kind, this.st);
      }
    }
  }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    if (this.tex) { g.setAttribute('wa', new THREE.Float32BufferAttribute(this.wa, 4)); g.setAttribute('wb', new THREE.Float32BufferAttribute(this.wb, 4)); }
    g.computeVertexNormals();
    return g;
  }
}
function ringArea(r: number[]) { let s = 0; for (let i = 0; i < r.length; i += 2) { const j = (i + 2) % r.length; s += r[i] * r[j + 1] - r[j] * r[i + 1]; } return s / 2; }
function walls(B: Builder, ring: number[], z0: number, z1: number, color: THREE.Color, hole: boolean) {
  let r = ring;
  const a = ringArea(r);
  if ((!hole && a > 0) || (hole && a < 0)) { const rr: number[] = []; for (let i = r.length - 2; i >= 0; i -= 2) rr.push(r[i], r[i + 1]); r = rr; }
  const st0 = B.st; if (hole && st0 >= 16 && st0 < 128) B.st = 32; // landmarks: courtyard faces are arcades
  for (let i = 0; i < r.length; i += 2) {
    const j = (i + 2) % r.length;
    const p0 = [r[i], z0, r[i + 1]], p1 = [r[j], z0, r[j + 1]], p2 = [r[j], z1, r[j + 1]], p3 = [r[i], z1, r[i + 1]];
    if (B.tex) {
      const len = Math.hypot(r[j] - r[i], r[j + 1] - r[i + 1]), v0 = z0 - B.base, v1 = z1 - B.base;
      const kind = len >= 2.4 && B.wh >= 4 ? 1 : 2; // very small walls get no windows
      B.tri(p0, p1, p2, color, false, [[0, v0], [len, v0], [len, v1]], kind, len); B.tri(p0, p2, p3, color, false, [[0, v0], [len, v1], [0, v1]], kind, len);
    } else { B.tri(p0, p1, p2, color); B.tri(p0, p2, p3, color); }
  }
  B.st = st0;
}
function cap(B: Builder, poly: Poly, y: number, color: THREE.Color, drape = false) {
  const toV = (r: number[]) => { const v: THREE.Vector2[] = []; for (let i = 0; i < r.length; i += 2) v.push(new THREE.Vector2(r[i], r[i + 1])); return v; };
  const contour = toV(poly[0]); const holes = poly.slice(1).map(toV);
  let tris: number[][];
  try { tris = THREE.ShapeUtils.triangulateShape(contour, holes); } catch { return; }
  const all = contour.concat(...holes);
  const Y = (q: THREE.Vector2) => (drape ? H(q.x, q.y) + y : y);
  // wm5: on terrain, long triangles are split until they follow the slope (adaptive: only where the mid-edge height misses by > 1.2 m)
  const sub = (a: THREE.Vector2, b: THREE.Vector2, c: THREE.Vector2, d: number): void => {
    if (drape && d < 8) { const ab = a.clone().add(b).multiplyScalar(0.5), bc = b.clone().add(c).multiplyScalar(0.5), ca = c.clone().add(a).multiplyScalar(0.5);
      const err = Math.max(Math.abs(H(ab.x, ab.y) - (H(a.x, a.y) + H(b.x, b.y)) / 2), Math.abs(H(bc.x, bc.y) - (H(b.x, b.y) + H(c.x, c.y)) / 2), Math.abs(H(ca.x, ca.y) - (H(c.x, c.y) + H(a.x, a.y)) / 2));
      if (err > 1.2 && Math.max(a.distanceTo(b), b.distanceTo(c), c.distanceTo(a)) > (err > 5 ? 6 : 35)) { sub(a, ab, ca, d + 1); sub(ab, b, bc, d + 1); sub(ca, bc, c, d + 1); sub(ab, bc, ca, d + 1); return; } }
    B.tri([a.x, Y(a), a.y], [b.x, Y(b), b.y], [c.x, Y(c), c.y], color, true);
  };
  for (const t of tris) sub(all[t[0]], all[t[1]], all[t[2]], 0);
}
function prism(B: Builder, polys: Poly[], z0: number, z1: number, wall: THREE.Color, top: THREE.Color | null) {
  for (const p of polys) {
    p.forEach((ring, k) => walls(B, ring, z0, z1, wall, k > 0));
    if (top) cap(B, p, z1, top);
  }
}
// round landmark shapes: a profile [[r, y], ...] turned around (x, z); optional angle range for half-domes, alternate-segment shading for ribs
function lathe(B: Builder, p: Prim) {
  const pr = p.pr!, seg = p.seg || 16, a0 = p.a ? p.a[0] : 0, a1 = p.a ? p.a[1] : Math.PI * 2, kind = p.k ?? 2;
  const base = pr[0][1], r0 = Math.max(pr[0][0], 0.3);
  const cols = (p.cols || []).map((c) => new THREE.Color(c)), col = new THREE.Color(p.col);
  if (kind === 0) B.rl = p.tx ?? 9; else B.wl = p.tx ?? 8;
  B.base = base; B.wh = pr[pr.length - 1][1] - base; B.st = p.st || 128; B.ridge = 0;
  const kk = kind === 2 && p.st ? 1 : kind, el = (a1 - a0) * r0;
  const s: number[] = [0]; for (let k = 1; k < pr.length; k++) s.push(s[k - 1] + Math.hypot(pr[k][0] - pr[k - 1][0], pr[k][1] - pr[k - 1][1]));
  for (let i = 0; i < seg; i++) {
    const t0 = a0 + (a1 - a0) * i / seg, t1 = a0 + (a1 - a0) * (i + 1) / seg;
    for (let k = 0; k < pr.length - 1; k++) {
      const [ra, ya] = pr[k], [rb, yb] = pr[k + 1];
      const c = (cols[k] || col).clone(); if (p.rib && i % 2) c.multiplyScalar(p.rib);
      const Q = (r: number, y: number, t: number) => [p.x! + Math.cos(t) * r, y, p.z! + Math.sin(t) * r];
      const U = (r: number, t: number, sk: number, y: number) => kind === 0 ? [t * Math.max(r, ra, 0.5), sk] : [t * r0, y - base];
      const A = Q(ra, ya, t0), Bq = Q(ra, ya, t1), Cq = Q(rb, yb, t1), D = Q(rb, yb, t0);
      const ua = U(ra, t0, s[k], ya), ub = U(ra, t1, s[k], ya), uc = U(rb, t1, s[k + 1], yb), ud = U(rb, t0, s[k + 1], yb);
      if (ra > 1e-3) B.tri(A, Bq, Cq, c, false, [ua, ub, uc], kk, el);
      if (rb > 1e-3) B.tri(A, Cq, D, c, false, [ua, uc, ud], kk, el);
    }
  }
}
function hipRoof(B: Builder, hp: number[], y: number, color: THREE.Color) {
  const [cx, cz, ang, L, W, rh] = hp;
  const ux = Math.cos(ang), uz = Math.sin(ang), vx = -uz, vz = ux;
  const c = (su: number, sv: number) => [cx + ux * su * L / 2 + vx * sv * W / 2, y, cz + uz * su * L / 2 + vz * sv * W / 2];
  const r = (su: number) => [cx + ux * su * (L - W) / 2, y + rh, cz + uz * su * (L - W) / 2];
  const A = c(-1, -1), Bc = c(1, -1), C = c(1, 1), D = c(-1, 1), R1 = r(-1), R2 = r(1);
  const side = color.clone().multiplyScalar(0.92);
  B.tri(A, Bc, R2, color, true); B.tri(A, R2, R1, color, true);
  B.tri(C, D, R1, color, true); B.tri(C, R1, R2, color, true);
  B.tri(Bc, C, R2, side, true); B.tri(D, A, R1, side, true);
}
// roof pass 1: gable (ridge on the long axis, gable ends in wall colour) and mansard (steep lower slopes, low hip on top)
function gableRoof(B: Builder, hp: number[], y: number, color: THREE.Color, wall: THREE.Color) {
  const [cx, cz, ang, L, W, rh] = hp;
  const ux = Math.cos(ang), uz = Math.sin(ang), vx = -uz, vz = ux;
  const c = (su: number, sv: number, dy = 0) => [cx + ux * su * L / 2 + vx * sv * W / 2, y + dy, cz + uz * su * L / 2 + vz * sv * W / 2];
  const A = c(-1, -1), Bc = c(1, -1), C = c(1, 1), D = c(-1, 1), R1 = c(-1, 0, rh), R2 = c(1, 0, rh);
  B.tri(A, Bc, R2, color, true); B.tri(A, R2, R1, color, true);
  B.tri(C, D, R1, color, true); B.tri(C, R1, R2, color, true);
  B.tri(D, A, R1, wall); B.tri(Bc, C, R2, wall); // gable ends
}
function mansardRoof(B: Builder, hp: number[], y: number, color: THREE.Color, upper: THREE.Color) {
  const [cx, cz, ang, L, W, rh] = hp;
  const ux = Math.cos(ang), uz = Math.sin(ang), vx = -uz, vz = ux;
  const ins = Math.min(0.17 * W, 2.2), mh = Math.min(0.75 * rh + 1.4, 3.6);
  const c = (su: number, sv: number, d: number, dy: number) => [cx + ux * su * (L / 2 - d) + vx * sv * (W / 2 - d), y + dy, cz + uz * su * (L / 2 - d) + vz * sv * (W / 2 - d)];
  const lo = [c(-1, -1, 0, 0), c(1, -1, 0, 0), c(1, 1, 0, 0), c(-1, 1, 0, 0)], hi = [c(-1, -1, ins, mh), c(1, -1, ins, mh), c(1, 1, ins, mh), c(-1, 1, ins, mh)];
  for (let i = 0; i < 4; i++) { const j = (i + 1) % 4; B.tri(lo[i], lo[j], hi[j], color, true); B.tri(lo[i], hi[j], hi[i], color, true); }
  hipRoof(B, [cx, cz, ang, L - 2 * ins, W - 2 * ins, Math.max(0.6, 0.12 * W)], y + mh, upper);
}
// ---------- roof pass 2: roofs fitted to the real footprint ----------
// A hip / gable / mansard roof over the building's (or row's) rectangle is the lower envelope of a few planes,
// h(s,t) = min_i (a_i s + b_i t + c_i) in the rectangle's local frame. We clip the footprint to each plane's region
// (convex half-plane clips), so the roof never overhangs, and raise the walls to meet the roof where the outline is inset.
type Plane = [number, number, number];
function roofPlanes(kind: number, L: number, W: number, rh: number): Plane[] {
  const k = rh / (W / 2), hl = L / 2, hw = W / 2;
  if (kind === 2) return [[0, k, k * hw], [0, -k, k * hw]];
  if (kind === 1) return [[0, k, k * hw], [0, -k, k * hw], [k, 0, k * hl], [-k, 0, k * hl]];
  const ins = Math.min(0.17 * W, 2.2), mh = Math.min(0.75 * rh + 1.4, 3.6), ks = mh / ins, k2 = Math.max(0.6, 0.12 * W) / (hw - ins);
  const P: Plane[] = [];
  for (const [a, b, d] of [[0, 1, hw], [0, -1, hw], [1, 0, hl], [-1, 0, hl]] as [number, number, number][]) {
    P.push([a * ks, b * ks, d * ks]); P.push([a * k2, b * k2, mh + (d - ins) * k2]);
  }
  return P;
}
const pv = (P: Plane, s: number, t: number) => P[0] * s + P[1] * t + P[2];
function clipHalf(r: number[][], f: (q: number[]) => number) { // keep f <= 0 (Sutherland-Hodgman, one line)
  const out: number[][] = [];
  for (let i = 0; i < r.length; i++) {
    const a = r[i], b = r[(i + 1) % r.length], fa = f(a), fb = f(b);
    if (fa <= 0) out.push(a);
    if ((fa < 0 && fb > 0) || (fa > 0 && fb < 0)) { const u = fa / (fa - fb); out.push([a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u]); }
  }
  return out;
}
const ringArea2 = (r: number[][]) => { let a = 0; for (let i = 0; i < r.length; i++) { const p = r[i], q = r[(i + 1) % r.length]; a += p[0] * q[1] - q[0] * p[1]; } return a / 2; };
function fittedRoof(B: Builder, polys: Poly[], hp: number[], kind: number, top: number, color: THREE.Color, upper: THREE.Color, wall: THREE.Color, lowL = -1) {
  const [cx, cz, ang, L, W, rh] = hp, ux = Math.cos(ang), uz = Math.sin(ang), vx = -uz, vz = ux;
  const P = roofPlanes(kind, L, W, rh);
  { let m = 1e9; for (const q of P) m = Math.min(m, pv(q, 0, 0)); B.ridge = Math.max(0, m); }
  const toL = (x: number, z: number) => [(x - cx) * ux + (z - cz) * uz, (x - cx) * vx + (z - cz) * vz];
  const toW = (s: number, t: number, y: number) => [cx + ux * s + vx * t, y, cz + uz * s + vz * t];
  const hAt = (s: number, t: number) => { let m = 1e9; for (const q of P) m = Math.min(m, pv(q, s, t)); return Math.max(0, m); };
  for (const poly of polys) {
    const rings = poly.map((r) => { const o: number[][] = []; for (let i = 0; i < r.length; i += 2) o.push(toL(r[i], r[i + 1])); return o; });
    // roof faces
    P.forEach((Pi, i) => {
      const fcol = kind === 3 && i % 2 === 1 ? upper : color;
      const rl0 = B.rl; if (lowL >= 0 && kind === 3 && i % 2 === 0) B.rl = lowL;
      // texture coordinates: rows of tiles run along the eave, v runs up the slope (true length)
      const gl = Math.hypot(Pi[0], Pi[1]), d0 = gl > 1e-6 ? Pi[0] / gl : 0, d1 = gl > 1e-6 ? Pi[1] / gl : 1, sec = Math.sqrt(1 + gl * gl);
      const ruv = (q: THREE.Vector2) => [-q.x * d1 + q.y * d0, (q.x * d0 + q.y * d1) * sec, Math.max(0, pv(Pi, q.x, q.y))];
      const cl = rings.map((r) => { let o = r; P.forEach((Pj, j) => { if (j !== i && o.length) o = clipHalf(o, (q) => pv(Pi, q[0], q[1]) - pv(Pj, q[0], q[1]) - 1e-6); }); return o; });
      if (cl[0].length < 3 || Math.abs(ringArea2(cl[0])) < 0.05) return;
      const contour = cl[0].map((q) => new THREE.Vector2(q[0], q[1]));
      const holes = cl.slice(1).filter((h) => h.length >= 3 && Math.abs(ringArea2(h)) > 0.05).map((h) => h.map((q) => new THREE.Vector2(q[0], q[1])));
      let tris: number[][]; try { tris = THREE.ShapeUtils.triangulateShape(contour, holes); } catch { return; }
      const all = contour.concat(...holes);
      for (const t of tris) { const a = all[t[0]], b = all[t[1]], c = all[t[2]]; B.tri(toW(a.x, a.y, top + Math.max(0, pv(Pi, a.x, a.y))), toW(b.x, b.y, top + Math.max(0, pv(Pi, b.x, b.y))), toW(c.x, c.y, top + Math.max(0, pv(Pi, c.x, c.y))), fcol, true, B.tex ? [ruv(a), ruv(b), ruv(c)] : undefined); }
      B.rl = rl0;
    });
    // walls up to the roof where the outline sits inside the rectangle (gable ends, L-notches, courtyards)
    for (const r of rings) for (let e = 0; e < r.length; e++) {
      const a = r[e], b = r[(e + 1) % r.length];
      const ts = [0, 1];
      for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) {
        const fa = pv(P[i], a[0], a[1]) - pv(P[j], a[0], a[1]), fb = pv(P[i], b[0], b[1]) - pv(P[j], b[0], b[1]);
        if (fa * fb < 0) ts.push(fa / (fa - fb));
      }
      ts.sort((x, y) => x - y);
      const pt = (u: number) => [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u];
      let prev = ts[0], hp0 = hAt(a[0], a[1]);
      for (let q = 1; q < ts.length; q++) {
        const u = ts[q]; if (u - prev < 1e-4 && q < ts.length - 1) continue;
        const p0 = pt(prev), p1 = pt(u), h1 = hAt(p1[0], p1[1]);
        if (Math.max(hp0, h1) > 0.35) { // skip slivers: tiny gaps under the eaves are not visible
          const A = toW(p0[0], p0[1], top), Bq = toW(p1[0], p1[1], top), Cq = toW(p1[0], p1[1], top + h1), Dq = toW(p0[0], p0[1], top + hp0);
          if (B.tex) { // gable-end triangles and notch walls: textured, no windows
            const el = Math.hypot(b[0] - a[0], b[1] - a[1]), ua = prev * el, ub = u * el, vt = top - B.base;
            if (h1 > 0.02) B.tri(A, Bq, Cq, wall, false, [[ua, vt], [ub, vt], [ub, vt + h1]], 2, el);
            if (hp0 > 0.02) B.tri(A, Cq, Dq, wall, false, [[ua, vt], [ub, vt + h1], [ua, vt + hp0]], 2, el);
          } else { if (h1 > 0.02) B.tri(A, Bq, Cq, wall); if (hp0 > 0.02) B.tri(A, Cq, Dq, wall); }
        }
        prev = u; hp0 = h1;
      }
    }
  }
  return hAt;
}
// band roof for L-shaped / courtyard / irregular blocks: slopes up from the outline to an inset ring, flat on top
function bandRoof(B: Builder, band: Poly[], inset: Poly[], top: number, rh: number, color: THREE.Color, flat: THREE.Color) {
  const onIn = new Set<string>(); const key = (x: number, z: number) => `${Math.round(x * 10)},${Math.round(z * 10)}`;
  for (const p of inset) for (const r of p) for (let i = 0; i < r.length; i += 2) onIn.add(key(r[i], r[i + 1]));
  for (const p of band) {
    const toV = (r: number[]) => { const v: THREE.Vector2[] = []; for (let i = 0; i < r.length; i += 2) v.push(new THREE.Vector2(r[i], r[i + 1])); return v; };
    const contour = toV(p[0]), holes = p.slice(1).map(toV);
    let tris: number[][]; try { tris = THREE.ShapeUtils.triangulateShape(contour, holes); } catch { continue; }
    const all = contour.concat(...holes); const Y = (q: THREE.Vector2) => top + (onIn.has(key(q.x, q.y)) ? rh : 0);
    B.ridge = rh;
    for (const t of tris) {
      const a = all[t[0]], b = all[t[1]], c = all[t[2]], A = [a.x, Y(a), a.y], Bv = [b.x, Y(b), b.y], Cv = [c.x, Y(c), c.y];
      let uvs: number[][] | undefined;
      if (B.tex) { // tile rows along the eave, v up the slope (true length)
        const ux = Bv[0] - A[0], uy = Bv[1] - A[1], uz = Bv[2] - A[2], vx = Cv[0] - A[0], vy = Cv[1] - A[1], vz = Cv[2] - A[2];
        let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; if (ny < 0) { nx = -nx; ny = -ny; nz = -nz; }
        const nl = Math.hypot(nx, ny, nz) || 1, hx = -nx, hz = -nz, hl = Math.hypot(hx, hz);
        const d0 = hl > 1e-6 ? hx / hl : 0, d1 = hl > 1e-6 ? hz / hl : 1, sec = nl / Math.max(ny, 1e-3);
        uvs = [A, Bv, Cv].map((q) => [-q[0] * d1 + q[2] * d0, (q[0] * d0 + q[2] * d1) * sec, q[1] - top]);
      }
      B.tri(A, Bv, Cv, color, true, uvs);
    }
  }
  const rl0 = B.rl; B.rl = 2; // flat top: concrete
  for (const p of inset) cap(B, p, top + rh, flat);
  B.rl = rl0;
}
let flatOrder = -100;
function flatLayer(polys: Poly[], y: number, color: string) {
  const B = new Builder(); const c = new THREE.Color(color);
  for (const p of polys) cap(B, p, y, c, !!TER);
  const m = new THREE.Mesh(B.geometry(), new THREE.MeshLambertMaterial({ vertexColors: true, depthWrite: false }));
  m.renderOrder = flatOrder++; m.receiveShadow = STEP >= 2; m.name = 'flat'; scene.add(m); return m;
}

// wm4: Theodosian-style brick bands (a few courses of red brick every ~3.3 m of limestone) drawn in the shader: no extra triangles
function brickBands(m: THREE.MeshLambertMaterial) {
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying float vBY;').replace('#include <project_vertex>', '#include <project_vertex>\n  \n#ifdef USE_INSTANCING\n  vBY = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).y;\n#else\n  vBY = (modelMatrix * vec4(transformed, 1.0)).y;\n#endif');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vBY;').replace('#include <color_fragment>', '#include <color_fragment>\n  { float k = mod(vBY + 1.2, 3.0); if (k < 0.75) diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.36, 0.28), 0.75); }');
  };
  return m;
}
// wm4: Douglas-Peucker for closed rings (far LOD footprints)
function dpRing(r: number[], tol: number): number[] {
  const n = r.length / 2; if (n < 6) return r;
  const keep = new Uint8Array(n); keep[0] = 1; let far = 0, fd = -1;
  for (let i = 1; i < n; i++) { const d = Math.hypot(r[2 * i] - r[0], r[2 * i + 1] - r[1]); if (d > fd) { fd = d; far = i; } } keep[far] = 1;
  const rec = (a: number, b: number) => { // a<b indices, segment a->b (b may be n meaning 0)
    const ax = r[2 * a], az = r[2 * a + 1], bx = r[2 * (b % n)], bz = r[2 * (b % n) + 1], L = Math.hypot(bx - ax, bz - az) || 1e-6;
    let m = -1, md = tol; for (let i = a + 1; i < b; i++) { const d = Math.abs((bx - ax) * (az - r[2 * i + 1]) - (ax - r[2 * i]) * (bz - az)) / L; if (d > md) { md = d; m = i; } }
    if (m >= 0) { keep[m] = 1; rec(a, m); rec(m, b); }
  };
  rec(0, far); rec(far, n);
  const out: number[] = []; for (let i = 0; i < n; i++) if (keep[i]) out.push(r[2 * i], r[2 * i + 1]);
  return out.length >= 6 ? out : r;
}
// ---------- labels ----------
const labels: { el: HTMLDivElement; p: THREE.Vector3 }[] = [];
function addLabel(text: string, x: number, y: number, z: number, cls = '') {
  const el = document.createElement('div'); el.className = 'lbl ' + cls; el.textContent = text;
  document.getElementById('labels')!.appendChild(el); labels.push({ el, p: new THREE.Vector3(x, y, z) });
}
const proj = new THREE.Vector3();
function updateLabels() {
  for (const l of labels) {
    proj.copy(l.p).project(camera);
    const vis = proj.z < 1 && Math.abs(proj.x) < 1.1 && Math.abs(proj.y) < 1.1;
    l.el.style.display = vis ? 'block' : 'none';
    if (vis) l.el.style.left = `${(proj.x + 1) / 2 * window.innerWidth}px`, l.el.style.top = `${(1 - proj.y) / 2 * window.innerHeight}px`;
  }
}
const lonlatToXZ = (S: Scene, lon: number, lat: number) => {
  const [lon0, lat0] = S.origin; const kx = Math.cos(lat0 * Math.PI / 180) * 111320;
  return [(lon - lon0) * kx, -(lat - lat0) * 110574];
};

// ---------- camera presets ----------
const VIEWS: Record<string, { t: [number, number]; d: number; pol: number; az: number; y?: number }> = {};
function setView(name: string) {
  const v = VIEWS[name]; if (!v) return;
  controls.maxPolarAngle = Math.max(1.2, v.pol); // low presets (gk_ground) may go below the normal orbit limit; others reset it
  const tgt = new THREE.Vector3(v.t[0], H(v.t[0], v.t[1]) + (v.y || 0), v.t[1]);
  const off = new THREE.Vector3(Math.sin(v.az) * Math.sin(v.pol), Math.cos(v.pol), Math.cos(v.az) * Math.sin(v.pol)).multiplyScalar(v.d);
  controls.target.copy(tgt); camera.position.copy(tgt).add(off); controls.update();
}

// look-pass colours (old step-6 colours kept for ?look=0)
const C = LOOK ? {
  // albedos tuned so the lit result lands on the colours sampled from the Warsaw frames (ist3d_research/warsaw_palette.png)
  ground: '#8e8b92', pilot: '#908c93', water: '#6fa4b2', parks: '#8aa63e', plazas: '#9c9cac',
  path: '#a5a2aa', service: '#9d9aa2', minor: '#aaa7ae', major: '#77747c', rail: '#5a5052', tram: '#8c2f2c',
  walls: ['#f2e3b8', '#e8d394', '#efe6cf', '#d9c7a0', '#e3d6bf', '#ecc9a6', '#d8d0bf', '#f0dcae'],
  roofs: ['#e0963e', '#e8b44c', '#c87a48', '#a8603e', '#d98a3a', '#9a5a40', '#e6a446', '#80808c'],
  flats: ['#c4beb8', '#b4b0b0', '#ccc4ba', '#aca8aa'],
  trees: ['#e6b235', '#e08a26', '#c95a24', '#e8c33f', '#7fa03c', '#557a30', '#3f6a2c'],
} : null;
if (C && COL) Object.assign(C, {
  // colour pass 1: darker, warmer ground and streets so buildings pop; richer pastels and deep terracotta roofs (Warsaw frames)
  ground: '#7f746e', pilot: '#81766f', plazas: '#958a80', path: '#9b8f85', service: '#8f847c', minor: '#978c84', major: '#665e5c', parks: '#86a63a',
  walls: ['#f0d9a0', '#e6bf74', '#f2e4c4', '#dcbc8a', '#ebc4a8', '#e8b48e', '#efd690', '#f3dcb4', '#e2c7a6', '#e9a98c'],
  // Karaköy-from-Galata photo: orange-red, faded salmon and darker brick, not all-red
  roofs: ['#b85a3c', '#a94a34', '#c8683e', '#9a4a36', '#c47458', '#cf8a6c', '#b9705a', '#8e4c3a', '#80808c'],
  flats: ['#e4e0d8', '#d2cfca', '#d8ccb6', '#c8c3ba'],
  trees: ['#f0b52a', '#e8891f', '#d4581f', '#b8321e', '#efc93a', '#8aa83a', '#5b8a32', '#d97a26', '#c9a227'],
});
// small stable per-building colour variation
function jitter(c: THREE.Color, k: number, amt = 1) {
  const r1 = Math.sin(k * 12.9898) * 43758.5453, r2 = Math.sin(k * 78.233) * 12345.6789, r3 = Math.sin(k * 3.7) * 9876.54;
  const f = (r: number) => (r - Math.floor(r)) * 2 - 1;
  return c.clone().offsetHSL(f(r1) * 0.012 * amt, f(r2) * 0.06 * amt, f(r3) * 0.035 * amt);
}

// ---------- walls pass 1: facade material ----------
// FreeStylized colour maps (custom CC0) packed into one KTX2 texture array: 512 px layers on phones, 1K on desktop.
// The texture gives surface detail; the per-building vertex colour (tint) keeps the look-3 palette. Windows are drawn procedurally.
const FACADE_GLSL = `
float h1(float n){ return fract(sin(n) * 43758.5453); }
float lumi(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float boxm(float x, float a, float b, float e){ return smoothstep(a - e, a + e, x) - smoothstep(b - e, b + e, x); }
vec3 gEmis = vec3(0.0);
// landmarks (style >= 16): dark arched openings. 16 mosque windows, 32 courtyard arcade, 48 tower arches, 64 small scattered windows, 128 none
vec3 archWin(vec3 col, float u, float v, float wh, float el, float st, float seed){
  if (st >= 128.0 || el < 2.8) return col;
  float px = max(length(vec2(dFdx(u), dFdy(u))), length(vec2(dFdx(v), dFdy(v))));
  bool arc = st >= 32.0 && st < 48.0, tow = st >= 48.0 && st < 64.0, sct = st >= 64.0;
  float bw0 = arc ? 5.2 : tow ? 3.45 : sct ? 4.2 : 5.2;
  float nb = max(1.0, floor(el / bw0 + 0.3)), bw = el / nb;
  float bi = floor(u / bw), x = (fract(u / bw) - 0.5) * bw;
  float hw = arc ? bw * 0.36 : tow ? bw * 0.27 : sct ? 0.42 : 0.7;
  float top = arc ? min(4.8, wh - 1.0) : tow ? min(4.2, wh - 1.0) : sct ? 1.5 : 2.9;
  float rowh = sct ? 5.2 : 6.2;
  float vv = v - (arc ? 0.0 : tow ? 0.9 : 2.2), ri = 0.0, yy = vv;
  if (!(arc || tow)) { ri = floor(vv / rowh); yy = vv - ri * rowh; }
  bool ok = vv >= 0.0 && (arc || tow || (vv - yy + top < wh - 1.2));
  if (sct) ok = ok && h1(bi * 13.1 + ri * 7.7 + seed) < 0.24 && v > 3.0;
  float d = 1e3;
  if (ok) { float ys = top - hw; d = yy < ys ? max(abs(x) - hw, -yy) : length(vec2(x, yy - ys)) - hw; }
  float m = 1.0 - smoothstep(-px * 0.75, px * 0.75, d);
  float fr = (1.0 - smoothstep(0.0, 0.18 + px, d)) - m;
  vec3 c = mix(col, col * 1.1, fr * 0.6);
  c = mix(c, arc ? col * 0.3 : vec3(0.05, 0.055, 0.07), m);
  float frac = arc ? 0.5 : tow ? 0.35 : sct ? 0.02 : 0.08;
  return mix(c, col * (1.0 - 0.7 * frac), smoothstep(0.5, 1.4, px));
}
vec3 facade(vec3 tint){
  float L = floor(vWa.z + 0.5); int li = int(L);
  float kind = floor(vWb.z + 0.5);
  float sc = li >= 8 ? (li == 9 ? 6.0 : 4.5) : kind < 0.5 ? (li >= 6 ? (uCol > 0.5 ? 3.6 : 3.0) : 4.0) : 3.6;               // metres per texture repeat
  vec3 tx = texture(tArr, vec3(vWa.xy / sc, L)).rgb;
  vec3 m = uMean[li]; float ml = max(lumi(m), 1e-3);
  vec3 col = mix(tint * mix(1.0, lumi(tx) / ml, 0.7), tx * (lumi(tint) / ml), uHue[li]);
  if (kind < 0.5 && li >= 6 && li <= 7 && uCol > 0.5) {                           // colour pass: richer tile roofs
    float pr = length(fwidth(vWa.xy));
    col = mix(tint * max(0.0, mix(1.0, lumi(tx) / ml, 1.3)), tx * (lumi(tint) / ml), uHue[li] * 0.6);
    float rows = fract(vWa.y / 0.36);                                  // tile rows still read when the texture blurs
    col *= 1.0 - 0.22 * smoothstep(0.72, 0.98, rows) * (1.0 - smoothstep(0.06, 0.25, pr));
    float e = vWb.y, rh = vWb.w;
    if (e >= 0.0) {
      col *= mix(0.5, 1.0, smoothstep(0.0, 0.3 + pr, e));              // dark eave / overhang line
      if (rh > 0.6) col = mix(col, col * 0.62, smoothstep(rh - 0.32 - pr, rh - 0.12, e)); // ridge cap
    }
  }
  if (kind < 0.5 || kind > 1.5) return col;
  // ---- procedural windows: floors of ~3.2 m, bays of ~3 m, centred on each wall edge ----
  float seed = vWa.w, u = vWa.x, v = vWa.y, wh = vWb.x, el = vWb.y, st = vWb.w;
  if (st >= 16.0) return archWin(col, u, v, wh, el, st, seed);
  bool bal = mod(st, 2.0) >= 1.0, bay = mod(floor(st / 2.0), 2.0) >= 1.0, shop = mod(floor(st / 4.0), 2.0) >= 1.0, res = st >= 8.0;
  float fh = 3.2 * (0.95 + 0.1 * h1(seed * 17.0));
  float bw0 = (res ? 2.8 : 3.0) * (0.9 + 0.2 * h1(seed * 29.0));
  float nb = max(1.0, floor(el / bw0 + 0.3)), bw = el / nb;
  float px = max(length(vec2(dFdx(u), dFdy(u))), length(vec2(dFdx(v), dFdy(v)))); // metres per pixel
  float ex = px / bw * 0.75, ey = px / fh * 0.75;
  float f = floor(v / fh), fy = fract(v / fh), bx = fract(u / bw), bi = floor(u / bw);
  float ww = res ? (h1(seed * 43.0) < 0.4 ? 0.58 + 0.08 * h1(seed * 41.0) : 0.40 + 0.06 * h1(seed * 41.0)) : 0.36 + 0.16 * h1(seed * 41.0);
  float wy0 = 0.26, wy1 = res ? 0.86 : 0.74 + 0.1 * h1(seed * 53.0);
  float wfrac = ww * (wy1 - wy0);
  vec3 avg = col * (1.0 - 0.55 * wfrac - (bal ? 0.12 : 0.0));
  float fade = smoothstep(0.38, 1.1, px);
  if (wh < 4.0 || bw < 1.6) return col;
  vec3 c = col;
  bool under = (f + 1.0) * fh < wh - 0.35;                             // the whole floor fits under the cornice
  if (f >= 1.0 && under) {
    if (bay && mod(bi, 3.0) == 1.0) {                                  // bay window: a lighter bulging column with shaded sides
      c *= 1.06; c *= 1.0 - 0.35 * (boxm(bx, -0.02, 0.06, ex) + boxm(bx, 0.94, 1.02, ex));
    }
    if (fy < 0.05) c *= 0.80;                                          // floor ledge line
    else if (fy < 0.09) c = mix(c, vec3(0.80, 0.78, 0.74), 0.35);
    float fw = res ? 0.07 : 0.05;
    float frame = boxm(bx, 0.5 - ww / 2.0 - fw, 0.5 + ww / 2.0 + fw, ex) * boxm(fy, wy0 - fw, wy1 + fw * 0.7, ey);
    float glass = boxm(bx, 0.5 - ww / 2.0, 0.5 + ww / 2.0, ex) * boxm(fy, wy0, wy1, ey);
    float sill = boxm(bx, 0.5 - ww / 2.0 - 0.09, 0.5 + ww / 2.0 + 0.09, ex) * boxm(fy, wy0 - 0.075, wy0 - 0.03, ey);
    float k = h1(bi * 7.1 + f * 3.7 + seed);
    vec3 gl = mix(vec3(0.045, 0.055, 0.07), vec3(0.16, 0.18, 0.22), smoothstep(wy0, wy1, fy) * 0.7) * (0.75 + 0.5 * k);
    c = mix(c, res ? vec3(0.86, 0.86, 0.84) : vec3(0.78, 0.76, 0.72), max(frame - glass, sill) * 0.85);
    c = mix(c, gl, glass);
    if (uNight > 0.01 && k < 0.3) gEmis += vec3(1.0, 0.55, 0.22) * 0.9 * glass * uNight * (1.0 - fade * 0.6);
    if (res && h1(bi * 5.3 + f * 1.9 + seed * 3.0) < 0.12) {          // striped awning over some windows
      float aw = boxm(bx, 0.5 - ww / 2.0 - 0.06, 0.5 + ww / 2.0 + 0.06, ex) * boxm(fy, wy1 - 0.2, wy1 + 0.04, ey);
      float stp = step(0.5, fract(u * 2.5));
      c = mix(c, mix(vec3(0.75, 0.73, 0.68), vec3(0.42, 0.40, 0.36), stp), aw);
    }
    if (bal && (h1(seed * 71.0) < 0.5 || mod(bi, 2.0) == 0.0)) {     // balcony: dark railing band + slab edge
      float bwid = res ? 0.86 : 0.7;
      float rail = boxm(bx, 0.5 - bwid / 2.0, 0.5 + bwid / 2.0, ex) * boxm(fy, 0.07, 0.36, ey);
      c = mix(c, vec3(0.035, 0.035, 0.04), rail * 0.85);               // flat dark band (no bars: they alias)
      c = mix(c, vec3(0.70, 0.69, 0.66), boxm(bx, 0.5 - bwid / 2.0 - 0.02, 0.5 + bwid / 2.0 + 0.02, ex) * boxm(fy, 0.0, 0.07, ey) * 0.7);
    }
  } else if (f < 1.0 && wh >= 6.0) {                                    // ground floor: shopfronts or a darker base with doors
    if (shop) {
      c *= 0.62;
      float g = boxm(bx, 0.07, 0.93, ex) * boxm(fy, 0.04, 0.70, ey);
      c = mix(c, vec3(0.05, 0.06, 0.07) * (0.8 + 0.6 * h1(bi + seed)), g);
      gEmis += vec3(1.0, 0.62, 0.3) * 0.7 * g * uNight;
      vec3 sign = mix(vec3(0.12, 0.10, 0.09), vec3(0.45, 0.20, 0.12), h1(seed * 83.0 + bi));
      c = mix(c, sign, boxm(bx, 0.04, 0.96, ex) * boxm(fy, 0.75, 0.88, ey));
    } else {
      c *= 0.88;
      bool door = h1(bi * 3.3 + seed * 5.0) < 0.3;
      float g = door ? boxm(bx, 0.36, 0.64, ex) * boxm(fy, 0.0, 0.70, ey) : boxm(bx, 0.5 - ww / 2.0, 0.5 + ww / 2.0, ex) * boxm(fy, 0.32, 0.70, ey);
      c = mix(c, door ? vec3(0.09, 0.06, 0.045) : vec3(0.06, 0.07, 0.09), g);
    }
  }
  if (wh >= 5.0) {                                                     // cornice: light band with a shadow line under it
    c = mix(c, col * 1.12, boxm(v, wh - 0.5, wh + 2.0, px * 0.75));
    c = mix(c, col * 0.62, boxm(v, wh - 0.68, wh - 0.5, px * 0.75));
  }
  if (fade > 0.0) gEmis += vec3(1.0, 0.55, 0.22) * 0.25 * wfrac * uNight * fade; // far away: a soft average glow
  return mix(c, avg, fade);
}`;
async function facadeMaterial(): Promise<{ mat: THREE.Material; mb: number } | null> {
  try {
    const base = MAP;
    const info = await (await fetch(`${base}tex/tex.json`)).json();
    const ktx = new KTX2Loader().setTranscoderPath(`${base}basis/`).detectSupport(renderer);
    const tex = await ktx.loadAsync(`${base}tex/walls_${narrow ? 512 : 1024}.ktx2`);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.anisotropy = narrow ? 2 : 4; tex.colorSpace = THREE.SRGBColorSpace; tex.needsUpdate = true;
    let bytes = 0; for (const mm of tex.mipmaps as { data: ArrayBufferView }[]) bytes += mm.data.byteLength;
    ktx.dispose();
    const HUE = [0.0, 0.55, 0.0, 0.45, 0.4, 0.55, 0.3, 0.15, 0.35, 0.1, 0.45]; // 8-10 landmarks // how much of the texture's own colour shows through (0 = tint only)
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.tArr = { value: tex };
      sh.uniforms.uMean = { value: info.means.map((c: number[]) => new THREE.Vector3(c[0], c[1], c[2])) };
      sh.uniforms.uHue = { value: HUE }; sh.uniforms.uNight = uNight; sh.uniforms.uCol = { value: COL ? 1 : 0 };
      sh.vertexShader = 'attribute vec4 wa;\nattribute vec4 wb;\nvarying vec4 vWa;\nvarying vec4 vWb;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvWa = wa; vWb = wb;');
      sh.fragmentShader = 'precision highp sampler2DArray;\nuniform sampler2DArray tArr;\nuniform vec3 uMean[11];\nuniform float uHue[11];\nuniform float uNight;\nuniform float uCol;\nvarying vec4 vWa;\nvarying vec4 vWb;\n' + FACADE_GLSL + '\n' +
        sh.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb = facade(diffuseColor.rgb);').replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += gEmis;');
    };
    return { mat, mb: bytes / 1048576 };
  } catch (e) { console.warn('facade textures failed, falling back to plain walls', e); return null; }
}

// ---------- load and build ----------
async function main() {
  const S: Scene = await (await fetch(`${MAP}data/scene.json`)).json();
  // kc: Kapalıçarşı generated model; OSM buildings + trees under its outline are filtered (not deleted)
  let KC: any = null; try { KC = await (await fetch(`${MAP}data/kapalicarsi.json`)).json(); } catch { /* optional */ }
  const inKC = (x: number, z: number) => { if (!KC) return false; const r = KC.outline as number[]; let c = false; for (let i = 0, j = r.length - 2; i < r.length; j = i, i += 2) if ((r[i + 1] > z) !== (r[j + 1] > z) && x < ((r[j] - r[i]) * (z - r[i + 1])) / (r[j + 1] - r[i + 1]) + r[i]) c = !c; return c; };
  if (KC) { const n0 = S.buildings.length; S.buildings = S.buildings.filter((b) => { const r = b.p[0]?.[0]; if (!r) return true; let x = 0, z = 0; for (let i = 0; i < r.length; i += 2) { x += r[i]; z += r[i + 1]; } return !inKC(x / (r.length / 2), z / (r.length / 2)); }); (window as any).__kcFiltered = n0 - S.buildings.length; }
  try { const BF = await (await fetch(`${MAP}data/bridge_filter.json`)).json(); const C = BF.centroids as number[][]; const n0 = S.buildings.length; // wm7
    S.buildings = S.buildings.filter((b) => { const r = b.p[0]?.[0]; if (!r) return true; let x = 0, z = 0; for (let i = 0; i < r.length; i += 2) { x += r[i]; z += r[i + 1]; } x /= r.length / 2; z /= r.length / 2; return !C.some((c) => Math.hypot(c[0] - x, c[1] - z) < 0.5); });
    (window as any).__bridgeFiltered = n0 - S.buildings.length; } catch { /* optional */ }
  try { const TF = await (await fetch(`${MAP}data/taksim_building_filter.json`)).json(); const C = TF.centroids as number[][]; const n0 = S.buildings.length; // wm9: no building in the open Taksim plaza
    S.buildings = S.buildings.filter((b) => { const r = b.p[0]?.[0]; if (!r) return true; let x = 0, z = 0; for (let i = 0; i < r.length; i += 2) { x += r[i]; z += r[i + 1]; } x /= r.length / 2; z /= r.length / 2; return !C.some((c) => Math.hypot(c[0] - x, c[1] - z) < 3); });
    (window as any).__taksimBldFiltered = n0 - S.buildings.length; } catch { /* optional */ }
  try { const UF = await (await fetch(`${MAP}data/underground_filter.json`)).json(); const C = UF.centroids as number[][]; const n0 = S.buildings.length; // wm10: OSM underground metro boxes (Gezi bar+cross, Şişhane, Yenikapı…) are not drawn
    S.buildings = S.buildings.filter((b) => { const r = b.p[0]?.[0]; if (!r) return true; let x = 0, z = 0; for (let i = 0; i < r.length; i += 2) { x += r[i]; z += r[i + 1]; } x /= r.length / 2; z /= r.length / 2; return !C.some((c) => Math.abs(c[0] - x) < 0.5 && Math.abs(c[1] - z) < 0.5); });
    (window as any).__ugFiltered = n0 - S.buildings.length; } catch { /* optional */ }
  try { const HF = await (await fetch(`${MAP}data/height_fix.json`)).json(); let n = 0; // wm10: height corrections on existing OSM blocks (yaklaşık)
    for (const b of S.buildings) { const r = b.p[0]?.[0]; if (!r) continue; let x = 0, z = 0; for (let i = 0; i < r.length; i += 2) { x += r[i]; z += r[i + 1]; } x /= r.length / 2; z /= r.length / 2;
      for (const f of HF.fix as any[]) if (Math.abs(f.c[0] - x) < 0.5 && Math.abs(f.c[1] - z) < 0.5) { b.h = f.h; if (f.k != null) { b.k = f.k; b.hip = null; } n++; } }
    (window as any).__heightFix = n; } catch { /* optional */ }
  try { const DF = await (await fetch(`${MAP}data/dolmabahce_fix.json`)).json(); // wm9: replace clipped Selamlık stub with Selamlık+Muayede+Harem from OSM
    const FC = (DF.filter_centroids as number[][]) || []; const n0 = S.buildings.length;
    S.buildings = S.buildings.filter((b) => { const r = b.p[0]?.[0]; if (!r) return true; let x = 0, z = 0; for (let i = 0; i < r.length; i += 2) { x += r[i]; z += r[i + 1]; } x /= r.length / 2; z /= r.length / 2; return !FC.some((c) => Math.hypot(c[0] - x, c[1] - z) < 8); });
    for (const b of DF.buildings as any[]) S.buildings.push(b);
    (window as any).__dolmaFix = { removed: n0 - (S.buildings.length - DF.buildings.length), added: DF.buildings.length, dome: (DF.dome || []).length };
    (window as any).__dolmaDome = DF.dome || []; (window as any).__dolmaRings = (DF.buildings as any[]).map((b) => b.p[0][0]);
  } catch (e) { console.warn('dolmabahce_fix skipped', e); }
  mark('scene');
  const FAC = WALLS ? await facadeMaterial() : null;
  if (FAC) (window as any).__texMB = Math.round(FAC.mb * 100) / 100;
  if (STEP >= 7 && QS.get('terrain') !== '0') { // wm4: terrain ON by default (?terrain=0 = flat)
    TER = await (await fetch(`${MAP}data/terrain.json`)).json();
    document.getElementById('cr-dem')!.textContent = 'Kıyı+arazi/coast+terrain: Copernicus DEM GLO-30 (© DLR, Airbus DS)'; // full notice in CREDITS.md
  }
  if (TER) { // wm6 pads: model footprint radius + blend (yaklaşık); Topkapı is draped per vertex instead (it spans the whole Sarayburnu hill)
    const PR: Record<string, number> = { ayasofya: 100, sultanahmet: 95, yenicami: 70, rustempasa: 30, galata: 14, nusretiye: 32, ayatriada: 28, stantoine: 60, suleymaniye: 120 };
    for (const L of S.landmarks) { const r = PR[L.id]; if (!r) continue; const x = L.model ? L.model.x : L.label[0], z = L.model ? L.model.z : L.label[1]; addPad(x, z, r, 30); }
    for (const [x, z, r] of [[179, 1526, 38], [209, 1648, 22], [190, 1686, 16]]) addPad(x, z, r, 20); // wm7: Aya İrini, Bâb-ı Hümâyun, III. Ahmed Çeşmesi stand level (first court, outside the platform)
    for (const [x, z] of [[-302.3, 1943.1], [-326.7, 1972.1], [-349.2, 2000.8], [-260.4, 1783.6]]) addPad(x, z, 7, 10); // Hippodrome monuments
    if (KC) { const r = KC.outline as number[]; let sx = 0, sz = 0; for (let i = 0; i < r.length; i += 2) { sx += r[i]; sz += r[i + 1]; } addPad(sx / (r.length / 2), sz / (r.length / 2), 150, 40); }
    // wm8: Taksim plaza + AKM/Marmara/Gezi pads; Dolmabahçe inland / stadium / Gümüşsuyu slope pads (t127u — fix only, no new landmarks)
    addPad(504, -1493, 125, 35);
    addPad(739, -1482, 55, 35);
    addPad(621, -1426, 45, 35);
    addPad(797, -1625, 70, 35);
    addPad(652, -1671, 90, 35);
    addPad(1097.9, -1594.9, 75.7, 25);
    addPad(1106.0, -1845.1, 44.9, 25);
    addPad(778.0, -1446.1, 56.7, 25);
    addPad(810.8, -1502.9, 40.3, 25);
    addPad(944.9, -1542.1, 39.3, 25);
    addPad(753.5, -1786.2, 57.2, 25);
    addPad(793.6, -1931.2, 49.6, 25);
    addPad(768.7, -1253.4, 50.1, 25);
    addPad(794.7, -1202.2, 38.8, 25);
    addPad(1294.3, -1762.9, 90, 25);

    (window as any).__H = H; (window as any).__pads = PADS.length;
  }
  const [x0, z0, x1, z1] = S.bounds_m;
  const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
  const P = (lon: number, lat: number) => lonlatToXZ(S, lon, lat);
  const sa = P(28.9784, 41.0066), gk = P(28.9741, 41.0256), tk = P(28.9858, 41.0372);
  VIEWS.overview = narrow ? { t: [cx + 100, cz + 250], d: 12500, pol: 0.55, az: 0 } : { t: [cx + 150, cz + 250], d: 10500, pol: 0.72, az: -0.3 }; // wm3: whole walls-wide box
  VIEWS.overview_east = narrow ? { t: [0, 250], d: 8800, pol: 0.55, az: 0 } : { t: [150, 250], d: 8200, pol: 0.72, az: -0.3 }; // the pre-wm3 overview framing
  VIEWS.sultanahmet = { t: [sa[0], sa[1]], d: narrow ? 820 : 700, pol: 0.95, az: narrow ? -0.8 : 0.8 };
  VIEWS.galata = { t: [gk[0], gk[1]], d: narrow ? 420 : 360, pol: 1.0, az: 0.35 };
  const su = P(28.9650, 41.0168);
  VIEWS.suleymaniye = { t: [su[0], su[1]], d: narrow ? 900 : 760, pol: 0.95, az: 0.25 };
  VIEWS.yc_top = { t: [-574.7, 732.1], d: narrow ? 400 : 250, pol: 0.12, az: 0.7245 }; // Yeni Cami top-down, court up (compare with Doğancan's Apple Maps view)
  VIEWS.gk_eye = { t: [-402, -236], y: 40, d: narrow ? 190 : 150, pol: 1.2, az: 0.4 }; // Galata Kulesi close, low camera (eye-level-ish within the 1.2 rad orbit limit)
  VIEWS.gk_apple = { t: [-402, -236], y: 30, d: narrow ? 300 : 230, pol: 0.72, az: 0.4 }; // Galata framed like Doğancan's Apple Maps 3D view (higher, wider)
  VIEWS.gk_ground = { t: [-402, -236], y: 36, d: narrow ? 330 : 270, pol: 1.4, az: -0.25 }; // Galata from low and far, like photo30 (telephoto from across the Golden Horn)
  VIEWS.gm_beyazit = { t: [-1300, 1300], y: 20, d: narrow ? 1300 : 1000, pol: 1.0, az: -0.3 }; // whole-map check: generic mosques (Beyazıt, Şehzade, Laleli)
  VIEWS.br_galata = { t: [-600, 250], y: 8, d: narrow ? 900 : 700, pol: 1.15, az: 0.9 }; // bridges check (Galata, Metro, Atatürk)
  VIEWS.ch_pera = { t: [-150, -250], y: 15, d: narrow ? 420 : 330, pol: 1.0, az: 0.2 }; // generic churches check (Pera / Galatasaray)
  VIEWS.fatih = { t: [-2900, 600], y: 20, d: narrow ? 1500 : 1150, pol: 0.95, az: -0.2 }; // wm3 district views
  VIEWS.edirnekapi = { t: [-4000, -320], y: 60, d: narrow ? 1000 : 780, pol: 1.0, az: -0.9 };
  VIEWS.gate_edk = { t: [-3771, -862], y: 30, d: narrow ? 420 : 340, pol: 1.05, az: -0.9 }; VIEWS.gate_tpk = { t: [-4426, 205], y: 30, d: narrow ? 420 : 340, pol: 1.05, az: -0.9 }; // wm5
  VIEWS.tekfur = { t: [-3260, -1170], y: 25, d: narrow ? 420 : 340, pol: 1.05, az: -0.9 }; VIEWS.seawall = { t: [-1800, 2650], y: 10, d: narrow ? 1500 : 1200, pol: 1.0, az: 0.4 };
  VIEWS.kc_top = { t: [-905, 1386], y: 40, d: narrow ? 900 : 520, pol: 0.02, az: -Math.PI / 2 }; VIEWS.kc_top_n = { t: [-905, 1386], y: 40, d: narrow ? 900 : 520, pol: 0.02, az: 0 }; VIEWS.kc_obl = { t: [-860, 1400], y: 40, d: narrow ? 700 : 520, pol: 0.8, az: -Math.PI / 2 - 0.25 };
  VIEWS.asia = { t: [2600, 600], y: 20, d: narrow ? 3200 : 2600, pol: 0.95, az: -0.9 };
  VIEWS.yedikule = { t: [-4700, 3380], y: 15, d: narrow ? 800 : 620, pol: 1.0, az: -0.7 };
  VIEWS.surlar = { t: [-4600, 1400], y: 15, d: narrow ? 1700 : 1300, pol: 1.05, az: -1.25 };
  VIEWS.gm_taksim = { t: [425, -1490], y: 20, d: narrow ? 520 : 400, pol: 1.05, az: 0.4 };
  VIEWS.eminonu = { t: [-725, 700], d: narrow ? 820 : 700, pol: 0.95, az: narrow ? 0.6 : 0.35 }; // Yeni Cami + Rüstem Paşa
  VIEWS.taksim = { t: [tk[0], tk[1]], d: narrow ? 700 : 600, pol: 0.95, az: 3.4 };
  VIEWS.match = { t: [sa[0] + 150, sa[1] - 60], d: narrow ? 560 : 470, pol: 0.82, az: 0.55 }; // framing close to the Warsaw f2a frame
  VIEWS.roofs = { t: [gk[0] - 120, gk[1] + 60], d: narrow ? 260 : 220, pol: 0.85, az: 0.6 }; // close view for roof detail
  if (WALLS) { // architect's-model camera: narrow lens, farther away and a bit higher, same ground footprint
    VIEWS.sultanahmet.pol = 0.82; VIEWS.galata.pol = 0.85; VIEWS.match.pol = 0.74; VIEWS.roofs.pol = 0.78; VIEWS.suleymaniye.pol = 0.82; VIEWS.taksim.pol = 0.82; VIEWS.overview.pol = narrow ? 0.82 : 0.88; // ~40° down, near-orthographic
    for (const v of Object.values(VIEWS)) v.d /= FOVK;
  }
  setView('overview');

  // ground + sea
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(40000, 40000), new THREE.MeshLambertMaterial({ color: C ? (COL ? C.water : C.ground) : STEP >= 2 ? '#ece6da' : '#e9e4da' }));
  (ground.material as THREE.Material).depthWrite = false; ground.renderOrder = -200;
  ground.name = 'ground'; ground.rotation.x = -Math.PI / 2; ground.receiveShadow = STEP >= 2; scene.add(ground);
  const pilot = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0 - 8, z1 - z0 - 8) /* wm4: 4 m inset, no land-coloured seam along the box edge in the sea */, new THREE.MeshLambertMaterial({ color: C ? C.pilot : STEP >= 2 ? '#e9e1d0' : '#e4ddd0' }));
  (pilot.material as THREE.Material).depthWrite = false; pilot.renderOrder = -150;
  pilot.rotation.x = -Math.PI / 2; pilot.position.set(cx, 0.02, cz); pilot.receiveShadow = STEP >= 2;
  if (TER) {
    const T = TER, pos: number[] = [], idx: number[] = [];
    for (let j = 0; j < T.nz; j++) for (let i = 0; i < T.nx; i++) pos.push(T.x0 + i * T.step, H(T.x0 + i * T.step, T.z0 + j * T.step) + 0.02, T.z0 + j * T.step); // wm6: padded
    for (let j = 0; j < T.nz - 1; j++) for (let i = 0; i < T.nx - 1; i++) { const a = j * T.nx + i, b = a + 1, c = a + T.nx, d = c + 1; const gx = T.x0 + i * T.step, gz = T.z0 + j * T.step; if (gx < x0 || gx + T.step > x1 || gz < z0 || gz + T.step > z1) continue; idx.push(a, c, b, b, c, d); } // wm4: only inside the map box (the pad over the sea showed as cream bands)
    const tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); tg.setIndex(idx); tg.computeVertexNormals();
    const tm = new THREE.Mesh(tg, new THREE.MeshLambertMaterial({ color: C ? C.pilot : '#e9e1d0', depthWrite: false }));
    tm.renderOrder = -150; tm.receiveShadow = true; tm.name = 'terrain'; pilot.name = 'pilot'; pilot.renderOrder = -160; scene.add(tm); scene.add(pilot); // flat pilot plane under it fills the <60 m strip at the box edge
  } else scene.add(pilot);
  const inland = (p: Poly) => { const r = p[0]; let sx = 0, sz = 0; for (let i = 0; i < r.length; i += 2) { sx += r[i]; sz += r[i + 1]; } return Math.abs(ringArea(r)) < 30000 && Hraw(sx / (r.length / 2), sz / (r.length / 2)) > 1.5; };
  const SEA = S.water.filter((p) => !inland(p)), POOLS = S.water.filter(inland); (window as any).__pools = POOLS.length;
  flatLayer(SEA, -1.1, C ? C.water : '#8ec3d8'); // wm2: sea sits 1.1 m below the quay
  flatLayer(POOLS, 0.05, '#6fa8bb'); // wm6: pools / fountains: shallow, at the local ground (were 1.1 m down with a quay wall from sea level = a deep pit)
  { // wm2 quay: stone wall from the sea up to the street + a 1.6 m pale coping strip on the land side, along every waterline inside the box
    const pos: number[] = [], col: number[] = [], wc = new THREE.Color('#a39a8c'), cc = new THREE.Color('#d6cebf');
    const q = (a: number[], b: number[], c: number[], d: number[], k: THREE.Color) => { pos.push(...a, ...b, ...c, ...a, ...c, ...d); for (let i = 0; i < 6; i++) col.push(k.r, k.g, k.b); };
    const onEdge = (x: number, z: number) => Math.abs(x - x0) < 2 || Math.abs(x - x1) < 2 || Math.abs(z - z0) < 2 || Math.abs(z - z1) < 2 || Math.abs(Math.abs(x) - 1764) < 2 || Math.abs(Math.abs(z) - 2709) < 2; // + the pre-wm3 box seam (water merged there)
    for (const p of S.water) p.forEach((r, ri) => { const pool = POOLS.includes(p);
      const sg = (ringArea(r) > 0 ? 1 : -1) * (ri === 0 ? 1 : -1);
      for (let i = 0; i < r.length; i += 2) {
        const j = (i + 2) % r.length, ax = r[i], az = r[i + 1], bx = r[j], bz = r[j + 1], ex = bx - ax, ez = bz - az, L = Math.hypot(ex, ez);
        const mx = (ax + bx) / 2, mz = (az + bz) / 2;
        if (L < 0.5 || (onEdge(ax, az) && onEdge(bx, bz)) || mx < x0 + 3 || mx > x1 - 3 || mz < z0 + 3 || mz > z1 - 3) continue; // wm5: the clipped sea polygon runs past the box (x 1931, z 3925): those edges drew a dotted quay line in open water
        const ha = Math.max(0, H(ax, az)) + (pool ? 0.45 : 0.34), hb = Math.max(0, H(bx, bz)) + (pool ? 0.45 : 0.34); // wm5: coping follows the terrain; wm6 pools: low rim
        const ya = pool ? ha - 0.5 : -1.1, yb = pool ? hb - 0.5 : -1.1, rw = pool ? 0.6 : 1;
        const nx = (ez / L) * sg * 1.6, nz = (-ex / L) * sg * 1.6;
        q([ax, ya, az], [bx, yb, bz], [bx, hb, bz], [ax, ha, az], wc);
        q([ax, ha, az], [bx, hb, bz], [bx + nx * rw, hb, bz + nz * rw], [ax + nx * rw, ha, az + nz * rw], cc);
        if (pool) q([ax + nx * rw, ha, az + nz * rw], [bx + nx * rw, hb, bz + nz * rw], [bx + nx * rw, hb - 0.6, bz + nz * rw], [ax + nx * rw, ha - 0.6, az + nz * rw], wc); // outer face of the rim
      }
    });
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.computeVertexNormals();
    const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide })); m.receiveShadow = STEP >= 2; m.name = 'quay'; scene.add(m);
  }
  // context land outside the pilot box (DEM-derived coastline, flat, no buildings), fading into the sea colour so the map has no hard cut edge
  try {
    const CX = await (await fetch(`${MAP}data/context.json`)).json();
    const [bx0, bz0, bx1, bz1] = CX.bbox_m as number[]; const FD = CX.fade as number;
    const cl = new THREE.Color(C ? C.pilot : '#e4ddd0'), cw = new THREE.Color(C ? (COL ? C.water : C.ground) : '#e9e4da'), tc = new THREE.Color();
    const pos: number[] = [], col: number[] = [];
    for (const rings of CX.polys as number[][][]) {
      const pts = (r: number[]) => { const a: THREE.Vector2[] = []; for (let i = 0; i < r.length; i += 2) a.push(new THREE.Vector2(r[i], r[i + 1])); return a; };
      const outer = pts(rings[0]), holes = rings.slice(1).map(pts), all = outer.concat(...holes);
      for (const t of THREE.ShapeUtils.triangulateShape(outer, holes)) for (const k of [t[0], t[2], t[1]]) {
        const v = all[k]; const dx = Math.max(bx0 - v.x, 0, v.x - bx1), dz = Math.max(bz0 - v.y, 0, v.y - bz1);
        const e = 0; // wm4: the DEM now covers the Asian shore, no east-edge cut
        const f = Math.min(1, Math.max(e, 2.2 * Math.hypot(dx, dz) / FD)); tc.copy(cl).lerp(cw, 0.3 + 0.7 * f * f * (3 - 2 * f));
        pos.push(v.x, 0.01, v.y); col.push(tc.r, tc.g, tc.b);
      }
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.computeVertexNormals();
    const cm = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, depthWrite: false })); cm.renderOrder = -170; cm.name = 'ctx'; cm.receiveShadow = STEP >= 2; scene.add(cm);
  } catch (e) { console.warn('context land skipped', e); }
  // wm4 far context: OSM buildings outside the box (Asian shore, Beşiktaş, Eyüp, outside the walls) merged into simple blocks, faded by distance
  try {
    const FB = (await (await fetch(`${MAP}data/far.json`)).json()).blocks as { p: number[]; h: number }[];
    const B = new Builder(), wl = new THREE.Color('#cdbfae'), rf = new THREE.Color('#b9876a'), hz = new THREE.Color(C ? (COL ? C.water : C.ground) : '#e9e4da'), a = new THREE.Color(), b = new THREE.Color();
    for (const q of FB) {
      const r = q.p; if (narrow && Math.abs(ringArea(r)) < 2500) continue; // phones: only the bigger far blocks let cx = 0, cz = 0; for (let i = 0; i < r.length; i += 2) { cx += r[i]; cz += r[i + 1]; } cx /= r.length / 2; cz /= r.length / 2;
      const dx = Math.max(x0 - cx, 0, cx - x1), dz = Math.max(z0 - cz, 0, cz - z1), f = Math.min(1, Math.hypot(dx, dz) / 4200);
      a.copy(wl).lerp(hz, 0.15 + 0.75 * f); b.copy(rf).lerp(hz, 0.15 + 0.75 * f);
      prism(B, [[r]], 0, q.h * (1 - 0.4 * f), a, b);
    }
    const fm = new THREE.Mesh(B.geometry(), new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide })); fm.receiveShadow = STEP >= 2; fm.name = 'far'; scene.add(fm);
    (window as any).__far = FB.length;
  } catch (e) { console.warn('far context skipped', e); }
  // generic mosque placeholders (OSM mosques without a landmark model): lead dome on a short drum + simple minarets; sizes yaklaşık
  try {
    const MQ = (await (await fetch(`${MAP}data/mosques.json`)).json()).mosques as { x: number; z: number; r: number; y: number; m: number[][] }[];
    const nm = MQ.reduce((a, q) => a + q.m.length, 0), M4 = new THREE.Matrix4(), Q0 = new THREE.Quaternion(), V = new THREE.Vector3(), Sc = new THREE.Vector3();
    const lead = new THREE.MeshLambertMaterial({ color: '#8e939b' }), stone = new THREE.MeshLambertMaterial({ color: '#e4dccd' });
    const dome = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 12, 4, 0, Math.PI * 2, 0, Math.PI / 2), lead, MQ.length);
    const drum = new THREE.InstancedMesh(new THREE.CylinderGeometry(1, 1, 1, 14, 1, true), stone, MQ.length);
    const shaft = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.85, 1, 1, 8), stone, Math.max(1, nm));
    const cone = new THREE.InstancedMesh(new THREE.ConeGeometry(1, 1, 8), lead, Math.max(1, nm));
    let k = 0;
    MQ.forEach((q, i) => {
      const g = H(q.x, q.z), dh = 0.35 * q.r;
      drum.setMatrixAt(i, M4.compose(V.set(q.x, g + q.y + dh / 2, q.z), Q0, Sc.set(q.r * 1.02, dh, q.r * 1.02)));
      dome.setMatrixAt(i, M4.compose(V.set(q.x, g + q.y + dh, q.z), Q0, Sc.set(q.r, q.r * 0.92, q.r)));
      for (const [mx, mz, mh, mr] of q.m) {
        const gm = H(mx, mz), ch = mh * 0.17;
        shaft.setMatrixAt(k, M4.compose(V.set(mx, gm - 0.8 + (mh - ch + 0.8) / 2, mz), Q0, Sc.set(mr, mh - ch + 0.8, mr))); // wm6: 0.8 m into the ground
        cone.setMatrixAt(k, M4.compose(V.set(mx, gm + mh - ch / 2, mz), Q0, Sc.set(mr * 1.05, ch, mr * 1.05))); k++;
      }
    });
    shaft.count = cone.count = k;
    for (const m of [dome, drum, shaft, cone]) { m.castShadow = m.receiveShadow = STEP >= 2; m.frustumCulled = false; scene.add(m); }
  } catch (e) { console.warn('mosque placeholders skipped', e); }
  // bridges (wm2): OSM outlines cut into 8 m strips, each a slab at its own height (ramps where it meets the shore) + instanced piers / towers / cables
  try {
    const BR = await (await fetch(`${MAP}data/bridges.json`)).json();
    const pos: number[] = [], col: number[] = [];
    const top = new THREE.Color('#77706c'), side = new THREE.Color('#c8bfb2'), bot = new THREE.Color('#7d766f');
    const tri = (a: number[], b: number[], c: number[], k: THREE.Color) => { pos.push(...a, ...b, ...c); for (let i = 0; i < 3; i++) col.push(k.r, k.g, k.b); };
    for (const b of BR.bridges) for (const st of b.strips) {
      const r = st.p as number[], v: THREE.Vector2[] = []; for (let i = 0; i < r.length; i += 2) v.push(new THREE.Vector2(r[i], r[i + 1]));
      if (THREE.ShapeUtils.isClockWise(v)) v.reverse();
      let sx = 0, sz = 0; for (const q of v) { sx += q.x; sz += q.y; } const lift = Math.max(0, H(sx / v.length, sz / v.length)); // wm6: bridges.json heights are above local ground (was faded out above 12 m: high decks on the hills sank); wm5: ramps (low strips) sit on the terrain, the high spans stay
      if (lift > 0.3 && st.y < 3) continue; // wm7: low ramp strips on land are dropped (they stood up as blocks/stubs at the bridge ends; the OSM road drapes there, t125u)
      const y1 = st.y + lift, y0 = st.y - st.t + lift;
      for (const t of THREE.ShapeUtils.triangulateShape(v, [])) {
        const [a, bb, c] = t.map((k) => v[k]);
        tri([a.x, y1, a.y], [c.x, y1, c.y], [bb.x, y1, bb.y], top); tri([a.x, y0, a.y], [bb.x, y0, bb.y], [c.x, y0, c.y], bot);
      }
      for (let i = 0; i < v.length; i++) { const a = v[i], c = v[(i + 1) % v.length];
        tri([a.x, y0, a.y], [c.x, y0, c.y], [c.x, y1, c.y], side); tri([a.x, y0, a.y], [c.x, y1, c.y], [a.x, y1, a.y], side); }
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.computeVertexNormals();
    const dm = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true })); dm.castShadow = dm.receiveShadow = STEP >= 2; scene.add(dm);
    const BC: Record<string, string> = { pier: '#b3aa9d', tower: '#ecebe8', cable: '#d9dadc', canopy: '#cfd3d6' };
    const bg = new THREE.BoxGeometry(1, 1, 1), M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), E = new THREE.Euler(), V = new THREE.Vector3(), Sc = new THREE.Vector3();
    for (const key of Object.keys(BC)) {
      const L = (BR.boxes as any[]).filter((q) => q[7] === key && !(key === 'pier' && H(q[0], q[2]) > 0.3)); if (!L.length) continue; // wm7: no piers on land (stubs at the bridge ends)
      const im = new THREE.InstancedMesh(bg, new THREE.MeshLambertMaterial({ color: BC[key] }), L.length);
      L.forEach((q, i) => { const [x, y0, z, w, h, d, rot] = q; const cable = key === 'cable';
        E.set(0, rot, cable ? -q[8] : 0, 'YZX'); Q.setFromEuler(E);
        const gl = Math.max(0, H(x, z)); // wm6
        im.setMatrixAt(i, M4.compose(V.set(x, (cable ? y0 : y0 + h / 2) + gl, z), Q, Sc.set(w, h, d))); });
      im.castShadow = key !== 'cable' && STEP >= 2; im.receiveShadow = STEP >= 2; scene.add(im);
    }
  } catch (e) { console.warn('bridges skipped', e); }
  // generic church placeholders (wm2): Orthodox drum + dome, Armenian drum + cone, western bell tower + pyramid; sizes yaklaşık
  try {
    const CH = (await (await fetch(`${MAP}data/churches.json`)).json()).churches as any[];
    const M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), V = new THREE.Vector3(), Sc = new THREE.Vector3(), Y = new THREE.Vector3(0, 1, 0);
    const stoneM = new THREE.MeshLambertMaterial({ color: '#ddd3c2' }), leadM = new THREE.MeshLambertMaterial({ color: '#8b9097' }), tileM = new THREE.MeshLambertMaterial({ color: '#9c5a4d' }), darkM = new THREE.MeshLambertMaterial({ color: '#6f6a68' });
    const mk = (geo: THREE.BufferGeometry, mat: THREE.Material, L: any[], f: (q: any) => void) => { if (!L.length) return; const im = new THREE.InstancedMesh(geo, mat, L.length);
      L.forEach((q, i) => { f(q); im.setMatrixAt(i, M4.compose(V, Q, Sc)); }); im.castShadow = im.receiveShadow = STEP >= 2; scene.add(im); };
    const ro = CH.filter((q) => q.k !== 'west'), ar = CH.filter((q) => q.k === 'arm'), or = CH.filter((q) => q.k === 'orth'), we = CH.filter((q) => q.k === 'west');
    mk(new THREE.CylinderGeometry(1, 1, 1, 10), stoneM, ro, (q) => { Q.identity(); V.set(q.x, H(q.x, q.z) + q.y + q.r * 0.6, q.z); Sc.set(q.r, q.r * 1.2, q.r); });
    mk(new THREE.SphereGeometry(1, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2), leadM, or, (q) => { Q.identity(); V.set(q.x, H(q.x, q.z) + q.y + q.r * 1.2, q.z); Sc.set(q.r * 1.05, q.r * 0.95, q.r * 1.05); });
    mk(new THREE.ConeGeometry(1, 1, 10), darkM, ar, (q) => { Q.identity(); V.set(q.x, H(q.x, q.z) + q.y + q.r * 1.2 + q.r * 0.6, q.z); Sc.set(q.r * 1.1, q.r * 1.2, q.r * 1.1); });
    mk(new THREE.BoxGeometry(1, 1, 1), stoneM, we, (q) => { Q.setFromAxisAngle(Y, q.ry); const hb = q.h - q.w * 1.1; V.set(q.x, H(q.x, q.z) + hb / 2, q.z); Sc.set(q.w, hb, q.w); });
    mk(new THREE.ConeGeometry(Math.SQRT1_2, 1, 4).rotateY(Math.PI / 4), tileM, we, (q) => { Q.setFromAxisAngle(Y, q.ry); V.set(q.x, H(q.x, q.z) + q.h - q.w * 0.55, q.z); Sc.set(q.w * 1.08, q.w * 1.1, q.w * 1.08); });
  } catch (e) { console.warn('church placeholders skipped', e); }
  // wm3: Theodosian land walls / Blachernae / Yedikule / Altınkapı placeholder (instanced boxes, OSM tower prisms, moat band); dims sourced or yaklaşık
  try {
    const WL = await (await fetch(`${MAP}data/walls.json`)).json();
    const WC: Record<string, string> = { wall: '#c9b99a', outer: '#c2b293', scarp: '#b3a487', tower: '#bfae8e', otower: '#c7b796' };
    const bg = new THREE.BoxGeometry(1, 1, 1), M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), Yax = new THREE.Vector3(0, 1, 0), V = new THREE.Vector3(), Sc = new THREE.Vector3();
    flatLayer(WL.moat, 0.115, '#8a9d5a'); // the moat is market gardens (bostan) today
    for (const key of Object.keys(WC)) {
      const L0 = (WL.boxes as any[]).filter((q) => q[7] === key); if (!L0.length) continue;
      const L: number[][] = []; // wm6: split by slope so each piece sits on its own ground; 2.5 m foundation skirt below
      for (const q of L0) { const [x, y0, z, w, h, d, rot] = q; const ux = Math.cos(rot), uz = -Math.sin(rot);
        let dh = 0; for (let k = 0; k <= 6; k++) { const t = (k / 6 - 0.5) * w; dh = Math.max(dh, Math.abs(H(x + ux * t, z + uz * t) - H(x, z))); }
        const n = Math.min(24, Math.max(1, Math.ceil(dh / 0.6), Math.ceil(w / 40)));
        for (let k = 0; k < n; k++) { const t = ((k + 0.5) / n - 0.5) * w, px = x + ux * t, pz = z + uz * t, a = H(px - ux * w / n / 2, pz - uz * w / n / 2), b = H(px + ux * w / n / 2, pz + uz * w / n / 2), g = H(px, pz);
          const lo = Math.min(a, b, g) - 2.5; L.push([px, lo, pz, w / n + 0.3, g + y0 + h - lo, d, rot]); } }
      const im = new THREE.InstancedMesh(bg, brickBands(new THREE.MeshLambertMaterial({ color: WC[key] })), L.length); im.name = 'aud:wall';
      L.forEach((q, i) => { const [x, lo, z, w, hh, d, rot] = q; Q.setFromAxisAngle(Yax, rot); im.setMatrixAt(i, M4.compose(V.set(x, lo + hh / 2, z), Q, Sc.set(w, hh, d))); });
      im.castShadow = im.receiveShadow = STEP >= 2; scene.add(im);
    }
    const B = new Builder(), tcol = new THREE.Color('#bfae8e'), mcol = new THREE.Color('#e6e0d4');
    for (const t of WL.tpolys) { let tg = -1e9, tl = 1e9; for (let i = 0; i < t.p.length; i += 2) { const g = H(t.p[i], t.p[i + 1]); tg = Math.max(tg, g); tl = Math.min(tl, g); } prism(B, [[t.p]], tl - 2.5, tg + t.h, // wm6: base under the lowest corner, top above the highest
       t.marble ? mcol : tcol, (t.marble ? mcol : tcol).clone().multiplyScalar(0.92)); }
    const tm = new THREE.Mesh(B.geometry(), new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide })); tm.castShadow = tm.receiveShadow = STEP >= 2; scene.add(tm);
    const yt = new THREE.InstancedMesh(new THREE.CylinderGeometry(1, 1.06, 1, 12), new THREE.MeshLambertMaterial({ color: '#c6b596' }), WL.ytowers.length);
    (WL.ytowers as number[][]).forEach(([x, z, r, h], i) => { Q.identity(); let lo = 1e9; for (let a = 0; a < 8; a++) lo = Math.min(lo, H(x + Math.cos(a * 0.785) * r, z + Math.sin(a * 0.785) * r)); lo -= 1; const hh = H(x, z) + h - lo; yt.setMatrixAt(i, M4.compose(V.set(x, lo + hh / 2, z), Q, Sc.set(r, hh, r))); }); yt.name = 'aud:ytower';
    yt.castShadow = yt.receiveShadow = STEP >= 2; scene.add(yt);
    addLabel('Kara Surları', -4600, 30, 1200, 'district'); addLabel('Yedikule', -4700, 34, 3380);
  } catch (e) { console.warn('walls skipped', e); }

  // wm5 placeholders (all sizes / positions yaklaşık): gate towers at Edirnekapı + Topkapı, Tekfur Sarayı block, rough Marmara sea wall, Asian-shore / Beşiktaş silhouettes
  try {
    const parts: THREE.BufferGeometry[] = [], M4 = new THREE.Matrix4(), Qr = new THREE.Quaternion(), Yx = new THREE.Vector3(0, 1, 0), Vv = new THREE.Vector3(), Ss = new THREE.Vector3();
    const put = (g: THREE.BufferGeometry, col: string, x: number, y: number, z: number, sx: number, sy: number, sz: number, rot = 0) => {
      const gg = (g.index ? g.toNonIndexed() : g.clone()); gg.deleteAttribute('uv'); gg.applyMatrix4(M4.compose(Vv.set(x, y, z), Qr.setFromAxisAngle(Yx, rot), Ss.set(sx, sy, sz)));
      const c = new THREE.Color(col), n = gg.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) a.set([c.r, c.g, c.b], i * 3); gg.setAttribute('color', new THREE.BufferAttribute(a, 3)); parts.push(gg); };
    const BX = new THREE.BoxGeometry(1, 1, 1), CY = new THREE.CylinderGeometry(1, 1, 1, 10), CO = new THREE.ConeGeometry(1, 1, 10), PY = new THREE.ConeGeometry(0.71, 1, 4, 1).rotateY(Math.PI / 4), DM = new THREE.SphereGeometry(1, 12, 4, 0, Math.PI * 2, 0, Math.PI / 2);
    const ST = '#d8cdbb', LD = '#8e939b', BR = '#b9876a', LS = '#c9b99a';
    const box = (x: number, z: number, w: number, d: number, h: number, rot = 0, col = ST, y = 0) => put(BX, col, x, y + h / 2, z, w, h, d, rot);
    const mosque = (x: number, z: number, r: number, nm: number, mh: number, rot = 0) => { const g = H(x, z);
      box(x, z, r * 2.6, r * 2.6, r * 1.1, rot, ST, g); put(DM, LD, x, g + r * 1.1, z, r, r * 0.9, r);
      for (let k = 0; k < nm; k++) { const a = rot + Math.PI / 4 + k * Math.PI / 2, mx = x + Math.cos(a) * r * 1.9, mz = z - Math.sin(a) * r * 1.9;
        put(CY, ST, mx, g + mh * 0.44, mz, 1.3, mh * 0.88, 1.3); put(CO, LD, mx, g + mh * 0.94, mz, 1.4, mh * 0.12, 1.4); } };
    // gates: two flanking towers + a lintel over the opening, aligned with the nearest land-wall box
    const WL2 = await (await fetch(`${MAP}data/walls.json`)).json();
    for (const [gx, gz] of [[-3771.2, -862.5], [-4426, 205]]) {
      let best: any = null, bd = 1e9; for (const q of WL2.boxes) if (q[7] === 'wall') { const d = Math.hypot(q[0] - gx, q[2] - gz); if (d < bd) { bd = d; best = q; } }
      if (!best || bd > 200) continue; const rot = best[6], ux = Math.cos(rot), uz = -Math.sin(rot);
      // snap the gate onto the wall line
      const t = (gx - best[0]) * ux + (gz - best[2]) * uz, cx = best[0] + ux * t, cz = best[2] + uz * t, g = H(cx, cz);
      for (const s of [-1, 1]) { const tx = cx + ux * s * 11, tz = cz + uz * s * 11; box(tx, tz, 11, 13, 20, rot, LS, H(tx, tz)); put(PY, '#a89a82', tx, H(tx, tz) + 21.5, tz, 11, 3, 13, rot); }
      box(cx, cz, 11.5, 6, 4, rot, LS, g + 9); box(cx, cz, 11, 6.6, 1.2, rot, BR, g + 8.4);
    }
    // Tekfur Sarayı (Palace of the Porphyrogenitus): three-storey brick-banded block between the inner and outer wall, yaklaşık 28 x 13 m, 17 m
    { const x = -3250.4, z = -1161.0, g = H(x, z); box(x, z, 28, 13, 17, 0.9, '#c4a488', g); box(x, z, 28.4, 13.4, 0.8, 0.9, BR, g + 6); box(x, z, 28.4, 13.4, 0.8, 0.9, BR, g + 11.5); addLabel('Tekfur Sarayı', x, g + 26, z); }
    // Marmara sea wall (yaklaşık line, see data/seawall.json)
    try { const SW = await (await fetch(`${MAP}data/seawall.json`)).json();
      for (const [x, z, L, r] of SW.boxes) box(x, z, L, 3.5, SW.h + 2, r, LS, H(x, z) - 2.5); // wm6: 2.5 m skirt
      for (const [x, z, r] of SW.towers) box(x, z, 9, 8, SW.th, r, '#c2b293', H(x, z) - 0.5); } catch { /* optional */ }
    // Asian shore + Beşiktaş silhouettes (ground = flat context land)
    { const [x, z] = [3099.2, 1736.0], W = 200, D = 265; // Selimiye Kışlası: four wings round a courtyard, corner towers
      box(x, z - D / 2, W, 24, 20); box(x, z + D / 2, W, 24, 20); box(x - W / 2, z, 24, D, 20); box(x + W / 2, z, 24, D, 20);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) { box(x + sx * W / 2, z + sz * D / 2, 16, 16, 30); put(PY, LD, x + sx * W / 2, 33, z + sz * D / 2, 16, 6, 16); }
      addLabel('Selimiye Kışlası', x, 50, z); }
    mosque(3132.8, 1537.0, 10, 2, 45);
    mosque(3107.6, -376.0, 9, 2, 45); mosque(3023.6, -143.7, 12, 2, 50);
    { const [x, z] = [2108.2, 265.4]; box(x, z, 22, 14, 6); put(CY, ST, x, 6 + 9, z, 4.5, 18, 4.5); put(CO, LD, x, 24 + 2.5, z, 5, 5, 5); put(CY, ST, x, 29 + 1, z, 1, 2, 1); addLabel('Kız Kulesi', x, 40, z); }
    { const [x, z] = [3393.2, 2941.3], r = 0.55; box(x, z, 95, 36, 24, r, '#cdb79a'); for (const s of [-1, 1]) { const tx = x + Math.cos(r) * s * 44, tz = z - Math.sin(r) * s * 44; box(tx, tz, 14, 14, 30, r, '#cdb79a'); put(CO, '#6f6a66', tx, 34, tz, 9, 8, 9); } addLabel('Haydarpaşa Garı', x, 48, z); }
    addLabel('Dolmabahçe', 1812, H(1812, -1722) + 40, -1722); // wm10: wm5 placeholder box removed (it doubled the OSM palace); label over Muayede
    for (const [n, x, z] of [['Selimiye Camii', 3132.8, 1537.0], ['Mihrimah Sultan', 3107.6, -376.0], ['Yeni Valide', 3023.6, -143.7]] as [string, number, number][]) if (!narrow || n !== 'Yeni Valide') addLabel(n, x, 58, z);
    const pg = mergeGeometries(parts); parts.forEach((q) => q.dispose());
    if (pg) { pg.computeVertexNormals(); const pm = new THREE.Mesh(pg, brickBands(new THREE.MeshLambertMaterial({ vertexColors: true }))); pm.castShadow = pm.receiveShadow = STEP >= 2; pm.name = 'wm5ph'; scene.add(pm); (window as any).__wm5ph = pg.attributes.position.count / 3; }
  } catch (e) { console.warn('wm5 placeholders skipped', e); }
  if (KC) try { const kc = buildKapalicarsi(KC, H, narrow); scene.add(kc.grp); for (const d of kc.detail) DET.push(d); (window as any).__kc = kc.tris;
    addLabel('Kapalıçarşı', -900, H(-900, 1390) + 30, 1390, 'district'); } catch (e) { console.warn('kapalicarsi skipped', e); }

  // flat layers (step 3)
  if (STEP >= 3) {
    let LU: Record<string, Poly[]> = {}; try { LU = await (await fetch(`${MAP}data/landuse.json`)).json(); } catch { /* optional */ }
    flatLayer(LU.railway || [], 0.08, '#857a70'); flatLayer(LU.construction || [], 0.085, '#a8957e'); flatLayer(LU.religious || [], 0.09, '#cdbfa8'); // wm2 landuse
    flatLayer(S.parks, 0.12, C ? C.parks : '#bcd59a');
    flatLayer(LU.cemetery || [], 0.125, '#7f9469'); flatLayer(LU.pitch || [], 0.13, '#5f9e4f');
    flatLayer(S.plazas, 0.14, C ? C.plazas : '#e8dcc6');
    try { const TP = await (await fetch(`${MAP}data/taksim_plaza.json`)).json(); flatLayer(TP.plazas || [], 0.145, C ? C.plazas : '#e8dcc6'); } catch { /* optional */ } // wm8: level Taksim square overlay

    const R = S.roads;
    flatLayer(R.path || [], 0.16, C ? C.path : '#f4ecdd');
    flatLayer(R.service || [], 0.18, C ? C.service : '#f7f2ea');
    flatLayer(R.minor || [], 0.2, C ? C.minor : '#fbf8f2');
    flatLayer(R.major || [], 0.22, C ? C.major : '#f2d9a6');
    flatLayer(R.rail || [], 0.26, C ? C.rail : '#8d8a86');
    flatLayer(R.tram || [], 0.28, C ? C.tram : '#b2473e');
  }

  mark('before_buildings');
  // buildings, merged per 500 m chunk
  const pal = S.palette;
  const wallC = (C ? C.walls : pal.walls).map((c) => new THREE.Color(c)), roofC = (C ? C.roofs : pal.roofs).map((c) => new THREE.Color(c)), flatC = (C ? C.flats : pal.flats).map((c) => new THREE.Color(c));
  let bi = 0;
  const chim: number[][] = [], dorm: number[][] = [];
  const hs = (k: number) => { const r = Math.sin(k * 91.17) * 43758.5453; return r - Math.floor(r); };
  const addRoofBits = (b: Bld, bi: number, kind: number, top: number, hAt: (s: number, t: number) => number) => {
    const [cx, cz, ang, L, W] = b.hip!, ux = Math.cos(ang), uz = Math.sin(ang), vx = -uz, vz = ux;
    const ring = b.p[0][0];
    const inside = (x: number, z: number) => { let c = false; for (let i = 0, j = ring.length - 2; i < ring.length; j = i, i += 2) { const xi = ring[i], zi = ring[i + 1], xj = ring[j], zj = ring[j + 1]; if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) c = !c; } return c; };
    const pc = narrow ? 0.08 : 0.18;
    if (hs(bi * 3.1) < pc && L > 6) {
      const s = (hs(bi * 5.3) - 0.5) * L * 0.6, t = (hs(bi * 7.7) < 0.5 ? -1 : 1) * W * 0.12;
      const x = cx + ux * s + vx * t, z = cz + uz * s + vz * t;
      if (inside(x, z)) chim.push([x, top + hAt(s, t), z, ang]);
    }
    if (!narrow && (kind === 2 || kind === 3) && W > 7 && L > 8 && hs(bi * 11.3) < 0.16) {
      const side = hs(bi * 13.9) < 0.5 ? -1 : 1, n = L > 16 ? 2 : 1;
      for (let q = 0; q < n; q++) {
        const s = n === 1 ? 0 : (q === 0 ? -0.22 : 0.22) * L, t = side * (W / 2 - Math.min(2.4, W * 0.28));
        const x = cx + ux * s + vx * t, z = cz + uz * s + vz * t;
        if (inside(x, z)) dorm.push([x, top + hAt(s, t), z, ang + (side > 0 ? 0 : Math.PI)]);
      }
    }
  };
  const METAL = ['#7d828c', '#6f7a80', '#8a8a90', '#5f6b70'].map((c) => new THREE.Color(c)); // grey / blue-grey metal and slate
  const plainWall = new THREE.Color('#e6ddcf'), plainTop = new THREE.Color('#d6ccbb');
  // colour pass: a few cheap instanced boxes (water tanks, stair huts) on flat roofs
  const boxes: number[][] = [];
  const pip = (ring: number[], x: number, z: number) => { let c = false; for (let i = 0, j = ring.length - 2; i < ring.length; j = i, i += 2) { const xi = ring[i], zi = ring[i + 1], xj = ring[j], zj = ring[j + 1]; if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) c = !c; } return c; };
  const roofBoxes = (b: Bld, bi: number, top: number) => {
    const ring = b.p[0]?.[0]; if (!ring) return;
    const area = Math.abs(ringArea(ring)); if (area < 60 || hs(bi * 15.1) > (narrow ? 0.4 : 0.7)) return;
    let sx = 0, sz = 0; for (let i = 0; i < ring.length; i += 2) { sx += ring[i]; sz += ring[i + 1]; }
    const cx = sx / (ring.length / 2), cz = sz / (ring.length / 2), n = area > 300 && !narrow ? 2 : 1, rr = Math.sqrt(area) * 0.22;
    for (let q = 0; q < n; q++) {
      const a = hs(bi * 3.7 + q) * 6.283, x = cx + Math.cos(a) * rr * hs(bi + q * 5.1), z = cz + Math.sin(a) * rr * hs(bi * 2.9 + q);
      if (pip(ring, x, z)) boxes.push([x, top, z, q === 0 && hs(bi * 19.7) < 0.05 ? 2 : hs(bi * 7.3 + q) < 0.55 ? 0 : 1, a]);
    }
  };
  const chunks = new Map<number, Builder>();
  // residential blocks outside the Sultanahmet core (Doğancan's street photo): pale cream, light grey, white, sand, some pastel
  // street_02: about 1 in 6 is a brick-red / terracotta render
  const RES = (COL ? ['#f0e2c4', '#ddd6cc', '#f3ede0', '#e8d3a4', '#ecd8bc', '#d6cfc4', '#efcfb4', '#d4dccc', '#f0d890', '#b8553a', '#a84c36'] : ['#efe8d8', '#dedcd6', '#f3f0ea', '#e6d8b8', '#e9e2d2', '#d4d3cf', '#ecd9c4', '#d6dcd4', '#efe0a8', '#b5583f', '#a9533e']).map((c) => new THREE.Color(c));
  const GAL = ['#8c7c6a', '#a3907a', '#7a6e62', '#c4aa82', '#d6bd94', '#b59b7a', '#c86a40', '#9a8672'].map((c) => new THREE.Color(c));
  const RESP = [0.11, 0.11, 0.11, 0.1, 0.1, 0.08, 0.06, 0.05, 0.04, 0.12, 0.12]; // weights
  // wm3 LOD: every 500 m chunk also gets a cheap far version (plain prisms, roof colour on top, tiny sheds dropped), swapped in by distance
  const farChunks = new Map<number, Builder>(), LODD = QS.get('lod') === '0' ? 1e9 : narrow ? 1800 : 2400;
  for (const b of S.buildings) {
    let B = chunks.get(b.c); if (!B) { B = new Builder(); B.tex = !!FAC; chunks.set(b.c, B); }
    { let F = farChunks.get(b.c); if (!F) { F = new Builder(); farChunks.set(b.c, F); }
      const r0 = b.p[0]?.[0]; const ar = r0 ? Math.abs(ringArea(r0)) : 0;
      if (r0 && (ar > 30 || b.h > 12)) { let fl = 1e9, fsx = 0, fsz = 0; if (TER) for (let i = 0; i < r0.length; i += 2) { fl = Math.min(fl, H(r0[i], r0[i + 1])); fsx += r0[i]; fsz += r0[i + 1]; } const fg = TER ? H(fsx / (r0.length / 2), fsz / (r0.length / 2)) : 0, fb = (b.m > 0 ? fg + b.m : TER ? fl - 0.5 : 0); // wm6: same ground rule as the near LOD
        const wc = wallC[b.w % wallC.length], tc = b.hip ? roofC[b.r % (roofC.length - 1)] : flatC[b.r % flatC.length];
        let fp: Poly = b.p[0];
        if (b.hip && r0.length > 8) { const [hx, hz, ha, hL, hW] = b.hip, ux = Math.cos(ha) * hL / 2, uz = Math.sin(ha) * hL / 2, vx = -Math.sin(ha) * hW / 2, vz = Math.cos(ha) * hW / 2;
          fp = [[hx - ux - vx, hz - uz - vz, hx + ux - vx, hz + uz - vz, hx + ux + vx, hz + uz + vz, hx - ux + vx, hz - uz + vz]]; if (ringArea(fp[0]) * ringArea(r0) < 0) fp[0] = [fp[0][6], fp[0][7], fp[0][4], fp[0][5], fp[0][2], fp[0][3], fp[0][0], fp[0][1]]; } // oriented box from the roof frame
        else if (r0.length > 10) fp = [dpRing(r0, narrow ? 3 : 2)];
        prism(F, [fp], fb, fg + b.h + (b.hip ? 1.5 : 0), wc, tc); } }
    let gc = 0, gmin = 0;
    if (TER && b.p[0]?.[0]) {
      const r = b.p[0][0]; let sx = 0, sz = 0, n = 0; gmin = 1e9;
      for (let i = 0; i < r.length; i += 2) { sx += r[i]; sz += r[i + 1]; n++; gmin = Math.min(gmin, H(r[i], r[i + 1])); }
      gc = H(sx / n, sz / n); gmin -= 0.5;
    }
    const base = b.m > 0 ? gc + b.m : gmin, top = gc + b.h;
    if (STEP < 2) { prism(B, b.p, base, top, plainWall, plainTop); continue; }
    bi++;
    let w = C ? jitter(wallC[(b.w + bi) % wallC.length], bi, 0.7) : wallC[b.w];
    let kind = C ? (b.k ?? (b.hip ? 1 : 0)) : (b.hip ? 1 : 0);
    if (FAC) {
      const rg = b.p[0]?.[0] || [0, 0]; let sx = 0, sz = 0; for (let i = 0; i < rg.length; i += 2) { sx += rg[i]; sz += rg[i + 1]; }
      const lx = sx / (rg.length / 2), lz = sz / (rg.length / 2), lat = S.origin[1] - lz / 110574;
      const old = lat < 41.0195, core = Math.hypot(lx - sa[0], lz - sa[1]) < 900;
      const modern = kind === 4 || b.h >= 19 || (kind === 0 && b.h >= 12), r = hs(bi * 2.3);
      B.wl = modern ? 2 : old ? (r < 0.06 && b.h < 12 ? 1 : r < 0.12 ? 4 : r < 0.17 ? 5 : 0) : (r < 0.45 ? 3 : r < 0.6 ? 5 : 0);
      B.rl = b.g ? 7 : 6; B.base = base; B.wh = top - base; B.seed = Math.floor(hs(bi * 1.7) * 997) / 10;
      const gal = Math.hypot(lx - gk[0], lz - gk[1]) < 750;
      const resi = !core && b.h >= 11 && B.wl !== 4 && B.wl !== 5;
      B.st = (resi ? 8 : 0) + (resi && hs(bi * 4.1) < 0.55 ? 1 : 0) + (resi && hs(bi * 5.9) < 0.3 ? 2 : 0) + (b.h >= 6 && hs(bi * 6.7) < (resi ? 0.6 : old ? 0.3 : 0.5) ? 4 : 0);
      if (resi) {
        let q = hs(bi * 8.3), k = 0; while (k < RES.length - 1 && q > RESP[k]) { q -= RESP[k]; k++; }
        w = jitter(RES[k], bi, 0.5);
        // street_02: residential apartment blocks are mostly flat-roofed (grey-beige, no tiles)
        if (COL ? (b.h >= 18 && !old && !gal && kind !== 0 && hs(bi * 9.7) < 0.7) : (b.h >= 14 && kind !== 0 && hs(bi * 9.7) < 0.7)) { kind = 4; B.rl = 2; }
      }
      if (COL && !old && !modern && kind >= 1 && kind <= 5) { // Karaköy roof mix: ~50% tile, ~35-40% flat with clutter, ~10% grey metal
        const r2 = hs(bi * 17.3);
        if (r2 < 0.12) { b.g = 1; B.rl = 7; } else { b.g = 0; B.rl = 6; if (r2 < 0.32) { kind = 4; B.rl = 2; } }
      }
      if (COL && gal && !modern) { // Galata side-street photo: deeper brown-grey stone and warm sand, some orange/terracotta render
        const q = hs(bi * 10.9);
        w = jitter(GAL[Math.floor(hs(bi * 11.3) * GAL.length)], bi, 0.5);
        if (q < 0.55) B.wl = hs(bi * 13.1) < 0.6 ? 3 : 4;
      }
    }
    if ((b as any).col) { w = new THREE.Color((b as any).col); if (FAC) { B.wl = 0; B.st = 0; B.rl = 2; } } // wm10: Dolmabahçe white palace walls
    if (b.hip && kind >= 1 && kind <= 3) {
      let rc = C ? jitter(roofC[(b.r + (bi % 3 === 0 ? 1 : 0)) % (roofC.length - 1)], bi + 7) : roofC[b.r % roofC.length];
      if (COL && !b.g) { rc = jitter(roofC[(b.r + bi) % (roofC.length - 1)], bi + 7, 1.4); if (hs(bi * 12.7) < 0.14) rc.lerp(new THREE.Color('#9a8a80'), 0.3); }
      if (C && b.g) rc = jitter(METAL[bi % METAL.length], bi + 11, 0.6);
      if (C && FIT) {
        prism(B, b.p, base, top, w, null);
        const lower = kind === 3 && !b.g ? jitter(METAL[(bi >> 2) % METAL.length], bi + 5, 0.6) : rc;
        const hAt = fittedRoof(B, b.p, b.hip, kind, top, lower, kind === 3 ? rc.clone().multiplyScalar(0.9) : rc, w, b.g ? -1 : 7);
        addRoofBits(b, bi, kind, top, hAt);
      } else {
        prism(B, b.p, base, top, w, flatC[0]);
        if (kind === 2) gableRoof(B, b.hip, top, rc, w);
        else if (kind === 3) mansardRoof(B, b.hip, top, C && !b.g ? jitter(METAL[(bi >> 2) % METAL.length], bi + 5, 0.6) : rc, rc.clone().multiplyScalar(0.9));
        else hipRoof(B, b.hip, top, rc);
      }
    } else if (C && FIT && kind === 5 && b.bd && b.in) {
      prism(B, b.p, base, top, w, null);
      const rc = b.g ? jitter(METAL[bi % METAL.length], bi + 11, 0.6) : jitter(roofC[b.r % (roofC.length - 1)], bi + 7);
      bandRoof(B, b.bd, b.in, top, b.rh || 2, rc, jitter(flatC[b.r % flatC.length], bi + 3));
    } else if (C && kind === 4) {
      // flat roof with a parapet: walls run 0.9 m past the roof, the roof sits inside (material is double-sided)
      prism(B, b.p, base, top + 0.9, w, null);
      B.rl = 2;
      for (const p of b.p) cap(B, p, top, jitter(flatC[b.r % flatC.length], bi + 3));
      if (COL) roofBoxes(b, bi, top);
    }
    else { B.rl = 2; if (COL && b.h >= 9) roofBoxes(b, bi, top); prism(B, b.p, base, top, w, C ? jitter(flatC[b.r % flatC.length], bi + 3) : flatC[b.r % flatC.length]); }
  }
  const lmat = new THREE.MeshLambertMaterial({ vertexColors: true, side: C ? THREE.DoubleSide : THREE.FrontSide });
  const bmat = new THREE.MeshLambertMaterial({ vertexColors: true, side: C ? THREE.DoubleSide : THREE.FrontSide });
  if (chim.length || dorm.length) {
    const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1), up = new THREE.Vector3(0, 1, 0), ps = new THREE.Vector3();
    const chG = new THREE.BoxGeometry(0.8, 2.2, 0.8).translate(0, 0.6, 0);
    const chM = new THREE.InstancedMesh(chG, new THREE.MeshLambertMaterial({ color: '#b98068' }), chim.length);
    chim.forEach((c, i) => { q.setFromAxisAngle(up, -c[3]); mtx.compose(ps.set(c[0], c[1], c[2]), q, one); chM.setMatrixAt(i, mtx); });
    chM.castShadow = chM.receiveShadow = true; chM.computeBoundingSphere(); scene.add(chM); DET.push(chM);
    // dormer: a small box with its own little gable roof, facing down-slope (+t side of the building frame)
    const body = new THREE.BoxGeometry(1.7, 1.6, 2.0).translate(0, 0.5, 0.3);
    const rf = new THREE.BufferGeometry(); const w2 = 1.05, y0 = 1.3, y1 = 2.1, z0 = -0.8, z1 = 1.45;
    rf.setAttribute('position', new THREE.Float32BufferAttribute([-w2, y0, z0, -w2, y0, z1, 0, y1, z1, -w2, y0, z0, 0, y1, z1, 0, y1, z0, w2, y0, z1, w2, y0, z0, 0, y1, z0, w2, y0, z1, 0, y1, z0, 0, y1, z1, -w2, y0, z1, w2, y0, z1, 0, y1, z1].map((v) => v), 3)); rf.computeVertexNormals();
    const dB = new THREE.InstancedMesh(body, new THREE.MeshLambertMaterial({ color: '#efe1bd' }), dorm.length);
    const dR = new THREE.InstancedMesh(rf, new THREE.MeshLambertMaterial({ color: '#c8703c', side: THREE.DoubleSide }), dorm.length);
    // local +z of the dormer must point along the building's +t axis (v = (-sin, cos)); rotate about y accordingly
    dorm.forEach((c, i) => { q.setFromAxisAngle(up, -c[3]); mtx.compose(ps.set(c[0], c[1] - 0.4, c[2]), q, one); dB.setMatrixAt(i, mtx); dR.setMatrixAt(i, mtx); });
    for (const m of [dB, dR]) { m.castShadow = m.receiveShadow = true; m.computeBoundingSphere(); scene.add(m); DET.push(m); }
    (window as any).__bits = { chimneys: chim.length, dormers: dorm.length };
  }
  if (boxes.length) {
    const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1), up = new THREE.Vector3(0, 1, 0), ps = new THREE.Vector3();
    const geo = [new THREE.BoxGeometry(1.7, 1.4, 1.7).translate(0, 0.7, 0), new THREE.BoxGeometry(2.6, 2.3, 2.2).translate(0, 1.15, 0), new THREE.SphereGeometry(2.6, 12, 5, 0, Math.PI * 2, 0, Math.PI / 2)];
    const col = ['#a9a8a6', '#cfc4b4', '#8794a4']; // tanks, stair huts, small lead domes
    for (let k = 0; k < 3; k++) {
      const list = boxes.filter((b) => b[3] === k); if (!list.length) continue;
      const im = new THREE.InstancedMesh(geo[k], new THREE.MeshLambertMaterial({ color: col[k] }), list.length);
      list.forEach((b, i) => { q.setFromAxisAngle(up, b[4]); mtx.compose(ps.set(b[0], b[1], b[2]), q, one); im.setMatrixAt(i, mtx); });
      im.castShadow = im.receiveShadow = true; im.computeBoundingSphere(); scene.add(im); DET.push(im);
    }
    (window as any).__boxes = boxes.length;
  }
  for (const [ck, B] of chunks) {
    const g = B.geometry(); g.computeBoundingSphere(); const c = g.boundingSphere!.center.clone();
    const m = new THREE.Mesh(g, FAC ? FAC.mat : bmat); m.castShadow = m.receiveShadow = STEP >= 2;
    const F = farChunks.get(ck);
    if (!F || !F.pos.length || LODD > 1e8) { scene.add(m); continue; }
    g.translate(-c.x, -c.y, -c.z); const fg = F.geometry(); const SP = superOf(c.x, c.z, x0, z0); SP.bld.push(fg.clone()); fg.translate(-c.x, -c.y, -c.z);
    const fm = new THREE.Mesh(fg, lmat); fm.receiveShadow = STEP >= 2;
    const lod = new THREE.LOD(); lod.position.copy(c); lod.addLevel(m, 0); lod.addLevel(fm, LODD); scene.add(lod); SP.members.push(lod);
  }
  LODG = LODD;
  for (const SP of SUPERS.values()) if (SP.bld.length > 1) {
    const mg = mergeGeometries(SP.bld); SP.bld.forEach((q) => q.dispose()); SP.bld = []; if (!mg) continue;
    mg.computeBoundingSphere(); SP.c.copy(mg.boundingSphere!.center); SP.r = mg.boundingSphere!.radius;
    const mm = new THREE.Mesh(mg, lmat); mm.receiveShadow = STEP >= 2; mm.visible = false; scene.add(mm); SP.merged.push(mm);
  } else SP.merged = [];
  (window as any).__lod = { far: LODD, chunks: chunks.size };

  mark('before_trees');
  // trees (step 4): instanced low-poly round trees in autumn colours, one instanced mesh per 500 m chunk so far chunks get culled
  if (STEP >= 4 && COL && QS.get('xtrees') !== '0') { // ?xtrees=0: no added trees (perf test)
    const extra: number[][] = [], src = S.trees.slice();
    for (let k = 0; k < src.length; k++) { // park clusters: a neighbour next to most trees, and bigger trees
      const t = src[k]; t[2] *= 1.15 + 0.4 * hs(k * 1.3);
      if (t[4] === 2) { t.length = 4; continue; } // placed trees in and next to Topkapı (scene.json flag): no cluster neighbour, keeps the clear ring
      if (hs(k * 2.1) < 0.6) { const a = hs(k * 3.3) * 6.283, r = 4 + 3 * hs(k * 4.7); extra.push([t[0] + Math.cos(a) * r, t[1] + Math.sin(a) * r, 0.9 + 0.5 * hs(k * 5.9), (t[3] + 1 + k) % 9]); }
    }
    // spatial hash of building rings to keep new trees off buildings
    const G = new Map<number, number[][]>(), cell = 40, key = (x: number, z: number) => Math.floor(x / cell) * 100003 + Math.floor(z / cell);
    for (const b of S.buildings) { const r = b.p[0]?.[0]; if (!r) continue; let mx = 1e9, Mx = -1e9, mz = 1e9, Mz = -1e9; for (let i = 0; i < r.length; i += 2) { mx = Math.min(mx, r[i]); Mx = Math.max(Mx, r[i]); mz = Math.min(mz, r[i + 1]); Mz = Math.max(Mz, r[i + 1]); }
      for (let gx = Math.floor(mx / cell); gx <= Math.floor(Mx / cell); gx++) for (let gz = Math.floor(mz / cell); gz <= Math.floor(Mz / cell); gz++) { const kk = gx * 100003 + gz; (G.get(kk) || G.set(kk, []).get(kk)!).push(r); } }
    const onB = (x: number, z: number, pad: number) => { for (const [dx, dz] of [[0, 0], [pad, 0], [-pad, 0], [0, pad], [0, -pad]]) for (const r of G.get(key(x + dx, z + dz)) || []) if (pip(r, x + dx, z + dz)) return true; return false; };
    // courtyards: holes in building footprints
    let ci = 0;
    for (const b of S.buildings) for (const poly of b.p) for (let h = 1; h < poly.length; h++) {
      const r = poly[h], a = Math.abs(ringArea(r)); if (a < 80) continue;
      let sx = 0, sz = 0; for (let i = 0; i < r.length; i += 2) { sx += r[i]; sz += r[i + 1]; }
      const cx = sx / (r.length / 2), cz = sz / (r.length / 2), n = Math.min(4, 1 + Math.floor(a / 250)), rr = Math.sqrt(a) * 0.25;
      for (let q = 0; q < n; q++) { ci++; const an = hs(ci * 1.9) * 6.283, x = cx + Math.cos(an) * rr * (q ? 1 : 0), z = cz + Math.sin(an) * rr * (q ? 1 : 0); if (pip(r, x, z)) extra.push([x, z, 0.85 + 0.35 * hs(ci), ci % 9]); }
    }
    // street trees along the edges of major and minor roads
    const WB = S.water.map((p) => { const r = p[0]; let a = 1e9, b = 1e9, c = -1e9, d = -1e9; for (let i = 0; i < r.length; i += 2) { a = Math.min(a, r[i]); c = Math.max(c, r[i]); b = Math.min(b, r[i + 1]); d = Math.max(d, r[i + 1]); } return [a, b, c, d]; });
    const inWater = (x: number, z: number) => S.water.some((p, k) => { const B = WB[k]; if (x < B[0] || x > B[2] || z < B[1] || z > B[3]) return false;
      let ins = false; for (const r of p) for (let i = 0, j = r.length - 2; i < r.length; j = i, i += 2) { if ((r[i + 1] > z) !== (r[j + 1] > z) && x < ((r[j] - r[i]) * (z - r[i + 1])) / (r[j + 1] - r[i + 1]) + r[i]) ins = !ins; } return ins; }); // no street trees on bridge decks
    let si = 0;
    for (const [cls, stepM] of [['major', 13], ['minor', 17]] as [string, number][]) for (const poly of S.roads[cls] || []) {
      const r = poly[0], sg = ringArea(r) > 0 ? 1 : -1;
      for (let i = 0; i < r.length; i += 2) {
        const j = (i + 2) % r.length, ex = r[j] - r[i], ez = r[j + 1] - r[i + 1], L = Math.hypot(ex, ez); if (L < 4) continue;
        const nx = (ez / L) * sg, nz = (-ex / L) * sg; // outward normal
        for (let d = stepM * 0.5; d < L; d += stepM) {
          si++; if (hs(si * 1.7) > 0.65) continue;
          const x = r[i] + ex * (d / L) + nx * 2.6, z = r[i + 1] + ez * (d / L) + nz * 2.6;
          if (!onB(x, z, 2.5) && !inWater(x, z)) extra.push([x, z, 0.75 + 0.35 * hs(si * 2.3), si % 9]);
        }
      }
    }
    S.trees = src.concat(extra.filter((_, k) => k % 2 === 0).map((t) => [t[0], t[1], t[2], t[3], 1])); // half of the candidates; t[4]=1 marks an added tree (no shadow, thinned when far)
    (window as any).__trees = S.trees.length;
  }
  if (KC) S.trees = S.trees.filter((t) => !inKC(t[0], t[1]));
  { const RR = (window as any).__dolmaRings as number[][] | undefined; if (RR) { const n0 = S.trees.length; // wm10: no trees through the palace roofs
      const inR = (r: number[], x: number, z: number) => { let c = false; for (let i = 0, j = r.length - 2; i < r.length; j = i, i += 2) if ((r[i + 1] > z) !== (r[j + 1] > z) && x < ((r[j] - r[i]) * (z - r[i + 1])) / (r[j + 1] - r[i + 1]) + r[i]) c = !c; return c; };
      const NX = Math.sin(0.55), NZ = Math.cos(0.55), V: number[][] = []; for (const r of RR) for (let i = 0; i < r.length; i += 2) V.push([r[i] * NZ - r[i + 1] * NX, r[i] * NX + r[i + 1] * NZ]); // (along-shore, seaward) per palace vertex
      const seaward = (x: number, z: number) => { const u = x * NZ - z * NX, sv = x * NX + z * NZ; let m = -1e9; for (const v of V) if (Math.abs(v[0] - u) < 30) m = Math.max(m, v[1]); return m > -1e9 && sv > m - 2; };
      S.trees = S.trees.filter((t) => !(inDH(t[0], t[1]) && (t[4] === 1 || seaward(t[0], t[1]))) && !RR.some((r) => inR(r, t[0], t[1]))); /* + no generated fill trees on the palace terrace (OSM garden trees stay) */ (window as any).__dolmaTrees = n0 - S.trees.length; } }
  // wm9: taksim_tree_filter disabled (t130u: meydandaki ağaçlar sorun değil)

  if (STEP >= 4 && S.trees.length) {
    const trunkG = new THREE.CylinderGeometry(0.3, 0.42, 3.2, 5).translate(0, 1.6, 0);
    const crownG = new THREE.IcosahedronGeometry(3.3, 0).translate(0, 5.6, 0);
    const farCrownG = new THREE.OctahedronGeometry(3.6, 0).translate(0, 5.6, 0); // one lump: a two-lump crown cost too much on the desktop overview
    const trunkM = new THREE.MeshLambertMaterial({ color: '#7a5a3c' }), crownM = new THREE.MeshLambertMaterial({ flatShading: true });
    const AUT = (C ? C.trees : ['#d9822b', '#e6ad3c', '#b8532c', '#8f9d3e', '#c96f2d']).map((c) => new THREE.Color(c));
    const groups = new Map<number, number[][]>();
    for (const t of S.trees) { const k = Math.floor((t[0] - x0) / 500) + 1000 * Math.floor((t[1] - z0) / 500) + (t[4] === 1 ? 1e7 : 0); (groups.get(k) || groups.set(k, []).get(k)!).push(t); }
    const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), ps = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
    let i = 0;
    for (const ts of groups.values()) {
      const xt = !!ts[0][4];
      if (xt) ts.sort((a, b) => hs(a[0] * 0.37 + a[1] * 0.71) - hs(b[0] * 0.37 + b[1] * 0.71)); // shuffled so thinning keeps an even spread
      const trunk = new THREE.InstancedMesh(trunkG, trunkM, ts.length), crown = new THREE.InstancedMesh(crownG, crownM, ts.length);
      // wm3 LOD: far = every 2nd tree as an 8-triangle crown, no trunk; instances are relative to the group centre
      let gx = 0, gz = 0; for (const t of ts) { gx += t[0]; gz += t[1]; } gx /= ts.length; gz /= ts.length;
      const far = new THREE.InstancedMesh(farCrownG, crownM, Math.ceil(ts.length / 2)); let fk = 0;
      ts.forEach((t, k) => {
        i++; const s = t[2]; ps.set(t[0] - gx, H(t[0], t[1]), t[1] - gz); q.setFromAxisAngle(up, (i * 2.39996) % 6.283);
        sc.set(s, s * (0.9 + (i % 5) * 0.06), s); mtx.compose(ps, q, sc);
        const cc = C ? jitter(AUT[(t[3] + i) % AUT.length], i, 0.8) : AUT[t[3] % AUT.length];
        trunk.setMatrixAt(k, mtx); crown.setMatrixAt(k, mtx); crown.setColorAt(k, cc);
        if (k % 2 === 0) { far.setMatrixAt(fk, mtx); far.setColorAt(fk, cc); fk++; }
      });
      trunk.computeBoundingSphere(); crown.computeBoundingSphere(); far.computeBoundingSphere();
      crown.castShadow = !xt; crown.receiveShadow = true; trunk.castShadow = false; far.receiveShadow = true;
      if (xt) XT.push([trunk, crown, ts.length]);
      const near = new THREE.Group(); if (COL && narrow) near.add(crown); else near.add(trunk, crown);
      const tl = new THREE.LOD(); tl.position.set(gx, 0, gz); tl.addLevel(near, 0); tl.addLevel(far, LODD * 0.8); scene.add(tl);
      { const SP = superOf(gx, gz, x0, z0); SP.members.push(tl); const mw = new THREE.Matrix4(), off = new THREE.Matrix4().makeTranslation(gx, 0, gz), cc = new THREE.Color();
        for (let k = 0; k < fk; k += narrow ? 2 : 1) { far.getMatrixAt(k, mw); far.getColorAt(k, cc); SP.trees.push({ m: off.clone().multiply(mw), c: cc.clone() }); } }
    }
  }

  for (const SP of SUPERS.values()) if (SP.trees.length && SP.members.length > 1) {
    const im = new THREE.InstancedMesh(new THREE.OctahedronGeometry(3.6, 0).translate(0, 5.6, 0), new THREE.MeshLambertMaterial({ flatShading: true }), SP.trees.length);
    SP.trees.forEach((t, k) => { im.setMatrixAt(k, t.m); im.setColorAt(k, t.c); }); im.computeBoundingSphere(); im.receiveShadow = true; im.visible = false; scene.add(im); SP.merged.push(im);
    if (!SP.r) { SP.c.copy(im.boundingSphere!.center); SP.r = im.boundingSphere!.radius; }
    SP.trees = [];
  }
  mark('before_landmarks');
  // landmarks (step 6)
  if (STEP >= 6) {
    for (const L of S.landmarks) {
      const B = new Builder(); B.tex = !!FAC;
      L.prims.forEach((p, pi) => {
        B.seed = hs(pi * 3.1 + L.label[0]) * 100;
        if (p.t === 'lathe') { lathe(B, p); return; }
        const col = new THREE.Color(p.col);
        B.wl = p.tx ?? 8; B.rl = p.t === 'pave' ? 10 : p.tx ?? 8; B.base = p.z0; B.ridge = 0;
        if (p.t === 'prism') { B.wh = p.z1! - p.z0; B.st = p.st || 128; prism(B, p.p!, p.z0, p.z1!, col, col.clone().multiplyScalar(0.95)); }
        else if (p.t === 'pave') { for (const q of p.p!) cap(B, q, p.z0, col); }
        else if (p.t === 'lowroof') { B.rl = 9; B.wh = 0.8; B.st = 128; prism(B, p.p!, p.z0, p.z0 + 0.8, C ? col.set('#7b8a9c') : col, col); }
      });
      const lg = H(L.label[0], L.label[1]);
      if (L.prims.length) { const m = new THREE.Mesh(B.geometry().translate(0, lg, 0), FAC ? FAC.mat : lmat); m.castShadow = m.receiveShadow = true; scene.add(m); }
      if (L.model && L.id === 'ayasofya') { // Grokisual's finished Hagia Sophia v6.2 (today state) as a glTF asset; anchor in models/ayasofya.anchor.json
        const aya = await buildAyasofya({ base: MAP, project: P, groundY: H, lodDistance: 900 * (WALLS ? 1 / FOVK : 1) });
        scene.add(aya.object); (window as any).__aya = { lodTriangles: aya.triangles, at: [Math.round(aya.object.position.x * 10) / 10, Math.round(aya.object.position.z * 10) / 10] };
      }
      if (L.model && L.id === 'sultanahmet') { // Sultanahmet Camii toy model (dome cascade) built from OSM; anchor in models/sultanahmet.anchor.json
        const sa = await buildSultanahmet({ base: MAP, project: P, groundY: H, lodDistance: 800 * (WALLS ? 1 / FOVK : 1) });
        scene.add(sa.object); (window as any).__lm = { ...((window as any).__lm || {}), sultanahmet: { lodTriangles: sa.triangles, at: [Math.round(sa.object.position.x * 10) / 10, Math.round(sa.object.position.z * 10) / 10] } };
      }
      if (L.model && (L.id === 'yenicami' || L.id === 'rustempasa' || L.id === 'galata' || L.id === 'nusretiye' || L.id === 'ayatriada' || L.id === 'stantoine')) { // toy models built from OSM; anchors in models/{id}.anchor.json
        const XO = ['nusretiye', 'ayatriada', 'stantoine'].includes(L.id);
        const lm = await (XO ? (o: Parameters<typeof buildGalata>[0]) => buildExtra(L.id, o) : L.id === 'yenicami' ? buildYeniCami : L.id === 'galata' ? buildGalata : buildRustemPasa)({ base: MAP, project: P, groundY: H, lodDistance: 700 * (WALLS ? 1 / FOVK : 1) });
        scene.add(lm.object); (window as any).__lm = { ...((window as any).__lm || {}), [L.id]: { lodTriangles: lm.triangles, at: [Math.round(lm.object.position.x * 10) / 10, Math.round(lm.object.position.z * 10) / 10] } };
      }
      if (L.model && L.id === 'topkapi') { // Topkapı Sarayı (present-day, toy style) built from OSM; anchor in models/topkapi.anchor.json; walls included, court trees in scene.json
        const tk = await buildTopkapi({ base: MAP, project: P, groundY: H, lodDistance: 700 * (WALLS ? 1 / FOVK : 1) });
        if (TER) { // wm7: inside the platform one flat level (no bending); outside (first court, outer walls) on the ground. Was wm6 per-vertex drape; now flat platform TK_HP + ground outside. wm6: drape the palace on the Sarayburnu hill: every vertex moves by (ground under it - ground at the anchor); was one flat level = 48 m above the shore
          tk.object.updateMatrixWorld(true); const a0 = tk.object.position.y, Vw = new THREE.Vector3(), seen = new Set<THREE.BufferGeometry>();
          tk.object.traverse((m: any) => { if (!m.isMesh || seen.has(m.geometry)) return; seen.add(m.geometry); const g = m.geometry as THREE.BufferGeometry, pa = g.attributes.position, sy = new THREE.Vector3().setFromMatrixScale(m.matrixWorld).y || 1;
            const out = new Float32Array(pa.count * 3); for (let i = 0; i < pa.count; i++) { Vw.fromBufferAttribute(pa, i); const lx = Vw.x, ly = Vw.y, lz = Vw.z; Vw.applyMatrix4(m.matrixWorld); out[i * 3] = lx; out[i * 3 + 1] = ly + ((inTK(Vw.x, Vw.z) ? TK_HP : H(Vw.x, Vw.z)) - a0) / sy; out[i * 3 + 2] = lz; }
            g.setAttribute('position', new THREE.BufferAttribute(out, 3)); g.computeBoundingBox(); g.computeBoundingSphere(); }); }
        if (TER) { // wm7: tall stone retaining walls along the platform edge where the hill drops (Sarayburnu/Gülhane/sea side), parapet 1.2 m, foundation 2.5 m
          const R = TK_PLAT, segs: number[][] = [];
          for (let i = 0, j = R.length - 2; i < R.length; j = i, i += 2) { const ax = R[j], az = R[j + 1], bx = R[i], bz = R[i + 1], L = Math.hypot(bx - ax, bz - az), n = Math.max(1, Math.round(L / 6));
            let nx = (bz - az) / L, nz = -(bx - ax) / L; const mx = (ax + bx) / 2, mz = (az + bz) / 2; if (inTK(mx + nx * 3, mz + nz * 3)) { nx = -nx; nz = -nz; }
            for (let k = 0; k < n; k++) { const t = (k + 0.5) / n, x = ax + (bx - ax) * t + nx * 1.4, z = az + (bz - az) * t + nz * 1.4;
              const lo = Math.min(H(x + nx * 2, z + nz * 2), H(x, z), Hraw(x - (bx - ax) / n * 0.5, z - (bz - az) / n * 0.5), Hraw(x + (bx - ax) / n * 0.5, z + (bz - az) / n * 0.5));
              if (TK_HP - lo < 1) continue; segs.push([x, z, L / n + 0.6, lo - 2.5, TK_HP + 1.2, Math.atan2(-(bz - az), bx - ax)]); } }
          const im = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial({ color: '#cbbda2' }), segs.length); im.name = 'aud:wall';
          const M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(); segs.forEach((q, i) => { Q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), q[5]); M4.compose(new THREE.Vector3(q[0], (q[3] + q[4]) / 2, q[1]), Q, new THREE.Vector3(q[2], q[4] - q[3], 2.8)); im.setMatrixAt(i, M4); });
          im.castShadow = im.receiveShadow = true; scene.add(im); (window as any).__tkWalls = { n: segs.length, maxH: Math.round(Math.max(0, ...segs.map((q) => TK_HP - q[3] - 2.5))) };
        }
        if (TER) { // wm8: Dolmabahçe terrace retaining / quay lip (inland drop + sea lip); no new palace geometry
          const R = DH_PLAT, segs: number[][] = [];
          for (let i = 0, j = R.length - 2; i < R.length; j = i, i += 2) { const ax = R[j], az = R[j + 1], bx = R[i], bz = R[i + 1], L = Math.hypot(bx - ax, bz - az) || 1, n = Math.max(1, Math.round(L / 8));
            let nx = (bz - az) / L, nz = -(bx - ax) / L; const mx = (ax + bx) / 2, mz = (az + bz) / 2; if (inDH(mx + nx * 3, mz + nz * 3)) { nx = -nx; nz = -nz; }
            for (let k = 0; k < n; k++) { const t = (k + 0.5) / n, x = ax + (bx - ax) * t, z = az + (bz - az) * t;
              const outH = Hraw(x + nx * 6, z + nz * 6);
              if (outH - DH_HP > 2) segs.push([x, z, L / n + 0.5, DH_HP - 2.5, outH + 0.6, Math.atan2(-(bz - az), bx - ax)]); // inland retaining: foundation into terrace
              else if (DH_HP - outH > 1) segs.push([x, z, L / n + 0.5, DH_HP - 2.5, DH_HP + 1.1, Math.atan2(-(bz - az), bx - ax)]); } } // quay parapet on the terrace

          if (segs.length) { const im = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial({ color: '#d8d2c4' }), segs.length); im.name = 'aud:wall';
            const M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(); segs.forEach((q, i) => { Q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), q[5]); M4.compose(new THREE.Vector3(q[0], (q[3] + q[4]) / 2, q[1]), Q, new THREE.Vector3(q[2], Math.max(1.2, q[4] - q[3]), 1.8)); im.setMatrixAt(i, M4); });
            im.castShadow = im.receiveShadow = true; scene.add(im); (window as any).__dhWalls = { n: segs.length }; }
        }
        try { const dome = (window as any).__dolmaDome as { x: number; z: number; r: number; y0: number; y1: number }[] | undefined; // wm9 Muayede dome (yaklaşık)
          if (dome && dome.length) { const B = new Builder(); const lead = new THREE.Color('#7a858f');
            for (const d of dome) { const y0 = DH_HP + d.y0, y1 = DH_HP + d.y1, n = 14;
              for (let i = 0; i < n; i++) { const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2;
                const x0 = d.x + Math.cos(a0) * d.r, z0 = d.z + Math.sin(a0) * d.r, x1 = d.x + Math.cos(a1) * d.r, z1 = d.z + Math.sin(a1) * d.r;
                B.tri([x0, y0, z0], [x1, y1, z1], [x1, y0, z1], lead); B.tri([x0, y0, z0], [x0, y1, z0], [x1, y1, z1], lead); // wm10: outward winding (was inside-out = black hole)
                B.tri([x0, y1, z0], [d.x, y1 + (y1 - y0) * 0.15, d.z], [x1, y1, z1], lead); } }
            const m = new THREE.Mesh(B.geometry(), new THREE.MeshLambertMaterial({ vertexColors: true })); m.castShadow = m.receiveShadow = true; scene.add(m); }
        } catch { /* optional */ }
        scene.add(tk.object); (window as any).__lm = { ...((window as any).__lm || {}), topkapi: { lodTriangles: tk.triangles, at: [Math.round(tk.object.position.x * 10) / 10, Math.round(tk.object.position.z * 10) / 10] } };
      }
      { const AZ: Record<string, number> = { ayasofya: 2.6, sultanahmet: 0.9, suleymaniye: 3.9, yenicami: 3.6, galata: 0.4, topkapi: 0.8, nusretiye: 0.6, ayatriada: 2.7, stantoine: 4.75 }; // close landmark views for comparison shots
        VIEWS['lm_' + L.id] = { t: [L.label[0], L.label[1]], d: L.id === 'galata' ? 240 : ['nusretiye', 'ayatriada', 'stantoine'].includes(L.id) ? 150 : 360, pol: 1.15, y: L.id === 'topkapi' ? 5 : L.id === 'galata' ? 30 : ['nusretiye', 'ayatriada', 'stantoine'].includes(L.id) ? 12 : 24, az: AZ[L.id] ?? 0 }; 
        if (L.id === 'ayasofya') { VIEWS.hd_apse = { t: [117, 1675], d: 95, pol: 0.95, y: 14, az: 0.98 }; VIEWS.hd_apse_s = { t: [117, 1675], d: 95, pol: 0.95, y: 14, az: 1.9 }; VIEWS.hd_pilot = { t: [95, 1662], d: 230, pol: 0.85, y: 20, az: 2.9 }; } // half-dome fix check views (apse from E, from SE, pilot-like oblique)
        if (L.id === 'stantoine') { VIEWS.sa_top = { t: [-172.4, -977.5], d: 215, pol: 0.02, y: 0, az: -1.897 }; VIEWS.sa_obl = { t: [-155.3, -971.7], d: 150, pol: 0.82, y: 8, az: -1.254 }; } // Sent Antuan v2 compare views: top-down like Doğancan's photo 3 (İstiklal at the bottom), oblique like photo 1
        if (L.id === 'topkapi') VIEWS.tk_wide = { t: [395, 1245], d: 820, pol: 0.95, y: 5, az: 0.8 }; }
      addLabel(L.name, L.label[0], L.label[2] + lg, L.label[1], L.id === 'rustempasa' ? 'w' : L.id === 'yenicami' ? 'e' : L.id === 'ayatriada' ? 'below' : ''); // neighbours: Rüstem Paşa's label hangs left, Yeni Cami's right, so they don't overlap in the overview
    }
  }
  addLabel('Taksim', tk[0], 5 + H(tk[0], tk[1]), tk[1], 'area');

  if (STEP >= 5) {
    const inp = document.getElementById('hour') as HTMLInputElement;
    if (LOOK && !QS.get('hour')) inp.value = String(HOUR0);
    if (QS.get('hour')) inp.value = QS.get('hour')!;
    document.getElementById('tod')!.hidden = true;
    inp.addEventListener('input', () => setHour(Number(inp.value)));
    setHour(Number(inp.value));
  }
  document.getElementById('loading')!.remove();
  // wm6 Bozdoğan Kemeri (Valens Aqueduct): piers stand on the terrain one by one, the water channel (deck) stays level; two tiers, yaklaşık
  try { const AQ = await (await fetch(`${MAP}data/aqueduct.json`)).json(); const L = AQ.line as number[][], SP = 13.5, pts: number[][] = [];
    for (let i = 0; i < L.length - 1; i++) { const [ax, az] = L[i], [bx, bz] = L[i + 1], d = Math.hypot(bx - ax, bz - az); if (d > 60) continue; const n = Math.max(1, Math.round(d / SP));
      for (let k = 0; k < n; k++) pts.push([ax + (bx - ax) * k / n, az + (bz - az) * k / n, Math.atan2(-(bz - az), bx - ax), d / n]); }
    let gmin = 1e9, gmax = -1e9; for (const q of pts) { const g = H(q[0], q[1]); gmin = Math.min(gmin, g); gmax = Math.max(gmax, g); }
    const top = Math.max(gmin + AQ.hmax, gmax + 4); const boxes: number[][] = []; // [x, z, rot, len, y0, y1, depth]
    for (const [x, z, r, d] of pts) { const g = H(x, z); if (top - 9 > g) boxes.push([x, z, r, 4.2, g - 1, top - 9, AQ.w]); boxes.push([x, z, r, d + 0.05, Math.max(g - 1, top - 9.5), top - 7.5, AQ.w + 0.6]); boxes.push([x, z, r, 3.0, Math.max(g - 1, top - 7.5), top - 2, AQ.w - 0.4]); boxes.push([x, z, r, d + 0.05, Math.max(g - 1, top - 2), top, AQ.w]); }
    const M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), Yx = new THREE.Vector3(0, 1, 0), V = new THREE.Vector3(), Sc = new THREE.Vector3(), aqM = brickBands(new THREE.MeshLambertMaterial({ color: '#b9a98c' }));
    for (const [list, nm] of [[boxes.filter((q) => q[4] < q[5] - 6 || q[3] === 4.2), 'aud:wall'], [boxes.filter((q) => !(q[4] < q[5] - 6 || q[3] === 4.2)), 'aqueduct-spans']] as [number[][], string][]) { // piers stand on the ground (audited); spans and the channel bridge the arches
      const im = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), aqM, Math.max(1, list.length)); im.name = nm; im.count = list.length;
      list.forEach(([x, z, r, l, y0, y1, dd], i) => im.setMatrixAt(i, M4.compose(V.set(x, (y0 + y1) / 2, z), Q.setFromAxisAngle(Yx, r), Sc.set(l, y1 - y0, dd))));
      im.castShadow = im.receiveShadow = STEP >= 2; scene.add(im); } const mid = L[Math.floor(L.length / 2)]; addLabel('Bozdoğan Kemeri', mid[0], top + 12, mid[1]); (window as any).__aq = { piers: pts.length, top: Math.round(top) };
  } catch (e) { console.warn('aqueduct skipped', e); }
  // wm6 Hippodrome monuments: Dikilitaş, Örme Dikilitaş, Yılanlı Sütun from Grokisual's 1786 LandmarkKit (today state), Alman Çeşmesi placeholder
  for (const id of ['dikilitas', 'ormedikilitas', 'yilanlisutun', 'almancesmesi']) try { const lm = await buildGltfLandmark(id, { base: MAP, project: P, groundY: H, lodDistance: 1500 }); lm.object.name = 'aud:monument'; scene.add(lm.object); } catch (e) { console.warn('monument skipped', id, e); }
  addLabel('Dikilitaş', -302, H(-302, 1943) + 30, 1943); addLabel('Alman Çeşmesi', -260, H(-260, 1784) + 16, 1784);
  VIEWS.hipodrom = { t: [-310, 1930], y: 8, d: narrow ? 420 : 330, pol: 0.85, az: 2.2 }; VIEWS.sarayburnu = { t: [430, 1000], y: 20, d: narrow ? 900 : 700, pol: 1.0, az: 0.3 };
  VIEWS.bozdogan = { t: [-1900, 880], y: 25, d: narrow ? 520 : 420, pol: 1.2, az: 2.2 }; VIEWS.pool = { t: [-70, 1800], y: 30, d: narrow ? 330 : 260, pol: 0.95, az: 0.3 };
  VIEWS.galata_slope = { t: [-420, -150], y: 30, d: narrow ? 600 : 480, pol: 1.05, az: 0.4 };
  VIEWS.taksim = { t: [520, -1500], y: 10, d: narrow ? 520 : 420, pol: 0.55, az: 0.2 }; // wm8
  VIEWS.dolmabahce = { t: [1780, -1740], y: 10, d: narrow ? 650 : 520, pol: 0.85, az: -0.6 }; // wm9: top/oblique over full palace
  VIEWS.dolma_sea = { t: [1800, -1740], y: 8, d: narrow ? 700 : 560, pol: 1.15, az: 0.55 }; // wm10: camera really on the water (SE of the shore)
  VIEWS.mid_gumussuyu = { t: [1000, -1600], y: 25, d: narrow ? 700 : 560, pol: 0.95, az: 0.5 };
 VIEWS.suleymaniye_s = { t: [-1260, 820], y: 30, d: narrow ? 600 : 480, pol: 1.0, az: 2.4 };
  controls.enabled = true;
  setView('eminonu');
  mark('ready'); (window as any).__scene = scene; (window as any).__camera = camera; (window as any).__ready = true;
}

// post-processing (high quality only): ambient occlusion, gentle bloom, subtle tilt-shift, then tone mapping + sRGB
let composer: EffectComposer | null = null;
const tiltH = new ShaderPass(HorizontalTiltShiftShader), tiltV = new ShaderPass(VerticalTiltShiftShader);
function setupPost() {
  if (!HIGH) return;
  const w = window.innerWidth, h = window.innerHeight;
  composer = new EffectComposer(renderer);
  composer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); composer.setSize(w, h);
  composer.addPass(new RenderPass(scene, camera));
  const ao = new GTAOPass(scene, camera, w, h);
  ao.updateGtaoMaterial({ radius: 12, distanceExponent: 1.4, thickness: 6, scale: 1.4, samples: 12, distanceFallOff: 1, screenSpaceRadius: false });
  ao.blendIntensity = 1.0; // look 3: AO kept, tighter radius below
  composer.addPass(ao);
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(w, h), 0.1, 0.5, 0.95));
  tiltH.uniforms.h.value = 2.2 / w; tiltV.uniforms.v.value = 2.2 / h; tiltH.uniforms.r.value = tiltV.uniforms.r.value = 0.5;
  composer.addPass(tiltH); composer.addPass(tiltV);
  composer.addPass(new OutputPass());
  // warm grade in display space: lift the darks toward soft lavender, warm the mids, never pure black
  composer.addPass(new ShaderPass({
    uniforms: { tDiffuse: { value: null } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tDiffuse, vUv); vec3 x = c.rgb;
        float l = dot(x, vec3(0.299, 0.587, 0.114));
        x = mix(vec3(l), x, ${COL ? '1.12' : '1.08'});                       // more saturation
        x = (x - 0.5) * ${COL ? '1.1' : '1.06'} + 0.5;                       // a little more contrast, no milky lift
        vec2 q = vUv - 0.5; x *= 1.0 - 0.35 * dot(q, q);  // soft vignette like the Warsaw frames
        gl_FragColor = vec4(clamp(x, 0.0, 1.0), c.a); }`,
  }));
}
setupPost();

// wm4 super-tiles (1.5 km): when a whole super-tile is beyond the LOD distance, one merged far mesh replaces its many chunk LODs (fewer draw calls)
type Super = { key: number; bld: THREE.BufferGeometry[]; trees: { m: THREE.Matrix4; c: THREE.Color }[]; members: THREE.Object3D[]; merged: THREE.Object3D[]; c: THREE.Vector3; r: number };
const SUPERS = new Map<number, Super>(); let LODG = 1e9;
const DET: THREE.Object3D[] = []; // roof clutter (chimneys, dormers, tanks): hidden in far views
const superOf = (x: number, z: number, x0: number, z0: number) => { const k = Math.floor((x - x0) / 1500) + 1000 * Math.floor((z - z0) / 1500); let S0 = SUPERS.get(k); if (!S0) { S0 = { key: k, bld: [], trees: [], members: [], merged: [], c: new THREE.Vector3(), r: 0 }; SUPERS.set(k, S0); } return S0; };
function updateSupers() {
  for (const S0 of SUPERS.values()) { if (!S0.merged.length) continue; const far = camera.position.distanceTo(S0.c) - S0.r > LODG;
    for (const m of S0.merged) m.visible = far; for (const m of S0.members) m.visible = !far; }
}
const XT: [THREE.InstancedMesh, THREE.InstancedMesh, number][] = []; // added trees: drawn without shadows and thinned when zoomed out
let xtFar = -1;
let frameT = performance.now();
function frame(now?: number) {
  const t = now ?? performance.now();
  const dt = Math.min(0.08, (t - frameT) / 1000);
  frameT = t;
  controls.update();
  sun.target.position.copy(controls.target);
  sun.position.copy(controls.target).addScaledVector(sunDir, 3000);
  const d = camera.position.distanceTo(controls.target);
  const de = d * FOVK; // distance as seen through the old 35° lens
  const far = de > 3200 ? 2 : de > 1800 ? 1 : 0;
  if (far !== xtFar) { xtFar = far; for (const [tm, c, n] of XT) tm.count = c.count = far === 2 ? Math.ceil(n * 0.3) : far === 1 ? Math.ceil(n * 0.65) : n; }
  const s = THREE.MathUtils.clamp(de * 0.75, 250, 2600);
  const sc = sun.shadow.camera; if (sc.right !== s) { sc.left = -s; sc.right = s; sc.top = s; sc.bottom = -s; sc.updateProjectionMatrix(); }
  if (LOOK && scene.fog instanceof THREE.Fog) {
    if (COL) { scene.fog.near = d * 0.95; scene.fog.far = d + de * 1.3 + 5000; }
    else if (WALLS) { scene.fog.near = d * 0.8; scene.fog.far = d + de * 0.6 + 3500; }
    else { scene.fog.near = d * 2.2; scene.fog.far = d * 9 + 6000; }
  }
  updateSupers(); { const v = de < 3000; for (const m of DET) m.visible = v; }
  if (composer) { const k = THREE.MathUtils.clamp(2.0 - de / 2500, 0.4, 1.6); tiltH.uniforms.h.value = k / window.innerWidth; tiltV.uniforms.v.value = k / window.innerHeight; composer.render(); } else renderer.render(scene, camera);
  updateLabels();
  (window as any).__frames = ((window as any).__frames || 0) + 1;
  requestAnimationFrame(frame);
}
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer?.setSize(window.innerWidth, window.innerHeight);
});
Object.assign(window as any, {
  __setView: setView, __controls: controls, __renderer: renderer,
  __stats: () => ({ texMB: (window as any).__texMB, triangles: renderer.info.render.triangles, calls: renderer.info.render.calls, geometries: renderer.info.memory.geometries }),
});
main().then(() => requestAnimationFrame(frame));
