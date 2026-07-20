import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all PDF files in the public directory
        source: "/(.*).pdf",
        headers: [
          {
            key: "Cache-Control",
            // Cache for 1 year (31536000 seconds) and mark as immutable
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
