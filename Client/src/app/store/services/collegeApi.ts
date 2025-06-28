import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface College {
  _id: string;
  name: string;
  address?: string;
  phone?: string;
  email: string;
  location?: string;
  description?: string;
  website?: string;
  establishedYear?: number;
  logo?: string;
  universityId: string;
}


export const collegeApi = createApi({
  reducerPath: 'collegeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    // GET /colleges/universityId?page=1&limit=40
    getCollegesPage: builder.query<College[], { universityId: string; page?: number; limit?: number }>({
      query: ({ universityId, page = 1, limit = 40 }) =>
        `/colleges/${universityId}?page=${page}&limit=${limit}`,
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