'use client';

import { getPathByRole } from '../../utils/roleRedirect';
import { useState } from 'react';
import { useLoginMutation } from '@/app/store/services/authApi';
import { useDispatch } from 'react-redux';
import { setAuth } from '@/app/store/slices/authSlice';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LoginForm() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, isError }] = useLoginMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { role, data } = await login({ id: userId, password }).unwrap();
      const redirectPath = getPathByRole(role, data.id);
      
      const normalizedRole = role.toUpperCase() as 'STUDENT' | 'TEACHER' | 'ADMIN' | 'SUPER_ADMIN';
      dispatch(setAuth({ id: data.id, role: normalizedRole }));
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
