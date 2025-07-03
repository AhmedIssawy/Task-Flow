export const studentColumns = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'University', accessor: (row) => row.universityId.name },
  { label: 'ID', accessor: 'id' },
]