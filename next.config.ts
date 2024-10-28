import type { NextConfig } from "next";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./lib/env";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // ppr: true,
    reactCompiler: isProd,
    // ...
  },
  // ...
};

export default nextConfig;
