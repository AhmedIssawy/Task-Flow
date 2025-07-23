"use client";
import {
  Calendar,
  CalendarCurrentDate,
  CalendarDayView,
  CalendarMonthView,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTodayTrigger,
  CalendarViewTrigger,
  CalendarWeekView,
  CalendarYearView,
} from "@/components/ui/full-calender";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { addHours } from "date-fns";

export default function StudentCalendarPage() {
  // const { data, isLoading, error } = useGetStudentCalendarQuery("68272391943893d5e5a21e9a")

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

      <div className="relative z-10 flex-1 p-3 sm:p-4 lg:p-6">
        {/* Header */}
        <div className="backdrop-blur-xl bg-background/80 border-white/10 dark:border-white/10 shadow-2xl rounded-2xl lg:rounded-3xl overflow-hidden p-4 sm:p-6 lg:p-8 relative mb-4 sm:mb-6 lg:mb-8">
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-primary/10 rounded-full -translate-y-16 translate-x-16 sm:-translate-y-24 sm:translate-x-24 lg:-translate-y-32 lg:translate-x-32 animate-float"></div>
          <div className="relative z-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-gradient">
              My Calendar
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
              Stay organized with your schedule and upcoming events
            </p>
          </div>
        </div>


        <div className="relative backdrop-blur-xl bg-background/95 border border-border/30 rounded-2xl lg:rounded-3xl p-2 sm:p-4 lg:p-6 shadow-2xl shadow-primary/10">
          {/* Calendar container that masks the background grid */}
          <div className="absolute inset-0 bg-background/80 rounded-2xl lg:rounded-3xl"></div>
          <Calendar
            events={[
              {
                id: "1",
                start: new Date(),
                end: addHours(new Date(), 2),
                title: "event A",
                color: "pink",
              },
              {
                id: "2",
                start: addHours(new Date(), 1.5),
                end: addHours(new Date(), 3),
                title: "event B",
                color: "blue",
              },
            ]}
          >
            <div className="relative z-10 h-[calc(100vh-12rem)] sm:h-[calc(100vh-10rem)] lg:h-dvh p-2 sm:p-4 lg:p-14 flex flex-col">
              <div className="flex flex-col sm:flex-row px-2 sm:px-4 lg:px-6 items-start sm:items-center gap-3 sm:gap-2 mb-4 sm:mb-6">
                {/* View triggers - responsive layout */}
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <CalendarViewTrigger
                    className="aria-[current=true]:bg-accent text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
                    view="day"
                  >
                    Day
                  </CalendarViewTrigger>
                  <CalendarViewTrigger
                    view="week"
                    className="aria-[current=true]:bg-accent text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
                  >
                    Week
                  </CalendarViewTrigger>
                  <CalendarViewTrigger
                    view="month"
                    className="aria-[current=true]:bg-accent text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
                  >
                    Month
                  </CalendarViewTrigger>
                  <CalendarViewTrigger
                    view="year"
                    className="aria-[current=true]:bg-accent text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
                  >
                    Year
                  </CalendarViewTrigger>
                </div>

                <span className="hidden sm:flex sm:flex-1" />

                {/* Current date and navigation - responsive layout */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
                  <CalendarCurrentDate />

                  <div className="flex items-center gap-1 sm:gap-2">
                    <CalendarNextTrigger className="p-1 sm:p-2 h-8 w-8 sm:h-10 sm:w-10">
                      <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                      <span className="sr-only">Next</span>
                    </CalendarNextTrigger>
                   

                    <CalendarTodayTrigger className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2">
                      Today
                    </CalendarTodayTrigger>

                     <CalendarPrevTrigger className="p-1 sm:p-2 h-8 w-8 sm:h-10 sm:w-10">
                      <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                      <span className="sr-only">Previous</span>
                    </CalendarPrevTrigger>
                  </div>
                </div>
              </div>

              <div className="flex-1 px-2 sm:px-4 lg:px-6 overflow-hidden">
                <CalendarDayView />
                <CalendarWeekView />
                <CalendarMonthView />
                <CalendarYearView />
              </div>
            </div>
          </Calendar>
        </div>
      </div>
    </div>
  );
}
