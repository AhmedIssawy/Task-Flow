import Landing from '@/app/landing';

// Enable ISR - rebuild every 60 seconds for fresh content
export const revalidate = 60;

export default function HomePage() {
  return <Landing />;
}