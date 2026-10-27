import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import { BADGES } from '../data/badges';
import { VOCABULARY_LIST } from '../data/vocabulary';
import { FlashcardReview } from '../components/FlashcardReview';
import { speakSanskrit } from '../utils/audio';
import { 
  Flame, Award, CheckCircle2, BookOpen, RotateCcw, 
  Volume2, Trash2, ArrowRight, Sparkles, BookMarked 
} from 'lucide-react';

export const Progress: React.FC = () => {
  const {
    progress,
    level,
    levelTitle,
    nextLevelXp,
    coursePercentage,
    completedLessonsCount,
    totalLessonsCount,
    avgAccuracy,
    markWordLearned,
    toggleSaveWord,
    resetProgress
  } = useProgress();

  const [activeTab, setActiveTab] = useState<'overview' | 'vocabulary' | 'flashcards'>('overview');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Filter saved words from VOCABULARY_LIST
  const savedWords = VOCABULARY_LIST.filter(w => 
    progress.savedWordIds.includes(w.id) || progress.savedWordIds.includes(w.sanskrit)
  );

  return (
    <div className="min-h-screen bg-ivory py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gold/30">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-peacock font-serif">
              Personalized Learning Matrix
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-maroon mt-1">
              My Gurukul Progress
            </h1>
            <p className="text-sm text-ink-secondary mt-1">
              Track your daily study streaks, mastery level, achievement badges, and saved Sanskrit vocabulary.
            </p>
          </div>

          {/* Reset progress button */}
          <div>
            {showResetConfirm ? (
              <div className="flex items-center space-x-2 bg-rose-50 p-2 rounded-xl border border-rose-300">
                <span className="text-xs text-rose-800 font-medium">Reset all progress?</span>
                <button
                  onClick={() => {
                    resetProgress();
                    setShowResetConfirm(false);
                  }}
                  className="px-2.5 py-1 rounded bg-rose-600 text-white text-xs font-bold hover:bg-rose-700"
                >
                  Yes, Reset
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-2 py-1 rounded text-xs text-ink-secondary hover:bg-rose-100"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="px-3 py-2 rounded-xl text-xs text-ink-secondary hover:text-rose-700 hover:bg-rose-50 transition-all border border-transparent hover:border-rose-200 flex items-center space-x-1.5"
                title="Reset all progress in browser storage"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Progress</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-gold/30">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-6 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-maroon text-maroon'
                : 'border-transparent text-ink-secondary hover:text-maroon'
            }`}
          >
            Dashboard & Badges
          </button>
          <button
            onClick={() => setActiveTab('vocabulary')}
            className={`pb-3 px-6 text-sm font-bold border-b-2 transition-all flex items-center space-x-1.5 ${
              activeTab === 'vocabulary'
                ? 'border-maroon text-maroon'
                : 'border-transparent text-ink-secondary hover:text-maroon'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span>Saved Vocabulary ({savedWords.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`pb-3 px-6 text-sm font-bold border-b-2 transition-all flex items-center space-x-1.5 ${
              activeTab === 'flashcards'
                ? 'border-maroon text-maroon'
                : 'border-transparent text-ink-secondary hover:text-maroon'
            }`}
          >
            <Sparkles className="w-4 h-4 text-gold-dark" />
            <span>Flashcard Review Mode</span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW & BADGES */}
        {activeTab === 'overview' && (
          <div className="space-y-10 animate-fadeIn">
            
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              
              <div className="bg-cardbg rounded-2xl p-5 border-2 border-gold/40 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                  <Flame className="w-7 h-7 fill-orange-500 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs text-ink-secondary font-medium">Daily Streak</span>
                  <p className="font-serif text-2xl font-bold text-maroon">{progress.streak} Days</p>
                </div>
              </div>

              <div className="bg-cardbg rounded-2xl p-5 border-2 border-gold/40 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-gold-dark shrink-0">
                  <Award className="w-7 h-7 fill-gold/30" />
                </div>
                <div>
                  <span className="text-xs text-ink-secondary font-medium">Total XP Earned</span>
                  <p className="font-serif text-2xl font-bold text-maroon">{progress.xp} XP</p>
                </div>
              </div>

              <div className="bg-cardbg rounded-2xl p-5 border-2 border-gold/40 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-peacock shrink-0">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs text-ink-secondary font-medium">Lessons Completed</span>
                  <p className="font-serif text-2xl font-bold text-maroon">{completedLessonsCount} / {totalLessonsCount}</p>
                </div>
              </div>

              <div className="bg-cardbg rounded-2xl p-5 border-2 border-gold/40 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-maroon shrink-0">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs text-ink-secondary font-medium">Quiz Accuracy</span>
                  <p className="font-serif text-2xl font-bold text-maroon">{avgAccuracy}%</p>
                </div>
              </div>

            </div>

            {/* Level & Course Progress Card */}
            <div className="bg-cardbg rounded-3xl p-6 sm:p-8 border-2 border-gold/40 shadow-traditional space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-peacock">
                    Current Mastery Level
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-maroon mt-0.5">
                    Level {level} — {levelTitle}
                  </h3>
                  <p className="text-xs text-ink-secondary mt-1">
                    Keep learning daily to ascend through the classical stages of Gurukul scholarship.
                  </p>
                </div>
                
                <Link
                  to="/learn"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-maroon text-ivory text-xs font-bold hover:bg-maroon-light transition-all shadow-md shrink-0"
                >
                  <span>Continue Next Lesson</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="pt-4 border-t border-gold/20 space-y-2">
                <div className="flex items-center justify-between text-xs text-ink-secondary font-medium">
                  <span>Overall Curriculum Progress: {coursePercentage}%</span>
                  <span>Target: {nextLevelXp} XP for Level {level + 1}</span>
                </div>
                <div className="w-full h-3 rounded-full bg-ivory-200 overflow-hidden border border-gold/30">
                  <div
                    className="h-full bg-gradient-to-r from-peacock via-gold to-maroon rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(5, coursePercentage)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Achievement Badges Grid */}
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-maroon">
                  Gurukul Achievement Badges (गौरवचिह्नानि)
                </h3>
                <p className="text-xs text-ink-secondary mt-0.5">
                  Badges automatically unlock as you reach genuine milestones in lessons, streaks, and text exploration.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {BADGES.map((badge) => {
                  const isUnlocked = progress.unlockedBadges.includes(badge.id);

                  return (
                    <div
                      key={badge.id}
                      className={`p-5 rounded-2xl border-2 transition-all flex items-start space-x-4 ${
                        isUnlocked
                          ? 'bg-cardbg border-gold shadow-md'
                          : 'bg-ivory-200/50 border-ink-secondary/15 opacity-60'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                        isUnlocked
                          ? 'bg-gold/20 text-maroon border-gold shadow-gold-glow'
                          : 'bg-ivory-300 text-ink-secondary/50 border-ink-secondary/20'
                      }`}>
                        <Award className="w-6 h-6" />
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-serif text-sm font-bold text-maroon">
                            {badge.name}
                          </h4>
                        </div>
                        <p className="text-xs text-ink-secondary leading-relaxed">
                          {badge.description}
                        </p>
                        <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded ${
                          isUnlocked
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-ivory-200 text-ink-secondary'
                        }`}>
                          {isUnlocked ? '✓ Unlocked' : 'Locked'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: SAVED VOCABULARY LIST */}
        {activeTab === 'vocabulary' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-maroon">
                  Saved Sanskrit Words
                </h3>
                <p className="text-xs text-ink-secondary mt-0.5">
                  Vocabulary gathered from daily wisdom, lessons, and the Knowledge Explorer.
                </p>
              </div>

              <button
                onClick={() => setActiveTab('flashcards')}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-gold/20 text-maroon border border-gold/40 text-xs font-bold hover:bg-gold/30 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Practice with Flashcards</span>
              </button>
            </div>

            {savedWords.length === 0 ? (
              <div className="bg-cardbg rounded-3xl p-12 text-center border-2 border-gold/30 space-y-4">
                <p className="font-serif text-lg font-bold text-maroon">No words saved yet!</p>
                <p className="text-xs text-ink-secondary max-w-sm mx-auto">
                  Browse the Daily Word on the home page or click the bookmark icon on any term in the Knowledge Explorer to add it here.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-maroon text-ivory text-xs font-semibold"
                >
                  <span>Explore Daily Words</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedWords.map((word) => (
                  <div
                    key={word.id}
                    className="bg-cardbg rounded-2xl p-5 border-2 border-gold/30 shadow-sm flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-baseline space-x-2">
                        <span className="font-sanskrit text-2xl font-bold text-maroon">
                          {word.sanskrit}
                        </span>
                        <span className="font-serif italic text-gold-dark text-sm">
                          {word.transliteration}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-ink-main">{word.meaning}</p>
                      {word.root && (
                        <p className="text-xs text-peacock">Root: {word.root}</p>
                      )}
                      <p className="text-xs text-ink-secondary italic pt-1">
                        "{word.exampleSentence}" — {word.exampleTranslation}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1 shrink-0">
                      <button
                        onClick={() => speakSanskrit(word.sanskrit, word.transliteration)}
                        className="p-2 rounded-lg bg-ivory-100 text-maroon hover:bg-gold/20 transition-all border border-gold/30"
                        title="Listen"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleSaveWord(word.id)}
                        className="p-2 rounded-lg text-ink-secondary hover:text-rose-600 transition-all"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: FLASHCARDS REVIEW */}
        {activeTab === 'flashcards' && (
          <div className="py-6 animate-fadeIn">
            <FlashcardReview
              words={savedWords.length > 0 ? savedWords : VOCABULARY_LIST.slice(0, 8)}
              learnedWordIds={progress.learnedWordIds}
              onMarkLearned={markWordLearned}
            />
          </div>
        )}

      </div>
    </div>
  );
};
