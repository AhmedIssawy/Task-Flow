export interface Teacher {
  _id: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: 'teacher';
  courses: {
    _id: string;
    name: string;
    [key: string]: any;
  }[];
  universityId: string;
  departmentId: string;
  collegeId: string;
}