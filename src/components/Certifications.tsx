import React, { useState } from 'react';
import { ShieldCheck, BookOpen } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const Certifications: React.FC = () => {
  const { certifications } = portfolio;
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'Certification' | 'Professional Development'>('ALL');

  const filteredItems = activeFilter === 'ALL'
    ? certifications
    : certifications.filter((c) => c.type === activeFilter);

  const certCount = certifications.filter((c) => c.type === 'Certification').length;
  const devCount = certifications.filter((c) => c.type === 'Professional Development').length;

  return (
    <section id="certifications" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono text-indigo-400 tracking-wider uppercase mb-2">
              07 // CERTIFICATIONS &amp; PROFESSIONAL DEVELOPMENT
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Certifications &amp; Training
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded-full mt-3" />
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-sm">
            Formal technical credentials separated from industry workshops, symposiums, and professional visits.
          </p>
        </div>

        {/* Category Separation Filters (Section 26) */}
        <div 
          className="flex flex-wrap gap-2.5 mb-10"
          role="group"
          aria-label="Filter credentials by type"
        >
          <button
            type="button"
            onClick={() => setActiveFilter('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 ${
              activeFilter === 'ALL'
                ? 'bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/25 border border-indigo-500/50'
                : 'bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] text-slate-300'
            }`}
            aria-pressed={activeFilter === 'ALL'}
          >
            All Credentials ({certifications.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('Certification')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 ${
              activeFilter === 'Certification'
                ? 'bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/25 border border-indigo-500/50'
                : 'bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] text-slate-300'
            }`}
            aria-pressed={activeFilter === 'Certification'}
          >
            Certifications ({certCount})
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('Professional Development')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 ${
              activeFilter === 'Professional Development'
                ? 'bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/25 border border-indigo-500/50'
                : 'bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] text-slate-300'
            }`}
            aria-pressed={activeFilter === 'Professional Development'}
          >
            Professional Development &amp; Workshops ({devCount})
          </button>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => {
            const isCert = item.type === 'Certification';
            return (
              <div
                key={item.id}
                className="glass-panel rounded-xl p-5 border border-white/[0.08] hover:border-indigo-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono text-xs">
                    <span className="font-bold text-indigo-400 px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                      {item.issuer}
                    </span>
                    {item.date && (
                      <span className="text-[11px] text-slate-400">
                        {item.date}
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px]">
                  <span className={`flex items-center gap-1.5 ${isCert ? 'text-emerald-400' : 'text-sky-400'}`}>
                    {isCert ? <ShieldCheck className="w-3.5 h-3.5" /> : <BookOpen className="w-3.5 h-3.5" />}
                    <span>{item.type}</span>
                  </span>
                  <span className="text-slate-400 text-[10.5px]">Verified Entry</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
