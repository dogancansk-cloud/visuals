// İstanbul 3D eklentisi: etiket düzeni, yer listesi + bilgi kartları, uçuş, bellek temizliği.
import { PLACES, REGIONS, REGIONS_EN, NEW_LABELS, AREAS } from './places.js';
import { addMosques } from './mosques.js';

const LQ = new URLSearchParams(location.search).get('lang');
const EN = LQ ? LQ === 'en' : !(navigator.language || 'tr').toLowerCase().startsWith('tr');
const T = (tr, en) => (EN ? en : tr);

function whenReady(fn) {
  const t = setInterval(() => { const M = window.__map; if (M && M.__ready && M.__scene) { clearInterval(t); fn(M); } }, 300);
}

// ---------- 1. bellek: GPU'ya yüklenen geometrilerin CPU kopyasını bırak ----------
function freeCpuCopies(M) {
  let n = 0;
  M.__scene.traverse((o) => {
    const g = o.geometry;
    if (!g || g.userData.__freed) return;
    if (!g.boundingSphere) g.computeBoundingSphere();
    if (!g.boundingBox) g.computeBoundingBox();
    const list = Object.values(g.attributes);
    if (g.index) list.push(g.index);
    for (const a of list) {
      if (!a || a.isInstancedBufferAttribute || a.isInterleavedBufferAttribute || !a.array) continue;
      a.onUpload(function () { this.array = null; });
      a.needsUpdate = true; // already on the GPU: re-upload once so the callback runs and the CPU copy is dropped
      n++;
    }
    g.userData.__freed = true;
  });
  return n;
}

// ---------- 2. etiketler: çakışanları gizle, önemliler önce ----------
const PRIORITY = new Map(PLACES.map((p, i) => [p.k, 1000 - i]));
function installLabelLayout(M) {
  const cam = M.__camera, labels = M.__labels;
  const v = cam.position.clone();
  const boxes = [];
  const sizeOf = (L) => {
    if (!L.w) { const r = L.el.getBoundingClientRect(); if (r.width) { L.w = r.width; L.h = r.height; } }
    return [L.w || 90, L.h || 20];
  };
  M.__labelFn = (list) => {
    const W = window.innerWidth, H = window.innerHeight;
    const cand = [];
    for (const L of list) {
      v.copy(L.p).project(cam);
      let ok = v.z < 1 && Math.abs(v.x) < 1.1 && Math.abs(v.y) < 1.1 && !(L.near && cam.position.distanceTo(L.p) > 1600);
      if (L.hide) ok = false;
      if (!ok) { if (L._s !== 0) { L.el.style.display = 'none'; L._s = 0; } continue; }
      const x = (v.x + 1) / 2 * W, y = (1 - v.y) / 2 * H;
      const pr = (L.el.classList.contains('area') ? 3000 : 0) + (PRIORITY.get(L.el.textContent) || (L.near ? 0 : 200)) - cam.position.distanceTo(L.p) / 50;
      cand.push({ L, x, y, pr });
    }
    cand.sort((a, b) => b.pr - a.pr);
    boxes.length = 0;
    for (const c of cand) {
      const L = c.L;
      if (L._s !== 1) { L.el.style.display = 'block'; L._s = 1; }
      const [w, h] = sizeOf(L);
      const area = L.el.classList.contains('area');
      const x0 = c.x - w / 2 - 3, y0 = area ? c.y - h / 2 : c.y - h - 3, x1 = x0 + w + 6, y1 = y0 + h + 4;
      let hit = x0 < 2 || x1 > W - 2 || y0 < 0;   // kenarda kesilecek etiketi gösterme
      for (const b of boxes) if (x0 < b[2] && x1 > b[0] && y0 < b[3] && y1 > b[1]) { hit = true; break; }
      if (hit) { L.el.style.display = 'none'; L._s = 0; continue; }
      boxes.push([x0, y0, x1, y1]);
      L.el.style.left = c.x + 'px';
      L.el.style.top = c.y + 'px';
    }
  };
}

// ---------- 3. Anadolu yakası etiketleri ----------
function addAsiaLabels(M) {
  const poi = (M.__asia && M.__asia.poi) || {};
  for (const n of NEW_LABELS) {
    const p = poi[n.name];
    if (!p) continue;
    M.__label(n.label, p[0], M.__ground(p[0], p[1]) + n.dy, p[1], n.cls || '');
  }
  for (const a of AREAS) M.__label(a.label, a.x, M.__ground(a.x, a.z) + 60, a.z, 'area');
}

// ---------- 4. uçuş ----------
let anim = null;
function flyTo(M, place) {
  const C = M.__controls, cam = M.__camera;
  const s0 = { t: C.target.clone(), p: cam.position.clone() };
  let s1;
  if (place.v && M.__views[place.v]) {
    M.__setView(place.v);
    s1 = { t: C.target.clone(), p: cam.position.clone() };
    C.target.copy(s0.t); cam.position.copy(s0.p);
  } else {
    const L = M.__labels.find((l) => l.el.textContent === place.k);
    if (!L) return;
    const gx = L.p.x, gz = L.p.z, gy = M.__ground(gx, gz);
    const t = s0.t.clone().set(gx, gy + 8, gz);
    const dir = s0.p.clone().sub(s0.t); dir.y = 0;
    if (dir.lengthSq() < 1) dir.set(0, 0, 1);
    dir.normalize();
    const d = M.__mobile ? 520 : 430, pol = 0.92;
    const p = t.clone().addScaledVector(dir, Math.sin(pol) * d); p.y = t.y + Math.cos(pol) * d;
    s1 = { t, p };
    C.maxPolarAngle = Math.max(C.maxPolarAngle, 1.2);
  }
  const dist = s0.t.distanceTo(s1.t), dur = Math.min(2600, 900 + dist * 0.35);
  const lift = Math.min(1800, dist * 0.35);
  const t0 = performance.now();
  if (anim) cancelAnimationFrame(anim);
  const step = () => {
    const k = Math.min(1, (performance.now() - t0) / dur), e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    C.target.lerpVectors(s0.t, s1.t, e);
    cam.position.lerpVectors(s0.p, s1.p, e);
    cam.position.y += Math.sin(Math.PI * e) * lift;
    if (k < 1) anim = requestAnimationFrame(step); else anim = null;
  };
  step();
}

// ---------- 5. arayüz ----------
function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

function buildUI(M) {
  const have = new Set(M.__labels.map((l) => l.el.textContent));
  const places = PLACES.filter((p) => have.has(p.k));
  const btn = el('button', 'x-btn', '☰ ' + T('Yerler', 'Places'));
  btn.type = 'button'; btn.setAttribute('aria-expanded', 'false');
  const home = el('button', 'x-btn x-home', '⌂'); home.type = 'button'; home.title = T('Genel görünüm', 'Overview');
  const bar = el('div', 'x-bar'); bar.append(btn, home);
  const panel = el('div', 'x-panel'); panel.hidden = true;
  const q = el('input', 'x-q'); q.type = 'search'; q.placeholder = T('Yer ara…', 'Search…'); q.setAttribute('aria-label', T('Yer ara', 'Search places'));
  const list = el('div', 'x-list');
  panel.append(q, list);
  const card = el('div', 'x-card'); card.hidden = true;
  document.body.append(bar, panel, card);

  const norm = (s) => s.toLocaleLowerCase('tr').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i');
  function render() {
    const f = norm(q.value.trim());
    list.innerHTML = '';
    for (const r of [1, 2, 3, 4]) {
      const items = places.filter((p) => p.r === r && (!f || norm(p.k).includes(f)));
      if (!items.length) continue;
      list.append(el('div', 'x-h', esc((EN ? REGIONS_EN : REGIONS)[r])));
      for (const p of items) {
        const b = el('button', 'x-item', `<span>${esc(p.k)}</span>${p.y ? `<small>${esc(p.y)}</small>` : ''}`);
        b.type = 'button';
        b.onclick = () => open(p);
        list.append(b);
      }
    }
    if (!list.children.length) list.append(el('div', 'x-empty', T('Sonuç yok', 'No results')));
  }
  function open(p) {
    flyTo(M, p);
    card.innerHTML = `<button class="x-close" type="button" aria-label="${T('Kapat', 'Close')}">×</button><b>${esc(p.k)}</b>${p.y ? `<span class="x-y">${esc(p.y)}</span>` : ''}<p>${esc(T(p.tr, p.en))}</p>`;
    card.hidden = false;
    card.querySelector('.x-close').onclick = () => { card.hidden = true; };
    if (window.innerWidth < 700) toggle(false);
  }
  function toggle(on) { panel.hidden = !on; btn.setAttribute('aria-expanded', String(on)); if (on) { render(); if (window.innerWidth >= 700) q.focus(); } }
  btn.onclick = () => toggle(panel.hidden);
  home.onclick = () => { card.hidden = true; flyTo(M, { v: M.__views.overview_east ? 'overview_east' : 'overview' }); };
  q.oninput = render;
  // etikete tıklayınca bilgi kartı
  const byName = new Map(places.map((p) => [p.k, p]));
  const labelsDiv = document.getElementById('labels');
  for (const L of M.__labels) {
    const p = byName.get(L.el.textContent);
    if (!p) continue;
    L.el.classList.add('x-click');
    L.el.addEventListener('click', (e) => { e.stopPropagation(); open(p); });
  }
  labelsDiv.classList.add('x-labels');
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') { card.hidden = true; toggle(false); } });
}

whenReady((M) => {
  installLabelLayout(M);
  try { addAsiaLabels(M); } catch (e) { console.warn('asia labels', e); }
  try {
    if (M.__three) addMosques(M, M.__three);
  } catch (e) { console.warn('asia mosques', e); }
  buildUI(M);
  const hint = document.getElementById('badge');
  if (hint) hint.textContent = T('yükseklikler yaklaşık · etikete dokun: bilgi', 'heights approximate · tap a label for info');
  if (!/[?&]nofree/.test(location.search)) setTimeout(() => { const n = freeCpuCopies(M); M.__freed = n; }, 1500);
});
