export const adminAdminsTableData = [
  { label: 'Name', accessor: 'name' },
  { label: 'Role', accessor: 'role' },
  { label: 'Admin ID', accessor: 'id' },
  { label: 'Created At', accessor: (row: any) => new Date(row.createdAt).toLocaleString() },
];

export const adminAdminCreateFields = [
  { label: 'Name', accessor: 'name' },
  { label: 'Password', accessor: 'password' },
  { label: 'University ID', accessor: 'universityId' },
  { label: 'College ID', accessor: 'collegeId' },
];

export const adminAdminEditFields = [
  { label: 'Name', accessor: 'name' },
];