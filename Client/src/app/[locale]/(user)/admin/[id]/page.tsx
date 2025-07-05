'use client';

import {
  useGetStudentsPageQuery,
  useDeleteStudentMutation,
  useUpdateStudentMutation,
  useCreateStudentMutation,
} from '@/store/services/studentApi';
import { PaginatedTable } from '@/components/admin/PaginatedTable';
import { adminStudentCreateFields, adminStudentEditFields, adminStudentsTableData } from '@/constants/adminTableData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  UserPlus, 
  GraduationCap, 
  BookOpen, 
  BarChart3, 
  Settings,
  Shield,
  TrendingUp,
  Activity
} from 'lucide-react';

import type { Student } from '@/store/types/student';

export default function AdminDashboard() {
  const { data: studentsData } = useGetStudentsPageQuery({ page: 1, limit: 1000 });
  const totalStudents = studentsData?.students?.length || 0;

  const statsCards = [
    {
      title: "Total Students",
      value: totalStudents.toString(),
      subtitle: "Registered users",
      icon: Users,
      variant: "primary" as const,
      change: "+12 this month"
    },
    {
      title: "Active Courses",
      value: "24",
      subtitle: "Currently running",
      icon: BookOpen,
      variant: "success" as const,
      change: "+3 new courses"
    },
    {
      title: "System Health",
      value: "98.5%",
      subtitle: "Uptime this month",
      icon: Activity,
      variant: "success" as const,
      change: "Excellent performance"
    },
    {
      title: "Pending Reviews",
      value: "7",
      subtitle: "Require attention",
      icon: Shield,
      variant: "warning" as const,
      change: "2 urgent"
    }
  ];

  const quickActions = [
    {
      title: "Add New Student",
      description: "Register a new student account",
      icon: UserPlus,
      variant: "primary" as const
    },
    {
      title: "Course Management",
      description: "Manage courses and assignments",
      icon: GraduationCap,
      variant: "secondary" as const
    },
    {
      title: "Analytics Dashboard",
      description: "View detailed system analytics",
      icon: BarChart3,
      variant: "accent" as const
    },
    {
      title: "System Settings",
      description: "Configure system preferences",
      icon: Settings,
      variant: "muted" as const
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-accent/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 ltr:left-10 rtl:right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 ltr:right-10 rtl:left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 ltr:right-1/4 rtl:left-1/4 w-6 h-6 bg-primary/30 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 ltr:left-1/3 rtl:right-1/3 w-4 h-4 bg-secondary/30 rounded-full animate-float-reverse"></div>
      <div className="absolute top-2/3 ltr:right-1/3 rtl:left-1/3 w-5 h-5 bg-accent/30 rounded-full animate-float-delayed"></div>

      <div className="relative z-10 space-y-8 p-6">
        {/* Welcome Header */}
        <div className="glass-effect bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 rounded-3xl p-8 text-foreground relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">
              Admin Dashboard 🛡️
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your educational platform with comprehensive administrative tools.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((stat, index) => (
            <Card key={index} className="glass-effect relative overflow-hidden border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 shadow-lg group rounded-2xl cursor-pointer hover:scale-[1.02] active:scale-[0.98]">
              <CardContent className="p-6 relative">
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1 group-hover:text-muted-foreground/80 transition-colors">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1 group-hover:text-muted-foreground/80 transition-colors">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
                    stat.variant === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-primary/20' :
                    stat.variant === 'success' ? 'bg-green-500/10 group-hover:bg-green-500/20 group-hover:shadow-green-500/20' :
                    stat.variant === 'warning' ? 'bg-amber-500/10 group-hover:bg-amber-500/20 group-hover:shadow-amber-500/20' :
                    'bg-muted/50 group-hover:bg-muted group-hover:shadow-muted/20'
                  }`}>
                    <stat.icon className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 ${
                      stat.variant === 'primary' ? 'text-primary group-hover:text-primary' :
                      stat.variant === 'success' ? 'text-green-600 dark:text-green-400 group-hover:text-green-500' :
                      stat.variant === 'warning' ? 'text-amber-600 dark:text-amber-400 group-hover:text-amber-500' :
                      'text-muted-foreground group-hover:text-foreground'
                    }`} />
                  </div>
                </div>
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="glass-effect border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-200 rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-foreground">
              <TrendingUp className="w-5 h-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="group h-auto p-6 flex flex-col items-center text-center space-y-3 hover:bg-primary/10 border-border/50 hover:border-primary/30 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className={`p-3 rounded-2xl transition-all duration-300 group-hover:scale-110 relative z-10 ${
                    action.variant === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' :
                    action.variant === 'secondary' ? 'bg-secondary/10 group-hover:bg-secondary/20' :
                    action.variant === 'accent' ? 'bg-accent/10 group-hover:bg-accent/20' :
                    'bg-muted/50 group-hover:bg-muted'
                  }`}>
                    <action.icon className={`w-6 h-6 transition-all duration-300 ${
                      action.variant === 'primary' ? 'text-primary' :
                      action.variant === 'secondary' ? 'text-secondary-foreground' :
                      action.variant === 'accent' ? 'text-accent-foreground' :
                      'text-muted-foreground group-hover:text-foreground'
                    }`} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{action.title}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">{action.description}</p>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Students Management Table */}
        <Card className="glass-effect border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-200 rounded-2xl">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Users className="w-5 h-5 text-primary" />
                Students Management
              </CardTitle>
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 rounded-xl">
                {totalStudents} students
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <PaginatedTable<Student>
              queryHook={useGetStudentsPageQuery}
              dataKey="students"
              columns={adminStudentsTableData}
              enableActions
              deleteHook={useDeleteStudentMutation}
              editHook={useUpdateStudentMutation}
              editableFields={adminStudentEditFields}
              createHook={useCreateStudentMutation}
              createFields={adminStudentCreateFields}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
