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
          label={({ value, x, y }) => (
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

        {/* ✅ 커스텀 범례 */}
        <Legend
          verticalAlign="middle"
          align="right"
          layout="vertical"
          iconType="circle"
          content={({ payload }) => (
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {payload?.map((entry, index) => (
                <li
                  key={`item-${index}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px", // 여기서 폰트 크기 강제
                    color: "#9ca3af",
                    marginBottom: "4px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 10,
                      height: 10,
                      backgroundColor: entry.color,
                      borderRadius: "50%",
                      marginRight: 8,
                    }}
                  />
                  {entry.value}
                </li>
              ))}
            </ul>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
