import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Flame, Award, BookOpen } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { progress } = useProgress();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Learn Sanskrit', path: '/learn' },
    { label: 'Knowledge Explorer', path: '/explorer' },
    { label: 'History of Sanskrit', path: '/history' },
    { label: 'Ancient & Modern', path: '/knowledge' },
    { label: 'My Progress', path: '/progress' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-gold/30 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-full bg-maroon flex items-center justify-center text-gold shadow-md border border-gold/50 group-hover:scale-105 transition-transform">
              <span className="font-serif text-2xl font-bold">ॐ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold text-maroon tracking-tight flex items-center">
                Sanskrit Setu
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-gold-dark">
                Intelligent Sanskrit Explorer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-maroon font-semibold bg-gold/15 shadow-sm border border-gold/30'
                    : 'text-ink-main hover:text-maroon hover:bg-ivory-300/40'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-gold/40 bg-ivory-50 text-ink-secondary hover:text-maroon hover:border-maroon/40 text-xs transition-all shadow-sm"
              title="Search Knowledge Base (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-gold" />
              <span className="hidden md:inline">Search...</span>
              <kbd className="hidden md:inline text-[10px] bg-ivory-200 text-ink-secondary px-1.5 py-0.5 rounded border border-gold/20">⌘K</kbd>
            </button>

            {/* Streak & XP Badges */}
            <div className="flex items-center space-x-2 bg-cardbg px-2.5 py-1.5 rounded-lg border border-gold/30 shadow-sm">
              <div className="flex items-center space-x-1 text-xs font-bold text-maroon" title="Daily Streak">
                <Flame className="w-4 h-4 text-orange-600 fill-orange-500 animate-pulse" />
                <span>{progress.streak}d</span>
              </div>
              <div className="w-px h-3 bg-gold/30"></div>
              <div className="flex items-center space-x-1 text-xs font-bold text-gold-dark" title="Total XP">
                <Award className="w-4 h-4 text-gold fill-gold/40" />
                <span>{progress.xp} XP</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <Link
              to="/learn"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-maroon text-ivory hover:bg-maroon-light active:bg-maroon-dark transition-all shadow-md font-medium text-sm border border-gold/40"
            >
              <BookOpen className="w-4 h-4 text-gold" />
              <span>Start Learning →</span>
            </Link>
          </div>

          {/* Mobile Menu & Search Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg text-ink-main hover:text-maroon bg-ivory-50 border border-gold/30"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gold" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ink-main hover:text-maroon focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-maroon" /> : <Menu className="w-6 h-6 text-maroon" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-gold/30 bg-ivory-100 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {/* Quick Progress on Mobile */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-cardbg border border-gold/30 shadow-sm">
            <div className="flex items-center space-x-2">
              <Flame className="w-4 h-4 text-orange-600 fill-orange-500" />
              <span className="text-xs font-semibold text-ink-main">{progress.streak} Day Streak</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-xs font-bold text-maroon">{progress.xp} XP</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-maroon text-ivory font-semibold'
                    : 'text-ink-main hover:bg-gold/15'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/learn"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-maroon text-ivory font-semibold text-sm shadow-md border border-gold/40"
          >
            <span>Start Learning Sanskrit →</span>
          </Link>
        </div>
      )}
    </header>
  );
};
