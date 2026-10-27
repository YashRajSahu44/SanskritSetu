import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Scroll, History, Cpu, ArrowRight } from 'lucide-react';
import { VOCABULARY_LIST } from '../data/vocabulary';
import { PASSAGES } from '../data/passages';
import { UNITS } from '../data/lessons';
import { HISTORICAL_PERIODS } from '../data/history';
import { MODERN_CONNECTIONS } from '../data/knowledge';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // Search through all domains
  const matchedWords = q
    ? VOCABULARY_LIST.filter(w =>
        w.sanskrit.includes(q) ||
        w.transliteration.toLowerCase().includes(q) ||
        w.meaning.toLowerCase().includes(q) ||
        w.explanation.toLowerCase().includes(q)
      ).slice(0, 4)
    : [];

  const matchedPassages = q
    ? PASSAGES.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.source.toLowerCase().includes(q) ||
        p.shloka.some(s => s.includes(q)) ||
        p.naturalTranslation.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedLessons = q
    ? UNITS.flatMap(u => u.lessons).filter(l =>
        l.title.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        l.subtitle.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedHistory = q
    ? HISTORICAL_PERIODS.filter(h =>
        h.title.toLowerCase().includes(q) ||
        h.keyFigures.some(f => f.toLowerCase().includes(q)) ||
        h.keyTexts.some(t => t.toLowerCase().includes(q))
      ).slice(0, 2)
    : [];

  const matchedScience = q
    ? MODERN_CONNECTIONS.filter(m =>
        m.title.toLowerCase().includes(q) ||
        m.discipline.toLowerCase().includes(q) ||
        m.modernConnection.toLowerCase().includes(q)
      ).slice(0, 2)
    : [];

  const hasResults =
    matchedWords.length > 0 ||
    matchedPassages.length > 0 ||
    matchedLessons.length > 0 ||
    matchedHistory.length > 0 ||
    matchedScience.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-deepbrown/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-cardbg rounded-2xl shadow-2xl border border-gold/40 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-gold/20 flex items-center space-x-3 bg-ivory-50">
          <Search className="w-5 h-5 text-gold shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Sanskrit words, passages, history, lessons... (e.g. 'Dharma', 'Aryabhata', 'water')"
            className="w-full bg-transparent text-ink-main placeholder:text-ink-secondary/60 focus:outline-none text-base"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-ink-secondary hover:text-maroon transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-ivory-200 text-ink-secondary border border-gold/20 hover:bg-gold/10"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 space-y-4">
          {!q && (
            <div className="py-8 text-center text-ink-secondary">
              <p className="font-serif text-maroon text-lg mb-2">Explore the Sanskrit Knowledge Matrix</p>
              <p className="text-sm">Try searching for concepts like <span className="text-gold font-medium">"Dharma"</span>, <span className="text-gold font-medium">"Jñānam"</span>, <span className="text-gold font-medium">"Karmayoga"</span>, or historical figures like <span className="text-gold font-medium">"Panini"</span>.</p>
            </div>
          )}

          {q && !hasResults && (
            <div className="py-10 text-center text-ink-secondary">
              <p className="font-serif text-maroon text-lg mb-1">No matching results found</p>
              <p className="text-sm">Check your spelling or explore the curated sections in the main menu.</p>
            </div>
          )}

          {/* Matched Words */}
          {matchedWords.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Sanskrit Vocabulary</span>
              </div>
              <div className="space-y-1.5">
                {matchedWords.map((word) => (
                  <div
                    key={word.id}
                    onClick={() => {
                      onClose();
                      navigate('/learn');
                    }}
                    className="p-2.5 rounded-lg border border-gold/20 bg-ivory-50 hover:bg-gold/10 cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <div>
                      <span className="font-sanskrit text-lg font-bold text-maroon mr-2">{word.sanskrit}</span>
                      <span className="text-sm font-medium text-ink-main italic mr-2">({word.transliteration})</span>
                      <span className="text-sm text-ink-secondary">— {word.meaning}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Passages */}
          {matchedPassages.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-peacock mb-2 flex items-center space-x-1.5">
                <Scroll className="w-3.5 h-3.5" />
                <span>Classical Passages & Shlokas</span>
              </div>
              <div className="space-y-1.5">
                {matchedPassages.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onClose();
                      navigate(`/explorer?passage=${p.id}`);
                    }}
                    className="p-2.5 rounded-lg border border-peacock/20 bg-ivory-50 hover:bg-peacock/10 cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <div>
                      <p className="font-serif font-semibold text-maroon text-sm">{p.title}</p>
                      <p className="text-xs text-ink-secondary">{p.source} • {p.naturalTranslation.slice(0, 90)}...</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-peacock opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Lessons */}
          {matchedLessons.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-maroon mb-2 flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Interactive Lessons</span>
              </div>
              <div className="space-y-1.5">
                {matchedLessons.map((l) => (
                  <div
                    key={l.id}
                    onClick={() => {
                      onClose();
                      navigate(`/lesson/${l.id}`);
                    }}
                    className="p-2.5 rounded-lg border border-maroon/20 bg-ivory-50 hover:bg-maroon/10 cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <div>
                      <p className="font-medium text-sm text-maroon">{l.title}</p>
                      <p className="text-xs text-ink-secondary">{l.description}</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-gold/20 text-maroon font-semibold">+{l.xpReward} XP</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched History */}
          {matchedHistory.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-secondary mb-2 flex items-center space-x-1.5">
                <History className="w-3.5 h-3.5" />
                <span>Historical Periods</span>
              </div>
              <div className="space-y-1.5">
                {matchedHistory.map((h) => (
                  <div
                    key={h.id}
                    onClick={() => {
                      onClose();
                      navigate('/history');
                    }}
                    className="p-2.5 rounded-lg border border-ink-secondary/20 bg-ivory-50 hover:bg-ivory-200 cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <div>
                      <p className="font-serif text-sm font-semibold text-deepbrown">{h.title} <span className="text-xs font-sans text-ink-secondary">({h.era})</span></p>
                      <p className="text-xs text-ink-secondary">{h.overview}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-ink-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Science */}
          {matchedScience.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-peacock mb-2 flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>Traditional & Modern Science</span>
              </div>
              <div className="space-y-1.5">
                {matchedScience.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => {
                      onClose();
                      navigate('/knowledge');
                    }}
                    className="p-2.5 rounded-lg border border-peacock/20 bg-ivory-50 hover:bg-peacock/10 cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <div>
                      <p className="font-serif text-sm font-semibold text-peacock-dark">{m.title}</p>
                      <p className="text-xs text-ink-secondary">{m.subtitle}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-peacock opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
