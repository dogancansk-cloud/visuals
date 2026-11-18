// Telefonda akıcılık: kare süresine göre çözünürlüğü kendiliğinden ayarla (ağırken düşür, rahatken geri yükselt).
const PHONE = matchMedia('(pointer:coarse)').matches && Math.min(screen.width, screen.height) < 820 || innerWidth < 700;
const Q = new URLSearchParams(location.search);
if (PHONE && Q.get('dynres') !== '0') {
  const t = setInterval(() => {
    const D = window.__drv;
    if (!(D && D.__ready && D.__renderer)) return;
    clearInterval(t);
    const r = D.__renderer, MAX = Math.min(devicePixelRatio, 1.5), MIN = 0.85;
    let pr = Math.min(r.getPixelRatio(), 1.25), acc = 0, n = 0, good = 0, last = performance.now();
    r.setPixelRatio(pr);
    const loop = (now) => {
      const ms = now - last; last = now;
      if (!document.hidden && ms < 250) { acc += ms; n++; }
      if (n >= 60) {
        const avg = acc / n; acc = 0; n = 0;
        if (avg > 28 && pr > MIN) { pr = Math.max(MIN, pr - 0.15); r.setPixelRatio(pr); good = 0; }
        else if (avg < 18) { if (++good >= 4 && pr < MAX) { pr = Math.min(MAX, pr + 0.1); r.setPixelRatio(pr); good = 0; } }
        else good = 0;
        D.__dynres = { pr: +pr.toFixed(2), avgMs: +avg.toFixed(1) };
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }, 500);
}
