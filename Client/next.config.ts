import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/:locale/login',
        destination: '/:locale/auth/login',
      },
    ]
  },
};

export default withNextIntl(nextConfig);
