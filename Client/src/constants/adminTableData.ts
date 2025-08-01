export const adminStudentsTableData = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'ID', accessor: 'id' },
  { label: 'University', accessor: (row: any) => row.universityId?.name },
];

export const adminStudentEditFields = [
  { label: 'Email', key: 'email', inputType: 'input' as const },
  { label: 'Name', key: 'name' },
];

export const adminStudentCreateFields = [
  { label: 'Name', key: 'name' },
  { label: 'Email', key: 'email', inputType: 'input' as const },
  { label: 'Password', key: 'password', inputType: 'input' as const },
  {
    label: 'Gender',
    key: 'gender',
    inputType: 'select' as const,
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ],
  },
];

export const adminTeacherCreateFields = [
  { label: 'Name', key: 'name' },
  { label: 'Email', key: 'email' },
  { label: 'Phone Number', key: 'phone' },
  { label: 'Address', key: 'address' },
  { label: 'Password', key: 'password' },
  { label: 'University ID', key: 'universityId' },
  { label: 'College ID', key: 'collegeId' },
  { label: 'Department ID', key: 'departmentId' },
  {
    label: 'Language',
    key: 'lang',
    inputType: 'select' as const,
    options: [
      { label: 'English', value: 'en' },
      { label: 'Arabic', value: 'ar' },
    ],
  },
];

export const adminTeacherEditFields = [
  { label: 'Name', key: 'name' },
  { label: 'Email', key: 'email' },
  { label: 'Phone Number', key: 'phone' },
  { label: 'Address', key: 'address' },
  {
    label: 'Language',
    key: 'lang',
    inputType: 'select' as const,
    options: [
      { label: 'English', value: 'en' },
      { label: 'Arabic', value: 'ar' },
    ],
  },
];


export const adminTeachersTableData = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Teacher ID', accessor: 'id' },
  { label: 'Phone', accessor: 'phone' },
  { label: 'Address', accessor: 'address' },
];

export const adminCollegesTableData = [
  { label: 'Name', accessor: 'name' as const },
  { label: 'Email', accessor: 'email' as const },
  { label: 'Phone', accessor: 'phone' as const },
  { label: 'Established', accessor: 'establishedYear' as const },
  { label: 'Website', accessor: 'website' as const },
];

export const adminCollegeCreateFields = [
  { label: 'Name', key: 'name' as const },
  { label: 'Address', key: 'address' as const },
  { label: 'Phone Number', key: 'phone' as const },
  { label: 'Email', key: 'email' as const },
  { label: 'Description', key: 'description' as const },
  { label: 'Website', key: 'website' as const },
  { label: 'Established Year', key: 'establishedYear' as const },
  { label: 'Logo URL', key: 'logo' as const },
  { label: 'University ID', key: 'universityId' as const },
];

export const adminCollegeEditFields = [
  { label: 'Name', key: 'name' as const },
  { label: 'Address', key: 'address' as const },
  { label: 'Phone Number', key: 'phone' as const },
  { label: 'Email', key: 'email' as const },
  { label: 'Description', key: 'description' as const },
  { label: 'Website', key: 'website' as const },
  { label: 'Established Year', key: 'establishedYear' as const },
  { label: 'Logo URL', key: 'logo' as const },
];

export const adminDepartmentsTableData = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Phone', accessor: 'phone' },
  { label: 'Established', accessor: 'establishedYear' },
  { label: 'Description', accessor: 'description' },
];

export const adminDepartmentCreateFields = [
  { label: 'Name', key: 'name' },
  { label: 'Description', key: 'description' },
  { label: 'Phone Number', key: 'phone' },
  { label: 'Email', key: 'email' },
  { label: 'College ID', key: 'collegeId' },
  { label: 'University ID', key: 'universityId' },
  { label: 'Established Year', key: 'establishedYear' },
  {
    label: 'Language',
    key: 'lang',
    inputType: 'select' as const,
    options: [
      { label: 'English', value: 'en' },
      { label: 'Arabic', value: 'ar' },
    ],
  },
];

export const adminDepartmentEditFields = [
  { label: 'Name', key: 'name' },
  { label: 'Description', key: 'description' },
  { label: 'Phone Number', key: 'phone' },
  { label: 'Email', key: 'email' },
  { label: 'Established Year', key: 'establishedYear' },
  {
    label: 'Language',
    key: 'lang',
    inputType: 'select' as const,
    options: [
      { label: 'English', value: 'en' },
      { label: 'Arabic', value: 'ar' },
    ],
  },
];
