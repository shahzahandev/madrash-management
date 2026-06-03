import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from "../pages/Dashbaord";
import Students from "../pages/Students";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "students",
        element: <Students />,
      },
    ],
  },
]);

export default router;

// createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )
