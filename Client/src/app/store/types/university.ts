export interface University {
  _id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  location: string;
  description?: string;
  website?: string;
  establishedYear?: number;
  logo?: string;
}