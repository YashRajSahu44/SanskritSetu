import React from 'react';
import { ACADEMIC_SOURCES } from '../data/sources';
import { BookOpen, ShieldCheck, ExternalLink, Bookmark, Sparkles } from 'lucide-react';

export const Sources: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-peacock/10 border border-peacock/20 text-peacock text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Academic Integrity & Citations</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon">
            Sources, Lexicons & References
          </h1>

          <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
            Sanskrit Setu is committed to textual precision, philological rigor, and modern Indological scholarship. We benchmark all grammatical derivations, shloka readings, and historical contexts against recognized critical editions and peer-reviewed university presses.
          </p>
        </div>

        {/* Academic Principles Box */}
        <div className="bg-cardbg rounded-3xl p-6 sm:p-8 border-2 border-gold/40 shadow-traditional space-y-4">
          <h2 className="font-serif text-xl font-bold text-maroon flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-gold-dark" />
            <span>Our Philological Standards</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-ink-secondary leading-relaxed pt-2">
            <div className="space-y-1.5 p-4 rounded-2xl bg-ivory-50 border border-gold/25">
              <span className="font-bold text-maroon block text-sm">1. Authentic Root Derivations</span>
              <p>
                Every root (Dhātu) and grammatical case (Vibhakti) is verified against Panini’s Aṣṭādhyāyī, the Dhātupāṭha, and Monier-Williams’ standard etymological lexicon.
              </p>
            </div>
            <div className="space-y-1.5 p-4 rounded-2xl bg-ivory-50 border border-gold/25">
              <span className="font-bold text-peacock block text-sm">2. Text-Critical Consensus</span>
              <p>
                Where passages or dates have debated manuscript variants, we cite consensus dates established by academic institutions such as BORI Pune and university Indology departments.
              </p>
            </div>
            <div className="space-y-1.5 p-4 rounded-2xl bg-ivory-50 border border-gold/25">
              <span className="font-bold text-gold-dark block text-sm">3. Nuanced Scientific History</span>
              <p>
                We highlight genuine computational and mathematical algorithms without overstating modern parallels or succumbing to anachronistic claims.
              </p>
            </div>
          </div>
        </div>

        {/* Bibliography Grid */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-maroon">
            Curated Academic Bibliography
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACADEMIC_SOURCES.map((source) => (
              <div
                key={source.id}
                className="bg-cardbg rounded-3xl p-6 border-2 border-gold/30 shadow-sm flex flex-col justify-between space-y-4 hover:border-gold transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-gold/20">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-ivory-100 text-maroon border border-gold/30">
                      {source.category}
                    </span>
                    <span className="text-xs text-ink-secondary font-serif">
                      {source.year}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-maroon leading-snug">
                    {source.title}
                  </h3>

                  <p className="text-xs font-semibold text-peacock">
                    By {source.authorOrEditor} • {source.institutionOrPublisher}
                  </p>

                  <p className="text-xs text-ink-secondary leading-relaxed pt-1">
                    {source.description}
                  </p>
                </div>

                {source.link && (
                  <div className="pt-3 border-t border-gold/20">
                    <a
                      href={source.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-maroon hover:text-gold-dark transition-colors"
                    >
                      <span>Access Public Resource / Digital Edition</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
