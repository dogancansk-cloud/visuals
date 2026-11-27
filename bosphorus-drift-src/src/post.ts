// Mürekkep çizgileri: sahne bir dokuya çizilir, derinlikten kenarlar (siluet + kırışık) bulunur, lacivert çizgi olarak basılır.
import * as THREE from 'three';

export class Ink {
  readonly rt: THREE.WebGLRenderTarget;
  private quad: THREE.Mesh; private cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1); private scene = new THREE.Scene();
  readonly mat: THREE.ShaderMaterial;
  enabled = true;
  /** parlama: parlak yerler çeyrek çözünürlükte bulanıklaştırılıp üstüne eklenir */
  bloom = true;
  private bA = new THREE.WebGLRenderTarget(4, 4); private bB = new THREE.WebGLRenderTarget(4, 4);
  private brightMat: THREE.ShaderMaterial; private blurMat: THREE.ShaderMaterial;
  constructor(private renderer: THREE.WebGLRenderer, samples: number) {
    this.rt = new THREE.WebGLRenderTarget(4, 4, { samples, type: THREE.HalfFloatType });
    this.rt.depthTexture = new THREE.DepthTexture(4, 4); this.rt.depthTexture.type = THREE.UnsignedIntType;
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        tColor: { value: this.rt.texture }, tDepth: { value: this.rt.depthTexture },
        res: { value: new THREE.Vector2(1, 1) }, near: { value: 0.3 }, far: { value: 2000 },
        ink: { value: new THREE.Color(0x1d2550) }, width: { value: 1 }, speed: { value: 0 }, time: { value: 0 }, vivid: { value: 0 },
        tBloom: { value: this.bA.texture }, bloomK: { value: 0.55 }, vig: { value: 0.22 },
      },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: `
        uniform sampler2D tColor; uniform sampler2D tDepth; uniform vec2 res; uniform float near; uniform float far; uniform vec3 ink; uniform float width; uniform float speed; uniform float time; uniform float vivid; uniform sampler2D tBloom; uniform float bloomK; uniform float vig;
        varying vec2 vUv;
        float lin(vec2 uv){ float d = texture2D(tDepth, uv).x; return (near * far) / (far - d * (far - near)); }
        float hash(float n){ return fract(sin(n) * 43758.5453); }
        void main(){
          vec2 px = width / res;
          float c = lin(vUv);
          float l = lin(vUv - vec2(px.x, 0.0)), r = lin(vUv + vec2(px.x, 0.0)), u = lin(vUv + vec2(0.0, px.y)), d = lin(vUv - vec2(0.0, px.y));
          // siluet: göreli derinlik farkı
          float sil = max(max(abs(l - c), abs(r - c)), max(abs(u - c), abs(d - c))) / c;
          float e1 = smoothstep(0.018, 0.05, sil);
          // kırışık: ikinci türev (eğim değişimi)
          float lap = (abs(l + r - 2.0 * c) + abs(u + d - 2.0 * c)) / c;
          float e2 = smoothstep(0.004, 0.012, lap) * 0.8;
          float e = max(e1, e2);
          e *= mix(1.0, 0.25, smoothstep(120.0, 600.0, c)); // uzakta incelir
          if (c > far * 0.9) e *= 0.0;
          vec3 col = texture2D(tColor, vUv).rgb;
          vec3 glow = texture2D(tBloom, vUv).rgb; col += glow * glow * bloomK;
          // canlılık: doygunluk ve hafif kontrast (çizgi film gibi)
          float lum = dot(col, vec3(0.299, 0.587, 0.114));
          col = mix(vec3(lum), col, 1.0 + 0.42 * vivid);
          vec3 gc = pow(max(col, 0.0), vec3(0.4545)); gc = mix(gc, gc * gc * (3.0 - 2.0 * gc), 0.3 * vivid); col = pow(gc, vec3(2.2));
          col = clamp(col, 0.0, 1.0);
          { vec2 q = vUv - 0.5; col *= 1.0 - vig * smoothstep(0.32, 0.95, dot(q, q) * 2.0); }
          col = mix(col, ink, clamp(e, 0.0, 1.0) * 0.92);
          // hız çizgileri (ekran kenarlarında, ışınsal)
          if (speed > 0.01) {
            vec2 p = vUv - 0.5; p.x *= res.x / res.y;
            float a = atan(p.y, p.x), rr = length(p);
            float k = floor(a * 38.0), f = fract(a * 38.0);
            float on = step(0.86, hash(k + floor(time * 9.0) * 7.0));
            float line = on * smoothstep(0.42, 0.06, abs(f - 0.5)) * smoothstep(0.28, 0.62, rr);
            col = mix(col, vec3(1.0, 0.98, 0.95), line * speed * 0.55);
          }
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`,
      depthTest: false, depthWrite: false,
    });
    const vs = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';
    this.brightMat = new THREE.ShaderMaterial({
      uniforms: { t: { value: this.rt.texture }, px: { value: new THREE.Vector2() }, thr: { value: 0.78 } }, vertexShader: vs, depthTest: false, depthWrite: false,
      fragmentShader: `uniform sampler2D t; uniform vec2 px; uniform float thr; varying vec2 vUv;
        void main(){ vec3 c = (texture2D(t, vUv + px * vec2(-1.0, -1.0)).rgb + texture2D(t, vUv + px * vec2(1.0, -1.0)).rgb + texture2D(t, vUv + px * vec2(-1.0, 1.0)).rgb + texture2D(t, vUv + px).rgb) * 0.25;
          c = min(c, vec3(4.0)); float l = max(c.r, max(c.g, c.b)); float k = smoothstep(thr, thr + 0.55, l);
          gl_FragColor = vec4(sqrt(clamp(c * k * 0.5, 0.0, 1.0)), 1.0); }`,
    });
    this.blurMat = new THREE.ShaderMaterial({
      uniforms: { t: { value: null }, dir: { value: new THREE.Vector2() } }, vertexShader: vs, depthTest: false, depthWrite: false,
      fragmentShader: `uniform sampler2D t; uniform vec2 dir; varying vec2 vUv;
        void main(){ vec3 c = texture2D(t, vUv).rgb * 0.2270; c += (texture2D(t, vUv + dir * 1.3846).rgb + texture2D(t, vUv - dir * 1.3846).rgb) * 0.3162; c += (texture2D(t, vUv + dir * 3.2308).rgb + texture2D(t, vUv - dir * 3.2308).rgb) * 0.0703; gl_FragColor = vec4(c, 1.0); }`,
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.mat); this.quad.frustumCulled = false; this.scene.add(this.quad);
  }
  private bpx = new THREE.Vector2();
  private pass(m: THREE.ShaderMaterial, to: THREE.WebGLRenderTarget | null) { this.quad.material = m; this.renderer.setRenderTarget(to); this.renderer.render(this.scene, this.cam); }
  setSize(w: number, h: number, pr: number) {
    this.rt.setSize(Math.floor(w * pr), Math.floor(h * pr));
    this.mat.uniforms.res.value.set(w * pr, h * pr);
    this.mat.uniforms.width.value = Math.max(1, pr * 1.05);
    const bw = Math.max(2, Math.floor(w * pr / 4)), bh = Math.max(2, Math.floor(h * pr / 4));
    this.bA.setSize(bw, bh); this.bB.setSize(bw, bh);
    this.brightMat.uniforms.px.value.set(1 / (w * pr), 1 / (h * pr)); this.bpx.set(1 / bw, 1 / bh);
  }
  render(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    if (!this.enabled) { this.renderer.setRenderTarget(null); this.renderer.render(scene, camera); return; }
    this.mat.uniforms.near.value = camera.near; this.mat.uniforms.far.value = camera.far;
    this.renderer.setRenderTarget(this.rt); this.renderer.render(scene, camera);
    if (this.bloom) {
      this.pass(this.brightMat, this.bA);
      const b = this.blurMat.uniforms;
      for (const k of [1, 2]) {
        b.t.value = this.bA.texture; b.dir.value.set(this.bpx.x * k, 0); this.pass(this.blurMat, this.bB);
        b.t.value = this.bB.texture; b.dir.value.set(0, this.bpx.y * k); this.pass(this.blurMat, this.bA);
      }
    }
    this.mat.uniforms.bloomK.value = this.bloom ? this.bloomStrength : 0;
    this.pass(this.mat, null);
  }
  bloomStrength = 0.55;
}
