import React, { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Linkedin, 
  Github,
  FileText,
  Shield,
  Sparkles,
  Terminal,
  Activity,
  Mail
} from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { DeveloperTerminal } from './DeveloperTerminal';

interface HeroProps {
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Hero: React.FC<HeroProps> = ({ onShowToast }) => {
  const { personal, social } = portfolio;
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <section 
      id="home" 
      className="hero-wrapper relative overflow-hidden bg-grid-subtle flex items-center min-h-[90vh]"
    >
      {/* Restrained Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[340px] h-[340px] bg-sky-500/8 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[76rem] mx-auto px-4 sm:px-6 w-full relative z-10 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Recruiter-Oriented Hero Core */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Academic Credential Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs font-medium tracking-wide mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personal.heroBadge}</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-300 font-semibold">CGPA {personal.cgpa}</span>
            </div>

            {/* Candidate Identity (Clear Recruiter Readability within 5 Seconds) */}
            <div className="mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold block mb-1">
                Portfolio // Software Engineer
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                {personal.name}
              </h1>
            </div>

            {/* Primary Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-indigo-100 tracking-tight leading-snug mb-5">
              AI &amp; Full-Stack Developer
            </h2>

            {/* Evidence-Based What-I-Build Supporting Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-sans">
              {personal.heroSubtext}
            </p>

            {/* Primary Action Buttons (Section 19) */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              {/* PRIMARY CTA: View Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-sm font-semibold tracking-wide transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 group focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* SECONDARY CTA: Download Resume */}
              <a
                href={social.resumeUrl || "/resume.pdf"}
                download="SAKTHIVEL_B_RESUME.pdf"
                onClick={() => onShowToast("Downloading B. Sakthivel - Resume (PDF)...", "success")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 text-slate-200 font-sans text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </a>

              {/* Developer Terminal Toggle */}
              <button
                type="button"
                onClick={() => setShowTerminal(!showTerminal)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-indigo-950/30 hover:bg-indigo-950/60 border border-indigo-500/20 text-indigo-300 font-mono text-xs transition-all focus-visible:ring-2 focus-visible:ring-indigo-400"
                title="Toggle developer bash console"
                aria-expanded={showTerminal}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>{showTerminal ? "Hide Console" : "Dev Console"}</span>
              </button>
            </div>

            {/* Recruiter Channels: GitHub, LinkedIn, Email */}
            <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-white/[0.08] w-full sm:w-auto text-xs font-mono text-slate-400">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile (sakthivel-54)"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-indigo-400/60" />
              </a>

              <a
                href={`mailto:${social.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>{social.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3:4 Portrait Frame & Status Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative flex flex-col items-center group">
              {/* Restrained Soft Radial Backdrop */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-indigo-500/15 via-sky-500/15 to-purple-600/15 rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Portrait Photo Container (3:4 aspect ratio) */}
              <div className="relative w-[270px] h-[360px] sm:w-[300px] sm:h-[400px] rounded-[26px] p-[2px] bg-gradient-to-b from-indigo-500/40 via-sky-400/20 to-indigo-600/30 shadow-2xl shadow-black/80 backdrop-blur-md">
                <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-[#070912]">
                  <img
                    src="/profile.jpg"
                    alt="B. Sakthivel — AI & Full-Stack Developer"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    fetchPriority="high"
                  />
                  {/* Subtle bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Subtle Technical Corner Accents */}
                <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-indigo-400/60 rounded-tl pointer-events-none" />
                <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-indigo-400/60 rounded-tr pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-indigo-400/60 rounded-bl pointer-events-none" />
                <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-indigo-400/60 rounded-br pointer-events-none" />
              </div>

              {/* Floating Live Status Card */}
              <div className="absolute -bottom-5 -right-2 sm:-right-4 max-w-[240px] p-3 rounded-xl bg-[#090C16]/95 backdrop-blur-xl border border-indigo-500/30 shadow-xl shadow-black/90 flex items-start gap-2.5 z-20 transition-all duration-300 hover:scale-[1.02] hover:border-indigo-400/50">
                <div className="p-1.5 rounded-lg bg-indigo-500/15 text-indigo-400 border border-indigo-500/25 shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-indigo-400 animate-pulse" />
                </div>
                <div className="text-left font-sans">
                  <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-indigo-300 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>{personal.statusCard.status}</span>
                  </div>
                  <div className="text-xs font-bold text-white tracking-tight mt-0.5">
                    {personal.statusCard.projectName}
                  </div>
                  <div className="text-[10px] text-slate-400 leading-tight mt-0.5">
                    {personal.statusCard.tagline}
                  </div>
                </div>
              </div>

              {/* Floating Tech Tag (Top Left) */}
              <div className="absolute -top-3 -left-2 sm:-left-4 px-3 py-1 rounded-full bg-[#090C16]/95 backdrop-blur-xl border border-indigo-500/25 text-[10.5px] font-mono text-slate-200 shadow-lg flex items-center gap-1.5 z-20">
                <Sparkles className="w-3 h-3 text-sky-400" />
                <span>AI &amp; Full-Stack</span>
              </div>
            </div>

            {/* Academic Standing Indicator */}
            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-slate-400">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>{personal.college} • {personal.currentStatus}</span>
            </div>
          </div>
        </div>

        {/* Developer Console Interactive Container */}
        {showTerminal && (
          <div className="mt-10 animate-in fade-in slide-in-from-top-4 duration-300">
            <DeveloperTerminal />
          </div>
        )}
      </div>
    </section>
  );
};
