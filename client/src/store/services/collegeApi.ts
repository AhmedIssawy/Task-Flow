import { createApi } from '@reduxjs/toolkit/query/react';
import { College, CollegeApiResponse, PaginatedCollegesResponse } from '../types/college';
import { baseQueryWithErrorHandling } from '@/lib/baseQueryWithErrorHandling';


export const collegeApi = createApi({
  reducerPath: 'collegeApi',
  baseQuery: baseQueryWithErrorHandling(),
  tagTypes: ['College'],
  endpoints: (builder) => ({
    // GET /colleges/universityId?page=1&limit=40
    getCollegesPage: builder.query<PaginatedCollegesResponse, { universityId: string; page?: number; limit?: number }>({
      query: ({ universityId, page = 1, limit = 40 }) =>
      `/universities/${universityId}/colleges?page=${page}&limit=${limit}`,
      transformResponse: (response: CollegeApiResponse) => response.data,
      providesTags: ['College'],
    }),

    // GET /colleges/universityId/collegeId
    getCollegeById: builder.query<College, { universityId: string; collegeId: string }>({
      query: ({ universityId, collegeId }) =>
        `/colleges/${universityId}/${collegeId}`,
    }),

    // POST /colleges
    createCollege: builder.mutation<College, Partial<College>>({
      query: (body) => ({
        url: '/colleges',
        method: 'POST',
        body,
      }),
    }),

    // PATCH /colleges
    updateCollege: builder.mutation<College, Partial<College> & { id: string }>({
      query: ({ id, ...updateData }) => ({
        url: '/colleges',
        method: 'PATCH',
        body: { id, ...updateData },
      }),
    }),
  }),
});

export const {
  useGetCollegesPageQuery,
  useGetCollegeByIdQuery,
  useCreateCollegeMutation,
  useUpdateCollegeMutation,
} = collegeApi;