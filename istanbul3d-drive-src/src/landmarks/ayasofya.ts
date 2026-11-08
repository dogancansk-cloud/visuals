// Ayasofya (Hagia Sophia) landmark builder: Grokisual's finished diorama v6.2, 'today' state (2020, step 23), as a reusable glTF asset.
// Files (public/models/): ayasofya.glb (plain, any engine), ayasofya.web.glb (meshopt + quantized, LOD0 + LOD1), ayasofya.anchor.json
// (real-world anchor: lat/lon of the model origin, rotation, scale; source; heights, partly [doğrulanmadı]).
// Model frame: metres, +Y up, origin = main dome centre at ground, +X = apse axis, +Z = south side.
// Usage: const aya = await buildAyasofya({ base: import.meta.env.BASE_URL, project: (lon, lat) => [x, z] }); scene.add(aya.object);
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export interface LandmarkAnchor {
  format: string; id: string; name: string; source: string; model: string; model_web: string;
  anchor: { lat: number; lon: number; what: string }; rotation_deg: number; three_rotation_y_rad: number; scale_m: number;
  heights_m: Record<string, number | string>; footprint_map_xz: Record<string, number[][][]>;
}
export interface BuildOptions {
  base: string;                                   // URL prefix of the models/ folder's parent (e.g. import.meta.env.BASE_URL)
  project: (lon: number, lat: number) => number[]; // lon/lat -> [x, z] in the host map (+X east, +Z south)
  groundY?: (x: number, z: number) => number;     // terrain height at the anchor (default 0)
  lodDistance?: number;                           // camera distance (m) where the lighter LOD1 takes over
  shadows?: boolean;
}
export interface BuiltLandmark { object: THREE.Object3D; anchor: LandmarkAnchor; triangles: number[]; materials: THREE.Material[] }

// glTF -> float geometry with position / normal / color (rgb), so parts can be merged into one mesh per material
function toFloat(g: THREE.BufferGeometry, m: THREE.Matrix4) {
  const out = new THREE.BufferGeometry(), n = g.attributes.position.count;
  for (const [name, size] of [['position', 3], ['normal', 3], ['color', 3]] as const) {
    const a = g.getAttribute(name) as THREE.BufferAttribute | undefined, f = new Float32Array(n * size);
    for (let i = 0; i < n; i++) { f[i * size] = a ? a.getX(i) : 1; f[i * size + 1] = a ? a.getY(i) : 1; f[i * size + 2] = a ? a.getZ(i) : 1; }
    out.setAttribute(name, new THREE.BufferAttribute(f, size));
  }
  if (g.index) out.setIndex(Array.from(g.index.array as ArrayLike<number>));
  out.applyMatrix4(m);
  return out;
}
function mergedByMaterial(root: THREE.Object3D, mats: Record<string, THREE.Material>, shadows: boolean) {
  root.updateMatrixWorld(true);
  // relative to the LOD node's parent, so a scale on the LOD node itself (quantized LOD1) is kept
  const inv = (root.parent ?? root).matrixWorld.clone().invert(), parts: Record<string, THREE.BufferGeometry[]> = {};
  root.traverse((o) => {
    const m = o as THREE.Mesh; if (!m.isMesh) return;
    const key = (m.material as THREE.Material).name.includes('lead') ? 'lead' : 'matte';
    (parts[key] ||= []).push(toFloat(m.geometry, new THREE.Matrix4().multiplyMatrices(inv, m.matrixWorld)));
  });
  const g = new THREE.Group(); let tris = 0;
  for (const [k, list] of Object.entries(parts)) {
    const geo = mergeGeometries(list)!; list.forEach((x) => x.dispose());
    const mesh = new THREE.Mesh(geo, mats[k]); mesh.castShadow = mesh.receiveShadow = shadows; mesh.name = k; g.add(mesh);
    tris += (geo.index ? geo.index.count : geo.attributes.position.count) / 3;
  }
  return { g, tris };
}

export async function loadAnchor(base: string, id = 'ayasofya'): Promise<LandmarkAnchor> {
  return (await fetch(`${base}models/${id}.anchor.json`)).json();
}

export async function buildAyasofya(o: BuildOptions): Promise<BuiltLandmark> {
  const anchor = await loadAnchor(o.base);
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  const gltf = await loader.loadAsync(`${o.base}models/${anchor.model_web}`);
  const shadows = o.shadows ?? true;
  // the diorama's clay look: matte plaster / stone and slightly glossy grey lead (domes) + gold alems; colours come per vertex
  const mats = {
    matte: new THREE.MeshStandardMaterial({ name: 'ayasofya_matte', vertexColors: true, roughness: 0.9, metalness: 0, side: THREE.DoubleSide }),
    lead: new THREE.MeshStandardMaterial({ name: 'ayasofya_lead_gold', vertexColors: true, roughness: 0.68, metalness: 0, side: THREE.DoubleSide }),
  };
  const lod = new THREE.LOD(); lod.name = 'Ayasofya';
  const tri: number[] = [];
  const l0 = gltf.scene.getObjectByName('LOD0'), l1 = gltf.scene.getObjectByName('LOD1');
  if (!l0) throw new Error('ayasofya: LOD0 missing');
  { const { g, tris } = mergedByMaterial(l0, mats, shadows); lod.addLevel(g, 0); tri.push(tris); }
  if (l1) { const { g, tris } = mergedByMaterial(l1, mats, shadows); lod.addLevel(g, o.lodDistance ?? 900); tri.push(tris); }
  gltf.scene.traverse((x) => { const m = x as THREE.Mesh; if (m.isMesh) m.geometry.dispose(); });
  const [x, z] = o.project(anchor.anchor.lon, anchor.anchor.lat);
  lod.position.set(x, o.groundY ? o.groundY(x, z) : 0, z);
  lod.rotation.y = anchor.three_rotation_y_rad;
  lod.scale.setScalar(anchor.scale_m);
  lod.userData = { id: anchor.id, source: anchor.source };
  return { object: lod, anchor, triangles: tri, materials: [mats.matte, mats.lead] };
}
