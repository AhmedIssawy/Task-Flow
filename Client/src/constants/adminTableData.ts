export const adminStudentsTableData = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Student ID', accessor: 'id' },
  { label: 'University', accessor: (row: any) => row.universityId?.name },
];

export const adminTeachersTableData = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Teacher ID', accessor: 'id' },
  { label: 'Role', accessor: 'role' },
  { label: 'University', accessor: (row: any) => row.universityId?.name },
];

