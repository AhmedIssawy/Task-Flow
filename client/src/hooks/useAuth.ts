import { useGetMeQuery } from '@/store/services/authApi';

export const useAuth = () => {
  const { data, isLoading, isError } = useGetMeQuery();

  return {
    user: data?.data,
    isLoading,
    isError,
    isLoggedIn: !!data,
    role: data?.data?.role,
    id: data?.data?.id,
    mongoId: data?.data?._id,
  };
};