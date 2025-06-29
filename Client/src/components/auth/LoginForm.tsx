'use client';

import { getPathByRole } from '@/utils/roleRedirect';
import { useState } from 'react';
import { useLoginMutation } from '@/store/services/authApi';
import { useAppDispatch } from '@/store/hooks';
import { setAuth } from '@/store/slices/authSlice';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { normalizeRole } from '@/utils/role';

export default function LoginForm() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, isError }] = useLoginMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { role, data } = await login({ id: userId, password }).unwrap();
      console.log("role and data", role, data);
      
      const redirectPath = getPathByRole(role, data.id);
      const normalizedRole = normalizeRole(role);

      if (!normalizedRole) {
        console.error('Invalid role from backend:', role);
        return;
      } // temporary error handling

      dispatch(
        setAuth({ id: data.id, mongoId: data._id, role: normalizedRole })
      );
      console.log('✅ Dispatched setAuth with:', {
        id: data.id,
        mongoId: data._id,
        role: normalizedRole,
      });
      router.push(redirectPath);
      console.log('Login response:', role, data);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto mt-20">
      <Input
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        type="text"
        required
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        required
      />
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Logging in...' : 'Login'}
      </Button>
      {isError && (
        <div className="text-sm text-red-500 text-center">
          Invalid credentials
        </div>
      )}
    </form>
  );
}
