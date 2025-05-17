
import React, { useState } from 'react';
import { toast } from "@/components/ui/use-toast";
import { ThemeProvider } from '@/context/ThemeContext';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import StatusMessage, { VerificationStatus } from '@/components/StatusMessage';
import VerifyButton from '@/components/VerifyButton';
import FuzzyCheckmark from '@/components/FuzzyCheckmark';
import CursorGlow from '@/components/CursorGlow';
import { cursorEffects } from '@/config/cursorEffects';

const Index = () => {
  const [status, setStatus] = useState<VerificationStatus>('idle');

  const handleVerify = () => {
    // Simulate verification process
    setStatus('loading');
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Random success/failure for demonstration
      const isSuccess = Math.random() > 0.3;
      
      if (isSuccess) {
        setStatus('success');
        toast({
          title: "Verification Successful",
          description: "Your identity is secured with zero-knowledge proofs.",
        });
      } else {
        setStatus('error');
        toast({
          title: "Verification Failed",
          description: "Please try again or contact support.",
          variant: "destructive",
        });
      }
    }, 2500);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col p-6 relative dark">
        {/* Cursor glow effect */}
        <CursorGlow enabled={cursorEffects.enableGlow} />
        
        <ThemeToggle />
        
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-xs mx-auto">
          <Logo />
          
          <div className="w-full space-y-4 mt-6">
            <h1 className="text-xl font-semibold text-center">Private Identity Verification</h1>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Secure your identity with zero-knowledge proofs technology
            </p>
            
            <VerifyButton 
              status={status} 
              onClick={handleVerify} 
            />
            
            <StatusMessage status={status} />
          </div>
          
          <div className="mt-auto pt-6 w-full">
            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground text-center">
                Your data remains private. Zero-knowledge proofs ensure security without revealing personal information.
              </p>
              <div className="flex items-center justify-center mt-4 space-x-2">
                <FuzzyCheckmark />
                <p className="text-xs text-muted-foreground">
                  Once installed you will see a verified check mark next to users that have verified their identity using PrivID on Bluesky and other AT Protocol applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
