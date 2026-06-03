import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-800 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">
        Madrasha ERP
      </h2>

      <ul className="space-y-4">
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/students">Students</Link>
        </li>

        <li>
          <Link to="/teachers">Teachers</Link>
        </li>

        <li>
          <Link to="/attendance">Attendance</Link>
        </li>

        <li>
          <Link to="/exams">Exams</Link>
        </li>

        <li>
          <Link to="/fees">Fees</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;