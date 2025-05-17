
import React from 'react';

const FuzzyCheckmark: React.FC = () => {
  return (
    <div className="relative flex-shrink-0">
      {/* Fuzzy glow effect */}
      <div className="absolute -inset-0.5 bg-primary/30 rounded-full blur-sm animate-pulse-subtle" />
      
      {/* Main circle with gradient */}
      <div className="relative h-5 w-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
        {/* Checkmark */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="10" 
          height="10" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-primary-foreground"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  );
};

export default FuzzyCheckmark;
