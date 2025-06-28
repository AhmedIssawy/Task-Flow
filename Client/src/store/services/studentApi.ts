import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Student, PaginatedStudentsResponse } from '../types/student'

export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/',
    credentials: 'include',
  }),
  tagTypes: ['Student'],
  endpoints: (builder) => ({
    createStudent: builder.mutation<Student, Partial<Student>>({
      query: (newStudentData) => ({
        url: '/students',
        method: 'POST',
        body: newStudentData,
      }),
      invalidatesTags: ['Student'],
    }),

    getStudentsPage: builder.query<PaginatedStudentsResponse, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 40 }) =>
        `/students/paginated?page=${page}&limit=${limit}`,
      providesTags: ['Student'],
    }),

    getStudentsPageOfUniversity: builder.query<Student[], { universityId: string; page?: number; limit?: number }>({
      query: ({ universityId, page = 1, limit = 40 }) =>
        `/students/university/${universityId}/paginated?page=${page}&limit=${limit}`,
      providesTags: ['Student'],
    }),

    getAllStudentsOfUniversity: builder.query<Student[], string>({
      query: (universityId) => `/students/university/${universityId}/all`,
      providesTags: ['Student'],
    }),

    getStudentById: builder.query<Student, string>({
      query: (id) => `/students/${id}`,
      providesTags: ['Student'],
    }),

    updateStudent: builder.mutation<Student, Partial<Student> & { id: string }>({
      query: ({ id, ...updates }) => ({
        url: `/students/${id}`,
        method: 'PATCH',
        body: updates,
      }),
      invalidatesTags: ['Student'],
    }),

    deleteStudent: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/students/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Student'],
    }),
  }),
})
