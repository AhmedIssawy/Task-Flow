'use client'

import { useGetStudentAssignmentsQuery } from '@/store/services/studentApi'
import { Loader2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function StudentAssignmentsPage() {
  const { data, isLoading, error } = useGetStudentAssignmentsQuery("68272391943893d5e5a21e9a")//todo replace with dynamic student ID

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
        {/* Header */}
        <div className="backdrop-blur-xl bg-background/80 border-white/10 dark:border-white/10 shadow-2xl rounded-3xl overflow-hidden p-8 relative mb-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">My Assignments</h1>
            <p className="text-muted-foreground text-lg">Track your assignments and stay on top of deadlines</p>
          </div>
        </div>

        {isLoading && (
          <div className="flex justify-center py-10">
            <Loader2 className="animate-spin h-8 w-8 text-primary" />
          </div>
        )}

        {error && (
          <div className="backdrop-blur-xl bg-background/80 border-red-500/20 text-center text-red-500 p-6 rounded-3xl shadow-2xl">
            Failed to load assignments.
          </div>
        )}

        {!isLoading && data?.assignments?.length === 0 && (
          <div className="backdrop-blur-xl bg-background/80 border-white/10 dark:border-white/10 text-center text-muted-foreground p-8 rounded-3xl shadow-2xl">
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-2">No Assignments Yet</h3>
              <p>You do not have any assignments.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.assignments?.map((assignment) => (
            <Card key={assignment._id} className="backdrop-blur-xl bg-background/80 border-white/10 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group rounded-3xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden">
              <CardContent className="p-6 space-y-4 relative">
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-500/20 transition-colors duration-300" />
                
                {/* Priority indicator */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-amber-500/20 group-hover:border-t-amber-500/40 transition-colors duration-300 rounded-tr-2xl" />
                
                <div className="relative flex justify-between items-start">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">{assignment.title}</h2>
                  <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20 rounded-xl group-hover:bg-secondary/20 group-hover:scale-105 transition-all duration-300">
                    {assignment.courseName}
                  </Badge>
                </div>
                
                <div className="relative text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                  Due Date: {new Date(assignment.dueDate).toLocaleDateString()}
                </div>
                
                <div className="relative pt-2 border-t border-border/50 group-hover:border-amber-500/20 transition-colors duration-300">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">Click to view details</span>
                    <div className="w-2 h-2 bg-amber-500/50 rounded-full group-hover:bg-amber-500 group-hover:scale-125 transition-all duration-300"></div>
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
