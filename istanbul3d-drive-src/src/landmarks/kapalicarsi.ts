// Kapalıçarşı (Grand Bazaar), generated from data/kapalicarsi.json (OSM plan). Heights yaklaşık.
import * as THREE from 'three';
type HFn = (x: number, z: number) => number;
export function buildKapalicarsi(K: any, H: HFn, narrow: boolean) {
  const pos: number[] = [], col: number[] = [], c = new THREE.Color();
  const tri = (a: number[], b: number[], d: number[], k: string | THREE.Color) => { pos.push(...a, ...b, ...d); c.set(k as any); for (let i = 0; i < 3; i++) col.push(c.r, c.g, c.b); };
  const hs = (n: number) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
  const TILE = ['#b8643f', '#c06a43', '#ad5c3b', '#c27350', '#b05f40'], WALL = '#d9cbb4';
  const ring = (p: number[]) => { const v: THREE.Vector2[] = []; for (let i = 0; i < p.length; i += 2) v.push(new THREE.Vector2(p[i], p[i + 1])); if (THREE.ShapeUtils.isClockWise(v)) v.reverse(); return v; };
  const O = ring(K.outline); let g0 = 0; for (const v of O) g0 += H(v.x, v.y); g0 /= O.length;
  const G = (x: number, z: number) => H(x, z); // wm6: the map pads the ground under the bazaar, so it follows the same H() as its neighbours
  const EAVE = 7.0;
  // outer wall (perimeter) + block walls
  const walls = (v: THREE.Vector2[], h0: number, h1: number, k: string) => { for (let i = 0; i < v.length; i++) { const a = v[i], b = v[(i + 1) % v.length], ga = G(a.x, a.y), gb = G(b.x, b.y);
    tri([a.x, ga + h0, a.y], [b.x, gb + h0, b.y], [b.x, gb + h1, b.y], k); tri([a.x, ga + h0, a.y], [b.x, gb + h1, b.y], [a.x, ga + h1, a.y], k); } };
  walls(O, -1, EAVE, WALL);
  // shop cells: hipped roofs (rectangles) or pyramids (odd shapes)
  const domes: number[][] = [], chims: number[][] = [];
  K.cells.forEach((q: any, i: number) => {
    const v = ring(q.p); let cx = 0, cz = 0; for (const p of v) { cx += p.x; cz += p.y; } cx /= v.length; cz /= v.length;
    const t = TILE[Math.floor(hs(i) * TILE.length)], dark = new THREE.Color(t).multiplyScalar(0.82), e = EAVE + (hs(i * 3.3) - 0.5) * 1.2, gc = G(cx, cz);
    let span = 0; for (const p of v) span = Math.max(span, Math.hypot(p.x - cx, p.y - cz)); const rh = Math.min(2.6, 0.45 * span);
    if (q.r && v.length === 4) { // hip: ridge along the long axis
      const ux = Math.cos(q.a), uz = Math.sin(q.a); let lo = 1e9, hi = -1e9; for (const p of v) { const s = (p.x - cx) * ux + (p.y - cz) * uz; lo = Math.min(lo, s); hi = Math.max(hi, s); }
      const L = hi - lo, ins = Math.min(L * 0.3, 2.5), r1 = [cx + ux * (lo + ins), gc + e + rh, cz + uz * (lo + ins)], r2 = [cx + ux * (hi - ins), gc + e + rh, cz + uz * (hi - ins)];
      for (let k = 0; k < 4; k++) { const a = v[k], b = v[(k + 1) % 4], ga = G(a.x, a.y) + e, gb = G(b.x, b.y) + e;
        const sa = (a.x - cx) * ux + (a.y - cz) * uz, sb = (b.x - cx) * ux + (b.y - cz) * uz, ra = sa < 0 ? r1 : r2, rb = sb < 0 ? r1 : r2;
        const sh = k % 2 ? t : dark;
        if (ra === rb) tri([a.x, ga, a.y], [b.x, gb, b.y], ra, sh); else { tri([a.x, ga, a.y], [b.x, gb, b.y], rb, sh); tri([a.x, ga, a.y], rb, ra, sh); } }
    } else { const ap = [cx, gc + e + rh * 0.8, cz]; for (let k = 0; k < v.length; k++) { const a = v[k], b = v[(k + 1) % v.length]; tri([a.x, G(a.x, a.y) + e, a.y], [b.x, G(b.x, b.y) + e, b.y], ap, k % 2 ? t : dark); } }
    if (hs(i * 7.1) < 0.22) domes.push([cx + (hs(i * 9.1) - 0.5) * span * 0.6, gc + e + rh * 0.5, cz + (hs(i * 4.7) - 0.5) * span * 0.6, 1.3 + hs(i) * 0.9]);
    if (hs(i * 5.9) < (narrow ? 0.15 : 0.3)) chims.push([cx + (hs(i * 2.1) - 0.5) * span, gc + e + rh * 0.4, cz + (hs(i * 6.3) - 0.5) * span]);
  });
  // covered streets: pitched roof strips (tile) with a pale ridge / skylight line on top
  const sw = K.sw / 2 + 0.6;
  for (const s of K.streets as number[][][]) for (let i = 0; i < s.length - 1; i++) {
    const [ax, az] = s[i], [bx, bz] = s[i + 1], L = Math.hypot(bx - ax, bz - az); if (L < 0.5) continue;
    const nx = -(bz - az) / L * sw, nz = (bx - ax) / L * sw, ga = G(ax, az), gb = G(bx, bz), e = EAVE + 0.6, rt = e + 1.6;
    const A1 = [ax + nx, ga + e, az + nz], B1 = [bx + nx, gb + e, bz + nz], A2 = [ax - nx, ga + e, az - nz], B2 = [bx - nx, gb + e, bz - nz], RA = [ax, ga + rt, az], RB = [bx, gb + rt, bz];
    tri(A1, B1, RB, '#c98a68'); tri(A1, RB, RA, '#c98a68'); tri(B2, A2, RA, '#b97a5c'); tri(B2, RA, RB, '#b97a5c');
    const wx = -(bz - az) / L * 0.45, wz = (bx - ax) / L * 0.28; // pale ridge / skylight strip
    const P1 = [ax + wx, ga + rt + 0.08, az + wz], P2 = [bx + wx, gb + rt + 0.08, bz + wz], P3 = [bx - wx, gb + rt + 0.08, bz - wz], P4 = [ax - wx, ga + rt + 0.08, az - wz];
    tri(P1, P2, P3, '#e6dccd'); tri(P1, P3, P4, '#e6dccd');
  }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); geo.computeVertexNormals();
  const grp = new THREE.Group(); grp.name = 'kapalicarsi';
  const main = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide })); main.castShadow = main.receiveShadow = true; grp.add(main);
  // bedestens: lead-grey block, dome grid (big domes), small domes on the corners
  const lead = new THREE.MeshLambertMaterial({ color: '#b7bcc2' }), stone = new THREE.MeshLambertMaterial({ color: '#cfc6b6' });
  const DG = new THREE.SphereGeometry(1, 14, 5, 0, Math.PI * 2, 0, Math.PI / 2), BXG = new THREE.BoxGeometry(1, 1, 1);
  const nb = K.beds.reduce((a: number, b: any) => a + b.nc * b.nr + 4, 0);
  const dIM = new THREE.InstancedMesh(DG, lead, nb + domes.length), M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), Y = new THREE.Vector3(0, 1, 0), V = new THREE.Vector3(), S = new THREE.Vector3();
  let k = 0;
  for (const b of K.beds) {
    const g = G(b.x, b.z), h = 10.5; Q.setFromAxisAngle(Y, -b.a);
    const blk = new THREE.Mesh(BXG, stone); blk.position.set(b.x, g + h / 2 - 1, b.z); blk.scale.set(b.L, h, b.W); blk.quaternion.copy(Q); blk.castShadow = blk.receiveShadow = true; grp.add(blk);
    const cl = b.L / b.nc, cw = b.W / b.nr, r = Math.min(cl, cw) * 0.44, ux = Math.cos(b.a), uz = Math.sin(b.a);
    for (let i = 0; i < b.nc; i++) for (let j = 0; j < b.nr; j++) { const s = -b.L / 2 + cl * (i + 0.5), t = -b.W / 2 + cw * (j + 0.5);
      dIM.setMatrixAt(k++, M4.compose(V.set(b.x + ux * s - uz * t, g + h - 1, b.z + uz * s + ux * t), Q, S.set(r, r * 0.75, r))); }
    for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { const s = sx * (b.L / 2 - 1.5), t = sz * (b.W / 2 - 1.5);
      dIM.setMatrixAt(k++, M4.compose(V.set(b.x + ux * s - uz * t, g + h + 0.4, b.z + uz * s + ux * t), Q, S.set(1.8, 1.8, 1.8))); }
  }
  const nBig = k;
  for (const d of domes) dIM.setMatrixAt(k++, M4.compose(V.set(d[0], d[1], d[2]), Q.identity(), S.set(d[3], d[3] * 0.8, d[3])));
  dIM.count = k; dIM.castShadow = dIM.receiveShadow = true; dIM.computeBoundingSphere(); grp.add(dIM);
  const chIM = new THREE.InstancedMesh(BXG, new THREE.MeshLambertMaterial({ color: '#8d6a55' }), Math.max(1, chims.length));
  chims.forEach((p, i) => chIM.setMatrixAt(i, M4.compose(V.set(p[0], p[1] + 0.9, p[2]), Q.identity(), S.set(0.8, 1.8, 0.8)))); chIM.count = chims.length; chIM.computeBoundingSphere(); grp.add(chIM);
  return { grp, detail: [chIM], dome: dIM, nBig, outline: K.outline as number[], tris: pos.length / 9 };
}
