'use client';

import { getPathByRole } from '@/utils/roleRedirect';
import { useState } from 'react';
import { useLoginMutation } from '@/store/services/authApi';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useLanguage } from '@/hooks/useLanguage';
import { normalizeRole } from '@/utils/role';
import { useAppDispatch } from '@/store/hooks';
import { setAuth } from '@/store/slices/authSlice';
import { Lock, User, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from '@/components/made/language-switcher';
import { setUser } from '@/store/slices/userSlice';

export default function LoginForm() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();
  const t = useTranslations('auth.login');
  const { isRTL } = useLanguage();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const { role, data } = await login({ id: userId, password }).unwrap();
      console.log("login data", data);


      const redirectPath = getPathByRole(role, data.id);
      const normalizedRole = normalizeRole(role);

      if (!normalizedRole) {
        console.error('Invalid role from backend:', role);
        return;
      }

      dispatch(
        setAuth({ id: data.id, mongoId: data._id, role: normalizedRole })
      );

      dispatch(setUser({name: data.name, email: data.email}))
      router.push(redirectPath);
    } catch (err) {
      console.error('Login failed:', err);

      if (err.status === 400) {
        setErrorMessage('Invalid credentials. Please try again.');
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">



      <div className="p-8 h-full flex flex-col justify-center">
        <div className="w-full max-w-lg">
          <div className="bg-card rounded-2xl shadow-xl border border-border" style={{ width: '480px', minHeight: '600px' }}>

            {/* Header */}
            <div className="text-center mb-8">
              <div className={cn(
                "flex items-center justify-start mb-6 pt-4 px-4",
                isRTL ? "space-x-reverse" : "space-x-2"
              )}>
                {/* Top Controls - Theme and Language Switcher */}
                <div className={cn(
                  " flex items-center space-x-3",
                  isRTL ? "" : " rtl:space-x-reverse"
                )}>
                  <ThemeToggle />
                  <LanguageSwitcher />
                </div>
                
              </div>
                <span className="text-3xl font-bold text-primary font-primary ml-2 rtl:ml-0 rtl:mr-2">
                  {t('brandName')}
                </span>
              <p className="text-muted-foreground text-sm">
                {t('subtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 px-4 flex-grow">
              {/* User ID Input */}
              <div className="space-y-2">
                <label className={cn(
                  "text-sm pr-2 pl-2 font-medium text-foreground block",
                  isRTL ? "text-right" : "text-left"
                )}>
                  {t('userIdLabel')}
                </label>
                <div className="relative">
                  <Input
                    placeholder={t('enterUserId')}
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    type="text"
                    required
                    dir={isRTL ? 'rtl' : 'ltr'}
                    className={cn(
                      "h-12 rounded-md border-border bg-background text-foreground placeholder:text-muted-foreground transition-all duration-200",
                      "focus:ring-2 focus:ring-primary/20 focus:border-primary",
                      isRTL ? 'text-right pr-12 pl-4' : 'text-left pl-12 pr-4',
                      errorMessage && 'border-destructive focus:border-destructive focus:ring-destructive/20'
                    )}
                  />
                  <User
                    className={cn(
                      "absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors",
                      isRTL ? 'right-4' : 'left-4'
                    )}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className={cn(
                  "text-sm pr-2 pl-2 font-medium text-foreground block",
                  isRTL ? "text-right" : "text-left"
                )}>
                  {t('password')}
                </label>
                <div className="relative">
                  <Input
                    placeholder={t('enterPassword')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    required
                    dir={isRTL ? 'rtl' : 'ltr'}
                    className={cn(
                      "h-12 rounded-md border-border bg-background text-foreground placeholder:text-muted-foreground transition-all duration-200",
                      "focus:ring-2 focus:ring-primary/20 focus:border-primary",
                      isRTL ? 'text-right pr-12 pl-12' : 'text-left pl-12 pr-12',
                      errorMessage && 'border-destructive focus:border-destructive focus:ring-destructive/20'
                    )}
                  />
                  <Lock
                    className={cn(
                      "absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors",
                      isRTL ? 'right-4' : 'left-4'
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={cn(
                      "absolute top-1/2 transform -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors rounded-md",
                      isRTL ? 'left-3' : 'right-3'
                    )}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className={cn(
                  "flex items-center p-3 bg-destructive/10 border border-destructive/20 rounded-xl",
                  isRTL ? "space-x-reverse" : "space-x-2"
                )}>
                  <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                  <p className="text-sm text-destructive">{errorMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading || !userId.trim() || !password.trim()}
                className={cn(
                  "w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base rounded-xl",
                  "shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5",
                  "disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg",
                  "focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
                )}
              >
                {isLoading ? (
                  <div className={cn(
                    "flex items-center",
                    isRTL ? "space-x-reverse" : "space-x-2"
                  )}>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    <span className={isRTL ? "mr-2" : "ml-2"}>{t('loggingIn')}</span>
                  </div>
                ) : (
                  t('submit')
                )}
              </Button>
            </form>

            
          </div>
        </div>
      </div>
    </div>
  );
}
