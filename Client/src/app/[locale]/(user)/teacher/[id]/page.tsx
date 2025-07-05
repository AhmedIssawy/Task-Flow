'use client';

import { useGetTeacherByIdQuery } from '@/store/services/teacherApi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, GraduationCap, Users, BookOpen, Clock, Mail, Building, School, ChevronRight, BarChart3, Calendar, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/store/hooks';
import { PaginatedTable } from '@/components/admin/PaginatedTable';
import { useGetStudentsPageQuery } from '@/store/services/studentApi';
import { studentColumns } from '@/constants/teacherTableData';

export default function TeacherDashboard() {
  const id = useAppSelector((state) => state.auth.id);
  const { data, isLoading, error } = useGetTeacherByIdQuery(id as string);

  if (isLoading) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="glass-effect p-8 rounded-3xl shadow-2xl">
            <Loader2 className="animate-spin h-8 w-8 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground text-center">Loading teacher dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="glass-effect p-8 rounded-3xl shadow-2xl text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-destructive" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Failed to load teacher data</h2>
            <p className="text-muted-foreground">Please try refreshing the page or contact support.</p>
          </div>
        </div>
      </div>
    );
  }

  const { name, email, role, courses, departmentId, collegeId } = data;

  const statsCards = [
    {
      title: "Total Courses",
      value: courses?.length?.toString() || "0",
      subtitle: "Currently teaching",
      icon: BookOpen,
      variant: "primary" as const,
      change: "Active this semester"
    },
    {
      title: "Total Lectures",
      value: courses?.reduce((acc, course) => acc + (course.lectures?.length || 0), 0)?.toString() || "0",
      subtitle: "Scheduled lectures",
      icon: Calendar,
      variant: "success" as const,
      change: "This semester"
    },
    {
      title: "Course Hours",
      value: courses?.reduce((acc, course) => acc + (course.hours || 0), 0)?.toString() || "0",
      subtitle: "Total teaching hours",
      icon: Clock,
      variant: "warning" as const,
      change: "Per week"
    },
    {
      title: "Students",
      value: "156",
      subtitle: "Across all courses",
      icon: Users,
      variant: "accent" as const,
      change: "Active learners"
    }
  ];

  const quickActions = [
    {
      title: "Create Assignment",
      description: "Add new assignments for your courses",
      icon: Target,
      variant: "primary" as const
    },
    {
      title: "Grade Students",
      description: "Review and grade submitted work",
      icon: BarChart3,
      variant: "success" as const
    },
    {
      title: "Schedule Lecture",
      description: "Plan your upcoming lectures",
      icon: Calendar,
      variant: "warning" as const
    },
    {
      title: "View Analytics",
      description: "Track student performance",
      icon: BarChart3,
      variant: "accent" as const
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
              Welcome back, {name}! 👨‍🏫
            </h1>
            <p className="text-muted-foreground text-lg">
              Ready to inspire and educate? Manage your courses and track student progress.
            </p>
          </div>
        </div>

        {/* Teacher Info Card */}
        <Card className="glass-effect border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-200 rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-foreground">
              <GraduationCap className="w-5 h-5 text-primary" />
              Teacher Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group flex items-center gap-3 p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]">
                <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">{email}</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-secondary/10 hover:to-accent/10 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]">
                <div className="p-2 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <GraduationCap className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Role</p>
                  <p className="font-medium text-foreground group-hover:text-secondary-foreground transition-colors">{role}</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]">
                <div className="p-2 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                  <Building className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Department</p>
                  <p className="font-medium text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{departmentId}</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-orange-500/10 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]">
                <div className="p-2 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                  <School className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">College</p>
                  <p className="font-medium text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{collegeId}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

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
                    stat.variant === 'accent' ? 'bg-accent/10 group-hover:bg-accent/20 group-hover:shadow-accent/20' :
                    'bg-muted/50 group-hover:bg-muted group-hover:shadow-muted/20'
                  }`}>
                    <stat.icon className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 ${
                      stat.variant === 'primary' ? 'text-primary group-hover:text-primary' :
                      stat.variant === 'success' ? 'text-green-600 dark:text-green-400 group-hover:text-green-500' :
                      stat.variant === 'warning' ? 'text-amber-600 dark:text-amber-400 group-hover:text-amber-500' :
                      stat.variant === 'accent' ? 'text-accent-foreground group-hover:text-accent-foreground' :
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Courses Section */}
          <Card className="glass-effect border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-200 rounded-2xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Your Courses
                </CardTitle>
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 rounded-xl">
                  {courses?.length || 0} courses
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {courses?.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">No assigned courses yet.</p>
                  <p className="text-sm text-muted-foreground mt-1">Contact your administrator to get courses assigned.</p>
                </div>
              ) : (
                <>
                  {courses?.map((course) => (
                    <div key={course._id} className="relative flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] border border-transparent hover:border-primary/20">
                      {/* Hover indicator */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary rounded-r-full group-hover:h-8 transition-all duration-300" />
                      
                      <div className="flex-1 relative z-10">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{course.name}</h4>
                        <div className="flex items-center gap-4 mt-1">
                          <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                            {course.lectures?.length ?? 0} lecture{course.lectures?.length !== 1 ? 's' : ''}
                          </p>
                          <Badge variant="outline" className="text-xs">{course.hours} hrs</Badge>
                        </div>
                      </div>
                      
                      <div className="relative z-10 p-2 rounded-xl bg-transparent group-hover:bg-primary/10 transition-all duration-300">
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                      </div>
                    </div>
                  ))}
                </>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-effect border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-200 rounded-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Target className="w-5 h-5 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="group w-full justify-start hover:bg-primary/10 border-border/50 hover:border-primary/30 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden h-auto p-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className={`p-2 rounded-xl mr-3 transition-all duration-300 group-hover:scale-110 relative z-10 ${
                    action.variant === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' :
                    action.variant === 'success' ? 'bg-green-500/10 group-hover:bg-green-500/20' :
                    action.variant === 'warning' ? 'bg-amber-500/10 group-hover:bg-amber-500/20' :
                    action.variant === 'accent' ? 'bg-accent/10 group-hover:bg-accent/20' :
                    'bg-muted/50 group-hover:bg-muted'
                  }`}>
                    <action.icon className={`w-5 h-5 transition-all duration-300 ${
                      action.variant === 'primary' ? 'text-primary' :
                      action.variant === 'success' ? 'text-green-600 dark:text-green-400' :
                      action.variant === 'warning' ? 'text-amber-600 dark:text-amber-400' :
                      action.variant === 'accent' ? 'text-accent-foreground' :
                      'text-muted-foreground group-hover:text-foreground'
                    }`} />
                  </div>
                  <div className="text-left relative z-10">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{action.title}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">{action.description}</p>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Students Management Table */}
        <Card className="glass-effect border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-200 rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Users className="w-5 h-5 text-primary" />
              Students Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PaginatedTable
              queryHook={useGetStudentsPageQuery}
              dataKey="students"
              columns={studentColumns}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
