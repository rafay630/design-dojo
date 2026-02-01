import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization settings
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Build settings for Vercel
  typescript: {
    // Set to false in production to catch errors
    ignoreBuildErrors: false,
  },

  // Experimental features
  experimental: {
    // Enable server actions (enabled by default in Next.js 14+)
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;
