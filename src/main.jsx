import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Registration from "./components/Registration/Registration.jsx";
import Home from "./components/Home/Home.jsx";
import AllPlayer from "./components/All_Players/AllPlayer";
import DefaultHome from "./components/Home/DefaultHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
