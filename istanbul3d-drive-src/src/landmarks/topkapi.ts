// Topkapı Sarayı landmark builder (present-day state, toy style), same pattern as ayasofya.ts.
// Files (public/models/): topkapi.web.glb (meshopt + quantized, LOD0 + LOD1), topkapi.anchor.json (landmark-anchor/0.1 draft);
// plain copy for other engines in models_game/topkapi.glb. Built by data_pipeline/topkapi/ from OSM footprints (ODbL).
// Model frame: metres, +Y up, map axes (+X east, +Z south), origin = Adalet Kulesi base at ground. The Sur-ı Sultani /
// Sarayburnu walls are part of the model; court trees are added to scene.json so they use the map's own tree system.
// Usage: const tk = await buildTopkapi({ base: import.meta.env.BASE_URL, project: (lon, lat) => [x, z] }); scene.add(tk.object);
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { BuildOptions, BuiltLandmark, LandmarkAnchor } from './ayasofya';

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

// generic: any landmark-anchor/0.1 asset with LOD0 (+ optional LOD1) nodes and matte / lead_gold materials
export async function buildGltfLandmark(id: string, o: BuildOptions): Promise<BuiltLandmark> {
  const anchor: LandmarkAnchor = await (await fetch(`${o.base}models/${id}.anchor.json`)).json();
  const gltf = await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync(`${o.base}models/${anchor.model_web}`);
  const shadows = o.shadows ?? true;
  const mats = {
    matte: new THREE.MeshStandardMaterial({ name: `${id}_matte`, vertexColors: true, roughness: 0.9, metalness: 0, side: THREE.DoubleSide }),
    lead: new THREE.MeshStandardMaterial({ name: `${id}_lead_gold`, vertexColors: true, roughness: 0.68, metalness: 0, side: THREE.DoubleSide }),
  };
  const lod = new THREE.LOD(); lod.name = anchor.name || id;
  const tri: number[] = [];
  const l0 = gltf.scene.getObjectByName('LOD0'), l1 = gltf.scene.getObjectByName('LOD1');
  if (!l0) throw new Error(`${id}: LOD0 missing`);
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

export const buildTopkapi = (o: BuildOptions) => buildGltfLandmark('topkapi', o);
