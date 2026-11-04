import * as Tone from 'tone';

export type MusicMode = 'slavic-polka' | 'portugal-brazil-fusion' | 'us-patriotic-march';

class ProceduralSoundtrack {
  private isPlaying = false;
  private currentMode: MusicMode = 'slavic-polka';
  private loopId: number | null = null;
  private isInitialized = false;

  // Synths
  private leadSynth: Tone.PolySynth | null = null;
  private chordSynth: Tone.PolySynth | null = null;
  private bassSynth: Tone.MembraneSynth | null = null;
  private percSynth: Tone.NoiseSynth | null = null;
  private sfxSynth: Tone.Synth | null = null;

  private initSynths() {
    if (this.isInitialized) return;

    // Rich accordion / brass lead
    this.leadSynth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'sawtooth8' },
      envelope: { attack: 0.03, decay: 0.15, sustain: 0.45, release: 0.25 }
    }).toDestination();
    this.leadSynth.volume.value = -12;

    // Chords / accompaniments
    this.chordSynth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.02, decay: 0.2, sustain: 0.25, release: 0.3 }
    }).toDestination();
    this.chordSynth.volume.value = -14;

    // Punchy sousaphone / tuba bass
    this.bassSynth = new Tone.MembraneSynth({
      pitchDecay: 0.04,
      octaves: 3.5,
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 0.3, sustain: 0.01, release: 0.4 }
    }).toDestination();
    this.bassSynth.volume.value = -8;

    // Snare / Hi-hat noise
    this.percSynth = new Tone.NoiseSynth({
      noise: { type: 'white' },
      envelope: { attack: 0.005, decay: 0.06, sustain: 0, release: 0.04 }
    }).toDestination();
    this.percSynth.volume.value = -18;

    // SFX synth
    this.sfxSynth = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 0.1, sustain: 0.05, release: 0.1 }
    }).toDestination();
    this.sfxSynth.volume.value = -12;

    this.isInitialized = true;
  }

  public async start(mode: MusicMode = 'slavic-polka') {
    await Tone.start();
    this.initSynths();
    this.currentMode = mode;

    Tone.Transport.cancel();

    if (mode === 'slavic-polka') {
      this.setupSlavicPolka();
    } else if (mode === 'portugal-brazil-fusion') {
      this.setupPortugalBrazilFusion();
    } else if (mode === 'us-patriotic-march') {
      this.setupUsPatrioticMarch();
    }

    Tone.Transport.start();
    this.isPlaying = true;
  }

  public stop() {
    Tone.Transport.stop();
    Tone.Transport.cancel();
    this.isPlaying = false;
  }

  public toggle(mode: MusicMode): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start(mode);
      return true;
    }
  }

  public setMode(mode: MusicMode) {
    if (this.currentMode === mode) return;
    this.currentMode = mode;
    if (this.isPlaying) {
      this.start(mode);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getCurrentMode(): MusicMode {
    return this.currentMode;
  }

  // Slavic Folk Polka Engine
  private setupSlavicPolka() {
    Tone.Transport.bpm.value = 136;

    const bassline = ['C2', 'G2', 'C2', 'G2', 'G2', 'D2', 'G2', 'D2', 'A1', 'E2', 'A1', 'E2', 'F1', 'C2', 'G1', 'C2'];
    const accordionChords = [
      ['E4', 'G4', 'C5'],
      ['E4', 'G4', 'C5'],
      ['D4', 'G4', 'B4'],
      ['D4', 'G4', 'B4'],
      ['C4', 'E4', 'A4'],
      ['C4', 'E4', 'A4'],
      ['C4', 'F4', 'A4'],
      ['D4', 'G4', 'B4']
    ];
    
    const folkMelody = [
      'G4', 'E4', 'F4', 'G4', 'C5', 'B4', 'A4', 'G4',
      'F4', 'D4', 'E4', 'F4', 'B4', 'A4', 'G4', 'F4',
      'E4', 'A4', 'C5', 'E5', 'D5', 'C5', 'B4', 'A4',
      'G4', 'F4', 'E4', 'D4', 'C4', 'E4', 'G4', 'C5'
    ];

    let tick = 0;
    this.loopId = Tone.Transport.scheduleRepeat((time) => {
      if (tick % 2 === 0) {
        const bassNote = bassline[(tick / 2) % bassline.length];
        this.bassSynth?.triggerAttackRelease(bassNote, '16n', time);
      } else {
        const chordIndex = Math.floor(tick / 4) % accordionChords.length;
        this.chordSynth?.triggerAttackRelease(accordionChords[chordIndex], '16n', time);
        this.percSynth?.triggerAttackRelease('32n', time);
      }

      if (tick % 2 === 0) {
        const note = folkMelody[(tick / 2) % folkMelody.length];
        if (note) {
          this.leadSynth?.triggerAttackRelease(note, '8n', time);
        }
      }

      tick++;
    }, '8n');
  }

  // Portugal (Fado) vs Brazil (Samba / Bossa) Mashup
  private setupPortugalBrazilFusion() {
    Tone.Transport.bpm.value = 118;

    const fadoArpeggios = [
      'D4', 'F4', 'A4', 'D5', 'A4', 'F4',
      'C#4', 'E4', 'A4', 'C#5', 'A4', 'E4',
      'Bb3', 'D4', 'G4', 'Bb4', 'G4', 'D4',
      'A3', 'C#4', 'E4', 'A4', 'G4', 'E4'
    ];

    const bossaChords = [
      ['D4', 'F4', 'A4', 'C5', 'E5'],
      ['D4', 'F4', 'A4', 'C5', 'E5'],
      ['G3', 'F4', 'B4', 'E5'],
      ['C4', 'E4', 'B4', 'D5'],
      ['A3', 'G4', 'C#5', 'F5']
    ];

    const sambaBass = ['D2', null, 'D2', 'A2', 'G2', null, 'C2', 'G2', 'A1', null, 'A2', 'C#2'];

    let tick = 0;
    this.loopId = Tone.Transport.scheduleRepeat((time) => {
      const cycleStep = tick % 32;
      const isFadoPhase = cycleStep < 16;

      if (isFadoPhase) {
        if (tick % 2 === 0) {
          const note = fadoArpeggios[(tick / 2) % fadoArpeggios.length];
          this.leadSynth?.triggerAttackRelease(note, '16n', time, 0.7);
        }
        if (tick % 4 === 0) {
          this.bassSynth?.triggerAttackRelease('D2', '4n', time, 0.4);
        }
      } else {
        const sambaNote = sambaBass[(tick) % sambaBass.length];
        if (sambaNote) {
          this.bassSynth?.triggerAttackRelease(sambaNote, '16n', time, 0.85);
        }

        if (tick % 3 === 0 || tick % 8 === 2 || tick % 8 === 5) {
          const chord = bossaChords[Math.floor(tick / 4) % bossaChords.length];
          this.chordSynth?.triggerAttackRelease(chord, '16n', time, 0.75);
          this.percSynth?.triggerAttackRelease('32n', time, 0.6);
        }

        if (tick % 2 === 1) {
          const sambaLead = ['F5', 'E5', 'D5', 'A5', 'G5', 'F5', 'C#5', 'D5'];
          const note = sambaLead[(tick) % sambaLead.length];
          this.leadSynth?.triggerAttackRelease(note, '16n', time, 0.6);
        }
      }

      tick++;
    }, '16n');
  }

  // Satirical Ultra-"Patriotic" American Sousa March
  // Military snare rolls, triumphant sousaphone oom-pah, and bombastic brass fanfares
  private setupUsPatrioticMarch() {
    Tone.Transport.bpm.value = 124;

    const sousaBass = ['C2', 'G1', 'C2', 'G1', 'F1', 'C2', 'G1', 'C2'];
    const brassChords = [
      ['C4', 'E4', 'G4', 'C5'],
      ['C4', 'E4', 'G4', 'C5'],
      ['G3', 'D4', 'F4', 'B4'],
      ['C4', 'E4', 'G4', 'C5'],
      ['F3', 'C4', 'F4', 'A4'],
      ['C4', 'E4', 'G4', 'C5'],
      ['G3', 'D4', 'G4', 'B4'],
      ['C4', 'E4', 'G4', 'C5']
    ];

    // Bombastic patriotic brass fanfare (Sousa / Yankee Doodle motif)
    const fanfareMelody = [
      'G4', 'G4', 'A4', 'B4', 'C5', 'C5', 'B4', 'A4',
      'G4', 'E4', 'G4', 'C5', 'D5', 'B4', 'G4', null,
      'G4', 'G4', 'A4', 'B4', 'C5', 'E5', 'D5', 'C5',
      'B4', 'G4', 'A4', 'B4', 'C5', null, 'C5', null
    ];

    let tick = 0;
    this.loopId = Tone.Transport.scheduleRepeat((time) => {
      // 1. Military marching snare rolls
      if (tick % 2 === 0) {
        this.percSynth?.triggerAttackRelease('32n', time, 0.7);
      } else if (tick % 4 === 3) {
        this.percSynth?.triggerAttackRelease('64n', time, 0.5);
      }

      // 2. Sousaphone / Tuba on 1 and 3
      if (tick % 4 === 0) {
        const bassNote = sousaBass[Math.floor(tick / 4) % sousaBass.length];
        this.bassSynth?.triggerAttackRelease(bassNote, '16n', time, 0.9);
      }

      // 3. Brass chord accents on off-beats
      if (tick % 4 === 2) {
        const chord = brassChords[Math.floor(tick / 4) % brassChords.length];
        this.chordSynth?.triggerAttackRelease(chord, '16n', time, 0.8);
      }

      // 4. Grand brass lead fanfare
      if (tick % 2 === 0) {
        const note = fanfareMelody[(tick / 2) % fanfareMelody.length];
        if (note) {
          this.leadSynth?.triggerAttackRelease(note, '8n', time, 0.85);
        }
      }

      tick++;
    }, '16n');
  }

  // Sound effects
  public playClick() {
    try {
      this.initSynths();
      this.sfxSynth?.triggerAttackRelease('G5', '32n', undefined, 0.2);
    } catch {
      // Audio context guard
    }
  }

  public playScannerTone() {
    try {
      this.initSynths();
      const now = Tone.now();
      this.sfxSynth?.triggerAttackRelease('C5', '16n', now, 0.25);
      this.sfxSynth?.triggerAttackRelease('E5', '16n', now + 0.1, 0.25);
      this.sfxSynth?.triggerAttackRelease('G5', '16n', now + 0.2, 0.25);
      this.sfxSynth?.triggerAttackRelease('C6', '8n', now + 0.3, 0.3);
    } catch {
      // Audio context guard
    }
  }

  public playSuccessFanfare() {
    try {
      this.initSynths();
      const now = Tone.now();
      this.chordSynth?.triggerAttackRelease(['C4', 'E4', 'G4', 'C5'], '8n', now, 0.5);
      this.chordSynth?.triggerAttackRelease(['F4', 'A4', 'C5', 'F5'], '8n', now + 0.15, 0.5);
      this.chordSynth?.triggerAttackRelease(['G4', 'B4', 'D5', 'G5'], '4n', now + 0.3, 0.6);
    } catch {
      // Audio context guard
    }
  }
}

export const soundtrack = new ProceduralSoundtrack();
