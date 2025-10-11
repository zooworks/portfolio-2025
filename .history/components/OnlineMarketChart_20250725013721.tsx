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
  { year: '2017', value: 80 },
  { year: '2018', value: 103 },
  { year: '2019', value: 131 },
  { year: '2020', value: 199 },
  { year: '2021', value: 199 },
  { year: '2025', value: 538 },
];

export default function OnlineMarketChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[0, 600]} unit="B$" />
        <Tooltip formatter={(value) => `${value}B$`} />
        <Line type="monotone" dataKey="value" stroke="#9333ea" strokeWidth={2} dot />
      </LineChart>
    </ResponsiveContainer>
  );
}

