// Kart fiziği (oyuncu ve rakipler ortak). Atari tarzı, CTR esintili tek tuş drift + 3 kademe turbo.
import * as THREE from 'three';
import { Track, type Frame } from './track';
import { CHARS, buildKart, type CharDef, type KartModel } from './characters';

export interface Ctl { gas: number; brake: number; steer: number; drift: boolean; item: boolean }
export type ItemKind = 'marti' | 'cay' | 'nazar' | 'turbo' | 'simit' | 'duduk' | 'kedi';

export const G = 25;
const BASE_MAX = 31;
export const DRIFT_ZONE = [0.55, 1.0] as const; // turbo penceresi
export const DRIFT_LATE = 0.18;
export const DRIFT_ON = false; // drift şimdilik kapalı // pencereden sonra hâlâ kabul edilen pay
const CHARGE_TIME = 0.75;

export interface KartEvents {
  onBoost?(k: Kart, level: number): void;
  onDriftFail?(k: Kart, late: boolean): void;
  onDriftStart?(k: Kart): void;
  onLand?(k: Kart, v: number): void;
  onWall?(k: Kart, v: number): void;
  onHit?(k: Kart): void;
}

export class Kart {
  readonly def: CharDef; readonly model: KartModel;
  pos = new THREE.Vector3(); vel = new THREE.Vector3(); yaw = 0; speed = 0; vy = 0;
  grounded = true; airT = 0;
  f: Frame = { i: 0, t: 0, s: 0, d: 0, h: 0, w: 13, tx: 1, tz: 0, flags: 0 };
  // yarış
  lap = 0; maxLap = 0; lastS = 0; progress = 0; finished = false; finishTime = 0; place = 1; checkpoint = false;
  // drift
  drifting = false; dir = 0; charge = 0; boosts = 0; neutralT = 0; lockT = 0; pendT = 0; oppT = 0;
  // durum
  boostT = 0; boostP = 0; spinT = 0; shieldT = 0; simit = 0; item: ItemKind | null = null; rollT = 0; lastItem: ItemKind | null = null; slowT = 0;
  wrongT = 0; stuckT = 0; respawnT = 0;
  private prevDrift = false; private prevItem = false;
  wantItem = false;
  steerVis = 0; lean = 0; driftVis = 0; squash = 0;
  constructor(readonly track: Track, charIdx: number, readonly isPlayer: boolean, public ev: KartEvents = {}) {
    this.def = CHARS[charIdx]; this.model = buildKart(this.def);
  }

  place0(s: number, d: number) {
    this.track.point(s, d, this.pos); this.yaw = this.track.heading(s);
    this.f.i = this.track.idxOf(s);
    this.track.frame(this.pos.x, this.pos.y, this.pos.z, this.f.i, this.f, 40);
    this.pos.y = this.f.h; this.vel.set(0, 0, 0); this.speed = 0; this.vy = 0;
    this.lastS = this.f.s; this.lap = 0; this.progress = this.f.s - this.track.L; this.checkpoint = true;
  }

  get maxSpeed() { return (BASE_MAX + this.stat.spd * 0.7 + this.simit * 0.22 + (this.boostT > 0 ? this.boostP : 0)) * (this.slowT > 0 ? 0.55 : 1) * (this.grip < 1 ? 0.96 : 1); }
  /** karakter özellikleri (-1..+1) ve yağmur tutuşu */
  stat = { spd: 0, acc: 0, han: 0 }; grip = 1;
  get juiced() { return this.simit >= 10; }

  boost(power: number, time: number) {
    this.boostP = Math.max(this.boostT > 0 ? this.boostP : 0, power); this.boostT = Math.max(this.boostT, time);
    this.speed = Math.max(this.speed, BASE_MAX + power * 0.75);
  }

  hit() {
    if (this.shieldT > 0) { this.shieldT = 0; return false; }
    if (this.spinT > 0) return false;
    this.spinT = 1.1; this.drifting = false; this.boostT = 0; this.simit = Math.max(0, this.simit - 3);
    this.ev.onHit?.(this); return true;
  }

  step(dt: number, c: Ctl, raceOn: boolean) {
    const tr = this.track;
    if (!raceOn || this.finished && !this.isPlayer) { /* bitirdiyse otomatik sürüş dışarıda */ }
    const ctl = raceOn && this.spinT <= 0 ? c : { gas: 0, brake: 0, steer: 0, drift: false, item: false };
    const driftEdge = ctl.drift && !this.prevDrift; this.prevDrift = ctl.drift;
    const itemEdge = ctl.item && !this.prevItem; this.prevItem = ctl.item; this.wantItem = itemEdge;
    this.slowT = Math.max(0, this.slowT - dt); this.boostT = Math.max(0, this.boostT - dt); this.shieldT = Math.max(0, this.shieldT - dt); this.lockT = Math.max(0, this.lockT - dt);
    if (this.spinT > 0) { this.spinT -= dt; this.speed *= Math.exp(-dt * 2.6); }

    const fx = Math.cos(this.yaw), fz = Math.sin(this.yaw);
    // ---- hız ----
    const max = this.maxSpeed;
    if (this.grounded) {
      if (ctl.gas > 0 && this.speed >= -0.5) {
        const a = this.speed < max ? (21 + this.stat.acc * 4) * (1 - Math.max(0, this.speed) / max) + 5 : -(this.speed - max) * 1.6;
        this.speed += a * ctl.gas * dt;
      } else if (ctl.brake > 0) {
        this.speed -= (this.speed > 0 ? 32 : 10) * ctl.brake * dt; this.speed = Math.max(this.speed, -8);
      } else {
        this.speed -= Math.sign(this.speed) * Math.min(Math.abs(this.speed), 7 * dt);
      }
      if (this.speed > max && ctl.gas === 0) this.speed -= (this.speed - max) * 1.2 * dt;
      // eğim etkisi (yokuşta yavaşla)
      const slope = (tr.T.y[tr.wrap(this.f.i + 1)] - tr.T.y[this.f.i]);
      this.speed -= slope * G * 0.22 * dt * Math.sign(fx * this.f.tx + fz * this.f.tz);
    }
    // ---- drift ----
    const st = ctl.steer;
    // dokununca her zaman zıpla; yön o an ya da havadayken seçilebilir
    const startDrift = (d: number) => { this.drifting = true; this.dir = d; this.charge = 0; this.boosts = 0; this.neutralT = 0; this.oppT = 0; this.pendT = 0; this.ev.onDriftStart?.(this); };
    if (DRIFT_ON && !this.drifting && driftEdge && this.grounded && this.speed > 4) {
      this.vy = 4.2; this.grounded = false; this.pendT = 0.4;
      if (Math.abs(st) > 0.15 && this.speed > 7) startDrift(Math.sign(st));
    } else if (this.drifting && driftEdge) {
      if (this.boosts < 3 && this.lockT <= 0) {
        if (this.charge >= DRIFT_ZONE[0] && this.charge <= DRIFT_ZONE[1] + DRIFT_LATE) {
          this.boosts++; const P = [0, 5, 6.5, 8.5][this.boosts], T = [0, 0.8, 1.0, 1.35][this.boosts];
          this.boost(P, T); this.charge = 0; this.ev.onBoost?.(this, this.boosts);
        } else { this.ev.onDriftFail?.(this, this.charge > DRIFT_ZONE[1]); this.charge = 0; this.lockT = 0.2; }
      }
    }
    if (DRIFT_ON && !this.drifting && this.pendT > 0) { this.pendT -= dt; if (Math.abs(st) > 0.15 && this.speed > 7) startDrift(Math.sign(st)); }
    if (this.drifting) {
      if (this.boosts < 3 && this.lockT <= 0) { this.charge += dt / CHARGE_TIME; if (this.charge > DRIFT_ZONE[1] + DRIFT_LATE + 0.15) this.charge = 0; }
      // drift kendiliğinden kolay bitmez: uzun süre düz ya da ters yöne sert direksiyon gerekir
      if (Math.abs(st) < 0.12) this.neutralT += dt; else this.neutralT = 0;
      if (st * this.dir < -0.55) this.oppT += dt; else this.oppT = 0;
      if (this.neutralT > 0.6 || this.oppT > 0.35 || this.speed < 6 || ctl.brake > 0.5 || this.spinT > 0) this.drifting = false;
    }
    // ---- dönüş ----
    let yawRate: number;
    const sp = Math.abs(this.speed), sf = Math.min(1, sp / 7);
    if (this.drifting) { yawRate = this.dir * (1.15 + 0.75 * st * this.dir) * sf; this.speed -= 1.2 * dt; }
    else yawRate = st * (2.25 + this.stat.han * 0.25 - 0.75 * Math.min(1, sp / 34)) * sf * Math.sign(this.speed || 1);
    if (!this.grounded) yawRate *= this.drifting ? 0.9 : 0.45;
    if (this.spinT > 0) yawRate = 0;
    this.yaw += yawRate * dt;
    // ---- yatay hız: kayma ----
    const grip = (this.drifting ? 3.6 : this.grounded ? 12 + this.stat.han * 2 : 1.2) * (this.grip < 1 ? 0.7 : 1);
    const k = 1 - Math.exp(-grip * dt);
    const tvx = Math.cos(this.yaw) * this.speed, tvz = Math.sin(this.yaw) * this.speed;
    this.vel.x += (tvx - this.vel.x) * k; this.vel.z += (tvz - this.vel.z) * k;
    const ox = this.pos.x, oz = this.pos.z, oy = this.pos.y;
    this.pos.x += this.vel.x * dt; this.pos.z += this.vel.z * dt;
    // ---- zemin ----
    const h0 = this.f.h;
    tr.frame(this.pos.x, this.pos.y, this.pos.z, this.f.i, this.f);
    const h = this.f.h;
    const groundVy = (h - h0) / Math.max(dt, 1e-4);
    this.vy -= G * dt; this.pos.y += this.vy * dt;
    const wasAir = !this.grounded;
    if (this.pos.y <= h) {
      if (wasAir && this.airT > 0.25) { this.ev.onLand?.(this, -this.vy); this.squash = Math.min(1, -this.vy / 14); }
      this.pos.y = h; this.vy = groundVy; this.grounded = true; this.airT = 0;
    } else if (this.pos.y > h + 0.12) { this.grounded = false; this.airT += dt; }
    void oy;
    // ---- duvarlar ----
    const lim = this.f.w / 2 + 0.6;
    if (Math.abs(this.f.d) > lim) {
      const sd = Math.sign(this.f.d), over = Math.abs(this.f.d) - lim;
      const rx = -this.f.tz, rz = this.f.tx; // sağ
      this.pos.x -= rx * sd * over; this.pos.z -= rz * sd * over;
      const vlat = this.vel.x * rx + this.vel.z * rz;
      if (vlat * sd > 0) {
        this.vel.x -= rx * vlat * 1.6; this.vel.z -= rz * vlat * 1.6;
        const imp = Math.abs(vlat);
        this.speed *= Math.max(0.7, 1 - imp * 0.025);
        // burnu pist yönüne çevir
        const ty = Math.atan2(this.f.tz, this.f.tx) * 1, dy = wrapA(ty - this.yaw);
        const fwd = Math.cos(dy) > 0 ? dy : wrapA(dy + Math.PI);
        this.yaw += fwd * Math.min(0.6, imp * 0.05);
        if (imp > 13) { this.drifting = false; } if (imp > 4) this.ev.onWall?.(this, imp);
      }
      tr.frame(this.pos.x, this.pos.y, this.pos.z, this.f.i, this.f);
    }
    void ox; void oz;
    // ---- yarış ilerlemesi ----
    const s = this.f.s, L = tr.L;
    if (this.lastS > L * 0.75 && s < L * 0.25) { if (this.checkpoint) { this.lap++; this.checkpoint = false; } }
    else if (this.lastS < L * 0.25 && s > L * 0.75) { this.lap--; }
    if (s > L * 0.4 && s < L * 0.6) this.checkpoint = true;
    this.lastS = s; this.progress = this.lap * L + s;
    // ters yön / sıkışma
    const along = Math.cos(this.yaw) * this.f.tx + Math.sin(this.yaw) * this.f.tz;
    this.wrongT = along < -0.3 && this.speed > 3 ? this.wrongT + dt : 0;
    this.stuckT = raceOn && ctl.gas > 0 && Math.abs(this.speed) < 2 ? this.stuckT + dt : 0;
    // görsel durum
    this.steerVis += (st - this.steerVis) * Math.min(1, dt * 10);
    this.driftVis += ((this.drifting ? this.dir : 0) - this.driftVis) * Math.min(1, dt * 7);
    this.lean += ((this.drifting ? -this.dir * 0.12 : -st * 0.06 * Math.min(1, sp / 15)) - this.lean) * Math.min(1, dt * 8);
    this.squash = Math.max(0, this.squash - dt * 4);
  }

  respawn() {
    const f = this.f, s = f.s - 4;
    this.track.point(s, 0, this.pos); this.yaw = this.track.heading(s);
    this.track.frame(this.pos.x, this.pos.y, this.pos.z, f.i, this.f, 30);
    this.pos.y = this.f.h + 2.5; this.vel.set(0, 0, 0); this.speed = 0; this.vy = 0; this.drifting = false; this.spinT = 0; this.respawnT = 1.2;
  }

  sync(dt: number, time: number) {
    const m = this.model;
    m.root.position.copy(this.pos);
    let vis = this.yaw + this.driftVis * 0.42;
    if (this.spinT > 0) vis += (1.1 - this.spinT) * Math.PI * 3.6;
    m.root.rotation.set(0, -vis, 0);
    // eğim (pist yönünde)
    const T = this.track.T, i = this.f.i, j = this.track.wrap(i + 3);
    const pitch = Math.atan2(T.y[j] - T.y[i], 3) * (this.grounded ? 1 : 0.4);
    const along = Math.cos(vis) * this.f.tx + Math.sin(vis) * this.f.tz;
    m.body.rotation.set(this.lean, 0, pitch * along);
    m.body.scale.set(1 + this.squash * 0.12, 1 - this.squash * 0.2, 1 + this.squash * 0.12);
    m.body.position.y = this.boostT > 0 ? Math.sin(time * 40) * 0.02 : 0;
    const spin = this.speed * dt / 0.33;
    for (const w of m.wheels) w.rotation.z -= spin;
    for (const fw of m.front) fw.rotation.y = -this.steerVis * 0.4;
    m.driver.rotation.x = -this.steerVis * 0.15;
    m.driver.position.y = 0.9 + Math.abs(Math.sin(time * 9 + this.def.color)) * 0.015 * Math.min(1, this.speed / 10);
  }
}

export function wrapA(a: number) { while (a > Math.PI) a -= Math.PI * 2; while (a < -Math.PI) a += Math.PI * 2; return a; }
