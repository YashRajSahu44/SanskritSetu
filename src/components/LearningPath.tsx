import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Lock, Star, Sparkles, BookOpen, ChevronRight, Play } from 'lucide-react';
import { Unit, Lesson } from '../types';
import { UNITS } from '../data/lessons';
import { useProgress } from '../hooks/useProgress';

export const LearningPath: React.FC = () => {
  const navigate = useNavigate();
  const { progress } = useProgress();

  const isLessonCompleted = (lessonId: string) => progress.completedLessons.includes(lessonId);

  // Determine if a lesson is accessible (unlocked)
  const isLessonUnlocked = (unit: Unit, lesson: Lesson, lessonIndex: number, unitIndex: number) => {
    // First lesson of unit 1 is always unlocked
    if (unitIndex === 0 && lessonIndex === 0) return true;
    
    // If already completed, it's unlocked for review
    if (isLessonCompleted(lesson.id)) return true;

    // Check if the immediately preceding lesson is completed
    if (lessonIndex > 0) {
      const prevLesson = unit.lessons[lessonIndex - 1];
      return isLessonCompleted(prevLesson.id);
    } else if (unitIndex > 0) {
      // First lesson of unit N is unlocked if the last lesson of unit N-1 is completed
      const prevUnit = UNITS[unitIndex - 1];
      const lastLessonOfPrevUnit = prevUnit.lessons[prevUnit.lessons.length - 1];
      return isLessonCompleted(lastLessonOfPrevUnit.id);
    }

    return false;
  };

  const handleLessonClick = (lesson: Lesson, unlocked: boolean) => {
    if (!unlocked) return;
    navigate(`/lesson/${lesson.id}`);
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6">
      <div className="space-y-16">
        {UNITS.map((unit, unitIdx) => (
          <div key={unit.id} className="relative">
            
            {/* Unit Banner Header */}
            <div 
              className="rounded-2xl p-6 mb-8 text-ivory shadow-card-lift border border-gold/40 relative overflow-hidden"
              style={{ backgroundColor: unit.color }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-white/5 pointer-events-none transform skew-x-12"></div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-glow mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Unit {unit.id} • Path to Fluency</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                    {unit.title}
                  </h3>
                  <p className="text-sm text-ivory-200 mt-1 max-w-xl">
                    {unit.description}
                  </p>
                </div>
                
                <div className="shrink-0 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 text-center">
                  <span className="text-xs text-ivory-300 block">Lessons</span>
                  <span className="text-lg font-bold font-serif text-gold-glow">
                    {unit.lessons.filter(l => isLessonCompleted(l.id)).length} / {unit.lessons.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Stepped Lesson Path Nodes */}
            <div className="relative flex flex-col items-center space-y-8">
              
              {/* Connecting line */}
              <div className="absolute top-4 bottom-4 w-1 bg-gradient-to-b from-gold/50 via-gold/30 to-gold/10 -z-0"></div>

              {unit.lessons.map((lesson, lessonIdx) => {
                const completed = isLessonCompleted(lesson.id);
                const unlocked = isLessonUnlocked(unit, lesson, lessonIdx, unitIdx);
                const isCurrent = unlocked && !completed;

                // Subtle zigzag alternating horizontal shift for playful Duolingo path cadence
                const xOffsetClass = lessonIdx % 2 === 0 ? 'sm:-translate-x-12' : 'sm:translate-x-12';

                return (
                  <div 
                    key={lesson.id} 
                    className={`relative z-10 flex flex-col items-center transition-all ${xOffsetClass}`}
                  >
                    {/* Node Button */}
                    <button
                      onClick={() => handleLessonClick(lesson, unlocked)}
                      disabled={!unlocked}
                      className={`relative w-20 h-20 rounded-full flex items-center justify-center border-4 shadow-lg transition-all transform ${
                        completed
                          ? 'bg-gold text-deepbrown border-maroon hover:scale-105 active:scale-95 shadow-gold-glow'
                          : isCurrent
                          ? 'bg-maroon text-gold border-gold scale-110 ring-4 ring-gold/40 animate-pulse active:scale-95'
                          : unlocked
                          ? 'bg-cardbg text-maroon border-gold/60 hover:scale-105'
                          : 'bg-ivory-300/70 text-ink-secondary/40 border-ink-secondary/20 cursor-not-allowed'
                      }`}
                      aria-label={`${lesson.title}: ${completed ? 'Completed' : unlocked ? 'Available' : 'Locked'}`}
                    >
                      {completed ? (
                        <Check className="w-9 h-9 stroke-[3]" />
                      ) : isCurrent ? (
                        <Play className="w-8 h-8 fill-gold ml-1" />
                      ) : unlocked ? (
                        <Star className="w-8 h-8 fill-gold/40 text-gold" />
                      ) : (
                        <Lock className="w-7 h-7 text-ink-secondary/50" />
                      )}

                      {/* XP Badge Callout */}
                      <span className="absolute -bottom-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-deepbrown text-gold border border-gold/40 shadow-sm">
                        +{lesson.xpReward} XP
                      </span>
                    </button>

                    {/* Lesson Description Card Beneath Node */}
                    <div 
                      onClick={() => handleLessonClick(lesson, unlocked)}
                      className={`mt-4 w-64 text-center p-3 rounded-xl border transition-all ${
                        unlocked
                          ? 'bg-cardbg border-gold/40 shadow-sm cursor-pointer hover:border-maroon/60'
                          : 'bg-ivory-200/50 border-ink-secondary/15 opacity-60'
                      }`}
                    >
                      <h4 className="font-serif text-sm font-bold text-maroon truncate">
                        {lesson.title}
                      </h4>
                      <p className="text-xs text-ink-secondary mt-0.5 line-clamp-1">
                        {lesson.subtitle}
                      </p>
                      
                      <div className="mt-2 flex items-center justify-center space-x-1 text-[11px] font-medium text-peacock">
                        {completed ? (
                          <span className="text-maroon font-semibold">Review Lesson</span>
                        ) : unlocked ? (
                          <span className="flex items-center text-maroon font-bold">
                            <span>Start Now</span>
                            <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                          </span>
                        ) : (
                          <span className="text-ink-secondary/70">Complete prior lesson</span>
                        )}
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
