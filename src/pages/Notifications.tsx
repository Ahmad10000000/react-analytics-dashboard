import Header from "../components/Header";
import { Bell, CheckCheck, Info, TriangleAlert, CircleCheckBig } from "lucide-react";

type NotificationItem = {
  id: number;
  title: string;
  message: string;
  time: string;
  status: "Unread" | "Read";
  type: "Info" | "Success" | "Warning";
};

const notificationsData: NotificationItem[] = [
  {
    id: 1,
    title: "New user registered",
    message: "A new customer account was created successfully.",
    time: "2 min ago",
    status: "Unread",
    type: "Success",
  },
  {
    id: 2,
    title: "Monthly report available",
    message: "Your analytics report for this month is ready to review.",
    time: "15 min ago",
    status: "Unread",
    type: "Info",
  },
  {
    id: 3,
    title: "Payment issue detected",
    message: "One of the recent orders requires payment verification.",
    time: "1 hour ago",
    status: "Read",
    type: "Warning",
  },
  {
    id: 4,
    title: "System update completed",
    message: "The dashboard was updated successfully without downtime.",
    time: "3 hours ago",
    status: "Read",
    type: "Success",
  },
];

function typeStyle(type: NotificationItem["type"]) {
  switch (type) {
    case "Success":
      return "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20";
    case "Warning":
      return "bg-amber-500/15 text-amber-400 border border-amber-500/20";
    default:
      return "bg-blue-500/15 text-blue-400 border border-blue-500/20";
  }
}

function statusStyle(status: NotificationItem["status"]) {
  return status === "Unread"
    ? "bg-violet-500/15 text-violet-400 border border-violet-500/20"
    : "bg-slate-500/15 text-slate-300 border border-slate-500/20";
}

function typeIcon(type: NotificationItem["type"]) {
  switch (type) {
    case "Success":
      return <CircleCheckBig size={18} className="text-emerald-400" />;
    case "Warning":
      return <TriangleAlert size={18} className="text-amber-400" />;
    default:
      return <Info size={18} className="text-blue-400" />;
  }
}

function Notifications() {
  const unreadCount = notificationsData.filter((item) => item.status === "Unread").length;

  return (
    <div className="p-6 md:p-8">
    

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">Total Notifications</p>
          <h3 className="text-3xl font-bold text-white mt-3">{notificationsData.length}</h3>
          <p className="text-slate-400 text-sm mt-2">All recent updates</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">Unread</p>
          <h3 className="text-3xl font-bold text-white mt-3">{unreadCount}</h3>
          <p className="text-violet-400 text-sm mt-2">Need your attention</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">Notification Center</p>
          <h3 className="text-3xl font-bold text-white mt-3">Active</h3>
          <p className="text-blue-400 text-sm mt-2">System tracking enabled</p>
        </div>
      </section>

      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Notifications</h2>
            <p className="text-slate-400 text-sm mt-1">
              Review alerts, updates and system messages
            </p>
          </div>

          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition">
            <CheckCheck size={16} />
            Mark all as read
          </button>
        </div>

        <div className="space-y-4">
          {notificationsData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5 hover:border-slate-700 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {typeIcon(item.type)}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-white font-semibold">{item.title}</h3>

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${typeStyle(
                          item.type
                        )}`}
                      >
                        {item.type}
                      </span>

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm mt-2">{item.message}</p>

                    <div className="flex items-center gap-2 mt-3 text-slate-500 text-xs">
                      <Bell size={14} />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-3 py-2 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition text-sm">
                    View
                  </button>
                  <button className="px-3 py-2 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition text-sm">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Notifications;