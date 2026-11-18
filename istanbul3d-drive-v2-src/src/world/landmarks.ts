// Önemli yapılar (Ayasofya, Sultanahmet, Galata…): haritanın hazır 3B modelleri (istanbul3d/models), zemine oturtulur.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

export interface LM { id: string; name: string; model: string; x: number; z: number; y: number; ry: number; s: number }

export async function loadLandmarks(list: LM[], base: string, group: THREE.Group, onEach?: () => void) {
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
  for (const L of list) {
    try {
      const gltf = await loader.loadAsync(`${base}models/${L.model}`);
      const lod = new THREE.LOD(); lod.name = L.name;
      const add = (node: THREE.Object3D | undefined, d: number) => {
        if (!node) return; node.traverse((o) => { const m = o as THREE.Mesh; if (m.isMesh) { m.material = mat; m.castShadow = true; m.receiveShadow = true; if (!m.geometry.getAttribute('color')) { const n = m.geometry.attributes.position.count, a = new Float32Array(n * 3).fill(0.85); m.geometry.setAttribute('color', new THREE.BufferAttribute(a, 3)); } } });
        lod.addLevel(node, d);
      };
      const l0 = gltf.scene.getObjectByName('LOD0'), l1 = gltf.scene.getObjectByName('LOD1');
      if (l0) { add(l0, 0); add(l1, 700); } else add(gltf.scene, 0);
      lod.position.set(L.x, L.y, L.z); lod.rotation.y = L.ry; lod.scale.setScalar(L.s);
      group.add(lod); onEach?.();
    } catch (e) { console.warn('landmark', L.id, e); }
  }
}
