import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      // Handle clean URLs by rewriting to locale-prefixed paths
      {
        source: '/login',
        destination: '/en/auth/login',
      },
      {
        source: '/:locale(en|ar)/login',
        destination: '/:locale/auth/login',
      },
    ]
  },
};

export default withNextIntl(nextConfig);
