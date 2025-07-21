'use client';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Bell, User, GraduationCap } from 'lucide-react';
import LogoutButton from '../auth/LogoutBtn';
import { useAppSelector } from '@/store/hooks';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from '@/components/made/language-switcher';
import { useTranslations } from 'next-intl';
import UserAvatar from '../user/UserAvatar';

export function Navbar() {
  const name = useAppSelector((state) => state.user.name);
  const email = useAppSelector((state) => state.user.email);
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
        <div
          className={cn(
            'flex items-center justify-between h-16',
            isRTL ? 'flex-row-reverse' : 'flex-row'
          )}
        >
          {/* Logo Section */}
          <div
            className={cn(
              'flex items-center gap-3',
              isRTL ? 'flex-row-reverse  lg:ml-0' : 'flex-row lg:mr-0'
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

          {/* Right Section: Theme + Language + Notifications + User Menu */}
          <div
            className={cn(
              'flex items-center gap-3',
              isRTL ? 'flex-row-reverse' : 'flex-row'
            )}
          >
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="relative text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200"
              title={t('notifications')}
            >
              <Bell className="h-5 w-5" />
              <Badge
                className={cn(
                  'absolute h-5 w-5 p-0 text-xs bg-destructive hover:bg-destructive/90 rounded-full',
                  isRTL ? '-top-1 -left-1' : '-top-1 -right-1'
                )}
              >
                3
              </Badge>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-2xl hover:bg-primary/10 transition-all duration-200"
                >
                  <UserAvatar name={name}/>
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
                <DropdownMenuItem className="hover:bg-destructive/10 text-destructive rounded-xl transition-all duration-200 cursor-pointer">
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
