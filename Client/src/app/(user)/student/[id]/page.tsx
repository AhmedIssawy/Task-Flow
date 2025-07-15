'use client';

import { StudentDashboardCard } from '@/components/dashboard/StudentDashboardCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import {
  useGetStudentByIdQuery,
  useGetStudentCoursesQuery,
} from '@/store/services/studentApi';
import {
  Clock,
  Book,
  Calendar,
  BarChart3,
  Trophy,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Target
} from 'lucide-react';
import { useAppSelector } from '@/store/hooks';


export default function StudentDashboardPage() {
  const studentId = useAppSelector((state) => state.auth.mongoId);
  console.log('Student ID from Redux:', studentId);

  const { data: student, isLoading: loadingStudent } = useGetStudentByIdQuery(studentId ?? "");
  const { data: courseData, isLoading: loadingCourses } = useGetStudentCoursesQuery(studentId ?? "");

  const statsCards = [
    {
      title: "Active Courses",
      value: courseData?.courses?.length || 0,
      subtitle: "Currently enrolled",
      icon: Book,
      variant: "primary" as const,
      change: "+2 this semester"
    },
    {
      title: "Assignments Due",
      value: "5",
      subtitle: "This week",
      icon: Target,
      variant: "warning" as const,
      change: "2 due tomorrow"
    },
    {
      title: "Overall GPA",
      value: "3.8",
      subtitle: "Current semester",
      icon: BarChart3,
      variant: "success" as const,
      change: "+0.2 from last semester"
    },
    {
      title: "Completed Tasks",
      value: "24",
      subtitle: "This month",
      icon: CheckCircle,
      variant: "success" as const,
      change: "12 this week"
    }
  ];

  const todaySchedule = [
    {
      title: "Calculus Lecture",
      subtitle: "8:00 AM - 9:00 AM • Room 101",
      instructor: "Dr. Smith",
      variant: "primary" as const
    },
    {
      title: "English Literature Seminar",
      subtitle: "10:00 AM - 11:00 AM • Room 205",
      instructor: "Prof. Johnson",
      variant: "default" as const
    },
    {
      title: "Physics Lab",
      subtitle: "1:00 PM - 3:00 PM • Lab 301",
      instructor: "Dr. Wilson",
      variant: "warning" as const
    }
  ];

  const recentGrades = [
    {
      title: "Advanced Calculus - Midterm",
      grade: "92%",
      date: "Nov 15",
      variant: "success" as const
    },
    {
      title: "English Literature - Essay",
      grade: "88%",
      date: "Nov 12",
      variant: "success" as const
    },
    {
      title: "Physics - Lab Report",
      grade: "85%",
      date: "Nov 10",
      variant: "primary" as const
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
      Welcome back, {loadingStudent ? '...' : student?.name || 'Student'}! 👋
      </h1>
      <p className="text-muted-foreground text-lg">
      Ready to tackle your goals today? You have 3 classes and 2 assignments due this week.
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Today's Schedule */}
          <Card className="glass-effect border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-200 rounded-2xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  Today&apos;s Schedule
                </CardTitle>
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 rounded-xl">
                  3 classes
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {todaySchedule.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] border border-transparent hover:border-primary/20">
                  {/* Hover indicator */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary rounded-r-full group-hover:h-8 transition-all duration-300" />
                  
                  <div className="flex-1 relative z-10">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">{item.subtitle}</p>
                    <p className="text-xs text-muted-foreground mt-1 group-hover:text-muted-foreground/80 transition-colors">{item.instructor}</p>
                  </div>
                  
                  <div className="relative z-10 p-2 rounded-xl bg-transparent group-hover:bg-primary/10 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
              ))}
              <Button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg rounded-xl transition-colors">
                <Calendar className="w-4 h-4 mr-2" />
                View Full Calendar
              </Button>
            </CardContent>
          </Card>

        {/* Quick Actions & Recent Grades */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="glass-effect border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-200 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="group w-full justify-start hover:bg-primary/10 border-border/50 hover:border-primary/30 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <BookOpen className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Submit Assignment</span>
                </Button>
                <Button variant="outline" className="group w-full justify-start hover:bg-green-500/10 border-border/50 hover:border-green-500/30 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Trophy className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">View Achievements</span>
                </Button>
                <Button variant="outline" className="group w-full justify-start hover:bg-amber-500/10 border-border/50 hover:border-amber-500/30 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <BarChart3 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Grade Analytics</span>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Grades */}
            <Card className="glass-effect border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-200 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <BarChart3 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  Recent Grades
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentGrades.map((grade, index) => (
                  <div key={index} className="group relative flex items-center justify-between p-3 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-green-500/5 hover:to-emerald-500/5 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] border border-transparent hover:border-green-500/20">
                    {/* Hover indicator */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-green-500 rounded-r-full group-hover:h-6 transition-all duration-300" />
                    
                    <div className="flex-1 relative z-10">
                      <h4 className="text-sm font-medium text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">{grade.title}</h4>
                      <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">{grade.date}</p>
                    </div>
                    
                    <Badge className={`rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-sm relative z-10 ${grade.variant === 'success' ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 group-hover:bg-green-500/20' :
                        'bg-primary/10 text-primary border-primary/20 group-hover:bg-primary/20'
                      }`}>
                      {grade.grade}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
      </div>

      {/* Upcoming Courses */}
        {courseData?.courses && courseData.courses.length > 0 && (
          <Card className="glass-effect border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-200 rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Book className="w-5 h-5 text-primary" />
                My Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {loadingCourses ? (
                  Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} className="h-24 w-full glass-effect rounded-2xl" />
                  ))
                ) : (
                  courseData.courses.map((course) => (
                    <div key={course._id} className="glass-effect p-4 rounded-2xl hover:shadow-lg transition-shadow duration-200 cursor-pointer border border-border/50">
                      <StudentDashboardCard
                        title={course.name}
                        subtitle="Click to view details"
                        variant="default"
                        icon={Book}
                      />
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
