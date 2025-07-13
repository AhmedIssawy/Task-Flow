'use client'

import { useGetStudentGradesQuery } from '@/store/services/studentApi'
import { Loader2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function StudentGradesPage() {
  const { data, isLoading, error } = useGetStudentGradesQuery("68272391943893d5e5a21e9a")

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

      <div className="relative z-10 flex-1 p-6">
        {/* Header */}
        <div className="glass-effect bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 rounded-2xl p-8 text-foreground relative overflow-hidden shadow-3xl animate-fade-in-up mb-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-32 translate-x-32 animate-float"></div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">My Grades</h1>
            <p className="text-muted-foreground text-lg">View your academic performance and track your progress</p>
          </div>
        </div>

        {isLoading && (
          <div className="flex justify-center py-10">
            <Loader2 className="animate-spin h-8 w-8 text-primary" />
          </div>
        )}

        {error && (
          <div className="glass-effect text-center text-red-500 p-6 rounded-xl border border-red-500/20 bg-red-500/10">
            Failed to load grades.
          </div>
        )}

        {!isLoading && data?.grades?.length === 0 && (
          <div className="glass-effect text-center text-muted-foreground p-8 rounded-xl border border-border/50">
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-2">No Grades Yet</h3>
              <p>You do not have any grades yet.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
          {data?.grades?.map((grade) => (
            <Card key={grade._id} className="glass-effect hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 cursor-pointer border-border/50 shadow-lg group rounded-2xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden">
              <CardContent className="p-6 space-y-4 relative">
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-500/20 transition-colors duration-300" />
                
                {/* Grade indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-green-500/10 group-hover:bg-green-500/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                </div>
                
                <div className="relative flex justify-between items-start pr-12">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">{grade.courseName}</h2>
                </div>
                
                <div className="relative">
                  <Badge variant="outline" className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 rounded-xl group-hover:bg-green-500/20 group-hover:scale-105 group-hover:shadow-sm transition-all duration-300">
                    {grade.grade}
                  </Badge>
                </div>
                
                <div className="relative text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                  Course ID: {grade.courseId.slice(-8)}
                </div>
                
                <div className="relative pt-2 border-t border-border/50 group-hover:border-green-500/20 transition-colors duration-300">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">Click to view details</span>
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
