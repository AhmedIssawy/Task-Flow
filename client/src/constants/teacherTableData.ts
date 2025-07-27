export const studentColumns = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'University', accessor: (row) => row.universityId.name }, //todo update this
  { label: 'ID', accessor: 'id' },
]