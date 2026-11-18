// Zemin örtme düzeltmesi.
// Arazi ve zemin katmanları (yol, meydan, park) üst üste "çıkartma" gibi, derinlik yazmadan çiziliyor. Yukarıdan bakarken
// sorun değil, ama araba seviyesinden bakınca tepenin/meydanın ardındaki alçak binalar zeminin üstüne çiziliyordu
// ("10 m sonra zemin yok" görüntüsü). Arazinin görünmez bir kopyası, zemin katmanlarından sonra yalnızca derinlik yazar;
// böylece arazinin arkasında kalan her şey gizlenir, zeminin görünüşü değişmez.
const OFF = new URLSearchParams(location.search).get('occlude') === '0';
const NAMES = ['terrain', 'terrain_outer', 'terrain_bjk'];
const t = setInterval(() => {
  const D = window.__drv;
  if (!(D && D.__ready && D.__scene)) return;
  clearInterval(t);
  if (OFF) return;
  const S = D.__scene;
  const src = S.children.filter((o) => o.isMesh && NAMES.includes(o.name));
  if (!src.length) return;
  const M = src[0].material.constructor;
  const mat = new M({ colorWrite: false, depthWrite: true, depthTest: true, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 6 });
  let n = 0;
  for (const o of src) {
    const m = new o.constructor(o.geometry, mat);
    m.name = o.name + ':occluder';
    m.position.copy(o.position); m.quaternion.copy(o.quaternion); m.scale.copy(o.scale);
    m.renderOrder = -1;          // tüm zemin çıkartmalarından (−200…−28) sonra, binalardan (0) önce
    m.castShadow = false; m.receiveShadow = false; m.frustumCulled = o.frustumCulled;
    S.add(m); n++;
  }
  D.__occluders = n;
}, 400);
