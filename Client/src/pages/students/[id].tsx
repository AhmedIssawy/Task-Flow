import { useGetStudentByIdQuery } from "@/app/api/studentApiSlice";
import { useRouter } from 'next/router';
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Skeleton } from "@/Components/ui/skeleton";
import { Button } from "@/Components/ui/button";
import { useMemo } from "react";

const StudentDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  // Ensure id is a string for the query, or skip if not available/valid
  // For simplicity, we'll cast to string, assuming id will be available.
  // A more robust solution would use router.isReady and skip the query if id is not yet available.
  const studentId = Array.isArray(id) ? id[0] : id;

  const { data, isLoading, isError } = useGetStudentByIdQuery(studentId!, {
    skip: !studentId, // Skip query if studentId is not yet available
    refetchOnMountOrArgChange: true,
  });

  const student = useMemo(() => data ?? null, [data]);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
    );
  }

  if (isError || !student) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <p className="text-red-500 text-lg">Failed to load student details.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold">{student.name}</h1>
        <p className="text-muted-foreground text-sm">{student.email}</p>
        <Badge variant="outline" className="mt-2">
          University ID: {student?.universityId?.name ?? "N/A"}
        </Badge>
      </div>

      <Card>
        <CardContent className="p-6 space-y-2">
          <p className="text-lg font-medium">Courses</p>
          {student?.courses?.length > 0 ? (
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {student?.courses.map((course: string, index: number) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">
              No courses enrolled.
            </p>
          )}
        </CardContent>
      </Card>

      <Button variant="outline" onClick={() => router.back()}>
        Go Back
      </Button>
    </div>
  );
};

export default StudentDetailsPage;
