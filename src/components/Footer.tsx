import React from 'react';
import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const Footer: React.FC = () => {
  const { personal, social } = portfolio;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#04060A] py-12 text-xs text-slate-400 font-sans">
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="font-bold text-base tracking-tight text-white">
            {personal.name}
          </div>
          <div className="text-slate-400 text-xs font-mono">
            AI &amp; Full-Stack Developer
          </div>
        </div>

        {/* Social & Contact Links (Section 43) */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-sans">
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-indigo-400 rounded px-1"
              aria-label="GitHub Profile (sakthivel-54)"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-indigo-400 rounded px-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${social.email}`}
            className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-indigo-400 rounded px-1"
            aria-label="Direct Email"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>{social.email}</span>
          </a>
        </div>

        {/* Dynamic Copyright & Scroll to Top */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <span>&copy; {currentYear} B. Sakthivel. All rights reserved.</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Scroll to top of page"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
