// İnsan figürü (kodla üretilir): gövde + baş, sallanan kollar ve bacaklar. Beyaz yüzeyler örnek rengiyle boyanır
// (gömlek/pantolon); ten, saç ve ayakkabı kendi renginde kalır.
import * as THREE from 'three';
import { part } from './carmodel';
import { finish } from './vehicles';

const W = new THREE.Color(1, 1, 1), SKIN = new THREE.Color('#d6a583'), SHOE = new THREE.Color('#1c1c1e');
const cap = (r: number, len: number, sx: number, sz: number, y: number, c: THREE.Color, z = 0) => part(new THREE.CapsuleGeometry(r, len, 2, 8).scale(sx, 1, sz).translate(0, y, z), c);
export const PED = { hip: 0.86, shoulder: 1.4, shoulderX: 0.225, hipX: 0.085 };

/** gövde + baş. variant 0: kısa saç, ceket; 1: uzun saç, uzun üstlük; 2: başörtülü, uzun pardösü */
export function bodyGeom(variant: 0 | 1 | 2) {
  const parts: THREE.BufferGeometry[] = [];
  if (variant === 0) parts.push(cap(0.15, 0.34, 1.22, 0.78, 1.17, W));
  else if (variant === 1) parts.push(cap(0.15, 0.44, 1.12, 0.8, 1.1, W));
  else parts.push(part(new THREE.CylinderGeometry(0.17, 0.25, 1.1, 10).scale(1, 1, 0.8).translate(0, 0.9, 0), W), cap(0.15, 0.1, 1.15, 0.8, 1.38, W));
  parts.push(part(new THREE.CylinderGeometry(0.05, 0.055, 0.1, 6).translate(0, 1.51, 0), SKIN), part(new THREE.SphereGeometry(0.112, 10, 8).scale(0.95, 1.08, 1).translate(0, 1.64, 0.005), SKIN));
  if (variant === 0) parts.push(part(new THREE.SphereGeometry(0.12, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.52).translate(0, 1.655, -0.018), new THREE.Color('#2a1e16')));
  else if (variant === 1) parts.push(part(new THREE.SphereGeometry(0.125, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.55).translate(0, 1.655, -0.02), new THREE.Color('#4a2f1c')), part(new THREE.SphereGeometry(0.11, 8, 6).scale(1, 1.5, 0.6).translate(0, 1.52, -0.08), new THREE.Color('#4a2f1c')));
  else parts.push(part(new THREE.SphereGeometry(0.128, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.62).translate(0, 1.65, -0.02), new THREE.Color('#c9c2b4')), part(new THREE.SphereGeometry(0.12, 8, 6).scale(1.05, 1.2, 0.8).translate(0, 1.5, -0.04), new THREE.Color('#c9c2b4')));
  return finish(parts);
}
/** kol: omuzdan aşağı sarkar (dönme merkezi omuz) */
export function armGeom() { return finish([cap(0.048, 0.42, 1, 1, -0.26, W), part(new THREE.SphereGeometry(0.05, 6, 5).translate(0, -0.56, 0), SKIN)]); }
/** bacak: kalçadan aşağı (dönme merkezi kalça) */
export function legGeom() { return finish([cap(0.07, 0.6, 1, 1, -0.4, W), part(new THREE.BoxGeometry(0.11, 0.08, 0.25).translate(0, -0.82, 0.045), SHOE)]); }

/** duran figür (seyyar satıcı vb.): renkleri köşelere işlenmiş tek geometri */
export function staticPerson(shirt: string, pants: string, variant: 0 | 1 | 2 = 0) {
  const tintTo = (g: THREE.BufferGeometry, hex: string) => { const c = new THREE.Color(hex), col = g.attributes.color, fx = g.attributes.aFx; for (let i = 0; i < col.count; i++) if (fx.getX(i) > 0.5) col.setXYZ(i, c.r, c.g, c.b); g.deleteAttribute('aFx'); return g; };
  const out = [tintTo(bodyGeom(variant), shirt)];
  for (const s of [-1, 1]) out.push(tintTo(armGeom(), shirt).rotateX(-0.5).translate(s * PED.shoulderX, PED.shoulder, 0), tintTo(legGeom(), pants).translate(s * PED.hipX, PED.hip, 0));
  return out;
}
