import React, { useState } from 'react';
import { Volume2, Bookmark, BookmarkCheck, BookOpen, Layers, Sparkles } from 'lucide-react';
import { WordTokenAnalysis } from '../types';
import { speakSanskrit } from '../utils/audio';
import { useProgress } from '../hooks/useProgress';

interface WordAnalysisPanelProps {
  selectedWord: WordTokenAnalysis | null;
  passageSource: string;
}

export const WordAnalysisPanel: React.FC<WordAnalysisPanelProps> = ({ 
  selectedWord, 
  passageSource 
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const { progress, toggleSaveWord } = useProgress();

  if (!selectedWord) {
    return (
      <div className="bg-cardbg rounded-3xl p-8 border-2 border-gold/40 shadow-sm text-center flex flex-col items-center justify-center min-h-[380px]">
        <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center text-maroon mb-4 border border-gold/40">
          <BookOpen className="w-8 h-8 text-gold-dark" />
        </div>
        <h3 className="font-serif text-lg font-bold text-maroon">
          Interactive Word Analysis
        </h3>
        <p className="text-xs sm:text-sm text-ink-secondary mt-2 max-w-xs leading-relaxed">
          Click any word in the Sanskrit passage on the left to inspect its root derivation, grammatical case (Vibhakti), and contextual meaning.
        </p>
        <div className="mt-4 px-3 py-1 rounded-full bg-ivory-100 border border-gold/20 text-[11px] text-peacock font-medium">
          💡 Try tapping "कर्मण्येवाधिकारस्ते" or "ईशा"
        </div>
      </div>
    );
  }

  const isSaved = progress.savedWordIds.includes(selectedWord.sanskrit);

  const handlePronounce = () => {
    setIsPlayingAudio(true);
    speakSanskrit(selectedWord.sanskrit, selectedWord.transliteration);
    setTimeout(() => setIsPlayingAudio(false), 1200);
  };

  return (
    <div className="bg-cardbg rounded-3xl p-6 sm:p-8 border-2 border-gold/50 shadow-traditional space-y-6 animate-fadeIn sticky top-24">
      
      {/* Header: Sanskrit Word & Transliteration */}
      <div className="flex items-start justify-between pb-4 border-b border-gold/20">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-peacock block mb-1">
            Padaccheda • Word Analysis
          </span>
          <div className="flex items-baseline space-x-3">
            <h3 className="font-sanskrit text-4xl font-bold text-maroon">
              {selectedWord.sanskrit}
            </h3>
            <span className="font-serif text-xl italic text-gold-dark font-medium">
              {selectedWord.transliteration}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePronounce}
            className={`p-2.5 rounded-xl border transition-all ${
              isPlayingAudio
                ? 'bg-gold text-deepbrown border-gold scale-105'
                : 'bg-ivory text-maroon border-gold/40 hover:bg-gold/20'
            }`}
            title="Hear Pronunciation"
          >
            <Volume2 className="w-4 h-4" />
          </button>

          <button
            onClick={() => toggleSaveWord(selectedWord.sanskrit)}
            className={`p-2.5 rounded-xl border transition-all ${
              isSaved
                ? 'bg-maroon text-gold border-maroon'
                : 'bg-ivory text-ink-secondary border-gold/40 hover:text-maroon hover:bg-gold/15'
            }`}
            title={isSaved ? 'Saved in Vocabulary' : 'Save to Vocabulary'}
          >
            {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* English Meaning & Context */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-secondary block mb-1">
          Literal & Contextual Meaning
        </span>
        <p className="text-lg font-bold text-ink-main leading-snug">
          {selectedWord.meaning}
        </p>
        <p className="text-xs text-ink-secondary mt-1.5 leading-relaxed bg-ivory-50 p-3 rounded-xl border border-gold/20">
          <span className="font-semibold text-maroon">Contextual note:</span> {selectedWord.contextualNote}
        </p>
      </div>

      {/* Grammatical Breakdown */}
      <div className="space-y-3 pt-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark flex items-center space-x-1.5">
          <Layers className="w-3.5 h-3.5" />
          <span>Grammatical Analysis (Vyākaraṇa)</span>
        </span>
        
        <div className="p-3.5 rounded-xl bg-ivory-100 border border-gold/30 text-xs space-y-2">
          <div className="flex items-start justify-between">
            <span className="text-ink-secondary">Category & Case:</span>
            <span className="font-semibold text-maroon text-right">{selectedWord.grammar}</span>
          </div>

          {selectedWord.root && (
            <div className="flex items-start justify-between pt-1 border-t border-gold/20">
              <span className="text-ink-secondary">Root (Dhātu):</span>
              <span className="font-semibold text-peacock text-right">{selectedWord.root}</span>
            </div>
          )}

          <div className="flex items-start justify-between pt-1 border-t border-gold/20">
            <span className="text-ink-secondary">Attested Source:</span>
            <span className="font-medium text-ink-main text-right">{passageSource}</span>
          </div>
        </div>
      </div>

      {/* Scholar Note */}
      <div className="flex items-center space-x-2 text-[11px] text-ink-secondary/80 bg-gold/5 p-2 rounded-lg border border-gold/20">
        <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
        <span>Grounded in classical Paninian Dhatupatha & Monier-Williams lexicon</span>
      </div>

    </div>
  );
};
