// components/OnlineMarketChart.tsx
'use client';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  { year: '2017', value: 10.4 },
  { year: '2018', value: 13.4 },
  { year: '2019', value: 17.1 },
  { year: '2020', value: 25.9 },
  { year: '2021', value: 25.9 },
  { year: '2025', value: 70 },
];

export default function OnlineMarketChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[0, 80]} unit="조" />
        <Tooltip formatter={(value) => `${value}조`} />
        <Line type="monotone" dataKey="value" stroke="#9333ea" strokeWidth={2} dot />
      </LineChart>
    </ResponsiveContainer>
  );
}
