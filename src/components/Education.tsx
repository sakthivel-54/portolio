import React from 'react';
import { GraduationCap, MapPin, Award, CheckCircle } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const Education: React.FC = () => {
  const { education } = portfolio;

  return (
    <section id="education" className="py-24 border-t border-white/[0.08] relative bg-[#07090F]/50">
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="text-xs font-mono text-indigo-400 tracking-wider uppercase mb-2">
            09 // EDUCATION &amp; FOUNDATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Academic Background
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-3" />
        </div>

        {/* Education Highlight Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10 relative overflow-hidden">
          <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 shrink-0 mt-1">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-400 tracking-wide uppercase block mb-1">
                  UNDERGRADUATE DEGREE
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  {education.degree}
                </h3>
                <div className="text-base font-semibold text-slate-200 mt-1 font-mono">
                  {education.institution}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1.5 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            {/* Authoritative CGPA Callout (Strictly 8.54 / 10 Everywhere) */}
            <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30 flex flex-col items-start sm:items-end font-mono">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                AUTHORITATIVE CGPA
              </span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 my-0.5">
                {education.cgpa}
              </span>
              <span className="text-xs text-indigo-300">
                {education.cgpaNote}
              </span>
              <span className="text-[10px] text-slate-400 mt-1">
                DURATION: {education.duration} ({education.currentStatus})
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-400" />
              <span>CURRICULUM RIGOR &amp; ACADEMIC HIGHLIGHTS</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {education.highlights.map((highlight, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-slate-300 leading-relaxed font-sans">
                  <span className="text-indigo-400 font-mono font-bold block mb-1.5">PILLAR 0{idx + 1}</span>
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* Foundational Secondary Academic Record */}
          {education.secondaryEducation && education.secondaryEducation.length > 0 && (
            <div className="pt-6 mt-6 border-t border-white/10">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>FOUNDATIONAL SECONDARY ACADEMIC RECORD</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {education.secondaryEducation.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-mono text-indigo-400 font-bold">{item.standard}</span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold">
                          {item.score}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-white">{item.school}</div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">{item.location}</div>
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 mt-2">COMPLETED: {item.year}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
