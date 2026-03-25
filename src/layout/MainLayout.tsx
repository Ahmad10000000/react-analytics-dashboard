import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

type MainLayoutProps = {
  onLogout: () => void;
};

const MainLayout = ({ onLogout }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <div className="flex">
        <Sidebar onLogout={onLogout} />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;