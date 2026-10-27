import { useState, useEffect, useCallback } from 'react';
import { UserProgress } from '../types';
import { BADGES } from '../data/badges';
import { UNITS } from '../data/lessons';

const STORAGE_KEY = 'sanskrit_setu_user_progress_v2';

const DEFAULT_PROGRESS: UserProgress = {
  xp: 45,
  streak: 2,
  lastActiveDate: new Date(Date.now() - 86400000).toISOString().split('T')[0], // yesterday
  completedLessons: ['u1-l1'],
  currentLessonId: 'u1-l2',
  savedWordIds: ['jnanam', 'vidya', 'namaste'],
  learnedWordIds: ['jnanam', 'namaste'],
  unlockedBadges: ['first-steps'],
  lessonStats: {
    'u1-l1': { accuracy: 100, attempts: 1, lastScore: 5 }
  }
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read user progress from localStorage', e);
    }
    return DEFAULT_PROGRESS;
  });

  const [newBadgeUnlocked, setNewBadgeUnlocked] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Could not write user progress to localStorage', e);
    }
  }, [progress]);

  // Update streak on user activity
  const updateStreak = useCallback((curr: UserProgress): { streak: number; lastActiveDate: string } => {
    const today = new Date().toISOString().split('T')[0];
    if (curr.lastActiveDate === today) {
      return { streak: curr.streak, lastActiveDate: today };
    }

    const lastDate = new Date(curr.lastActiveDate);
    const currentDate = new Date(today);
    const diffDays = Math.round((currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      return { streak: curr.streak + 1, lastActiveDate: today };
    } else if (diffDays > 1) {
      return { streak: 1, lastActiveDate: today };
    }
    return { streak: curr.streak, lastActiveDate: today };
  }, []);

  // Complete a lesson and record XP and statistics
  const completeLesson = useCallback((lessonId: string, earnedXp: number, accuracy: number, correctCount: number) => {
    setProgress(prev => {
      const streakInfo = updateStreak(prev);
      const isAlreadyCompleted = prev.completedLessons.includes(lessonId);
      const updatedCompleted = isAlreadyCompleted 
        ? prev.completedLessons 
        : [...prev.completedLessons, lessonId];

      const currentStats = prev.lessonStats[lessonId] || { attempts: 0, accuracy: 0, lastScore: 0 };
      const updatedStats = {
        ...prev.lessonStats,
        [lessonId]: {
          attempts: currentStats.attempts + 1,
          accuracy: Math.max(currentStats.accuracy, accuracy),
          lastScore: correctCount
        }
      };

      // Find next lesson to unlock
      let nextLessonId = prev.currentLessonId;
      const allLessons = UNITS.flatMap(u => u.lessons);
      const currentIndex = allLessons.findIndex(l => l.id === lessonId);
      if (currentIndex !== -1 && currentIndex + 1 < allLessons.length) {
        nextLessonId = allLessons[currentIndex + 1].id;
      }

      const newXP = prev.xp + earnedXp;

      // Check badge conditions
      const newlyUnlocked: string[] = [...prev.unlockedBadges];
      BADGES.forEach(badge => {
        if (!newlyUnlocked.includes(badge.id)) {
          if (badge.id === 'first-steps' && updatedCompleted.length >= 1) {
            newlyUnlocked.push(badge.id);
            setNewBadgeUnlocked(badge.name);
          } else if (badge.id === 'streak-seeker' && streakInfo.streak >= 3) {
            newlyUnlocked.push(badge.id);
            setNewBadgeUnlocked(badge.name);
          } else if (badge.id === 'xp-master' && newXP >= 100) {
            newlyUnlocked.push(badge.id);
            setNewBadgeUnlocked(badge.name);
          } else if (badge.id === 'grammar-explorer' && updatedCompleted.some(id => id.startsWith('u4-'))) {
            newlyUnlocked.push(badge.id);
            setNewBadgeUnlocked(badge.name);
          }
        }
      });

      return {
        ...prev,
        xp: newXP,
        streak: streakInfo.streak,
        lastActiveDate: streakInfo.lastActiveDate,
        completedLessons: updatedCompleted,
        currentLessonId: nextLessonId,
        lessonStats: updatedStats,
        unlockedBadges: newlyUnlocked
      };
    });
  }, [updateStreak]);

  // Toggle saving a word in the user's dictionary
  const toggleSaveWord = useCallback((wordId: string) => {
    setProgress(prev => {
      const isSaved = prev.savedWordIds.includes(wordId);
      const updatedSaved = isSaved 
        ? prev.savedWordIds.filter(id => id !== wordId)
        : [...prev.savedWordIds, wordId];

      const newlyUnlocked = [...prev.unlockedBadges];
      if (updatedSaved.length >= 10 && !newlyUnlocked.includes('word-collector')) {
        newlyUnlocked.push('word-collector');
        setNewBadgeUnlocked('Word Collector (शब्दसङ्ग्राहकः)');
      }

      return {
        ...prev,
        savedWordIds: updatedSaved,
        unlockedBadges: newlyUnlocked
      };
    });
  }, []);

  // Mark word as learned (e.g. from flashcards or vocabulary list)
  const markWordLearned = useCallback((wordId: string) => {
    setProgress(prev => {
      if (prev.learnedWordIds.includes(wordId)) return prev;
      const updated = [...prev.learnedWordIds, wordId];
      return {
        ...prev,
        learnedWordIds: updated,
        xp: prev.xp + 5 // bonus XP for mastering a word
      };
    });
  }, []);

  // Record that a passage was explored in the Knowledge Explorer
  const recordPassageExplored = useCallback((passageId: string) => {
    setProgress(prev => {
      const currentCount = (prev as unknown as { exploredPassages?: string[] }).exploredPassages || [];
      if (currentCount.includes(passageId)) return prev;
      const updated = [...currentCount, passageId];
      
      const newlyUnlocked = [...prev.unlockedBadges];
      if (updated.length >= 3 && !newlyUnlocked.includes('wisdom-keeper')) {
        newlyUnlocked.push('wisdom-keeper');
        setNewBadgeUnlocked('Wisdom Keeper (ज्ञानरक्षकः)');
      }

      return {
        ...prev,
        unlockedBadges: newlyUnlocked,
        exploredPassages: updated,
        xp: prev.xp + 10
      };
    });
  }, []);

  // Reset progress option
  const resetProgress = useCallback(() => {
    setProgress({
      xp: 0,
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      completedLessons: [],
      currentLessonId: 'u1-l1',
      savedWordIds: ['jnanam'],
      learnedWordIds: [],
      unlockedBadges: [],
      lessonStats: {}
    });
  }, []);

  // Calculate derived stats
  const totalLessonsCount = UNITS.reduce((acc, u) => acc + u.lessons.length, 0);
  const completedLessonsCount = progress.completedLessons.length;
  const coursePercentage = Math.min(100, Math.round((completedLessonsCount / totalLessonsCount) * 100));

  // Determine Level Title
  let level = 1;
  let levelTitle = 'Sanskrit Beginner (प्रारम्भिकः)';
  let nextLevelXp = 100;
  if (progress.xp >= 1000) {
    level = 5;
    levelTitle = 'Sanskrit Master (पण्डितः)';
    nextLevelXp = 2000;
  } else if (progress.xp >= 500) {
    level = 4;
    levelTitle = 'Sanskrit Scholar (विद्वान्)';
    nextLevelXp = 1000;
  } else if (progress.xp >= 250) {
    level = 3;
    levelTitle = 'Truth Inquirer (जिज्ञासुः)';
    nextLevelXp = 500;
  } else if (progress.xp >= 100) {
    level = 2;
    levelTitle = 'Gurukul Student (विद्यार्थी)';
    nextLevelXp = 250;
  }

  // Calculate average accuracy
  const statValues = Object.values(progress.lessonStats);
  const avgAccuracy = statValues.length > 0 
    ? Math.round(statValues.reduce((acc, curr) => acc + curr.accuracy, 0) / statValues.length)
    : 100;

  return {
    progress,
    level,
    levelTitle,
    nextLevelXp,
    coursePercentage,
    completedLessonsCount,
    totalLessonsCount,
    avgAccuracy,
    completeLesson,
    toggleSaveWord,
    markWordLearned,
    recordPassageExplored,
    resetProgress,
    newBadgeUnlocked,
    dismissBadgeModal: () => setNewBadgeUnlocked(null)
  };
}
