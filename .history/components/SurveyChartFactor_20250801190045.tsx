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
    <ResponsiveContainer width="100%" height={260}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
        barCategoryGap={15} // ✅ 막대 사이 간격
      >
        <XAxis
          type="number"
          domain={[0, 100]}
          tickFormatter={(v) => `${v}%`}
          tick={{ fontSize: 14, fill: "#555" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ fontSize: 14, fill: "#555" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip formatter={(v: number) => `${v}%`} />
        <Bar
          dataKey="value"
          radius={[0, 8, 8, 0]} // ✅ 오른쪽 모서리만 둥글게
          barSize={24} // ✅ 막대 두께 얇게
        >
          {data.map((entry, index) => (
            <Cell
              key={`bar-${index}`}
              fill={entry.name === "User Reviews" ? "#8B3DFF" : "#D9D9D9"} // ✅ 강조색
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
