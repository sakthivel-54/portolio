import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const Experience: React.FC = () => {
  const { missionLog } = portfolio;

  return (
    <section id="experience" className="py-24 border-t border-white/[0.08] relative bg-[#07090F]/50">
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="text-xs font-mono text-indigo-400 tracking-wider uppercase mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>06 // WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Professional Experience
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-3" />
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-3 md:ml-6 pl-6 md:pl-10 space-y-12">
          {missionLog.map((mission) => (
            <div key={mission.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#080A0F] border-2 border-indigo-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative hover:border-indigo-500/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{mission.status} INTERNSHIP</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400 mb-1">
                      {mission.organization} • {mission.location}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {mission.role}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                    <span className="flex items-center gap-1.5 bg-white/[0.04] px-3 py-1 rounded-lg border border-white/[0.08] text-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{mission.period}</span>
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3 h-3" />
                      <span>{mission.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                  {mission.summary}
                </p>

                {/* Directives / Responsibilities: Recruiter-Oriented 3-5 Bullets */}
                <div className="space-y-3 mb-6">
                  {mission.directives.map((directive, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{directive}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Stack Tags */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">TECHNOLOGIES:</span>
                  {mission.stack.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
