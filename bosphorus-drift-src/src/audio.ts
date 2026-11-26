// Ses: tamamen Web Audio ile üretilir (dosya yok). Motor, drift, turbo, efektler ve Hicaz makamında küçük bir döngü.
export class Audio {
  ctx: AudioContext | null = null;
  private master!: GainNode; private sfx!: GainNode; private musicG!: GainNode;
  private eng?: { o1: OscillatorNode; o2: OscillatorNode; g: GainNode; f: BiquadFilterNode };
  private skid?: { g: GainNode; f: BiquadFilterNode };
  private noise!: AudioBuffer;
  muted = false; musicOn = true;
  private nextNote = 0; private step = 0; private playing = false;

  start() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const C = (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext);
    const ctx = (this.ctx = new C());
    this.master = ctx.createGain(); this.master.gain.value = this.muted ? 0 : 0.8; this.master.connect(ctx.destination);
    this.sfx = ctx.createGain(); this.sfx.gain.value = 0.7; this.sfx.connect(this.master);
    this.musicG = ctx.createGain(); this.musicG.gain.value = 0.22; this.musicG.connect(this.master);
    this.noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = this.noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    // motor
    const o1 = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    o1.type = 'sawtooth'; o2.type = 'square'; f.type = 'lowpass'; f.frequency.value = 600; g.gain.value = 0;
    o1.connect(f); o2.connect(f); f.connect(g); g.connect(this.sfx); o1.start(); o2.start();
    this.eng = { o1, o2, g, f };
    // patinaj
    const ns = ctx.createBufferSource(); ns.buffer = this.noise; ns.loop = true;
    const sf = ctx.createBiquadFilter(); sf.type = 'bandpass'; sf.frequency.value = 1800; sf.Q.value = 3;
    const sg = ctx.createGain(); sg.gain.value = 0; ns.connect(sf); sf.connect(sg); sg.connect(this.sfx); ns.start();
    this.skid = { g: sg, f: sf };
  }
  setMuted(m: boolean) { this.muted = m; if (this.ctx) this.master.gain.setTargetAtTime(m ? 0 : 0.8, this.ctx.currentTime, 0.05); }

  engine(speed: number, gas: number, drifting: boolean, boost: boolean, on: boolean) {
    if (!this.ctx || !this.eng) return;
    const t = this.ctx.currentTime, e = this.eng;
    const f0 = 55 + Math.abs(speed) * 4.2 + (boost ? 40 : 0);
    e.o1.frequency.setTargetAtTime(f0, t, 0.05); e.o2.frequency.setTargetAtTime(f0 * 0.5, t, 0.05);
    e.f.frequency.setTargetAtTime(400 + gas * 900 + (boost ? 700 : 0), t, 0.08);
    e.g.gain.setTargetAtTime(on ? 0.05 + gas * 0.05 : 0, t, 0.1);
    this.skid!.g.gain.setTargetAtTime(on && drifting ? 0.07 : 0, t, 0.05);
    this.skid!.f.frequency.setTargetAtTime(1500 + Math.abs(speed) * 20, t, 0.1);
  }

  private tone(freq: number, dur: number, type: OscillatorType = 'square', vol = 0.2, slide = 0, when = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + when, o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t); if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq * slide), t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(this.sfx); o.start(t); o.stop(t + dur + 0.02);
  }
  private burst(dur: number, freq: number, vol = 0.3, q = 1, when = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + when, s = this.ctx.createBufferSource(), f = this.ctx.createBiquadFilter(), g = this.ctx.createGain();
    s.buffer = this.noise; f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f); f.connect(g); g.connect(this.sfx); s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.02);
  }
  simit() { this.tone(988, 0.08, 'triangle', 0.18); this.tone(1318, 0.12, 'triangle', 0.16, 0, 0.06); }
  box() { [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.09, 'triangle', 0.12, 0, i * 0.04)); }
  boost(level: number) { this.burst(0.5, 900 + level * 300, 0.35, 0.8); this.tone(220 + level * 110, 0.35, 'sawtooth', 0.08, 2.2); }
  fail() { this.tone(180, 0.18, 'square', 0.1, 0.6); }
  hop() { this.tone(300, 0.08, 'triangle', 0.08, 1.6); }
  hit() { this.burst(0.35, 300, 0.5, 0.7); this.tone(160, 0.4, 'sawtooth', 0.12, 0.4); }
  wall() { this.burst(0.15, 200, 0.3, 1); }
  land() { this.burst(0.12, 150, 0.25, 1); }
  gull() { // martı çığlığı
    if (!this.ctx) return;
    for (let k = 0; k < 2; k++) {
      const t = this.ctx.currentTime + k * 0.16, o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.type = 'sawtooth'; o.frequency.setValueAtTime(1500, t); o.frequency.exponentialRampToValueAtTime(900, t + 0.13);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.09, t + 0.02); g.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
      o.connect(g); g.connect(this.sfx); o.start(t); o.stop(t + 0.16);
    }
  }
  splash() { this.burst(0.3, 700, 0.3, 0.6); }
  shield() { [880, 1108, 1318].forEach((f, i) => this.tone(f, 0.25, 'sine', 0.1, 0, i * 0.05)); }
  block() { this.tone(1318, 0.2, 'sine', 0.15, 0.5); }
  beep(hi: boolean) { this.tone(hi ? 880 : 440, hi ? 0.5 : 0.22, 'square', 0.14); }
  lap() { [659, 784, 988].forEach((f, i) => this.tone(f, 0.14, 'square', 0.1, 0, i * 0.09)); }
  finish(win: boolean) { const seq = win ? [523, 659, 784, 1046, 784, 1046] : [523, 494, 440, 392]; seq.forEach((f, i) => this.tone(f, 0.22, 'square', 0.12, 0, i * 0.14)); }
  click() { this.tone(660, 0.05, 'triangle', 0.1); }

  // ---- müzik: Hicaz dizisi (Re, Mi♭, Fa♯, Sol, La, Si♭, Do) ----
  music(on: boolean) { this.playing = on && this.musicOn; if (this.ctx && this.playing) this.nextNote = Math.max(this.nextNote, this.ctx.currentTime + 0.05); }
  tick() {
    if (!this.ctx || !this.playing) return;
    const bpm = 138, st = 60 / bpm / 2;
    const hz = [293.7, 311.1, 370, 392, 440, 466.2, 523.3, 587.3];
    const mel = [0, 2, 3, 4, 3, 2, 1, 0, 4, 5, 4, 3, 2, 3, 2, 1, 0, 2, 3, 4, 6, 5, 4, 3, 4, 3, 2, 1, 2, 1, 0, -1];
    const bass = [0, 0, 4, 4, 3, 3, 0, 0];
    while (this.nextNote < this.ctx.currentTime + 0.2) {
      const t = this.nextNote - this.ctx.currentTime, i = this.step % 32;
      if (mel[i] >= 0 && i % 4 !== 3) this.mnote(hz[mel[i]] * 2, st * 0.9, 'square', 0.05, t);
      if (i % 4 === 0) this.mnote(hz[bass[(this.step >> 2) % 8]] / 2, st * 3, 'triangle', 0.12, t);
      if (i % 4 === 0) this.mdrum(t, 90, 0.25); if (i % 4 === 2) this.mdrum(t, 4000, 0.04); if (i % 8 === 4) this.mdrum(t, 1200, 0.12);
      this.nextNote += st; this.step++;
    }
  }
  private mnote(f: number, d: number, type: OscillatorType, v: number, when: number) {
    const t = this.ctx!.currentTime + when, o = this.ctx!.createOscillator(), g = this.ctx!.createGain();
    o.type = type; o.frequency.value = f; g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.001, t + d);
    o.connect(g); g.connect(this.musicG); o.start(t); o.stop(t + d + 0.02);
  }
  private mdrum(when: number, f: number, v: number) {
    const t = this.ctx!.currentTime + when;
    if (f < 200) { const o = this.ctx!.createOscillator(), g = this.ctx!.createGain(); o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.12); g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.15); o.connect(g); g.connect(this.musicG); o.start(t); o.stop(t + 0.17); return; }
    const s = this.ctx!.createBufferSource(), fl = this.ctx!.createBiquadFilter(), g = this.ctx!.createGain();
    s.buffer = this.noise; fl.type = 'highpass'; fl.frequency.value = f; g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
    s.connect(fl); fl.connect(g); g.connect(this.musicG); s.start(t, Math.random() * 0.5); s.stop(t + 0.08);
  }
}
