import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { portfolio } from '../data/portfolio';

interface CommandOutput {
  command: string;
  output: string | React.ReactNode;
}

export const DeveloperTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'init --status',
      output: 'SYSTEM ONLINE // ARCHITECTURE READY // TYPE "help" FOR AVAILABLE COMMANDS',
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        response = 'AVAILABLE COMMANDS: whoami, skills, projects, cgpa, contact, sudo sakthivel, clear';
        break;

      case 'whoami':
        response = `${portfolio.personal.name} // ${portfolio.personal.degree} (${portfolio.personal.duration}) // ${portfolio.personal.currentInternship.role} @ ${portfolio.personal.currentInternship.company}`;
        break;

      case 'skills':
        response = 'CORE STACK: Java, Python, JavaScript, React.js, Spring Boot, MySQL, JPA/Hibernate, Git, OCI';
        break;

      case 'projects':
        response = '01: VoxShield (Voice Scam & Deepfake Detection) | 02: Vehicle Service Management | 03: Library Management';
        break;

      case 'cgpa':
        response = `OFFICIAL CGPA: ${portfolio.personal.cgpa} (${portfolio.personal.cgpaNote}) // Adhiparasakthi Engineering College`;
        break;

      case 'contact':
        response = `LINKEDIN: ${portfolio.social.linkedin} | GITHUB: ${portfolio.social.github} | EMAIL: ${portfolio.social.email}`;
        break;

      case 'sudo sakthivel':
      case 'sudo':
        response = (
          <span className="text-emerald-400 font-bold">
            [CLEARANCE LEVEL 1 GRANTED] &quot;Engineered with code, architectural discipline, and curiosity. Ready for production-grade engineering missions.&quot;
          </span>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        response = `Command not recognized: "${cmd}". Type "help" for a list of system commands.`;
    }

    setHistory((prev) => [...prev, { command: input, output: response }]);
    setInput('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="hud-card rounded-2xl p-5 border border-white/10 font-mono text-xs overflow-hidden relative shadow-2xl">
      <div className="hud-corner-tl" />
      <div className="hud-corner-br" />

      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-slate-400">dev-terminal://sakthivel.hud</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-slate-400">
          <TerminalIcon className="w-3 h-3 text-indigo-400" />
          <span>BASH INTERFACE</span>
        </div>
      </div>

      <div className="max-h-48 overflow-y-auto space-y-2 mb-3 pr-2 scrollbar-thin">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-indigo-300">
              <span className="text-emerald-400">sakthivel@interface:~$</span>
              <span>{item.command}</span>
            </div>
            <div className="text-slate-300 pl-4 text-[11px] leading-relaxed">
              {item.output}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 border-t border-white/10">
        <span className="text-emerald-400 shrink-0">sakthivel@interface:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='try "help", "whoami", or "sudo sakthivel"...'
          className="w-full bg-transparent text-white placeholder-slate-600 focus:outline-none text-xs"
        />
        <button
          type="submit"
          className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors"
          aria-label="Execute command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
