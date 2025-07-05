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
import { Lock, User, Eye, EyeOff } from 'lucide-react';

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
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-card p-6 shadow-sm">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            {t('welcome')}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t('loginToAccount')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t('selectRole')}
            </label>
            <Select onValueChange={(value) => setUserIdRole(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={t('selectRole')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="STU-">{t('student')}</SelectItem>
                <SelectItem value="ADMIN-">{t('admin')}</SelectItem>
                <SelectItem value="TEACHER-">{t('teacher')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* User ID Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t('userIdLabel')}
            </label>
            <div className="relative">
              <Input
                placeholder={t('enterUserId')}
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                type="text"
                required
                className={`${isRTL ? 'text-right pr-10 pl-3' : 'text-left pl-10 pr-3'}`}
              />
              <User className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t('password')}
            </label>
            <div className="relative">
              <Input
                placeholder={t('enterPassword')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                required
                className={`${isRTL ? 'text-right pr-10 pl-10' : 'text-left pl-10 pr-10'}`}
              />
              <Lock className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground`}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading || !userIdRole || !userId}
            className="w-full"
          >
            {isLoading ? t('loggingIn') : t('signIn')}
          </Button>
        </form>
      </div>
    </div>
  );
}

