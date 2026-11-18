// Kontroller: klavye, dokunmatik (sol: direksiyon kaydırma, sağ: gaz/fren), oyun kolu.
export interface Controls { throttle: number; brake: number; steer: number; handbrake: boolean; horn: boolean }

export class Input {
  readonly c: Controls = { throttle: 0, brake: 0, steer: 0, handbrake: false, horn: false };
  private keys = new Set<string>();
  private touchSteer = 0; private steerId: number | null = null; private steerX0 = 0;
  private gas = false; private brk = false; private hb = false; private hornT = false;
  touch = false; private kSteer = 0;
  onKey: ((k: string) => void) | null = null;
  constructor(private wheelEl: HTMLElement, steerZone: HTMLElement, gasEl: HTMLElement, brakeEl: HTMLElement, hbEl: HTMLElement, hornEl: HTMLElement) {
    addEventListener('keydown', (e) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;
      const k = e.key.toLowerCase(); if (!this.keys.has(k)) this.onKey?.(k);
      this.keys.add(k); if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k)) e.preventDefault();
    });
    addEventListener('keyup', (e) => this.keys.delete(e.key.toLowerCase()));
    addEventListener('blur', () => this.keys.clear());
    const W = () => Math.min(innerWidth * 0.22, 130);
    steerZone.addEventListener('pointerdown', (e) => { this.touch = true; this.steerId = e.pointerId; this.steerX0 = e.clientX; steerZone.setPointerCapture(e.pointerId); this.touchSteer = 0; e.preventDefault(); });
    steerZone.addEventListener('pointermove', (e) => { if (e.pointerId !== this.steerId) return; this.touchSteer = Math.max(-1, Math.min(1, (e.clientX - this.steerX0) / W())); });
    const endSteer = (e: PointerEvent) => { if (e.pointerId === this.steerId) { this.steerId = null; this.touchSteer = 0; } };
    steerZone.addEventListener('pointerup', endSteer); steerZone.addEventListener('pointercancel', endSteer);
    const hold = (el: HTMLElement, set: (v: boolean) => void) => {
      el.addEventListener('pointerdown', (e) => { this.touch = true; set(true); el.classList.add('on'); el.setPointerCapture(e.pointerId); e.preventDefault(); });
      const off = () => { set(false); el.classList.remove('on'); };
      el.addEventListener('pointerup', off); el.addEventListener('pointercancel', off); el.addEventListener('lostpointercapture', off);
    };
    hold(gasEl, (v) => (this.gas = v)); hold(brakeEl, (v) => (this.brk = v)); hold(hbEl, (v) => (this.hb = v)); hold(hornEl, (v) => (this.hornT = v));
  }
  private has(...k: string[]) { return k.some((x) => this.keys.has(x)); }
  update(dt: number) {
    const c = this.c;
    // klavye direksiyonu yumuşak döner, bırakınca hızla ortalanır
    const kd = (this.has('d', 'arrowright') ? 1 : 0) - (this.has('a', 'arrowleft') ? 1 : 0);
    if (kd !== 0) this.kSteer += (kd - this.kSteer) * Math.min(1, dt * 5); else this.kSteer += (0 - this.kSteer) * Math.min(1, dt * 9);
    let steer = this.steerId !== null ? this.touchSteer : this.kSteer;
    let thr = this.has('w', 'arrowup') || this.gas ? 1 : 0, brk = this.has('s', 'arrowdown') || this.brk ? 1 : 0;
    let hb = this.has(' ') || this.hb;
    const gp = navigator.getGamepads ? [...navigator.getGamepads()].find((g) => g) : null;
    if (gp) {
      const ax = gp.axes[0] ?? 0; if (Math.abs(ax) > 0.12) steer = ax;
      thr = Math.max(thr, gp.buttons[7]?.value ?? 0); brk = Math.max(brk, gp.buttons[6]?.value ?? 0); hb = hb || !!gp.buttons[0]?.pressed;
    }
    c.steer = steer; c.throttle = thr; c.brake = brk; c.handbrake = hb; c.horn = this.has('h') || this.hornT;
    this.wheelEl.style.transform = `rotate(${steer * 120}deg)`;
  }
}
