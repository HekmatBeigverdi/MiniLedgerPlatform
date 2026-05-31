import type { NextConfig } from "next";

const isDesktopBuild = process.env.NEXT_PUBLIC_APP_MODE === "desktop";

const nextConfig: NextConfig = {
  output: isDesktopBuild ? "export" : undefined,
  images: {
    unoptimized: isDesktopBuild,
  },
};

export default nextConfig;