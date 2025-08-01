import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithErrorHandling } from '@/lib/baseQueryWithErrorHandling';
import {
  Section,
  PaginatedSectionsResponse,
  SectionApiResponse,
} from '../types/section';

export const sectionApi = createApi({
  reducerPath: 'sectionApi',
  baseQuery: baseQueryWithErrorHandling(),
  tagTypes: ['Section'],
  endpoints: (builder) => ({
    // GET /api/universities/:universityId/colleges/:collegeId/departments/:departmentId/sections?page=1&limit=40&course=xxx
    getSectionsPage: builder.query<
      PaginatedSectionsResponse,
      {
        universityId: string;
        collegeId: string;
        departmentId: string;
        page?: number;
        limit?: number;
        course?: string;
      }
    >({
      query: ({ universityId, collegeId, departmentId, page = 1, limit = 40, course }) => {
        let base = `/admin/university/${universityId}/college/${collegeId}/department/${departmentId}/section?page=${page}&limit=${limit}`;
        if (course) base += `&course=${course}`;
        return base;
      },
      transformResponse: (response: SectionApiResponse) => response.data as PaginatedSectionsResponse,
      providesTags: ['Section'],
    }),

    // GET /api/sections/:sectionId
    getSectionById: builder.query<Section, { sectionId: string }>({
      query: ({ sectionId }) => `/sections/${sectionId}`,
      transformResponse: (response: SectionApiResponse) => response.data as Section,
    }),

    // POST /api/universities/:universityId/colleges/:collegeId/departments/:departmentId/sections
    createSection: builder.mutation<
      Section,
      {
        universityId: string;
        collegeId: string;
        departmentId: string;
        payload: Partial<Section>;
      }
    >({
      query: ({ universityId, collegeId, departmentId, payload }) => ({
        url: `/universities/${universityId}/colleges/${collegeId}/departments/${departmentId}/sections`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Section'],
    }),

    // PATCH /api/sections/:sectionId
    updateSection: builder.mutation<
      Section,
      { sectionId: string; updates: Partial<Section> }
    >({
      query: ({ sectionId, updates }) => ({
        url: `/admin/section/${sectionId}`,
        method: 'PATCH',
        body: updates,
      }),
      invalidatesTags: ['Section'],
    }),

    // DELETE /api/sections/:sectionId
    deleteSection: builder.mutation<{ success: boolean; message: string }, string>({
      query: (sectionId) => ({
        url: `/sections/${sectionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Section'],
    }),
  }),
});

export const {
  useGetSectionsPageQuery,
  useGetSectionByIdQuery,
  useCreateSectionMutation,
  useUpdateSectionMutation,
  useDeleteSectionMutation,
} = sectionApi;
