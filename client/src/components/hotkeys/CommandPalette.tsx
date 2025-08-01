/**
 * Main command palette component - VS Code style
 */

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Search, Command, Keyboard } from 'lucide-react';
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
          "max-w-2xl p-0 gap-0 bg-background/95 backdrop-blur-md border border-border/50 shadow-2xl",
          isRTL ? "direction-rtl" : "direction-ltr"
        )}
        aria-describedby="command-palette-description"
      >
        <div id="command-palette-description" className="sr-only">
          {t('hotkeys.commandPalette')} - {t('hotkeys.searchCommands')}
        </div>
        
        {/* Header */}
        <div className={cn(
          "flex items-center gap-3 px-4 py-3 border-b border-border/50 bg-muted/30",
          isRTL ? "flex-row-reverse" : "flex-row"
        )}>
          <div className="p-2 rounded-lg bg-primary/10">
            <Command className="h-4 w-4 text-primary" />
          </div>
          <div className={cn(
            "flex-1",
            isRTL ? "text-right" : "text-left"
          )}>
            <h2 className="text-sm font-semibold text-foreground">
              {t('hotkeys.commandPalette')}
            </h2>
            <p className="text-xs text-muted-foreground">
              {t('hotkeys.searchCommands')}
            </p>
          </div>
          <Badge variant="outline" className="text-xs">
            Ctrl+Alt+P
          </Badge>
        </div>

        {/* Main Content */}
        <CommandSearch />

        {/* Footer */}
        <div className={cn(
          "flex items-center justify-between px-4 py-3 bg-muted/50 border-t border-border/50 text-xs text-muted-foreground overflow-hidden",
          isRTL ? "flex-row-reverse" : "flex-row"
        )}>
          <div className={cn(
            "flex items-center gap-4 flex-wrap",
            isRTL ? "flex-row-reverse" : "flex-row"
          )}>
            <div className={cn(
              "flex items-center gap-1",
              isRTL ? "flex-row-reverse" : "flex-row"
            )}>
              <Keyboard className="h-3 w-3" />
              <span>↑↓</span>
              <span className="hidden sm:inline">Navigate</span>
            </div>
            <div className={cn(
              "flex items-center gap-1",
              isRTL ? "flex-row-reverse" : "flex-row"
            )}>
              <kbd className="px-1.5 py-0.5 text-xs bg-background/80 border border-border/50 rounded shadow-sm">Enter</kbd>
              <span className="hidden sm:inline">Execute</span>
            </div>
            <div className={cn(
              "flex items-center gap-1",
              isRTL ? "flex-row-reverse" : "flex-row"
            )}>
              <kbd className="px-1.5 py-0.5 text-xs bg-background/80 border border-border/50 rounded shadow-sm">Esc</kbd>
              <span className="hidden sm:inline">Close</span>
            </div>
          </div>
          <div className={cn(
            "flex items-center gap-1 text-xs opacity-75",
            isRTL ? "flex-row-reverse" : "flex-row"
          )}>
            <span className="hidden md:inline">Quick</span>
            <span>Commands</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}