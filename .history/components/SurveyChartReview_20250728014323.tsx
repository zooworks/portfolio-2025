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

export default function SurveyChartReview() {
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-700 mb-2">
      </h4>
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={90}
            startAngle={90}
            endAngle={-270}
            label={({ name, value }) => `${name} ${value}`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-400 text-right mt-2">단위: %</p>
    </div>
  );
}
