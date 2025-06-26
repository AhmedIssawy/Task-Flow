import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAppDispatch } from '@/store/hooks';
import { setCredentials } from '@/store/slices/authSlice';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useLoginMutation } from '@/hooks/api/useLogin';
import { toast } from 'react-hot-toast';
import { useAppSelector } from '@/store/hooks';
import { selectIsAuthenticated, selectUser } from '@/store/slices/authSlice';

// Login form validation schema
const loginSchema = z.object({
  userId: z.string().min(1, 'User ID is required'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { mutate: login, isPending: isLoading, error } = useLoginMutation();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectUser);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && user?.id) {
      const rolePathMap = {
        STUDENT: 'student',
        TEACHER: 'teacher',
        ADMIN: 'admin',
        SUPER_ADMIN: 'admins',
      };

      const rolePath = rolePathMap[user.role] || 'student';
      const cleanId = user.id.replace(/^STU-/, '');
      router.replace(`/${rolePath}/${cleanId}`);
    }
  }, [isAuthenticated, user, router]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data: LoginFormData) => {
    login(
      {
        userId: data.userId,
        password: data.password,
      },
      {
        onSuccess: (response) => {
          // Log the full API response for debugging
          console.log('🚀 API Response:', response.data);
          console.log('🎭 Role from API:', response.data.role);
          console.log('👤 User data from API:', response.data.data);

          toast.success('Login successful!');

          // Get role directly from API response - NO hardcoding
          const apiRole = response.data.role;

          if (!apiRole) {
            toast.error('Role not received from API');
            console.error('❌ No role found in API response:', response.data);
            return;
          }

          // Convert API role format to internal format
          const convertRole = (role: string) => {
            const roleMap: Record<
              string,
              'STUDENT' | 'TEACHER' | 'ADMIN' | 'SUPER_ADMIN'
            > = {
              'super-admin': 'SUPER_ADMIN',
              admin: 'ADMIN',
              teacher: 'TEACHER',
              student: 'STUDENT',
            };
            return roleMap[role] || 'STUDENT';
          };

          const internalRole = convertRole(apiRole);
          console.log('🔄 Role conversion:', { apiRole, internalRole });

          // Create user object from API response data
          const userData = {
            id: response.data.data.id || response.data.data._id,
            email: data.userId,
            name: response.data.data.name,
            role: internalRole,
            profileData: {},
          };

          // Save to Redux store (this will also persist to sessionStorage via the slice)
          const token = response.data.token || 'auth-token-placeholder';
          dispatch(
            setCredentials({
              user: userData,
              token: token,
            })
          );

          console.log('🔄 Redux state updated with user data');
          console.log('💾 SessionStorage should now contain auth data');

          // Role-based redirection using API role (not hardcoded)
          const redirectMap: Record<string, (id: string) => string> = {
            'super-admin': () => '/admins',
            admin: () => '/admin',
            teacher: () => '/teacher',
            student: (id: string) => `/student/${id}`,
          };

          const redirectFn =
            redirectMap[apiRole] || (() => `/student/${userData.id}`);
          const cleanId = userData.id.replace(/^STU-/, '');
          const redirectPath = redirectFn(cleanId);

          // Redirect after successful login
          console.log(
            '🎯 Redirecting to:',
            redirectPath,
            'based on API role:',
            apiRole
          );
          router.push(redirectPath);
        },

        onError: (error) => {
          const errorMessage = error.response?.data?.message || 'Login failed';
          toast.error(errorMessage);
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-theme flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header with home button and theme controls */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push('/')}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              title="Go to Home"
            >
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </button>
            <h1 className="text-2xl font-logo text-primary">Task-Flow</h1>
          </div>
          <div className="flex gap-2">
            {/* <LanguageSwitcher /> */}
            <ThemeToggle />
          </div>
        </div>

        {/* Login Form */}
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-body">
              {t('auth.loginTitle')}
            </CardTitle>
            <CardDescription className="font-body">
              {t('auth.loginRequired')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {' '}
              {/* User ID Field */}
              <div className="space-y-2">
                <Label htmlFor="userId" className="font-body">
                  {t('auth.userId')}
                </Label>
                <Input
                  id="userId"
                  type="text"
                  {...register('userId')}
                  className="font-body"
                  placeholder="student@uni.edu"
                />
                {errors.userId && (
                  <p className="text-sm text-red-500 font-body">
                    {errors.userId.message}
                  </p>
                )}
              </div>
              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="font-body">
                  {t('auth.password')}
                </Label>
                <Input
                  id="password"
                  type="password"
                  {...register('password')}
                  className="font-body"
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="text-sm text-red-500 font-body">
                    {errors.password.message}
                  </p>
                )}
              </div>{' '}
              {/* Error Message */}
              {error && (
                <div className="text-red-500 text-sm text-center font-body">
                  {error.response?.data?.message || 'Login failed'}
                </div>
              )}
              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full font-body"
                disabled={isLoading}
              >
                {isLoading ? t('auth.loggingIn') : t('auth.loginButton')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;

// Add getServerSideProps to disable static optimization
export async function getServerSideProps() {
  return {
    props: {},
  };
}
