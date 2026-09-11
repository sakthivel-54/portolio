import React, { useState } from 'react';
import { 
  FileCode, 
  Palette, 
  Code2, 
  Atom, 
  Coffee, 
  Binary, 
  Sparkles, 
  Cpu, 
  Activity, 
  GitBranch, 
  Github, 
  Terminal, 
  Layout, 
  Server, 
  Workflow, 
  Database, 
  HardDrive 
} from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { SkillCategory } from '../types';

export const Skills: React.FC = () => {
  const { skills } = portfolio;
  const categories: ('ALL' | SkillCategory)[] = [
    'ALL',
    'Frontend',
    'Programming',
    'Backend / Database',
    'AI / GenAI',
    'Tools'
  ];
  const [activeCategory, setActiveCategory] = useState<'ALL' | SkillCategory>('ALL');

  const filteredSkills = activeCategory === 'ALL'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const getTechIcon = (name: string) => {
    switch (name) {
      case 'HTML': return <FileCode className="w-5 h-5 text-orange-400" />;
      case 'CSS': return <Palette className="w-5 h-5 text-sky-400" />;
      case 'JavaScript': return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'React': return <Atom className="w-5 h-5 text-cyan-400" />;
      case 'Java': return <Coffee className="w-5 h-5 text-red-400" />;
      case 'Python': return <Binary className="w-5 h-5 text-emerald-400" />;
      case 'Spring Boot': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'REST APIs': return <Workflow className="w-5 h-5 text-indigo-400" />;
      case 'MySQL': return <Database className="w-5 h-5 text-sky-400" />;
      case 'MariaDB': return <HardDrive className="w-5 h-5 text-teal-400" />;
      case 'Generative AI': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Prompt Engineering': return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'AI Application Development': return <Activity className="w-5 h-5 text-pink-400" />;
      case 'Git': return <GitBranch className="w-5 h-5 text-orange-400" />;
      case 'GitHub': return <Github className="w-5 h-5 text-slate-200" />;
      case 'VS Code': return <Terminal className="w-5 h-5 text-blue-400" />;
      case 'Figma': return <Layout className="w-5 h-5 text-violet-400" />;
      default: return <Code2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="section-wrapper relative border-t border-white/[0.07]">
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <div className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-2">
            03 // TECHNICAL COMPETENCIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Skills &amp; Capabilities
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-3" />
        </div>

        {/* Accessible Category Filter Buttons (Section 13) */}
        <div 
          className="flex flex-wrap gap-2 mb-10" 
          role="group" 
          aria-label="Filter skills by technical category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/25 border border-indigo-500/50'
                  : 'bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] text-slate-300'
              }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel p-5 rounded-2xl flex items-start gap-4 group hover:border-indigo-500/40"
            >
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform shrink-0">
                {getTechIcon(skill.name)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-white tracking-tight truncate">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-slate-400 shrink-0">
                    {skill.category}
                  </span>
                </div>
                {skill.description && (
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {skill.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
