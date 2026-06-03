import DashboardCard from "../components/DashboardCard/DashboardCard";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Dashboard
      </h2>

      <div className="grid grid-cols-4 gap-5">
        <DashboardCard
          title="Total Students"
          value="350"
        />

        <DashboardCard
          title="Total Teachers"
          value="25"
        />

        <DashboardCard
          title="Pending Fees"
          value="120"
        />

        <DashboardCard
          title="Hifz Students"
          value="90"
        />
      </div>
    </div>
  );
};

export default Dashboard;