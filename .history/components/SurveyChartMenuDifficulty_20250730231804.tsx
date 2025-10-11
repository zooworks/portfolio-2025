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
  { name: "매우 어려움", value: 7.4 },
  { name: "어려움", value: 29.6 },
  { name: "기타", value: 63.0 },
];

const COLORS = ["#B266FF", "#5B0DAF", "#E8E8E8"]; // 연보라, 진보라, 회색

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
          innerRadius={70}
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
          formatter={(value) => <span style={{ fontSize: 14 }}>{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
