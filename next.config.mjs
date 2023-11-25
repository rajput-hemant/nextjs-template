// This is validation for the environment variables early in the build process.
import "./src/lib/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    // unoptimized: true,
  },
  experimental: {},
  // ...
};

export default nextConfig;
