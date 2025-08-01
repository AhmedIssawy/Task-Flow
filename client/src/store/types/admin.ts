import { Pagination } from "./common";

export interface Admin {
  _id: string;
  id: string;
  name: string;
  role: "admin" | "super-admin";
  universityId?: {
    _id: string;
    name: string;
  };
  collegeId?: {
    _id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedAdminsResponse {
  admins: Admin[];
  pagination: Pagination;
}

export interface AdminApiResponse {
  success: boolean;
  message: string;
  data: PaginatedAdminsResponse;
}
