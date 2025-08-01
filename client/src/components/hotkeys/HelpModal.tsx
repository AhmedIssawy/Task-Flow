/**
 * Help tab component showing all available hotkeys
 */

'use client';

import React, { useMemo } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Keyboard, 
  Navigation, 
  Settings, 
  Zap, 
  Monitor,
  Home,
  Book,
  Calendar,
  ClipboardList,
  BarChart3,
  Users,
  Building2,
  University,
  GraduationCap
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLanguage } from '@/hooks/useLanguage';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import { GLOBAL_HOTKEYS, ROLE_NAVIGATION } from '@/constants/hotkeyDefinitions';
import { formatHotkeyForDisplay } from '@/utils/hotkeyHelpers';
import type { Role } from '@/types/hotkeys';

interface HotkeyGroup {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: Array<{
    key: string;
    description: string;
    hotkey: string;
  }>;
}

export function HelpModal() {
  const { isRTL } = useLanguage();
  const { role } = useAuth();
  const t = useTranslations();

  const hotkeyGroups = useMemo((): HotkeyGroup[] => {
    const groups: HotkeyGroup[] = [];

    // Global Navigation Group
    groups.push({
      title: t('hotkeys.categories.navigation'),
      icon: Navigation,
      items: [
        {
          key: GLOBAL_HOTKEYS.DASHBOARD,
          description: 'Go to Dashboard',
          hotkey: formatHotkeyForDisplay(GLOBAL_HOTKEYS.DASHBOARD),
        },
        {
          key: GLOBAL_HOTKEYS.SETTINGS,
          description: 'Go to Settings',
          hotkey: formatHotkeyForDisplay(GLOBAL_HOTKEYS.SETTINGS),
        },
        {
          key: GLOBAL_HOTKEYS.SIDEBAR_UP,
          description: 'Navigate Sidebar Up',
          hotkey: formatHotkeyForDisplay(GLOBAL_HOTKEYS.SIDEBAR_UP),
        },
        {
          key: GLOBAL_HOTKEYS.SIDEBAR_DOWN,
          description: 'Navigate Sidebar Down',
          hotkey: formatHotkeyForDisplay(GLOBAL_HOTKEYS.SIDEBAR_DOWN),
        },
      ],
    });

    // Role-specific Navigation
    if (role && ROLE_NAVIGATION[role as Role]) {
      const roleNavigation = ROLE_NAVIGATION[role as Role];
      groups.push({
        title: `${role.charAt(0).toUpperCase() + role.slice(1)} Navigation`,
        icon: Home,
        items: roleNavigation.map(nav => ({
          key: nav.key,
          description: nav.description,
          hotkey: formatHotkeyForDisplay(nav.key),
        })),
      });
    }

    // Global Actions Group
    groups.push({
      title: t('hotkeys.categories.action'),
      icon: Zap,
      items: [
        {
          key: GLOBAL_HOTKEYS.COMMAND_PALETTE,
          description: t('hotkeys.commandPalette'),
          hotkey: formatHotkeyForDisplay(GLOBAL_HOTKEYS.COMMAND_PALETTE),
        },
        {
          key: GLOBAL_HOTKEYS.THEME_TOGGLE,
          description: t('hotkeys.toggleTheme'),
          hotkey: formatHotkeyForDisplay(GLOBAL_HOTKEYS.THEME_TOGGLE),
        },
        {
          key: GLOBAL_HOTKEYS.LANGUAGE_TOGGLE,
          description: t('hotkeys.toggleLanguage'),
          hotkey: formatHotkeyForDisplay(GLOBAL_HOTKEYS.LANGUAGE_TOGGLE),
        },
        {
          key: GLOBAL_HOTKEYS.LOGOUT,
          description: t('hotkeys.logout'),
          hotkey: formatHotkeyForDisplay(GLOBAL_HOTKEYS.LOGOUT),
        },
      ],
    });

    // UI Controls Group
    groups.push({
      title: t('hotkeys.categories.ui'),
      icon: Monitor,
      items: [
        {
          key: GLOBAL_HOTKEYS.CLOSE_MODAL,
          description: t('hotkeys.closeModal'),
          hotkey: formatHotkeyForDisplay(GLOBAL_HOTKEYS.CLOSE_MODAL),
        },
        {
          key: GLOBAL_HOTKEYS.SUBMIT_FORM,
          description: t('hotkeys.submitForm'),
          hotkey: formatHotkeyForDisplay(GLOBAL_HOTKEYS.SUBMIT_FORM),
        },
      ],
    });

    return groups;
  }, [role, t]);

  return (
    <div className="h-96">
      {/* Header */}
      <div className={cn(
        "flex items-center gap-3 px-4 py-3 border-b border-border/50 bg-muted/20",
        isRTL ? "flex-row-reverse" : "flex-row"
      )}>
        <div className="p-2 rounded-lg bg-primary/10">
          <Keyboard className="h-4 w-4 text-primary" />
        </div>
        <div className={cn(
          "flex-1",
          isRTL ? "text-right" : "text-left"
        )}>
          <h3 className="text-sm font-semibold text-foreground">
            {t('hotkeys.help')}
          </h3>
          <p className="text-xs text-muted-foreground">
            All available keyboard shortcuts for {role || 'user'}
          </p>
        </div>
      </div>

      {/* Content */}
      <ScrollArea className="h-full">
        <div className="p-4 space-y-6">
          {hotkeyGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-3">
              {/* Group Header */}
              <div className={cn(
                "flex items-center gap-3",
                isRTL ? "flex-row-reverse" : "flex-row"
              )}>
                <div className="p-1.5 rounded-md bg-primary/10">
                  <group.icon className="h-4 w-4 text-primary" />
                </div>
                <h4 className="text-sm font-semibold text-foreground">
                  {group.title}
                </h4>
                <div className="flex-1 h-px bg-border/50" />
              </div>

              {/* Group Items */}
              <div className="space-y-2">
                {group.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={cn(
                      "flex items-center justify-between py-2 px-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors",
                      isRTL ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    <div className={cn(
                      "flex-1",
                      isRTL ? "text-right" : "text-left"
                    )}>
                      <p className="text-sm text-foreground">
                        {item.description}
                      </p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="text-xs font-mono px-2 py-1 bg-background border-border/50"
                    >
                      {item.hotkey}
                    </Badge>
                  </div>
                ))}
              </div>

              {/* Separator between groups */}
              {groupIndex < hotkeyGroups.length - 1 && (
                <Separator className="my-4 bg-border/50" />
              )}
            </div>
          ))}

          {/* Footer Note */}
          <div className={cn(
            "mt-6 p-3 rounded-lg bg-muted/20 border border-border/50",
            isRTL ? "text-right" : "text-left"
          )}>
            <p className="text-xs text-muted-foreground">
              <strong>Note:</strong> Hotkeys are disabled when typing in input fields. 
              Press <kbd className="px-1 py-0.5 bg-muted border border-border/50 rounded text-xs">Esc</kbd> to close this help panel.
            </p>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}