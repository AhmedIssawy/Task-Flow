'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { NavItem } from '@/constants/sideMenuData';
import React, { useState, useEffect } from 'react';
import { Menu, XIcon } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useTranslations } from 'next-intl';
import { useHotkeyContext } from '@/providers/HotkeyProvider';

interface SideNavContentProps {
  navItems: NavItem[];
  onItemClick?: () => void;
}

export function SideNavContent({ navItems, onItemClick }: SideNavContentProps) {
  const pathname = usePathname();
  const { isRTL } = useLanguage();
  const t = useTranslations();
  const { currentSidebarIndex } = useHotkeyContext();
  
  return (
    <div className={cn(
      "flex h-full w-full flex-col bg-background/80 backdrop-blur-md border-border/50",
      isRTL ? "border-l" : "border-r"
    )}>
      {/* Navigation */}
      <ScrollArea className="flex-1 px-4 py-8">
        <nav className="space-y-3">
          {navItems.map(({ labelKey, href, icon: Icon, badge }, index) => {
            const isActive = pathname.endsWith(href);
            const isKeyboardFocused = currentSidebarIndex === index;
            const translatedLabel = t(labelKey);
            return (
              <Link
                key={labelKey}
                href={href}
                onClick={onItemClick}
                className={cn(
                  'group flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg border border-primary/20'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-md hover:border hover:border-primary/20 border border-transparent',
                  isKeyboardFocused && !isActive && 'ring-2 ring-primary/50 bg-primary/5 border-primary/30',
                  isRTL ? 'flex-row-reverse' : 'flex-row'
                )}
              >
                <div className={cn(
                  "flex items-center gap-4",
                  isRTL ? "flex-row-reverse" : "flex-row"
                )}>
                  <div
                    className={cn(
                      'p-2 rounded-xl transition-all duration-300',
                      isActive
                        ? 'bg-primary-foreground/20 shadow-sm'
                        : 'group-hover:bg-primary/20 group-hover:shadow-sm'
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-5 w-5 transition-all duration-300',
                        isActive
                          ? 'text-primary-foreground'
                          : 'text-current group-hover:text-primary group-hover:scale-110'
                      )}
                    />
                  </div>
                  <span className={cn(
                    "font-medium tracking-wide leading-relaxed font-primary",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    {translatedLabel}
                  </span>
                </div>
                {badge && (
                  <Badge
                    variant={isActive ? 'secondary' : 'outline'}
                    className={cn(
                      'text-xs px-3 py-1 font-semibold transition-all duration-300 rounded-xl shadow-sm',
                      isActive
                        ? 'bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30'
                        : 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 group-hover:scale-105'
                    )}
                  >
                    {badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
}

interface SideMenuProps {
  navItems: NavItem[];
  onItemClick?: () => void;
}

export function SideMenu({ navItems, onItemClick }: SideMenuProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isRTL } = useLanguage();
  const MemoizedSideNavContent = React.memo(SideNavContent);
  
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={cn(
        "fixed top-16 h-[calc(100vh-4rem)] w-72 z-40 hidden lg:flex bg-background/80 backdrop-blur-md border-border/50 shadow-xl",
        isRTL ? "right-0 border-l rounded-l-2xl" : "left-0 border-r rounded-r-2xl"
      )}>
        <MemoizedSideNavContent navItems={navItems} onItemClick={onItemClick} />
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className={cn(
          "lg:hidden fixed bottom-8 z-50 bg-background border border-border p-2 rounded-xl shadow-lg transition-all duration-200 hover:bg-primary/10",
          isRTL ? "right-4" : "left-4"
        )}
      >
        <Menu className="w-6 h-6 text-foreground" />
      </button>

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          'fixed top-0 h-full w-72 z-50 bg-background/90 backdrop-blur-md border-border/50 shadow-xl transition-transform duration-300 lg:hidden',
          isRTL ? 'right-0 border-l rounded-l-2xl' : 'left-0 border-r rounded-r-2xl',
          isSidebarOpen 
            ? 'translate-x-0' 
            : isRTL ? 'translate-x-full' : '-translate-x-full'
        )}
      >
        <div className={cn(
          "flex p-4",
          isRTL ? "justify-start" : "justify-end"
        )}>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-xl hover:bg-primary/10 transition-all duration-200"
          >
            <XIcon className="w-5 h-5 text-foreground" />
          </button>
        </div>
        <MemoizedSideNavContent
          navItems={navItems}
          onItemClick={() => setIsSidebarOpen(false)}
        />
      </aside>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}
