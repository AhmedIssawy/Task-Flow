import { Response } from 'express';
import { ApiResponse } from '../types/common/index.js';

interface SendResponseOptions<T = any> {
  success?: boolean;
  statusCode?: number;
  message?: string;
  data?: T | null;
  error?: any;
}

const sendResponse = <T = any>(
  res: Response,
  { success = true, statusCode = 200, message = "", data = null, error = null }: SendResponseOptions<T>
): Response<ApiResponse<T | undefined>> => {
  const response: ApiResponse<T | undefined> = {
    success,
    message,
  };

  if (success && data !== null && data !== undefined) {
    response.data = data;
  }
  
  if (!success && error !== null) {
    response.error = error;
  }

  return res.status(statusCode).json(response);
};

export default sendResponse;
