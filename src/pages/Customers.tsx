import Header from "../components/Header";
import { useMemo, useState } from "react";
import { Plus, Trash2, X } from "lucide-react";

type CustomerStatus = "Active" | "Pending" | "Inactive";

type Customer = {
  id: number;
  name: string;
  email: string;
  status: CustomerStatus;
};

const initialCustomers: Customer[] = [
  { id: 1, name: "Ahmad Jawabra", email: "ahmad@gmail.com", status: "Active" },
  { id: 2, name: "Sara Khaled", email: "sara@gmail.com", status: "Active" },
  { id: 3, name: "Omar Ali", email: "omar@gmail.com", status: "Pending" },
  { id: 4, name: "Lina Hassan", email: "lina@gmail.com", status: "Inactive" },
  { id: 5, name: "Yousef Ahmad", email: "yousef@gmail.com", status: "Active" },
];

function Customers() {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<CustomerStatus>("Active");

  const filteredCustomers = useMemo(() => {
    return customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(search.toLowerCase()) ||
        customer.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [customers, search]);

  function statusStyle(status: CustomerStatus) {
    if (status === "Active") {
      return "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20";
    }

    if (status === "Pending") {
      return "bg-amber-500/15 text-amber-400 border border-amber-500/20";
    }

    return "bg-rose-500/15 text-rose-400 border border-rose-500/20";
  }

  function resetForm() {
    setName("");
    setEmail("");
    setStatus("Active");
  }

  function handleAddCustomer() {
    if (!name.trim() || !email.trim()) return;

    const newCustomer: Customer = {
      id: Date.now(),
      name,
      email,
      status,
    };

    setCustomers((prev) => [newCustomer, ...prev]);
    resetForm();
    setIsModalOpen(false);
  }

  function handleDeleteCustomer(id: number) {
    setCustomers((prev) => prev.filter((customer) => customer.id !== id));
  }

  return (
    <div className="p-6 md:p-8">
      

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Customers</h2>
            <p className="text-slate-400 text-sm mt-1">
              Manage customer records and statuses
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customer..."
              className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white text-sm outline-none focus:border-blue-500"
            />

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition"
            >
              <Plus size={16} />
              Add Customer
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="text-slate-400 text-sm border-b border-slate-800">
                <th className="text-left pb-4">Name</th>
                <th className="text-left pb-4">Email</th>
                <th className="text-left pb-4">Status</th>
                <th className="text-left pb-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b border-slate-800/70 hover:bg-slate-800/40 transition"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-semibold">
                        {customer.name.charAt(0)}
                      </div>
                      <span className="text-white font-medium">
                        {customer.name}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 text-slate-300">{customer.email}</td>

                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                        customer.status
                      )}`}
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td className="py-4">
                    <button
                      onClick={() => handleDeleteCustomer(customer.id)}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700 text-slate-300 hover:text-rose-400 hover:border-rose-500/50 transition text-sm"
                    >
                      <Trash2 size={15} />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filteredCustomers.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-slate-400">
                    No customers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Add Customer
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Create a new customer record
                </p>
              </div>

              <button
                onClick={() => {
                  setIsModalOpen(false);
                  resetForm();
                }}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter customer name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter customer email"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as CustomerStatus)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-500"
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  resetForm();
                }}
                className="px-4 py-2 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleAddCustomer}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition"
              >
                Save Customer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Customers;