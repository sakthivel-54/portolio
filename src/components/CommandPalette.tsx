import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  ArrowRight, 
  Terminal, 
  ShieldAlert, 
  Cpu, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  ExternalLink, 
  X,
  FileText
} from 'lucide-react';
import { portfolio } from '../data/portfolio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCaseStudy: () => void;
  onShowToast?: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

interface PaletteAction {
  id: string;
  label: string;
  category: string;
  icon: React.FC<{ className?: string }>;
  perform: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenCaseStudy,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  const actions: PaletteAction[] = [
    {
      id: 'voxshield',
      label: 'VoxShield — Deepfake Detection Case Study',
      category: 'Flagship AI',
      icon: ShieldAlert,
      perform: () => {
        onClose();
        onOpenCaseStudy();
      },
    },
    {
      id: 'projects',
      label: 'Explore Projects (VoxShield, Vehicle Service, Library)',
      category: 'Navigation',
      icon: Layers,
      perform: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'about',
      label: 'Background & Profile Overview',
      category: 'Navigation',
      icon: Terminal,
      perform: () => {
        onClose();
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'experience',
      label: 'Work Experience @ Inex.ai (Software Dev Intern)',
      category: 'Navigation',
      icon: Briefcase,
      perform: () => {
        onClose();
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'skills',
      label: 'Technical Competencies (React, Java, Python, Spring Boot)',
      category: 'Navigation',
      icon: Cpu,
      perform: () => {
        onClose();
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'education',
      label: 'Education — B.Tech IT (Authoritative CGPA 8.54 / 10)',
      category: 'Navigation',
      icon: GraduationCap,
      perform: () => {
        onClose();
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'certifications',
      label: 'Certifications (Meta, Oracle, Cisco, HackerRank, Infosys)',
      category: 'Navigation',
      icon: Award,
      perform: () => {
        onClose();
        document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'achievements',
      label: 'Honors & Achievements (ACM-VIT Code2Create, APEC-ACM 1st Prize)',
      category: 'Navigation',
      icon: Award,
      perform: () => {
        onClose();
        document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'resume',
      label: 'Download Resume (PDF)',
      category: 'Actions',
      icon: FileText,
      perform: () => {
        onClose();
        const a = document.createElement('a');
        a.href = portfolio.social.resumeUrl || '/resume.pdf';
        a.download = 'SAKTHIVEL_B_RESUME.pdf';
        a.click();
      },
    },
    {
      id: 'github',
      label: 'GitHub Profile (sakthivel-54)',
      category: 'External',
      icon: ExternalLink,
      perform: () => {
        onClose();
        window.open(portfolio.social.github, '_blank', 'noopener,noreferrer');
      },
    },
    {
      id: 'linkedin',
      label: 'LinkedIn Profile — Sakthivel Balamurugan',
      category: 'External',
      icon: ExternalLink,
      perform: () => {
        onClose();
        window.open(portfolio.social.linkedin, '_blank', 'noopener,noreferrer');
      },
    },
    {
      id: 'contact',
      label: 'Get in Touch / Contact Form',
      category: 'Navigation',
      icon: Mail,
      perform: () => {
        onClose();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  const filteredActions = actions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase()) ||
    action.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus trap, scroll lock, and focus return (Section 14)
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
          return;
        }

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % (filteredActions.length || 1));
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (filteredActions[selectedIndex]) {
            filteredActions[selectedIndex].perform();
          }
        } else if (e.key === 'Tab' && dialogRef.current) {
          const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
            'input, button, [href], [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length === 0) return;

          const first = focusables[0];
          const last = focusables[focusables.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        previouslyFocusedElement.current?.focus();
      };
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        ref={dialogRef}
        className="w-full max-w-xl rounded-2xl bg-[#0B0E17] border border-white/15 shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search portfolio..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-mono"
            aria-label="Search portfolio commands"
          />
          <span className="text-[11px] font-mono text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
            ESC
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Close Command Palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1" role="listbox">
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-slate-400">
              No commands found for &quot;{query}&quot;
            </div>
          ) : (
            filteredActions.map((action, idx) => {
              const Icon = action.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={action.id}
                  type="button"
                  onClick={action.perform}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    isSelected
                      ? 'bg-indigo-600/30 text-white border border-indigo-500/40'
                      : 'text-slate-300 hover:bg-white/5 border border-transparent'
                  }`}
                  role="option"
                  aria-selected={isSelected}
                >
                  <div className="flex items-center gap-3 truncate">
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-indigo-500/30 text-indigo-300' : 'bg-white/5 text-slate-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-sans font-medium truncate">
                      {action.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono uppercase text-slate-400 px-2 py-0.5 rounded bg-white/5">
                      {action.category}
                    </span>
                    {isSelected && <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />}
                  </div>
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 py-2 border-t border-white/10 bg-black/40 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>Navigate: ↑ ↓ • Select: ENTER • Dismiss: ESC</span>
          <span className="font-semibold">SAKTHIVEL // COMMAND INTERFACE</span>
        </div>
      </div>
    </div>
  );
};
