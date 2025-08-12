import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { toast } from 'sonner';
import { clearAuth } from '@/store/slices/authSlice';
import { getApiUrl } from './api';

export const baseQueryWithErrorHandling = (
  baseUrl: string = getApiUrl()
): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  });

  return async (args, api, extraOptions) => {
    const result = await rawBaseQuery(args, api, extraOptions);

    const suppress401 = typeof args === 'object' && 'suppress401' in args && args.suppress401;

    if (result.error) {
      const status = result.error.status;
      const message =
        (result.error.data as any)?.message ||
        (typeof result.error.error === 'string'
          ? result.error.error
          : 'Something went wrong');

      if (typeof window !== 'undefined') {
        if (status === 401 && !suppress401) {
          api.dispatch(clearAuth());
          toast.error('Session expired. Please log in again.');
          setTimeout(() => {
            window.location.href = '/protected-redirect';
          }, 500);
        } else if (result.error.status === 'PARSING_ERROR') {
          console.error('Received invalid JSON (likely HTML):', result.error);
          toast.error('Unexpected server response (invalid JSON).');
        } else if (!suppress401) {
          console.error(`[API Error ${status}]`, message);
          toast.error(message);
        }
      }
    }

    return result;
  };
};
