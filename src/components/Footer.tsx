import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Scroll, History, Cpu, Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-deepbrown text-ivory-300 border-t-2 border-gold/40 relative overflow-hidden">
      {/* Subtle traditional mandala watermark overlay */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border border-gold/10 pointer-events-none opacity-20"></div>
      <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full border border-gold/10 pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Sanskrit Inscription Banner */}
        <div className="text-center pb-12 border-b border-gold/20 mb-12">
          <p className="font-sanskrit text-xl sm:text-2xl text-gold font-bold tracking-wider mb-2">
            विद्या ददाति विनयं विनयाद् याति पात्रताम्॥
          </p>
          <p className="text-xs sm:text-sm text-ivory-400 italic max-w-xl mx-auto">
            "True learning bestows humility; from humility dawns capability; from capability comes righteous living and lasting peace."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Purpose */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-deepbrown font-serif text-xl font-bold shadow-md">
                ॐ
              </div>
              <span className="font-serif text-2xl font-bold text-gold tracking-tight">
                Sanskrit Setu
              </span>
            </div>
            <p className="text-xs text-ivory-300/80 leading-relaxed">
              An intelligent digital bridge connecting modern learners to the vast intellectual, philosophical, and literary heritage of Sanskrit through interactive pedagogy.
            </p>
            <div className="flex items-center space-x-2 text-xs text-gold/80 pt-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Grounded in Peer-Reviewed Scholarship</span>
            </div>
          </div>

          {/* Col 2: Learning & Exploration */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Explore & Learn
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-300/80">
              <li>
                <Link to="/learn" className="hover:text-gold transition-colors flex items-center space-x-2">
                  <BookOpen className="w-3.5 h-3.5 text-gold/60" />
                  <span>Duolingo-Style Sanskrit Path</span>
                </Link>
              </li>
              <li>
                <Link to="/explorer" className="hover:text-gold transition-colors flex items-center space-x-2">
                  <Scroll className="w-3.5 h-3.5 text-gold/60" />
                  <span>Sanskrit Knowledge Explorer</span>
                </Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-gold transition-colors flex items-center space-x-2">
                  <History className="w-3.5 h-3.5 text-gold/60" />
                  <span>The Living History of Sanskrit</span>
                </Link>
              </li>
              <li>
                <Link to="/knowledge" className="hover:text-gold transition-colors flex items-center space-x-2">
                  <Cpu className="w-3.5 h-3.5 text-gold/60" />
                  <span>Ancient Ideas & Modern Science</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Student Tools */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Gurukul Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-300/80">
              <li>
                <Link to="/progress" className="hover:text-gold transition-colors">
                  My Learning Progress & XP
                </Link>
              </li>
              <li>
                <Link to="/progress" className="hover:text-gold transition-colors">
                  Saved Vocabulary & Flashcards
                </Link>
              </li>
              <li>
                <Link to="/sources" className="hover:text-gold transition-colors">
                  Sources, Lexicons & References
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About the Sanskrit Setu Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Design & Cultural Respect */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Ethical Indology
            </h4>
            <p className="text-xs text-ivory-300/70 leading-relaxed">
              We distinguish verified historical textual attestations from modern interpretations. Sanskrit Setu presents classical Indian knowledge with academic rigor and cultural reverence.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] px-2.5 py-1 rounded bg-deepbrown-card border border-gold/30 text-gold-light">
                Devanagari Unicode Standard compliant
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory-400">
          <p>© {new Date().getFullYear()} Sanskrit Setu — An Intelligent Sanskrit Knowledge Explorer & Digital Gurukul.</p>
          <p className="flex items-center space-x-1 mt-2 sm:mt-0">
            <span>Crafted with devotion for Sanskrit learners worldwide</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </p>
        </div>

      </div>
    </footer>
  );
};
