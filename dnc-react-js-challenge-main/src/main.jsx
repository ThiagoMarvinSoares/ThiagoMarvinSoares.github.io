import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tasks from "./view/Tasks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tasks />,
  },
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
