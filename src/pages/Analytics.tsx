import Header from "../components/Header";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 3200 },
  { month: "Feb", revenue: 4100 },
  { month: "Mar", revenue: 3800 },
  { month: "Apr", revenue: 5200 },
  { month: "May", revenue: 6100 },
  { month: "Jun", revenue: 6800 },
  { month: "Jul", revenue: 7400 },
];

const trafficData = [
  { source: "Organic", users: 420 },
  { source: "Social", users: 310 },
  { source: "Direct", users: 220 },
  { source: "Referral", users: 180 },
];

function Analytics() {
  return (
    <div className="p-6 md:p-8">
     

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">Total Visitors</p>
          <h3 className="text-3xl font-bold text-white mt-3">18.4K</h3>
          <p className="text-emerald-400 text-sm mt-2">+14.2% this month</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">Bounce Rate</p>
          <h3 className="text-3xl font-bold text-white mt-3">32.8%</h3>
          <p className="text-blue-400 text-sm mt-2">Improved from last week</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">Avg. Session</p>
          <h3 className="text-3xl font-bold text-white mt-3">4m 12s</h3>
          <p className="text-violet-400 text-sm mt-2">Higher engagement</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">Conversion</p>
          <h3 className="text-3xl font-bold text-white mt-3">5.6%</h3>
          <p className="text-amber-400 text-sm mt-2">Stable performance</p>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white text-lg font-semibold mb-2">Revenue Trend</h3>
          <p className="text-slate-400 text-sm mb-4">
            Monthly revenue growth overview
          </p>

          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white text-lg font-semibold mb-2">Traffic Sources</h3>
          <p className="text-slate-400 text-sm mb-4">
            Where your users are coming from
          </p>

          <div className="space-y-4 mt-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Organic Search</span>
                <span className="text-white">42%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-[42%] bg-blue-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Social Media</span>
                <span className="text-white">31%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-[31%] bg-violet-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Direct</span>
                <span className="text-white">18%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-[18%] bg-emerald-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Referral</span>
                <span className="text-white">9%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-[9%] bg-amber-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white text-lg font-semibold mb-2">User Acquisition</h3>
          <p className="text-slate-400 text-sm mb-4">
            Visitors by channel
          </p>

          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="source" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar dataKey="users" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Performance Summary</h3>

          <div className="space-y-5">
            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
              <p className="text-slate-400 text-sm">Best Channel</p>
              <h4 className="text-white text-lg font-semibold mt-2">Organic Search</h4>
              <p className="text-emerald-400 text-sm mt-1">Top contributor this month</p>
            </div>

            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
              <p className="text-slate-400 text-sm">Highest Revenue Month</p>
              <h4 className="text-white text-lg font-semibold mt-2">July</h4>
              <p className="text-blue-400 text-sm mt-1">$7,400 recorded revenue</p>
            </div>

            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
              <p className="text-slate-400 text-sm">Growth Insight</p>
              <h4 className="text-white text-lg font-semibold mt-2">Strong Upward Trend</h4>
              <p className="text-violet-400 text-sm mt-1">
                Consistent improvement across traffic and conversions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Analytics;