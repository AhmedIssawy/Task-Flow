'use client';

import React, { useState, useMemo } from 'react';
import { useHotkeyContext } from '@/contexts/HotkeyContext';
import { useAuth } from '@/hooks/useAuth';
import { HOTKEY_KEYS, HOTKEY_DESCRIPTIONS } from '@/constants/hotkeyConfig';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { 
  Search, 
  Keyboard, 
  Navigation, 
  Zap, 
  Settings,
  Table,
  HelpCircle
} from 'lucide-react';

interface HotkeyItem {
  key: string;
  description: string;
  category: string;
  visual: string;
}

export const HelpPopup: React.FC = () => {
  const { isHelpOpen, closeHelp } = useHotkeyContext();
  const { role } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Convert hotkey keys to visual representation
  const formatHotkeyVisual = (key: string | undefined): string => {
    if (!key) return '';
    return key
      .replace('ctrl+shift+', 'Ctrl + Shift + ')
      .replace('ctrl+alt+', 'Ctrl + Alt + ')
      .replace('ctrl+', 'Ctrl + ')
      .replace('cmd+', 'Cmd + ')
      .replace('shift+', 'Shift + ')
      .replace('alt+', 'Alt + ')
      .replace('up', '↑')
      .replace('down', '↓')
      .replace('left', '←')
      .replace('right', '→')
      .replace('escape', 'Esc')
      .replace('enter', 'Enter')
      .replace('f1', 'F1')
      .replace('\\', '\\')
      .replace('/', '/')
      .toUpperCase();
  };

  // Get all available hotkeys
  const allHotkeys = useMemo((): HotkeyItem[] => {
    const hotkeys: HotkeyItem[] = [];

    // Global navigation hotkeys
    hotkeys.push(
      {
        key: HOTKEY_KEYS.SIDEBAR_PREV,
        description: HOTKEY_DESCRIPTIONS[HOTKEY_KEYS.SIDEBAR_PREV],
        category: 'navigation',
        visual: formatHotkeyVisual(HOTKEY_KEYS.SIDEBAR_PREV)
      },
      {
        key: HOTKEY_KEYS.SIDEBAR_NEXT,
        description: HOTKEY_DESCRIPTIONS[HOTKEY_KEYS.SIDEBAR_NEXT],
        category: 'navigation',
        visual: formatHotkeyVisual(HOTKEY_KEYS.SIDEBAR_NEXT)
      }
    );

    // Table navigation and action hotkeys removed as requested

    // UI hotkeys (available to all)
    hotkeys.push(
      {
        key: HOTKEY_KEYS.TOGGLE_THEME,
        description: HOTKEY_DESCRIPTIONS[HOTKEY_KEYS.TOGGLE_THEME],
        category: 'ui',
        visual: formatHotkeyVisual(HOTKEY_KEYS.TOGGLE_THEME)
      },
      {
        key: HOTKEY_KEYS.TOGGLE_LANGUAGE,
        description: HOTKEY_DESCRIPTIONS[HOTKEY_KEYS.TOGGLE_LANGUAGE],
        category: 'ui',
        visual: formatHotkeyVisual(HOTKEY_KEYS.TOGGLE_LANGUAGE)
      },
      {
        key: HOTKEY_KEYS.GO_TO_SETTINGS,
        description: HOTKEY_DESCRIPTIONS[HOTKEY_KEYS.GO_TO_SETTINGS],
        category: 'ui',
        visual: formatHotkeyVisual(HOTKEY_KEYS.GO_TO_SETTINGS)
      },
      {
        key: HOTKEY_KEYS.LOGOUT,
        description: HOTKEY_DESCRIPTIONS[HOTKEY_KEYS.LOGOUT],
        category: 'ui',
        visual: formatHotkeyVisual(HOTKEY_KEYS.LOGOUT)
      },
      {
        key: HOTKEY_KEYS.COMMAND_PALETTE,
        description: HOTKEY_DESCRIPTIONS[HOTKEY_KEYS.COMMAND_PALETTE],
        category: 'ui',
        visual: formatHotkeyVisual(HOTKEY_KEYS.COMMAND_PALETTE)
      },
      {
        key: HOTKEY_KEYS.SHOW_HELP,
        description: HOTKEY_DESCRIPTIONS[HOTKEY_KEYS.SHOW_HELP],
        category: 'ui',
        visual: formatHotkeyVisual(HOTKEY_KEYS.SHOW_HELP)
      },
      {
        key: HOTKEY_KEYS.ENTER,
        description: HOTKEY_DESCRIPTIONS[HOTKEY_KEYS.ENTER],
        category: 'ui',
        visual: formatHotkeyVisual(HOTKEY_KEYS.ENTER)
      },
      {
        key: HOTKEY_KEYS.ESCAPE,
        description: HOTKEY_DESCRIPTIONS[HOTKEY_KEYS.ESCAPE],
        category: 'ui',
        visual: formatHotkeyVisual(HOTKEY_KEYS.ESCAPE)
      }
    );

    return hotkeys;
  }, [role]);

  // Filter hotkeys based on search query and active tab
  const filteredHotkeys = useMemo(() => {
    let filtered = allHotkeys;

    // Filter by category
    if (activeTab !== 'all') {
      filtered = filtered.filter(hotkey => hotkey.category === activeTab);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(hotkey =>
        hotkey.description.toLowerCase().includes(query) ||
        hotkey.visual.toLowerCase().includes(query) ||
        hotkey.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [allHotkeys, activeTab, searchQuery]);

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'navigation':
        return <Navigation className="w-4 h-4" />;
      case 'actions':
        return <Zap className="w-4 h-4" />;
      case 'ui':
        return <Settings className="w-4 h-4" />;
      case 'table':
        return <Table className="w-4 h-4" />;
      default:
        return <Keyboard className="w-4 h-4" />;
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
      case 'table':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  // Render keyboard key visual
  const renderKeyVisual = (visual: string) => {
    const keys = visual.split(' + ');
    return (
      <div className="flex items-center gap-1">
        {keys.map((key, index) => (
          <React.Fragment key={index}>
            <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              {key}
            </kbd>
            {index < keys.length - 1 && <span className="text-muted-foreground">+</span>}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <Dialog open={isHelpOpen} onOpenChange={closeHelp}>
      <DialogContent className="max-w-4xl max-h-[80vh] p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5" />
            Keyboard Shortcuts
          </DialogTitle>
        </DialogHeader>

        <div className="flex items-center border-b px-6 py-3">
          <Search className="w-4 h-4 text-muted-foreground mr-3" />
          <Input
            placeholder="Search shortcuts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-0 focus-visible:ring-0"
          />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
          <TabsList className="grid w-full grid-cols-5 mx-6 mt-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
            <TabsTrigger value="actions">Actions</TabsTrigger>
            <TabsTrigger value="table">Table</TabsTrigger>
            <TabsTrigger value="ui">UI</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <ScrollArea className="h-96 px-6">
              <div className="space-y-2 py-4">
                {filteredHotkeys.length > 0 ? (
                  filteredHotkeys.map((hotkey, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {getCategoryIcon(hotkey.category)}
                        <div>
                          <p className="font-medium">{hotkey.description}</p>
                          <Badge 
                            variant="outline" 
                            className={cn("text-xs mt-1", getCategoryColor(hotkey.category))}
                          >
                            {hotkey.category}
                          </Badge>
                        </div>
                      </div>
                      {renderKeyVisual(hotkey.visual)}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>No shortcuts found</p>
                    <p className="text-xs mt-1">Try a different search term or category</p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>

        <div className="border-t px-6 py-3 text-xs text-muted-foreground">
          <div className="flex items-center justify-between">
            <span>Press Ctrl+/ to toggle this help</span>
            <span>Press Esc to close</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};