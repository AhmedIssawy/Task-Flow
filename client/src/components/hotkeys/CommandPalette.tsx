/**
 * Modern Command Palette - Clean Design with Smooth Scrolling
 */

'use client';

import React, { useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Command } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

import { CommandSearch } from './CommandSearch';
import { useHotkeyContext } from '@/providers/HotkeyProvider';

export function CommandPalette() {
  const { isCommandPaletteOpen, closeCommandPalette } = useHotkeyContext();
  const { isRTL } = useLanguage();
  const t = useTranslations();

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isCommandPaletteOpen) {
        closeCommandPalette();
      }
    };

    if (isCommandPaletteOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isCommandPaletteOpen, closeCommandPalette]);

  return (
    <Dialog open={isCommandPaletteOpen} onOpenChange={closeCommandPalette}>
      <DialogContent 
        className={cn(
          "max-w-2xl w-[90vw] max-h-[80vh] p-0 gap-0 border-0 shadow-2xl overflow-hidden",
          "bg-gradient-to-b from-background/98 to-background/95 backdrop-blur-xl",
          "animate-in fade-in-0 zoom-in-95 duration-300",
          isRTL ? "direction-rtl" : "direction-ltr"
        )}
        aria-describedby="command-palette-description"
      >
        <div id="command-palette-description" className="sr-only">
          {t('hotkeys.commandPalette')} - {t('hotkeys.searchCommands')}
        </div>
        
        {/* Modern Header */}
        <div className={cn(
          "flex items-center gap-3 px-6 py-4 border-b border-border/20",
          "bg-gradient-to-r from-primary/5 to-primary/10",
          isRTL ? "flex-row-reverse" : "flex-row"
        )}>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-sm"></div>
            <div className="relative p-2.5 rounded-xl bg-primary/10 border border-primary/20">
              <Command className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className={cn(
            "flex-1",
            isRTL ? "text-right" : "text-left"
          )}>
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              Command Palette
            </h2>
            <p className="text-sm text-muted-foreground/80">
              Search and execute commands instantly
            </p>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-xs font-mono font-semibold text-primary">Ctrl+Alt+P</span>
          </div>
        </div>

        {/* Main Content with Enhanced Scrolling */}
        <div className="relative">
          <CommandSearch />
        </div>

        {/* Enhanced Footer */}
        <div className={cn(
          "flex items-center justify-between px-6 py-4",
          "bg-gradient-to-r from-muted/30 to-muted/50 border-t border-border/20",
          "backdrop-blur-sm",
          isRTL ? "flex-row-reverse" : "flex-row"
        )}>
          <div className={cn(
            "flex items-center gap-6",
            isRTL ? "flex-row-reverse" : "flex-row"
          )}>
            <div className={cn(
              "flex items-center gap-2 text-xs text-muted-foreground",
              isRTL ? "flex-row-reverse" : "flex-row"
            )}>
              <div className="flex items-center gap-1">
                <span className="text-sm">↑↓</span>
                <span>Navigate</span>
              </div>
            </div>
            <div className={cn(
              "flex items-center gap-2 text-xs text-muted-foreground",
              isRTL ? "flex-row-reverse" : "flex-row"
            )}>
              <kbd className="px-2 py-1 text-xs bg-background/60 border border-border/40 rounded-md shadow-sm font-mono">
                Enter
              </kbd>
              <span>Execute</span>
            </div>
            <div className={cn(
              "flex items-center gap-2 text-xs text-muted-foreground",
              isRTL ? "flex-row-reverse" : "flex-row"
            )}>
              <kbd className="px-2 py-1 text-xs bg-background/60 border border-border/40 rounded-md shadow-sm font-mono">
                Esc
              </kbd>
              <span>Close</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground/60 font-medium">
            Quick Commands
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}