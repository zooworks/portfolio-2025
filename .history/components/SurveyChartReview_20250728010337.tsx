'use client';

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';

const data = [
  { name: '아니요', value: 59.3 },
  { name: '있음', value: 40.7 },
];

const COLORS = ['#6A1B9A', '#E1E1E1'];

export default function SurveyChartReview() { // ⬅️ 여기 default 꼭 붙이기!
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          startAngle={90}
          endAngle={-270}
          label={({ name, value }) => `${name} ${value}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip formatter={(value: number) => `${value}%`} />
      </PieChart>
    </ResponsiveContainer>
  );
}
