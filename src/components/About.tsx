import React from 'react';
import { GraduationCap, Code, Briefcase, Sparkles, ArrowRight } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const About: React.FC = () => {
  const { personal } = portfolio;

  const cardIcons: Record<string, React.ReactNode> = {
    Education: <GraduationCap className="w-5 h-5 text-indigo-400" />,
    Focus: <Code className="w-5 h-5 text-sky-400" />,
    Currently: <Briefcase className="w-5 h-5 text-emerald-400" />,
    Research: <Sparkles className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="about" className="section-wrapper relative border-t border-white/[0.07] bg-[#07090F]/70">
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-12 lg:mb-16">
          <div className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-2">
            02 // ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Background &amp; Engineering Focus
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-3" />
        </div>

        {/* Split Layout: Narrative & Highlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Human, Evidence-Oriented Story */}
          <div className="lg:col-span-6 space-y-5 font-sans">
            {personal.aboutSummary.map((para, idx) => (
              <p key={idx} className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {para}
              </p>
            ))}

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
              >
                <span>Have an opportunity or technical question? Let&apos;s connect</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Information Highlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personal.aboutCards.map((card, idx) => (
              <div 
                key={idx}
                className="glass-panel p-5 sm:p-6 rounded-2xl flex flex-col justify-between group hover:border-indigo-500/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      {card.title}
                    </span>
                    <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform">
                      {cardIcons[card.title] || <Code className="w-5 h-5 text-indigo-400" />}
                    </div>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight mb-1">
                    {card.value}
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-sans leading-relaxed pt-3 border-t border-white/[0.06]">
                  {card.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
