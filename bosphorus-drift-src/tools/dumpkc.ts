import { buildBazaarTrack } from '../src/kc/kcpath';
const T = buildBazaarTrack();
console.log(JSON.stringify({ n: T.n, L: T.length, x: [...T.x], y: [...T.y], z: [...T.z], w: [...T.w], f: [...T.flags] }));
