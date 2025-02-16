
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BarChart3, BoxIcon, ClipboardList, Home, Settings, Users } from "lucide-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: BoxIcon, label: "Inventory", path: "/inventory" },
    { icon: ClipboardList, label: "Transactions", path: "/transactions" },
    { icon: BarChart3, label: "Reports", path: "/reports" },
    { icon: Users, label: "Users", path: "/users" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-white border-r border-gray-200 transition-all duration-300 ease-in-out`}
      >
        <div className="p-4 border-b border-gray-200">
          <h1 className={`text-xl font-semibold text-primary ${!isSidebarOpen && "hidden"}`}>
            Inventory Pro
          </h1>
        </div>
        <nav className="p-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-3 mb-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className={`ml-3 ${!isSidebarOpen && "hidden"}`}>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="animate-fadeIn">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
