import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./routes/AppRoutes"; // path project structure অনুযায়ী adjust করবে

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
