'use client'

import { useGetStudentGradesQuery } from '@/store/services/studentApi'
import { Loader2, AlertTriangle, GraduationCap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function StudentGradesPage() {
  const { data, isLoading, error } = useGetStudentGradesQuery("68272391943893d5e5a21e9a")//todo replace with dynamic student ID

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-accent/20 overflow-hidden">
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

      <div className="relative z-10 flex-1 p-6">
        {/* Header - Enhanced Glass Effect */}
        <div className="backdrop-blur-xl bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 border border-border/30 rounded-3xl p-8 text-foreground relative overflow-hidden shadow-2xl shadow-primary/10 mb-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-32 translate-x-32 animate-bounce"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-24 -translate-x-24 animate-pulse"></div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">My Grades</h1>
            <p className="text-muted-foreground text-lg">View your academic performance and track your progress</p>
          </div>
        </div>

        {isLoading && (
          <div className="flex justify-center py-12">
            <div className="backdrop-blur-lg bg-background/80 border border-border/30 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="animate-spin h-10 w-10 text-primary" />
                <p className="text-muted-foreground">Loading grades...</p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="backdrop-blur-lg bg-destructive/10 border border-destructive/30 rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-destructive mb-2">Error Loading Grades</h3>
              <p className="text-muted-foreground">Failed to load grades. Please try again later.</p>
            </div>
          </div>
        )}

        {!isLoading && data?.grades?.length === 0 && (
          <div className="backdrop-blur-lg bg-background/80 border border-border/30 rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No Grades Yet</h3>
              <p className="text-muted-foreground">You do not have any grades yet. Check back later for updates.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.grades?.map((grade) => (
            <Card
              key={grade._id}
              className="group relative overflow-hidden backdrop-blur-lg bg-background/80 hover:bg-background/90 border border-border/30 hover:border-primary/40 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <CardContent className="p-6 space-y-4 relative">
                {/* Enhanced hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                {/* Animated border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-500/20 transition-colors duration-300" />

                {/* Enhanced grade indicator with pulse effect */}
                <div className="absolute top-4 right-4 w-10 h-10 backdrop-blur-sm bg-green-500/10 group-hover:bg-green-500/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-green-500/20">
                  <div className="w-3 h-3 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300 animate-pulse"></div>
                </div>

                <div className="relative flex justify-between items-start pr-14">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {grade.courseName}
                  </h2>
                </div>

                <div className="relative backdrop-blur-sm bg-background/40 border border-border/20 rounded-lg p-3 group-hover:bg-background/60 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-sm font-medium text-muted-foreground">Course</span>
                  </div>
                  <p className="text-foreground font-medium">{grade.courseName}</p>
                </div>

                <div className="relative backdrop-blur-sm bg-background/40 border border-border/20 rounded-lg p-3 group-hover:bg-background/60 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-secondary rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-sm font-medium text-muted-foreground">Grade</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">{grade.grade}</span>
                    <Badge
                      variant="outline"
                      className="backdrop-blur-sm bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30 rounded-xl group-hover:bg-green-500/20 group-hover:scale-105 group-hover:shadow-sm transition-all duration-300"
                    >
                      Grade
                    </Badge>
                  </div>
                </div>

                <div className="relative text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span>Course ID: {grade.courseId.slice(-8)}</span>
                  </div>
                </div>

                <div className="relative pt-4 border-t border-border/50 group-hover:border-green-500/30 transition-colors duration-300">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                      Click to view details
                    </span>
                    <div className="w-2 h-2 bg-green-500/50 rounded-full group-hover:bg-green-500 group-hover:scale-125 transition-all duration-300"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
