// Görevler: İstanbul taksisi. Yolcuyu al, istediği yere götür; süre, kaza, kırmızı ışık ve yolcu memnuniyeti ücreti belirler.
// Rota yol ağında A* ile bulunur (tek yön kurallarına uyar) ve küçük haritada çizilir.
import * as THREE from 'three';
import type { Roads } from '../world/roads';
import type { Ground } from '../world/ground';
import type { Audio } from './audio';
import type { LM } from '../world/landmarks';

const PLACES: Record<string, string> = { eminonu: 'Eminönü', karakoy: 'Karaköy', sultanahmet: 'Sultanahmet', taksim: 'Taksim', besiktas: 'Beşiktaş' };
const ASK = ['Abi beni {d} bırakır mısın?', '{d} lütfen, acelem var!', 'Merhaba, {d} gidelim.', '{d}… Kestirmeden lütfen.', 'Hocam {d}, taksimetreyi açın.'];
const FAST = ['Abi yavaş, midem kalktı!', 'Bu ne hız, uçuyor muyuz?', 'Yavaş, yavaş, canım bir tane!'];
const CRASH = ['Ay! Dikkat et!', 'Araba senin değil mi?', 'Sigortan var umarım…'];
const REDL = ['Kırmızıydı o!', 'Ceza yazarlar abi!', 'Işık kırmızıydı ama…'];
const HAPPY = ['Eline sağlık, iyi yolculuklar!', 'Harika sürüş, üstü kalsın!', 'Teşekkürler, tam vaktinde!'];
const MEH = ['Geç kaldık ama neyse…', 'Bir daha seninle binmem.', 'Neyse, vardık sonunda.'];

type Phase = 'pickup' | 'board' | 'drive' | 'drop' | 'pause';
interface UI { toast: (t: string, ms?: number) => void; audio: Audio; money: HTMLElement; panel: HTMLElement; title: HTMLElement; text: HTMLElement; metaEl: HTMLElement; arrow: HTMLElement; dist: HTMLElement }

export class Missions {
  phase: Phase = 'pause'; target: { x: number; z: number; name: string } | null = null; route: number[] = [];
  money = 0; private timer = 0; private limit = 0; private pen = 0; private crashes = 0; private reds = 0; private pauseT = 1.5; private routeT = 0; private hold = 0;
  private dest: { x: number; z: number; name: string } | null = null; private routeLen = 0; private fastT = 0; private trips = 0;
  private marker: THREE.Group; private ring: THREE.Mesh; private beam: THREE.Mesh; private pax: THREE.Group;
  private adj: { to: number; w: number; len: number }[][] = [];
  private places: { x: number; z: number; name: string }[] = [];
  constructor(private R: Roads, private G: Ground, scene: THREE.Scene, spawns: { id: string; x: number; z: number }[], lms: LM[], private ui: UI) {
    try { this.money = Number(localStorage.getItem('drv2_money') || 0) || 0; } catch { /* */ }
    this.showMoney();
    for (const s of spawns) this.places.push({ x: s.x, z: s.z, name: PLACES[s.id] || s.id });
    for (const l of lms) if (!/Dikilitaş|Sütun|Çeşme/.test(l.name)) this.places.push({ x: l.x, z: l.z, name: l.name });
    // yol ağı grafiği
    this.adj = R.nodes.map(() => []);
    for (const w of R.ways) {
      if (w.code === 8) continue;
      this.adj[w.a].push({ to: w.b, w: w.i, len: w.len });
      if (!w.oneway) this.adj[w.b].push({ to: w.a, w: w.i, len: w.len });
    }
    // işaretçi: ışık sütunu + yerde halka
    this.marker = new THREE.Group();
    this.beam = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 40, 20, 1, true).translate(0, 20, 0), new THREE.MeshBasicMaterial({ color: '#ffd84a', transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    this.ring = new THREE.Mesh(new THREE.RingGeometry(3.6, 4.4, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#ffd84a', transparent: true, opacity: 0.85, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -10 }));
    this.marker.add(this.beam, this.ring); this.marker.visible = false; scene.add(this.marker);
    // bekleyen yolcu (el sallar)
    const m = new THREE.MeshLambertMaterial({ color: '#c94f3d' }), sk = new THREE.MeshLambertMaterial({ color: '#e0b896' }), lg = new THREE.MeshLambertMaterial({ color: '#30343c' });
    this.pax = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.66, 0.26), m); body.position.y = 1.2;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), sk); head.position.y = 1.68;
    const legs = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.86, 0.16), lg); legs.position.y = 0.45;
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.6, 0.12).translate(0, 0.3, 0), m); arm.position.set(0.3, 1.45, 0); arm.name = 'arm';
    this.pax.add(body, head, legs, arm); for (const c of this.pax.children) c.castShadow = true; this.pax.visible = false; scene.add(this.pax);
  }
  private showMoney() { this.ui.money.textContent = `₺${Math.round(this.money).toLocaleString('tr-TR')}`; try { localStorage.setItem('drv2_money', String(Math.round(this.money))); } catch { /* */ } }
  /** yol üstünde rastgele nokta: (x,z) çevresinde r0..r1 metre */
  private roadPoint(x: number, z: number, r0: number, r1: number) {
    for (let i = 0; i < 60; i++) {
      const a = Math.random() * Math.PI * 2, r = r0 + Math.random() * (r1 - r0);
      const n = this.R.nearest(x + Math.cos(a) * r, z + Math.sin(a) * r, 60, (w) => w.code >= 2 && w.code <= 6 && !w.bridge && w.len > 30);
      if (!n) continue; if (this.G.kindAt(n.px, n.pz) === 1) continue;
      const d = Math.hypot(n.px - x, n.pz - z); if (d < r0 * 0.8 || d > r1 * 1.2) continue;
      // kaldırım kenarına
      const side = n.w.width / 2 - 1.2; const px = n.px + n.dz * -side * -1, pz = n.pz - n.dx * side;
      void px; void pz;
      return { x: n.px, z: n.pz, w: n.w, dx: n.dx, dz: n.dz };
    }
    return null;
  }
  private nameFor(x: number, z: number, street?: string) {
    let best = '', bd = 450; for (const p of this.places) { const d = Math.hypot(p.x - x, p.z - z); if (d < bd) { bd = d; best = p.name; } }
    if (best && street) return `${street} (${best} yakını)`;
    return street || best || 'şu adres';
  }
  private startPickup(car: { x: number; z: number }) {
    const p = this.roadPoint(car.x, car.z, 140, 380); if (!p) { this.pauseT = 1; return; }
    this.target = { x: p.x, z: p.z, name: this.nameFor(p.x, p.z, p.w.name) }; this.phase = 'pickup';
    this.pax.position.set(p.x + p.dz * -(p.w.width / 2 + 0.8) * -1, this.G.H(p.x, p.z), p.z - p.dx * (p.w.width / 2 + 0.8)); this.pax.rotation.y = Math.atan2(-p.dz, p.dx); this.pax.visible = true;
    this.ui.panel.hidden = false; this.ui.title.textContent = '🚕 Yolcu bekliyor'; this.ui.text.textContent = `${this.target.name} — yanına git ve dur.`;
    this.routeT = 0; this.pen = 0; this.crashes = 0; this.reds = 0;
  }
  private startDrive() {
    // hedef: bilinen bir yer ya da uzak bir sokak
    let d: { x: number; z: number; name: string } | null = null;
    const here = this.target!;
    if (Math.random() < 0.55) {
      const cands = this.places.filter((p) => { const dd = Math.hypot(p.x - here.x, p.z - here.z); return dd > 500 && dd < 2600; });
      if (cands.length) { const p = cands[Math.floor(Math.random() * cands.length)]; const n = this.R.nearest(p.x, p.z, 140, (w) => w.code >= 2 && w.code <= 6 && !w.bridge); if (n) d = { x: n.px, z: n.pz, name: p.name }; }
    }
    if (!d) { const p = this.roadPoint(here.x, here.z, 600, 2000); if (p) d = { x: p.x, z: p.z, name: this.nameFor(p.x, p.z, p.w.name) }; }
    if (!d) { this.phase = 'pause'; this.pauseT = 1; return; }
    this.dest = d; this.target = d; this.phase = 'drive';
    this.computeRoute(here.x, here.z);
    this.limit = this.routeLen / 8.5 + 30; this.timer = this.limit;
    this.ui.title.textContent = '🚕 Yolcu bindi'; this.ui.text.textContent = `Hedef: ${d.name}`;
    this.ui.toast(ASK[Math.floor(Math.random() * ASK.length)].replace('{d}', d.name.split(' (')[0]), 2600);
    this.ui.audio.chime(true);
  }
  private finish() {
    const late = this.timer < 0;
    const base = 25 + this.routeLen * 0.035, bonus = Math.max(0, this.timer) * 0.6;
    let pay = (base + bonus - this.pen) * (late ? 0.55 : 1); pay = Math.max(5, Math.round(pay));
    const stars = Math.max(1, Math.min(5, 5 - this.crashes - this.reds - (late ? 2 : 0)));
    this.money += pay; this.trips++; this.showMoney();
    this.ui.toast(`+₺${pay}  ${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}\n${(stars >= 4 ? HAPPY : MEH)[Math.floor(Math.random() * 3)]}`, 3200);
    this.ui.audio.chime(stars >= 3);
    this.phase = 'pause'; this.pauseT = 4; this.target = null; this.route = []; this.marker.visible = false; this.pax.visible = false;
    this.ui.title.textContent = '🚕 Boşta'; this.ui.text.textContent = `Yeni yolcu aranıyor… (bugün ${this.trips} sefer)`; this.ui.metaEl.textContent = '';
  }
  onCrash(p: number) { if (this.phase === 'drive') { this.pen += 4 + p * 10; if (p > 0.25) { this.crashes++; this.ui.toast(CRASH[Math.floor(Math.random() * CRASH.length)], 1400); } } }
  onRedLight() { this.ui.toast('🚦 Kırmızı ışık!', 1300); if (this.phase === 'drive') { this.pen += 15; this.reds++; setTimeout(() => this.ui.toast(REDL[Math.floor(Math.random() * REDL.length)], 1400), 1400); } }
  onPedScare() { if (this.phase === 'drive') { this.pen += 10; this.crashes++; } this.ui.toast('Yayaya dikkat!', 1200); }
  // ---------- rota (A*) ----------
  private computeRoute(sx: number, sz: number) {
    const tgt = this.target; if (!tgt) { this.route = []; return; }
    const ns = this.R.nearest(sx, sz, 60, (w) => w.code !== 8), nt = this.R.nearest(tgt.x, tgt.z, 60, (w) => w.code !== 8);
    if (!ns || !nt) { this.route = [sx, sz, tgt.x, tgt.z]; this.routeLen = Math.hypot(tgt.x - sx, tgt.z - sz); return; }
    if (ns.w === nt.w) { this.route = [sx, sz, tgt.x, tgt.z]; this.routeLen = Math.hypot(tgt.x - sx, tgt.z - sz); return; }
    const N = this.R.nodes; const sAt = (n: typeof ns) => n.w.cum[n.k] + (n.w.cum[n.k + 1] - n.w.cum[n.k]) * n.t;
    const s0 = sAt(ns), s1 = sAt(nt);
    const g = new Map<number, number>(), prev = new Map<number, { from: number; w: number }>(), open: [number, number][] = [];
    const push = (id: number, cost: number, from: number, w: number) => { if (cost < (g.get(id) ?? 1e18)) { g.set(id, cost); prev.set(id, { from, w }); open.push([cost + Math.hypot(N[id].x - tgt.x, N[id].z - tgt.z), id]); } };
    push(ns.w.b, ns.w.len - s0, -1, ns.w.i); if (!ns.w.oneway) push(ns.w.a, s0, -1, ns.w.i);
    const goal = new Map<number, number>(); goal.set(nt.w.a, s1); if (!nt.w.oneway) goal.set(nt.w.b, nt.w.len - s1);
    let found = -1, iter = 0, bestTotal = 1e18;
    while (open.length && iter++ < 60000) {
      let bi = 0; for (let i = 1; i < open.length; i++) if (open[i][0] < open[bi][0]) bi = i;
      const [f, id] = open[bi]; open[bi] = open[open.length - 1]; open.pop();
      if (f > bestTotal) break;
      const gc = g.get(id)!; if (f - Math.hypot(N[id].x - tgt.x, N[id].z - tgt.z) > gc + 1e-6) continue;
      if (goal.has(id) && gc + goal.get(id)! < bestTotal) { bestTotal = gc + goal.get(id)!; found = id; }
      for (const e of this.adj[id]) push(e.to, gc + e.len * (this.R.ways[e.w].code <= 3 ? 0.85 : this.R.ways[e.w].code >= 6 ? 1.3 : 1), id, e.w);
      if (open.length > 20000) break;
    }
    if (found < 0) { this.route = [sx, sz, tgt.x, tgt.z]; this.routeLen = Math.hypot(tgt.x - sx, tgt.z - sz); return; }
    // yolu çiz: hedeften geriye
    const pts: number[][] = [[tgt.x, tgt.z]]; let id = found;
    // son yol parçası (hedef yolunun ucu → hedef)
    while (id >= 0) {
      const p = prev.get(id)!; if (p.from < 0) break;
      const w = this.R.ways[p.w]; const fwd = w.a === p.from; const n = w.pts.length / 2;
      for (let k = 0; k < n; k++) { const kk = fwd ? n - 1 - k : k; pts.push([w.pts[2 * kk], w.pts[2 * kk + 1]]); }
      id = p.from;
    }
    pts.push([N[id].x, N[id].z], [sx, sz]); pts.reverse();
    this.route = pts.flat(); this.routeLen = 0; for (let i = 2; i < this.route.length; i += 2) this.routeLen += Math.hypot(this.route[i] - this.route[i - 2], this.route[i + 1] - this.route[i - 1]);
  }
  /** rota üstünde arabadan ~35 m ileride bir nokta (ok yönü için) */
  private lookAhead(x: number, z: number): [number, number] {
    const r = this.route; if (r.length < 4) return this.target ? [this.target.x, this.target.z] : [x, z];
    let bi = 0, bd = 1e18; for (let i = 0; i < r.length; i += 2) { const d = Math.hypot(r[i] - x, r[i + 1] - z); if (d < bd) { bd = d; bi = i; } }
    let acc = 0; for (let i = bi + 2; i < r.length; i += 2) { acc += Math.hypot(r[i] - r[i - 2], r[i + 1] - r[i - 1]); if (acc > 35) return [r[i], r[i + 1]]; }
    return [r[r.length - 2], r[r.length - 1]];
  }
  update(dt: number, car: { x: number; z: number; y: number; speed: number; yaw: number }) {
    if (this.phase === 'pause') { this.pauseT -= dt; if (this.pauseT <= 0) this.startPickup(car); this.ui.arrow.hidden = true; return; }
    const tgt = this.target; if (!tgt) return;
    // işaretçi
    this.marker.visible = true; this.marker.position.set(tgt.x, this.G.H(tgt.x, tgt.z) + 0.1, tgt.z);
    const pulse = 1 + Math.sin(performance.now() / 250) * 0.08; this.ring.scale.set(pulse, 1, pulse);
    const arm = this.pax.getObjectByName('arm'); if (arm) arm.rotation.z = Math.PI * 0.85 + Math.sin(performance.now() / 180) * 0.35;
    const d = Math.hypot(tgt.x - car.x, tgt.z - car.z);
    this.routeT -= dt; if (this.routeT <= 0) { this.routeT = 2.5; this.computeRoute(car.x, car.z); }
    // ok
    const [ax, az] = this.lookAhead(car.x, car.z); const ang = Math.atan2(ax - car.x, az - car.z) - car.yaw;
    this.ui.arrow.hidden = false; (this.ui.arrow.firstElementChild as SVGElement).style.transform = `rotate(${-ang}rad)`;
    this.ui.dist.textContent = d > 1000 ? `${(d / 1000).toFixed(1)} km` : `${Math.round(d / 10) * 10} m`;
    if (this.phase === 'drive') {
      this.timer -= dt; const t = Math.max(0, this.timer);
      this.ui.metaEl.textContent = `Süre ${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}${this.timer < 0 ? ' (gecikme!)' : ''} · Kesinti ₺${Math.round(this.pen)}`;
      if (car.speed > 24) { this.fastT += dt; if (this.fastT > 6) { this.fastT = -20; this.ui.toast(FAST[Math.floor(Math.random() * FAST.length)], 1600); } } else this.fastT = Math.min(this.fastT, 0);
    } else this.ui.metaEl.textContent = `${Math.round(d)} m · Yanaşınca dur`;
    // varış: yakın + yavaş
    if (d < 10 && car.speed < 2.5) {
      this.hold += dt; this.ui.metaEl.textContent = this.phase === 'pickup' ? 'Yolcu biniyor…' : 'Yolcu iniyor…';
      if (this.hold > 1.1) { this.hold = 0; if (this.phase === 'pickup') { this.pax.visible = false; this.startDrive(); } else if (this.phase === 'drive') this.finish(); }
    } else this.hold = 0;
  }
}
