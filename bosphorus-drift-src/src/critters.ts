// İri kafalı, gözlü çizgi film seyirciler (martı ve kedi): Galata tribünleri ve Kapalıçarşı dükkân önleri ortak kullanır. +x'e bakarlar.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export function critterGeos() {
    const sp = (r: number, x: number, y: number, z: number, sx = 1, sy = 1, sz = 1, w = 9, h = 6) => { const g = new THREE.SphereGeometry(r, w, h); g.scale(sx, sy, sz); g.translate(x, y, z); return g; };
    const eyesG = (x: number, y: number, z: number, r: number) => mergeGeometries([-1, 1].map((sd) => sp(r, x, y, sd * z, 0.6, 1.2, 1, 6, 5)));
    // iri kafalı, gözlü çizgi film seyirciler (+x'e bakar)
    const gull = mergeGeometries([sp(0.36, 0, 0.42, 0, 0.9, 1, 0.82), sp(0.31, 0.03, 1.0, 0, 1, 0.95, 1, 10, 7)]);
    const beak = mergeGeometries([((g) => { g.rotateZ(-Math.PI / 2 - 0.1); g.translate(0.42, 0.95, 0); return g; })(new THREE.ConeGeometry(0.1, 0.36, 7))]);
    const wing = mergeGeometries([-1, 1].map((sd) => { const g = new THREE.SphereGeometry(0.2, 7, 5); g.scale(0.7, 0.28, 1.25); g.rotateX(sd * 0.95); g.translate(-0.02, 0.62, sd * 0.42); return g; }));
    const cat = mergeGeometries([
      sp(0.34, 0, 0.4, 0, 0.9, 1, 0.85), sp(0.33, 0.03, 0.97, 0, 0.95, 0.9, 1.12, 10, 7),
      ...[-1, 1].map((sd) => { const g = new THREE.ConeGeometry(0.13, 0.28, 4); g.rotateY(Math.PI / 4); g.rotateX(sd * 0.3); g.translate(0, 1.3, sd * 0.2); return g; }),
      ...[0, 1, 2, 3].map((k) => sp(0.075, -0.3 - Math.sin(k * 0.6) * 0.14, 0.2 + k * 0.17, 0, 1, 1.2, 1, 6, 5)),
    ]);
    const catWhite = mergeGeometries([sp(0.2, 0.17, 0.4, 0, 0.6, 1.1, 0.9, 7, 5), ...[-1, 1].map((sd) => sp(0.1, 0.27, 0.88, sd * 0.07, 0.8, 0.7, 1, 6, 5))]);
    const gullEyes = eyesG(0.27, 1.07, 0.13, 0.05), catEyes = eyesG(0.29, 1.03, 0.14, 0.06);
    return { gull, beak, wing, gullEyes, cat, catWhite, catEyes };
}
