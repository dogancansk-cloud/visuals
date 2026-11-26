// Mürekkep çizgileri: sahne bir dokuya çizilir, derinlikten kenarlar (siluet + kırışık) bulunur, lacivert çizgi olarak basılır.
import * as THREE from 'three';

export class Ink {
  readonly rt: THREE.WebGLRenderTarget;
  private quad: THREE.Mesh; private cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1); private scene = new THREE.Scene();
  readonly mat: THREE.ShaderMaterial;
  enabled = true;
  constructor(private renderer: THREE.WebGLRenderer, samples: number) {
    this.rt = new THREE.WebGLRenderTarget(4, 4, { samples, type: THREE.HalfFloatType });
    this.rt.depthTexture = new THREE.DepthTexture(4, 4); this.rt.depthTexture.type = THREE.UnsignedIntType;
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        tColor: { value: this.rt.texture }, tDepth: { value: this.rt.depthTexture },
        res: { value: new THREE.Vector2(1, 1) }, near: { value: 0.3 }, far: { value: 2000 },
        ink: { value: new THREE.Color(0x1d2550) }, width: { value: 1 }, speed: { value: 0 }, time: { value: 0 }, vivid: { value: 0 },
      },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: `
        uniform sampler2D tColor; uniform sampler2D tDepth; uniform vec2 res; uniform float near; uniform float far; uniform vec3 ink; uniform float width; uniform float speed; uniform float time; uniform float vivid;
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
          // canlılık: doygunluk ve hafif kontrast (çizgi film gibi)
          float lum = dot(col, vec3(0.299, 0.587, 0.114));
          col = mix(vec3(lum), col, 1.0 + 0.42 * vivid);
          vec3 gc = pow(max(col, 0.0), vec3(0.4545)); gc = mix(gc, gc * gc * (3.0 - 2.0 * gc), 0.3 * vivid); col = pow(gc, vec3(2.2));
          col = clamp(col, 0.0, 1.0);
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
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.mat); this.quad.frustumCulled = false; this.scene.add(this.quad);
  }
  setSize(w: number, h: number, pr: number) {
    this.rt.setSize(Math.floor(w * pr), Math.floor(h * pr));
    this.mat.uniforms.res.value.set(w * pr, h * pr);
    this.mat.uniforms.width.value = Math.max(1, pr * 1.05);
  }
  render(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    if (!this.enabled) { this.renderer.setRenderTarget(null); this.renderer.render(scene, camera); return; }
    this.mat.uniforms.near.value = camera.near; this.mat.uniforms.far.value = camera.far;
    this.renderer.setRenderTarget(this.rt); this.renderer.render(scene, camera);
    this.renderer.setRenderTarget(null); this.renderer.render(this.scene, this.cam);
  }
}
