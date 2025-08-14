'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from '@/components/user/global/language-switcher';
import {
  Settings,
  Palette,
  Globe,
  Bell,
  Monitor,
} from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLanguage } from '@/hooks/useLanguage';

export default function UniversalSettingsPage() {

  const t = useTranslations('settings');
  const { locale } = useLanguage();
  const isRTL = locale === 'ar';

  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
  });

  return (
    <div className={`relative min-h-screen bg-gradient-to-br from-background via-background to-accent/20 overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Elements - Enhanced for light/dark mode */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        {/* Primary radial gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-primary/20 dark:to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-purple-500/20 to-pink-500/20 dark:from-accent/20 dark:to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Additional accent orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/15 to-blue-600/15 dark:from-primary/15 dark:to-accent/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating geometric shapes - Enhanced for light/dark mode */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary floating circles */}
        <div className="absolute top-1/4 ltr:right-1/4 rtl:left-1/4 w-6 h-6 bg-blue-500/40 dark:bg-primary/30 rounded-full animate-bounce shadow-lg"></div>
        <div className="absolute bottom-1/3 ltr:left-1/3 rtl:right-1/3 w-4 h-4 bg-purple-500/40 dark:bg-secondary/30 rounded-full animate-bounce delay-500 shadow-lg"></div>
        <div className="absolute top-2/3 ltr:right-1/3 rtl:left-1/3 w-5 h-5 bg-pink-500/40 dark:bg-accent/30 rounded-full animate-bounce delay-1000 shadow-lg"></div>

        {/* Additional geometric shapes */}
        <div className="absolute top-1/6 ltr:left-1/6 rtl:right-1/6 w-3 h-3 bg-cyan-500/35 dark:bg-primary/25 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/6 ltr:right-1/6 rtl:left-1/6 w-4 h-4 bg-indigo-500/35 dark:bg-secondary/25 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 ltr:left-1/5 rtl:right-1/5 w-2 h-2 bg-violet-500/40 dark:bg-accent/25 rounded-full animate-bounce delay-1200"></div>

        {/* Diamond shapes */}
        <div className="absolute top-3/4 ltr:left-2/3 rtl:right-2/3 w-3 h-3 bg-emerald-500/30 dark:bg-primary/20 transform rotate-45 animate-pulse delay-800"></div>
        <div className="absolute bottom-1/2 ltr:right-1/5 rtl:left-1/5 w-2 h-2 bg-orange-500/35 dark:bg-secondary/20 transform rotate-45 animate-bounce delay-1500"></div>
      </div>

      {/* Grid pattern overlay - Enhanced for light/dark mode */}
      <div className="absolute inset-0 opacity-40 dark:opacity-25">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        {/* Diagonal grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,92,246,0.15)_1px,transparent_1px),linear-gradient(-45deg,rgba(139,92,246,0.15)_1px,transparent_1px)] dark:bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-60"></div>
      </div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-15 dark:opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:25px_25px]"></div>
      </div>

      <div className="relative z-10 p-6 space-y-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Appearance Settings */}
          <Card className="backdrop-blur-xl bg-background/80 border-white/10 dark:border-white/10 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className={`flex items-center gap-3 text-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="p-2 rounded-xl bg-primary/10">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                {t('appearance.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Theme Toggle */}
              <div className={`flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-transparent backdrop-blur-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="p-2 rounded-xl bg-primary/10">
                    <Monitor className="w-4 h-4 text-primary" />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h3 className="font-medium text-foreground">{t('appearance.theme.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('appearance.theme.description')}</p>
                  </div>
                </div>
                <ThemeToggle />
              </div>

              {/* Language Switcher */}
              <div className={`flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-transparent backdrop-blur-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="p-2 rounded-xl bg-green-500/10">
                    <Globe className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h3 className="font-medium text-foreground">{t('appearance.language.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('appearance.language.description')}</p>
                  </div>
                </div>
                <LanguageSwitcher />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="backdrop-blur-xl bg-background/80 border-white/10 dark:border-white/10 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className={`flex items-center gap-3 text-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="p-2 rounded-xl bg-amber-500/10">
                  <Bell className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                {t('notifications.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Email Notifications */}
              <div className={`flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-transparent backdrop-blur-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="p-2 rounded-xl bg-amber-500/10">
                    <Bell className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h3 className="font-medium text-foreground">{t('notifications.email.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('notifications.email.description')}</p>
                  </div>
                </div>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                />
              </div>

              {/* Push Notifications */}
              <div className={`flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-transparent backdrop-blur-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="p-2 rounded-xl bg-blue-500/10">
                    <Bell className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h3 className="font-medium text-foreground">{t('notifications.push.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('notifications.push.description')}</p>
                  </div>
                </div>
                <Switch
                  checked={notifications.push}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                />
              </div>

              {/* SMS Notifications */}
              <div className={`flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-transparent backdrop-blur-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="p-2 rounded-xl bg-purple-500/10">
                    <Bell className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h3 className="font-medium text-foreground">{t('notifications.sms.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('notifications.sms.description')}</p>
                  </div>
                </div>
                <Switch
                  checked={notifications.sms}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, sms: checked }))}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="group relative overflow-hidden bg-primary hover:bg-secondary/90 shadow-2xl rounded-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98] px-8 py-4 text-lg font-medium">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Settings className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'} group-hover:rotate-90 transition-transform duration-300`} />
            {t('actions.save')}
          </Button>
        </div>
      </div>
    </div>
  );
}
