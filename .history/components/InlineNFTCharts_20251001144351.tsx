"use client";

import { useEffect, useRef } from "react";

const InlineNFTCharts = () => {
  const downloadsRef = useRef<HTMLCanvasElement | null>(null);
  const photosRef = useRef<HTMLCanvasElement | null>(null);
  const nftRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // ✅ SSR 가드: 서버에서 실행될 때 곧장 종료
    if (typeof window === "undefined") return;

    let charts: any[] = [];
    let disposed = false;

    (async () => {
      // ✅ 동적 임포트 (타입 오류 회피를 위해 any로 받음)
      const ChartMod: any = (await import("chart.js/auto")).default;
      const ChartDataLabels: any = (await import("chartjs-plugin-datalabels"))
        .default;

      // ✅ 플러그인 중복 등록 방지 (v4 방식)
      if (!ChartMod.registry.plugins.get("datalabels")) {
        ChartMod.register(ChartDataLabels);
      }

      // 공통 팔레트
      const blue = "#4A6CF7";
      const blue200 = "#7CA8F7";
      const gray200 = "#D9D9D9";

      // ✅ 안전한 컨텍스트 취득 함수 (null 방지)
      const ctx = (ref: React.RefObject<HTMLCanvasElement>) =>
        ref.current?.getContext("2d");

      // 1) Reward App Download Trend (Line)
      if (!disposed) {
        const c = ctx(downloadsRef);
        if (c) {
          charts.push(
            new ChartMod(c, {
              type: "line",
              data: {
                labels: ["2021", "2022", "2023", "2024"],
                datasets: [
                  {
                    label: "downloads (M)",
                    data: [70, 100, 140, 180],
                    borderColor: blue,
                    backgroundColor: `${blue}33`,
                    pointBackgroundColor: "#fff",
                    pointBorderColor: blue,
                    pointBorderWidth: 2,
                    tension: 0.25,
                    fill: true,
                  },
                ],
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  datalabels: {
                    color: "#111827",
                    align: "top",
                    formatter: (v: number) => v,
                    font: { weight: "600" },
                  },
                  tooltip: {
                    callbacks: { label: (ctx: any) => ` ${ctx.parsed.y}` },
                  },
                },
                scales: {
                  y: { grid: { color: "rgba(15,23,42,0.08)" } },
                  x: { grid: { display: false } },
                },
              },
            })
          );
        }
      }

      // 2) Photo Taking by Age Group (Bar)
      if (!disposed) {
        const c = ctx(photosRef);
        if (c) {
          charts.push(
            new ChartMod(c, {
              type: "bar",
              data: {
                labels: ["18–24", "25–34", "35–54", "55+"],
                datasets: [
                  {
                    data: [398, 335, 226, 121],
                    backgroundColor: [blue, blue200, "#B0C4DE", gray200],
                    borderRadius: 8,
                  },
                ],
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  datalabels: {
                    color: "#111827",
                    anchor: "end",
                    align: "end",
                    offset: 4,
                    formatter: (v: number) => v,
                    font: { weight: "600" },
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: { color: "rgba(15,23,42,0.08)" },
                  },
                  x: { grid: { display: false } },
                },
              },
            })
          );
        }
      }

      // 3) NFT Awareness (Doughnut)
      if (!disposed) {
        const c = ctx(nftRef);
        if (c) {
          charts.push(
            new ChartMod(c, {
              type: "doughnut",
              data: {
                labels: [
                  "Never heard (47%)",
                  "Heard but don’t understand (25%)",
                  "Know well (28%)",
                ],
                datasets: [
                  {
                    data: [47, 25, 28],
                    backgroundColor: [blue, blue200, gray200],
                    borderWidth: 0,
                    hoverOffset: 4,
                  },
                ],
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: "58%",
                plugins: {
                  legend: {
                    position: "right",
                    labels: { usePointStyle: true, boxWidth: 10 },
                  },
                  datalabels: {
                    color: "#111827",
                    formatter: (_v: number, ctx: any) =>
                      `${
                        ctx.chart.data.labels[ctx.dataIndex]
                          .toString()
                          .match(/\((.*?)\)/)?.[1]
                      }`,
                    font: { weight: "600" },
                  },
                  tooltip: {
                    callbacks: {
                      label: (ctx: any) => `${ctx.label}: ${ctx.parsed} %`,
                    },
                  },
                },
              },
            })
          );
        }
      }
    })();

    // ✅ 클린업: 파괴 후 배열 비우기
    return () => {
      disposed = true;
      charts.forEach((c) => c?.destroy?.());
      charts = [];
    };
  }, []);

  // ✅ 차트 높이 고정(반응형 + maintainAspectRatio:false와 함께 사용)
  const card = "rounded-2xl bg-slate-50 p-4";
  const canvasCls = "w-full h-[260px] md:h-[300px]"; // 필요시 조절

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      <div className={card}>
        <h3 className="text-lg font-semibold mb-3">
          Reward App Download Trend
        </h3>
        <canvas
          ref={downloadsRef}
          className={canvasCls}
          role="img"
          aria-label="downloads by year"
        />
        <p className="text-xs text-gray-500 mt-2">
          *Source: Allied Market Research (2022)
        </p>
      </div>

      <div className={card}>
        <h3 className="text-lg font-semibold mb-3">
          Photo Taking by Age Group
        </h3>
        <canvas
          ref={photosRef}
          className={canvasCls}
          role="img"
          aria-label="photos by age"
        />
        <p className="text-xs text-gray-500 mt-2">*Source: CTA Survey (2017)</p>
      </div>

      <div className={`${card} md:col-span-2`}>
        <h3 className="text-lg font-semibold mb-3">NFT Awareness</h3>
        <canvas
          ref={nftRef}
          className={canvasCls}
          role="img"
          aria-label="nft awareness"
        />
        <p className="text-xs text-gray-500 mt-2">*Source: YouGov</p>
      </div>
    </div>
  );
};

export default InlineNFTCharts;
