/* --- add these imports at the top of the file (once) --- */
import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(...registerables, ChartDataLabels);

/* --- inline charts component --- */
const InlineNFTCharts = () => {
  const downloadsRef = useRef<HTMLCanvasElement | null>(null);
  const photosRef = useRef<HTMLCanvasElement | null>(null);
  const nftRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const blue = "#4A6CF7";
    const blue200 = "#7CA8F7";
    const gray200 = "#D9D9D9";

    const charts: Chart[] = [];

    // 1) Reward App Download Trend (Line)
    if (downloadsRef.current) {
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
            plugins: {
              legend: { display: false },
              datalabels: {
                color: "#111827",
                align: "top",
                formatter: (v: number) => v,
                font: { weight: "600" },
              },
              tooltip: { callbacks: { label: (ctx) => ` ${ctx.parsed.y}` } },
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
    if (photosRef.current) {
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
              y: { beginAtZero: true, grid: { color: "rgba(15,23,42,0.08)" } },
              x: { grid: { display: false } },
            },
          },
        })
      );
    }

    // 3) NFT Awareness (Doughnut)
    if (nftRef.current) {
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
                  }`, // %만 표기
                font: { weight: "600" },
              },
              tooltip: {
                callbacks: { label: (ctx) => `${ctx.label}: ${ctx.parsed} %` },
              },
            },
          },
        })
      );
    }

    return () => charts.forEach((c) => c.destroy());
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      <div className="rounded-2xl bg-slate-50 p-4">
        <h3 className="text-lg font-semibold mb-3">
          Reward App Download Trend
        </h3>
        <canvas ref={downloadsRef} role="img" aria-label="downloads by year" />
        <p className="text-xs text-gray-500 mt-2">
          *Source: Allied Market Research (2022)
        </p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-4">
        <h3 className="text-lg font-semibold mb-3">
          Photo Taking by Age Group
        </h3>
        <canvas ref={photosRef} role="img" aria-label="photos by age" />
        <p className="text-xs text-gray-500 mt-2">*Source: CTA Survey (2017)</p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-4 md:col-span-2">
        <h3 className="text-lg font-semibold mb-3">NFT Awareness</h3>
        <canvas ref={nftRef} role="img" aria-label="nft awareness" />
        <p className="text-xs text-gray-500 mt-2">*Source: YouGov</p>
      </div>
    </div>
  );
};
