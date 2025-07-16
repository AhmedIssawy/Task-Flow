import { baseQueryWithErrorHandling } from '@/lib/baseQueryWithErrorHandling';
import { createApi } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithErrorHandling,

  endpoints: (builder) => ({
    getMe: builder.query<{ role: string; id: string }, void>({
      query: () => '/auth/me',
    }),

    login: builder.mutation<
      { role: string; data: { id: string; _id: string } },
      { id: string; password: string }
    >({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetMeQuery, useLoginMutation, useLogoutMutation } = authApi;
