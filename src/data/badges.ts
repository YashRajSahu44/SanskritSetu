import { Badge } from '../types';

export const BADGES: Badge[] = [
  {
    id: 'first-steps',
    name: 'First Steps (प्रथमः पादः)',
    description: 'Complete your first interactive Sanskrit lesson.',
    icon: 'Footprints',
    category: 'lesson',
    requirement: 1
  },
  {
    id: 'word-collector',
    name: 'Word Collector (शब्दसङ्ग्राहकः)',
    description: 'Add or master 10 Sanskrit words in your personal vocabulary.',
    icon: 'BookMarked',
    category: 'vocab',
    requirement: 10
  },
  {
    id: 'grammar-explorer',
    name: 'Grammar Explorer (व्याकरणज्ञः)',
    description: 'Complete lessons in Sanskrit Grammar & Vibhakti.',
    icon: 'Layers',
    category: 'lesson',
    requirement: 3
  },
  {
    id: 'wisdom-keeper',
    name: 'Wisdom Keeper (ज्ञानरक्षकः)',
    description: 'Explore and analyze 3 classical passages in the Knowledge Explorer.',
    icon: 'Compass',
    category: 'explorer',
    requirement: 3
  },
  {
    id: 'streak-seeker',
    name: 'Diligent Seeker (सातत्यशीलः)',
    description: 'Maintain a 3-day continuous Sanskrit study streak.',
    icon: 'Flame',
    category: 'streak',
    requirement: 3
  },
  {
    id: 'xp-master',
    name: 'XP Centurion (शतवीरः)',
    description: 'Accumulate 100 XP through lessons and exercises.',
    icon: 'Award',
    category: 'xp',
    requirement: 100
  }
];
