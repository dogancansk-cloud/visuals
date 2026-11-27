// Online oyun: oda (kodla ya da rastgele eşleşme), lobi, yarış başlatma ve kart durumlarının eşlenmesi.
// Her oyuncu kendi kartını kendi cihazında sürer; diğerleri 10 Hz'lik konum paketleriyle "hayalet" olarak çizilir.
// Bilgisayar rakipleri oda sahibinin cihazı sürer. İsabetleri her zaman isabet alan taraf kendi cihazında uygular.
import type { Backend } from './net';
import type { Kart, ItemKind } from './kart';
import { CHARS } from './characters';

export interface PlayerInfo { name: string; char: number; t: number }
export interface GridEntry { id: string; char: number; bot: boolean; name: string; skill: number }
export interface Meta { host: string; pist: string; bots: boolean; pub: boolean; state: 'lobby' | 'race'; startAt: number; grid: GridEntry[] | null; race: number; autoAt: number }
export type NetEvent = { k: 'use'; id: string; it: ItemKind | 'throw'; j: number } | { k: 'hit'; v: string; by: string; o: string };

export const MAX_P = 8;
const LETTERS = 'ABCDEFGHJKLMNPRSTUVYZ';
const ITEMS: (ItemKind | null)[] = [null, 'marti', 'cay', 'nazar', 'turbo', 'simit', 'duduk', 'kedi'];
const r1 = (v: number) => Math.round(v * 10) / 10, r2 = (v: number) => Math.round(v * 100) / 100;

/** kart durumunu küçük bir sayı dizisine sıkıştırır */
export function pack(k: Kart, t: number): number[] {
  const bits = (k.drifting ? 1 : 0) | (k.grounded ? 2 : 0) | (k.boostT > 0 ? 4 : 0) | (k.shieldT > 0 ? 8 : 0) | (k.slowT > 0 ? 16 : 0) | (k.finished ? 32 : 0) | (k.dir < 0 ? 64 : 0) | (k.catT > 0 ? 128 : 0) | (k.boosts << 8);
  return [Math.round(t), r2(k.pos.x), r2(k.pos.y), r2(k.pos.z), r2(k.yaw), r1(k.speed), r2(k.steerVis), k.lap, r1(k.progress), bits, r1(Math.max(0, k.spinT)), k.simit, ITEMS.indexOf(k.item), k.finished ? r2(k.finishTime) : 0];
}

/** uzaktaki kartın paket tamponu: 140 ms geriden, iki paket arasında yumuşatarak çizer */
export class Ghost {
  private buf: number[][] = []; lastAt = 0;
  push(a: number[]) { const n = this.buf.length; if (!n || a[0] > this.buf[n - 1][0]) { this.buf.push(a); if (n >= 8) this.buf.shift(); this.lastAt = performance.now(); } }
  get has() { return this.buf.length > 0; }
  clear() { this.buf = []; }
  apply(k: Kart, now: number) {
    const B = this.buf; if (!B.length) return;
    const t = now - 140; let a = B[0], b = B[0], u = 0;
    if (t >= B[B.length - 1][0]) { a = b = B[B.length - 1]; }
    else for (let i = B.length - 2; i >= 0; i--) if (B[i][0] <= t) { a = B[i]; b = B[i + 1]; u = (t - a[0]) / Math.max(1, b[0] - a[0]); break; }
    let dy = b[4] - a[4]; while (dy > Math.PI) dy -= Math.PI * 2; while (dy < -Math.PI) dy += Math.PI * 2;
    const yaw = a[4] + dy * u, sp = a[5] + (b[5] - a[5]) * u;
    let x = a[1] + (b[1] - a[1]) * u, y = a[2] + (b[2] - a[2]) * u, z = a[3] + (b[3] - a[3]) * u;
    if (a === b && t > a[0]) { const e = Math.min(0.3, (t - a[0]) / 1000); x += Math.cos(yaw) * sp * e; z += Math.sin(yaw) * sp * e; } // paket gecikirse kısa süre ileri taşı
    const jump = (x - k.pos.x) ** 2 + (z - k.pos.z) ** 2 > 400;
    k.pos.set(x, y, z); k.yaw = yaw; k.speed = sp; k.vel.set(Math.cos(yaw) * sp, 0, Math.sin(yaw) * sp);
    k.track.frame(x, y, z, k.f.i, k.f, jump ? 400 : 30);
    k.steerVis = b[6]; k.lap = b[7]; k.progress = a[8] + (b[8] - a[8]) * u; k.lastS = k.f.s;
    const bits = b[9];
    k.drifting = !!(bits & 1); k.grounded = !!(bits & 2); k.boostT = bits & 4 ? 0.2 : 0; k.shieldT = bits & 8 ? 1 : 0; k.slowT = bits & 16 ? 0.2 : 0;
    k.dir = bits & 64 ? -1 : 1; k.catT = bits & 128 ? 0.2 : 0; k.boosts = bits >> 8;
    k.driftVis += ((k.drifting ? k.dir : 0) - k.driftVis) * 0.2; k.lean += ((k.drifting ? -k.dir * 0.12 : -k.steerVis * 0.05) - k.lean) * 0.2;
    k.spinT = b[10]; k.simit = b[11]; k.item = ITEMS[b[12]] ?? null;
    if (bits & 32 && !k.finished) { k.finished = true; k.finishTime = b[13]; }
  }
}

export class Room {
  meta: Meta | null = null; players: Record<string, PlayerInfo> = {};
  readonly ghosts = new Map<string, Ghost>();
  onChange: () => void = () => {}; onStart: (m: Meta) => void = () => {}; onEvent: (e: NetEvent) => void = () => {};
  /** oda kapandı ya da bağlantı gitti */
  onGone: () => void = () => {};
  private unsub: (() => void)[] = []; private lastRace = -1; private tickT = 0; private alive = true; private hostGone = 0;
  private constructor(readonly net: Backend, readonly code: string, private me: PlayerInfo) {}
  get uid() { return this.net.uid; }
  get isHost() { return !!this.meta && this.meta.host === this.net.uid; }
  get humans() { return Object.keys(this.players).length; }
  private p(s = '') { return `rooms/${this.code}${s ? '/' + s : ''}`; }

  static async create(net: Backend, me: PlayerInfo, pist: string, pub: boolean) {
    let code = '';
    for (let n = 0; n < 12; n++) { code = Array.from({ length: 4 }, () => LETTERS[Math.floor(Math.random() * LETTERS.length)]).join(''); if (!(await net.get(`rooms/${code}/meta`))) break; }
    const meta: Meta = { host: net.uid, pist, bots: true, pub, state: 'lobby', startAt: 0, grid: null, race: 0, autoAt: 0 };
    net.set(`rooms/${code}/meta`, meta);
    const r = new Room(net, code, me); r.meta = meta; r.enter(); return r;
  }
  /** null: oda yok; 'full': dolu */
  static async join(net: Backend, code: string, me: PlayerInfo): Promise<Room | 'none' | 'full'> {
    code = code.trim().toLocaleUpperCase('en');
    const all = (await net.get(`rooms/${code}`)) as { meta?: Meta; players?: Record<string, PlayerInfo> } | null;
    if (!all || !all.meta) return 'none';
    if (Object.keys(all.players || {}).filter((u) => u !== net.uid).length >= MAX_P) return 'full';
    const r = new Room(net, code, me); r.meta = all.meta; r.enter(); return r;
  }
  /** rastgele eşleşme: bekleyen açık oda varsa ona girer, yoksa açık oda kurup bekler */
  static async quick(net: Backend, me: PlayerInfo, pist: string) {
    const pubs = ((await net.get('pub')) || {}) as Record<string, { n: number; ts: number; lobby: boolean }>;
    const now = net.now(), open = Object.keys(pubs).filter((c) => pubs[c].lobby && pubs[c].n < MAX_P && now - pubs[c].ts < 45000).sort((a, b) => pubs[b].n - pubs[a].n);
    for (const c of open) { const r = await Room.join(net, c, me); if (r instanceof Room) return r; }
    return Room.create(net, me, pist, true);
  }

  private enter() {
    const net = this.net;
    this.me.t = net.now(); net.set(this.p(`players/${net.uid}`), this.me); net.onDisconnectRemove(this.p(`players/${net.uid}`));
    this.unsub.push(net.on(this.p('meta'), (v) => {
      if (!this.alive) return;
      if (!v) { if (this.meta) this.onGone(); return; }
      this.meta = v as Meta; this.onChange();
      const m = this.meta;
      if (m.state === 'race' && m.race !== this.lastRace && m.grid && m.grid.some((g) => g.id === net.uid)) { this.lastRace = m.race; this.ghosts.clear(); this.onStart(m); }
    }));
    this.unsub.push(net.on(this.p('players'), (v) => { if (!this.alive) return; this.players = (v || {}) as Record<string, PlayerInfo>; if (!this.players[net.uid]) net.set(this.p(`players/${net.uid}`), this.me); this.onChange(); }));
    this.unsub.push(net.on(this.p('st'), (v) => {
      if (!v) return; const o = v as Record<string, number[]>;
      for (const id of Object.keys(o)) { let g = this.ghosts.get(id); if (!g) this.ghosts.set(id, (g = new Ghost())); g.push(o[id]); }
    }));
    this.unsub.push(net.onChild(this.p('ev'), (_k, v) => { if (this.alive && v) this.onEvent(v as NetEvent); }));
  }

  setMe(patch: Partial<PlayerInfo>) { Object.assign(this.me, patch); this.net.update(this.p(`players/${this.net.uid}`), patch as Record<string, unknown>); }
  setMeta(patch: Partial<Meta>) { if (this.isHost) this.net.update(this.p('meta'), patch as Record<string, unknown>); }

  /** oda sahibi: ızgarayı kurar ve geri sayımı başlatır */
  start() {
    if (!this.isHost || !this.meta) return;
    const ids = Object.keys(this.players).sort((a, b) => this.players[a].t - this.players[b].t).slice(0, MAX_P);
    const grid: GridEntry[] = ids.map((id) => ({ id, char: this.players[id].char, bot: false, name: this.players[id].name, skill: 0 }));
    if (this.meta.bots) {
      const used = new Set(grid.map((g) => g.char)), free = CHARS.map((_, i) => i).filter((i) => !used.has(i));
      const n = MAX_P - grid.length;
      for (let b = 0; b < n; b++) { const char = free.length ? free.splice(Math.floor(Math.random() * free.length), 1)[0] : Math.floor(Math.random() * CHARS.length); grid.push({ id: 'b' + b, char, bot: true, name: CHARS[char].name, skill: 0.5 + (n > 1 ? (b / (n - 1)) * 0.3 : 0.15) }); }
    }
    // gerçek oyuncular öne dizilmesin: ızgarayı karıştır
    for (let i = grid.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [grid[i], grid[j]] = [grid[j], grid[i]]; }
    this.net.remove(this.p('st')); this.net.remove(this.p('ev'));
    this.net.update(this.p('meta'), { state: 'race', startAt: this.net.now() + 6500, grid, race: (this.meta.race || 0) + 1, autoAt: 0 });
  }
  /** oda sahibi lobiye dönünce oda yeni yarışa açılır */
  backToLobby() { if (this.isHost && this.meta && this.meta.state !== 'lobby') this.net.update(this.p('meta'), { state: 'lobby', autoAt: 0 }); }

  sendStates(o: Record<string, number[]>) { this.net.update(this.p('st'), o); }
  send(e: NetEvent) { this.net.push(this.p('ev'), e); }

  /** saniyede birkaç kez: oda sahipliği devri, açık oda ilanı, rastgele odada otomatik başlatma */
  tick(dt: number) {
    this.tickT += dt; if (this.tickT < 1 || !this.meta) return; this.tickT = 0;
    const net = this.net, m = this.meta, ids = Object.keys(this.players);
    // oda sahibi 6 sn boyunca yoksa (sayfa yenilemesi değil, gerçekten ayrıldıysa) en küçük kimlikli oyuncu devralır
    this.hostGone = ids.length && !this.players[m.host] ? this.hostGone + 1 : 0;
    if (this.hostGone >= 6 && ids.sort()[0] === net.uid) { net.update(this.p('meta'), { host: net.uid }); this.hostGone = 0; return; }
    if (!this.isHost) return;
    if (m.pub) { net.set(`pub/${this.code}`, { n: ids.length, ts: net.now(), lobby: m.state === 'lobby' }); net.onDisconnectRemove(`pub/${this.code}`); }
    if (m.pub && m.state === 'lobby') {
      if (ids.length >= 2 && !m.autoAt) net.update(this.p('meta'), { autoAt: net.now() + 10000 });
      else if (ids.length < 2 && m.autoAt) net.update(this.p('meta'), { autoAt: 0 });
      else if (m.autoAt && net.now() >= m.autoAt) this.start();
    }
  }

  leave() {
    this.alive = false; for (const u of this.unsub) u(); this.unsub = [];
    const last = Object.keys(this.players).filter((u) => u !== this.net.uid).length === 0;
    if (this.meta?.pub && (this.isHost || last)) this.net.remove(`pub/${this.code}`);
    if (last) this.net.remove(this.p()); else this.net.remove(this.p(`players/${this.net.uid}`));
  }
}
