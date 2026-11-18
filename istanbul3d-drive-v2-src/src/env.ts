// Gökyüzü, güneş, gün/gece döngüsü ve hava durumu (açık, bulutlu, yağmur, sis).
import * as THREE from 'three';
import { facadeUniforms } from './world/buildings';
import { lampUniform } from './world/props';

export type Weather = 'acik' | 'bulutlu' | 'yagmur' | 'sis';
export const WEATHER_TR: Record<Weather, string> = { acik: 'Açık', bulutlu: 'Bulutlu', yagmur: 'Yağmur', sis: 'Sis' };

const C = (s: string) => new THREE.Color(s);
const SKY = {
  day: { top: C('#5d95cf'), hor: C('#d6e2ea') },
  set: { top: C('#4b5f8f'), hor: C('#f0a36a') },
  night: { top: C('#050913'), hor: C('#16203a') },
};

export class Env {
  hour = 16.5; timeScale = 1 / 60; // 1 gerçek saniye = 1 oyun dakikası
  weather: Weather = 'acik';
  night = 0; wet = 0; rainAmt = 0; fogAmt = 0;
  readonly sun: THREE.DirectionalLight; readonly hemi: THREE.HemisphereLight;
  readonly sky: THREE.Mesh; private skyMat: THREE.ShaderMaterial;
  private stars: THREE.Points; private rain: THREE.LineSegments; private rainPos: Float32Array; private rainN: number;
  readonly fog: THREE.Fog;
  readonly sunDir = new THREE.Vector3();
  private clouds: THREE.Mesh;
  constructor(private scene: THREE.Scene, private shadows: boolean, private farFog: number, phone: boolean) {
    this.fog = new THREE.Fog(0xd6e2ea, 200, farFog); scene.fog = this.fog;
    this.hemi = new THREE.HemisphereLight(0xdfe8f0, 0x8a7d66, 1.2); scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xfff1dc, 2.4);
    if (shadows) {
      this.sun.castShadow = true; const s = this.sun.shadow; s.mapSize.set(phone ? 1024 : 2048, phone ? 1024 : 2048);
      const cam = s.camera as THREE.OrthographicCamera; cam.left = -90; cam.right = 90; cam.top = 90; cam.bottom = -90; cam.near = 1; cam.far = 600; s.bias = -0.0015; s.normalBias = 0.9;
    }
    scene.add(this.sun, this.sun.target);
    this.skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { top: { value: new THREE.Color() }, hor: { value: new THREE.Color() }, sunDir: { value: new THREE.Vector3() }, night: { value: 0 }, cloud: { value: 0 } },
      vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }',
      fragmentShader: `uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir; uniform float night; uniform float cloud; varying vec3 vD;
        void main(){ float h = clamp(vD.y, -0.1, 1.0); vec3 c = mix(hor, top, pow(max(h, 0.0), 0.55));
          float s = max(dot(normalize(vD), sunDir), 0.0); c += vec3(1.0, 0.85, 0.6) * (pow(s, 600.0) * 3.0 + pow(s, 12.0) * 0.25) * (1.0 - night) * (1.0 - cloud * 0.85);
          c = mix(c, vec3(dot(c, vec3(0.33))) * 0.95, cloud * 0.55);
          gl_FragColor = vec4(c, 1.0); }`,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(5000, 24, 12), this.skyMat); this.sky.frustumCulled = false; this.sky.renderOrder = -10; scene.add(this.sky);
    // yıldızlar
    const sp: number[] = []; for (let i = 0; i < 900; i++) { const u = Math.random() * 2 - 1, t = Math.random() * Math.PI * 2, r = Math.sqrt(1 - u * u); if (u < 0.05) continue; sp.push(r * Math.cos(t) * 4500, Math.abs(u) * 4500, r * Math.sin(t) * 4500); }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 2, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false })); this.stars.frustumCulled = false; scene.add(this.stars);
    // bulut katmanı (yarı saydam düzlem, gölgelendiricide gürültü)
    const cm = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, fog: false, uniforms: { t: { value: 0 }, amt: { value: 0.25 }, col: { value: new THREE.Color(1, 1, 1) } },
      vertexShader: 'varying vec2 vU; varying float vF; void main(){ vU = position.xz; vec4 w = modelMatrix * vec4(position,1.0); vF = 1.0 - smoothstep(1500.0, 4000.0, length(position.xz)); gl_Position = projectionMatrix * viewMatrix * w; }',
      fragmentShader: `uniform float t; uniform float amt; uniform vec3 col; varying vec2 vU; varying float vF;
        float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
        float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y); }
        void main(){ vec2 p = vU * 0.0012 + vec2(t * 0.004, t * 0.002); float v = n(p)*0.5 + n(p*2.1)*0.3 + n(p*4.3)*0.2; float a = smoothstep(1.0 - amt, 1.0 - amt + 0.25, v) * vF; gl_FragColor = vec4(col, a * 0.9); }`,
    });
    this.clouds = new THREE.Mesh(new THREE.PlaneGeometry(9000, 9000).rotateX(-Math.PI / 2), cm); this.clouds.position.y = 600; this.clouds.frustumCulled = false; this.clouds.renderOrder = -5; scene.add(this.clouds);
    // yağmur
    this.rainN = phone ? 700 : 1800; this.rainPos = new Float32Array(this.rainN * 6);
    for (let i = 0; i < this.rainN; i++) this.respawnDrop(i, new THREE.Vector3(), true);
    const rg = new THREE.BufferGeometry(); rg.setAttribute('position', new THREE.BufferAttribute(this.rainPos, 3));
    this.rain = new THREE.LineSegments(rg, new THREE.LineBasicMaterial({ color: 0xaab4c0, transparent: true, opacity: 0.45, fog: false })); this.rain.frustumCulled = false; this.rain.visible = false; scene.add(this.rain);
  }
  private respawnDrop(i: number, c: THREE.Vector3, any: boolean) {
    const x = c.x + (Math.random() - 0.5) * 70, z = c.z + (Math.random() - 0.5) * 70, y = c.y + (any ? Math.random() * 40 - 10 : 30);
    const p = this.rainPos; p[i * 6] = x; p[i * 6 + 1] = y; p[i * 6 + 2] = z; p[i * 6 + 3] = x + 0.08; p[i * 6 + 4] = y - 0.9; p[i * 6 + 5] = z + 0.05;
  }
  setWeather(w: Weather) { this.weather = w; }
  update(dt: number, cam: THREE.Vector3, focus: THREE.Vector3) {
    this.hour = (this.hour + dt * this.timeScale) % 24;
    // güneş: 06:00 doğu, öğlen güney, 18:00 batı (yaklaşık, İstanbul)
    const t = ((this.hour - 6) / 12) * Math.PI; const elev = Math.sin(t) * 1.05, az = t;
    this.sunDir.set(Math.cos(az), Math.max(Math.sin(t), -0.6) * 0.9, Math.sin(az) * 0.55 + 0.35).normalize();
    const se = this.sunDir.y;
    this.night = THREE.MathUtils.smoothstep(-se, -0.02, 0.16);
    const dusk = 1 - Math.min(1, Math.abs(se - 0.04) / 0.22);
    // hava hedefleri
    const tgt = { acik: [0, 0, 0.18], bulutlu: [0, 0.15, 0.7], yagmur: [1, 0.25, 0.9], sis: [0, 1, 0.5] }[this.weather];
    const k = Math.min(1, dt * 0.4);
    this.rainAmt += (tgt[0] - this.rainAmt) * k; this.fogAmt += (tgt[1] - this.fogAmt) * k;
    const cloud = this.weather === 'acik' ? 0.18 : this.weather === 'sis' ? 0.5 : this.weather === 'bulutlu' ? 0.7 : 0.9;
    const cm = this.clouds.material as THREE.ShaderMaterial; cm.uniforms.amt.value += (cloud - cm.uniforms.amt.value) * k; cm.uniforms.t.value += dt;
    const ov = cm.uniforms.amt.value; // bulutluluk
    this.wet += ((this.weather === 'yagmur' ? 1 : 0) - this.wet) * Math.min(1, dt * (this.weather === 'yagmur' ? 0.15 : 0.03));
    // renkler
    const top = SKY.day.top.clone().lerp(SKY.set.top, dusk * 0.7).lerp(SKY.night.top, this.night);
    const hor = SKY.day.hor.clone().lerp(SKY.set.hor, dusk * 0.8).lerp(SKY.night.hor, this.night);
    const grey = new THREE.Color(0x9aa3ab).multiplyScalar(1 - this.night * 0.85);
    top.lerp(grey, Math.max(0, ov - 0.2) * 0.7); hor.lerp(grey.clone().multiplyScalar(1.1), Math.max(0, ov - 0.2) * 0.6);
    if (this.fogAmt > 0.01) { hor.lerp(new THREE.Color(0xc4c8cb).multiplyScalar(1 - this.night * 0.8), this.fogAmt * 0.8); top.lerp(hor, this.fogAmt * 0.6); }
    this.skyMat.uniforms.top.value.copy(top); this.skyMat.uniforms.hor.value.copy(hor); this.skyMat.uniforms.sunDir.value.copy(this.sunDir); this.skyMat.uniforms.night.value = this.night; this.skyMat.uniforms.cloud.value = Math.max(0, ov - 0.2);
    cm.uniforms.col.value.copy(hor).lerp(new THREE.Color(1, 1, 1), 0.5 * (1 - this.night)).multiplyScalar(1 - ov * 0.25);
    this.fog.color.copy(hor);
    this.fog.near = THREE.MathUtils.lerp(250, 15, this.fogAmt) * (1 - this.rainAmt * 0.4);
    this.fog.far = THREE.MathUtils.lerp(this.farFog, 260, this.fogAmt) * (1 - this.rainAmt * 0.35);
    (this.stars.material as THREE.PointsMaterial).opacity = this.night * (1 - ov);
    // ışıklar
    const sunUp = THREE.MathUtils.smoothstep(se, -0.04, 0.12);
    const shade = 1 - Math.max(0, ov - 0.3) * 0.75;
    this.sun.intensity = 2.6 * sunUp * shade;
    this.sun.color.set(0xfff1dc).lerp(new THREE.Color(0xffa060), dusk * 0.6);
    this.hemi.intensity = THREE.MathUtils.lerp(1.15, 0.5, this.night) * (1 + (1 - shade) * 0.3);
    this.hemi.color.copy(hor).lerp(new THREE.Color(0xffffff), 0.4); this.hemi.groundColor.set(0x8a7d66).multiplyScalar(1 - this.night * 0.7);
    if (this.night > 0.5) this.hemi.color.lerp(new THREE.Color(0x4a5a80), 0.5);
    const lightDir = se > -0.05 ? this.sunDir : this.sunDir.clone().setY(0.6).normalize(); // gece ay ışığı yönü
    this.sun.position.copy(focus).addScaledVector(lightDir, 300); this.sun.target.position.copy(focus);
    if (this.night > 0.6) { this.sun.intensity = 0.25; this.sun.color.set(0x8fa6d8); }
    this.sky.position.copy(cam); this.stars.position.copy(cam); this.clouds.position.set(cam.x, 600, cam.z);
    facadeUniforms.uNight.value = THREE.MathUtils.smoothstep(this.night + (this.weather === 'yagmur' || this.weather === 'sis' ? 0.15 : 0), 0.25, 0.8);
    facadeUniforms.uWet.value = this.wet;
    lampUniform.uNight.value = facadeUniforms.uNight.value;
    // yağmur damlaları
    this.rain.visible = this.rainAmt > 0.05;
    if (this.rain.visible) {
      const p = this.rainPos, fall = dt * 26; const active = Math.floor(this.rainN * this.rainAmt);
      for (let i = 0; i < this.rainN; i++) {
        if (i >= active) { p[i * 6 + 1] = p[i * 6 + 4] = -999; continue; }
        p[i * 6 + 1] -= fall; p[i * 6 + 4] -= fall; p[i * 6] += dt * 1.5; p[i * 6 + 3] += dt * 1.5;
        if (p[i * 6 + 1] < cam.y - 15 || Math.abs(p[i * 6] - cam.x) > 40 || Math.abs(p[i * 6 + 2] - cam.z) > 40) this.respawnDrop(i, cam, p[i * 6 + 1] < -900);
      }
      this.rain.geometry.attributes.position.needsUpdate = true;
    }
  }
  hourText() { const h = Math.floor(this.hour), m = Math.floor((this.hour - h) * 60); return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`; }
}
