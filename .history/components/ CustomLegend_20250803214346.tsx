import { LegendProps } from "recharts";

export default function CustomLegend(props: LegendProps) {
  const { payload } = props;

  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {payload?.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            color: "#9ca3af",
            marginBottom: "4px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              backgroundColor: entry.color,
              borderRadius: "50%",
              marginRight: 8,
            }}
          />
          {entry.value}
        </li>
      ))}
    </ul>
  );
}
