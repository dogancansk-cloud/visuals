# İstanbul 3D — Sürüş v2 (kaynak)

Temiz yeniden yazım. `npm run build` → `../istanbul3d-drive-v2/` (yayınlanan sayfa). Eski oyun (`../istanbul3d-drive/`) dokunulmadan yayında kalır.

- `npm run prep` — veriyi bir kez hazırlar: `../istanbul3d/data` (binalar, arazi) + `../istanbul3d-drive/data/drive_world.json` (yollar) → `../istanbul3d-drive-v2/data/`
- `npm run dev` — yerel geliştirme sunucusu
- `npm run build` — yayın dosyaları

Klasörler: `src/world` (zemin, yollar, binalar, ağaç/lamba, deniz, önemli yapılar), `src/game` (araba, kontroller, ses, trafik ışıkları, trafik/yaya, görevler, küçük harita), `src/env.ts` (gün/gece, hava).

Adres parametreleri (test için): `?spawn=eminonu|karakoy|sultanahmet|taksim|besiktas`, `?hour=21`, `?weather=yagmur|sis|bulutlu|acik`, `?q=dusuk|orta|yuksek`.
