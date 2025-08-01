'use client';
import {
  useGetStudentByIdQuery
} from '@/store/services/studentApi';
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


  return (
    <div className={`relative min-h-screen bg-gradient-to-br from-background via-background to-accent/20 overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Elements - Enhanced for light/dark mode */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        {/* Primary radial gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-primary/20 dark:to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-purple-500/20 to-pink-500/20 dark:from-accent/20 dark:to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Additional accent orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/15 to-blue-600/15 dark:from-primary/15 dark:to-accent/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      {/* Floating geometric shapes - Enhanced for light/dark mode */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary floating circles */}
        <div className="absolute top-1/4 ltr:right-1/4 rtl:left-1/4 w-6 h-6 bg-blue-500/40 dark:bg-primary/30 rounded-full animate-bounce shadow-lg"></div>
        <div className="absolute bottom-1/3 ltr:left-1/3 rtl:right-1/3 w-4 h-4 bg-purple-500/40 dark:bg-secondary/30 rounded-full animate-bounce delay-500 shadow-lg"></div>
        <div className="absolute top-2/3 ltr:right-1/3 rtl:left-1/3 w-5 h-5 bg-pink-500/40 dark:bg-accent/30 rounded-full animate-bounce delay-1000 shadow-lg"></div>
        
        {/* Additional geometric shapes */}
        <div className="absolute top-1/6 ltr:left-1/6 rtl:right-1/6 w-3 h-3 bg-cyan-500/35 dark:bg-primary/25 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/6 ltr:right-1/6 rtl:left-1/6 w-4 h-4 bg-indigo-500/35 dark:bg-secondary/25 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 ltr:left-1/5 rtl:right-1/5 w-2 h-2 bg-violet-500/40 dark:bg-accent/25 rounded-full animate-bounce delay-1200"></div>
        
        {/* Diamond shapes */}
        <div className="absolute top-3/4 ltr:left-2/3 rtl:right-2/3 w-3 h-3 bg-emerald-500/30 dark:bg-primary/20 transform rotate-45 animate-pulse delay-800"></div>
        <div className="absolute bottom-1/2 ltr:right-1/5 rtl:left-1/5 w-2 h-2 bg-orange-500/35 dark:bg-secondary/20 transform rotate-45 animate-bounce delay-1500"></div>
      </div>
      
      {/* Grid pattern overlay - Enhanced for light/dark mode */}
      <div className="absolute inset-0 opacity-40 dark:opacity-25">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        {/* Diagonal grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,92,246,0.15)_1px,transparent_1px),linear-gradient(-45deg,rgba(139,92,246,0.15)_1px,transparent_1px)] dark:bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-60"></div>
      </div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-15 dark:opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:25px_25px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome Header */}
        <div className="backdrop-blur-xl bg-background/80 border-white/10 dark:border-white/10 shadow-2xl rounded-3xl overflow-hidden p-8 relative">
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
      </div>
    </div>
  );
}
