'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { authApi, useLogoutMutation } from '@/store/services/authApi'
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useAppDispatch } from '@/store/hooks';

export default function LogoutButton() {
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout().unwrap(); 
      dispatch(authApi.util.resetApiState());
    } catch (err) {
      console.error('Logout failed:', err);
      toast.error('Failed to log out');
    } finally {
      router.push('/login');   // Redirect to login
      toast.success('Logged out successfully');
    }
  };

  return (
    <Button onClick={handleLogout} variant="ghost" className="w-full justify-start">
      <LogOut className="mr-2 h-4 w-4" />
      <span>Logout</span>
    </Button>
  );
}
