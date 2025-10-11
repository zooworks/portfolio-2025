"use client";
import { useEffect, useRef } from "react";

const InlineNFTCharts = () => {
  const downloadsRef = useRef<HTMLCanvasElement | null>(null);
  const photosRef = useRef<HTMLCanvasElement | null>(null);
  const nftRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let charts: any[] = [];
    let disposed = false;
    let ro: ResizeObserver | null = null;

    // 캔버스가 렌더링 영역을 가질 때까지 대기
    const waitForWidth = (el: HTMLCanvasElement) =>
      new Promise<void>((resolve) => {
        const hasWidth = () => el.getBoundingClientRect().width > 0;
        if (hasWidth()) return resolve();
        const raf = () => (hasWidth() ? resolve() : requestAnimationFrame(raf));
        requestAnimationFrame(raf);
      });

    (async () => {
      const ChartMod: any = (await import("chart.js/auto")).default;
      const ChartDataLabels: any = (await import("chartjs-plugin-datalabels"))
        .default;
      if (!ChartMod.registry.plugins.get("datalabels")) {
        ChartMod.register(ChartDataLabels);
      }

      const blue = "#4A6CF7";
      const blue200 = "#7CA8F7";
      const gray200 = "#D9D9D9";

      const mk = async (ref: React.RefObject<HTMLCanvasElement | null>) => {
        const el = ref.current;
        if (!el || disposed) return null;
        await waitForWidth(el); // ✅ 폭이 생길 때까지 대기
        const c = el.getContext("2d");
        return c;
      };

      // Line
      {
        const c = await mk(downloadsRef);
        if (c && !disposed) {
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
                resizeDelay: 0,
                maintainAspectRatio: false,
                animation: false,
                plugins: {
                  legend: { display: false },
                  datalabels: {
                    color: "#111827",
                    align: "top",
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

      // Bar
      {
        const c = await mk(photosRef);
        if (c && !disposed) {
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
                resizeDelay: 0,
                maintainAspectRatio: false,
                animation: false,
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

      // Doughnut
      {
        const c = await mk(nftRef);
        if (c && !disposed) {
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
                resizeDelay: 0,
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
                },
              },
            })
          );
        }
      }

      // ✅ 부모 사이즈 변화를 따라가게
      const container = downloadsRef.current?.parentElement?.parentElement;
      if (container) {
        ro = new ResizeObserver(() => {
          charts.forEach((ch) => ch?.resize?.());
        });
        ro.observe(container);
      }
    })();

    return () => {
      disposed = true;
      charts.forEach((c) => c?.destroy?.());
      charts = [];
      ro?.disconnect();
      ro = null;
    };
  }, []);

  const card = "rounded-2xl bg-slate-50 p-4";
  const canvasCls = "w-full h-[260px] md:h-[300px]"; // 필요시 높이 조절

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      <div className={card}>
        <h3 className="text-lg font-semibold mb-3">
          Reward App Download Trend
        </h3>
        <canvas ref={downloadsRef} className={canvasCls} />
      </div>

      <div className={card}>
        <h3 className="text-lg font-semibold mb-3">
          Photo Taking by Age Group
        </h3>
        <canvas ref={photosRef} className={canvasCls} />
      </div>

      <div className={`${card} md:col-span-2`}>
        <h3 className="text-lg font-semibold mb-3">NFT Awareness</h3>
        <canvas ref={nftRef} className={canvasCls} />
      </div>
    </div>
  );
};

export default InlineNFTCharts;
