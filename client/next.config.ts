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
  // Create standalone Node.js server bundle for deployment
  output: 'standalone',
  // Include i18n locale files in standalone build
  outputFileTracing: true,
  experimental: {
    // Only include proven-safe packages for import optimization
    // lucide-react confirmed safe, next-intl removed due to potential compatibility issues
    optimizePackageImports: ['lucide-react'],
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
