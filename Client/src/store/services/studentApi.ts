import { createApi } from '@reduxjs/toolkit/query/react'
import type { Student, PaginatedStudentsResponse, Grade, Assignment, Calendar as calendar, StudentApiResponse } from '../types/student'
import { baseQueryWithErrorHandling } from '@/lib/baseQueryWithErrorHandling';
import { Course } from '../types/courses';

export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: baseQueryWithErrorHandling(),
  tagTypes: ['Student'],
  endpoints: (builder) => ({
    // Create
    createStudent: builder.mutation<Student, Partial<Student>>({
      query: (newStudentData) => ({
        url: 'admin/student',
        method: 'POST',
        body: newStudentData,
      }),
      invalidatesTags: ['Student'],
    }),

    // Get All (paginated)
    getStudentsPage: builder.query<PaginatedStudentsResponse, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 40 }) =>
        `/students?page=${page}&limit=${limit}`,
      transformResponse: (response: StudentApiResponse) => response.data,
      providesTags: ['Student'],
    }),

    // Get University Students (paginated)
    getStudentsPageOfUniversity: builder.query<Student[], { universityId: string; page?: number; limit?: number }>({
      query: ({ universityId, page = 1, limit = 40 }) =>
        `/students/university/${universityId}?page=${page}&limit=${limit}`,
      providesTags: ['Student'],
    }),

    // Get University Students (all)
    getAllStudentsOfUniversity: builder.query<Student[], string>({
      query: (universityId) => `/students/university/${universityId}/all`,
      providesTags: ['Student'],
    }),

    // Get One
    getStudentById: builder.query<Student, string>({
      query: (id) => `/students/${id}`,
      providesTags: ['Student'],
    }),

    // Update
    updateStudent: builder.mutation<Student, Partial<Student> & { _id: string }>({
      query: ({ _id, ...updates }) => ({
        url: `admin/student/${_id}`,
        method: 'PATCH',
        body: updates,
      }),
      invalidatesTags: ['Student'],
    }),

    // Delete
    deleteStudent: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/students/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Student'],
    }),

    // Get student courses
    getStudentCourses: builder.query<{ courses: Course[] }, string>({
      query: (id) => `/students/${id}/courses`,
    }),

    // Get specific course with teachers populated
    getStudentCourseById: builder.query<{ course: Partial<Course> }, { id: string; courseId: string }>({
      query: ({ id, courseId }) => `/students/${id}/courses/${courseId}`,
    }),

    // Get student grades
    getStudentGrades: builder.query<{ grades: Grade[] }, string>({
      query: (id) => `/students/${id}/grades`,
    }),

    // Get student assignments
    getStudentAssignments: builder.query<{ assignments: Assignment[] }, string>({
      query: (id) => `/students/${id}/assignments`,
    }),

    // Get student calendar
    getStudentCalendar: builder.query<{ calendar: calendar[] }, string>({
      query: (id) => `/students/${id}/calendar`,
    }),
  }),
})

export const {
  useCreateStudentMutation,
  useGetStudentsPageQuery,
  useGetStudentsPageOfUniversityQuery,
  useGetAllStudentsOfUniversityQuery,
  useGetStudentByIdQuery,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
  useGetStudentCoursesQuery,
  useGetStudentCourseByIdQuery,
  useGetStudentGradesQuery,
  useGetStudentAssignmentsQuery,
  useGetStudentCalendarQuery,
} = studentApi
