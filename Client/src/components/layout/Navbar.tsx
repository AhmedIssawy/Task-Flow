'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User, GraduationCap } from 'lucide-react';
import LogoutButton from '../auth/LogoutBtn';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from '@/components/made/language-switcher';
import { useTranslations } from 'next-intl';
import UserAvatar from '../user/UserAvatar';
import { useAuth } from '@/hooks/useAuth';
import { UnifiedNotificationPopup } from '@/components/dashboard/UnifiedNotificationPopup';

export function Navbar() {

  const { name, email } = useAuth().user;
  const { isRTL } = useLanguage();
  const t = useTranslations('navbar');

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-xl w-full',
        isRTL ? 'direction-rtl' : 'direction-ltr'
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Main navbar container - RTL-aware layout */}
        <div className="flex items-center h-16 w-full relative">
          {/* Logo Section - positioned absolutely for precise control */}
          <div
            className={cn(
              'flex items-center gap-3 absolute',
              isRTL ? 'right-0' : 'left-0'
            )}
          >
            <div className="p-2 rounded-2xl bg-primary shadow-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1
                className={cn(
                  'text-xl font-bold text-foreground font-primary',
                  isRTL ? 'text-right' : 'text-left'
                )}
              >
                {t('brand')}
              </h1>
              <p
                className={cn(
                  'text-xs text-muted-foreground',
                  isRTL ? 'text-right' : 'text-left'
                )}
              >
                {t('portal')}
              </p>
            </div>
          </div>

          {/* Controls Section - positioned absolutely for precise control */}
          <div
            className={cn(
              'flex items-center gap-3 absolute flex-row',
              isRTL ? 'left-0 ' : 'right-0 '
            )}
          >
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Notifications */}
            <UnifiedNotificationPopup />

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-2xl hover:bg-primary/10 transition-all duration-200"
                >
                  <UserAvatar name={name} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl"
                align={isRTL ? 'start' : 'end'}
                forceMount
              >
                <DropdownMenuLabel className="font-normal">
                  <div
                    className={cn(
                      'flex flex-col space-y-1',
                      isRTL ? 'items-end' : 'items-start'
                    )}
                  >
                    <p
                      className={cn(
                        'text-sm font-medium leading-none text-foreground font-primary',
                        isRTL ? 'text-right' : 'text-left'
                      )}
                    >
                      {name}
                    </p>
                    <p
                      className={cn(
                        'text-xs leading-none text-muted-foreground',
                        isRTL ? 'text-right' : 'text-left'
                      )}
                    >
                      {email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-border/50" />
                <DropdownMenuItem
                  className={cn(
                    'hover:bg-primary/10 rounded-xl transition-all duration-200 cursor-pointer',
                    isRTL ? 'flex-row-reverse' : 'flex-row'
                  )}
                >
                  <User className={cn('h-4 w-4', isRTL ? 'ml-2' : 'mr-2')} />
                  <span className="font-primary">{t('profile')}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-border/50" />
                <DropdownMenuItem className="hover:bg-destructive/10 text-destructive rounded-xl transition-all duration-200 cursor-pointer p-0">
                  <LogoutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
