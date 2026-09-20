import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import TestNavbar from "../src/Shared/TestNavbar";
import Skills from "./Components/Home/Skills";
import Home from "./Components/Home/Home";

// import Testimonials from "./Components/Home/Testimonials";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/test",
        element: <TestNavbar></TestNavbar>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
