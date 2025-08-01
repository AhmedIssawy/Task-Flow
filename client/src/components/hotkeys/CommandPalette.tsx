'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useHotkeyContext } from '@/contexts/HotkeyContext';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/hooks/useLanguage';
import { COMMAND_PALETTE_DATA } from '@/constants/hotkeyConfig';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { 
  Search, 
  Navigation, 
  Zap, 
  Settings, 
  Clock,
  ArrowRight,
  Command
} from 'lucide-react';

interface CommandItem {
  id: string;
  label: string;
  category: 'navigation' | 'actions' | 'ui';
  action: string;
  target?: string;
  hotkey?: string;
}

export const CommandPalette: React.FC = () => {
  const router = useRouter();
  const { setTheme } = useTheme();
  const { switchLanguage, availableLocales, locale } = useLanguage();
  const { role, id } = useAuth();
  const {
    isCommandPaletteOpen,
    closeCommandPalette,
    recentCommands,
    addRecentCommand,
    openHelp
  } = useHotkeyContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Get available commands based on user role
  const availableCommands = useMemo(() => {
    const globalCommands = COMMAND_PALETTE_DATA.global;
    const roleCommands = role ? COMMAND_PALETTE_DATA[role as keyof typeof COMMAND_PALETTE_DATA] || [] : [];
    
    return [...globalCommands, ...roleCommands];
  }, [role]);

  // Filter commands based on search query
  const filteredCommands = useMemo(() => {
    if (!searchQuery.trim()) {
      return availableCommands;
    }

    const query = searchQuery.toLowerCase();
    return availableCommands.filter(command =>
      command.label.toLowerCase().includes(query) ||
      command.category.toLowerCase().includes(query) ||
      command.id.toLowerCase().includes(query)
    );
  }, [availableCommands, searchQuery]);

  // Get recent commands that are still available
  const recentCommandItems = useMemo(() => {
    return recentCommands
      .map(commandId => availableCommands.find(cmd => cmd.id === commandId))
      .filter(Boolean) as CommandItem[];
  }, [recentCommands, availableCommands]);

  // Reset state when palette opens/closes
  useEffect(() => {
    if (isCommandPaletteOpen) {
      setSearchQuery('');
      setSelectedIndex(0);
    }
  }, [isCommandPaletteOpen]);

  // Execute command
  const executeCommand = useCallback((command: CommandItem) => {
    addRecentCommand(command.id);
    closeCommandPalette();

    switch (command.action) {
      case 'navigate':
        if (command.target && id) {
          const path = `/${role}/${id}${command.target !== 'dashboard' ? `/${command.target}` : ''}`;
          router.push(path);
        }
        break;
      case 'toggle-theme':
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
        break;
      case 'toggle-language':
        // Toggle between available languages
        const currentIndex = availableLocales.findIndex(lang => lang.code === locale);
        const nextIndex = (currentIndex + 1) % availableLocales.length;
        const nextLocale = availableLocales[nextIndex];
        
        if (nextLocale) {
          switchLanguage(nextLocale.code);
        }
        break;
      case 'show-help':
        openHelp();
        break;
      case 'logout':
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if (confirmLogout) {
          router.push('/auth/login');
        }
        break;
      case 'sidebar-prev':
        // Trigger sidebar previous navigation
        window.dispatchEvent(new KeyboardEvent('keydown', { 
          key: 'ArrowUp', 
          ctrlKey: true, 
          bubbles: true 
        }));
        break;
      case 'sidebar-next':
        // Trigger sidebar next navigation
        window.dispatchEvent(new KeyboardEvent('keydown', { 
          key: 'ArrowDown', 
          ctrlKey: true, 
          bubbles: true 
        }));
        break;
      case 'sidebar-toggle':
        // Trigger sidebar toggle
        const sidebar = document.querySelector('aside');
        const toggleButton = document.querySelector('[data-sidebar-toggle]');
        if (sidebar) {
          sidebar.classList.toggle('hidden');
        }
        if (toggleButton) {
          (toggleButton as HTMLElement).click();
        }
        break;
      case 'table-up':
      case 'table-down':
      case 'create-context':
      case 'edit-context':
      case 'delete-context':
        // These are context-specific and handled by the current page
        window.dispatchEvent(new CustomEvent('hotkey-action', { 
          detail: { action: command.action } 
        }));
        break;
      case 'command-palette':
        // This command opens the palette itself, so we just close it
        break;
      case 'create':
        // Navigate to the target page and trigger create action
        if (command.target && id) {
          const targetPageMap: { [key: string]: string } = {
            'student': 'students',
            'teacher': 'teachers', 
            'course': 'courses',
            'assignment': 'assignments',
            'section': 'sections',
            'college': 'colleges',
            'department': 'departments',
            'university': 'university'
          };
          
          const targetPage = targetPageMap[command.target] || command.target;
          const path = `/${role}/${id}/${targetPage}`;
          
          // Navigate to the page first
          router.push(path);
          
          // Trigger create modal after navigation
          setTimeout(() => {
            const createButton = document.querySelector('[data-create-new]') as HTMLElement;
            if (createButton) {
              createButton.click();
            } else {
              // Fallback: dispatch a custom event for create action
              window.dispatchEvent(new CustomEvent('hotkey-create', { 
                detail: { target: command.target } 
              }));
            }
          }, 100);
        }
        break;
      default:
        console.log('Unknown command action:', command.action);
    }
  }, [addRecentCommand, closeCommandPalette, id, role, router, setTheme, switchLanguage, availableLocales, locale, openHelp]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isCommandPaletteOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredCommands.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : filteredCommands.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            executeCommand(filteredCommands[selectedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          closeCommandPalette();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, filteredCommands, selectedIndex, closeCommandPalette, executeCommand]);

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'navigation':
        return <Navigation className="w-4 h-4" />;
      case 'actions':
        return <Zap className="w-4 h-4" />;
      case 'ui':
        return <Settings className="w-4 h-4" />;
      default:
        return <Command className="w-4 h-4" />;
    }
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'navigation':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'actions':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'ui':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <Dialog open={isCommandPaletteOpen} onOpenChange={closeCommandPalette}>
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden">
        <div className="flex items-center border-b px-4 py-3">
          <Search className="w-4 h-4 text-muted-foreground mr-3" />
          <Input
            placeholder="Type a command or search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 text-base"
            autoFocus
          />
          <Badge variant="outline" className="ml-2 text-xs">
            Ctrl+K
          </Badge>
        </div>

        <ScrollArea className="max-h-96">
          <div className="p-2">
            {/* Recent Commands */}
            {!searchQuery && recentCommandItems.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center gap-2 px-2 py-1 text-xs font-medium text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  Recent
                </div>
                {recentCommandItems.slice(0, 3).map((command, index) => (
                  <div
                    key={`recent-${command.id}`}
                    className={cn(
                      "flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer transition-colors",
                      selectedIndex === index && !searchQuery
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted/50"
                    )}
                    onClick={() => executeCommand(command)}
                  >
                    {getCategoryIcon(command.category)}
                    <span className="flex-1">{command.label}</span>
                    {command.hotkey && (
                      <Badge variant="secondary" className="text-xs font-mono">
                        {command.hotkey}
                      </Badge>
                    )}
                    <Badge 
                      variant="outline" 
                      className={cn("text-xs", getCategoryColor(command.category))}
                    >
                      {command.category}
                    </Badge>
                    <ArrowRight className="w-3 h-3 text-muted-foreground" />
                  </div>
                ))}
              </div>
            )}

            {/* Filtered Commands */}
            {filteredCommands.length > 0 ? (
              <div>
                {!searchQuery && (
                  <div className="flex items-center gap-2 px-2 py-1 text-xs font-medium text-muted-foreground mb-2">
                    <Command className="w-3 h-3" />
                    All Commands
                  </div>
                )}
                {filteredCommands.map((command, index) => {
                  const adjustedIndex = !searchQuery ? index + recentCommandItems.length : index;
                  return (
                    <div
                      key={command.id}
                      className={cn(
                        "flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer transition-colors",
                        selectedIndex === adjustedIndex
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-muted/50"
                      )}
                      onClick={() => executeCommand(command)}
                    >
                      {getCategoryIcon(command.category)}
                      <span className="flex-1">{command.label}</span>
                      {command.hotkey && (
                        <Badge variant="secondary" className="text-xs font-mono">
                          {command.hotkey}
                        </Badge>
                      )}
                      <Badge 
                        variant="outline" 
                        className={cn("text-xs", getCategoryColor(command.category))}
                      >
                        {command.category}
                      </Badge>
                      <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p>No commands found</p>
                <p className="text-xs mt-1">Try a different search term</p>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="border-t px-4 py-2 text-xs text-muted-foreground">
          <div className="flex items-center justify-between">
            <span>Navigate with ↑↓, select with ↵</span>
            <span>Press Esc to close</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};