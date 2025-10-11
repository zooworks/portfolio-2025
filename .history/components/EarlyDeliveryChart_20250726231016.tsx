'use client';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from 'recharts';

// 1조 원 ≈ 0.77 billion USD
const conversionRate = 0.77;

const data = [
  { year: '2019', value: 0.8 * conversionRate },
  { year: '2020', value: 2.5 * conversionRate },
  { year: '2021', value: 5 * conversionRate },
  { year: '2022', value: 8.5 * conversionRate },
  { year: '2023', value: 11 * conversionRate },
];

export default function EarlyDeliveryChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[0, 10]} tickFormatter={(v) => `${v.toFixed(1)}B`} />
        <Tooltip formatter={(value) => [`${value.toFixed(2)} billion USD`, 'Value']} />
        <Bar
          dataKey="value"
          radius={[6, 6, 0, 0]}
          fill="#999999"
          label={{ position: 'top', formatter: (value) => `${value.toFixed(2)}B` }}
        >
          <LabelList dataKey="value" position="top" formatter={(v) => `${v.toFixed(2)}B`} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

