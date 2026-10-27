import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { triggerConfetti } from '../utils/confetti';
import { 
  X, CheckCircle, AlertCircle, Volume2, ArrowRight, Award, 
  RotateCcw, Sparkles, Handshake, Heart, Apple 
} from 'lucide-react';
import { Lesson, Exercise } from '../types';
import { speakSanskrit, playChime, playErrorChime, playCelebrationChord } from '../utils/audio';
import { useProgress } from '../hooks/useProgress';

interface LessonPlayerProps {
  lesson: Lesson;
}

export const LessonPlayer: React.FC<LessonPlayerProps> = ({ lesson }) => {
  const navigate = useNavigate();
  const { completeLesson } = useProgress();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  // State for arrange-words exercise
  const [assembledTokens, setAssembledTokens] = useState<string[]>([]);
  const [availableTokens, setAvailableTokens] = useState<string[]>([]);

  // State for match-pairs exercise
  const [selectedPairSanskrit, setSelectedPairSanskrit] = useState<string | null>(null);
  const [selectedPairEnglish, setSelectedPairEnglish] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]); // list of matched sanskrit tokens

  const [hasChecked, setHasChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentExercise: Exercise = lesson.exercises[currentIndex];
  const totalQuestions = lesson.exercises.length;
  const progressPercent = Math.round(((currentIndex) / totalQuestions) * 100);

  // Initialize per-exercise states
  useEffect(() => {
    setSelectedOption(null);
    setHasChecked(false);
    setIsCorrect(false);
    setSelectedPairSanskrit(null);
    setSelectedPairEnglish(null);

    if (currentExercise.type === 'arrange-words' && currentExercise.tokens) {
      // Shuffle tokens initially
      const shuffled = [...currentExercise.tokens].sort(() => Math.random() - 0.5);
      setAvailableTokens(shuffled);
      setAssembledTokens([]);
    } else {
      setAvailableTokens([]);
      setAssembledTokens([]);
    }

    if (currentExercise.type === 'match-pairs') {
      setMatchedPairs([]);
    }
  }, [currentIndex, currentExercise]);

  // Audio helper
  const handleSpeak = (text: string) => {
    speakSanskrit(text);
  };

  // Check Answer Handler
  const handleCheck = () => {
    if (hasChecked) return;

    let correct = false;

    if (currentExercise.type === 'arrange-words') {
      const correctArr = currentExercise.correctAnswer as string[];
      if (
        assembledTokens.length === correctArr.length &&
        assembledTokens.every((token, idx) => token === correctArr[idx])
      ) {
        correct = true;
      }
    } else if (currentExercise.type === 'match-pairs') {
      const totalPairsCount = currentExercise.pairs ? currentExercise.pairs.length : 0;
      if (matchedPairs.length === totalPairsCount) {
        correct = true;
      }
    } else {
      // Multiple choice / translation / single option selection
      if (selectedOption === currentExercise.correctAnswer) {
        correct = true;
      }
    }

    setIsCorrect(correct);
    setHasChecked(true);

    if (correct) {
      setCorrectAnswersCount(prev => prev + 1);
      playChime(659.25, 'triangle', 0.4);
    } else {
      playErrorChime();
    }
  };

  // Next Question / Finish Handler
  const handleNext = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Finish Lesson
      finishLesson();
    }
  };

  const finishLesson = () => {
    setIsFinished(true);
    playCelebrationChord();
    
    // Trigger festive confetti
    triggerConfetti();

    const finalCorrect = isCorrect ? correctAnswersCount : correctAnswersCount;
    const accuracy = Math.round((finalCorrect / totalQuestions) * 100);
    completeLesson(lesson.id, lesson.xpReward, accuracy, finalCorrect);
  };

  // Pair Matching Logic
  const handlePairSanskritClick = (sanskrit: string) => {
    if (matchedPairs.includes(sanskrit)) return;
    setSelectedPairSanskrit(sanskrit);

    if (selectedPairEnglish && currentExercise.pairs) {
      // Check if this matches
      const targetPair = currentExercise.pairs.find(p => p.sanskrit === sanskrit);
      if (targetPair && targetPair.english === selectedPairEnglish) {
        // Correct pair!
        const newMatched = [...matchedPairs, sanskrit];
        setMatchedPairs(newMatched);
        playChime(784, 'sine', 0.2);
        setSelectedPairSanskrit(null);
        setSelectedPairEnglish(null);

        // If all pairs matched, mark ready
        if (newMatched.length === currentExercise.pairs.length) {
          setIsCorrect(true);
          setHasChecked(true);
          setCorrectAnswersCount(prev => prev + 1);
        }
      } else {
        // Mismatch
        playErrorChime();
        setSelectedPairSanskrit(null);
        setSelectedPairEnglish(null);
      }
    }
  };

  const handlePairEnglishClick = (english: string) => {
    // Check if this english belongs to already matched pair
    const alreadyMatched = currentExercise.pairs?.some(
      p => p.english === english && matchedPairs.includes(p.sanskrit)
    );
    if (alreadyMatched) return;

    setSelectedPairEnglish(english);

    if (selectedPairSanskrit && currentExercise.pairs) {
      const targetPair = currentExercise.pairs.find(p => p.sanskrit === selectedPairSanskrit);
      if (targetPair && targetPair.english === english) {
        // Correct pair!
        const newMatched = [...matchedPairs, selectedPairSanskrit];
        setMatchedPairs(newMatched);
        playChime(784, 'sine', 0.2);
        setSelectedPairSanskrit(null);
        setSelectedPairEnglish(null);

        if (newMatched.length === currentExercise.pairs.length) {
          setIsCorrect(true);
          setHasChecked(true);
          setCorrectAnswersCount(prev => prev + 1);
        }
      } else {
        playErrorChime();
        setSelectedPairSanskrit(null);
        setSelectedPairEnglish(null);
      }
    }
  };

  // Word token arrange logic
  const handleAddToken = (token: string, index: number) => {
    if (hasChecked) return;
    setAssembledTokens(prev => [...prev, token]);
    setAvailableTokens(prev => prev.filter((_, i) => i !== index));
    playChime(440, 'sine', 0.1);
  };

  const handleRemoveToken = (token: string, index: number) => {
    if (hasChecked) return;
    setAssembledTokens(prev => prev.filter((_, i) => i !== index));
    setAvailableTokens(prev => [...prev, token]);
    playChime(392, 'sine', 0.1);
  };

  // Render Completion Screen
  if (isFinished) {
    const accuracy = Math.round((correctAnswersCount / totalQuestions) * 100);

    return (
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-cardbg rounded-3xl p-8 border-2 border-gold/50 shadow-2xl text-center space-y-6 animate-scaleUp">
          
          <div className="w-20 h-20 rounded-full bg-gold/20 border-2 border-gold mx-auto flex items-center justify-center text-gold shadow-gold-glow">
            <Sparkles className="w-10 h-10 text-gold-dark animate-pulse" />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark font-serif">
              अभिनन्दनम् • Abhinandanam
            </span>
            <h2 className="font-serif text-3xl font-bold text-maroon mt-1">
              Lesson Completed!
            </h2>
            <p className="text-sm text-ink-secondary mt-1">
              You have taken another noble step into the world of Sanskrit wisdom.
            </p>
          </div>

          {/* Performance Stats Cards */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-ivory-100 border border-gold/30">
              <span className="text-xs text-ink-secondary block">XP Earned</span>
              <span className="text-2xl font-bold font-serif text-maroon flex items-center justify-center space-x-1 mt-1">
                <Award className="w-5 h-5 text-gold" />
                <span>+{lesson.xpReward}</span>
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-ivory-100 border border-gold/30">
              <span className="text-xs text-ink-secondary block">Accuracy</span>
              <span className="text-2xl font-bold font-serif text-peacock mt-1 block">
                {accuracy}%
              </span>
            </div>
          </div>

          <div className="text-xs text-ink-secondary py-1 bg-gold/10 rounded-xl border border-gold/20">
            ✓ Correct: {correctAnswersCount} / {totalQuestions} questions answered
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <button
              onClick={() => navigate('/learn')}
              className="w-full py-3.5 rounded-xl bg-maroon text-ivory font-semibold text-sm hover:bg-maroon-light transition-all shadow-md border border-gold/40 flex items-center justify-center space-x-2"
            >
              <span>Continue Learning Path</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setCurrentIndex(0);
                setCorrectAnswersCount(0);
                setIsFinished(false);
              }}
              className="w-full py-2.5 rounded-xl bg-ivory-100 text-maroon text-xs font-medium hover:bg-ivory-200 transition-all border border-gold/30 flex items-center justify-center space-x-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Review This Lesson Again</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Can the user check their answer?
  const canCheck = 
    currentExercise.type === 'arrange-words' 
      ? assembledTokens.length > 0 
      : currentExercise.type === 'match-pairs'
      ? matchedPairs.length === (currentExercise.pairs?.length || 0)
      : selectedOption !== null;

  return (
    <div className="max-w-2xl mx-auto min-h-[85vh] flex flex-col justify-between py-6 px-4">
      
      {/* Top Header: Close & Progress Bar */}
      <div>
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={() => navigate('/learn')}
            className="p-2 rounded-xl text-ink-secondary hover:text-maroon hover:bg-ivory-200 transition-all"
            title="Exit Lesson"
            aria-label="Exit lesson"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Stepped Progress Bar */}
          <div className="flex-1 h-3 rounded-full bg-ivory-300 overflow-hidden border border-gold/30">
            <div
              className="h-full bg-gradient-to-r from-gold to-maroon transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          {/* Lesson Counter & Question Number */}
          <div className="text-xs font-bold text-maroon font-serif shrink-0">
            {currentIndex + 1} / {totalQuestions}
          </div>
        </div>

        {/* Exercise Prompt & Question Body */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark font-serif block mb-1">
              {lesson.title}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-ink-main leading-snug">
              {currentExercise.prompt}
            </h2>
            {currentExercise.subtext && (
              <p className="text-sm text-ink-secondary mt-1">{currentExercise.subtext}</p>
            )}
          </div>

          {/* Sanskrit Context Card (if present) */}
          {currentExercise.sanskritContext && (
            <div className="p-4 rounded-2xl bg-ivory-100 border border-gold/40 flex items-center justify-between">
              <div>
                <p className="font-sanskrit text-2xl font-bold text-maroon">
                  {currentExercise.sanskritContext}
                </p>
                {currentExercise.transliterationContext && (
                  <p className="text-xs font-serif italic text-ink-secondary mt-0.5">
                    {currentExercise.transliterationContext}
                  </p>
                )}
              </div>
              <button
                onClick={() => handleSpeak(currentExercise.sanskritContext!)}
                className="p-2.5 rounded-xl bg-cardbg text-maroon border border-gold/40 hover:bg-gold/15 transition-all shadow-sm"
                title="Listen to phrase"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Exercise Type 1: Match Pairs */}
          {currentExercise.type === 'match-pairs' && currentExercise.pairs && (
            <div className="space-y-4">
              <p className="text-xs text-ink-secondary italic">
                Tap a Sanskrit term on the left, then tap its matching English translation on the right:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {/* Sanskrit column */}
                <div className="space-y-2">
                  {currentExercise.pairs.map((p) => {
                    const isMatched = matchedPairs.includes(p.sanskrit);
                    const isSelected = selectedPairSanskrit === p.sanskrit;
                    return (
                      <button
                        key={p.sanskrit}
                        disabled={isMatched}
                        onClick={() => handlePairSanskritClick(p.sanskrit)}
                        className={`w-full p-3 rounded-xl border text-left font-sanskrit text-base font-bold transition-all shadow-sm ${
                          isMatched
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300 opacity-60 cursor-default'
                            : isSelected
                            ? 'bg-gold/20 text-maroon border-gold ring-2 ring-gold/40 scale-102'
                            : 'bg-cardbg text-maroon border-gold/40 hover:bg-gold/10'
                        }`}
                      >
                        {p.sanskrit}
                      </button>
                    );
                  })}
                </div>

                {/* English column */}
                <div className="space-y-2">
                  {currentExercise.pairs.map((p) => {
                    const isMatched = matchedPairs.includes(p.sanskrit);
                    const isSelected = selectedPairEnglish === p.english;
                    return (
                      <button
                        key={p.english}
                        disabled={isMatched}
                        onClick={() => handlePairEnglishClick(p.english)}
                        className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all shadow-sm ${
                          isMatched
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300 opacity-60 cursor-default'
                            : isSelected
                            ? 'bg-gold/20 text-maroon border-gold ring-2 ring-gold/40 scale-102'
                            : 'bg-cardbg text-ink-main border-gold/40 hover:bg-gold/10'
                        }`}
                      >
                        {p.english}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Exercise Type 2: Arrange Words (Sentence Constructor) */}
          {currentExercise.type === 'arrange-words' && (
            <div className="space-y-6">
              {/* Assembled Slot Area */}
              <div className="min-h-[70px] p-3 rounded-2xl border-2 border-dashed border-gold/50 bg-ivory-50 flex flex-wrap items-center gap-2">
                {assembledTokens.length === 0 ? (
                  <span className="text-xs text-ink-secondary/60 italic mx-auto">
                    Tap tokens below in order to assemble the sentence
                  </span>
                ) : (
                  assembledTokens.map((token, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleRemoveToken(token, idx)}
                      className="px-3.5 py-2 rounded-xl bg-maroon text-ivory font-sanskrit text-base font-bold shadow-sm hover:bg-maroon-light transition-all flex items-center space-x-1"
                    >
                      <span>{token}</span>
                      <span className="text-xs opacity-60 ml-1">×</span>
                    </button>
                  ))
                )}
              </div>

              {/* Available Tokens Area */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                {availableTokens.map((token, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAddToken(token, idx)}
                    className="px-4 py-2.5 rounded-xl bg-cardbg text-maroon font-sanskrit text-lg font-bold border-2 border-gold/50 shadow-sm hover:bg-gold/15 hover:border-gold transition-all active:scale-95"
                  >
                    {token}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Exercise Type 3: Image Choice */}
          {currentExercise.type === 'image-choice' && (
            <div className="flex flex-col items-center py-2">
              <div className="w-24 h-24 rounded-2xl bg-gold/15 border-2 border-gold flex items-center justify-center text-maroon shadow-md mb-6">
                {currentExercise.imageHint === 'Apple' ? (
                  <Apple className="w-12 h-12 text-maroon" />
                ) : currentExercise.imageHint === 'Handshake' ? (
                  <Handshake className="w-12 h-12 text-maroon" />
                ) : (
                  <Heart className="w-12 h-12 text-maroon" />
                )}
              </div>
            </div>
          )}

          {/* Exercise Type 4: Standard Options (Multiple Choice, Select Sanskrit, Complete Sentence) */}
          {currentExercise.options && currentExercise.type !== 'arrange-words' && currentExercise.type !== 'match-pairs' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentExercise.options.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                const isCorrectOption = opt === currentExercise.correctAnswer;
                
                let cardStyle = 'bg-cardbg text-ink-main border-gold/40 hover:bg-gold/10 hover:border-gold';
                if (hasChecked) {
                  if (isCorrectOption) {
                    cardStyle = 'bg-emerald-50 text-emerald-900 border-emerald-500 font-bold';
                  } else if (isSelected && !isCorrect) {
                    cardStyle = 'bg-rose-50 text-rose-900 border-rose-400 line-through';
                  }
                } else if (isSelected) {
                  cardStyle = 'bg-gold/20 text-maroon border-maroon font-semibold ring-2 ring-maroon/20';
                }

                return (
                  <button
                    key={idx}
                    disabled={hasChecked}
                    onClick={() => setSelectedOption(opt)}
                    className={`p-4 rounded-2xl border text-left transition-all shadow-sm flex items-center justify-between ${cardStyle}`}
                  >
                    <span className="text-base font-medium">{opt}</span>
                    <span className="w-6 h-6 rounded-full border border-gold/50 flex items-center justify-center text-xs text-ink-secondary shrink-0 ml-2">
                      {String.fromCharCode(65 + idx)}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

        </div>
      </div>

      {/* Bottom Feedback / Action Bar */}
      <div className="pt-8 pb-4">
        {hasChecked ? (
          <div
            className={`p-5 rounded-2xl border mb-4 animate-slideUp ${
              isCorrect
                ? 'bg-emerald-50/90 border-emerald-400 text-emerald-900'
                : 'bg-rose-50/90 border-rose-300 text-rose-900'
            }`}
          >
            <div className="flex items-start space-x-3">
              {isCorrect ? (
                <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <p className="font-bold text-base">
                  {isCorrect ? 'उत्तमम्! (Excellent!) You answered correctly.' : 'Good effort! Let’s understand this together.'}
                </p>
                <p className="text-sm opacity-90 leading-relaxed">
                  {currentExercise.explanation}
                </p>
                {currentExercise.grammarNote && (
                  <p className="text-xs font-semibold mt-1">
                    Grammar: {currentExercise.grammarNote}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-maroon text-ivory font-semibold text-sm hover:bg-maroon-light transition-all shadow-md flex items-center space-x-1.5"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between pt-4 border-t border-gold/20">
            <span className="text-xs text-ink-secondary">
              Select your answer to proceed
            </span>
            <button
              onClick={handleCheck}
              disabled={!canCheck}
              className={`px-8 py-3 rounded-xl font-bold text-sm shadow-md transition-all ${
                canCheck
                  ? 'bg-maroon text-ivory hover:bg-maroon-light active:bg-maroon-dark border border-gold/50 cursor-pointer'
                  : 'bg-ivory-300 text-ink-secondary/50 border-ink-secondary/20 cursor-not-allowed'
              }`}
            >
              Check Answer
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
