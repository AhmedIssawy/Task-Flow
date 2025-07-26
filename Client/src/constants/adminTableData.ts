export const adminStudentsTableData = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'ID', accessor: 'id' },
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

export const adminTeacherCreateFields = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Phone Number', accessor: 'phone' },
  { label: 'Address', accessor: 'address' },
  { label: 'Password', accessor: 'password' },
  { label: 'University ID', accessor: 'universityId' },
  { label: 'College ID', accessor: 'collegeId' },
  { label: 'Department ID', accessor: 'departmentId' },
  {
    label: 'Language',
    accessor: 'lang',
    type: 'select',
    options: [
      { label: 'English', value: 'en' },
      { label: 'Arabic', value: 'ar' },
    ],
  },
];

export const adminTeacherEditFields = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Phone Number', accessor: 'phone' },
  { label: 'Address', accessor: 'address' },
  {
    label: 'Language',
    accessor: 'lang',
    type: 'select',
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
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Phone', accessor: 'phone' },
  { label: 'Established', accessor: 'establishedYear' },
  { label: 'Website', accessor: 'website' },
];

export const adminCollegeCreateFields = [
  { label: 'Name', accessor: 'name' },
  { label: 'Address', accessor: 'address' },
  { label: 'Phone Number', accessor: 'phone' },
  { label: 'Email', accessor: 'email' },
  { label: 'Longitude', accessor: 'location.coordinates[0]' },
  { label: 'Latitude', accessor: 'location.coordinates[1]' },
  { label: 'Description', accessor: 'description' },
  { label: 'Website', accessor: 'website' },
  { label: 'Established Year', accessor: 'establishedYear' },
  { label: 'Logo URL', accessor: 'logo' },
  { label: 'University ID', accessor: 'universityId' },
];

export const adminCollegeEditFields = [
  { label: 'Name', accessor: 'name' },
  { label: 'Address', accessor: 'address' },
  { label: 'Phone Number', accessor: 'phone' },
  { label: 'Email', accessor: 'email' },
  { label: 'Longitude', accessor: 'location.coordinates[0]' },
  { label: 'Latitude', accessor: 'location.coordinates[1]' },
  { label: 'Description', accessor: 'description' },
  { label: 'Website', accessor: 'website' },
  { label: 'Established Year', accessor: 'establishedYear' },
  { label: 'Logo URL', accessor: 'logo' },
];

export const adminDepartmentsTableData = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Phone', accessor: 'phone' },
  { label: 'Established', accessor: 'establishedYear' },
  { label: 'Description', accessor: 'description' },
];

export const adminDepartmentCreateFields = [
  { label: 'Name', accessor: 'name' },
  { label: 'Description', accessor: 'description' },
  { label: 'Phone Number', accessor: 'phone' },
  { label: 'Email', accessor: 'email' },
  { label: 'Longitude', accessor: 'location.coordinates[0]' },
  { label: 'Latitude', accessor: 'location.coordinates[1]' },
  { label: 'College ID', accessor: 'collegeId' },
  { label: 'University ID', accessor: 'universityId' },
  { label: 'Established Year', accessor: 'establishedYear' },
  {
    label: 'Language',
    accessor: 'lang',
    type: 'select',
    options: [
      { label: 'English', value: 'en' },
      { label: 'Arabic', value: 'ar' },
    ],
  },
];

export const adminDepartmentEditFields = [
  { label: 'Name', accessor: 'name' },
  { label: 'Description', accessor: 'description' },
  { label: 'Phone Number', accessor: 'phone' },
  { label: 'Email', accessor: 'email' },
  { label: 'Longitude', accessor: 'location.coordinates[0]' },
  { label: 'Latitude', accessor: 'location.coordinates[1]' },
  { label: 'Established Year', accessor: 'establishedYear' },
  {
    label: 'Language',
    accessor: 'lang',
    type: 'select',
    options: [
      { label: 'English', value: 'en' },
      { label: 'Arabic', value: 'ar' },
    ],
  },
];
