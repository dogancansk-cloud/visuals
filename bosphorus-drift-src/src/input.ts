// Kontroller: klavye, dokunmatik (sol: direksiyon, sağ: drift/eşya/fren, gaz otomatik), oyun kolu.
import type { Ctl } from './kart';

export class Input {
  readonly c: Ctl = { gas: 0, brake: 0, steer: 0, drift: false, item: false };
  touch = false;
  onKey: ((k: string) => void) | null = null;
  private keys = new Set<string>();
  private kSteer = 0; private tSteer = 0; private steerId: number | null = null; private steerX0 = 0;
  private tDrift = false; private tItem = false; private tBrake = false;
  private gpPrev: boolean[] = [];
  constructor(ui: HTMLElement) {
    addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if (!this.keys.has(k)) this.onKey?.(k);
      this.keys.add(k);
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k)) e.preventDefault();
    });
    addEventListener('keyup', (e) => this.keys.delete(e.key.toLowerCase()));
    addEventListener('blur', () => this.keys.clear());
    const steer = ui.querySelector<HTMLElement>('#tSteer')!, knob = ui.querySelector<HTMLElement>('#tKnob')!;
    const W = () => Math.min(innerWidth * 0.16, 90);
    steer.addEventListener('pointerdown', (e) => { this.touch = true; this.steerId = e.pointerId; this.steerX0 = e.clientX; steer.setPointerCapture(e.pointerId); this.tSteer = 0; knob.style.left = e.clientX - steer.getBoundingClientRect().left + 'px'; knob.style.top = e.clientY - steer.getBoundingClientRect().top + 'px'; knob.classList.add('on'); e.preventDefault(); });
    steer.addEventListener('pointermove', (e) => { if (e.pointerId !== this.steerId) return; this.tSteer = Math.max(-1, Math.min(1, (e.clientX - this.steerX0) / W())); knob.style.setProperty('--dx', this.tSteer * 40 + 'px'); });
    const end = (e: PointerEvent) => { if (e.pointerId === this.steerId) { this.steerId = null; this.tSteer = 0; knob.classList.remove('on'); knob.style.setProperty('--dx', '0px'); } };
    steer.addEventListener('pointerup', end); steer.addEventListener('pointercancel', end);
    const hold = (sel: string, set: (v: boolean) => void) => {
      const el = ui.querySelector<HTMLElement>(sel)!;
      el.addEventListener('pointerdown', (e) => { this.touch = true; set(true); el.classList.add('on'); el.setPointerCapture(e.pointerId); e.preventDefault(); e.stopPropagation(); });
      const off = () => { set(false); el.classList.remove('on'); };
      el.addEventListener('pointerup', off); el.addEventListener('pointercancel', off); el.addEventListener('lostpointercapture', off);
    };
    hold('#tDrift', (v) => (this.tDrift = v)); hold('#tItem', (v) => (this.tItem = v)); hold('#tBrake', (v) => (this.tBrake = v));
  }
  private has(...k: string[]) { return k.some((x) => this.keys.has(x)); }
  update(dt: number) {
    const c = this.c;
    const kd = (this.has('d', 'arrowright') ? 1 : 0) - (this.has('a', 'q', 'arrowleft') ? 1 : 0);
    this.kSteer += (kd - this.kSteer) * Math.min(1, dt * (kd !== 0 ? 9 : 14));
    let steer = this.steerId !== null ? this.tSteer : this.kSteer;
    let gas = this.has('w', 'z', 'arrowup') || (this.touch && !this.tBrake) ? 1 : 0;
    let brake = this.has('s', 'arrowdown') || this.tBrake ? 1 : 0;
    let drift = this.has(' ', 'shift') || this.tDrift;
    let item = this.has('e', 'enter', 'control', 'f') || this.tItem;
    const gp = navigator.getGamepads ? [...navigator.getGamepads()].find((g) => g) : null;
    if (gp) {
      const ax = gp.axes[0] ?? 0; if (Math.abs(ax) > 0.15) steer = ax;
      if (gp.buttons[14]?.pressed) steer = -1; if (gp.buttons[15]?.pressed) steer = 1;
      gas = Math.max(gas, gp.buttons[0]?.pressed ? 1 : 0, gp.buttons[7]?.value ?? 0);
      brake = Math.max(brake, gp.buttons[2]?.pressed ? 1 : 0, gp.buttons[6]?.value ?? 0);
      drift = drift || !!gp.buttons[5]?.pressed;
      item = item || !!gp.buttons[4]?.pressed || !!gp.buttons[1]?.pressed;
      const st = !!gp.buttons[9]?.pressed; if (st && !this.gpPrev[9]) this.onKey?.('escape');
      this.gpPrev[9] = st;
    }
    c.steer = steer; c.gas = gas; c.brake = brake; c.drift = drift; c.item = item;
  }
}
