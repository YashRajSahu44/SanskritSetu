import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HISTORICAL_PERIODS } from '../data/history';
import { HistoricalPeriod } from '../types';
import { 
  History as HistoryIcon, Flame, Sun, Cpu, Feather, 
  BookOpen, Globe, ArrowRight, X, ShieldCheck, ExternalLink 
} from 'lucide-react';

export const History: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<HistoricalPeriod | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-6 h-6 text-orange-600" />;
      case 'Sun': return <Sun className="w-6 h-6 text-amber-500" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-maroon" />;
      case 'Feather': return <Feather className="w-6 h-6 text-gold" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-peacock" />;
      default: return <Globe className="w-6 h-6 text-teal-700" />;
    }
  };

  return (
    <div className="min-h-screen bg-ivory py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-maroon/10 border border-maroon/20 text-maroon text-xs font-semibold uppercase tracking-wider">
            <HistoryIcon className="w-3.5 h-3.5" />
            <span>The Living History of Sanskrit</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon">
            A Language That Carries Civilizations
          </h1>

          <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
            "Sanskrit has served as a major language of literature, philosophy, religious traditions, grammar, and scholarly exchange in South Asia. Its literary heritage preserves centuries of intellectual and cultural history."
          </p>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cardbg border border-gold/30 text-xs text-ink-secondary shadow-sm">
            <ShieldCheck className="w-4 h-4 text-gold-dark" />
            <span>Structured Chronology Grounded in Modern Textual Criticism</span>
          </div>
        </div>

        {/* Desktop Horizontal Scroll / Mobile Stacked Timeline */}
        <div className="relative">
          
          {/* Subtle guide line across timeline */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gold/20 via-maroon/30 to-gold/20 -translate-y-8 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {HISTORICAL_PERIODS.map((period, idx) => (
              <div
                key={period.id}
                className="bg-cardbg rounded-3xl p-6 sm:p-7 border-2 border-gold/40 shadow-traditional hover:border-maroon/50 transition-all flex flex-col justify-between group hover:shadow-card-lift"
              >
                <div>
                  {/* Top Era Tag & Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-gold/20 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-ivory-100 text-maroon border border-gold/30">
                      {period.period}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-ivory-100 border border-gold/40 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                      {getIcon(period.icon)}
                    </div>
                  </div>

                  {/* Period Era & Title */}
                  <div className="space-y-1 mb-3">
                    <span className="text-xs font-semibold text-gold-dark block font-serif">
                      {period.era}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-maroon leading-snug">
                      {period.title}
                    </h3>
                  </div>

                  {/* Overview Text */}
                  <p className="text-xs text-ink-secondary leading-relaxed line-clamp-3 mb-4">
                    {period.overview}
                  </p>

                  {/* Key Texts Pill */}
                  <div className="space-y-1.5 pt-2 border-t border-gold/15">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-peacock block">
                      Prominent Texts & Trademarks:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {period.keyTexts.slice(0, 2).map((text, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-ivory-100 text-ink-main border border-gold/20 font-medium">
                          {text}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 mt-4 border-t border-gold/20 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedPeriod(period)}
                    className="text-xs font-bold text-maroon hover:text-gold-dark flex items-center space-x-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {period.relatedPassageId && (
                    <Link
                      to={`/explorer?passage=${period.relatedPassageId}`}
                      className="text-[11px] text-peacock font-semibold hover:underline flex items-center space-x-1"
                      title="Examine attested passage in Explorer"
                    >
                      <span>View Passage</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Detailed Modal / Bottom Drawer for Selected Historical Period */}
        {selectedPeriod && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deepbrown/60 backdrop-blur-sm animate-fadeIn">
            <div 
              className="bg-cardbg rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border-2 border-gold/50 shadow-2xl p-6 sm:p-8 space-y-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPeriod(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-ink-secondary hover:text-maroon hover:bg-ivory-100 transition-all"
                aria-label="Close details"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Header */}
              <div className="space-y-1 pr-10">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-peacock">
                    {selectedPeriod.period}
                  </span>
                  <span className="text-xs font-semibold text-gold-dark font-serif">
                    • {selectedPeriod.era}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-maroon">
                  {selectedPeriod.title}
                </h2>
              </div>

              {/* Detailed Historical Narrative */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Historical Development & Transmission
                </h4>
                <p className="text-xs sm:text-sm text-ink-main leading-relaxed">
                  {selectedPeriod.detailedDescription}
                </p>
              </div>

              {/* Linguistic Characteristics */}
              <div className="p-4 rounded-2xl bg-ivory-100 border border-gold/30 space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-maroon">
                  Linguistic Markers & Evolution
                </h4>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  {selectedPeriod.linguisticCharacteristics}
                </p>
              </div>

              {/* Key Texts and Key Figures Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-ivory-50 border border-gold/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-peacock block mb-1">
                    Key Texts & Corpora
                  </span>
                  <ul className="text-xs text-ink-secondary space-y-1">
                    {selectedPeriod.keyTexts.map((txt, i) => (
                      <li key={i}>• {txt}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-ivory-50 border border-gold/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-dark block mb-1">
                    Important Scholars & Traditions
                  </span>
                  <ul className="text-xs text-ink-secondary space-y-1">
                    {selectedPeriod.keyFigures.map((fig, i) => (
                      <li key={i}>• {fig}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Scholarly Rigor & Critical Note */}
              <div className="p-4 rounded-xl bg-gold/10 border border-gold/30 text-xs space-y-1">
                <span className="font-bold text-maroon flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold-dark" />
                  <span>Academic Indology & Philological Context</span>
                </span>
                <p className="text-ink-secondary leading-relaxed">
                  {selectedPeriod.scholarlyNotes}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                {selectedPeriod.relatedPassageId ? (
                  <Link
                    to={`/explorer?passage=${selectedPeriod.relatedPassageId}`}
                    onClick={() => setSelectedPeriod(null)}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-peacock hover:underline"
                  >
                    <span>Explore Associated Passage in Knowledge Explorer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : <div></div>}

                <button
                  onClick={() => setSelectedPeriod(null)}
                  className="px-5 py-2 rounded-xl bg-maroon text-ivory text-xs font-semibold hover:bg-maroon-light transition-all"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
