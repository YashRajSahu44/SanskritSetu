export type WordCategory = 'noun' | 'verb' | 'adjective' | 'greeting' | 'particle' | 'nature' | 'philosophy' | 'science';

export interface SanskritWord {
  id: string;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  category: WordCategory;
  gender?: 'masculine' | 'feminine' | 'neuter';
  root?: string; // Dhatu e.g. ज्ञा, गम्, पठ्
  exampleSentence: string;
  exampleTransliteration: string;
  exampleTranslation: string;
  explanation: string;
  audioText?: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export type ExerciseType = 
  | 'match-meaning' 
  | 'select-sanskrit' 
  | 'complete-sentence' 
  | 'match-pairs' 
  | 'arrange-words' 
  | 'translate-sentence' 
  | 'image-choice';

export interface MatchPairItem {
  sanskrit: string;
  transliteration?: string;
  english: string;
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  subtext?: string;
  sanskritContext?: string;
  transliterationContext?: string;
  options?: string[];
  correctAnswer: string | string[]; // Single string or ordered array of tokens
  pairs?: MatchPairItem[];
  tokens?: string[]; // for arrange-words
  imageHint?: string; // Icon or symbol identifier
  explanation: string;
  grammarNote?: string;
}

export interface Lesson {
  id: string;
  unitId: number;
  order: number;
  title: string;
  subtitle: string;
  description: string;
  xpReward: number;
  icon: string;
  exercises: Exercise[];
}

export interface Unit {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export interface WordTokenAnalysis {
  sanskrit: string;
  transliteration: string;
  meaning: string;
  grammar: string;
  root?: string;
  contextualNote: string;
}

export interface Passage {
  id: string;
  title: string;
  source: string;
  category: 'philosophy' | 'literature' | 'nature' | 'mathematics' | 'astronomy' | 'medicine';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  shloka: string[];
  transliteration: string[];
  wordByWord: WordTokenAnalysis[];
  naturalTranslation: string;
  detailedExplanation: string;
  historicalContext: string;
  grammarAnalysis: {
    subject?: string;
    verb?: string;
    object?: string;
    vibhaktiSummary: string;
    sandhiCompounds?: string;
  };
}

export interface HistoricalPeriod {
  id: string;
  period: string;
  era: string;
  title: string;
  overview: string;
  keyTexts: string[];
  keyFigures: string[];
  linguisticCharacteristics: string;
  detailedDescription: string;
  scholarlyNotes: string;
  relatedPassageId?: string;
  icon: string;
}

export interface ModernConnection {
  id: string;
  discipline: 'mathematics' | 'astronomy' | 'architecture' | 'environment' | 'philosophy' | 'medicine';
  title: string;
  subtitle: string;
  icon: string;
  sanskritPassage: string;
  transliteration: string;
  source: string;
  englishTranslation: string;
  historicalContext: string;
  modernConnection: string;
  scholarlyNuance: string;
  references: string[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'lesson' | 'xp' | 'streak' | 'explorer' | 'vocab';
  requirement: number;
}

export interface UserProgress {
  xp: number;
  streak: number;
  lastActiveDate: string; // YYYY-MM-DD
  completedLessons: string[];
  currentLessonId: string;
  savedWordIds: string[];
  learnedWordIds: string[];
  unlockedBadges: string[];
  lessonStats: Record<string, { accuracy: number; attempts: number; lastScore: number }>;
  exploredPassages?: string[];
}
