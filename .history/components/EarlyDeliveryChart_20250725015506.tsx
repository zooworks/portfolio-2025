import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
} from "recharts";

const data = [
  { year: "2019", value: 0.8 },
  { year: "2020", value: 2.5 },
  { year: "2021", value: 5 },
  { year: "2022", value: 8.5 },
  { year: "2023", value: 11 },
];

export default function EarlyDeliveryChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis
          label={{ value: "Billion $", angle: -90, position: "insideLeft" }}
          domain={[0, 12]}
        />
        <Tooltip formatter={(value) => `${value}B$`} />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          <LabelList dataKey="value" position="top" formatter={(v) => `${v}B$`} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}