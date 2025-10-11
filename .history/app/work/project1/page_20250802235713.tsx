"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Survey Data
const data = [
  { name: "매우 어려움", value: 7.4 },
  { name: "어려움", value: 29.6 },
  { name: "기타", value: 63.0 },
];
const COLORS = ["#B266FF", "#5B0DAF", "#E8E8E8"];

// Market Trend Data
const lineData = [
  { year: "2017", value: 10.4 },
  { year: "2018", value: 13.4 },
  { year: "2019", value: 17.1 },
  { year: "2020", value: 25.9 },
  { year: "2021", value: 25.9 },
  { year: "2025", value: 70 },
];

export default function PortfolioPage() {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto space-y-16">
      {/* --- Survey Result Section --- */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-purple-600">
          4. Survey Results
        </h2>
        <p className="text-base text-gray-600 mb-8">
          Survey on perceived difficulty of navigating the menu in the current
          app.
        </p>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </section>

      {/* --- Market Trend Section --- */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-purple-600">
          4-1. Market Trend
        </h2>
        <p className="text-base text-gray-600 mb-8">
          Observing the growth in the online grocery market.
        </p>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#5B0DAF"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* --- UX Strategy & Information Architecture Section --- */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-purple-600">
          5. UX Strategy & Information Architecture
        </h2>
        <p className="text-base text-gray-600 mb-8">
          Visualizing the core UX strategy: identifying problems, defining
          goals, and outlining design & functional solutions.
        </p>

        {/* Problem Circles */}
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {[
            "Lack of clear differentiation from other e-commerce platforms",
            "Steadily declining market presence of Kurly",
            "Unintuitive reviews",
          ].map((text, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-48 h-48 rounded-full border border-gray-300 text-center text-gray-700 p-4"
            >
              {text}
            </div>
          ))}
        </div>

        {/* Problem Label */}
        <div className="flex justify-center mt-4">
          <div className="px-16 py-2 bg-purple-600 text-white font-semibold rounded-full">
            PROBLEM
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center my-4">
          <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-l-transparent border-r-transparent border-t-[20px] border-t-purple-400"></div>
        </div>

        {/* Cards: Goal, UX Design, Function */}
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {[
            {
              title: "GOAL",
              lines: [
                "“Lifestyle Curation”",
                "Curating culinary experiences that define the user’s [Dining] Style.",
              ],
            },
            {
              title: "UX DESIGN",
              lines: [
                "Data-driven recommendation features that build trust.",
                "Improved usability to increase participation.",
              ],
            },
            {
              title: "FUNCTION",
              lines: [
                "Reduce unnecessary icons and add friendly dining recommendation icons.",
                "Reviews designed to be easy to scan at a glance.",
              ],
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 border border-gray-200 rounded-xl p-6 bg-white shadow h-40"
            >
              <div className="flex items-center justify-center border-2 border-purple-500 text-purple-500 font-bold rounded-full aspect-square w-32 h-32 flex-shrink-0">
                {card.title}
              </div>
              <div className="flex-1 text-gray-600">
                {card.lines.map((line, lineIdx) => (
                  <p
                    key={lineIdx}
                    className={
                      lineIdx === 0 ? "font-semibold text-gray-800 mb-1" : ""
                    }
                  >
                    - {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
