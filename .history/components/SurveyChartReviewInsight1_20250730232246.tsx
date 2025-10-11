"use client";

import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "No", value: 59.3 },
  { name: "Yes", value: 40.7 },
];

const COLORS = ["#5B0DAF", "#E8E8E8"]; // 보라, 회색

export default function SurveyChartReviewInsight1() {
  return (
    <div style={{ width: "100%", height: 240, position: "relative" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* 중앙 텍스트 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 600 }}>No</div>
        <div style={{ fontSize: 24, fontWeight: 700 }}>59.3</div>
      </div>
    </div>
  );
}
