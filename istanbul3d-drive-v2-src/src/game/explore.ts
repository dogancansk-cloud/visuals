// Keşif: görev yok, ama yapılacak bir şey var. Anıtlara yaklaşınca "keşfedildi" olur ve kısa bir bilgi kartı çıkar;
// gezilen sokakların yüzdesi ve toplam yol sayılır. Hepsi tarayıcıda saklanır (aynı cihazda kaldığın yerden devam).
import type { Roads } from '../world/roads';
import type { LM } from '../world/landmarks';

// kısa, bilinen bilgiler (anıt kimliği -> metin)
const FACTS: Record<string, string> = {
  ayasofya: '537’de İmparator I. Justinianus döneminde tamamlandı.',
  sultanahmet: '1609–1617 arasında yapıldı; altı minarelidir. Mimarı Sedefkâr Mehmed Ağa.',
  yenicami: 'Yapımına 1597’de başlandı, 1665’te tamamlandı.',
  galata: '1348’de Cenevizliler tarafından yapıldı.',
  rustempasa: 'Mimar Sinan’ın eseri (1560’lar); İznik çinileriyle ünlüdür.',
  nusretiye: 'II. Mahmud yaptırdı, 1826’da tamamlandı. Mimarı Krikor Balyan.',
  ayatriada: 'Taksim’deki Rum Ortodoks kilisesi; 1880’de ibadete açıldı.',
  stantoine: 'İstiklal Caddesi’ndeki Katolik kilisesi; 1912’de tamamlandı. Mimarı Giulio Mongeri.',
  topkapi: 'Fatih Sultan Mehmed 1460’larda yaptırdı; yaklaşık 400 yıl Osmanlı sarayı oldu.',
  dikilitas: 'MÖ 15. yüzyılda Mısır’da III. Thutmose için yapıldı; 390’da I. Theodosius buraya diktirdi.',
  ormedikilitas: 'Yapım tarihi kesin bilinmiyor; 10. yüzyılda VII. Konstantinos onarttı.',
  yilanlisutun: 'MÖ 479’daki Plataia zaferi anısına Delfi’de dikildi; 4. yüzyılda buraya getirildi.',
  almancesmesi: 'Alman İmparatoru II. Wilhelm’in hediyesi; 1901’de açıldı.',
};
const RADIUS: Record<string, number> = { topkapi: 170, ayasofya: 110, sultanahmet: 110, yenicami: 90, stantoine: 70 };

interface UI { chip: HTMLElement; card: HTMLElement; cardTitle: HTMLElement; cardText: HTMLElement; chime: () => void }
export interface Marker { x: number; z: number; found: boolean; name: string }

export class Explore {
  private found = new Set<string>(); private ways = new Set<number>(); km = 0;
  private total = 0; private done = 0; private saveT = 0; private cardT = 0; private lastX = NaN; private lastZ = NaN; private chipT = 0;
  constructor(private R: Roads, private lms: LM[], private ui: UI) {
    for (const w of R.ways) if (w.code !== 8) this.total += w.len;
    try {
      const s = JSON.parse(localStorage.getItem('drv2_explore') || 'null');
      if (s) { for (const id of s.lm || []) if (lms.some((l) => l.id === id)) this.found.add(id); for (const i of s.ways || []) if (R.ways[i]) { this.ways.add(i); this.done += R.ways[i].len; } this.km = s.km || 0; }
    } catch { /* kayıt yoksa sıfırdan */ }
    this.chip();
  }
  get markers(): Marker[] { return this.lms.map((l) => ({ x: l.x, z: l.z, found: this.found.has(l.id), name: l.name })); }
  get percent() { return this.total ? (this.done / this.total) * 100 : 0; }
  private chip() { this.ui.chip.textContent = `🧭 ${this.found.size}/${this.lms.length} · %${this.percent.toFixed(1).replace('.', ',')} sokak · ${this.km.toFixed(1).replace('.', ',')} km`; }
  private save() { try { localStorage.setItem('drv2_explore', JSON.stringify({ lm: [...this.found], ways: [...this.ways], km: Math.round(this.km * 100) / 100 })); } catch { /* dolu ya da kapalı */ } }
  reset() { this.found.clear(); this.ways.clear(); this.km = 0; this.done = 0; this.save(); this.chip(); }
  update(dt: number, car: { x: number; z: number; y: number; speed: number }) {
    // yol sayacı
    if (!Number.isNaN(this.lastX)) { const d = Math.hypot(car.x - this.lastX, car.z - this.lastZ); if (d < 20) this.km += d / 1000; }
    this.lastX = car.x; this.lastZ = car.z;
    // gezilen sokak: üstünde olduğumuz yol
    const n = this.R.nearest(car.x, car.z, 7, (w) => w.code !== 8, car.y);
    if (n && !this.ways.has(n.w.i)) { this.ways.add(n.w.i); this.done += n.w.len; }
    // anıt keşfi
    for (const l of this.lms) {
      if (this.found.has(l.id)) continue;
      if (Math.hypot(l.x - car.x, l.z - car.z) < (RADIUS[l.id] ?? 55)) {
        this.found.add(l.id); this.save(); this.chip();
        this.ui.cardTitle.textContent = `Keşfedildi: ${l.name}  (${this.found.size}/${this.lms.length})`;
        this.ui.cardText.textContent = FACTS[l.id] || ''; this.ui.card.classList.add('on'); this.cardT = 9; this.ui.chime();
      }
    }
    if (this.cardT > 0) { this.cardT -= dt; if (this.cardT <= 0) this.ui.card.classList.remove('on'); }
    this.chipT += dt; if (this.chipT > 1) { this.chipT = 0; this.chip(); }
    this.saveT += dt; if (this.saveT > 15) { this.saveT = 0; this.save(); }
  }
}
