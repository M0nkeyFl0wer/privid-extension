
import React, { useRef } from 'react';
import InteractiveLogo from './InteractiveLogo';
import { cursorEffects } from '@/config/cursorEffects';

const Logo: React.FC = () => {
  // Create a ref for the inner "eyeball" part of the logo
  const eyeballRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="flex items-center justify-center py-4 mb-2">
      <div className="relative h-14 w-14 bg-gradient-to-br from-[#ffc2d8] to-[#ffadc8] rounded-full flex items-center justify-center shadow-lg">
        <div className="absolute h-12 w-12 bg-background rounded-full flex items-center justify-center">
          <InteractiveLogo enabled={cursorEffects.enableInteractiveLogo} innerRef={eyeballRef}>
            <div 
              ref={eyeballRef}
              className="h-10 w-10 bg-gradient-to-br from-[#ffc2d8] to-[#ffadc8] rounded-full flex items-center justify-center text-white font-bold text-xl transition-transform duration-200 ease-out will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="h-8 w-8 flex items-center justify-center">
                <div className="h-6 w-6 rounded-md bg-gradient-to-r from-[#a9e4dd] via-[#fff0aa] to-[#ffc2d8] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </InteractiveLogo>
        </div>
      </div>
      <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ffc2d8] to-[#ffadc8] dark:from-[#ffadc8] dark:to-[#ffd6e5]">
        PrivID
      </span>
    </div>
  );
};

export default Logo;
