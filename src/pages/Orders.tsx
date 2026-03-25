import Header from "../components/Header";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

type OrderStatus = "Completed" | "Pending" | "Cancelled";
type PaymentStatus = "Paid" | "Unpaid" | "Refunded";

type Order = {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: OrderStatus;
  payment: PaymentStatus;
};

const ordersData: Order[] = [
  {
    id: "#ORD-1001",
    customer: "Ahmad Jawabra",
    product: "Premium Dashboard UI",
    amount: "$320",
    status: "Completed",
    payment: "Paid",
  },
  {
    id: "#ORD-1002",
    customer: "Sara Khaled",
    product: "Analytics Report",
    amount: "$210",
    status: "Pending",
    payment: "Unpaid",
  },
  {
    id: "#ORD-1003",
    customer: "Omar Ali",
    product: "Admin Template",
    amount: "$450",
    status: "Completed",
    payment: "Paid",
  },
  {
    id: "#ORD-1004",
    customer: "Lina Hassan",
    product: "Marketing Package",
    amount: "$180",
    status: "Cancelled",
    payment: "Refunded",
  },
  {
    id: "#ORD-1005",
    customer: "Yousef Ahmad",
    product: "UX Audit",
    amount: "$390",
    status: "Pending",
    payment: "Unpaid",
  },
];

function statusStyle(status: OrderStatus) {
  switch (status) {
    case "Completed":
      return "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20";
    case "Pending":
      return "bg-amber-500/15 text-amber-400 border border-amber-500/20";
    case "Cancelled":
      return "bg-rose-500/15 text-rose-400 border border-rose-500/20";
    default:
      return "bg-slate-500/15 text-slate-300 border border-slate-500/20";
  }
}

function paymentStyle(payment: PaymentStatus) {
  switch (payment) {
    case "Paid":
      return "bg-blue-500/15 text-blue-400 border border-blue-500/20";
    case "Unpaid":
      return "bg-amber-500/15 text-amber-400 border border-amber-500/20";
    case "Refunded":
      return "bg-violet-500/15 text-violet-400 border border-violet-500/20";
    default:
      return "bg-slate-500/15 text-slate-300 border border-slate-500/20";
  }
}

function Orders() {
  const [search, setSearch] = useState("");

  const filteredOrders = useMemo(() => {
    return ordersData.filter(
      (order) =>
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.product.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const completedCount = ordersData.filter((o) => o.status === "Completed").length;
  const pendingCount = ordersData.filter((o) => o.status === "Pending").length;
  const revenue = ordersData
    .filter((o) => o.payment === "Paid")
    .reduce((sum, order) => sum + Number(order.amount.replace("$", "")), 0);

  return (
    <div className="p-6 md:p-8">
     

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">Total Orders</p>
          <h3 className="text-3xl font-bold text-white mt-3">{ordersData.length}</h3>
          <p className="text-slate-400 text-sm mt-2">All tracked orders</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">Completed Orders</p>
          <h3 className="text-3xl font-bold text-white mt-3">{completedCount}</h3>
          <p className="text-emerald-400 text-sm mt-2">Successfully delivered</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">Revenue</p>
          <h3 className="text-3xl font-bold text-white mt-3">${revenue}</h3>
          <p className="text-blue-400 text-sm mt-2">{pendingCount} pending orders</p>
        </div>
      </section>

      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Orders</h2>
            <p className="text-slate-400 text-sm mt-1">
              Track order status, payment and customer activity
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2">
            <Search size={18} className="text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search orders..."
              className="bg-transparent outline-none text-sm text-white placeholder:text-slate-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px]">
            <thead>
              <tr className="text-left border-b border-slate-800">
                <th className="pb-4 text-sm font-medium text-slate-400">Order ID</th>
                <th className="pb-4 text-sm font-medium text-slate-400">Customer</th>
                <th className="pb-4 text-sm font-medium text-slate-400">Product</th>
                <th className="pb-4 text-sm font-medium text-slate-400">Amount</th>
                <th className="pb-4 text-sm font-medium text-slate-400">Status</th>
                <th className="pb-4 text-sm font-medium text-slate-400">Payment</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-slate-800/70 hover:bg-slate-800/40 transition"
                >
                  <td className="py-4 text-white font-medium">{order.id}</td>
                  <td className="py-4 text-slate-300">{order.customer}</td>
                  <td className="py-4 text-slate-300">{order.product}</td>
                  <td className="py-4 text-white font-medium">{order.amount}</td>

                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${paymentStyle(
                        order.payment
                      )}`}
                    >
                      {order.payment}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-400">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Orders;