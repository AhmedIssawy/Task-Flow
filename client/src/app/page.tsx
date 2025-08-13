import Landing from '@/app/landing';

// Enable static generation for better performance and SEO
export const dynamic = 'force-static';

export default function HomePage() {
  return <Landing />;
}