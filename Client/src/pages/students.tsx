import { useGetStudentsPageQuery } from "@/app/api/studentApiSlice";
import { useState } from "react";
import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { useRouter } from 'next/router';
import type { Student } from "@/types/StudentType";

const StudentsPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetStudentsPageQuery(page, {
    refetchOnMountOrArgChange: true,
  });

  const router = useRouter();

  const students = data?.students ?? [];
  const currentPage = Number(data?.currentPage ?? page);
  const totalPages = Number(data?.totalPages ?? page);

  const renderPageNumbers = () => {
    const pages = [];

    const start = Math.max(1, currentPage - 3);
    const end = Math.min(totalPages, currentPage + 3);

    for (let i = start; i <= end; i++) {
      pages.push(
        <Button
          key={i}
          variant={i === currentPage ? "default" : "ghost"}
          onClick={() => setPage(i)}
          className="px-3 py-2"
        >
          {i}
        </Button>
      );
    }

    return pages;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-slate-50 dark:bg-slate-900">
      <h1 className="text-3xl font-semibold mb-8">Students</h1>

      {isLoading ? (
        <div className="flex justify-center items-center h-64"><p className="text-lg">Loading...</p></div>
      ) : isError ? (
        <div className="flex justify-center items-center h-64"><p className="text-lg text-red-600">Failed to load students. Please try again later.</p></div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {students.map((student: Student) => (
              <Card key={student._id} className="relative hover:shadow-md transition-shadow duration-200">
                <div
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-blue-500 cursor-pointer hover:bg-blue-600"
                  onClick={() =>
                    router.push(`/universities/${student.universityId?._id ?? "*"}`)
                  }
                  title="Go to University"
                />
                <CardContent className="space-y-3 p-6">
                  <p className="text-lg font-medium">{student.name}</p>
                  <p className="text-sm text-muted-foreground">{student.email}</p>
                  <p className="text-sm text-muted-foreground">
                    University: {student.universityId?.name ?? "*"}
                  </p>
                  <Button
                    onClick={() => router.push(`/students/${student._id}`)}
                    variant="outline"
                    className="mt-4"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              variant="ghost"
              disabled={currentPage === 1}
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              className="px-4 py-2"
            >
              Previous
            </Button>

            {renderPageNumbers()}

            <Button
              variant="ghost"
              disabled={currentPage === totalPages}
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              className="px-4 py-2"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentsPage;
