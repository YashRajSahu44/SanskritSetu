import React, { useState } from 'react';
import { Volume2, Bookmark, BookmarkCheck, ChevronLeft, ChevronRight, Sparkles, BookOpen } from 'lucide-react';
import { DAILY_WORDS, getDailyWord } from '../data/vocabulary';
import { speakSanskrit } from '../utils/audio';
import { useProgress } from '../hooks/useProgress';

export const DailyWordSection: React.FC = () => {
  const [wordOffset, setWordOffset] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const { progress, toggleSaveWord } = useProgress();

  const currentWord = getDailyWord(wordOffset);
  const isSaved = progress.savedWordIds.includes(currentWord.id);

  const handlePronounce = () => {
    setIsPlayingAudio(true);
    speakSanskrit(currentWord.sanskrit, currentWord.transliteration);
    setTimeout(() => setIsPlayingAudio(false), 1200);
  };

  const handleNextWord = () => setWordOffset(prev => prev + 1);
  const handlePrevWord = () => setWordOffset(prev => prev - 1);

  return (
    <section className="py-16 bg-ivory border-b border-gold/30 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/15 text-maroon text-xs font-semibold uppercase tracking-wider mb-2 border border-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Nitya Śabdaḥ</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon">
            A Word of Wisdom
          </h2>
          <p className="text-sm text-ink-secondary mt-2">
            Expand your Sanskrit lexicon one sacred word at a time with authentic grammar, root derivations, and classical usage.
          </p>
        </div>

        {/* Daily Word Showcase Card */}
        <div className="bg-cardbg rounded-3xl p-6 sm:p-10 shadow-traditional border-2 border-gold/40 relative overflow-hidden">
          
          {/* Ornamental corner accents */}
          <div className="absolute top-3 left-3 text-gold/40 font-serif text-sm">❖</div>
          <div className="absolute top-3 right-3 text-gold/40 font-serif text-sm">❖</div>
          <div className="absolute bottom-3 left-3 text-gold/40 font-serif text-sm">❖</div>
          <div className="absolute bottom-3 right-3 text-gold/40 font-serif text-sm">❖</div>

          {/* Navigation & Category Tag Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-gold/20 mb-8">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-maroon/10 text-maroon border border-maroon/20">
                {currentWord.category}
              </span>
              {currentWord.gender && (
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gold/15 text-gold-dark">
                  {currentWord.gender}
                </span>
              )}
            </div>

            {/* Next / Previous Word browser */}
            <div className="flex items-center space-x-1.5">
              <button
                onClick={handlePrevWord}
                className="p-1.5 rounded-lg border border-gold/40 hover:bg-gold/15 text-maroon transition-all"
                title="Previous Word"
                aria-label="Previous word"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-serif text-ink-secondary px-1">
                {(Math.abs(wordOffset) % DAILY_WORDS.length) + 1} of {DAILY_WORDS.length}
              </span>
              <button
                onClick={handleNextWord}
                className="p-1.5 rounded-lg border border-gold/40 hover:bg-gold/15 text-maroon transition-all"
                title="Next Word"
                aria-label="Next word"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Word Presentation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Word Display & Pronunciation */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-3">
              <div className="inline-block">
                <span className="font-sanskrit text-5xl sm:text-6xl font-bold text-maroon tracking-normal leading-tight">
                  {currentWord.sanskrit}
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <span className="font-serif text-2xl text-gold-dark font-medium italic">
                  {currentWord.transliteration}
                </span>
                <button
                  onClick={handlePronounce}
                  className={`p-2.5 rounded-xl border shadow-sm transition-all flex items-center space-x-1.5 ${
                    isPlayingAudio
                      ? 'bg-gold text-deepbrown border-gold scale-105'
                      : 'bg-ivory text-maroon border-gold/40 hover:bg-gold/20'
                  }`}
                  title="Listen to Authentic Pronunciation"
                >
                  <Volume2 className="w-4 h-4" />
                  <span className="text-xs font-semibold">Listen</span>
                </button>
              </div>

              <div className="pt-2">
                <h3 className="text-lg sm:text-xl font-bold text-ink-main">
                  {currentWord.meaning}
                </h3>
                {currentWord.root && (
                  <p className="text-xs text-ink-secondary mt-1">
                    <span className="font-semibold text-gold-dark">Root (Dhātu):</span> {currentWord.root}
                  </p>
                )}
              </div>

              {/* Action: Save Word */}
              <div className="pt-3">
                <button
                  onClick={() => toggleSaveWord(currentWord.id)}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    isSaved
                      ? 'bg-maroon text-gold border-maroon shadow-sm'
                      : 'bg-ivory-50 text-maroon border-gold/50 hover:bg-gold/15'
                  }`}
                >
                  {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                  <span>{isSaved ? 'Saved in Gurukul Vocabulary' : 'Save to My Vocabulary'}</span>
                </button>
              </div>
            </div>

            {/* Example Sentence & Philological Explanation */}
            <div className="lg:col-span-7 bg-ivory-100/90 rounded-2xl p-6 border border-gold/30 space-y-4">
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-peacock flex items-center space-x-1.5 mb-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Classical Usage / Example Sentence</span>
                </span>
                <p className="font-sanskrit text-xl sm:text-2xl font-bold text-maroon leading-relaxed">
                  {currentWord.exampleSentence}
                </p>
                <p className="text-xs text-ink-secondary font-serif italic mt-1">
                  {currentWord.exampleTransliteration}
                </p>
                <p className="text-sm font-medium text-ink-main mt-1">
                  "{currentWord.exampleTranslation}"
                </p>
              </div>

              <div className="pt-3 border-t border-gold/20">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark mb-1 block">
                  Linguistic & Philosophical Significance
                </span>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {currentWord.explanation}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
