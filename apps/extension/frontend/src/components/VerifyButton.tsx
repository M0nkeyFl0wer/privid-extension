
import React from 'react';
import { cn } from '@/lib/utils';
import { VerificationStatus } from './StatusMessage';

interface VerifyButtonProps {
  status: VerificationStatus;
  onClick: () => void;
}

const VerifyButton: React.FC<VerifyButtonProps> = ({ status, onClick }) => {
  const isDisabled = status === 'loading';
  
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        "w-full py-3 px-6 rounded-xl font-medium text-primary-foreground transition-all duration-300",
        "bg-gradient-to-r from-[#ffc2d8] to-[#ffadc8] hover:from-[#ffadc8] hover:to-[#ff99b9]",
        "focus:outline-none focus:ring-2 focus:ring-[#ffc2d8]/50 focus:ring-opacity-50",
        "shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
        "dark:shadow-[0_4px_12px_rgba(255,173,200,0.3)]",
        isDisabled && "opacity-70 cursor-not-allowed hover:from-[#ffc2d8] hover:to-[#ffadc8] hover:shadow-md transform-none"
      )}
    >
      {status === 'loading' ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Verifying...
        </div>
      ) : (
        <>Verify Me</>
      )}
    </button>
  );
};

export default VerifyButton;
