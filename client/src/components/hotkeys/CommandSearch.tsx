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
    <div className="flex flex-col h-96">
      {/* Search Input */}
      <div className={cn(
        "flex items-center gap-3 px-4 py-3 border-b border-border/50",
        isRTL ? "flex-row-reverse" : "flex-row"
      )}>
        <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        <Input
          ref={searchInputRef}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t('hotkeys.searchCommands')}
          className={cn(
            "border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm",
            isRTL ? "text-right" : "text-left"
          )}
        />
      </div>

      {/* Results */}
      <ScrollArea className="flex-1" ref={listRef}>
        {filteredCommands.length === 0 ? (
          <div className={cn(
            "flex flex-col items-center justify-center py-8 text-center",
            isRTL ? "text-right" : "text-left"
          )}>
            <Search className="h-8 w-8 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">
              {t('hotkeys.noResults')}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Try a different search term
            </p>
          </div>
        ) : (
          <div className="p-2">
            {Object.entries(groupedCommands).map(([category, commands]) => (
              <div key={category} className="mb-4 last:mb-0">
                {/* Category Header */}
                <div className={cn(
                  "flex items-center gap-2 px-2 py-1 mb-2",
                  isRTL ? "flex-row-reverse" : "flex-row"
                )}>
                  <Badge variant="secondary" className="text-xs">
                    {t(`hotkeys.categories.${category}`)}
                  </Badge>
                  <div className="flex-1 h-px bg-border/50" />
                </div>

                {/* Commands in Category */}
                <div className="space-y-1">
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
      </ScrollArea>
    </div>
  );
}