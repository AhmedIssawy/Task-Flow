/**
 * Command search tab component
 */

'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Search, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

import { CommandItem } from './CommandItem';
import { useHotkeyContext } from '@/providers/HotkeyProvider';
import type { CommandPaletteItem } from '@/types/hotkeys';

export function CommandSearch() {
  const { getAvailableCommands, executeCommand, closeCommandPalette } = useHotkeyContext();
  const { isRTL } = useLanguage();
  const t = useTranslations();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Get all available commands
  const allCommands = useMemo(() => getAvailableCommands(), [getAvailableCommands]);

  // Filter commands based on search query
  const filteredCommands = useMemo(() => {
    if (!searchQuery.trim()) return allCommands;
    
    const query = searchQuery.toLowerCase();
    return allCommands.filter(command => 
      command.title.toLowerCase().includes(query) ||
      command.description.toLowerCase().includes(query) ||
      command.hotkey.toLowerCase().includes(query) ||
      command.category.toLowerCase().includes(query)
    );
  }, [allCommands, searchQuery]);

  // Group commands by category
  const groupedCommands = useMemo(() => {
    const groups: Record<string, CommandPaletteItem[]> = {};
    filteredCommands.forEach(command => {
      if (!groups[command.category]) {
        groups[command.category] = [];
      }
      groups[command.category].push(command);
    });
    return groups;
  }, [filteredCommands]);

  // Reset selected index when filtered commands change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredCommands]);

  // Focus search input when component mounts
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target !== searchInputRef.current) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredCommands.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : prev);
          break;
        case 'Enter':
          event.preventDefault();
          if (filteredCommands[selectedIndex]) {
            executeCommand(filteredCommands[selectedIndex].id);
          }
          break;
        case 'Tab':
          // Let the parent handle tab switching
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [filteredCommands, selectedIndex, executeCommand]);

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const selectedElement = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  const handleCommandClick = (commandId: string) => {
    executeCommand(commandId);
  };

  return (
    <div className="flex flex-col h-[500px] overflow-hidden">
      {/* Enhanced Search Input */}
      <div className={cn(
        "flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-muted/20 to-muted/30",
        isRTL ? "flex-row-reverse" : "flex-row"
      )}>
        <div className="relative">
          <Search className="h-5 w-5 text-primary/70" />
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-sm -z-10"></div>
        </div>
        <Input
          ref={searchInputRef}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t('hotkeys.searchCommands')}
          className={cn(
            "border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0",
            "text-base placeholder:text-muted-foreground/60 font-medium",
            "transition-all duration-200",
            isRTL ? "text-right" : "text-left"
          )}
        />
      </div>

      {/* Enhanced Results with Smooth Scrolling */}
      <ScrollArea 
        className="flex-1 px-2 overflow-hidden" 
        ref={listRef}
        style={{
          scrollBehavior: 'smooth',
          scrollbarWidth: 'thin',
        }}
      >
        <div className="py-2">
          {filteredCommands.length === 0 ? (
            <div className={cn(
              "flex flex-col items-center justify-center py-12 text-center",
              isRTL ? "text-right" : "text-left"
            )}>
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-muted/30 rounded-full blur-lg"></div>
                <div className="relative p-4 rounded-full bg-muted/20 border border-border/30">
                  <Search className="h-8 w-8 text-muted-foreground/60" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t('hotkeys.noResults')}
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Try searching for commands like "dashboard", "settings", or "theme"
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(groupedCommands).map(([category, commands]) => (
                <div key={category} className="space-y-3">
                  {/* Enhanced Category Header */}
                  <div className={cn(
                    "flex items-center gap-3 px-4 py-2",
                    isRTL ? "flex-row-reverse" : "flex-row"
                  )}>
                    <div className="relative">
                      <Badge 
                        variant="secondary" 
                        className="text-xs font-semibold px-3 py-1.5 bg-primary/10 text-primary border-primary/20"
                      >
                        {t(`hotkeys.categories.${category}`)}
                      </Badge>
                      <div className="absolute inset-0 bg-primary/5 rounded-full blur-sm -z-10"></div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
                    <span className="text-xs text-muted-foreground/60 font-medium">
                      {commands.length} {commands.length === 1 ? 'command' : 'commands'}
                    </span>
                  </div>

                  {/* Enhanced Commands Grid */}
                  <div className="space-y-2 px-2">
                    {commands.map((command, index) => {
                      const globalIndex = filteredCommands.findIndex(c => c.id === command.id);
                      return (
                        <CommandItem
                          key={command.id}
                          command={command}
                          isSelected={globalIndex === selectedIndex}
                          onClick={() => handleCommandClick(command.id)}
                          dataIndex={globalIndex}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}