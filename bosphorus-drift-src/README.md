# Bosphorus Drift — kaynak

İstanbul'da geçen, Crash Team Racing esintili pastel kart yarışı. İlk pist: Galata Kulesi'ne sarmal rampa.

- `npm install` · `npm run dev` (geliştirme) · `npm run build` → çıktı `../bosphorus-drift/`
- Test parametreleri: `?skip` (menüyü atla), `?auto` (oyuncu otomatik sürer), `?at=METRE` (pistte başlangıç noktası), `?fast=N` (hızlandırılmış simülasyon)

## Dosyalar
- `trackpath.ts` pistin çizimi (düz/viraj komutları), `track.ts` konum sorguları ve pist örgüsü
- `scenery.ts` gökyüzü, deniz, evler, Galata Kulesi, karşı kıyı, vapurlar, martılar
- `characters.ts` 6 karakter ve kartlar (ilkel şekillerden)
- `kart.ts` fizik, tek tuş drift + 3 kademe turbo · `ai.ts` rakipler · `items.ts` kutular, simit, pedler, martı/çay/nazar/turbo
- `audio.ts` sentez sesler ve Hicaz döngüsü · `hud.ts` simgeler, mini harita · `main.ts` oyun döngüsü ve menüler
