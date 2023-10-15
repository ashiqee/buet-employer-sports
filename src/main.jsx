import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Registration from "./components/Registration/Registration.jsx";

import AllPlayer from "./components/All_Players/AllPlayer";
import DefaultHome from "./components/Home/DefaultHome";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Login from "./components/Login/Login";
import Schedule from "./components/Schedule/Schedule";
import Root from "./Root";
import Profile from "./components/Dashboard/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <DefaultHome />,
      },
      {
        path: "AllPlayer",
        element: <AllPlayer />,
        loader: () => fetch("employee_data.json"),
      },
      {
        path: "/Registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
