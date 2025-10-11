import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
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
      <BarChart data={data}>
        <XAxis
          dataKey="year"
          tick={{ fontSize: 14, fill: "#171717" }} // ✅ X축 14px
        />
        <YAxis
          domain={[0, 10]}
          tickFormatter={(v) => `${v.toFixed(2)}B`}
          tick={{ fontSize: 14, fill: "#171717" }} // ✅ Y축 14px
        />
        <Tooltip formatter={(v) => `${v}B`} />
        <Bar dataKey="value" fill="#9CA3AF">
          <LabelList
            dataKey="value"
            position="top"
            formatter={(v: number) => `${v.toFixed(2)}B`}
            style={{ fontSize: 14, fill: "#171717" }} // ✅ 막대 위 숫자 14px
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
