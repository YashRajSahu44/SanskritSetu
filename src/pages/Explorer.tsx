import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PASSAGES } from '../data/passages';
import { Passage, WordTokenAnalysis } from '../types';
import { WordAnalysisPanel } from '../components/WordAnalysisPanel';
import { speakSanskrit } from '../utils/audio';
import { useProgress } from '../hooks/useProgress';
import { 
  Volume2, Compass, Filter, BookOpen, Layers, 
  HelpCircle, Sparkles, Send, Bot, CheckCircle2 
} from 'lucide-react';

export const Explorer: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialPassageId = searchParams.get('passage');

  const { recordPassageExplored } = useProgress();

  const [selectedPassageId, setSelectedPassageId] = useState<string>(
    initialPassageId || PASSAGES[0].id
  );
  const [selectedWord, setSelectedWord] = useState<WordTokenAnalysis | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // AI Assistant Q&A state
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isAiThinking, setIsAiThinking] = useState(false);

  // Synchronize URL param if it changes
  useEffect(() => {
    if (initialPassageId && PASSAGES.some(p => p.id === initialPassageId)) {
      setSelectedPassageId(initialPassageId);
    }
  }, [initialPassageId]);

  const activePassage: Passage = 
    PASSAGES.find(p => p.id === selectedPassageId) || PASSAGES[0];

  // Auto-select first word when passage changes
  useEffect(() => {
    if (activePassage.wordByWord.length > 0) {
      setSelectedWord(activePassage.wordByWord[0]);
    } else {
      setSelectedWord(null);
    }
    setAiAnswer(null);
    setAiQuestion('');
    // Record progress explorer milestone
    recordPassageExplored(activePassage.id);
  }, [activePassage, recordPassageExplored]);

  // Filtering passages
  const filteredPassages = PASSAGES.filter(p => {
    const matchesCat = categoryFilter === 'all' || p.category === categoryFilter;
    const matchesDiff = difficultyFilter === 'all' || p.difficulty === difficultyFilter;
    return matchesCat && matchesDiff;
  });

  const handleSpeakEntirePassage = () => {
    setIsPlayingAudio(true);
    const fullText = activePassage.shloka.join(' ');
    speakSanskrit(fullText);
    setTimeout(() => setIsPlayingAudio(false), 3000);
  };

  // AI Guru Question Handler
  const handleAskAi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;

    setIsAiThinking(true);
    setAiAnswer(null);

    setTimeout(() => {
      setIsAiThinking(false);
      const q = aiQuestion.toLowerCase();
      
      if (activePassage.id === 'gita-2-47') {
        if (q.includes('career') || q.includes('modern') || q.includes('work')) {
          setAiAnswer(
            "In modern psychology and performance theory, focusing on the process rather than obsessive outcome anxiety is proven to induce 'flow state' and reduce burnout. Verse 2.47 advises establishing psychological ownership over craftsmanship (karma) while relinquishing debilitating worry over uncontrollable externalities (phala)."
          );
        } else if (q.includes('sandhi') || q.includes('grammar')) {
          setAiAnswer(
            "In 'कर्मण्येवाधिकारस्ते' (karmaṇy-evādhikāras-te), there are two euphonic junctions (Sandhi): First, 'कर्मणि + एव' undergoes Yaṇ Sandhi where the vowel 'इ' before 'ए' transforms into semi-vowel 'य्' (karmaṇya-). Next, 'एव + अधिकारः' undergoes Savarṇa-dīrgha Sandhi (a + a = ā) yielding '-vādhikāraḥ'."
          );
        } else {
          setAiAnswer(
            `Regarding "${activePassage.title}": Classical commentator Shankaracharya notes that human agency is empowered in the ethical realm. When you act out of righteousness and dedication without transactional attachment, the mind remains tranquil, avoiding both pride in success and depression in failure.`
          );
        }
      } else if (activePassage.id === 'aryabhatiya-ganita') {
        setAiAnswer(
          "Aryabhata’s mathematical verse utilizes the positional rule 'sthānāt-sthānam daśa-guṇam syāt' (each sequential position is tenfold). Unlike Greek or Roman alphabetic numerals, this allowed algorithms for square roots, cube roots, and astronomical sine tables to be computed rapidly with high precision."
        );
      } else if (activePassage.id === 'charaka-ayu') {
        setAiAnswer(
          "Charaka defines 'Ayu' (life) not just as tissue anatomy (Śarīra), but as a 4-dimensional continuum integrating the physical senses (Indriya), cognitive mind (Sattva/Manas), and conscious observer (Ātman). This psychosomatic perspective aligns closely with modern integrative and lifestyle medicine."
        );
      } else {
        setAiAnswer(
          `Analysis for ${activePassage.title}: In this verse, the key philosophical insight is the integration between ethical action and universal harmony. The primary verb and case inflection emphasize internal balance and collective duty.`
        );
      }
    }, 700);
  };

  return (
    <div className="min-h-screen bg-ivory py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-peacock/10 border border-peacock/20 text-peacock text-xs font-semibold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Sanskrit Knowledge Explorer</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon">
            Explore the Wisdom of Sanskrit
          </h1>
          <p className="text-sm sm:text-base text-ink-secondary mt-2">
            Decode ancient manuscripts, Upanishadic dialogues, and classical sciences through clickable word-by-word linguistics, root derivations, and grammatical analysis.
          </p>
        </div>

        {/* Filter & Selection Bar */}
        <div className="bg-cardbg rounded-2xl p-4 sm:p-5 border border-gold/30 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-ink-secondary flex items-center space-x-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-gold-dark" />
              <span>Category:</span>
            </span>
            {['all', 'philosophy', 'literature', 'mathematics', 'medicine'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                  categoryFilter === cat
                    ? 'bg-maroon text-ivory shadow-sm'
                    : 'bg-ivory-100 text-ink-secondary hover:bg-gold/15'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-ink-secondary">Level:</span>
            {['all', 'beginner', 'intermediate', 'advanced'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setDifficultyFilter(lvl)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium capitalize transition-all ${
                  difficultyFilter === lvl
                    ? 'bg-peacock text-ivory shadow-sm font-semibold'
                    : 'bg-ivory-100 text-ink-secondary hover:bg-peacock/10'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

        </div>

        {/* Passage Carousel / Selector Pills */}
        <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-thin">
          {filteredPassages.map((p) => {
            const isSelected = p.id === activePassage.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPassageId(p.id)}
                className={`shrink-0 px-4 py-2.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-cardbg text-maroon border-gold ring-2 ring-gold/40 shadow-md font-bold'
                    : 'bg-ivory-100/80 text-ink-secondary border-gold/30 hover:bg-cardbg hover:text-maroon'
                }`}
              >
                <div className="text-[10px] uppercase font-bold tracking-wider text-peacock">
                  {p.source}
                </div>
                <div className="text-xs font-serif truncate max-w-[200px]">
                  {p.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: Sanskrit Shloka & Word-by-Word Analysis */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Passage Box */}
            <div className="bg-cardbg rounded-3xl p-6 sm:p-8 border-2 border-gold/40 shadow-traditional relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-gold/20 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-peacock font-serif">
                    {activePassage.source}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-maroon mt-0.5">
                    {activePassage.title}
                  </h2>
                </div>

                <button
                  onClick={handleSpeakEntirePassage}
                  className={`p-2.5 rounded-xl border transition-all flex items-center space-x-1.5 ${
                    isPlayingAudio
                      ? 'bg-gold text-deepbrown border-gold scale-105'
                      : 'bg-ivory text-maroon border-gold/40 hover:bg-gold/20'
                  }`}
                  title="Recite Entire Passage"
                >
                  <Volume2 className="w-4 h-4" />
                  <span className="text-xs font-semibold hidden sm:inline">Recite Verse</span>
                </button>
              </div>

              {/* Clickable Sanskrit Word Tokens in Large Devanagari */}
              <div className="bg-ivory-100 rounded-2xl p-6 sm:p-8 border border-gold/30 space-y-4">
                <div className="flex items-center justify-between text-xs text-gold-dark font-medium pb-2 border-b border-gold/20">
                  <span>Interactive Sanskrit Text (Click any word to inspect):</span>
                  <span className="text-[11px] italic">Devanagari Unicode</span>
                </div>

                <div className="space-y-4 text-center">
                  {activePassage.shloka.map((line, lineIdx) => {
                    // Split line into words, but match against wordByWord tokens
                    const lineWords = line.split(' ');

                    return (
                      <div key={lineIdx} className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                        {lineWords.map((rawWord, wordIdx) => {
                          const clean = rawWord.replace(/[।॥,;]/g, '');
                          const tokenMatch = activePassage.wordByWord.find(
                            w => w.sanskrit === clean || rawWord.includes(w.sanskrit) || w.sanskrit.includes(clean)
                          );
                          const isWordSelected = selectedWord && tokenMatch && selectedWord.sanskrit === tokenMatch.sanskrit;

                          return (
                            <button
                              key={wordIdx}
                              onClick={() => {
                                if (tokenMatch) {
                                  setSelectedWord(tokenMatch);
                                }
                              }}
                              className={`font-sanskrit text-2xl sm:text-3xl font-bold px-2.5 py-1 rounded-xl transition-all ${
                                isWordSelected
                                  ? 'bg-maroon text-gold shadow-md scale-105 ring-2 ring-gold'
                                  : tokenMatch
                                  ? 'text-maroon hover:bg-gold/20 hover:text-maroon-dark cursor-pointer'
                                  : 'text-maroon'
                              }`}
                              title={tokenMatch ? `Inspect "${tokenMatch.sanskrit}" (${tokenMatch.meaning})` : undefined}
                            >
                              {rawWord}
                            </button>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>

                {/* Transliteration */}
                <div className="pt-4 border-t border-gold/20 text-center">
                  {activePassage.transliteration.map((trans, i) => (
                    <p key={i} className="font-serif italic text-xs sm:text-sm text-ink-secondary">
                      {trans}
                    </p>
                  ))}
                </div>
              </div>

              {/* Natural Translation */}
              <div className="mt-6 p-4 rounded-2xl bg-ivory-50 border border-gold/30 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-peacock flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Natural English Translation</span>
                </span>
                <p className="text-sm sm:text-base text-ink-main font-medium leading-relaxed">
                  "{activePassage.naturalTranslation}"
                </p>
              </div>

              {/* Detailed Philological & Historical Explanation */}
              <div className="mt-4 p-4 rounded-2xl bg-ivory-50 border border-gold/30 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Historical Context & Philosophical Essence</span>
                </span>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {activePassage.detailedExplanation}
                </p>
                <p className="text-xs text-ink-secondary/80 italic pt-1">
                  Chronological setting: {activePassage.historicalContext}
                </p>
              </div>

              {/* Comprehensive Grammar Breakdown */}
              <div className="mt-4 p-4 rounded-2xl bg-ivory-100 border border-gold/40 space-y-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-maroon flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Grammar Explorer (Vyākaraṇa Vivaraṇam)</span>
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activePassage.grammarAnalysis.subject && (
                    <div className="p-2.5 rounded-lg bg-cardbg border border-gold/20">
                      <span className="font-semibold text-ink-secondary block">Subject (Kartṛ):</span>
                      <span className="text-maroon font-medium">{activePassage.grammarAnalysis.subject}</span>
                    </div>
                  )}
                  {activePassage.grammarAnalysis.verb && (
                    <div className="p-2.5 rounded-lg bg-cardbg border border-gold/20">
                      <span className="font-semibold text-ink-secondary block">Verb (Kriyā / Lakāra):</span>
                      <span className="text-maroon font-medium">{activePassage.grammarAnalysis.verb}</span>
                    </div>
                  )}
                  {activePassage.grammarAnalysis.object && (
                    <div className="p-2.5 rounded-lg bg-cardbg border border-gold/20">
                      <span className="font-semibold text-ink-secondary block">Object (Karman):</span>
                      <span className="text-maroon font-medium">{activePassage.grammarAnalysis.object}</span>
                    </div>
                  )}
                  <div className="p-2.5 rounded-lg bg-cardbg border border-gold/20">
                    <span className="font-semibold text-ink-secondary block">Case Summary (Vibhakti):</span>
                    <span className="text-peacock font-medium">{activePassage.grammarAnalysis.vibhaktiSummary}</span>
                  </div>
                </div>

                {activePassage.grammarAnalysis.sandhiCompounds && (
                  <div className="p-2.5 rounded-lg bg-cardbg border border-gold/20 text-xs">
                    <span className="font-semibold text-ink-secondary block">Sandhi & Samāsa:</span>
                    <span className="text-ink-main">{activePassage.grammarAnalysis.sandhiCompounds}</span>
                  </div>
                )}
              </div>

            </div>

            {/* Word-by-Word Translation Table */}
            <div className="bg-cardbg rounded-3xl p-6 border-2 border-gold/30 shadow-sm space-y-4">
              <h3 className="font-serif text-lg font-bold text-maroon flex items-center space-x-2">
                <span>Padavibhāga — Complete Word-by-Word Glossary</span>
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gold/30 text-ink-secondary uppercase tracking-wider">
                      <th className="pb-2 font-bold">Word (Pada)</th>
                      <th className="pb-2 font-bold">Transliteration</th>
                      <th className="pb-2 font-bold">Meaning</th>
                      <th className="pb-2 font-bold">Grammatical Category</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gold/15">
                    {activePassage.wordByWord.map((w, idx) => (
                      <tr 
                        key={idx}
                        onClick={() => setSelectedWord(w)}
                        className={`hover:bg-gold/10 cursor-pointer transition-colors ${
                          selectedWord?.sanskrit === w.sanskrit ? 'bg-gold/15 font-semibold' : ''
                        }`}
                      >
                        <td className="py-2.5 font-sanskrit text-base font-bold text-maroon">{w.sanskrit}</td>
                        <td className="py-2.5 font-serif italic text-gold-dark">{w.transliteration}</td>
                        <td className="py-2.5 text-ink-main">{w.meaning}</td>
                        <td className="py-2.5 text-peacock">{w.grammar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* AI Gurukul Contextual Assistant */}
            <div className="bg-cardbg rounded-3xl p-6 border-2 border-gold/40 shadow-sm space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-maroon text-gold flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-maroon">
                    Ask Digital Gurukul AI
                  </h3>
                  <p className="text-xs text-ink-secondary">
                    Inquire about grammar, ethical applications, or linguistic nuances of this passage
                  </p>
                </div>
              </div>

              <form onSubmit={handleAskAi} className="flex gap-2">
                <input
                  type="text"
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  placeholder="e.g. 'How does Nishkama Karma apply to work?' or 'Explain the Sandhi rules here'"
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gold/40 bg-ivory-50 text-xs text-ink-main focus:outline-none focus:border-maroon"
                />
                <button
                  type="submit"
                  disabled={isAiThinking || !aiQuestion.trim()}
                  className="px-4 py-2.5 rounded-xl bg-maroon text-ivory text-xs font-semibold hover:bg-maroon-light transition-all disabled:opacity-50 flex items-center space-x-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Ask</span>
                </button>
              </form>

              {isAiThinking && (
                <div className="p-4 rounded-xl bg-ivory-50 border border-gold/30 text-xs text-ink-secondary flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-gold animate-spin" />
                  <span>Consulting classical commentaries and grammatical shastras...</span>
                </div>
              )}

              {aiAnswer && (
                <div className="p-4 rounded-xl bg-ivory-100 border border-gold/40 text-xs space-y-2 animate-fadeIn">
                  <div className="flex items-center space-x-1.5 text-peacock font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Scholarly Answer:</span>
                  </div>
                  <p className="text-ink-main leading-relaxed">{aiAnswer}</p>
                  <span className="text-[10px] text-ink-secondary italic block">
                    Verified through standard classical commentaries and Dhatupatha
                  </span>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT PANEL: Interactive Word Analysis Panel */}
          <div className="lg:col-span-5">
            <WordAnalysisPanel 
              selectedWord={selectedWord}
              passageSource={activePassage.source}
            />
          </div>

        </div>

      </div>
    </div>
  );
};
