import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { Home } from './pages/Home';
import { Learn } from './pages/Learn';
import { Lesson } from './pages/Lesson';
import { Explorer } from './pages/Explorer';
import { History } from './pages/History';
import { Knowledge } from './pages/Knowledge';
import { Progress } from './pages/Progress';
import { Sources } from './pages/Sources';
import { About } from './pages/About';
import { useProgress } from './hooks/useProgress';
import { Award, Sparkles, X } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { newBadgeUnlocked, dismissBadgeModal } = useProgress();

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory text-ink-main selection:bg-gold/30 selection:text-maroon">
        
        {/* Navigation Bar */}
        <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

        {/* Global Search Modal */}
        <SearchModal 
          isOpen={isSearchOpen} 
          onClose={() => setIsSearchOpen(false)} 
        />

        {/* Badge Unlocked Notification Modal */}
        {newBadgeUnlocked && (
          <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
            <div className="bg-cardbg rounded-2xl p-4 border-2 border-gold shadow-2xl flex items-center space-x-3 max-w-sm">
              <div className="w-10 h-10 rounded-xl bg-gold/20 text-maroon flex items-center justify-center shrink-0 border border-gold">
                <Award className="w-6 h-6 text-gold-dark" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-peacock flex items-center space-x-1">
                  <Sparkles className="w-3 h-3 text-gold" />
                  <span>Badge Unlocked!</span>
                </span>
                <p className="font-serif text-sm font-bold text-maroon">
                  {newBadgeUnlocked}
                </p>
              </div>
              <button
                onClick={dismissBadgeModal}
                className="p-1 rounded text-ink-secondary hover:text-maroon"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/lesson/:lessonId" element={<Lesson />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/history" element={<History />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/sources" element={<Sources />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
