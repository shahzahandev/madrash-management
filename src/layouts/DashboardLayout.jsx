import { Outlet } from 'react-router'
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout



