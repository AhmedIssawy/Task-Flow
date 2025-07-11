export const adminStudentsTableData = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Student ID', accessor: 'id' },
  { label: 'University', accessor: (row: any) => row.universityId?.name },
];


export const adminStudentEditFields = [
  { label: 'Email', key: 'email', type: 'email' },
  { label: 'Name', key: 'name' },
];


export const adminStudentCreateFields = [
  { label: 'Name', key: 'name' },
  { label: 'Email', key: 'email', type: 'email' },
  { label: 'Password', key: 'password', type: 'password' },
  {
    label: 'Gender',
    key: 'gender',
    inputType: 'select',
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ],
  },
];





export const adminTeachersTableData = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Teacher ID', accessor: 'id' },
  { label: 'Role', accessor: 'role' },
  { label: 'University', accessor: (row: any) => row.universityId?.name },
];



export const adminCollegesTableData = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Phone', accessor: 'phone' },
  { label: 'Established', accessor: 'establishedYear' },
  { label: 'Website', accessor: 'website' },
];


export const adminDepartmentsTableData = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Phone', accessor: 'phone' },
  { label: 'Established', accessor: 'establishedYear' },
  { label: 'Description', accessor: 'description' },
];