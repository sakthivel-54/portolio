import React from 'react';
import { 
  Github, 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  ShieldAlert, 
  Car, 
  BookOpen,
  UserCheck
} from 'lucide-react';
import { ProjectCardItem } from '../types';

interface ProjectCardProps {
  project: ProjectCardItem;
  onOpenCaseStudy: () => void;
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
  onShowToast,
}) => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'voxshield':
        return <ShieldAlert className="w-5 h-5 text-indigo-400" />;
      case 'vehicle-service-management':
        return <Car className="w-5 h-5 text-sky-400" />;
      case 'library-management':
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between group transition-all relative overflow-hidden hover:border-indigo-500/30">
      <div>
        {/* Top Number & Status Row */}
        <div className="flex items-center justify-between gap-2 mb-4 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base text-indigo-400">
              {project.number}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 uppercase">
              {project.category}
            </span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono">
            {project.status}
          </span>
        </div>

        {/* Project Header (WHAT) */}
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] shrink-0 mt-0.5">
            {getProjectIcon(project.id)}
          </div>
          <div>
            <h3 className="text-xl font-black text-white group-hover:text-indigo-300 transition-colors tracking-tight">
              {project.name}
            </h3>
            <div className="text-xs font-mono text-indigo-400 mt-0.5">
              {project.tagline}
            </div>
          </div>
        </div>

        {/* Role & Responsibility (MY ROLE) */}
        <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-slate-300">
          <UserCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
          <span>Role: {project.role}</span>
        </div>

        {/* Problem & Solution (WHY & WHAT) */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-sans">
          {project.description}
        </p>

        {/* Core Architecture Features (HOW) */}
        <div className="mb-6 space-y-2 font-sans text-xs">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-slate-400">
              <span className="text-indigo-400 font-bold">•</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Technology Tags (STACK) */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action & Source Bar (SOURCE & WORKING BUTTONS ONLY) */}
      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        {project.caseStudyAvailable ? (
          <button
            type="button"
            onClick={onOpenCaseStudy}
            className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors font-semibold focus-visible:ring-2 focus-visible:ring-indigo-400 rounded px-1"
          >
            <span>VIEW CASE STUDY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <span className="text-[11px] text-slate-400 font-mono">
            {project.sourceStatus}
          </span>
        )}

        <div className="flex items-center gap-2">
          {/* Only display verified direct repository links; never point to general profile */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onShowToast(`Accessing repository: ${project.name}`, 'info')}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label={`GitHub Repository for ${project.name}`}
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              className="p-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label={`Live Demo for ${project.name}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
