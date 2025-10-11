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

// 조 원 단위를 억 달러로 환산 (1조 원 ≈ 770 million USD = 7.7억 USD)
const data = [
  { year: '2019', value: 0.8 * 7.7 },
  { year: '2020', value: 2.5 * 7.7 },
  { year: '2021', value: 5 * 7.7 },
  { year: '2022', value: 8.5 * 7.7 },
  { year: '2023', value: 11 * 7.7 },
];

export default function EarlyDeliveryChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[0, 90]} unit="억 $" />
        <Tooltip formatter={(value) => `${value.toFixed(1)}억 $`} />
        <Bar
          dataKey="value"
          radius={[6, 6, 0, 0]}
          fill="#999999"
          label={{ position: 'top', formatter: (value) => `${value.toFixed(1)}억 $` }}
        >
          <LabelList dataKey="value" position="top" formatter={(v) => `${v.toFixed(1)}억 $`} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
