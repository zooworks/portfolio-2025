import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ 린트 오류로 인한 빌드 실패 방지
  },
  async redirects() {
    return [
      { source: "/", destination: "/work", permanent: true }, // ✅ 루트 → /work 리다이렉트
    ];
  },
};

export default nextConfig;
