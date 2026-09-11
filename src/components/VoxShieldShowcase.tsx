import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ArrowRight, 
  PhoneCall, 
  Volume2, 
  Play, 
  Pause, 
  Activity, 
  AlertTriangle,
  Sparkles
} from 'lucide-react';
import { portfolio } from '../data/portfolio';

interface VoxShieldShowcaseProps {
  onOpenCaseStudy: () => void;
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const VoxShieldShowcase: React.FC<VoxShieldShowcaseProps> = ({
  onOpenCaseStudy,
  onShowToast,
}) => {
  const { featuredProject } = portfolio;
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section id="projects" className="py-24 border-t border-white/[0.08] relative bg-[#07090F]/70">
      <div id="voxshield-section" className="absolute -top-24 left-0" />
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono text-indigo-400 tracking-wider uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span>04 // SIGNATURE AI ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {featuredProject.name}
            </h2>
            <div className="text-sm sm:text-base font-mono text-indigo-300 mt-1">
              {featuredProject.tagline}
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-semibold inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>ACM-VIT Code2Create 7.0 Showcase</span>
            </span>
            <span>Research Prototype • Academic Concept</span>
          </div>
        </div>

        {/* AI Security Showcase Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
          {/* Top Status & Integrity Telemetry Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 mb-8">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-200 font-bold uppercase tracking-wider">
                {featuredProject.badge}
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE PROTOTYPE
              </span>
            </div>

            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-indigo-400" />
              <span>DUAL-STREAM EDGE PIPELINE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Description & Feature Pillars */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-sans">
                {featuredProject.description}
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
                {featuredProject.pillars.map((pillar, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/20 transition-colors">
                    <div className="text-xs font-mono font-semibold text-slate-200 mb-1 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{pillar.title}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 leading-snug font-sans">
                      {pillar.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Case Study Trigger Button */}
              <div>
                <button
                  type="button"
                  onClick={onOpenCaseStudy}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-lg shadow-indigo-600/30 group focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <span>VIEW CASE STUDY SPECIFICATION</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Interactive AI Security Telemetry Console */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl bg-[#080B14] border border-indigo-500/30 p-5 shadow-2xl relative">
                {/* Active Monitor Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                    <PhoneCall className="w-4 h-4 animate-pulse" />
                    <span className="font-semibold tracking-wider">CALL MONITOR // ACTIVE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const next = !isPlaying;
                        setIsPlaying(next);
                        onShowToast(next ? "Acoustic stream visualizer running" : "Acoustic stream visualizer paused", "info");
                      }}
                      className="p-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono flex items-center gap-1 border border-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400"
                      title={isPlaying ? "Pause visualizer" : "Resume visualizer"}
                      aria-label={isPlaying ? "Pause audio stream visualizer" : "Resume audio stream visualizer"}
                    >
                      {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    </button>
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-300">
                      DESIGN TARGETS
                    </span>
                  </div>
                </div>

                {/* Simulated Audio Spectrogram Visualizer */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/10 mb-4">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
                      <span>16kHz Acoustic Spectrogram Stream</span>
                    </span>
                    <span className="text-indigo-400 font-bold">STREAMING</span>
                  </div>

                  <div className="h-12 flex items-center justify-between gap-1 px-1">
                    {[35, 60, 25, 85, 45, 95, 30, 75, 50, 80, 40, 90, 65, 30, 70, 85, 40, 60, 25, 75].map((val, idx) => (
                      <div
                        key={idx}
                        className="w-1 bg-gradient-to-t from-indigo-500 to-sky-400 rounded-full"
                        style={{
                          height: `${val}%`,
                          animation: isPlaying ? `audioWave 1.${(idx % 4) + 1}s ease-in-out infinite` : 'none',
                          animationDelay: `${idx * 0.04}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Architecture Metric Cards */}
                <div className="grid grid-cols-2 gap-2.5 mb-4 font-mono text-xs">
                  {featuredProject.conceptMetrics.map((metric, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 rounded-xl border bg-white/[0.02] border-white/[0.08] text-slate-300"
                    >
                      <div className="text-[9.5px] text-slate-400 uppercase tracking-wider mb-1">
                        {metric.label}
                      </div>
                      <div className="text-xl font-bold tracking-tight text-white flex items-baseline gap-1">
                        <span>{metric.value}</span>
                      </div>
                      <div className="text-[9px] text-slate-400 mt-1 leading-tight line-clamp-2">
                        {metric.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clear Ethics & Non-Fabrication Notice (Section 7) */}
                <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/20 text-[10px] text-amber-200/90 leading-relaxed font-mono flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    DESIGN TARGETS — NOT BENCHMARK RESULTS. Interface demonstrates concept architecture evaluated on test audio; formal benchmarks will follow standardized ASVspoof dataset evaluations.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
