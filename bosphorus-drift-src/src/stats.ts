// Oyun istatistikleri (Google Analytics, Boğaz Taksi ile aynı Firebase projesi).
// Olay adları bd_ ile başlar; panel Bosphorus Drift verisini sayfa adresinden ve bu önekten ayırır.
// Seçenekler olay adının içinde (bd_pist_kc gibi): Google'da ek ayar gerektirmeden panelden sayılabilsin diye.
import { fbApp } from './net';

const Q = new URLSearchParams(location.search);
const off = location.hostname !== 'dogancansk-cloud.github.io' || ['auto', 'skip', 'fast', 'net'].some((k) => Q.has(k));
type An = import('firebase/analytics').Analytics;
let an: An | null = null, log: ((a: An, n: string, p?: Record<string, unknown>) => void) | null = null;
const queue: [string, Record<string, unknown>?][] = [];

if (!off) void (async () => {
  try {
    const [app, m] = await Promise.all([fbApp(), import('firebase/analytics')]);
    if (!(await m.isSupported())) return;
    an = m.getAnalytics(app); log = (a, n, p) => m.logEvent(a, n, p);
    for (const [n, p] of queue.splice(0)) log(an, n, p);
  } catch (e) { console.warn('[stats]', e); }
})();

export function ev(name: string, p?: Record<string, unknown>) {
  if (off) return;
  const n = ('bd_' + name).replace(/[^a-z0-9_]/gi, '_').slice(0, 40);
  if (an && log) { try { log(an, n, p); } catch { /* yoksay */ } } else if (queue.length < 40) queue.push([n, p]);
}
