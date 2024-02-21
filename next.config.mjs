import createJiti from "jiti";

// This is validation for the environment variables early in the build process.
const jiti = createJiti(new URL(import.meta.url).pathname);
jiti("./src/lib/env");

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
