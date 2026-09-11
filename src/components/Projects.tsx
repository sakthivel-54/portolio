import React from 'react';
import { portfolio } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  onOpenCaseStudy: () => void;
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy, onShowToast }) => {
  const { projects } = portfolio;

  return (
    <section id="more-projects" className="py-20 border-t border-white/[0.06] relative">
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono text-indigo-400 tracking-wider uppercase mb-2">
              05 // VERIFIED ARCHITECTURES
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Featured Systems &amp; Projects
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded-full mt-3" />
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-md">
            Full-stack enterprise applications, relational database architectures, and applied AI research concepts.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
              onShowToast={onShowToast}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
