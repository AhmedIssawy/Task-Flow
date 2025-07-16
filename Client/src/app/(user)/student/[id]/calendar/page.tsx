"use client";

import { useGetStudentCalendarQuery } from "@/store/services/studentApi";
import { Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">
              My Calendar
            </h1>
            <p className="text-muted-foreground text-lg">
              Stay organized with your schedule and upcoming events
            </p>
          </div>
        </div>

        {/* {isLoading && (
                    <div className="flex justify-center py-10">
                        <Loader2 className="animate-spin h-8 w-8 text-primary" />
                    </div>
                )}

                {error && (
                    <div className="glass-effect text-center text-red-500 p-6 rounded-xl border border-red-500/20 bg-red-500/10">
                        Failed to load calendar.
                    </div>
                )}

                {!isLoading && data?.calendar?.length === 0 && (
                    <div className="glass-effect text-center text-muted-foreground p-8 rounded-xl border border-border/50">
                        <div className="animate-fade-in-up">
                            <h3 className="text-xl font-semibold mb-2">No Events Yet</h3>
                            <p>You do not have any events in your calendar.</p>
                        </div>
                    </div>
                )} */}

        <div className="">
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
            <div className="h-dvh p-14 flex flex-col">
              <div className="flex px-6 items-center gap-2 mb-6">
                <CalendarViewTrigger
                  className="aria-[current=true]:bg-accent"
                  view="day"
                >
                  Day
                </CalendarViewTrigger>
                <CalendarViewTrigger
                  view="week"
                  className="aria-[current=true]:bg-accent"
                >
                  Week
                </CalendarViewTrigger>
                <CalendarViewTrigger
                  view="month"
                  className="aria-[current=true]:bg-accent"
                >
                  Month
                </CalendarViewTrigger>
                <CalendarViewTrigger
                  view="year"
                  className="aria-[current=true]:bg-accent"
                >
                  Year
                </CalendarViewTrigger>

                <span className="flex-1" />

                <CalendarCurrentDate />

                <CalendarPrevTrigger>
                  <ChevronLeft size={20} />
                  <span className="sr-only">Previous</span>
                </CalendarPrevTrigger>

                <CalendarTodayTrigger>Today</CalendarTodayTrigger>

                <CalendarNextTrigger>
                  <ChevronRight size={20} />
                  <span className="sr-only">Next</span>
                </CalendarNextTrigger>
              </div>

              <div className="flex-1 px-6 overflow-hidden">
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
