import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { DailyWordSection } from '../components/DailyWordSection';
import { OrnamentalDivider } from '../components/OrnamentalDivider';
import { 
  BookOpen, Compass, History, Cpu, ArrowRight, 
  Sparkles, CheckCircle2 
} from 'lucide-react';
import { PASSAGES } from '../data/passages';
import { HISTORICAL_PERIODS } from '../data/history';
import { MODERN_CONNECTIONS } from '../data/knowledge';

export const Home: React.FC = () => {
  const featuredPassage = PASSAGES[0]; // Gita 2.47
  const featuredHistory = HISTORICAL_PERIODS[2]; // Panini
  const featuredScience = MODERN_CONNECTIONS[0]; // Pingala binary

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Daily Sanskrit Word: A Word of Wisdom */}
      <DailyWordSection />

      {/* 3. Learn Sanskrit Path Teaser */}
      <section className="py-20 bg-ivory-50 border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-maroon/10 border border-maroon/20 text-maroon text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Duolingo-Inspired Learning</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon leading-tight">
                Master Sanskrit Step by Step, from Alphabet to Epics.
              </h2>

              <p className="text-ink-secondary text-base leading-relaxed">
                Step into a digital Gurukul designed for the modern learner. Earn XP, maintain daily streaks, and conquer five carefully structured units — from the foundational sounds of the Devanagari script to the moral poetry of the Hitopadesha.
              </p>

              <div className="space-y-2.5">
                {[
                  'Bite-sized 5-minute interactive exercises',
                  'Sentence rearrangement, pair matching & grammar quizzes',
                  'Persistent progress tracking saved directly in your browser'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-sm text-ink-main font-medium">
                    <CheckCircle2 className="w-4 h-4 text-peacock shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/learn"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-maroon text-ivory font-semibold text-sm hover:bg-maroon-light transition-all shadow-md border border-gold/40 group"
                >
                  <BookOpen className="w-4 h-4 text-gold group-hover:rotate-6 transition-transform" />
                  <span>Explore All 5 Units →</span>
                </Link>
              </div>
            </div>

            {/* Interactive Unit Nodes Preview Graphic */}
            <div className="lg:col-span-7 bg-cardbg rounded-3xl p-6 sm:p-8 border-2 border-gold/40 shadow-traditional">
              <div className="flex items-center justify-between pb-4 border-b border-gold/20 mb-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-maroon">Unit 1: First Steps (प्रथमः पादः)</h3>
                  <p className="text-xs text-ink-secondary">Devanagari alphabet, sacred sounds, and everyday greetings</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-gold/20 text-maroon font-bold font-serif">
                  Level 1
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { title: 'Introduction & Sacred Sounds', xp: '+20 XP', status: 'Completed', icon: 'ॐ' },
                  { title: 'Sanskrit Vowels (Svara)', xp: '+25 XP', status: 'Unlocked', icon: 'अ' },
                  { title: 'Consonants & 5 Vocal Classes', xp: '+25 XP', status: 'Up Next', icon: 'क' }
                ].map((l, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl border border-gold/30 bg-ivory-50 flex items-center justify-between hover:bg-gold/10 transition-all cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-maroon text-gold font-sanskrit text-lg font-bold flex items-center justify-center border border-gold/40">
                        {l.icon}
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-ink-main">{l.title}</h4>
                        <span className="text-xs text-ink-secondary">{l.xp} reward</span>
                      </div>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-md font-semibold ${
                      l.status === 'Completed' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-gold/20 text-maroon'
                    }`}>
                      {l.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gold/20 flex items-center justify-between text-xs text-ink-secondary">
                <span>5 Units • 15+ Lessons • Rich Quiz Formats</span>
                <Link to="/learn" className="text-maroon font-bold hover:underline flex items-center">
                  <span>Enter Learn Mode</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Knowledge Explorer Teaser */}
      <section className="py-20 bg-ivory border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-peacock/10 border border-peacock/20 text-peacock text-xs font-semibold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Intelligent Text Analysis</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon">
              Explore the Wisdom of Sanskrit
            </h2>
            <p className="text-sm text-ink-secondary mt-2">
              Select individual words in classical shlokas to unlock root derivations, grammatical cases, and authentic contextual translations.
            </p>
          </div>

          {/* Interactive Shloka Preview Card */}
          <div className="bg-cardbg rounded-3xl p-6 sm:p-10 border-2 border-gold/50 shadow-traditional max-w-4xl mx-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gold/20 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-peacock font-serif">
                {featuredPassage.source}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-gold/15 text-gold-dark font-medium capitalize">
                {featuredPassage.category} • {featuredPassage.difficulty}
              </span>
            </div>

            <div className="text-center py-4 space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-maroon">
                {featuredPassage.title}
              </h3>
              
              <div className="bg-ivory-100 p-6 rounded-2xl border border-gold/30">
                {featuredPassage.shloka.map((line, idx) => (
                  <p key={idx} className="font-sanskrit text-2xl sm:text-3xl font-bold text-maroon leading-relaxed tracking-wide">
                    {line}
                  </p>
                ))}
              </div>

              <p className="text-sm text-ink-main italic max-w-2xl mx-auto pt-2">
                "{featuredPassage.naturalTranslation}"
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-ink-secondary">
                <span className="font-semibold text-maroon">Interactive breakdown:</span> 12 annotated word tokens with Dhātu roots and Vibhaktis
              </div>

              <Link
                to={`/explorer?passage=${featuredPassage.id}`}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-peacock text-ivory text-xs font-bold hover:bg-peacock-light transition-all shadow-md"
              >
                <span>Launch Interactive Explorer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Ancient Ideas Meets Modern Perspectives Teaser */}
      <section className="py-20 bg-ivory-100 border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-semibold uppercase tracking-wider border border-gold/30">
                <Cpu className="w-3.5 h-3.5" />
                <span>Interdisciplinary Bridge</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon leading-tight">
                Ancient Ideas, Modern Perspectives
              </h2>
              <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
                Discover how traditional Indian treatises on mathematics, planetary motion, architectural proportions, and ecological ethics anticipated questions investigated by modern sciences — presented with scholarly rigor and historical precision.
              </p>
              
              <div className="pt-2">
                <Link
                  to="/knowledge"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-cardbg text-maroon font-bold text-sm border-2 border-gold/50 hover:bg-gold/15 transition-all shadow-sm"
                >
                  <Cpu className="w-4 h-4 text-gold-dark" />
                  <span>Explore All 6 Scientific Disciplines →</span>
                </Link>
              </div>
            </div>

            {/* Featured Science Card */}
            <div className="lg:col-span-6 bg-cardbg rounded-3xl p-6 sm:p-8 border-2 border-gold/40 shadow-traditional space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gold/20">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  {featuredScience.discipline}
                </span>
                <span className="text-xs text-ink-secondary">
                  Pingala’s Chandaḥśāstra (c. 3rd–2nd c. BCE)
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-maroon">
                {featuredScience.title}
              </h3>

              <div className="p-3 bg-ivory-50 rounded-xl border border-gold/20">
                <p className="font-sanskrit text-lg font-bold text-maroon">
                  {featuredScience.sanskritPassage}
                </p>
                <p className="text-xs text-ink-secondary italic mt-1">
                  "{featuredScience.englishTranslation}"
                </p>
              </div>

              <p className="text-xs text-ink-secondary leading-relaxed">
                {featuredScience.modernConnection}
              </p>

              <div className="pt-2">
                <Link
                  to="/knowledge"
                  className="text-xs font-bold text-peacock hover:underline flex items-center space-x-1"
                >
                  <span>Read scholarly analysis & references</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Living History of Sanskrit Teaser */}
      <section className="py-20 bg-ivory border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-maroon/10 text-maroon text-xs font-semibold uppercase tracking-wider mb-2 border border-maroon/20">
              <History className="w-3.5 h-3.5" />
              <span>Timeless Heritage</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon">
              A Language That Carries Civilizations
            </h2>
            <p className="text-sm text-ink-secondary mt-2">
              From the oral mnemonic chanting of the Rigveda to the formal algebraic grammar of Panini and modern computational Indology.
            </p>
          </div>

          <div className="bg-cardbg rounded-3xl p-6 sm:p-8 border-2 border-gold/40 shadow-traditional max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold text-gold-dark uppercase tracking-wider">Featured Period: {featuredHistory.period}</span>
              <h3 className="font-serif text-2xl font-bold text-maroon">{featuredHistory.title}</h3>
              <p className="text-xs text-ink-secondary max-w-xl">{featuredHistory.overview}</p>
            </div>

            <Link
              to="/history"
              className="shrink-0 inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-maroon text-ivory text-sm font-semibold hover:bg-maroon-light transition-all shadow-md border border-gold/40"
            >
              <span>Explore Interactive Timeline →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 7. About Section: Mission & The Three Pillars */}
      <section className="py-20 bg-ivory-50 border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon mb-4">
              Bridging Ancient Wisdom and Modern Minds
            </h2>
            <p className="text-base text-ink-secondary leading-relaxed">
              Sanskrit Setu makes Sanskrit more accessible through interactive learning, contextual translation, and carefully researched explorations of Indian knowledge traditions. By combining language education with digital tools, the platform helps learners discover the meaning, history, and continuing relevance of Sanskrit.
            </p>
          </div>

          {/* Three Pillars Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1: Learn */}
            <div className="bg-cardbg rounded-3xl p-8 border-2 border-gold/40 shadow-traditional hover:border-maroon/40 transition-all space-y-4 text-center">
              <div className="w-14 h-14 rounded-2xl bg-maroon text-gold mx-auto flex items-center justify-center font-serif text-2xl font-bold shadow-md">
                <BookOpen className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-maroon">
                1. Learn
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Build Sanskrit vocabulary and grammar through short, interactive exercises with instant feedback, speech audio, and game-like progression.
              </p>
            </div>

            {/* Pillar 2: Explore */}
            <div className="bg-cardbg rounded-3xl p-8 border-2 border-gold/40 shadow-traditional hover:border-peacock/40 transition-all space-y-4 text-center">
              <div className="w-14 h-14 rounded-2xl bg-peacock text-ivory mx-auto flex items-center justify-center font-serif text-2xl font-bold shadow-md">
                <Compass className="w-7 h-7 text-gold-glow" />
              </div>
              <h3 className="font-serif text-xl font-bold text-peacock-dark">
                2. Explore
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Understand Sanskrit passages through interactive word-by-word token analysis, grammatical Vibhakti breakdowns, and historical contexts.
              </p>
            </div>

            {/* Pillar 3: Discover */}
            <div className="bg-cardbg rounded-3xl p-8 border-2 border-gold/40 shadow-traditional hover:border-gold/60 transition-all space-y-4 text-center">
              <div className="w-14 h-14 rounded-2xl bg-gold text-deepbrown mx-auto flex items-center justify-center font-serif text-2xl font-bold shadow-md">
                <Cpu className="w-7 h-7 text-deepbrown" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gold-dark">
                3. Discover
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Explore the chronological history of Sanskrit and investigate connections between traditional knowledge systems and modern disciplines.
              </p>
            </div>

          </div>

          <OrnamentalDivider className="mt-16" />

        </div>
      </section>

    </div>
  );
};
