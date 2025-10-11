'use client';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from 'recharts';

const data = [
  { name: '기획전', value: 21.7 },
  { name: '상세설명', value: 34.8 },
  { name: '이미지', value: 47.8 },
  { name: '상품리뷰', value: 82.6 },
];

export default function SurveyChartFactor() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
        <XAxis type="number" domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
        <YAxis type="category" dataKey="name" width={80} />
        <Tooltip formatter={(v: number) => `${v}%`} />
        <Bar dataKey="value" radius={[0, 8, 8, 0]}>
          {data.map((entry, index) => (
            <Cell key={`bar-${index}`} fill={entry.name === '상품리뷰' ? '#6A1B9A' : '#D9D9D9'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
