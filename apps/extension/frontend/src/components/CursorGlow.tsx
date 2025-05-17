
import React from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

interface CursorGlowProps {
  enabled?: boolean;
}

const CursorGlow: React.FC<CursorGlowProps> = ({ enabled = true }) => {
  const { x, y } = useMousePosition();
  
  if (!enabled) return null;
  
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 opacity-0 md:opacity-100 overflow-hidden"
      style={{ 
        maskImage: 'radial-gradient(circle, black, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(circle, black, transparent 80%)',
      }}
    >
      <div 
        className="absolute bg-gradient-to-r from-[#ffc2d8] via-[#fff0aa] to-[#a9e4dd] opacity-20 blur-3xl rounded-full"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          width: '400px',
          height: '400px',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease',
        }}
      />
    </div>
  );
};

export default CursorGlow;
