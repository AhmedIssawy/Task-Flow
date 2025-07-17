'use client'

import { useGetStudentAssignmentsQuery } from '@/store/services/studentApi'
import { Loader2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function StudentAssignmentsPage() {
  const { data, isLoading, error } = useGetStudentAssignmentsQuery("68272391943893d5e5a21e9a")//todo replace with dynamic student ID

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
        <div className="glass-effect bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 rounded-3xl p-8 text-foreground relative overflow-hidden shadow-2xl mb-8">
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
          <div className="glass-effect text-center text-red-500 p-6 rounded-xl border border-red-500/20 bg-red-500/10">
            Failed to load assignments.
          </div>
        )}

        {!isLoading && data?.assignments?.length === 0 && (
          <div className="glass-effect text-center text-muted-foreground p-8 rounded-xl border border-border/50">
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-2">No Assignments Yet</h3>
              <p>You do not have any assignments.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.assignments?.map((assignment) => (
            <Card key={assignment._id} className="glass-effect hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 cursor-pointer border-border/50 shadow-lg group rounded-2xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden">
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
