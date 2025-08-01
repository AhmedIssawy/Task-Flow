'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useHotkeyContext } from '@/contexts/HotkeyContext';
import { HelpCircle, Command } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HotkeyButtonProps {
  variant?: 'help' | 'command';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const HotkeyButton: React.FC<HotkeyButtonProps> = ({ 
  variant = 'help', 
  size = 'sm',
  className 
}) => {
  const { openHelp, openCommandPalette, isHotkeyEnabled } = useHotkeyContext();

  if (!isHotkeyEnabled) {
    return null;
  }

  const isHelp = variant === 'help';
  const Icon = isHelp ? HelpCircle : Command;
  const onClick = isHelp ? openHelp : openCommandPalette;
  const tooltipText = isHelp ? 'Keyboard shortcuts (Ctrl+/)' : 'Command palette (Ctrl+K)';
  
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-9 w-9', 
    lg: 'h-10 w-10'
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClick}
            className={cn(
              sizeClasses[size],
              'rounded-full hover:bg-primary/10 transition-all duration-200',
              className
            )}
            data-hotkey-button={variant}
          >
            <Icon className="h-4 w-4" />
            <span className="sr-only">{tooltipText}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};