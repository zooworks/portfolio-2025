"use client";

import { useEffect, useRef } from "react";

const card = "rounded-2xl bg-slate-50 p-3 md:p-4 h-full flex flex-col";
const wrap = "relative mt-auto h-[200px] md:h-[240px]"; // ⬅️ 공통 높이 축소
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

      if (!DATA_LABELS_REGISTERED) {
        (Chart as any).register(ChartDataLabels);
        DATA_LABELS_REGISTERED = true;
      }

      // ⬇️ 전역 폰트/범례 축소
      (Chart as any).defaults.font.size = 11;
      (Chart as any).defaults.plugins.legend.display = false;

      const blue = "#4A6CF7";
      const blue200 = "#7CA8F7";
      const gray200 = "#D9D9D9";

      // 1) Line
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
                  pointRadius: 3,
                  tension: 0.25,
                  fill: true,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              layout: { padding: { top: 30, right: 8, left: 8, bottom: 0 } },
              plugins: {
                datalabels: {
                  color: "#111827",
                  align: "top",
                  offset: 10,
                  clamp: true,
                  font: { size: 11, weight: 700 },
                },
                tooltip: {
                  callbacks: { label: (ctx: any) => ` ${ctx.parsed.y}` },
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  grace: "8%",
                  ticks: { font: { size: 11 } },
                  grid: { color: "rgba(15,23,42,0.08)" },
                },
                x: { ticks: { font: { size: 11 } }, grid: { display: false } },
              },
            },
          })
        );
      }

      // 2) Bar
      if (photosRef.current && !disposed) {
        charts.push(
          new Chart(photosRef.current, {
            type: "bar",
            data: {
              labels: ["18–24", "25–34", "35–54", "55+"],
              datasets: [
                {
                  label: "respondents",
                  data: [398, 335, 226, 121],
                  backgroundColor: [blue, blue200, "#B0C4DE", gray200],
                  borderRadius: 8,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              layout: { padding: { top: 4, right: 6, left: 6, bottom: 0 } },
              plugins: {
                datalabels: {
                  color: "#111827",
                  anchor: "end",
                  align: "end",
                  offset: 2,
                  clamp: true, // ⬅️ 꼭대기 잘림 방지
                  font: { size: 11, weight: 700 },
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: { font: { size: 11 } },
                  grid: { color: "rgba(15,23,42,0.08)" },
                },
                x: { ticks: { font: { size: 11 } }, grid: { display: false } },
              },
            },
          })
        );
      }

      // 3) Pie
      if (nftRef.current && !disposed) {
        charts.push(
          new Chart(nftRef.current, {
            type: "pie",
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
                  hoverOffset: 3,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              layout: { padding: 4 },
              plugins: {
                datalabels: {
                  color: "#111827",
                  formatter: (_v: number, ctx: any) =>
                    `${
                      ctx.chart.data.labels[ctx.dataIndex]
                        .toString()
                        .match(/\((.*?)\)/)?.[1]
                    }`,
                  font: { size: 12, weight: 700 },
                  clamp: true,
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 items-stretch">
      <div className={card}>
        <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-5">
          Reward App Download Trend
        </h3>
        <div className={wrap}>
          <canvas ref={downloadsRef} className={cvs} />
        </div>
      </div>

      <div className={card}>
        <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-5">
          Photo Taking by Age Group
        </h3>
        <div className={wrap}>
          <canvas ref={photosRef} className={cvs} />
        </div>
      </div>

      <div className={card}>
        <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-5">
          NFT Awareness
        </h3>
        <div className={wrap}>
          <canvas ref={nftRef} className={cvs} />
        </div>
      </div>
    </div>
  );
};

export default InlineNFTCharts;
