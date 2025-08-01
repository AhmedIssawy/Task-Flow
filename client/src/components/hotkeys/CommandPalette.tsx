/**
 * Main command palette component - VS Code style
 */

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Command, HelpCircle, Keyboard } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

import { CommandSearch } from './CommandSearch';
import { HelpModal } from './HelpModal';
import { useHotkeyContext } from '@/providers/HotkeyProvider';

export function CommandPalette() {
  const { isCommandPaletteOpen, closeCommandPalette } = useHotkeyContext();
  const { isRTL } = useLanguage();
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState('search');

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

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className={cn(
            "grid w-full grid-cols-2 bg-muted/30 border-b border-border/50 rounded-none h-auto p-1",
            isRTL ? "direction-rtl" : "direction-ltr"
          )}>
            <TabsTrigger 
              value="search" 
              className={cn(
                "flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-md py-2",
                isRTL ? "flex-row-reverse" : "flex-row"
              )}
            >
              <Search className="h-4 w-4" />
              <span className="text-sm">{t('hotkeys.categories.navigation')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="help" 
              className={cn(
                "flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-md py-2",
                isRTL ? "flex-row-reverse" : "flex-row"
              )}
            >
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm">{t('hotkeys.help')}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="mt-0 p-0">
            <CommandSearch />
          </TabsContent>

          <TabsContent value="help" className="mt-0 p-0">
            <HelpModal />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className={cn(
          "flex items-center justify-between px-4 py-2 bg-muted/20 border-t border-border/50 text-xs text-muted-foreground",
          isRTL ? "flex-row-reverse" : "flex-row"
        )}>
          <div className={cn(
            "flex items-center gap-4",
            isRTL ? "flex-row-reverse" : "flex-row"
          )}>
            <div className={cn(
              "flex items-center gap-1",
              isRTL ? "flex-row-reverse" : "flex-row"
            )}>
              <Keyboard className="h-3 w-3" />
              <span>↑↓</span>
              <span>Navigate</span>
            </div>
            <div className={cn(
              "flex items-center gap-1",
              isRTL ? "flex-row-reverse" : "flex-row"
            )}>
              <kbd className="px-1.5 py-0.5 text-xs bg-muted border border-border/50 rounded">Enter</kbd>
              <span>Execute</span>
            </div>
            <div className={cn(
              "flex items-center gap-1",
              isRTL ? "flex-row-reverse" : "flex-row"
            )}>
              <kbd className="px-1.5 py-0.5 text-xs bg-muted border border-border/50 rounded">Esc</kbd>
              <span>Close</span>
            </div>
          </div>
          <div className={cn(
            "flex items-center gap-1",
            isRTL ? "flex-row-reverse" : "flex-row"
          )}>
            <span>Tab</span>
            <span>Switch</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}