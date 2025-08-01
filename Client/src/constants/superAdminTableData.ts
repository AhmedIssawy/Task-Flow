export const adminAdminsTableData = [
  { label: 'Name', accessor: 'name' },
  { label: 'Role', accessor: 'role' },
  { label: 'Admin ID', accessor: 'id' },
  { label: 'Created At', accessor: (row: any) => new Date(row.createdAt).toLocaleString() },
];

export const adminAdminCreateFields = [
  { label: 'Name', key: 'name' },
  { label: 'Password', key: 'password' },
  { label: 'University ID', key: 'universityId' },
  { label: 'College ID', key: 'collegeId' },
];

export const adminAdminEditFields = [
  { label: 'Name', key: 'name' },
];