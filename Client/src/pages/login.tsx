import { useState } from "react";
import { useLoginMutation } from "@/app/api/auth";
import type { loginInput } from "@/types/StudentType";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Loader2 } from "lucide-react";
import { useRouter } from 'next/router';
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [studentDetails, setStudentDetails] = useState<loginInput>({
    studentId: "",
    password: "",
  });

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(studentDetails).unwrap();
      toast.success("Login successful");
      localStorage.setItem("jwt", res.token);
      localStorage.setItem("student", JSON.stringify(res.student));
      router.push(`/students/${res.student._id}`);
    } catch (error) {
      toast.error("Login failed");
      console.error("Login failed", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-lg border rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="text"
              placeholder="Student ID"
              value={studentDetails.studentId}
              onChange={(e) =>
                setStudentDetails({
                  ...studentDetails,
                  studentId: e.target.value,
                })
              }
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={studentDetails.password}
              onChange={(e) =>
                setStudentDetails({
                  ...studentDetails,
                  password: e.target.value,
                })
              }
              required
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
