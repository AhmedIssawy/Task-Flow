/**
 * Individual command item component
 */

'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Command } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import type { CommandPaletteItem } from '@/types/hotkeys';

interface CommandItemProps {
  command: CommandPaletteItem;
  isSelected: boolean;
  onClick: () => void;
  dataIndex: number;
}

export function CommandItem({ command, isSelected, onClick, dataIndex }: CommandItemProps) {
  const { isRTL } = useLanguage();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'navigation':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'action':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'ui':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  return (
    <div
      data-index={dataIndex}
      onClick={onClick}
      className={cn(
        "group flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200",
        "hover:bg-muted/50 active:scale-[0.98]",
        isSelected && "bg-primary/10 border border-primary/20 shadow-sm",
        isRTL ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Icon */}
      <div className={cn(
        "flex-shrink-0 p-1.5 rounded-md transition-colors",
        isSelected 
          ? "bg-primary/20 text-primary" 
          : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
      )}>
        {command.icon ? (
          <command.icon className="h-4 w-4" />
        ) : (
          <Command className="h-4 w-4" />
        )}
      </div>

      {/* Content */}
      <div className={cn(
        "flex-1 min-w-0",
        isRTL ? "text-right" : "text-left"
      )}>
        <div className={cn(
          "flex items-center gap-2 mb-1",
          isRTL ? "flex-row-reverse justify-end" : "flex-row justify-start"
        )}>
          <h4 className="text-sm font-medium text-foreground truncate">
            {command.title}
          </h4>
          <Badge 
            variant="outline" 
            className={cn(
              "text-xs px-1.5 py-0.5 flex-shrink-0",
              getCategoryColor(command.category)
            )}
          >
            {command.category}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground truncate">
          {command.description}
        </p>
      </div>

      {/* Hotkey & Arrow */}
      <div className={cn(
        "flex items-center gap-2 flex-shrink-0",
        isRTL ? "flex-row-reverse" : "flex-row"
      )}>
        <Badge 
          variant="secondary" 
          className={cn(
            "text-xs font-mono px-2 py-1 bg-muted/50 border border-border/50",
            isSelected && "bg-primary/20 border-primary/30"
          )}
        >
          {command.hotkey}
        </Badge>
        <ArrowRight className={cn(
          "h-3 w-3 text-muted-foreground transition-transform group-hover:translate-x-0.5",
          isSelected && "text-primary",
          isRTL && "rotate-180 group-hover:-translate-x-0.5"
        )} />
      </div>
    </div>
  );
}