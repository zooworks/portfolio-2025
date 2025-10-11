"use client";
import dynamic from "next/dynamic";

// ✅ 차트는 브라우저에서만 렌더
const InlineNFTCharts = dynamic(() => import("@/components/InlineNFTCharts"), {
  ssr: false,
});

export default function ClientInlineNFTCharts() {
  return <InlineNFTCharts />;
}
