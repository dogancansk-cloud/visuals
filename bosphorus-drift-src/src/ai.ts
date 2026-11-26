// Rakip sürücü yapay zekâsı: yarış çizgisini izler, virajda drift ve turbo dener, eşya kullanır.
import { Kart, DRIFT_ZONE, wrapA, type Ctl } from './kart';
const Z0 = 0.62, Z1 = 0.98;
import { Track } from './track';

export class AI {
  ctl: Ctl = { gas: 1, brake: 0, steer: 0, drift: false, item: false };
  private lane = 0; private laneT = 0; private pressT = 0; private itemT = 0; private wantBoostAt = 0.85;
  constructor(readonly k: Kart, readonly track: Track, public skill: number) { this.lane = (Math.random() - 0.5) * 6; }

  /** viraj keskinliği: önümüzdeki iki noktadaki yön farkı */
  private bend(i: number, a: number, b: number) {
    const T = this.track.T, p = this.track.wrap(i + a), q = this.track.wrap(i + b);
    return wrapA(Math.atan2(T.tz[q], T.tx[q]) - Math.atan2(T.tz[p], T.tx[p]));
  }

  update(dt: number, karts: Kart[], player: Kart, auto = false) {
    const k = this.k, tr = this.track, c = this.ctl, T = tr.T;
    c.drift = false; c.item = false;
    // şerit: arada bir değişir, öndekinden kaçın
    this.laneT -= dt;
    if (this.laneT <= 0) { this.laneT = 2 + Math.random() * 3; this.lane = (Math.random() - 0.5) * (k.f.w - 5); }
    let lane = this.lane;
    const curve = this.bend(k.f.i, 5, 30);
    lane += -Math.sign(curve) * Math.min(1, Math.abs(curve)) * (k.f.w * 0.25); // iç çizgi
    for (const o of karts) {
      if (o === k) continue;
      const ds = o.progress - k.progress;
      if (ds > 0 && ds < 12 && Math.abs(o.f.d - lane) < 2.2) lane += o.f.d > lane ? -2.5 : 2.5;
    }
    lane = Math.max(-k.f.w / 2 + 2, Math.min(k.f.w / 2 - 2, lane));
    // hedef nokta
    const look = 7 + Math.abs(k.speed) * 0.42;
    const tgt = tr.point(k.f.s + look, lane);
    const want = Math.atan2(tgt.z - k.pos.z, tgt.x - k.pos.x);
    let err = wrapA(want - k.yaw);
    if (k.drifting) {
      // drift sırasında açıyı drift yönüne göre ayarla
      c.steer = Math.max(-1, Math.min(1, err * 2.4 * k.dir)) * k.dir;
      if (Math.abs(curve) < 0.18 && Math.abs(err) < 0.12) c.steer = -k.dir * 0.7; // drifti bitir
    } else c.steer = Math.max(-1, Math.min(1, err * 2.6));
    // hız ve rubber band
    const gap = player.progress - k.progress;
    let cap = (0.86 + this.skill * 0.12) * (gap > 60 ? 1.08 : gap < -60 ? 0.93 : 1);
    if (auto) cap = 1.0;
    c.gas = k.speed < k.maxSpeed * cap ? 1 : 0;
    c.brake = 0;
    const sharp = Math.abs(this.bend(k.f.i, 4, 22));
    if (sharp > 1.1 && k.speed > 22 && !k.drifting) { c.gas = 0; if (k.speed > 25) c.brake = 0.35; }
    // drift başlat
    if (!k.drifting && k.grounded && sharp > 0.55 && k.speed > 14 && Math.random() < dt * 4 * (0.4 + this.skill)) {
      c.steer = Math.sign(curve) || 1; c.drift = true; this.wantBoostAt = Z0 + Math.random() * 0.25;
    }
    // turbo zamanlaması
    this.pressT -= dt;
    if (k.drifting && k.boosts < 3 && k.lockT <= 0 && k.charge >= this.wantBoostAt && this.pressT <= 0) {
      const ok = Math.random() < 0.35 + this.skill * 0.55;
      if (ok || k.charge > Z1) { c.drift = true; this.pressT = 0.1; this.wantBoostAt = ok ? Z0 + Math.random() * 0.25 : Math.random() < 0.5 ? 0.3 : Z1 + 0.25; }
    }
    // eşya kullanımı
    this.itemT -= dt;
    if (k.item && this.itemT <= 0) {
      this.itemT = 0.3;
      let use = false;
      if (k.item === 'turbo') use = Math.abs(curve) < 0.25 && k.grounded;
      else if (k.item === 'nazar') use = Math.random() < 0.4;
      else if (k.item === 'marti') use = karts.some((o) => o !== k && o.place === k.place - 1 && o.progress - k.progress < 90 && o.progress > k.progress);
      else if (k.item === 'cay') use = karts.some((o) => o !== k && k.progress - o.progress > 3 && k.progress - o.progress < 30) || Math.random() < 0.05;
      else if (k.item === 'simit') use = karts.some((o) => o !== k && o.progress - k.progress > 4 && o.progress - k.progress < 40 && Math.abs(o.f.d - k.f.d) < 3) || Math.random() < 0.03;
      else if (k.item === 'duduk') use = karts.filter((o) => o !== k && o.pos.distanceTo(k.pos) < 12).length >= 1;
      else if (k.item === 'kedi') use = Math.random() < 0.25;
      if (use) c.item = true;
    } else if (!k.item && k.shieldT > 0 && k.shieldT < 7 && this.itemT <= 0) {
      // kalkanı öndekine fırlat
      this.itemT = 0.4;
      if (karts.some((o) => o !== k && o.place === k.place - 1 && o.progress - k.progress < 30 && o.progress > k.progress) && Math.random() < 0.5) c.item = true;
    }
    // sıkıştıysa geri al
    if (k.stuckT > 2.5 || k.wrongT > 2.5) { k.respawn(); k.stuckT = 0; k.wrongT = 0; }
    void T;
  }
}
