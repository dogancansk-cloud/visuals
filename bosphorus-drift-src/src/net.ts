// Ağ katmanı: oyunun geri kalanı yalnızca bu arayüzü bilir. Şimdilik Firebase Realtime Database;
// ileride kendi sunucuya geçilirse sadece bu dosyaya yeni bir Backend yazılır.
// LocalBackend aynı tarayıcıdaki sekmeleri birbirine bağlar (test için: ?net=local).

export interface Backend {
  readonly uid: string;
  /** sunucu saatine eşlenmiş zaman (ms) */
  now(): number;
  set(path: string, v: unknown): void;
  /** birden çok alt yolu tek mesajda yazar */
  update(path: string, v: Record<string, unknown>): void;
  remove(path: string): void;
  get(path: string): Promise<unknown>;
  on(path: string, cb: (v: unknown) => void): () => void;
  /** yeni eklenen çocuklar (abone olduktan sonra gelenler) */
  onChild(path: string, cb: (key: string, v: unknown) => void): () => void;
  push(path: string, v: unknown): void;
  /** bağlantı koparsa bu yol silinsin */
  onDisconnectRemove(path: string): void;
}

const ROOT = 'bd';
/** Boğaz Taksi ile aynı Firebase projesi; Realtime Database adresi konsoldan alınır */
export const FB_CONFIG = {
  apiKey: 'AIzaSyC51hZj2Tz34ta0u2X6G4ji5ea_694EFwY',
  authDomain: 'bogaz-taksi-bda1d.firebaseapp.com',
  projectId: 'bogaz-taksi-bda1d',
  databaseURL: 'https://bogaz-taksi-bda1d-default-rtdb.europe-west1.firebasedatabase.app',
};

export async function connect(kind: 'firebase' | 'local'): Promise<Backend> {
  if (kind === 'local') { const b = new LocalBackend(); await b.ready; return b; }
  return firebaseBackend();
}

async function firebaseBackend(): Promise<Backend> {
  const [{ initializeApp }, auth, db] = await Promise.all([import('firebase/app'), import('firebase/auth'), import('firebase/database')]);
  const app = initializeApp(FB_CONFIG, 'bd');
  const cred = await auth.signInAnonymously(auth.getAuth(app));
  const d = db.getDatabase(app), R = (p: string) => db.ref(d, `${ROOT}/${p}`);
  let offset = 0; db.onValue(db.ref(d, '.info/serverTimeOffset'), (s) => { offset = Number(s.val()) || 0; });
  const fail = (e: unknown) => console.warn('[net]', e);
  return {
    uid: cred.user.uid,
    now: () => Date.now() + offset,
    set: (p, v) => { db.set(R(p), v).catch(fail); },
    update: (p, v) => { db.update(R(p), v).catch(fail); },
    remove: (p) => { db.remove(R(p)).catch(fail); },
    get: async (p) => (await db.get(R(p))).val(),
    on: (p, cb) => db.onValue(R(p), (s) => cb(s.val()), fail),
    onChild: (p, cb) => {
      // yalnızca şu andan sonra eklenenler
      const q = db.query(R(p), db.orderByKey(), db.startAt(pushKey(Date.now() + offset - 500)));
      return db.onChildAdded(q, (s) => cb(s.key!, s.val()), fail);
    },
    push: (p, v) => { db.set(R(`${p}/${pushKey(Date.now() + offset)}`), v).catch(fail); },
    onDisconnectRemove: (p) => { db.onDisconnect(R(p)).remove().catch(fail); },
  };
}
/** zamana göre sıralanan anahtar */
function pushKey(t: number) { return Math.floor(t).toString(36).padStart(9, '0') + Math.random().toString(36).slice(2, 6); }

// ---------------------------------------------------------------- yerel (test)
type Tree = { [k: string]: unknown };
interface Op { op: 'set' | 'upd' | 'hello' | 'snap'; path?: string; v?: unknown; tree?: Tree; from: string }

class LocalBackend implements Backend {
  readonly uid = sessionStorage.getItem('bd-uid') || (() => { const u = 'u' + Math.random().toString(36).slice(2, 8); sessionStorage.setItem('bd-uid', u); return u; })();
  private tree: Tree = {}; private ch = new BroadcastChannel('bd-net');
  private subs: { path: string; cb: (v: unknown) => void }[] = [];
  private kids: { path: string; seen: Set<string>; cb: (k: string, v: unknown) => void }[] = [];
  private bye: string[] = [];
  readonly ready: Promise<void>;
  constructor() {
    let got = false;
    this.ch.onmessage = (e) => {
      const m = e.data as Op;
      if (m.op === 'hello') this.ch.postMessage({ op: 'snap', tree: this.tree, from: this.uid } as Op);
      else if (m.op === 'snap') { if (!got) { got = true; this.tree = m.tree || {}; } }
      else if (m.op === 'set') this.apply(m.path!, m.v);
      else if (m.op === 'upd') this.applyMany(m.path!, m.v as Record<string, unknown>);
    };
    this.ch.postMessage({ op: 'hello', from: this.uid } as Op);
    this.ready = new Promise((r) => setTimeout(r, 250));
    addEventListener('pagehide', () => { for (const p of this.bye) this.set(p, null); });
  }
  now() { return Date.now(); }
  private node(path: string) { let n: unknown = this.tree; for (const k of path.split('/').filter(Boolean)) { if (n == null || typeof n !== 'object') return null; n = (n as Tree)[k]; } return n ?? null; }
  private applyMany(path: string, v: Record<string, unknown>) { for (const k of Object.keys(v)) this.apply(`${path}/${k}`, v[k], false); this.notify(path); }
  private apply(path: string, v: unknown, tell = true) {
    const ks = path.split('/').filter(Boolean); let n = this.tree;
    for (let i = 0; i < ks.length - 1; i++) { if (typeof n[ks[i]] !== 'object' || n[ks[i]] == null) { if (v == null) return; n[ks[i]] = {}; } n = n[ks[i]] as Tree; }
    const last = ks[ks.length - 1]; if (v == null) delete n[last]; else n[last] = JSON.parse(JSON.stringify(v));
    if (tell) this.notify(path);
  }
  private notify(path: string) {
    for (const s of this.subs) if (path.startsWith(s.path) || s.path.startsWith(path)) s.cb(this.node(s.path));
    for (const c of this.kids) if (path.startsWith(c.path) || c.path.startsWith(path)) { const o = this.node(c.path); if (o && typeof o === 'object') for (const k of Object.keys(o)) if (!c.seen.has(k)) { c.seen.add(k); c.cb(k, (o as Tree)[k]); } }
  }
  set(path: string, v: unknown) { this.apply(path, v); this.ch.postMessage({ op: 'set', path, v, from: this.uid } as Op); }
  update(path: string, v: Record<string, unknown>) { this.applyMany(path, v); this.ch.postMessage({ op: 'upd', path, v, from: this.uid } as Op); }
  remove(path: string) { this.set(path, null); }
  async get(path: string) { return this.node(path); }
  on(path: string, cb: (v: unknown) => void) { const s = { path, cb }; this.subs.push(s); cb(this.node(path)); return () => { this.subs = this.subs.filter((x) => x !== s); }; }
  onChild(path: string, cb: (k: string, v: unknown) => void) { const o = this.node(path), c = { path, cb, seen: new Set<string>(o && typeof o === 'object' ? Object.keys(o) : []) }; this.kids.push(c); return () => { this.kids = this.kids.filter((x) => x !== c); }; }
  push(path: string, v: unknown) { this.set(`${path}/${pushKey(Date.now())}`, v); }
  onDisconnectRemove(path: string) { this.bye.push(path); }
}
