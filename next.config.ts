import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Same as the workspace app: a server that carries only what it imports.
   * See tlshost-app/next.config.ts for what this costs, and DEPLOY.md for the
   * two directories it will not copy for you.
   */
  output: "standalone",

  // The root layout lives under /[lang], so send bare "/" to the default locale.
  async redirects() {
    return [
      { source: "/", destination: "/vi", permanent: false },
      { source: "/features", destination: "/vi/features", permanent: false },
      { source: "/pricing", destination: "/vi/pricing", permanent: false },
    ];
  },

  // Long-lived caching for the immutable build output is handled by Nginx;
  // these headers cover what Next serves directly.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
