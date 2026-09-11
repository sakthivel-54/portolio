import React, { useEffect, useRef } from 'react';
import { 
  X, 
  ShieldAlert, 
  Cpu, 
  Lock, 
  Layers, 
  CheckCircle2, 
  AlertTriangle,
  FileText,
  Workflow,
  Sparkles,
  Sliders,
  Code
} from 'lucide-react';
import { portfolio } from '../data/portfolio';

interface VoxShieldCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast?: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const VoxShieldCaseStudyModal: React.FC<VoxShieldCaseStudyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { featuredProject } = portfolio;
  const { caseStudy } = featuredProject;
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Focus trap, Escape listener, and body scroll lock
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      // Focus modal container or first focusable element
      const timer = setTimeout(() => {
        const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable && focusable.length > 0) {
          focusable[0].focus();
        }
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
          return;
        }

        if (e.key === 'Tab' && modalRef.current) {
          const focusables = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#090C15] border border-indigo-500/30 rounded-2xl shadow-2xl text-slate-200 p-6 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-6 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>VOXSHIELD // TECHNICAL CASE STUDY SPECIFICATION</span>
            </div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {featuredProject.name} — Architecture &amp; Research Prototype
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
              {featuredProject.tagline} • Prototype / Academic Concept
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 shrink-0"
            aria-label="Close Case Study Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Academic Rigor & Non-Fabrication Notice (Section 7 & 8) */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm mb-8 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block text-amber-300 mb-0.5 font-mono text-xs uppercase tracking-wider">
              ETHICS &amp; NON-FABRICATION NOTICE:
            </span>
            <p className="font-sans leading-relaxed text-slate-300">
              {caseStudy.experimentalDisclaimer}
            </p>
          </div>
        </div>

        {/* 12-Section Storytelling Structure (Section 8) */}
        <div className="space-y-8 font-sans">
          {/* 01 & 02: Problem & Existing Limitations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-2 font-bold">
                <ShieldAlert className="w-4 h-4" />
                <span>01 — Problem</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2 font-bold">
                <AlertTriangle className="w-4 h-4" />
                <span>02 — Why Existing Approaches Are Limited</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {caseStudy.limitationsOfExisting}
              </p>
            </div>
          </div>

          {/* 03: Proposed Solution */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h3 className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-2 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>03 — Proposed Solution</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {caseStudy.proposedSolution}
            </p>
          </div>

          {/* 04: Architecture */}
          <div>
            <h3 className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-3 flex items-center gap-2 font-bold">
              <Workflow className="w-4 h-4" />
              <span>04 — End-to-End Architecture</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.architecture.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                  <span className="font-mono text-xs text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 shrink-0 mt-0.5">
                    {step.step}
                  </span>
                  <div>
                    <div className="font-bold text-sm text-white">{step.title}</div>
                    <div className="text-xs text-slate-400 mt-1 leading-relaxed">{step.details}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 05: AI/ML Pipeline */}
          <div>
            <h3 className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-3 flex items-center gap-2 font-bold">
              <Cpu className="w-4 h-4" />
              <span>05 — AI/ML Pipeline Subsystems</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.mlPipeline.map((pipe, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-1.5 font-mono">
                    <span className="text-xs font-bold text-slate-200">{pipe.stage}</span>
                    <span className="text-[10px] text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                      {pipe.tech}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pipe.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 06 & 07: Real-Time Risk Scoring & Privacy Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2 font-bold">
                <Sliders className="w-4 h-4" />
                <span>06 — Real-Time Risk Scoring</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {caseStudy.realTimeRiskScoring}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-2 font-bold">
                <Lock className="w-4 h-4" />
                <span>07 — Privacy-First Approach</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {caseStudy.privacyApproach}
              </p>
            </div>
          </div>

          {/* 08 & 09: Current Prototype vs Research / Future Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>08 — Current Prototype Capabilities</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {caseStudy.currentPrototype.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-3 flex items-center gap-2 font-bold">
                <Layers className="w-4 h-4" />
                <span>09 — Research &amp; Future Work</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {caseStudy.researchFutureWork.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 10: Limitations */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h3 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2 font-bold">
              <AlertTriangle className="w-4 h-4" />
              <span>10 — Known Limitations &amp; Challenges</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {caseStudy.limitations.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 11: Technology Stack */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h3 className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-3 flex items-center gap-2 font-bold">
              <Code className="w-4 h-4" />
              <span>11 — Technology Stack</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              {caseStudy.technologyStack.map((group, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-[10px] text-slate-400 uppercase mb-1.5 font-semibold">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {group.items.map((item) => (
                      <span key={item} className="px-2 py-0.5 rounded bg-white/5 text-slate-200 text-[11px]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 12: GitHub / Prototype Access */}
          <div className="p-5 rounded-xl bg-indigo-950/20 border border-indigo-500/30">
            <h3 className="text-xs font-mono text-indigo-300 uppercase tracking-wider mb-2 flex items-center gap-2 font-bold">
              <FileText className="w-4 h-4" />
              <span>12 — Prototype Verification &amp; Source Access</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-3">
              {caseStudy.githubAndDemo.statusNote}
            </p>
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                Live Interactive Demo Active Above
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <span className="text-slate-500">
            VOXSHIELD SPECIFICATION // ACM-VIT SHOWCASE
          </span>

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            Close Specification
          </button>
        </div>
      </div>
    </div>
  );
};
