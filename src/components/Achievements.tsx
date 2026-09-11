import React from 'react';
import { Trophy, Award, Users, Calendar, ShieldCheck } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const Achievements: React.FC = () => {
  const { achievements } = portfolio;

  const getIcon = (category: string) => {
    switch (category) {
      case 'Competition':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Hackathon':
        return <Award className="w-5 h-5 text-indigo-400" />;
      case 'Leadership':
        return <Users className="w-5 h-5 text-sky-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 border-t border-white/[0.08] relative bg-[#07090F]/50">
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono text-indigo-400 tracking-wider uppercase mb-2">
              08 // ACHIEVEMENTS &amp; HONORS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Honors &amp; Recognition
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded-full mt-3" />
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-sm">
            Competitive technical awards, national hackathon showcases, and student symposium leadership.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                    {getIcon(item.category)}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-semibold">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mb-1.5">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors leading-snug">
                  {item.title}
                </h3>

                <div className="text-xs font-semibold text-slate-200 mb-1 font-mono">
                  {item.event}
                </div>

                <div className="text-[11px] font-mono text-indigo-400 mb-3">
                  {item.organizer}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{item.category}</span>
                <span className="text-emerald-400 font-medium">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
