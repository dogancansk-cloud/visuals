// Sesler: tamamen sentez (dosya yok) — motor, lastik, rüzgâr, korna, çarpma, yağmur, deniz.
export class Audio {
  ctx: AudioContext | null = null; muted = false;
  private master!: GainNode;
  private eng1!: OscillatorNode; private eng2!: OscillatorNode; private engF!: BiquadFilterNode; private engG!: GainNode;
  private tireG!: GainNode; private windG!: GainNode; private windF!: BiquadFilterNode; private rainG!: GainNode; private seaG!: GainNode;
  private hornG!: GainNode; private noise!: AudioBuffer; private cityG!: GainNode;
  start() {
    if (this.ctx) { if (this.ctx.state !== 'running') this.ctx.resume(); return; }
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext; if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain(); this.master.gain.value = this.muted ? 0 : 0.7; this.master.connect(ctx.destination);
    const len = ctx.sampleRate * 2; this.noise = ctx.createBuffer(1, len, ctx.sampleRate); const d = this.noise.getChannelData(0); for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const noiseSrc = () => { const s = ctx.createBufferSource(); s.buffer = this.noise; s.loop = true; s.start(); return s; };
    // motor: iki osilatör + hafif bozulma + alçak geçiren süzgeç
    this.eng1 = ctx.createOscillator(); this.eng1.type = 'sawtooth'; this.eng2 = ctx.createOscillator(); this.eng2.type = 'square';
    const shaper = ctx.createWaveShaper(); const curve = new Float32Array(256); for (let i = 0; i < 256; i++) { const x = i / 128 - 1; curve[i] = Math.tanh(x * 2.2); } shaper.curve = curve;
    this.engF = ctx.createBiquadFilter(); this.engF.type = 'lowpass'; this.engF.Q.value = 2;
    this.engG = ctx.createGain(); this.engG.gain.value = 0;
    const g2 = ctx.createGain(); g2.gain.value = 0.5;
    this.eng1.connect(shaper); this.eng2.connect(g2).connect(shaper); shaper.connect(this.engF).connect(this.engG).connect(this.master);
    this.eng1.start(); this.eng2.start();
    // lastik sürtünmesi
    const tf = ctx.createBiquadFilter(); tf.type = 'bandpass'; tf.frequency.value = 1100; tf.Q.value = 6; this.tireG = ctx.createGain(); this.tireG.gain.value = 0;
    noiseSrc().connect(tf).connect(this.tireG).connect(this.master);
    // rüzgâr
    this.windF = ctx.createBiquadFilter(); this.windF.type = 'lowpass'; this.windF.frequency.value = 400; this.windG = ctx.createGain(); this.windG.gain.value = 0;
    noiseSrc().connect(this.windF).connect(this.windG).connect(this.master);
    // yağmur
    const rf = ctx.createBiquadFilter(); rf.type = 'highpass'; rf.frequency.value = 2500; this.rainG = ctx.createGain(); this.rainG.gain.value = 0;
    noiseSrc().connect(rf).connect(this.rainG).connect(this.master);
    // deniz (dalga: yavaş dalgalanan alçak gürültü)
    const sf = ctx.createBiquadFilter(); sf.type = 'lowpass'; sf.frequency.value = 500; this.seaG = ctx.createGain(); this.seaG.gain.value = 0;
    noiseSrc().connect(sf).connect(this.seaG).connect(this.master);
    // şehir uğultusu (uzak trafik): alçak, yavaş dalgalanan gürültü
    const cf = ctx.createBiquadFilter(); cf.type = 'lowpass'; cf.frequency.value = 170; this.cityG = ctx.createGain(); this.cityG.gain.value = 0; noiseSrc().connect(cf).connect(this.cityG).connect(this.master);
    // korna
    this.hornG = ctx.createGain(); this.hornG.gain.value = 0; const hf = ctx.createBiquadFilter(); hf.type = 'lowpass'; hf.frequency.value = 2200;
    for (const f of [415, 494]) { const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f; o.connect(hf); o.start(); }
    hf.connect(this.hornG).connect(this.master);
  }
  setMuted(m: boolean) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : 0.7; }
  update(s: { rpm: number; throttle: number; speed: number; slip: number; horn: boolean; rain: number; sea: number; t: number }) {
    if (!this.ctx) return; const t = this.ctx.currentTime, k = 0.05;
    const f = (s.rpm / 60) * 2; // 4 silindir: devir başına 2 ateşleme
    this.eng1.frequency.setTargetAtTime(f, t, k); this.eng2.frequency.setTargetAtTime(f * 0.5, t, k);
    this.engF.frequency.setTargetAtTime(300 + s.throttle * 1400 + s.rpm * 0.25, t, k);
    this.engG.gain.setTargetAtTime(0.07 + s.throttle * 0.1, t, k);
    this.tireG.gain.setTargetAtTime(Math.min(0.35, Math.max(0, s.slip - 2.5) * 0.06), t, 0.04);
    this.windF.frequency.setTargetAtTime(300 + s.speed * 18, t, 0.1); this.windG.gain.setTargetAtTime(Math.min(0.25, s.speed * s.speed * 0.00018), t, 0.1);
    this.rainG.gain.setTargetAtTime(s.rain * 0.12, t, 0.3);
    this.seaG.gain.setTargetAtTime(s.sea * (0.05 + 0.04 * Math.sin(s.t * 0.7)), t, 0.3);
    this.hornG.gain.setTargetAtTime(s.horn ? 0.12 : 0, t, 0.01);
  }
  /** ortam: şehir uğultusu düzeyi 0..1 */
  city(level: number, t: number) { if (this.ctx) this.cityG.gain.setTargetAtTime(level * (0.1 + 0.03 * Math.sin(t * 0.31)), this.ctx.currentTime, 0.5); }
  private tone(type: OscillatorType, f: [number, number][], dur: number, vol: number, at = 0, bp = 0) {
    const ctx = this.ctx!, t = ctx.currentTime + at, o = ctx.createOscillator(), g = ctx.createGain(); o.type = type;
    f.forEach(([tt, fr], i) => (i ? o.frequency.linearRampToValueAtTime(fr, t + tt * dur) : o.frequency.setValueAtTime(fr, t)));
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + Math.min(0.04, dur * 0.2)); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    let node: AudioNode = o; if (bp) { const b = ctx.createBiquadFilter(); b.type = 'bandpass'; b.frequency.value = bp; b.Q.value = 2.5; o.connect(b); node = b; }
    node.connect(g).connect(this.master); o.start(t); o.stop(t + dur + 0.05);
  }
  /** martı çığlığı: inen-çıkan kısa bağırışlar */
  gull(vol: number) { if (!this.ctx) return; const n = 2 + Math.floor(Math.random() * 4), base = 1500 + Math.random() * 500; this.tone('sawtooth', [[0, base * 0.8], [0.25, base * 1.25], [1, base * 0.9]], 0.55, vol * 0.09, 0, 2200); for (let i = 0; i < n; i++) this.tone('sawtooth', [[0, base], [0.3, base * 1.2], [1, base * 0.75]], 0.17, vol * 0.08, 0.62 + i * 0.21, 2400); }
  /** vapur düdüğü: uzun, pes */
  ferryHorn(vol: number) { if (!this.ctx) return; for (const fr of [147, 185]) this.tone('sawtooth', [[0, fr], [1, fr * 0.995]], 2.2, vol * 0.11, 0, 420); }
  /** tramvay zili */
  tramBell(vol: number) { if (!this.ctx) return; for (const at of [0, 0.32]) { this.tone('sine', [[0, 2090], [1, 2085]], 0.5, vol * 0.1, at); this.tone('sine', [[0, 3140], [1, 3130]], 0.3, vol * 0.05, at); } }
  /** miyav */
  meow(vol: number) { if (!this.ctx) return; const b = 620 + Math.random() * 160; this.tone('sawtooth', [[0, b], [0.3, b * 1.45], [1, b * 0.85]], 0.55, vol * 0.09, 0, 1500); }
  /** kuş cıvıltısı (parklar) */
  chirp(vol: number) { if (!this.ctx) return; const b = 3200 + Math.random() * 1500; for (let i = 0; i < 3 + Math.floor(Math.random() * 3); i++) this.tone('sine', [[0, b], [0.5, b * 1.3], [1, b * 0.9]], 0.07, vol * 0.05, i * 0.11 + Math.random() * 0.03); }
  /** uzaktan korna */
  farHorn(vol: number) { if (!this.ctx) return; const f = 380 + Math.random() * 120; this.tone('square', [[0, f], [1, f]], 0.25 + Math.random() * 0.3, vol * 0.035, 0, 700); }
  /** çarpma sesi, şiddet 0..1 */
  bump(power: number) {
    if (!this.ctx) return; const ctx = this.ctx, t = ctx.currentTime;
    const s = ctx.createBufferSource(); s.buffer = this.noise; const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 600 + power * 900;
    const g = ctx.createGain(); g.gain.setValueAtTime(Math.min(0.8, 0.15 + power * 0.7), t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
    s.connect(f).connect(g).connect(this.master); s.start(t, Math.random()); s.stop(t + 0.4);
    const o = ctx.createOscillator(); o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.25); const og = ctx.createGain(); og.gain.setValueAtTime(0.5 * power, t); og.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    o.connect(og).connect(this.master); o.start(t); o.stop(t + 0.3);
  }
  /** kısa melodi: görev başarı/başarısız, para */
  chime(ok: boolean) {
    if (!this.ctx) return; const ctx = this.ctx, t = ctx.currentTime;
    (ok ? [660, 880, 1320] : [440, 330]).forEach((fr, i) => { const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = fr; const g = ctx.createGain(); g.gain.setValueAtTime(0, t + i * 0.11); g.gain.linearRampToValueAtTime(0.18, t + i * 0.11 + 0.02); g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.11 + 0.3); o.connect(g).connect(this.master); o.start(t + i * 0.11); o.stop(t + i * 0.11 + 0.35); });
  }
  splash() {
    if (!this.ctx) return; const ctx = this.ctx, t = ctx.currentTime; const s = ctx.createBufferSource(); s.buffer = this.noise;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(3000, t); f.frequency.exponentialRampToValueAtTime(200, t + 1.2);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.6, t); g.gain.exponentialRampToValueAtTime(0.001, t + 1.4); s.connect(f).connect(g).connect(this.master); s.start(t); s.stop(t + 1.5);
  }
}
