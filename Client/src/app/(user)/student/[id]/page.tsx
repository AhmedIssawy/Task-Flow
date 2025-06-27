'use client';

import { useParams } from "next/navigation";

export default function StudentPage() {
  const params = useParams();
  const studentId = params?.id;

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Student Dashboard</h1>
      <p className="mt-2 text-muted-foreground">Student ID: {studentId}</p>
    </div>
  );
}