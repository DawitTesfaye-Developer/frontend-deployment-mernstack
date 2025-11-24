import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinify: true, // SWC minify enabled by default in Next.js 16+
  env: {
    // Expose environment variables to client safely
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  experimental: {
    // Enable modern features if applicable
    scrollRestoration: true,
  },
  images: {
    // Enable image optimization for external domains if needed
    domains: ["localhost", "your-api-domain.com"],
  },
};

export default nextConfig;
