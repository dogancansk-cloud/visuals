import { buildTrack } from '../src/trackpath';
const T = buildTrack();
console.log(JSON.stringify({ n: T.n, L: T.length, tower: T.tower, x: [...T.x], y: [...T.y], z: [...T.z], w: [...T.w], f: [...T.flags] }));
