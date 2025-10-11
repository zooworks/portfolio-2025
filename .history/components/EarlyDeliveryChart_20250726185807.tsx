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

const data = [
  { year: '2019', value: 0.8 },
  { year: '2020', value: 2.5 },
  { year: '2021', value: 5 },
  { year: '2022', value: 8.5 },
  { year: '2023', value: 11 },
];

export default function EarlyDeliveryChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[0, 12]} unit="조" />
        <Tooltip formatter={(value) => `${value}조`} />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}
          fill="#999999"
          label={{ position: 'top', formatter: (value) => `${value}조` }}>
          <LabelList dataKey="value" position="top" formatter={(v) => `${v}조`} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}