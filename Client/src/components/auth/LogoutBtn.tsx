'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '@/services/authapi';
import { clearAuth } from '@/store/slices/authSlice';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

export default function LogoutButton() {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout().unwrap(); // Call backend
    } catch (err) {
      console.error('Logout failed:', err);
      toast.error('Failed to log out');
    } finally {
      dispatch(clearAuth());   // Clear local auth state
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
