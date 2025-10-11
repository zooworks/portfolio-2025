import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

const data = [
  { year: "2019", value: 0.62 },
  { year: "2020", value: 1.93 },
  { year: "2021", value: 3.85 },
  { year: "2022", value: 6.54 },
  { year: "2023", value: 8.47 },
];

export default function EarlyDeliveryChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barSize={50}>
        <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
        <XAxis dataKey="year" tick={{ fontSize: 14, fill: "#171717" }} />
        <YAxis
          domain={[0, 10]}
          unit="B"
          tick={{ fontSize: 14, fill: "#171717" }}
        />
        <Tooltip formatter={(value) => `${value}B`} />
        <Bar dataKey="value" fill="#9ca3af">
          {/* ✅ LabelList에 스타일 강제 */}
          <LabelList
            dataKey="value"
            position="top"
            formatter={(v) => `${v}B`}
            style={{ fontSize: 14, fill: "#171717" }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
