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
        "group relative flex items-center gap-4 px-4 py-3.5 rounded-xl cursor-pointer",
        "transition-all duration-300 ease-out",
        "hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10",
        "hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.02]",
        "active:scale-[0.98] active:transition-transform active:duration-100",
        isSelected && [
          "bg-gradient-to-r from-primary/10 to-primary/15",
          "border border-primary/25 shadow-lg shadow-primary/10",
          "ring-1 ring-primary/20"
        ],
        isRTL ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Background Glow Effect */}
      {isSelected && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl blur-sm -z-10" />
      )}

      {/* Enhanced Icon */}
      <div className={cn(
        "relative flex-shrink-0 p-2.5 rounded-xl transition-all duration-300",
        isSelected 
          ? "bg-primary/15 text-primary shadow-lg shadow-primary/20" 
          : "bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:shadow-md"
      )}>
        {/* Icon Glow */}
        {isSelected && (
          <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md -z-10" />
        )}
        {command.icon ? (
          <command.icon className="h-5 w-5 relative z-10" />
        ) : (
          <Command className="h-5 w-5 relative z-10" />
        )}
      </div>

      {/* Enhanced Content */}
      <div className={cn(
        "flex-1 min-w-0 space-y-1 overflow-hidden",
        isRTL ? "text-right" : "text-left"
      )}>
        <div className={cn(
          "flex items-center gap-3 min-w-0",
          isRTL ? "flex-row-reverse justify-end" : "flex-row justify-start"
        )}>
          <h4 className={cn(
            "text-base font-semibold truncate transition-colors duration-200 min-w-0 flex-1",
            isSelected ? "text-foreground" : "text-foreground/90 group-hover:text-foreground"
          )}>
            {command.title}
          </h4>
          <Badge 
            variant="outline" 
            className={cn(
              "text-xs px-2 py-1 flex-shrink-0 font-medium border transition-all duration-200",
              getCategoryColor(command.category),
              isSelected && "shadow-sm"
            )}
          >
            {command.category}
          </Badge>
        </div>
        <p className={cn(
          "text-sm truncate transition-colors duration-200 overflow-hidden",
          isSelected ? "text-muted-foreground" : "text-muted-foreground/80 group-hover:text-muted-foreground"
        )}>
          {command.description}
        </p>
      </div>

      {/* Enhanced Hotkey & Arrow */}
      <div className={cn(
        "flex items-center gap-3 flex-shrink-0",
        isRTL ? "flex-row-reverse" : "flex-row"
      )}>
        <div className="relative">
          <Badge 
            variant="secondary" 
            className={cn(
              "text-xs font-mono px-3 py-1.5 font-semibold transition-all duration-200",
              "bg-background/60 border border-border/50 shadow-sm",
              isSelected && "bg-primary/15 border-primary/30 text-primary shadow-md",
              "group-hover:shadow-md group-hover:scale-105"
            )}
          >
            {command.hotkey}
          </Badge>
          {isSelected && (
            <div className="absolute inset-0 bg-primary/10 rounded-md blur-sm -z-10" />
          )}
        </div>
        <ArrowRight className={cn(
          "h-4 w-4 transition-all duration-300",
          isSelected 
            ? "text-primary translate-x-1" 
            : "text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-1",
          isRTL && "rotate-180 group-hover:-translate-x-1"
        )} />
      </div>
    </div>
  );
}