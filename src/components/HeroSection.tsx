import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Compass, CheckCircle2, Volume2, Sparkles, Bookmark, BookmarkCheck } from 'lucide-react';
import { speakSanskrit } from '../utils/audio';
import { useProgress } from '../hooks/useProgress';

export const HeroSection: React.FC = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const { progress, toggleSaveWord } = useProgress();
  const isJnanamSaved = progress.savedWordIds.includes('jnanam');

  const handlePronounce = () => {
    setIsPlayingAudio(true);
    speakSanskrit('ज्ञानम्', 'Jñānam');
    setTimeout(() => setIsPlayingAudio(false), 1200);
  };

  const floatingLetters = [
    { char: 'ॐ', x: -60, y: -80, delay: 0 },
    { char: 'ज्ञ', x: 80, y: -90, delay: 0.5 },
    { char: 'वि', x: -90, y: 50, delay: 1 },
    { char: 'ध', x: 95, y: 70, delay: 1.5 },
    { char: 'सत्', x: -40, y: 130, delay: 2 },
    { char: 'कृ', x: 70, y: -20, delay: 0.8 },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-24 bg-gradient-to-b from-ivory-100 via-ivory to-ivory-200 border-b border-gold/30">
      
      {/* Decorative Traditional Mandala Background Pattern */}
      <div className="absolute inset-0 opacity-25 pointer-events-none flex items-center justify-center">
        <svg className="w-[850px] h-[850px] text-gold/30" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="100" cy="100" r="90" strokeDasharray="3,3" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="50" strokeDasharray="2,2" />
          <circle cx="100" cy="100" r="30" />
          {/* Petal radial loops */}
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d="M100,100 Q100,20 120,40 Q100,60 100,100"
              transform={`rotate(${i * 30} 100 100)`}
              stroke="currentColor"
              strokeWidth="0.4"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Calls to Action */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Small Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-maroon text-xs font-semibold tracking-wider uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>Ancient Wisdom. Modern Learning.</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-maroon leading-[1.15] tracking-tight">
              Discover the Language of Ancient Wisdom.
            </h1>

            {/* Supporting Text */}
            <p className="text-ink-secondary text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
              Learn Sanskrit through simple English explanations, explore timeless Indian knowledge, and discover how ancient ideas connect with the modern world.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Link
                to="/learn"
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl bg-maroon text-ivory font-semibold text-base shadow-card-lift hover:bg-maroon-light active:bg-maroon-dark transition-all border border-gold/50 group"
              >
                <BookOpen className="w-5 h-5 text-gold group-hover:rotate-6 transition-transform" />
                <span>Begin Your Journey</span>
              </Link>

              <Link
                to="/explorer"
                className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-cardbg text-maroon font-semibold text-base border-2 border-gold/50 hover:bg-gold/10 hover:border-gold transition-all shadow-sm"
              >
                <Compass className="w-5 h-5 text-peacock" />
                <span>Explore Ancient Knowledge</span>
              </Link>
            </div>

            {/* Three Highlights */}
            <div className="pt-6 border-t border-gold/30 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-ink-main font-medium">
                <CheckCircle2 className="w-4 h-4 text-peacock shrink-0" />
                <span>Beginner-friendly Sanskrit lessons</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-ink-main font-medium">
                <CheckCircle2 className="w-4 h-4 text-peacock shrink-0" />
                <span>Interactive vocabulary & grammar</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-ink-main font-medium">
                <CheckCircle2 className="w-4 h-4 text-peacock shrink-0" />
                <span>Ancient knowledge, explained simply</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Composition with Floating Sanskrit & Manuscript */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Ambient Gold Glow */}
            <div className="absolute w-72 h-72 rounded-full bg-gold/20 blur-3xl -z-10 animate-pulse"></div>

            {/* Floating Sanskrit Glyphs */}
            {floatingLetters.map((glyph, idx) => (
              <motion.div
                key={idx}
                className="absolute font-sanskrit text-2xl md:text-3xl font-bold text-maroon/40 pointer-events-none select-none"
                style={{ x: glyph.x, y: glyph.y }}
                animate={{
                  y: [glyph.y - 8, glyph.y + 8, glyph.y - 8],
                  rotate: [-3, 3, -3],
                }}
                transition={{
                  duration: 4 + idx,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: glyph.delay,
                }}
              >
                {glyph.char}
              </motion.div>
            ))}

            {/* Central Ancient Manuscript Card Composition */}
            <motion.div
              className="relative w-full max-w-md"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Palm Leaf Manuscript Visual Wrapper */}
              <div className="relative rounded-2xl bg-gradient-to-br from-[#FFFDF6] via-[#FAF3E0] to-[#F2E5C8] p-6 shadow-2xl border-2 border-gold/60 overflow-hidden">
                
                {/* Traditional Decorative Corner Motifs */}
                <div className="absolute top-2 left-2 text-gold font-serif text-xs opacity-60">❖</div>
                <div className="absolute top-2 right-2 text-gold font-serif text-xs opacity-60">❖</div>
                <div className="absolute bottom-2 left-2 text-gold font-serif text-xs opacity-60">❖</div>
                <div className="absolute bottom-2 right-2 text-gold font-serif text-xs opacity-60">❖</div>

                {/* Palm Leaf Manuscript Header Graphic */}
                <div className="flex items-center justify-between pb-3 border-b border-gold/40 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-maroon font-serif text-lg">ॐ</span>
                    <span className="text-xs font-semibold tracking-wider uppercase text-gold-dark">
                      Palm-Leaf Codex Folio
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-gold/20 text-maroon font-serif font-bold">
                    पत्रम् १
                  </span>
                </div>

                {/* Classical Verse Inscription */}
                <div className="text-center py-2 bg-ivory-50/80 rounded-xl p-3 border border-gold/20 mb-5 shadow-inner">
                  <p className="font-sanskrit text-lg font-bold text-maroon leading-relaxed tracking-wide">
                    सत्यमेव जयते नानृतम्॥
                  </p>
                  <p className="text-xs text-ink-secondary italic mt-1 font-serif">
                    "Truth alone triumphs, not falsehood." — Mundaka Upanishad
                  </p>
                </div>

                {/* Interactive Sanskrit Word Card */}
                <div className="bg-cardbg rounded-xl p-4 border border-gold/50 shadow-md relative group hover:border-gold transition-all">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <span className="font-sanskrit text-3xl font-extrabold text-maroon">ज्ञानम्</span>
                        <span className="text-base font-serif italic text-gold-dark font-medium">Jñānam</span>
                      </div>
                      <p className="text-sm font-semibold text-ink-main mt-1">Meaning: Knowledge & Direct Realization</p>
                      <p className="text-xs text-ink-secondary mt-0.5">Root: ज्ञा (jñā — to comprehend)</p>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      {/* Audio Pronunciation Button */}
                      <button
                        onClick={handlePronounce}
                        className={`p-2 rounded-lg border transition-all ${
                          isPlayingAudio 
                            ? 'bg-gold text-deepbrown border-gold scale-105' 
                            : 'bg-ivory text-maroon border-gold/40 hover:bg-gold/20'
                        }`}
                        title="Hear Classical Pronunciation"
                        aria-label="Hear pronunciation"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      {/* Save Word Toggle Button */}
                      <button
                        onClick={() => toggleSaveWord('jnanam')}
                        className={`p-2 rounded-lg border transition-all ${
                          isJnanamSaved
                            ? 'bg-maroon text-gold border-maroon'
                            : 'bg-ivory text-ink-secondary border-gold/40 hover:text-maroon hover:bg-gold/15'
                        }`}
                        title={isJnanamSaved ? 'Word saved to your vocabulary' : 'Save word to vocabulary'}
                        aria-label="Save word"
                      >
                        {isJnanamSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Example Sentence Pill */}
                  <div className="mt-3 pt-3 border-t border-gold/20 flex items-center justify-between text-xs">
                    <span className="font-sanskrit font-bold text-maroon">ज्ञानम् शक्तिः अस्ति।</span>
                    <span className="text-ink-secondary italic">"Knowledge is power."</span>
                  </div>
                </div>

                {/* Subtext Footer */}
                <div className="mt-4 flex items-center justify-center space-x-1.5 text-[11px] text-ink-secondary">
                  <span className="text-gold font-bold">✓</span>
                  <span>Authentic Devanagari phonology & Paninian derivations</span>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
