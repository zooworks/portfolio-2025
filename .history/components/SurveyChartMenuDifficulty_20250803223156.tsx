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

const COLORS = ["#B266FF", "#5B0DAF", "#E8E8E8"];

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
          outerRadius={120}
          paddingAngle={2}
          label={({ value, x = 0, y = 0 }) => (
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="14px"
              fill="#171717"
            >
              {`${value}%`}
            </text>
          )}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
