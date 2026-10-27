import React, { useState } from 'react';
import { Volume2, CheckCircle2, RotateCw, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { SanskritWord } from '../types';
import { speakSanskrit } from '../utils/audio';

interface FlashcardReviewProps {
  words: SanskritWord[];
  learnedWordIds: string[];
  onMarkLearned: (id: string) => void;
}

export const FlashcardReview: React.FC<FlashcardReviewProps> = ({ 
  words, 
  learnedWordIds, 
  onMarkLearned 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (words.length === 0) {
    return (
      <div className="p-8 text-center bg-cardbg rounded-2xl border border-gold/30">
        <p className="font-serif text-maroon text-lg">No words saved yet!</p>
        <p className="text-xs text-ink-secondary mt-1">
          Explore lessons or the daily word to save terms for flashcard practice.
        </p>
      </div>
    );
  }

  const currentWord = words[currentIndex % words.length];
  const isLearned = learnedWordIds.includes(currentWord.id);

  const handlePronounce = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlayingAudio(true);
    speakSanskrit(currentWord.sanskrit, currentWord.transliteration);
    setTimeout(() => setIsPlayingAudio(false), 1200);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % words.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + words.length) % words.length);
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      {/* Card Header & Counter */}
      <div className="flex items-center justify-between text-xs text-ink-secondary px-2">
        <span className="font-serif font-bold text-maroon">
          Card {(currentIndex % words.length) + 1} of {words.length}
        </span>
        <span className="flex items-center space-x-1">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Click card to reveal meaning</span>
        </span>
      </div>

      {/* 3D Flip Flashcard */}
      <div 
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-full min-h-[300px] cursor-pointer perspective-1000 select-none group"
      >
        <div 
          className={`relative w-full h-full rounded-3xl p-8 border-2 border-gold/50 shadow-traditional transition-all duration-500 transform-style-3d bg-cardbg flex flex-col justify-between ${
            isFlipped ? 'bg-gradient-to-br from-ivory-100 to-ivory-200 border-gold' : 'hover:border-maroon/50'
          }`}
        >
          {/* Card Top Pill */}
          <div className="flex items-center justify-between pb-3 border-b border-gold/20">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-gold/15 text-maroon border border-gold/30">
              {currentWord.category}
            </span>
            <button
              onClick={handlePronounce}
              className={`p-2 rounded-xl border transition-all ${
                isPlayingAudio 
                  ? 'bg-gold text-deepbrown border-gold' 
                  : 'bg-ivory text-maroon border-gold/30 hover:bg-gold/20'
              }`}
              title="Hear Pronunciation"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          {/* Card Center Content */}
          <div className="text-center py-6">
            {!isFlipped ? (
              // FRONT: Devanagari & Transliteration
              <div className="space-y-3">
                <span className="font-sanskrit text-5xl sm:text-6xl font-bold text-maroon block leading-tight">
                  {currentWord.sanskrit}
                </span>
                <span className="font-serif text-2xl text-gold-dark italic font-medium block">
                  {currentWord.transliteration}
                </span>
                <p className="text-xs text-ink-secondary/70 pt-4">
                  (Tap to reveal English meaning & root)
                </p>
              </div>
            ) : (
              // BACK: Meaning, Root, Example
              <div className="space-y-3 animate-fadeIn">
                <span className="text-xs font-semibold uppercase text-gold-dark block">
                  English Meaning
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-ink-main">
                  {currentWord.meaning}
                </h4>
                {currentWord.root && (
                  <p className="text-xs text-peacock font-medium">
                    Root: {currentWord.root}
                  </p>
                )}
                <div className="pt-2 text-xs text-ink-secondary">
                  <p className="font-sanskrit font-bold text-sm text-maroon">
                    {currentWord.exampleSentence}
                  </p>
                  <p className="italic mt-0.5">"{currentWord.exampleTranslation}"</p>
                </div>
              </div>
            )}
          </div>

          {/* Card Bottom: Flip hint */}
          <div className="pt-3 border-t border-gold/20 flex items-center justify-center space-x-1.5 text-xs text-gold-dark font-medium">
            <RotateCw className="w-3.5 h-3.5" />
            <span>{isFlipped ? 'Flip back' : 'Flip to see answer'}</span>
          </div>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={handlePrev}
          className="p-3 rounded-xl bg-cardbg border border-gold/40 text-maroon hover:bg-gold/15 transition-all"
          title="Previous Word"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => onMarkLearned(currentWord.id)}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-all flex items-center space-x-1.5 shadow-sm ${
            isLearned
              ? 'bg-emerald-100 text-emerald-800 border-emerald-400'
              : 'bg-maroon text-ivory border-gold/40 hover:bg-maroon-light'
          }`}
        >
          <CheckCircle2 className="w-4 h-4 text-gold" />
          <span>{isLearned ? 'Mastered (+5 XP)' : 'Mark as Learned (+5 XP)'}</span>
        </button>

        <button
          onClick={handleNext}
          className="p-3 rounded-xl bg-cardbg border border-gold/40 text-maroon hover:bg-gold/15 transition-all"
          title="Next Word"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
