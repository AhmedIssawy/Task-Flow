import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
// import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { useAppSelector } from "@/store/hooks";
import { selectIsAuthenticated } from "@/store/slices/authSlice";
import { useLoginMutation } from "@/store/api/authApiSlice";

// Login form validation schema
const loginSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const [login, { isLoading, error }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // Redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);
  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await login({
        userId: data.userId,
        password: data.password,
      }).unwrap();

      // Store in localStorage if remember me is checked
      if (data.rememberMe) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
      }

      // Redirect based on user role
      const rolePaths = {
        STUDENT: "/student",
        TEACHER: "/teacher",
        ADMIN: "/admin",
        SUPER_ADMIN: "/superadmin",
      }; const redirectPath = rolePaths[result.user.role] || "/";
      router.push(redirectPath);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-theme flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header with home button and theme controls */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/")}
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
              {t("auth.loginTitle")}
            </CardTitle>
            <CardDescription className="font-body">
              {t("auth.loginRequired")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">              {/* User ID Field */}
              <div className="space-y-2">
                <Label htmlFor="userId" className="font-body">
                  {t("auth.userId")}
                </Label>
                <Input
                  id="userId"
                  type="text"
                  {...register("userId")}
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
                  {t("auth.password")}
                </Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  className="font-body"
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="text-sm text-red-500 font-body">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {/* Error Message */}{" "}
              {error && (
                <div className="text-red-500 text-sm text-center font-body">
                  {"data" in error &&
                    error.data &&
                    typeof error.data === "object" &&
                    "message" in error.data
                    ? (error.data as { message: string }).message
                    : "Login failed"}
                </div>
              )}
              {/* Submit Button */}              <Button
                type="submit"
                className="w-full font-body"
                disabled={isLoading}
              >
                {isLoading ? t("auth.loggingIn") : t("auth.loginButton")}
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
