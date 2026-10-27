import React from 'react';
import { Link } from 'react-router-dom';
import { LearningPath } from '../components/LearningPath';
import { useProgress } from '../hooks/useProgress';
import { Flame, Award, BookOpen, CheckCircle2, Bookmark } from 'lucide-react';

export const Learn: React.FC = () => {
  const { 
    progress, 
    level, 
    levelTitle, 
    nextLevelXp, 
    coursePercentage, 
    completedLessonsCount, 
    totalLessonsCount 
  } = useProgress();

  const wordsLearnedCount = progress.learnedWordIds.length + progress.savedWordIds.length;

  return (
    <div className="min-h-screen bg-ivory py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Learning Dashboard Header */}
        <div className="bg-cardbg rounded-3xl p-6 sm:p-8 border-2 border-gold/40 shadow-traditional">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gold/20">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-peacock">
                Digital Gurukul Vidyapeeth
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-maroon mt-0.5">
                Level {level} — {levelTitle}
              </h1>
              <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                Progress systematically through Paninian phonetics, essential vocabulary, sentence syntax, and classical wisdom.
              </p>
            </div>

            {/* Flashcard Quick Link */}
            <Link
              to="/progress"
              className="shrink-0 inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-ivory-100 text-maroon hover:bg-gold/15 transition-all text-xs font-bold border border-gold/40 shadow-sm"
            >
              <Bookmark className="w-4 h-4 text-gold-dark" />
              <span>Review Saved Flashcards</span>
            </Link>
          </div>

          {/* Gamified Live Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            
            {/* Streak */}
            <div className="p-4 rounded-2xl bg-ivory-50 border border-gold/25 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                <Flame className="w-6 h-6 fill-orange-500 animate-pulse" />
              </div>
              <div>
                <span className="text-xs text-ink-secondary block font-medium">Daily Streak</span>
                <span className="text-lg font-bold font-serif text-maroon">
                  🔥 {progress.streak}-Day Streak
                </span>
              </div>
            </div>

            {/* Total XP */}
            <div className="p-4 rounded-2xl bg-ivory-50 border border-gold/25 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-gold-dark flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 fill-gold/30" />
              </div>
              <div>
                <span className="text-xs text-ink-secondary block font-medium">Total XP</span>
                <span className="text-lg font-bold font-serif text-maroon">
                  ⭐ {progress.xp} XP
                </span>
              </div>
            </div>

            {/* Lessons Completed */}
            <div className="p-4 rounded-2xl bg-ivory-50 border border-gold/25 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-peacock flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-ink-secondary block font-medium">Lessons</span>
                <span className="text-lg font-bold font-serif text-maroon">
                  📚 {completedLessonsCount} / {totalLessonsCount}
                </span>
              </div>
            </div>

            {/* Words Learned */}
            <div className="p-4 rounded-2xl bg-ivory-50 border border-gold/25 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-maroon flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-ink-secondary block font-medium">Words Learned</span>
                <span className="text-lg font-bold font-serif text-maroon">
                  📖 {wordsLearnedCount} Words
                </span>
              </div>
            </div>

          </div>

          {/* Level XP Progress Bar */}
          <div className="mt-6 pt-4 border-t border-gold/20">
            <div className="flex items-center justify-between text-xs text-ink-secondary mb-1.5 font-medium">
              <span>Overall Course Completion: {coursePercentage}%</span>
              <span>Next Level at {nextLevelXp} XP</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-ivory-200 overflow-hidden border border-gold/30">
              <div
                className="h-full bg-gradient-to-r from-peacock via-gold to-maroon rounded-full transition-all duration-500"
                style={{ width: `${Math.max(5, coursePercentage)}%` }}
              ></div>
            </div>
          </div>

        </div>

        {/* Vertical Stepped Learning Path */}
        <LearningPath />

      </div>
    </div>
  );
};
