export const getPathByRole = (role: string, id: string) => {
  if (!role || !id) {
    return '/';
  }
  const cleanId = id.split('-')[1];
  const normalizedRole = role.toLowerCase().replace(/_/g, '-')
  switch (normalizedRole) {
    case 'student':
      return `/student/${cleanId}`;
    case 'admin':
      return `/admin/${cleanId}`;
    case 'teacher':
      return `/teacher/${cleanId}`;
    case 'super-admin':
      return `/super-admin/${cleanId}`;
    default:
      return '/';
  }
};
