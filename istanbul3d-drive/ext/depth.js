// Zemin örtme düzeltmesi.
// Arazi ve zemin katmanları (yol, meydan, park) "çıkartma" gibi, derinlik yazmadan çiziliyor. Araba seviyesinden bakınca
// tepenin ardındaki binalar/yollar zeminin üstüne çiziliyordu. Çözüm: zemin katmanlarından önce, yalnızca derinlik yazan
// görünmez bir zemin. (1) Arabanın çevresinde yolların ve arabanın kullandığı aynı yükseklik fonksiyonundan (__H) yapılmış
// 5 m'lik ince ağ (araba ilerledikçe kayar); (2) uzakta kaba arazinin 2,5 m aşağıdaki kopyası.
const Q = new URLSearchParams(location.search);
const OFF = Q.get('occlude') === '0';
const PHONE = matchMedia('(pointer:coarse)').matches && Math.min(screen.width, screen.height) < 820 || innerWidth < 700;
const NAMES = ['terrain', 'terrain_outer', 'terrain_bjk'];
const DROP_FAR = 2.5;     // kaba arazi kopyası
const DROP_NEAR = 0.9;    // ince ağ: araba/yol yüzeyinin ~1 m altı
const CELL = 5, N = PHONE ? 120 : 170, RECENTER = 90;

const t = setInterval(() => {
  const D = window.__drv;
  if (!(D && D.__ready && D.__scene && D.__game && D.__H)) return;
  clearInterval(t);
  if (OFF) return;
  const S = D.__scene, H = D.__H, G = D.__game;
  const src = S.children.filter((o) => o.isMesh && NAMES.includes(o.name));
  if (!src.length) return;
  const M = src[0].material.constructor;
  const mat = new M({ colorWrite: false, depthWrite: true, depthTest: true });
  let n = 0;
  for (const o of src) {
    const m = new o.constructor(o.geometry, mat);
    m.name = o.name + ':occluder';
    m.position.copy(o.position); m.quaternion.copy(o.quaternion); m.scale.copy(o.scale);
    m.position.y -= DROP_FAR;
    m.renderOrder = -300;
    m.castShadow = m.receiveShadow = false; m.frustumCulled = o.frustumCulled;
    S.add(m); n++;
  }

  // ---- ince, kayan ağ ----
  const g = new src[0].geometry.constructor();
  g.setIndex(null); for (const k of Object.keys(g.attributes)) g.deleteAttribute(k);
  const V = N + 1, pos = new Float32Array(V * V * 3);
  const PA = src[0].geometry.attributes.position.constructor;
  const attr = new PA(pos, 3);
  g.setAttribute('position', attr);
  const idx = [];
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const a = j * V + i, b = a + 1, c = a + V, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  g.setIndex(idx);
  const fine = new src[0].constructor(g, mat);
  fine.name = 'terrain:fine-occluder';
  fine.renderOrder = -301;
  fine.castShadow = fine.receiveShadow = false;
  S.add(fine);
  let cx = 1e9, cz = 1e9;
  const rebuild = (x, z) => {
    cx = Math.round(x / CELL) * CELL; cz = Math.round(z / CELL) * CELL;
    const x0 = cx - (N / 2) * CELL, z0 = cz - (N / 2) * CELL;
    let k = 0;
    for (let j = 0; j < V; j++) for (let i = 0; i < V; i++) {
      const px = x0 + i * CELL, pz = z0 + j * CELL;
      let h = H(px, pz);
      if (!(h > -50)) h = -50;   // deniz / tanımsız
      pos[k++] = px; pos[k++] = h - DROP_NEAR; pos[k++] = pz;
    }
    attr.needsUpdate = true;
    g.computeBoundingSphere(); g.computeBoundingBox();
  };
  const tick = () => {
    const st = G.state();
    if (st && isFinite(st.x) && Math.hypot(st.x - cx, st.z - cz) > RECENTER) rebuild(st.x, st.z);
  };
  tick();
  setInterval(tick, 300);
  D.__occluders = n + 1;
}, 400);
