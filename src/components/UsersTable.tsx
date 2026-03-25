const users = [
  {
    name: "Ahmad Jawabra",
    email: "ahmad@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    name: "Lina Khaled",
    email: "lina@example.com",
    role: "Manager",
    status: "Active",
  },
  {
    name: "Omar Hammad",
    email: "omar@example.com",
    role: "Editor",
    status: "Pending",
  },
  {
    name: "Sara Nasser",
    email: "sara@example.com",
    role: "Support",
    status: "Active",
  },
];

const UsersTable = () => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Recent Users
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Latest registered users in the system
          </p>
        </div>

        <button className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3">
          <thead>
            <tr>
              <th className="px-4 text-left text-sm font-semibold text-gray-500 dark:text-gray-400">
                Name
              </th>
              <th className="px-4 text-left text-sm font-semibold text-gray-500 dark:text-gray-400">
                Email
              </th>
              <th className="px-4 text-left text-sm font-semibold text-gray-500 dark:text-gray-400">
                Role
              </th>
              <th className="px-4 text-left text-sm font-semibold text-gray-500 dark:text-gray-400">
                Status
              </th>
              <th className="px-4 text-left text-sm font-semibold text-gray-500 dark:text-gray-400">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.email}
                className="rounded-2xl bg-gray-50 dark:bg-gray-900"
              >
                <td className="rounded-l-2xl px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                  {user.name}
                </td>
                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                  {user.email}
                </td>
                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                  {user.role}
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="rounded-r-2xl px-4 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
                      View
                    </button>
                    <button className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:opacity-90 dark:bg-white dark:text-gray-900">
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;