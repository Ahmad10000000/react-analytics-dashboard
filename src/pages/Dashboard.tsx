import { useEffect, useState } from "react";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import UsersTable from "../components/UsersTable";
import RevenueChart from "../components/RevenueChart";
import api from "../api/axios";

type RevenueItem = {
  month: string;
  revenue: number;
};

const Dashboard = () => {
  const [revenue, setRevenue] = useState<RevenueItem[]>([]);

  useEffect(() => {
    api
      .get("/revenue")
      .then((res) => {
        setRevenue(res.data.data);
      })
      .catch((err) => {
        console.error("Failed to load revenue data:", err);
      });
  }, []);

  const stats = [
    {
      title: "Total Revenue",
      value: "$24,500",
      change: "+12.5% from last month",
    },
    {
      title: "New Users",
      value: "1,245",
      change: "+8.2% from last month",
    },
    {
      title: "Orders",
      value: "532",
      change: "+5.4% from last month",
    },
    {
      title: "Conversion Rate",
      value: "4.8%",
      change: "+1.2% from last month",
    },
  ];

  const sources = [
    { name: "Organic Search", value: "42%" },
    { name: "Social Media", value: "28%" },
    { name: "Direct", value: "18%" },
    { name: "Referrals", value: "12%" },
  ];

  return (
    <div className="space-y-6">
      <Header />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 xl:col-span-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Revenue Overview
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Monthly revenue performance
          </p>

          <div className="mt-6 rounded-xl border border-dashed border-gray-300 p-4 dark:border-gray-700">
            <RevenueChart data={revenue} />
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Top Sources
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Traffic channels summary
          </p>

          <div className="mt-6 space-y-4">
            {sources.map((source) => (
              <div key={source.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700 dark:text-gray-300">
                    {source.name}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {source.value}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-800">
                  <div
                    className="h-2 rounded-full bg-gray-900 dark:bg-white"
                    style={{ width: source.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <UsersTable />
      </div>
    </div>
  );
};

export default Dashboard;