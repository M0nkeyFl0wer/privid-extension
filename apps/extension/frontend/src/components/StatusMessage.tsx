
import React from 'react';
import { cn } from '@/lib/utils';

export type VerificationStatus = 'idle' | 'loading' | 'success' | 'error';

interface StatusMessageProps {
  status: VerificationStatus;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ status }) => {
  const messages = {
    idle: 'Click the button to verify your identity',
    loading: 'Waiting for verification...',
    success: 'Verification successful! Your identity is secured.',
    error: 'Verification failed. Please try again.'
  };

  const iconClasses = "w-5 h-5 mr-2";
  
  const statusClasses = {
    idle: "text-muted-foreground",
    loading: "text-brand-pink dark:text-[#ffadc8] animate-pulse-subtle",
    success: "text-brand-teal-dark dark:text-brand-teal",
    error: "text-red-600 dark:text-red-400"
  };

  const renderIcon = () => {
    switch (status) {
      case 'loading':
        return (
          <svg className={cn(iconClasses, "animate-spin")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        );
      case 'success':
        return (
          <svg className={iconClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        );
      case 'error':
        return (
          <svg className={iconClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        );
      default:
        return (
          <svg className={iconClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
        );
    }
  };

  return (
    <div className={cn(
      "flex items-center justify-center px-4 py-3 rounded-lg mt-6 transition-all duration-300 animate-fade-in",
      "bg-secondary/20 dark:bg-true-black dark:border dark:border-dark-gray-medium/30",
      statusClasses[status]
    )}>
      {renderIcon()}
      <span>{messages[status]}</span>
    </div>
  );
};

export default StatusMessage;
