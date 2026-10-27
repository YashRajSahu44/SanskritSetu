import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MODERN_CONNECTIONS } from '../data/knowledge';
import { ModernConnection } from '../types';
import { 
  Cpu, Binary, Hash, Globe, HeartPulse, Compass, 
  Trees, BookOpen, ExternalLink, ShieldAlert, Sparkles, Filter 
} from 'lucide-react';

export const Knowledge: React.FC = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<ModernConnection | null>(null);

  const getDisciplineIcon = (disc: string) => {
    switch (disc) {
      case 'mathematics': return <Binary className="w-5 h-5 text-maroon" />;
      case 'astronomy': return <Globe className="w-5 h-5 text-peacock" />;
      case 'medicine': return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'architecture': return <Compass className="w-5 h-5 text-gold-dark" />;
      case 'environment': return <Trees className="w-5 h-5 text-emerald-600" />;
      default: return <Cpu className="w-5 h-5 text-maroon" />;
    }
  };

  const filteredConnections = selectedDiscipline === 'all'
    ? MODERN_CONNECTIONS
    : MODERN_CONNECTIONS.filter(m => m.discipline === selectedDiscipline);

  return (
    <div className="min-h-screen bg-ivory py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-maroon text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-gold-dark" />
            <span>Traditional Shastras & Contemporary Science</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon">
            Ancient Ideas, Modern Perspectives
          </h1>

          <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
            Investigate genuine historical connections between classical Sanskrit treatises and modern disciplines — from Pingala's binary metrics to Aryabhata’s relative motion and holistic circadian rhythms.
          </p>

          {/* Academic Integrity Disclaimer Banner */}
          <div className="p-4 rounded-2xl bg-gold/10 border border-gold/30 text-xs text-ink-main text-left flex items-start space-x-3 shadow-sm">
            <ShieldAlert className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold text-maroon block">Principle of Historical & Scholarly Integrity:</span>
              <p className="text-ink-secondary leading-relaxed">
                We celebrate genuine intellectual milestones documented in Sanskrit manuscripts while rigorously distinguishing verified historical discoveries from modern empirical sciences. We avoid pseudoscience, supernatural exaggerations, and speculative claims.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['all', 'mathematics', 'astronomy', 'medicine', 'architecture', 'environment'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedDiscipline(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all border ${
                selectedDiscipline === cat
                  ? 'bg-maroon text-ivory border-maroon shadow-md'
                  : 'bg-cardbg text-ink-secondary border-gold/30 hover:bg-gold/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredConnections.map((item) => (
            <div
              key={item.id}
              className="bg-cardbg rounded-3xl p-6 sm:p-7 border-2 border-gold/40 shadow-traditional hover:border-gold transition-all flex flex-col justify-between group hover:shadow-card-lift"
            >
              <div className="space-y-4">
                {/* Card Top: Discipline Pill & Icon */}
                <div className="flex items-center justify-between pb-3 border-b border-gold/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-ivory-100 border border-gold/30 flex items-center justify-center">
                      {getDisciplineIcon(item.discipline)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-peacock">
                      {item.discipline}
                    </span>
                  </div>
                  <span className="text-[10px] text-ink-secondary/70 truncate max-w-[130px]">
                    {item.source.split('(')[0]}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-serif text-lg font-bold text-maroon group-hover:text-gold-dark transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ink-secondary font-medium mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                {/* Sanskrit Inscription Snippet */}
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-gold/30 space-y-1">
                  <p className="font-sanskrit text-base font-bold text-maroon">
                    {item.sanskritPassage}
                  </p>
                  <p className="text-[11px] text-ink-secondary italic">
                    "{item.englishTranslation}"
                  </p>
                </div>

                {/* Modern Connection Abstract */}
                <p className="text-xs text-ink-secondary leading-relaxed line-clamp-3">
                  {item.modernConnection}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-4 border-t border-gold/20 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalItem(item)}
                  className="text-xs font-bold text-maroon hover:text-gold-dark flex items-center space-x-1"
                >
                  <BookOpen className="w-3.5 h-3.5 text-gold-dark" />
                  <span>Deep Dive Analysis</span>
                </button>

                <span className="text-[10px] text-ink-secondary/70 italic">
                  Peer-reviewed
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal / Information Sheet */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deepbrown/60 backdrop-blur-sm animate-fadeIn">
            <div 
              className="bg-cardbg rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border-2 border-gold/50 shadow-2xl p-6 sm:p-8 space-y-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between pb-4 border-b border-gold/20">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-peacock block">
                    {activeModalItem.discipline} • {activeModalItem.source}
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-maroon mt-1">
                    {activeModalItem.title}
                  </h2>
                </div>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="p-1.5 rounded-xl text-ink-secondary hover:text-maroon hover:bg-ivory-100 text-lg"
                >
                  ✕
                </button>
              </div>

              {/* Sanskrit Passage */}
              <div className="p-4 rounded-2xl bg-ivory-100 border border-gold/40 space-y-2 text-center">
                <p className="font-sanskrit text-xl font-bold text-maroon">
                  {activeModalItem.sanskritPassage}
                </p>
                <p className="font-serif italic text-xs text-ink-secondary">
                  {activeModalItem.transliteration}
                </p>
                <p className="text-xs sm:text-sm font-medium text-ink-main pt-1">
                  "{activeModalItem.englishTranslation}"
                </p>
              </div>

              {/* Historical Context */}
              <div className="space-y-1.5 text-xs sm:text-sm">
                <h4 className="font-bold text-maroon uppercase tracking-wider text-xs">
                  Historical Context & Textual Composition
                </h4>
                <p className="text-ink-secondary leading-relaxed">
                  {activeModalItem.historicalContext}
                </p>
              </div>

              {/* Modern Scientific Connection */}
              <div className="space-y-1.5 text-xs sm:text-sm">
                <h4 className="font-bold text-peacock uppercase tracking-wider text-xs">
                  Connection to Modern Science & Systems
                </h4>
                <p className="text-ink-main leading-relaxed">
                  {activeModalItem.modernConnection}
                </p>
              </div>

              {/* Critical Scholarly Nuance */}
              <div className="p-4 rounded-xl bg-gold/10 border border-gold/30 text-xs space-y-1">
                <span className="font-bold text-maroon flex items-center space-x-1.5">
                  <ShieldAlert className="w-4 h-4 text-gold-dark" />
                  <span>Scholarly Nuance & Boundary of Claims:</span>
                </span>
                <p className="text-ink-secondary leading-relaxed">
                  {activeModalItem.scholarlyNuance}
                </p>
              </div>

              {/* Academic References */}
              <div className="space-y-1 text-xs">
                <span className="font-bold uppercase tracking-wider text-ink-secondary block mb-1">
                  Academic References:
                </span>
                <ul className="space-y-1 text-ink-secondary/80">
                  {activeModalItem.references.map((ref, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <span className="text-gold">•</span>
                      <span>{ref}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-6 py-2.5 rounded-xl bg-maroon text-ivory text-xs font-semibold hover:bg-maroon-light transition-all shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
