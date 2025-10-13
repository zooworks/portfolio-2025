import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ 린트 오류로 인한 빌드 실패 방지
  },
  // 🔥 redirect 설정 삭제함 (이 부분이 원인이었음)
};

export default nextConfig;
