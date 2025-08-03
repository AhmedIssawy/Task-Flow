'use client';


import { useGetSectionsPageQuery } from '@/store/services/sectionApi';
import { useGetCourseByIdQuery } from '@/store/services/courseApi';
import  SectionCard  from '@/components/user/SectionCard';
import CreateSectionModal from '@/components/user/CreateSectionModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: { _id: string };
  searchParams: {
    universityId: string;
    collegeId: string;
    departmentId: string;
  };
}

export default function CoursePage({ params, searchParams }: PageProps) {
  const { _id: courseId } = params;
  const [open, setOpen] = useState(false);
  const { universityId, collegeId, departmentId } = searchParams;
  const { data: course } = useGetCourseByIdQuery(courseId);
  const { data: sectionsData } = useGetSectionsPageQuery({
    universityId: "685b0635a4b32e07ca4e97e6",
    collegeId: "685b113ccce35d1be7fb42d6",
    departmentId: "685bd15728a896bea985cf47",
    course: "682618764e5aa50347596bf6",
  });
  
  return (
    <div className="p-6 space-y-6">
       <div className="mb-6">
      <h1 className="text-3xl font-bold mb-1">{course?.name}</h1>
      <p className="text-muted-foreground mb-1 text-sm">Hours: {course?.hours}</p>
    </div>
    <Button onClick={() => setOpen(true)}>+ Add Section</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sectionsData?.sections.map((section) => (
          <SectionCard key={section._id} section={section} />
        ))}
      </div>

      {/* Create Section Modal */}
      <CreateSectionModal
        open={open}
        onClose={() => setOpen(false)}
        courseId={params._id}
        universityId={searchParams.universityId}
        collegeId={searchParams.collegeId}
        departmentId={searchParams.departmentId}
      />
    </div>
  );
}

