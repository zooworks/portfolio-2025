"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const awarenessData = [
  { name: "NFT Awareness (18-35)", percentage: 45 },
  { name: "Blockchain Understanding (18-35)", percentage: 20 },
];

const tradeVolumeData = [
  { month: "Oct '24", volume: 90 },
  { month: "Nov '24", volume: 180 },
  { month: "Dec '24", volume: 280 },
];

export default function NFTCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {/* Awareness Bar Chart */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">
          NFT vs Blockchain Awareness
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={awarenessData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="percentage" fill="#4380EA" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Trade Volume Line Chart */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">NFT Trade Volume Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={tradeVolumeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="volume" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
