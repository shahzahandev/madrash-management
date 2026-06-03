import React from "react";
import ReactDOM from "react-dom/client";


import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes"; // path project structure অনুযায়ী adjust করবে

import AuthProvider from "./context/AuthContext";




ReactDOM.createRoot(document.getElementById("root")).render(
    <>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
    </>
   
    
);
