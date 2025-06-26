import axiosInstance from '@/lib/axios/axiosInstance'
import { Student } from '@/types/api'
import { AxiosResponse } from 'axios'

export const getStudentById = async (id: string): Promise<AxiosResponse<Student>> => {
  return axiosInstance.get(`/api/student/${id}`)
}

// Fetch paginated student data (page 1, 10 students per page by default)
export const getStudentsPage = async (page: number = 1, limit: number = 10) => {
  const response = await axiosInstance.get(`/students`, {
    params: { page, limit }
  })
  return response.data
}
