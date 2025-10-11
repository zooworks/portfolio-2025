"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "만족", value: 30 },
  { name: "매우 만족", value: 40 },
  { name: "보통", value: 20 },
  { name: "불만족", value: 10 },
];

const COLORS = ["#5B0DAF", "#B266FF", "#E8E8E8", "#AAAAAA"];
// 만족 → 매우만족 → 보통 → 불만족 순서로 색상

export default function SurveyChartMenuDifficulty() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip formatter={(value: number) => `${value}%`} />
        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          formatter={(value) => (
            <span style={{ fontSize: 14, color: "#5B0DAF" }}>{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
