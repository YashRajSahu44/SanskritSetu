import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Compass, Cpu, Sparkles, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { OrnamentalDivider } from '../components/OrnamentalDivider';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-maroon text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>The Mission of Sanskrit Setu</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon">
            Bridging Ancient Wisdom and Modern Minds
          </h1>

          <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
            "Sanskrit Setu makes Sanskrit more accessible through interactive learning, contextual translation, and carefully researched explorations of Indian knowledge traditions. By combining language education with digital tools, the platform helps learners discover the meaning, history, and continuing relevance of Sanskrit."
          </p>
        </div>

        {/* The 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-cardbg rounded-3xl p-8 border-2 border-gold/40 shadow-traditional space-y-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-maroon text-gold mx-auto flex items-center justify-center font-serif text-2xl font-bold shadow-md">
              <BookOpen className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-serif text-xl font-bold text-maroon">
              Learn
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
              Build Sanskrit vocabulary and grammar through short, interactive exercises with instant feedback, speech audio, and game-like progression.
            </p>
          </div>

          <div className="bg-cardbg rounded-3xl p-8 border-2 border-gold/40 shadow-traditional space-y-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-peacock text-ivory mx-auto flex items-center justify-center font-serif text-2xl font-bold shadow-md">
              <Compass className="w-7 h-7 text-gold-glow" />
            </div>
            <h3 className="font-serif text-xl font-bold text-peacock-dark">
              Explore
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
              Understand Sanskrit passages through translations, grammatical analysis, and context. Click any word for Paninian root analysis.
            </p>
          </div>

          <div className="bg-cardbg rounded-3xl p-8 border-2 border-gold/40 shadow-traditional space-y-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gold text-deepbrown mx-auto flex items-center justify-center font-serif text-2xl font-bold shadow-md">
              <Cpu className="w-7 h-7 text-deepbrown" />
            </div>
            <h3 className="font-serif text-xl font-bold text-gold-dark">
              Discover
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
              Explore the history of Sanskrit and investigate connections between traditional knowledge and modern disciplines.
            </p>
          </div>

        </div>

        {/* Digital Gurukul Philosophy */}
        <div className="bg-cardbg rounded-3xl p-8 sm:p-10 border-2 border-gold/40 shadow-traditional space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-maroon font-serif text-xl font-bold">
              ॐ
            </div>
            <h2 className="font-serif text-2xl font-bold text-maroon">
              Why Sanskrit Setu?
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-ink-main leading-relaxed">
            <p>
              For centuries, the intellectual treasures of Sanskrit — mathematics, astronomy, surgical treatises, linguistics, and metaphysics — were preserved either in dense academic tomes or locked behind inaccessible traditional rote systems.
            </p>
            <p>
              Meanwhile, modern educational platforms frequently overlook classical Asian classical languages or reduce them to generic flashcards without historical nuance.
            </p>
            <p>
              <strong>Sanskrit Setu (The Sanskrit Bridge)</strong> was conceived as a true digital Gurukul: honoring the aesthetic dignity and philosophical depth of Indian culture while delivering the frictionless, interactive pedagogy that makes language acquisition joyful.
            </p>
          </div>

          <div className="pt-4 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs text-ink-secondary">
              <ShieldCheck className="w-4 h-4 text-peacock" />
              <span>Free, open-source educational mission for global learners</span>
            </div>

            <Link
              to="/learn"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-maroon text-ivory text-xs font-bold hover:bg-maroon-light transition-all shadow-md"
            >
              <span>Begin Your Study Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <OrnamentalDivider />

      </div>
    </div>
  );
};
