/**
 * Hotkey discovery helper - bottom-right corner notification
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Keyboard, X, Command } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useHotkeyContext } from '@/providers/HotkeyProvider';
import { cn } from '@/lib/utils';

export function HotkeyHelper() {
  const { isRTL } = useLanguage();
  const { openCommandPalette } = useHotkeyContext();
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  // Auto-hide after first command palette use
  useEffect(() => {
    const hasUsedCommandPalette = localStorage.getItem('hotkey-helper-used');
    if (hasUsedCommandPalette) {
      setIsVisible(false);
    }
  }, []);

  // Hide helper when command palette is used
  const handleOpenCommandPalette = () => {
    openCommandPalette();
    localStorage.setItem('hotkey-helper-used', 'true');
    setIsVisible(false);
  };

  // Dismiss helper permanently
  const handleDismiss = () => {
    localStorage.setItem('hotkey-helper-dismissed', 'true');
    setIsVisible(false);
  };

  // Check if user has dismissed it permanently
  useEffect(() => {
    const isDismissed = localStorage.getItem('hotkey-helper-dismissed');
    if (isDismissed) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed bottom-4 z-50 transition-all duration-300 ease-in-out",
      isRTL ? "left-4" : "right-4"
    )}>
      {isMinimized ? (
        // Minimized state - just a small keyboard icon
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="secondary"
                className="h-10 w-10 rounded-full shadow-lg border border-border/50 bg-background/95 backdrop-blur-sm hover:bg-primary/10"
                onClick={() => setIsMinimized(false)}
              >
                <Keyboard className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top" className="mb-2">
              <p className="text-sm">Keyboard shortcuts available</p>
              <p className="text-xs text-muted-foreground">Click to expand</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        // Expanded state - full helper card
        <div className={cn(
          "bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-lg p-4 max-w-sm",
          "animate-in slide-in-from-bottom-2 fade-in-0 duration-500"
        )}>
          {/* Header */}
          <div className={cn(
            "flex items-center justify-between mb-3",
            isRTL ? "flex-row-reverse" : "flex-row"
          )}>
            <div className={cn(
              "flex items-center gap-2",
              isRTL ? "flex-row-reverse" : "flex-row"
            )}>
              <div className="p-1.5 rounded-md bg-primary/10">
                <Command className="h-4 w-4 text-primary" />
              </div>
              <h4 className="text-sm font-semibold text-foreground">
                Keyboard Shortcuts
              </h4>
            </div>
            <div className={cn(
              "flex items-center gap-1",
              isRTL ? "flex-row-reverse" : "flex-row"
            )}>
              <Button
                size="sm"
                variant="ghost"
                className="h-6 w-6 p-0 hover:bg-muted"
                onClick={() => setIsMinimized(true)}
              >
                <span className="text-xs">−</span>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-6 w-6 p-0 hover:bg-destructive/10 hover:text-destructive"
                onClick={handleDismiss}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <p className={cn(
              "text-xs text-muted-foreground",
              isRTL ? "text-right" : "text-left"
            )}>
              Use keyboard shortcuts to navigate faster and boost your productivity.
            </p>

            {/* Main CTA */}
            <Button
              onClick={handleOpenCommandPalette}
              className={cn(
                "w-full justify-between text-sm",
                isRTL ? "flex-row-reverse" : "flex-row"
              )}
              variant="outline"
            >
              <div className={cn(
                "flex items-center gap-2",
                isRTL ? "flex-row-reverse" : "flex-row"
              )}>
                <Command className="h-4 w-4" />
                <span>Open Command Palette</span>
              </div>
              <Badge variant="secondary" className="text-xs font-mono">
                Ctrl+Alt+P
              </Badge>
            </Button>

            {/* Quick shortcuts preview */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-foreground">Quick shortcuts:</p>
              <div className="grid grid-cols-1 gap-1 text-xs">
                <div className={cn(
                  "flex items-center justify-between",
                  isRTL ? "flex-row-reverse" : "flex-row"
                )}>
                  <span className="text-muted-foreground">Dashboard</span>
                  <Badge variant="outline" className="text-xs font-mono px-1.5 py-0.5">
                    Ctrl+Alt+H
                  </Badge>
                </div>
                <div className={cn(
                  "flex items-center justify-between",
                  isRTL ? "flex-row-reverse" : "flex-row"
                )}>
                  <span className="text-muted-foreground">Settings</span>
                  <Badge variant="outline" className="text-xs font-mono px-1.5 py-0.5">
                    Ctrl+Alt+S
                  </Badge>
                </div>
                <div className={cn(
                  "flex items-center justify-between",
                  isRTL ? "flex-row-reverse" : "flex-row"
                )}>
                  <span className="text-muted-foreground">Toggle Theme</span>
                  <Badge variant="outline" className="text-xs font-mono px-1.5 py-0.5">
                    Ctrl+Alt+T
                  </Badge>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <p className="text-xs text-muted-foreground opacity-75">
              This helper will disappear after you use the command palette.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}