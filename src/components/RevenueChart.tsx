import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { useThemeContext } from "../context/ThemeContext";

type Data = {
  month: string;
  revenue: number;
};

const RevenueChart = ({ data }: { data: Data[] }) => {
  const { theme } = useThemeContext();

  const isDark = theme === "dark";

  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={isDark ? "#374151" : "#E5E7EB"}
          />
          <XAxis
            dataKey="month"
            stroke={isDark ? "#9CA3AF" : "#6B7280"}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke={isDark ? "#9CA3AF" : "#6B7280"}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "#111827" : "#FFFFFF",
              border: `1px solid ${isDark ? "#374151" : "#E5E7EB"}`,
              borderRadius: "12px",
              color: isDark ? "#F9FAFB" : "#111827",
            }}
            labelStyle={{
              color: isDark ? "#F9FAFB" : "#111827",
            }}
          />
          <Bar
            dataKey="revenue"
            radius={[8, 8, 0, 0]}
            fill={isDark ? "#60A5FA" : "#2563EB"}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;