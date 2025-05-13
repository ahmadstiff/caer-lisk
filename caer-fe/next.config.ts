import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
      },
      {
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
  },
};

export default nextConfig;
