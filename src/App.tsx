import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { VoxShieldShowcase } from './components/VoxShieldShowcase';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { CustomCursor } from './components/CustomCursor';
import { VoxShieldCaseStudyModal } from './components/VoxShieldCaseStudyModal';
import { ToastContainer, ToastMessage } from './components/Toast';

export function App() {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Top reading scroll progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-[#F8FAFC] selection:bg-indigo-500/30 selection:text-white relative">
      {/* Top Reading Scroll Progress Bar */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Accessible Desktop Custom Cursor */}
      <CustomCursor />

      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-indigo-600 text-white rounded-lg font-mono text-xs shadow-xl"
      >
        Skip to main content
      </a>

      {/* Floating Sticky Navigation Bar */}
      <Navbar 
        onOpenPalette={() => setIsPaletteOpen(true)} 
        onShowToast={showToast} 
      />

      {/* Top-Level Layout Shell */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* 01 HERO SECTION */}
        <Hero onShowToast={showToast} />

        {/* 02 ABOUT SECTION */}
        <About />

        {/* 03 SKILLS SECTION */}
        <Skills />

        {/* 04 FEATURED PROJECT - VOXSHIELD */}
        <VoxShieldShowcase 
          onOpenCaseStudy={() => setIsCaseStudyOpen(true)} 
          onShowToast={showToast} 
        />

        {/* 05 ADDITIONAL PROJECTS */}
        <Projects 
          onOpenCaseStudy={() => setIsCaseStudyOpen(true)} 
          onShowToast={showToast} 
        />

        {/* 06 EXPERIENCE TIMELINE */}
        <Experience />

        {/* 07 CERTIFICATIONS WALL */}
        <Certifications />

        {/* 08 ACHIEVEMENTS */}
        <Achievements />

        {/* 09 EDUCATION */}
        <Education />

        {/* 10 CONTACT & CTA */}
        <Contact onShowToast={showToast} />
      </main>

      {/* 11 MINIMAL FOOTER */}
      <Footer />

      {/* Command Palette Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
      />

      {/* In-Depth VoxShield Case Study Modal */}
      <VoxShieldCaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notification Stack */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}

export default App;
