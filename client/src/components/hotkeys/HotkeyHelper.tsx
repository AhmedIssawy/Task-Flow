/**
 * Simple hotkey helper - bottom-right corner button
 */

'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Keyboard } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useHotkeyContext } from '@/providers/HotkeyProvider';
import { cn } from '@/lib/utils';

export function HotkeyHelper() {
  const { isRTL } = useLanguage();
  const { openCommandPalette } = useHotkeyContext();

  return (
    <div className={cn(
      "fixed bottom-4 z-50",
      isRTL ? "left-4" : "right-4"
    )}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={openCommandPalette}
              size="sm"
              variant="secondary"
              className={cn(
                "h-10 px-3 rounded-full shadow-lg border border-border/50 bg-background/95 backdrop-blur-sm",
                "hover:bg-primary/10 hover:border-primary/30 transition-all duration-200",
                "flex items-center gap-2"
              )}
            >
              <Keyboard className="h-4 w-4" />
              <span className="text-xs font-mono font-semibold">Ctrl+Alt+P</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" className="mb-2">
            <p className="text-sm font-medium">Open Command Palette</p>
            <p className="text-xs text-muted-foreground">Access all keyboard shortcuts</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}