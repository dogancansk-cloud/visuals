import fs from 'node:fs';
import { buildTrack } from '../src/trackpath';
const D = '../bosphorus-drift/data/';
const meta = JSON.parse(fs.readFileSync(D + 'meta.json', 'utf8')), g = meta.grid, raw = fs.readFileSync(D + 'ground.bin');
const H = (x: number, z: number) => {
  const fx = Math.min(Math.max((x - g.x0) / g.step, 0), g.nx - 1.001), fz = Math.min(Math.max((z - g.z0) / g.step, 0), g.nz - 1.001);
  const i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j, h = (a: number, b: number) => raw.readInt16LE(((j + b) * g.nx + i + a) * 2) / 100;
  return (h(0, 0) * (1 - u) + h(1, 0) * u) * (1 - v) + (h(0, 1) * (1 - u) + h(1, 1) * u) * v;
};
const T = buildTrack(H);
console.log(JSON.stringify({ n: T.n, L: T.length, tower: T.tower, x: [...T.x], y: [...T.y], z: [...T.z], w: [...T.w], f: [...T.flags], g: [...T.x].map((x, i) => H(x, T.z[i])) }));
