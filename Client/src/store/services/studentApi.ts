import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Student, PaginatedStudentsResponse, Course, CourseDetails } from '../types/student'

export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/',
    credentials: 'include',
  }),
  tagTypes: ['Student'],
  endpoints: (builder) => ({
    // Create
    createStudent: builder.mutation<Student, Partial<Student>>({
      query: (newStudentData) => ({
        url: '/students',
        method: 'POST',
        body: newStudentData,
      }),
      invalidatesTags: ['Student'],
    }),

    // Get All (paginated)
    getStudentsPage: builder.query<PaginatedStudentsResponse, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 40 }) =>
        `/students?page=${page}&limit=${limit}`,
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
    updateStudent: builder.mutation<Student, Partial<Student> & { id: string }>({
      query: ({ id, ...updates }) => ({
        url: `/students/${id}`,
        method: 'PUT', // changed from PATCH to PUT as per controller
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
    getStudentCourseById: builder.query<{ course: CourseDetails }, { id: string; courseId: string }>({
      query: ({ id, courseId }) => `/students/${id}/courses/${courseId}`,
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
} = studentApi