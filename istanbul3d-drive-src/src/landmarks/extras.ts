// Small extra landmarks (Nusretiye Camii, Aya Triada, Sent Antuan): toy models from data_pipeline/<id>/ (OSM outline + published figures),
// loaded like the other glTF landmarks. The matte material gets a processed FreeStylized CC0 texture (neutral luminance, tinted by the
// vertex colours) with box-projected UVs computed here (per triangle, by its dominant normal axis), so the glb format stays unchanged.
import * as THREE from 'three';
import type { BuildOptions } from './ayasofya';
import { buildGltfLandmark } from './topkapi';

function boxUV(g: THREE.BufferGeometry, tile: number) {
  const p = g.attributes.position, n = p.count, uv = new Float32Array(n * 2);
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), e1 = new THREE.Vector3(), e2 = new THREE.Vector3();
  const idx = g.index ? (g.index.array as ArrayLike<number>) : null, tc = idx ? idx.length / 3 : n / 3;
  for (let t = 0; t < tc; t++) {
    const v = [0, 1, 2].map((k) => (idx ? idx[t * 3 + k] : t * 3 + k));
    a.fromBufferAttribute(p, v[0]); b.fromBufferAttribute(p, v[1]); c.fromBufferAttribute(p, v[2]);
    const nn = e1.subVectors(b, a).cross(e2.subVectors(c, a)); const ax = Math.abs(nn.x), ay = Math.abs(nn.y), az = Math.abs(nn.z);
    for (const k of v) { const x = p.getX(k), y = p.getY(k), z = p.getZ(k);
      if (ay > ax && ay > az) { uv[k * 2] = x / tile; uv[k * 2 + 1] = z / tile; }
      else if (ax > az) { uv[k * 2] = z / tile; uv[k * 2 + 1] = y / tile; }
      else { uv[k * 2] = x / tile; uv[k * 2 + 1] = y / tile; } }
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}
const TEX: Record<string, [string, number]> = { nusretiye: ['stone_ashlar_512.jpg', 4.0], ayatriada: ['stone_ashlar_512.jpg', 4.0], stantoine: ['brick_red_512.jpg', 2.4] };
export async function buildExtra(id: string, o: BuildOptions) {
  const lm = await buildGltfLandmark(id, o);
  const [file, tile] = TEX[id];
  const tex = await new THREE.TextureLoader().loadAsync(`${o.base}tex/${file}`);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const mat = lm.materials[0] as THREE.MeshStandardMaterial; mat.map = tex; mat.needsUpdate = true;
  lm.object.traverse((x) => { const m = x as THREE.Mesh; if (m.isMesh && m.material === mat) boxUV(m.geometry, tile); });
  return lm;
}
