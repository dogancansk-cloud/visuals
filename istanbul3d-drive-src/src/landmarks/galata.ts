// Galata Kulesi landmark builder (v4): toy model of the present-day tower (Mahmud II silhouette as rebuilt 1964-67):
// stone shaft Ø16.45 m, corbel ring at 32.60 m, 14-arch storey to 40.04 m, balcony on corbels, walkway storey, lead cone to 62.59 m,
// finial to 66.90 m. Files: public/models/galata.web.glb + galata.anchor.json; plain copy models_game/galata.glb (data_pipeline/galata/).
// The stone material gets a processed FreeStylized CC0 texture (stone_bricks_wall_04 -> public/tex/galata_stone_512.jpg, neutral
// luminance, tinted by the vertex colours) with cylindrical UVs computed here, so the glb format stays the same as the other landmarks.
import * as THREE from 'three';
import type { BuildOptions } from './ayasofya';
import { buildGltfLandmark } from './topkapi';

const TILE = 5.0; // metres per texture repeat (≈0.5 m stone courses)
function cylUV(g: THREE.BufferGeometry) {
  const p = g.attributes.position, n = p.count, uv = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i), r = Math.hypot(x, z);
    uv[i * 2] = (Math.atan2(x, z) * Math.max(r, 1)) / TILE; uv[i * 2 + 1] = y / TILE;
  }
  // un-wrap triangles that straddle the atan2 seam (geometry is non-indexed / sequential per triangle)
  const idx = g.index ? (g.index.array as ArrayLike<number>) : null, tc = idx ? idx.length / 3 : n / 3;
  for (let t = 0; t < tc; t++) {
    const v = [0, 1, 2].map((k) => (idx ? idx[t * 3 + k] : t * 3 + k));
    const us = v.map((k) => uv[k * 2]); const span = Math.max(...us) - Math.min(...us);
    if (span > 2) { const r = Math.max(1, ...v.map((k) => Math.hypot(p.getX(k), p.getZ(k)))), C = (2 * Math.PI * r) / TILE;
      for (const k of v) if (uv[k * 2] < 0) uv[k * 2] += C; }
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}

export async function buildGalata(o: BuildOptions) {
  const lm = await buildGltfLandmark('galata', o);
  const tex = await new THREE.TextureLoader().loadAsync(`${o.base}tex/galata_stone_512.jpg`);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const mat = lm.materials[0] as THREE.MeshStandardMaterial; mat.map = tex; mat.needsUpdate = true;
  lm.object.traverse((x) => { const m = x as THREE.Mesh; if (m.isMesh && m.material === mat) cylUV(m.geometry); });
  return lm;
}
