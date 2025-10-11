'use client';

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';

const data = [
  { name: 'No', value: 59.3 },
  { name: 'Yes', value: 40.7 },
];

const COLORS = ['#6A1B9A', '#E1E1E1'];

export default function SurveyChartReview() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={240}>
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
            label={({ name, value, cx = 0, cy = 0, midAngle = 0, outerRadius = 0 }) => {
              const RADIAN = Math.PI / 180;
              const radius = outerRadius + 10;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              return (
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={12}
                  fill="#6A1B9A"
                >
                  {`${name} ${value}`}
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-400 text-right mt-2">Unit: %</p>
    </div>
  );
}
