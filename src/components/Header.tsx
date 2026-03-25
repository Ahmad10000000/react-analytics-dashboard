import { Bell, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Welcome back, Ahmad 👋
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800">
          <Search size={18} className="text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-40 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400 dark:text-gray-200 dark:placeholder:text-gray-500"
          />
        </div>

        <button
          type="button"
          className="relative rounded-xl border border-gray-200 bg-white p-2.5 shadow-sm transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <Bell size={18} className="text-gray-600 dark:text-gray-200" />
          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white dark:bg-white dark:text-gray-900">
            A
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Ahmad
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Admin
            </p>
          </div>
        </div>

        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;