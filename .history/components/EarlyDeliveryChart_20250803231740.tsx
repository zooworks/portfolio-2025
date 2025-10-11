"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

// 1조 원 ≈ 0.77 billion USD
const conversionRate = 0.77;

const data = [
  { year: "2019", value: 0.8 * conversionRate },
  { year: "2020", value: 2.5 * conversionRate },
  { year: "2021", value: 5 * conversionRate },
  { year: "2022", value: 8.5 * conversionRate },
  { year: "2023", value: 11 * conversionRate },
];

function formatValue(input: unknown): string {
  const num = typeof input === "number" ? input : parseFloat(String(input));
  if (isNaN(num)) return "-";
  return `${num.toFixed(2)}B`;
}

export default function EarlyDeliveryChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[0, 10]} tickFormatter={(v) => formatValue(v)} />
        <Tooltip
          formatter={(value) => {
            const num =
              typeof value === "number" ? value : parseFloat(String(value));
            return [`${num.toFixed(2)} billion USD`, "Value"];
          }}
        />
        <Bar dataKey="value" fill="#999999" label={false} radius={[6, 6, 0, 0]}>
          <LabelList
            dataKey="value"
            position="top"
            formatter={(v: number | string) => {
              const num = typeof v === "string" ? parseFloat(v) : v ?? 0;
              return `${Math.round(num * 100) / 100}B`;
            }}
            style={{ fontSize: 14, fill: "#171717" }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
