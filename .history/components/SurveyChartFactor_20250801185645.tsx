"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

const data = [
  { name: "Promotional Events", value: 21.7 },
  { name: "Detailed Description", value: 34.8 },
  { name: "Product Images", value: 47.8 },
  { name: "User Reviews", value: 82.6 },
];

export default function SurveyChartFactor() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
        <XAxis
          type="number"
          domain={[0, 100]}
          tickFormatter={(v) => `${v}%`}
          tick={{ fontSize: 14, fill: "#555" }} // ✅ X축 숫자 크기와 색상 변경
        />

        <YAxis
          type="category"
          dataKey="name"
          width={120}
          tick={{ fontSize: 14, fill: "#555" }} // ✅ Y축 글씨 크기와 색상 변경
        />
        <Tooltip formatter={(v: number) => `${v}%`} />
        <Bar dataKey="value" radius={[0, 8, 8, 0]}>
          {data.map((entry, index) => (
            <Cell
              key={`bar-${index}`}
              fill={entry.name === "상품리뷰" ? "#6A1B9A" : "#D9D9D9"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
