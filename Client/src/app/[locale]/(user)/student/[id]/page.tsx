'use client';

import { StudentDashboardCard } from '@/components/dashboard/StudentDashboardCard';
import { SideMenu } from '@/components/layout/SideMenu';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import {
  useGetStudentByIdQuery,
  useGetStudentCoursesQuery,
} from '@/store/services/studentApi';
import { Clock } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';

export default function StudentDashboardPage() {
  const studentId = useAppSelector((state) => state.auth.mongoId);
  const auth = useAppSelector((state) => state.auth);
  console.log('Auth state:', auth);
  const { data: student, isLoading: loadingStudent } =
    useGetStudentByIdQuery(studentId ?? '');
  const { data: courseData, isLoading: loadingCourses } =
    useGetStudentCoursesQuery(studentId ?? '');
  console.log('Student data:', student);
  console.log('courseData:', courseData);

  return (
    <div className="flex">
      <SideMenu />
      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        <h1 className="text-2xl font-bold">
          Welcome back, {loadingStudent ? '...' : student?.name}
        </h1>
        <section>
          <h2 className="text-lg font-semibold mb-2">Today&apos;s Schedule</h2>
          <Separator className="mb-4" />
          {/* Static for now — replace with real calendar later */}
          <StudentDashboardCard
            title="Calculus Lecture"
            subtitle="8:00 AM - 9:00 AM"
            icon={Clock}
          />
          <StudentDashboardCard
            title="English Literature Seminar"
            subtitle="10:00 AM - 11:00 AM"
          />
          <StudentDashboardCard
            title="Physics Lab"
            subtitle="1:00 PM - 2:00 PM"
          />
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Upcoming Courses</h2>
          <Separator className="mb-4" />
          {loadingCourses ? (
            <Skeleton className="h-16 w-full" />
          ) : (
            courseData?.courses?.map((c) => (
              <StudentDashboardCard key={c._id} title={c.name} />
            ))
          )}
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Recent Grades</h2>
          <Separator className="mb-4" />
          {/* Static mock data */}
          <StudentDashboardCard
            title="Math Exam"
            rightLabel="85%"
            subtitle="Oct 20"
          />
          <StudentDashboardCard
            title="English Quiz"
            rightLabel="92%"
            subtitle="Oct 15"
          />
          <StudentDashboardCard
            title="Physics Lab"
            rightLabel="78%"
            subtitle="Oct 10"
          />
        </section>

        <div className="space-x-2 mt-6">
          <Button>View Calendar</Button>
          <Button variant="secondary">Submit Assignment</Button>
        </div>
      </main>
    </div>
  );
}
