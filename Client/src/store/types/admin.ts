export interface Admin {
  _id: string;
  id: string;
  name: string;
  role: 'admin';
}

export interface PaginatedAdmins {
  admins: Admin[];
  total: number;
}