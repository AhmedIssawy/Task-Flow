import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimize for static generation
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['lucide-react', 'next-intl'],
  },
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login',
      },
    ]
  },
};

export default withNextIntl(nextConfig);
