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
  { name: "Very Difficult", value: 7.4 },
  { name: "Difficult", value: 29.6 },
  { name: "Others", value: 63.0 },
];

const COLORS = ["#B266FF", "#5B0DAF", "#E8E8E8"]; // Very Difficult, Difficult, Others

export default function SurveyChartMenuDifficulty() {
  return (
    <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={50} // 구멍 줄이기
          outerRadius={140} // 전체 원 크게
          paddingAngle={2}
          labelLine={false}
          label={({ value }) => `${value}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="middle"
          align="right"
          layout="vertical"
          iconType="circle"
          formatter={(value) => (
            <span style={{ color: "#9CA3AF", fontSize: "14px" }}>{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
