import { buildBosphorusTrack, BG_MARKS } from '../src/bg/bgpath';
const T = buildBosphorusTrack();
console.log(JSON.stringify({ n: T.n, L: T.length, x: [...T.x], y: [...T.y], z: [...T.z], w: [...T.w], f: [...T.flags], marks: BG_MARKS, tower: T.tower }));
