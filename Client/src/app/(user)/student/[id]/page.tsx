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
import { useTranslations } from 'next-intl';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';


export default function StudentDashboardPage() {
  const studentId = useAuth().mongoId;
  console.log('Student ID from useAuth:', useAuth());
  
  const { isRTL } = useLanguage();
  const t = useTranslations('student.dashboard');//todo apply translations.

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
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome Header */}
        <div className="bg-card rounded-2xl shadow-xl border border-border p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="relative z-10">
            <h1 className={cn(
              "text-3xl md:text-4xl font-bold mb-2 text-foreground font-primary",
              isRTL ? "text-right" : "text-left"
            )}>
              Welcome back, {loadingStudent ? '...' : student?.name}! 👋
            </h1>
            <p className={cn(
              "text-muted-foreground text-lg",
              isRTL ? "text-right" : "text-left"
            )}>
              {loadingStudent ? '...' : student?.email}
            </p>
            <p className={cn(
              "text-muted-foreground text-lg",
              isRTL ? "text-right" : "text-left"
            )}>
              {loadingStudent ? '...' : student?.universityId?.name}
            </p>
            <p className={cn(
              "text-muted-foreground text-lg",
              isRTL ? "text-right" : "text-left"
            )}>
              Ready to tackle your goals today? You have 3 classes and 2 assignments due this week.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((stat, index) => (
            <Card key={index} className="bg-card border border-border rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:scale-[1.02] active:scale-[0.98]">
              <CardContent className="p-6">
                <div className={cn(
                  "flex items-center justify-between",
                  isRTL ? "flex-row-reverse" : "flex-row"
                )}>
                  <div className="flex-1">
                    <p className={cn(
                      "text-sm text-muted-foreground mb-1",
                      isRTL ? "text-right" : "text-left"
                    )}>{stat.title}</p>
                    <p className={cn(
                      "text-3xl font-bold text-foreground font-primary",
                      isRTL ? "text-right" : "text-left"
                    )}>{stat.value}</p>
                    <p className={cn(
                      "text-xs text-muted-foreground mt-1",
                      isRTL ? "text-right" : "text-left"
                    )}>{stat.change}</p>
                  </div>
                  <div className={cn(
                    "p-3 rounded-2xl transition-all duration-300",
                    stat.variant === 'primary' ? 'bg-primary/10' :
                      stat.variant === 'success' ? 'bg-green-500/10' :
                        stat.variant === 'warning' ? 'bg-amber-500/10' :
                          'bg-muted/50',
                    isRTL ? "ml-4" : "mr-4"
                  )}>
                    <stat.icon className={cn(
                      "w-6 h-6",
                      stat.variant === 'primary' ? 'text-primary' :
                        stat.variant === 'success' ? 'text-green-600 dark:text-green-400' :
                          stat.variant === 'warning' ? 'text-amber-600 dark:text-amber-400' :
                            'text-muted-foreground'
                    )} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card border border-border rounded-2xl shadow-xl">
            <CardHeader className="pb-4">
              <div className={cn(
                "flex items-center justify-between",
                isRTL ? "flex-row-reverse" : "flex-row"
              )}>
                <CardTitle className={cn(
                  "flex items-center gap-2 text-foreground font-primary",
                  isRTL ? "flex-row-reverse" : "flex-row"
                )}>
                  <Clock className="w-5 h-5 text-primary" />
                  Todays Schedule
                </CardTitle>
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 rounded-xl">
                  3 classes
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {todaySchedule.map((item, index) => (
                <div key={index} className={cn(
                  "flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-primary/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20",
                  isRTL ? "flex-row-reverse" : "flex-row"
                )}>
                  <div className="flex-1">
                    <h4 className={cn(
                      "font-semibold text-foreground font-primary",
                      isRTL ? "text-right" : "text-left"
                    )}>{item.title}</h4>
                    <p className={cn(
                      "text-sm text-muted-foreground",
                      isRTL ? "text-right" : "text-left"
                    )}>{item.subtitle}</p>
                    <p className={cn(
                      "text-xs text-muted-foreground mt-1",
                      isRTL ? "text-right" : "text-left"
                    )}>{item.instructor}</p>
                  </div>
                  <ArrowRight className={cn(
                    "w-4 h-4 text-muted-foreground",
                    isRTL ? "rotate-180" : ""
                  )} />
                </div>
              ))}
              <Button className={cn(
                "w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-xl transition-all duration-200",
                isRTL ? "flex-row-reverse" : "flex-row"
              )}>
                <Calendar className={cn(
                  "w-4 h-4",
                  isRTL ? "ml-2" : "mr-2"
                )} />
                View Full Calendar
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card border border-border rounded-2xl shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className={cn(
                  "text-foreground font-primary",
                  isRTL ? "text-right" : "text-left"
                )}>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className={cn(
                  "w-full justify-start hover:bg-primary/10 border-border hover:border-primary/30 rounded-xl transition-all duration-300",
                  isRTL ? "flex-row-reverse justify-end" : "justify-start"
                )}>
                  <BookOpen className={cn(
                    "w-4 h-4",
                    isRTL ? "ml-2" : "mr-2"
                  )} />
                  Submit Assignment
                </Button>
                <Button variant="outline" className={cn(
                  "w-full justify-start hover:bg-primary/10 border-border hover:border-primary/30 rounded-xl transition-all duration-300",
                  isRTL ? "flex-row-reverse justify-end" : "justify-start"
                )}>
                  <Trophy className={cn(
                    "w-4 h-4",
                    isRTL ? "ml-2" : "mr-2"
                  )} />
                  View Achievements
                </Button>
                <Button variant="outline" className={cn(
                  "w-full justify-start hover:bg-primary/10 border-border hover:border-primary/30 rounded-xl transition-all duration-300",
                  isRTL ? "flex-row-reverse justify-end" : "justify-start"
                )}>
                  <BarChart3 className={cn(
                    "w-4 h-4",
                    isRTL ? "ml-2" : "mr-2"
                  )} />
                  Grade Analytics
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border rounded-2xl shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className={cn(
                  "flex items-center gap-2 text-foreground font-primary",
                  isRTL ? "flex-row-reverse" : "flex-row"
                )}>
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Recent Grades
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentGrades.map((grade, index) => (
                  <div key={index} className={cn(
                    "flex items-center justify-between p-3 rounded-2xl bg-muted/30 hover:bg-primary/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20",
                    isRTL ? "flex-row-reverse" : "flex-row"
                  )}>
                    <div className="flex-1">
                      <h4 className={cn(
                        "text-sm font-medium text-foreground font-primary",
                        isRTL ? "text-right" : "text-left"
                      )}>{grade.title}</h4>
                      <p className={cn(
                        "text-xs text-muted-foreground",
                        isRTL ? "text-right" : "text-left"
                      )}>{grade.date}</p>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20 rounded-xl">
                      {grade.grade}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div> */}

        {/* My Courses */}
        {courseData?.courses && courseData.courses.length > 0 && (
          <Card className="bg-card border border-border rounded-2xl shadow-xl">
            <CardHeader>
              <CardTitle className={cn(
                "flex items-center gap-2 text-foreground font-primary",
                isRTL ? "flex-row-reverse" : "flex-row"
              )}>
                <Book className="w-5 h-5 text-primary" />
                My Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {loadingCourses ? (
                  Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} className="h-24 w-full rounded-2xl" />
                  ))
                ) : (
                  courseData.courses.map((course) => (
                    <div key={course._id} className="bg-muted/30 p-4 rounded-2xl hover:bg-primary/5 transition-all duration-200 cursor-pointer border border-border hover:border-primary/20">
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
