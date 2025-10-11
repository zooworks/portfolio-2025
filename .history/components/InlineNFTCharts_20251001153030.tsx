"use client";

import { useEffect, useRef } from "react";

const card = "rounded-2xl bg-slate-50 p-4 h-full";
const wrap = "relative h-[260px] md:h-[300px]"; // 라인/바 공통 높이
const wrapPie = "relative h-[280px] md:h-[340px]"; // 파이(범례 공간 확보)
const cvs = "absolute inset-0 w-full h-full";

/** 개발/HMR/StrictMode에서도 중복 등록 방지용 전역 플래그 */
let DATA_LABELS_REGISTERED = false;

const InlineNFTCharts = () => {
  const downloadsRef = useRef<HTMLCanvasElement | null>(null);
  const photosRef = useRef<HTMLCanvasElement | null>(null);
  const nftRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let disposed = false;
    const charts: any[] = [];

    (async () => {
      const { default: Chart } = await import("chart.js/auto");
      const { default: ChartDataLabels } = await import(
        "chartjs-plugin-datalabels"
      );

      // 플러그인 중복 등록 방지
      if (!DATA_LABELS_REGISTERED) {
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
                  font: { weight: 600 },
                },
                tooltip: {
                  callbacks: { label: (ctx: any) => ` ${ctx.parsed.y}` },
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
                  font: { weight: 600 },
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

      // 3) NFT Awareness (Pie — 꽉 찬 원 + 범례 아래)
      if (nftRef.current && !disposed) {
        charts.push(
          new Chart(nftRef.current, {
            type: "pie", // ✅ 도넛 → 파이
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
              plugins: {
                legend: {
                  position: "bottom", // ✅ 범례 아래
                  labels: { usePointStyle: true, boxWidth: 10, padding: 16 },
                },
                datalabels: {
                  color: "#111827",
                  // 라벨 텍스트에서 괄호 안 %만 추출해 조각 위에 표기
                  formatter: (_v: number, ctx: any) =>
                    `${
                      ctx.chart.data.labels[ctx.dataIndex]
                        .toString()
                        .match(/\((.*?)\)/)?.[1]
                    }`,
                  font: { weight: 600 },
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
      charts.forEach((c) => c?.destroy?.());
    };
  }, []);

  return (
    // ✅ 웹(데스크톱)에서 3개 가로 평행
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
      <div className={card}>
        <h3 className="text-lg font-semibold mb-3">
          Reward App Download Trend
        </h3>
        <div className={wrap}>
          <canvas ref={downloadsRef} className={cvs} />
        </div>
      </div>

      <div className={card}>
        <h3 className="text-lg font-semibold mb-3">
          Photo Taking by Age Group
        </h3>
        <div className={wrap}>
          <canvas ref={photosRef} className={cvs} />
        </div>
      </div>

      <div className={card}>
        <h3 className="text-lg font-semibold mb-3">NFT Awareness</h3>
        <div className={`${wrap} mt-6`}>
          <canvas ref={nftRef} className={cvs} />
        </div>
      </div>
    </div>
  );
};

export default InlineNFTCharts;
