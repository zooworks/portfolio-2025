"use client";

import { useEffect, useRef } from "react";
const card = "rounded-2xl bg-slate-50 p-4";
const wrap = "relative h-[260px] md:h-[300px]"; // 높이 고정
const cvs = "absolute inset-0 w-full h-full"; // 내부 캔버스 꽉 채움

/** 개발/HMR/StrictMode에서도 중복 등록 방지용 전역 플래그 */
let DATA_LABELS_REGISTERED = false;

const InlineNFTCharts = () => {
  const downloadsRef = useRef<HTMLCanvasElement | null>(null);
  const photosRef = useRef<HTMLCanvasElement | null>(null);
  const nftRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // SSR 보호: 브라우저에서만 실행
    if (typeof window === "undefined") return;

    let disposed = false;
    const charts: any[] = [];

    (async () => {
      // 동적 import로 SSR 에러 회피
      const { default: Chart } = await import("chart.js/auto");
      const { default: ChartDataLabels } = await import(
        "chartjs-plugin-datalabels"
      );

      // 플러그인 중복 등록 방지 (개발모드/리프레시 대비)
      if (!DATA_LABELS_REGISTERED) {
        // 타입가드(Chart 내부 registry 타입 이슈 회피)
        (Chart as any).register(ChartDataLabels);
        DATA_LABELS_REGISTERED = true;
      }

      const blue = "#4A6CF7";
      const blue200 = "#7CA8F7";
      const gray200 = "#D9D9D9";

      // 1) Reward App Download Trend (Line)
      if (downloadsRef.current && !disposed) {
        charts.push(
          new Chart(downloadsRef.current, {
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

      // 2) Photo Taking by Age Group (Bar)
      if (photosRef.current && !disposed) {
        charts.push(
          new Chart(photosRef.current, {
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

      // 3) NFT Awareness (Doughnut)
      if (nftRef.current && !disposed) {
        charts.push(
          new Chart(nftRef.current, {
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
                    }`, // 괄호 속 %만
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
    })();

    return () => {
      disposed = true;
      // 캔버스 재사용 오류 방지
      (charts || []).forEach((c) => c?.destroy?.());
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      <div className="rounded-2xl bg-slate-50 p-4">
        <h3 className="text-lg font-semibold mb-3">
          Reward App Download Trend
        </h3>
        {/* 부모에 높이 없으면 차트가 0px 될 수 있음 → h-80 등 높이 부여 */}
        <div className="h-80">
          <canvas
            ref={downloadsRef}
            role="img"
            aria-label="downloads by year"
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          *Source: Allied Market Research (2022)
        </p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-4">
        <h3 className="text-lg font-semibold mb-3">
          Photo Taking by Age Group
        </h3>
        <div className="h-80">
          <canvas ref={photosRef} role="img" aria-label="photos by age" />
        </div>
        <p className="text-xs text-gray-500 mt-2">*Source: CTA Survey (2017)</p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-4 md:col-span-2">
        <h3 className="text-lg font-semibold mb-3">NFT Awareness</h3>
        <div className="h-80">
          <canvas ref={nftRef} role="img" aria-label="nft awareness" />
        </div>
        <p className="text-xs text-gray-500 mt-2">*Source: YouGov</p>
      </div>
    </div>
  );
};

export default InlineNFTCharts;
