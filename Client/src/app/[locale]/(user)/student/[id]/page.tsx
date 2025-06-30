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
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {loadingStudent ? '...' : student?.name || 'Student'}! 👋
          </h1>
          <p className="text-blue-100 text-lg">
            Ready to tackle your goals today? You have 3 classes and 2 assignments due this week.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-gray-400 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                  <p className="text-xs text-slate-500 dark:text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-xl ${
                  stat.variant === 'primary' ? 'bg-blue-100 dark:bg-blue-900' :
                  stat.variant === 'success' ? 'bg-emerald-100 dark:bg-emerald-900' :
                  stat.variant === 'warning' ? 'bg-amber-100 dark:bg-amber-900' :
                  'bg-slate-100 dark:bg-gray-800'
                }`}>
                  <stat.icon className={`w-6 h-6 ${
                    stat.variant === 'primary' ? 'text-blue-600 dark:text-blue-400' :
                    stat.variant === 'success' ? 'text-emerald-600 dark:text-emerald-400' :
                    stat.variant === 'warning' ? 'text-amber-600 dark:text-amber-400' :
                    'text-slate-600 dark:text-gray-400'
                  }`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Schedule */}
        <Card className="border-slate-200 dark:border-gray-700">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                <Clock className="w-5 h-5 text-blue-600" />
                Today's Schedule
              </CardTitle>
              <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-400">
                3 classes
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {todaySchedule.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-gray-800/50 hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-400">{item.subtitle}</p>
                  <p className="text-xs text-slate-500 dark:text-gray-500 mt-1">{item.instructor}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>
            ))}
            <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
              <Calendar className="w-4 h-4 mr-2" />
              View Full Calendar
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions & Recent Grades */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="border-slate-200 dark:border-gray-700">
            <CardHeader className="pb-4">
              <CardTitle className="text-slate-900 dark:text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start hover:bg-blue-50 dark:hover:bg-blue-950">
                <BookOpen className="w-4 h-4 mr-2" />
                Submit Assignment
              </Button>
              <Button variant="outline" className="w-full justify-start hover:bg-emerald-50 dark:hover:bg-emerald-950">
                <Trophy className="w-4 h-4 mr-2" />
                View Achievements
              </Button>
              <Button variant="outline" className="w-full justify-start hover:bg-amber-50 dark:hover:bg-amber-950">
                <BarChart3 className="w-4 h-4 mr-2" />
                Grade Analytics
              </Button>
            </CardContent>
          </Card>

          {/* Recent Grades */}
          <Card className="border-slate-200 dark:border-gray-700">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                <BarChart3 className="w-5 h-5 text-emerald-600" />
                Recent Grades
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentGrades.map((grade, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-gray-800/50">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-slate-900 dark:text-white">{grade.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-gray-500">{grade.date}</p>
                  </div>
                  <Badge className={`${
                    grade.variant === 'success' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300' :
                    'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
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
        <Card className="border-slate-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
              <Book className="w-5 h-5 text-blue-600" />
              My Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {loadingCourses ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-24 w-full" />
                ))
              ) : (
                courseData.courses.map((course) => (
                  <StudentDashboardCard 
                    key={course._id} 
                    title={course.name}
                    subtitle="Click to view details"
                    variant="default"
                    icon={Book}
                  />
                ))
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
