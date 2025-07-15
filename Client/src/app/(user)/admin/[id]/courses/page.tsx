// 'use client'


// import { useGetStudentsPageQuery } from "@/store/services/studentApi";
// import { useState } from "react";

// const CoursesPage = () => {
//   const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
//   const [assignModalOpen, setAssignModalOpen] = useState(false);

//   const { data: allStudents, isLoading } = useGetStudentsPageQuery();

//   const studentsList =
//     allStudents?.map((s) => ({
//       id: s._id,
//       label: `${s.name} (${s.email})`,
//     })) || [];

//   const handleAssign = (studentIds: string[]) => {
//     if (!selectedCourse) return;
//     useGetStudentsPageQuery(); // your mutation
//   };

//   return (
//     <>
//       <PaginatedTable<Course>
//         queryHook={useGetCoursesPageQuery}
//         dataKey="courses"
//         ...
//         enableActions
//         extraActions={(course) => (
//           <Button
//             onClick={() => {
//               setSelectedCourse(course);
//               setAssignModalOpen(true);
//             }}
//           >
//             Assign Students
//           </Button>
//         )}
//       />

//       <AssignModal
//         isOpen={assignModalOpen}
//         onClose={() => setAssignModalOpen(false)}
//         title="Assign Students"
//         description={`Assign students to ${selectedCourse?.name}`}
//         items={studentsList}
//         defaultSelectedIds={selectedCourse?.studentIds ?? []}
//         onSubmit={handleAssign}
//       />
//     </>
//   );
// };
