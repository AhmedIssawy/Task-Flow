import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getStudentById, getStudentsPage } from '@/lib/api/student/student'
import { Student } from '@/types/api'
import { AxiosError } from 'axios'

// Enhanced hook with better performance and error handling
export const useStudentQuery = (id: string) => {
  const queryClient = useQueryClient()

  return useQuery<Student, AxiosError>({
    queryKey: ['students', 'detail', id],
    queryFn: async () => {
      try {
        const response = await getStudentById(id)
        return response.data
      } catch (error) {
        // Enhanced error handling
        if (error instanceof AxiosError) {
          // Log error for monitoring
          console.error('Student fetch error:', {
            id,
            status: error.response?.status,
            message: error.response?.data?.message || error.message
          })
        }
        throw error
      }
    },
    enabled: !!id && id.length > 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    retry: (failureCount, error) => {
      // Don't retry on 404 (student not found) or 401/403 (auth errors)
      if (error instanceof AxiosError) {
        const status = error.response?.status
        if (status === 404 || status === 401 || status === 403) {
          return false
        }
      }
      // Retry up to 3 times for other errors
      return failureCount < 3
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    // Prefetch related data when this student is loaded
    onSuccess: (data) => {
      // Optionally prefetch university data if we have the ID
      if (data.universityId && typeof data.universityId === 'string') {
        queryClient.prefetchQuery({
          queryKey: ['universities', 'detail', data.universityId],
          staleTime: 10 * 60 * 1000 // 10 minutes
        })
      }
    }
  })
}

// Hook for invalidating student data (useful for updates)
export const useInvalidateStudent = () => {
  const queryClient = useQueryClient()
  
  return (id?: string) => {
    if (id) {
      // Invalidate specific student
      queryClient.invalidateQueries({ queryKey: ['students', 'detail', id] })
    } else {
      // Invalidate all students
      queryClient.invalidateQueries({ queryKey: ['students'] })
    }
  }
}

// Hook for prefetching student data
export const usePrefetchStudent = () => {
  const queryClient = useQueryClient()
  
  return (id: string) => {
    queryClient.prefetchQuery({
      queryKey: ['students', 'detail', id],
      queryFn: async () => {
        const response = await getStudentById(id)
        return response.data
      },
      staleTime: 5 * 60 * 1000
    })
  }
}

// Hook for the current logged-in student's dashboard data
export const useStudentDashboard = (studentId?: string) => {
  return useQuery({
    queryKey: ['student', 'dashboard', studentId],
    queryFn: async () => {
      if (!studentId) throw new Error('Student ID is required')
      
      // Fetch the student's detailed data including courses and university
      const response = await getStudentById(studentId)
      return response.data
    },
    enabled: !!studentId,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000,
    retry: (failureCount, error) => {
      if (error instanceof AxiosError) {
        const status = error.response?.status
        if (status === 404 || status === 401 || status === 403) {
          return false
        }
      }
      return failureCount < 3
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  })
}
