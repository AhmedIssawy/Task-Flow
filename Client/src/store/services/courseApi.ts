import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithErrorHandling } from '@/lib/baseQueryWithErrorHandling'
import type { Course, PaginatedCoursesResponse, ApiResponse } from '../types/courses'

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: baseQueryWithErrorHandling(),
  tagTypes: ['Course'],
  endpoints: (builder) => ({
    
    getCoursesPage: builder.query<PaginatedCoursesResponse, { departmentId: string; page?: number; limit?: number }>({
      query: ({departmentId, page = 1, limit = 40 }) =>
        `/courses?departmentId=${departmentId}page=${page}&limit=${limit}`,
      transformResponse: (res: ApiResponse<PaginatedCoursesResponse>) => res.data,
      providesTags: ['Course'],
    }),


    getCourseById: builder.query<Course, string>({
      query: (courseId) => `/courses/${courseId}`,
      transformResponse: (res: ApiResponse<Course>) => res.data,
      providesTags: ['Course'],
    }),

    // Create
    createCourse: builder.mutation<Course, Partial<Course>>({
      query: (newCourse) => ({
        url: '/admin/course',
        method: 'POST',
        body: newCourse,
      }),
      invalidatesTags: ['Course'],
    }),

    updateCourse: builder.mutation<Course, { courseId: string; updates: Partial<Course> }>({
      query: ({ courseId, updates }) => ({
        url: `/admin/course/${courseId}`,
        method: 'PATCH',
        body: updates,
      }),
      invalidatesTags: ['Course'],
    }),

    deleteCourse: builder.mutation<{ message: string }, string>({
      query: (courseId) => ({
        url: `/courses/${courseId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Course'],
    }),
  }),
})

export const {
  useGetCoursesPageQuery,
  useGetCourseByIdQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = courseApi
