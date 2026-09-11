import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [cursorState, setCursorState] = useState<'default' | 'pointer' | 'view' | 'text'>('default');
  const [isClicking, setIsClicking] = useState(false);

  const mousePos = useRef({ x: -200, y: -200 });
  const trailPos = useRef({ x: -200, y: -200 });
  const isVisibleRef = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer and true hover capability (Section 16)
    const isFinePointer = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
        if (glowRef.current) glowRef.current.style.opacity = '1';
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('[data-cursor="view"]')) {
        setCursorState('view');
      } else if (target.closest('input, textarea')) {
        setCursorState('text');
      } else if (target.closest('a, button, [role="button"], select, label')) {
        setCursorState('pointer');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
      if (glowRef.current) glowRef.current.style.opacity = '1';
    };

    const loop = () => {
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.18;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      {/* Ambient Subtle Spotlight Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[380px] h-[380px] rounded-full pointer-events-none z-0 transition-opacity duration-300 hidden md:block opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, rgba(56, 189, 248, 0.02) 45%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Trailing Elastic Halo Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center font-mono text-[10px] tracking-wider uppercase font-bold text-white transition-all duration-150 ease-out hidden md:flex opacity-0 ${
          cursorState === 'view'
            ? 'w-[64px] h-[64px] bg-indigo-600/80 border border-white/30 shadow-lg shadow-indigo-600/30 backdrop-blur-sm'
            : cursorState === 'pointer'
            ? 'w-[40px] h-[40px] bg-indigo-500/15 border border-indigo-400/50 shadow-sm shadow-indigo-500/20 backdrop-blur-[2px]'
            : cursorState === 'text'
            ? 'w-[24px] h-[24px] bg-sky-500/10 border border-sky-400/40'
            : 'w-[28px] h-[28px] bg-white/[0.04] border border-white/15'
        } ${isClicking ? 'scale-75' : 'scale-100'}`}
        style={{ willChange: 'transform' }}
      >
        {cursorState === 'view' && <span>VIEW ↗</span>}
      </div>

      {/* Center Precision Pointer Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 transition-transform duration-75 hidden md:block opacity-0 ${
          cursorState === 'view'
            ? 'w-0 h-0 opacity-0'
            : cursorState === 'pointer'
            ? 'w-1.5 h-1.5 bg-indigo-400 shadow-sm shadow-indigo-400'
            : 'w-1.5 h-1.5 bg-white shadow-xs shadow-white'
        } ${isClicking ? 'scale-150' : 'scale-100'}`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
};
