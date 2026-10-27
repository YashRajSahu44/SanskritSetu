/**
 * Sanskrit Audio Pronunciation & Web Audio Effects Utility
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Speak Sanskrit or transliterated text using the Web Speech API.
 * Prefers Hindi/Sanskrit Indian voices for natural phonetic authenticity.
 */
export function speakSanskrit(text: string, transliteration?: string): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    playChime(440, 'triangle');
    return false;
  }

  try {
    window.speechSynthesis.cancel(); // Stop any pending speech

    const cleanText = text.replace(/[।॥]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText || transliteration || text);
    
    // Attempt to locate an authentic Indian accent or Hindi/Sanskrit voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => 
      v.lang.startsWith('sa') || 
      v.lang.startsWith('hi-IN') || 
      v.lang.includes('Hindi') ||
      v.lang.includes('India')
    );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
      utterance.lang = preferredVoice.lang;
    } else {
      utterance.lang = 'hi-IN';
    }

    utterance.rate = 0.85; // Slightly slower pace for clear Vedic/Sanskrit cadence
    utterance.pitch = 1.0;
    
    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.warn('Speech synthesis error, playing acoustic tone instead:', err);
    playChime(520, 'sine');
    return false;
  }
}

/**
 * Play a pleasant acoustic chime for feedback (e.g. correct answers, lesson finish)
 */
export function playChime(freq: number = 523.25, type: OscillatorType = 'sine', duration: number = 0.35) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Smooth envelope attack and decay
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Silent fail if audio blocked by autoplay policies
  }
}

/**
 * Play harmonic chord for celebratory lesson completion
 */
export function playCelebrationChord() {
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio
  notes.forEach((freq, idx) => {
    setTimeout(() => {
      playChime(freq, 'triangle', 0.6);
    }, idx * 120);
  });
}

/**
 * Play gentle error chime for incorrect attempt
 */
export function playErrorChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(260, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.25);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch (e) {
    // Ignore audio policy issues
  }
}
