// Bosphorus Drift — veri hazırlama (bir kez çalışır).
// Girdi: ../istanbul3d-drive-v2/data (İstanbul 3D Sürüş v2 verisi), ../istanbul3d/models (simge yapılar)
// Çıktı: ../bosphorus-drift/data (yalnız Galata–Karaköy ve karşı kıyı), ../bosphorus-drift/models
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(HERE, '../../istanbul3d-drive-v2/data');
const MOD = path.resolve(HERE, '../../istanbul3d/models');
const OUT = path.resolve(HERE, '../../bosphorus-drift/data');
const OUTM = path.resolve(HERE, '../../bosphorus-drift/models');
fs.mkdirSync(OUT, { recursive: true }); fs.mkdirSync(OUTM, { recursive: true });

const B = { x0: -1300, x1: 500, z0: -900, z1: 1000 };
const meta = JSON.parse(fs.readFileSync(`${SRC}/meta.json`, 'utf8'));

// ---- zemin ----
const g = meta.grid, raw = fs.readFileSync(`${SRC}/ground.bin`), N = g.nx * g.nz;
const i0 = Math.floor((B.x0 - g.x0) / g.step), i1 = Math.ceil((B.x1 - g.x0) / g.step), j0 = Math.floor((B.z0 - g.z0) / g.step), j1 = Math.ceil((B.z1 - g.z0) / g.step);
const nx = i1 - i0 + 1, nz = j1 - j0 + 1, out = Buffer.alloc(nx * nz * 3);
for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
  const k = (j + j0) * g.nx + (i + i0), o = j * nx + i;
  out.writeInt16LE(raw.readInt16LE(k * 2), o * 2); out.writeUInt8(raw.readUInt8(N * 2 + k), nx * nz * 2 + o);
}
fs.writeFileSync(`${OUT}/ground.bin`, out);
const grid = { x0: g.x0 + i0 * g.step, z0: g.z0 + j0 * g.step, step: g.step, nx, nz };

// ---- binalar: kırpılan alana değen 250 m parçalar ----
const braw = fs.readFileSync(`${SRC}/buildings.bin`), CH = meta.chunk, parts = [], index = [];
let off = 0;
for (const [ci, cj, o, len, cnt] of meta.chunks) {
  const cx = (ci + 0.5) * CH, cz = (cj + 0.5) * CH;
  if (cx + CH / 2 < B.x0 || cx - CH / 2 > B.x1 || cz + CH / 2 < B.z0 || cz - CH / 2 > B.z1) continue;
  parts.push(braw.subarray(o, o + len)); index.push([ci, cj, off, len, cnt]); off += len;
}
fs.writeFileSync(`${OUT}/buildings.bin`, Buffer.concat(parts));

// ---- ağaçlar ----
const traw = fs.readFileSync(`${SRC}/trees.bin`), trees = [];
for (let p = 0; p + 10 <= traw.length; p += 10) {
  const x = traw.readFloatLE(p), z = traw.readFloatLE(p + 4);
  if (x >= B.x0 && x <= B.x1 && z >= B.z0 && z <= B.z1) trees.push(traw.subarray(p, p + 10));
}
fs.writeFileSync(`${OUT}/trees.bin`, Buffer.concat(trees));

// ---- yollar (sokak çizgileri, zemine boyanır) ----
const R = JSON.parse(fs.readFileSync(`${SRC}/roads.json`, 'utf8'));
const ways = [];
for (const w of R.ways) {
  if (w[4]) continue; // köprüler hariç
  const c = w[5]; let inside = false;
  for (let i = 0; i < c.length; i += 2) if (c[i] >= B.x0 && c[i] <= B.x1 && c[i + 1] >= B.z0 && c[i + 1] <= B.z1) { inside = true; break; }
  if (inside) ways.push([w[0], w[1], c]);
}
fs.writeFileSync(`${OUT}/roads.json`, JSON.stringify(ways));

// ---- simge yapılar ----
const want = ['galata', 'yenicami', 'nusretiye', 'rustempasa'];
const landmarks = meta.landmarks.filter((l) => want.includes(l.id));
for (const l of landmarks) fs.copyFileSync(`${MOD}/${l.model}`, `${OUTM}/${l.model}`);

fs.writeFileSync(`${OUT}/meta.json`, JSON.stringify({
  note: 'Bosphorus Drift verisi (İstanbul 3D Sürüş v2’den kırpıldı). OSM (c) OpenStreetMap contributors (ODbL); arazi Copernicus DEM GLO-30 (© DLR, Airbus DS).',
  grid, chunk: CH, chunks: index, palette: meta.palette, landmarks,
}));
console.log(`zemin ${nx}×${nz}, bina parçası ${index.length} (${(off / 1e6).toFixed(2)} MB), ağaç ${trees.length}, yol ${ways.length}, model ${landmarks.length}`);
