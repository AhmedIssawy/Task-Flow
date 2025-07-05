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

export default function UniversalSettingsPage() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const role = pathSegments[2]; // Extract role from path
  const id = pathSegments[3]; // Extract id from path

  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
  });

  // Role-specific settings configuration
  const getRoleSettings = (userRole: string) => {
    switch (userRole) {
      case 'student':
        return {
          title: 'Student Settings',
          description: 'Customize your learning experience',
          icon: GraduationCap,
          color: 'text-blue-600 dark:text-blue-400',
          bgColor: 'bg-blue-500/10',
          borderColor: 'border-blue-500/20',
          badge: 'STUDENT'
        };
      case 'teacher':
        return {
          title: 'Teacher Settings',
          description: 'Configure your teaching preferences',
          icon: BookOpen,
          color: 'text-green-600 dark:text-green-400',
          bgColor: 'bg-green-500/10',
          borderColor: 'border-green-500/20',
          badge: 'TEACHER'
        };
      case 'admin':
        return {
          title: 'Admin Settings',
          description: 'Configure administrative preferences',
          icon: Shield,
          color: 'text-purple-600 dark:text-purple-400',
          bgColor: 'bg-purple-500/10',
          borderColor: 'border-purple-500/20',
          badge: 'ADMIN'
        };
      case 'superadmin':
        return {
          title: 'Super Admin Settings',
          description: 'Manage system-wide configurations',
          icon: Users,
          color: 'text-red-600 dark:text-red-400',
          bgColor: 'bg-red-500/10',
          borderColor: 'border-red-500/20',
          badge: 'SUPER ADMIN'
        };
      default:
        return {
          title: 'Settings',
          description: 'Configure your preferences',
          icon: User,
          color: 'text-gray-600 dark:text-gray-400',
          bgColor: 'bg-gray-500/10',
          borderColor: 'border-gray-500/20',
          badge: 'USER'
        };
    }
  };

  const roleSettings = getRoleSettings(role);
  const RoleIcon = roleSettings.icon;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-accent/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 ltr:left-10 rtl:right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 ltr:right-10 rtl:left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 ltr:right-1/4 rtl:left-1/4 w-6 h-6 bg-primary/30 rounded-full"></div>
      <div className="absolute bottom-1/3 ltr:left-1/3 rtl:right-1/3 w-4 h-4 bg-secondary/30 rounded-full"></div>
      <div className="absolute top-2/3 ltr:right-1/3 rtl:left-1/3 w-5 h-5 bg-accent/30 rounded-full"></div>

      <div className="relative z-10 p-6 space-y-8">
        {/* Header */}
        <div className="glass-effect bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 rounded-3xl p-8 text-foreground relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="relative z-10 flex items-center gap-4">
            <div className={`p-4 rounded-2xl ${roleSettings.bgColor} ${roleSettings.borderColor} border`}>
              <RoleIcon className={`w-8 h-8 ${roleSettings.color}`} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">{roleSettings.title}</h1>
              <p className="text-muted-foreground text-lg">{roleSettings.description}</p>
            </div>
            <div className="ml-auto">
              <Badge variant="outline" className={`${roleSettings.bgColor} ${roleSettings.color} ${roleSettings.borderColor} rounded-xl px-3 py-1`}>
                {roleSettings.badge}
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Appearance Settings */}
          <Card className="glass-effect border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-200 rounded-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Palette className="w-5 h-5 text-primary" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Theme Toggle */}
              <div className="group relative flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 border border-transparent hover:border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Monitor className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Theme</h3>
                    <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
                  </div>
                </div>
                <ThemeToggle />
              </div>

              {/* Language Switcher */}
              <div className="group relative flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10 transition-all duration-300 border border-transparent hover:border-green-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
                    <Globe className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Language</h3>
                    <p className="text-sm text-muted-foreground">Select your preferred language</p>
                  </div>
                </div>
                <LanguageSwitcher />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="glass-effect border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-200 rounded-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Bell className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Email Notifications */}
              <div className="group relative flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-orange-500/10 transition-all duration-300 border border-transparent hover:border-amber-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors duration-300">
                    <Bell className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email Notifications</h3>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                </div>
                <Switch 
                  checked={notifications.email}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                  disabled
                />
              </div>

              {/* Push Notifications */}
              <div className="group relative flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-indigo-500/10 transition-all duration-300 border border-transparent hover:border-blue-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Bell className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Push Notifications</h3>
                    <p className="text-sm text-muted-foreground">Get instant notifications</p>
                  </div>
                </div>
                <Switch 
                  checked={notifications.push}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                  disabled
                />
              </div>

              {/* SMS Notifications */}
              <div className="group relative flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-indigo-500/10 transition-all duration-300 border border-transparent hover:border-purple-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                    <Bell className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">SMS Notifications</h3>
                    <p className="text-sm text-muted-foreground">Receive text message alerts</p>
                  </div>
                </div>
                <Switch 
                  checked={notifications.sms}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, sms: checked }))}
                  disabled
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] px-8 py-3">
            <Settings className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
            Save Settings
          </Button>
        </div>

        {/* Footer Info */}
        <div className="glass-effect p-4 rounded-2xl border border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            Settings are automatically saved and synced across your devices.
          </p>
        </div>
      </div>
    </div>
  );
}