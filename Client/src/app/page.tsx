import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get('Accept-Language');
  
  // Determine preferred locale
  let preferredLocale = 'en';
  
  if (acceptLanguage) {
    const preferredLocales = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().toLowerCase())
      .map(lang => lang.split('-')[0]);
    
    if (preferredLocales.includes('ar')) {
      preferredLocale = 'ar';
    }
  }
  
  // Redirect to the locale-specific page
  // The middleware will handle showing clean URLs
  redirect(`/${preferredLocale}`);
}
