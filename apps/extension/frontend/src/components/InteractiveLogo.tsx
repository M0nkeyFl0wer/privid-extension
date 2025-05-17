
import React, { useRef, useEffect } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

interface InteractiveLogoProps {
  enabled?: boolean;
  children: React.ReactNode;
  innerRef?: React.RefObject<HTMLElement>;
}

const InteractiveLogo: React.FC<InteractiveLogoProps> = ({ enabled = true, children, innerRef }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();
  
  useEffect(() => {
    if (!enabled) return;
    
    // Use either the provided innerRef (for eyeball effect) or the container ref
    const targetRef = innerRef || ref;
    if (!targetRef.current) return;
    
    const handleMovement = () => {
      const element = targetRef.current;
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from cursor to logo center
      const distX = x - centerX;
      const distY = y - centerY;
      
      // Only respond if cursor is relatively close to the logo
      const maxDistance = 400; // Increased max distance for earlier response
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      if (distance < maxDistance) {
        // Calculate movement factor (stronger when closer)
        const factor = 1 - distance / maxDistance;
        const maxTilt = 30; // Significantly increased max rotation degree for more dramatic effect
        
        // Apply more pronounced rotation based on cursor position
        const rotateX = distY * factor * (maxTilt / 100);
        const rotateY = -distX * factor * (maxTilt / 100);
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      } else {
        // Reset when cursor is far away
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }
    };
    
    handleMovement();
    
    window.addEventListener('mousemove', handleMovement);
    return () => window.removeEventListener('mousemove', handleMovement);
  }, [x, y, enabled, innerRef]);
  
  if (!enabled) {
    return <>{children}</>;
  }
  
  return (
    <div 
      ref={ref} 
      className="transition-transform duration-200 ease-out will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export default InteractiveLogo;
