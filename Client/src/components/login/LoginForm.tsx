'use client';

import { getPathByRole } from '@/utils/roleRedirect'
import { useState } from 'react'
import { useLoginMutation } from '@/services/authapi'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { useLanguage } from '@/hooks/useLanguage';
import { normalizeRole } from '@/utils/role';
import { useAppDispatch } from '@/store/hooks';
import { setAuth } from '@/store/slices/authSlice';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Lock, User, Shield, Eye, EyeOff, GraduationCap, UserCog, BookOpen } from 'lucide-react';

export default function LoginForm() {
  const [userId, setUserId] = useState('')
  const [userIdRole, setUserIdRole] = useState('');
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [login, { isLoading }] = useLoginMutation()
  const router = useRouter()
  const t = useTranslations('auth.login')
  const { isRTL } = useLanguage()
  const dispatch = useAppDispatch();
  const fullUserId = `${userIdRole}${userId}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { role, data } = await login({ id: fullUserId, password }).unwrap();

      const redirectPath = getPathByRole(role, data.id);
      const normalizedRole = normalizeRole(role);

      if (!normalizedRole) {
        console.error('Invalid role from backend:', role);
        return;
      }

      dispatch(
        setAuth({ id: data.id, mongoId: data.id, role: normalizedRole })
      );

      router.push(redirectPath);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="w-full flex items-center justify-center bg-gradient-to-br from-primary/8 via-background to-accent/10 px-4 py-8 relative overflow-hidden rounded-3xl">
      {/* Main Content Container */}
      <div className="w-full max-w-md relative z-10">
        {/* Login Card */}
        <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl shadow-primary/5 relative overflow-hidden">


          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {t('welcome')}
              </h2>
              <p className="text-muted-foreground">
                {t('loginToAccount')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Role Selection */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  {t('selectRole')}
                </label>
                <Select onValueChange={(value) => setUserIdRole(value)}>
                  <SelectTrigger className="w-full h-12 bg-background border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl transition-all duration-200">
                    <SelectValue placeholder={t('selectRole')} className="text-foreground" />
                  </SelectTrigger>
                  <SelectContent className="bg-card/95 backdrop-blur-md border border-border/50 shadow-xl rounded-xl p-1 select-content-enhanced">
                    <SelectItem
                      value="STU-"
                      className="text-foreground hover:bg-accent focus:bg-accent rounded-lg cursor-pointer transition-all duration-200 py-3 px-3 role-card-hover"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm role-icon-bg">
                          <GraduationCap className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium">{t('student')}</span>
                          <span className="text-xs text-muted-foreground">Access learning resources</span>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem
                      value="ADMIN-"
                      className="text-foreground hover:bg-accent focus:bg-accent rounded-lg cursor-pointer transition-all duration-200 py-3 px-3 role-card-hover"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm role-icon-bg">
                          <UserCog className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium">{t('admin')}</span>
                          <span className="text-xs text-muted-foreground">System administration</span>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem
                      value="TEA-"
                      className="text-foreground hover:bg-accent focus:bg-accent rounded-lg cursor-pointer transition-all duration-200 py-3 px-3 role-card-hover"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-sm role-icon-bg">
                          <BookOpen className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium">{t('teacher')}</span>
                          <span className="text-xs text-muted-foreground">Manage courses & students</span>
                        </div>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* User ID Input */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  {t('userIdLabel')}
                </label>
                <div className="relative">
                  <Input
                    placeholder={t('enterUserId')}
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    type="text"
                    required
                    className={`h-12 bg-background border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl pl-10 transition-all duration-200 ${isRTL ? 'text-right pr-10 pl-4' : 'text-left'}`}
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  {t('password')}
                </label>
                <div className="relative">
                  <Input
                    placeholder={t('enterPassword')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    required
                    className={`h-12 bg-background border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl pl-10 pr-10 transition-all duration-200 ${isRTL ? 'text-right' : 'text-left'}`}
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading || !userIdRole || !userId}
                className="w-full h-12 bg-gradient-to-r from-primary via-primary-dark to-primary hover:from-primary-dark hover:via-primary hover:to-primary-dark text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    {t('loggingIn')}
                  </div>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" />
                    {t('signIn')}
                  </span>
                )}
              </Button>


            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

