'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from '@/components/made/language-switcher';
import { 
  Settings, 
  Palette, 
  Globe, 
  Bell, 
  Shield, 
  Monitor,
  User,
  GraduationCap,
  BookOpen,
  Users
} from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useLanguage } from '@/hooks/useLanguage';

export default function UniversalSettingsPage() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const role = pathSegments[2]; // Extract role from path
  const id = pathSegments[3]; // Extract id from path
  const t = useTranslations('settings');
  const { locale } = useLanguage();
  const isRTL = locale === 'ar';

  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
  });

  // Role-specific settings configuration
  const getRoleSettings = (userRole: string) => {
    const roleKey = userRole === 'super-admin' ? 'superadmin' : userRole;
    const roleData = t.raw(`roles.${roleKey}`) || t.raw('roles.default');
    
    switch (userRole) {
      case 'student':
        return {
          title: roleData.title,
          description: roleData.description,
          icon: GraduationCap,
          color: 'text-blue-600 dark:text-blue-400',
          bgColor: 'bg-blue-500/10',
          borderColor: 'border-blue-500/20',
          badge: roleData.badge
        };
      case 'teacher':
        return {
          title: roleData.title,
          description: roleData.description,
          icon: BookOpen,
          color: 'text-green-600 dark:text-green-400',
          bgColor: 'bg-green-500/10',
          borderColor: 'border-green-500/20',
          badge: roleData.badge
        };
      case 'admin':
        return {
          title: roleData.title,
          description: roleData.description,
          icon: Shield,
          color: 'text-purple-600 dark:text-purple-400',
          bgColor: 'bg-purple-500/10',
          borderColor: 'border-purple-500/20',
          badge: roleData.badge
        };
      case 'super-admin':
        return {
          title: roleData.title,
          description: roleData.description,
          icon: Users,
          color: 'text-red-600 dark:text-red-400',
          bgColor: 'bg-red-500/10',
          borderColor: 'border-red-500/20',
          badge: roleData.badge
        };
      default:
        return {
          title: roleData.title,
          description: roleData.description,
          icon: User,
          color: 'text-gray-600 dark:text-gray-400',
          bgColor: 'bg-gray-500/10',
          borderColor: 'border-gray-500/20',
          badge: roleData.badge
        };
    }
  };



  return (
    <div className={`relative min-h-screen bg-gradient-to-br from-background via-background to-accent/20 overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Elements - Modern geometric patterns inspired by landing page */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Floating geometric shapes - Landing page style */}
      <div className="absolute top-1/4 ltr:right-1/4 rtl:left-1/4 w-6 h-6 bg-primary/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/3 ltr:left-1/3 rtl:right-1/3 w-4 h-4 bg-secondary/30 rounded-full animate-bounce delay-500"></div>
      <div className="absolute top-2/3 ltr:right-1/3 rtl:left-1/3 w-5 h-5 bg-accent/30 rounded-full animate-bounce delay-1000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="relative z-10 p-6 space-y-8 max-w-7xl mx-auto">
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Appearance Settings - Enhanced design */}
          <Card className="backdrop-blur-xl bg-background/80 border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-4 relative z-10">
              <CardTitle className={`flex items-center gap-3 text-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                {t('appearance.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              {/* Theme Toggle */}
              <div className={`group/item relative flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 border border-transparent hover:border-primary/20 backdrop-blur-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="p-2 rounded-xl bg-primary/10 group-hover/item:bg-primary/20 transition-colors duration-300">
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
              <div className={`group/item relative flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10 transition-all duration-300 border border-transparent hover:border-green-500/20 backdrop-blur-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="p-2 rounded-xl bg-green-500/10 group-hover/item:bg-green-500/20 transition-colors duration-300">
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

          {/* Notification Settings - Enhanced design */}
          <Card className="backdrop-blur-xl bg-background/80 border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-4 relative z-10">
              <CardTitle className={`flex items-center gap-3 text-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="p-2 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <Bell className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                {t('notifications.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              {/* Email Notifications */}
              <div className={`group/item relative flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-orange-500/10 transition-all duration-300 border border-transparent hover:border-amber-500/20 backdrop-blur-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="p-2 rounded-xl bg-amber-500/10 group-hover/item:bg-amber-500/20 transition-colors duration-300">
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
              <div className={`group/item relative flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-indigo-500/10 transition-all duration-300 border border-transparent hover:border-blue-500/20 backdrop-blur-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="p-2 rounded-xl bg-blue-500/10 group-hover/item:bg-blue-500/20 transition-colors duration-300">
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
              <div className={`group/item relative flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-indigo-500/10 transition-all duration-300 border border-transparent hover:border-purple-500/20 backdrop-blur-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="p-2 rounded-xl bg-purple-500/10 group-hover/item:bg-purple-500/20 transition-colors duration-300">
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

        {/* Action Buttons - Enhanced with landing page styling */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl rounded-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98] px-8 py-4 text-lg font-medium">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Settings className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'} group-hover:rotate-90 transition-transform duration-300`} />
            {t('actions.save')}
          </Button>
        </div>

        
      </div>
    </div>
  );
}