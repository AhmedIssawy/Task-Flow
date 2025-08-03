'use client';

import { useState } from 'react';
import { useGetTeacherByIdQuery } from '@/store/services/teacherApi';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PaginatedTable } from '@/components/admin/PaginatedTable';
import { useGetStudentsPageQuery } from '@/store/services/studentApi';
import { studentColumns } from '@/constants/teacherTableData';
import PaginationControls from '@/components/tables/PaginatedControls';
import { useAuth } from '@/hooks/useAuth';

export default function TeacherDashboard() {
  const id = useAuth().id;
  const { data, isLoading, error } = useGetTeacherByIdQuery(id as string);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const studentsQueryResult = useGetStudentsPageQuery({ page, limit });
  const totalPages: number = studentsQueryResult?.data?.pagination?.totalPages || 1;

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <Loader2 className="animate-spin h-6 w-6 text-muted-foreground" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-center text-red-500">
        Failed to load teacher data.
      </div>
    );
  }

  const { name, email, role, courses = [], departmentId, collegeId } = data;

  return (
    <div className="flex-1 p-6">
      <h1 className="text-2xl font-semibold mb-4">Welcome, {name}</h1>

      <Card className="mb-6">
        <CardContent className="p-4 space-y-1">
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Role:</strong> {role}
          </p>
          <p>
            <strong>Department ID:</strong> {departmentId}
          </p>
          <p>
            <strong>College ID:</strong> {collegeId}
          </p>
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold mb-3">Courses You Teach</h2>
      {!courses || courses.length === 0 ? (
        <div className="text-muted-foreground">No assigned courses yet.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses?.map((course) => (
            <Card
              key={course._id}
              className="hover:shadow-md transition-shadow"
            >
              <CardContent className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{course.name}</h3>
                  <Badge variant="outline">{course.hours} hrs</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {course.lectures?.length ?? 0} lecture
                  {course.lectures?.length !== 1 ? 's' : ''}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}



      <div className="w-full space-y-4 mt-4">
        <PaginatedTable
          queryResult={studentsQueryResult}
          dataKey="students"
          columns={studentColumns}
          className="mt-10"
        />

        <PaginationControls
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          limit={limit}
          setLimit={setLimit}
          showLimitControls={true}
          showMoreLessControls={true}
        />
      </div>

    </div>
  );
}
