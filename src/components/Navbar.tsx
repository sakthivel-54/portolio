import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Search, FileText } from 'lucide-react';
import { portfolio } from '../data/portfolio';

interface NavbarProps {
  onOpenPalette: () => void;
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPalette, onShowToast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Active section scroll detection with 1:1 section mapping
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionTargets = [
        { id: 'contact', elementId: 'contact' },
        { id: 'education', elementId: 'education' },
        { id: 'achievements', elementId: 'achievements' },
        { id: 'certifications', elementId: 'certifications' },
        { id: 'experience', elementId: 'experience' },
        { id: 'projects', elementId: 'more-projects' },
        { id: 'projects', elementId: 'projects' },
        { id: 'skills', elementId: 'skills' },
        { id: 'about', elementId: 'about' },
        { id: 'home', elementId: 'home' }
      ];

      for (const target of sectionTargets) {
        const el = document.getElementById(target.elementId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) {
            setActiveSection(target.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu scroll lock and Escape handler (Section 15)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleResumeClick = () => {
    onShowToast("Downloading B. Sakthivel - Resume (PDF)...", "success");
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none transition-all duration-300"
      style={{ top: 'var(--sticky-top)' }}
    >
      <div className="max-w-[76rem] mx-auto flex items-center justify-between pointer-events-auto">
        {/* Floating Centered Pill Navbar */}
        <div className={`w-full flex items-center justify-between rounded-2xl px-4 sm:px-6 py-2.5 transition-all duration-300 border ${
          scrolled
            ? 'bg-[#0A0D16]/95 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/70'
            : 'bg-[#0A0D16]/80 backdrop-blur-md border-white/[0.08] shadow-lg'
        }`}>
          {/* Brand Identity */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-slate-100 hover:text-indigo-400 transition-colors group"
            aria-label="B. Sakthivel — Home"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-xs font-mono font-bold text-indigo-400 group-hover:border-indigo-400/60 transition-colors">
              BS
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold tracking-tight font-sans text-white leading-tight">
                B. Sakthivel
              </span>
              <span className="text-[10px] font-mono text-slate-400 leading-tight">
                AI &amp; Full-Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-sans text-xs font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg transition-all relative ${
                    isActive
                      ? 'text-white bg-white/[0.08] font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-indigo-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Quick Command Palette Trigger */}
            <button
              onClick={onOpenPalette}
              className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[11px] font-mono text-slate-400 hover:text-slate-200 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400"
              title="Quick command palette (Ctrl+K)"
              aria-label="Open Command Palette (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden md:inline">Ctrl+K</span>
            </button>

            {/* Resume Download Button */}
            <a
              href={portfolio.social.resumeUrl || "/resume.pdf"}
              download="SAKTHIVEL_B_RESUME.pdf"
              onClick={handleResumeClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-sans font-medium transition-all shadow-md shadow-indigo-600/20 focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label="Download Resume PDF"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay (Section 15) */}
      {isOpen && (
        <div 
          id="mobile-nav-menu"
          ref={mobileMenuRef}
          className="lg:hidden pointer-events-auto max-w-[76rem] mx-auto mt-2 p-4 rounded-2xl bg-[#0A0D16]/98 backdrop-blur-2xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col gap-1 text-sm font-sans" aria-label="Mobile Navigation Links">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`px-4 py-2.5 rounded-xl transition-all flex items-center justify-between ${
                    isActive
                      ? 'text-white bg-indigo-600/20 font-semibold border border-indigo-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-1.5">
              <a
                href={portfolio.social.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="px-4 py-2 text-xs font-mono text-slate-300 hover:text-white flex items-center justify-between rounded-lg hover:bg-white/[0.04]"
              >
                <span>GitHub (sakthivel-54)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={portfolio.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="px-4 py-2 text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center justify-between rounded-lg hover:bg-white/[0.04]"
              >
                <span>LinkedIn Network</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  onOpenPalette();
                }}
                className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-slate-200 flex items-center justify-between rounded-lg hover:bg-white/[0.04]"
              >
                <span>Command Palette</span>
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
