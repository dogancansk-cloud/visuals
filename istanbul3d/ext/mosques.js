// Anadolu yakasının simge camileri: klasik Osmanlı cami şeması (gövde, ağırlık kuleleri, kasnak, kubbe,
// yarım kubbeler, son cemaat revakı, şerefeli minareler). Ölçüler yaklaşık; konum ve yön OSM oturumundan.
const STONE = [0.91, 0.88, 0.82], STONE2 = [0.87, 0.84, 0.77], LEAD = [0.56, 0.58, 0.61], GOLD = [0.77, 0.64, 0.35], DARK = [0.42, 0.38, 0.34];

// kıble ekseni açısı (x doğu, z güney); a = OSM dikdörtgen kenar açısı (derece), kıbleye (61.6°) en yakın eksen seçilir
function qiblaAxis(aDeg) {
  let best = 0, bd = 1e9;
  for (const c of [aDeg, aDeg + 90, aDeg + 180, aDeg + 270]) {
    const d = Math.abs((((c - 61.6) % 360) + 540) % 360 - 180);
    if (d < bd) { bd = d; best = c; }
  }
  return (best * Math.PI) / 180;
}

export const MOSQUES = [
  // x, z: gövde merkezi; w: gövde kenarı; hh: duvar yüksekliği; r: kubbe yarıçapı; semis: yarım kubbeler
  { n: 'Mihrimah Sultan', x: 3108.0, z: -360.0, a: -40.4, w: 22, hh: 12, r: 6.2, drum: 3.2, semis: ['q', 'l', 'r'], por: { d: 9, n: 5, double: true }, mins: [{ s: -1, h: 44, k: 2 }, { s: 1, h: 44, k: 2 }] },
  { n: 'Yeni Valide', x: 3023.6, z: -143.7, a: 152, w: 26, hh: 14, r: 10, drum: 3.6, semis: [], oct: true, por: { d: 8, n: 5 }, mins: [{ s: -1, h: 48, k: 2 }, { s: 1, h: 48, k: 2 }] },
  { n: 'Selimiye Camii', x: 3141.0, z: 1530.0, a: 132, w: 24, hh: 14, r: 10.5, drum: 2.8, semis: [], por: { d: 8, n: 5 }, wings: true, mins: [{ s: -1, h: 46, k: 1 }, { s: 1, h: 46, k: 1 }] },
  { n: 'Şemsi Paşa Camii', x: 2719.0, z: -268.0, a: 45, w: 12.5, hh: 8, r: 5.2, drum: 1.8, semis: [], por: { d: 5.5, n: 3 }, mins: [{ s: 1, h: 27, k: 1 }] },
  { n: 'Çinili Camii', x: 4215.6, z: 400.0, a: 130.5, w: 14, hh: 8.5, r: 5.6, drum: 2, semis: [], por: { d: 6, n: 3 }, mins: [{ s: -1, h: 29, k: 1 }] },
];

function Builder() {
  const pos = [], col = [];
  const tri = (a, b, c, k) => { pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]); for (let i = 0; i < 3; i++) col.push(k[0], k[1], k[2]); };
  const quad = (a, b, c, d, k) => { tri(a, b, c, k); tri(a, c, d, k); };
  return { pos, col, tri, quad };
}

function buildMosque(B, m, ground) {
  const A = qiblaAxis(m.a), qx = Math.cos(A), qz = Math.sin(A), lx = -qz, lz = qx;
  const W = (u, v, y) => [m.x + qx * u + lx * v, y, m.z + qz * u + lz * v];
  const h2 = m.w / 2;
  // zemin: deniz/boşluk noktalarında negatif dönebilir, merkeze göre sınırla
  const gc = Math.max(0, ground(m.x, m.z));
  let y0 = gc;
  for (const [u, v] of [[-h2, -h2], [h2, -h2], [h2, h2], [-h2, h2]]) { const p = W(u, v, 0); const g = ground(p[0], p[2]); if (g > -50) y0 = Math.min(y0, Math.max(gc - 4, g)); }
  y0 = Math.max(0, y0) - 0.6;
  const box = (u0, u1, v0, v1, ya, yb, k, top = true) => {
    const c = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]];
    for (let i = 0; i < 4; i++) { const [a, b] = [c[i], c[(i + 1) % 4]]; B.quad(W(a[0], a[1], ya), W(b[0], b[1], ya), W(b[0], b[1], yb), W(a[0], a[1], yb), i % 2 ? k : k.map((x) => x * 0.96)); }
    if (top) B.quad(W(u0, v0, yb), W(u1, v0, yb), W(u1, v1, yb), W(u0, v1, yb), k.map((x) => x * 0.94));
  };
  const cyl = (cu, cv, r, ya, yb, seg, k, r2 = r, cap = true) => {
    for (let i = 0; i < seg; i++) {
      const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
      const p = (rr, a, y) => W(cu + Math.cos(a) * rr, cv + Math.sin(a) * rr, y);
      B.quad(p(r, a0, ya), p(r, a1, ya), p(r2, a1, yb), p(r2, a0, yb), i % 2 ? k : k.map((x) => x * 0.95));
      if (cap) B.tri(W(cu, cv, yb), p(r2, a0, yb), p(r2, a1, yb), k.map((x) => x * 0.93));
    }
  };
  const cone = (cu, cv, r, ya, h, seg, k) => {
    for (let i = 0; i < seg; i++) {
      const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
      B.tri(W(cu + Math.cos(a0) * r, cv + Math.sin(a0) * r, ya), W(cu + Math.cos(a1) * r, cv + Math.sin(a1) * r, ya), W(cu, cv, ya + h), i % 2 ? k : k.map((x) => x * 0.94));
    }
  };
  // yarıküre (tam) ya da yönlü çeyrek küre (yarım kubbe); dir: açısal merkez, span: kapsanan açı
  const dome = (cu, cv, r, ya, k, dir = 0, span = Math.PI * 2, seg = 18, rings = 6, sy = 1) => {
    const n = Math.max(4, Math.round((seg * span) / (Math.PI * 2)));
    for (let j = 0; j < rings; j++) {
      const t0 = (j / rings) * (Math.PI / 2), t1 = ((j + 1) / rings) * (Math.PI / 2);
      for (let i = 0; i < n; i++) {
        const a0 = dir - span / 2 + (i / n) * span, a1 = dir - span / 2 + ((i + 1) / n) * span;
        const p = (a, t) => W(cu + Math.cos(a) * Math.cos(t) * r, cv + Math.sin(a) * Math.cos(t) * r, ya + Math.sin(t) * r * sy);
        if (j === rings - 1) B.tri(p(a0, t0), p(a1, t0), p(a0, t1), k);
        else B.quad(p(a0, t0), p(a1, t0), p(a1, t1), p(a0, t1), (i + j) % 2 ? k : k.map((x) => x * 0.96));
      }
    }
    if (span < Math.PI * 2) { // yarım kubbenin açık yüzünü kapat (tympanon)
      const e0 = dir - span / 2, e1 = dir + span / 2;
      for (let j = 0; j < rings; j++) {
        const t0 = (j / rings) * (Math.PI / 2), t1 = ((j + 1) / rings) * (Math.PI / 2);
        const pe = (a, t) => W(cu + Math.cos(a) * Math.cos(t) * r, cv + Math.sin(a) * Math.cos(t) * r, ya + Math.sin(t) * r * sy);
        B.quad(pe(e0, t0), pe(e1, t0), pe(e1, t1), pe(e0, t1), STONE2);
      }
    }
  };
  const top = y0 + m.hh;
  // gövde (sekizgen plan için köşeleri pahlı)
  if (m.oct) {
    const c = m.w * 0.18, pts = [[-h2 + c, -h2], [h2 - c, -h2], [h2, -h2 + c], [h2, h2 - c], [h2 - c, h2], [-h2 + c, h2], [-h2, h2 - c], [-h2, -h2 + c]];
    for (let i = 0; i < 8; i++) { const a = pts[i], b = pts[(i + 1) % 8]; B.quad(W(a[0], a[1], y0), W(b[0], b[1], y0), W(b[0], b[1], top), W(a[0], a[1], top), i % 2 ? STONE : STONE2); }
    for (let i = 1; i < 7; i++) B.tri(W(pts[0][0], pts[0][1], top), W(pts[i][0], pts[i][1], top), W(pts[i + 1][0], pts[i + 1][1], top), STONE2);
  } else box(-h2, h2, -h2, h2, y0, top, STONE);
  // pencere sıraları: koyu bantlar (iki kat)
  for (const yy of [0.32, 0.66]) {
    const ya = y0 + m.hh * yy, yb = ya + Math.min(2.2, m.hh * 0.13);
    for (const s of [-1, 1]) {
      for (let i = 0; i < 3; i++) {
        const v0 = -h2 + (m.w * (i + 0.3)) / 3, v1 = v0 + (m.w / 3) * 0.4;
        B.quad(W(s * (h2 + 0.05), v0, ya), W(s * (h2 + 0.05), v1, ya), W(s * (h2 + 0.05), v1, yb), W(s * (h2 + 0.05), v0, yb), DARK);
        B.quad(W(v0, s * (h2 + 0.05), ya), W(v1, s * (h2 + 0.05), ya), W(v1, s * (h2 + 0.05), yb), W(v0, s * (h2 + 0.05), yb), DARK);
      }
    }
  }
  // ağırlık kuleleri
  for (const [su, sv] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
    const cu = su * (h2 - 1.4), cv = sv * (h2 - 1.4);
    cyl(cu, cv, 1.25, top - 0.2, top + 2.4, 8, STONE2);
    dome(cu, cv, 1.25, top + 2.4, LEAD, 0, Math.PI * 2, 8, 3);
  }
  // yarım kubbeler
  const semiY = top - 0.4;
  for (const s of m.semis) {
    const d = s === 'q' ? 0 : s === 'l' ? -Math.PI / 2 : Math.PI / 2;
    const cu = Math.cos(d) * (m.r * 0.35), cv = Math.sin(d) * (m.r * 0.35);
    dome(cu, cv, m.r * 0.98, semiY, LEAD, d, Math.PI, 16, 5, 0.85);
  }
  // kasnak + kubbe + alem
  const drumTop = top + (m.semis.length ? m.r * 0.6 : 0) + m.drum;
  cyl(0, 0, m.r * 1.06, top - 0.2, drumTop, 16, STONE2);
  for (let i = 0; i < 16; i += 2) { // kasnak pencereleri
    const a0 = (i / 16) * Math.PI * 2 + 0.06, a1 = a0 + 0.22, rr = m.r * 1.065, ya = drumTop - m.drum * 0.8, yb = drumTop - m.drum * 0.2;
    B.quad(W(Math.cos(a0) * rr, Math.sin(a0) * rr, ya), W(Math.cos(a1) * rr, Math.sin(a1) * rr, ya), W(Math.cos(a1) * rr, Math.sin(a1) * rr, yb), W(Math.cos(a0) * rr, Math.sin(a0) * rr, yb), DARK);
  }
  dome(0, 0, m.r, drumTop, LEAD, 0, Math.PI * 2, 20, 7, 0.95);
  cyl(0, 0, 0.18, drumTop + m.r * 0.95, drumTop + m.r * 0.95 + 2.2, 6, GOLD);
  // yan kanatlar (Selimiye: hünkâr kasrı)
  if (m.wings) { box(-h2 - 6, -h2 + 4, -h2 - 9, -h2, y0, y0 + m.hh * 0.55, STONE2); box(-h2 - 6, -h2 + 4, h2, h2 + 9, y0, y0 + m.hh * 0.55, STONE2); }
  // son cemaat revakı
  if (m.por) {
    const d = m.por.d, u0 = -h2 - d, ph = Math.max(5, m.hh * 0.55);
    box(u0, -h2, -h2, h2, y0, y0 + 0.8, STONE2);                 // seki
    const nc = m.por.n + 1;
    for (let i = 0; i < nc; i++) { const v = -h2 + (m.w * i) / (nc - 1); cyl(u0 + 0.6, v, 0.45, y0 + 0.8, y0 + ph - 0.6, 6, STONE2, 0.45, false); }
    box(u0, -h2, -h2, h2, y0 + ph - 0.7, y0 + ph, STONE);        // saçak
    for (let i = 0; i < m.por.n; i++) {
      const v = -h2 + (m.w * (i + 0.5)) / m.por.n;
      dome(u0 + d / 2, v, Math.min(d, m.w / m.por.n) * 0.42, y0 + ph, LEAD, 0, Math.PI * 2, 10, 3, 0.9);
    }
    if (m.por.double) { // ikinci (dış) revak: eğik çatı
      const u1 = u0 - d * 0.9, yh = y0 + ph - 1.2;
      box(u1, u0, -h2 - 3, h2 + 3, y0, y0 + 0.7, STONE2);
      for (let i = 0; i <= 8; i++) cyl(u1 + 0.5, -h2 - 3 + ((m.w + 6) * i) / 8, 0.38, y0 + 0.7, yh - 1, 6, STONE2, 0.38, false);
      B.quad(W(u1 - 0.8, -h2 - 3.4, yh - 1), W(u1 - 0.8, h2 + 3.4, yh - 1), W(u0, h2 + 3.4, yh + 0.8), W(u0, -h2 - 3.4, yh + 0.8), [0.71, 0.42, 0.32]);
    }
  }
  // minareler
  for (const mi of m.mins) {
    const cu = -h2 - 0.2, cv = mi.s * (h2 + 2.4), H = mi.h;
    box(cu - 2, cu + 2, cv - 2, cv + 2, y0, y0 + H * 0.16, STONE2);   // kürsü
    cyl(cu, cv, 1.45, y0 + H * 0.16, y0 + H * 0.84, 12, STONE, 1.25);
    const ser = mi.k === 2 ? [0.58, 0.76] : [0.74];
    for (const s of ser) { cyl(cu, cv, 2.2, y0 + H * s, y0 + H * s + 0.9, 12, STONE2); cyl(cu, cv, 2.2, y0 + H * s - 0.6, y0 + H * s, 12, STONE2, 1.35, false); }
    cone(cu, cv, 1.45, y0 + H * 0.84, H * 0.15, 12, LEAD);
    cyl(cu, cv, 0.12, y0 + H * 0.99, y0 + H * 1.03, 5, GOLD);
  }
}

export function addMosques(M, ctor) {
  const B = Builder();
  for (const m of MOSQUES) buildMosque(B, m, M.__ground);
  const g = new ctor.Geometry();
  g.setAttribute('position', new ctor.Attr(new Float32Array(B.pos), 3));
  g.setAttribute('color', new ctor.Attr(new Float32Array(B.col), 3));
  g.computeVertexNormals();
  const mat = new ctor.Lambert({ vertexColors: true, side: 2 });
  const mesh = new ctor.Mesh(g, mat);
  mesh.name = 'x_asia_mosques';
  mesh.castShadow = mesh.receiveShadow = true;
  M.__scene.add(mesh);
  return B.pos.length / 9;
}
