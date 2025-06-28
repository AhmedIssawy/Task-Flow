// store/services/studentApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
    credentials: 'include',
  }),
  tagTypes: ['Student'],
  endpoints: (builder) => ({
    // 🔹 Create a new student
    createStudent: builder.mutation({
      query: (newStudentData) => ({
        url: '/students',
        method: 'POST',
        body: newStudentData,
      }),
      invalidatesTags: ['Student'],
    }),

    // 🔹 Get paginated students (global)
    getStudentsPage: builder.query({
      query: ({ page = 1, limit = 40 }) =>
        `/students/paginated?page=${page}&limit=${limit}`,
      providesTags: ['Student'],
    }),

    // 🔹 Get paginated students for university
    getStudentsPageOfUniversity: builder.query({
      query: ({ universityId, page = 1, limit = 40 }) =>
        `/students/university/${universityId}/paginated?page=${page}&limit=${limit}`,
      providesTags: ['Student'],
    }),

    // 🔹 Get all students for a university (non-paginated)
    getAllStudentsOfUniversity: builder.query({
      query: (universityId: string) => `/students/university/${universityId}/all`,
      providesTags: ['Student'],
    }),

    // 🔹 Get a student by ID
    getStudentById: builder.query({
      query: (id: string) => `/students/${id}`,
      providesTags: ['Student'],
    }),

    // 🔹 Update a student
    updateStudent: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `/students/${id}`,
        method: 'PATCH',
        body: updates,
      }),
      invalidatesTags: ['Student'],
    }),

    // 🔹 Delete a student
    deleteStudent: builder.mutation({
      query: (id: string) => ({
        url: `/students/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Student'],
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
} = studentApi
