'use client';

'use client'

import { getPathByRole } from '@/utils/roleRedirect'
import { useState } from 'react'
import { useLoginMutation } from '@/services/authapi'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { useLanguage } from '@/hooks/useLanguage'


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

export default function LoginForm() {
  const [userId, setUserId] = useState('')
  const [userIdRole, setUserIdRole] = useState('');
  const [password, setPassword] = useState('')
  const [login, { isLoading }] = useLoginMutation()
  const router = useRouter()
  const t = useTranslations('auth.login')
  const { isRTL } = useLanguage()
  const dispatch = useAppDispatch();
  const fullUserId = `${userIdRole}${userId}`;
console.log('Full User ID:', fullUserId);
console.log('User ID Role:', userIdRole);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { role, data } = await login({ id: fullUserId, password }).unwrap();
      console.log('User ID Role:', userIdRole);
      console.log('role and data', role, data);

      const redirectPath = getPathByRole(role, data.id);
      const normalizedRole = normalizeRole(role);

      if (!normalizedRole) {
        console.error('Invalid role from backend:', role);
        return;
      } // temporary error handling

      dispatch(
        setAuth({ id: data.id, mongoId: data._id, role: normalizedRole })
      );

      router.push(redirectPath);
      console.log('Login response:', role, data);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 max-w-sm mx-auto mt-20 ${
        isRTL ? 'text-right' : 'text-left'
      }`}
    >
      <div className="flex">
        <Select onValueChange={(value) => setUserIdRole(value)}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="STU-">Student</SelectItem>
            <SelectItem value="ADMIN-">Admin</SelectItem>
            <SelectItem value="TEA-">Teacher</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder="ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          type="text"
          required
          className={isRTL ? 'text-right' : 'text-left'}
        />
      </div>
      <Input
        placeholder={t('password')}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        required
        className={isRTL ? 'text-right' : 'text-left'}
      />
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Logging in...' : t('signIn')}
      </Button>
      {/* {isError && (
        <div
          className={`text-sm text-red-500 ${
            isRTL ? 'text-right' : 'text-center'
          }`}
        >
          {t('forgotPassword')}
        </div>
      )} */}
    </form>
  );
}

