import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./Components/Home/Home";
import TestNavbar from "../src/Shared/TestNavbar";
import Skills from "./Components/Home/Skills";
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
      // {
      //   path: "/testimonial/:_id",
      //   element: <Testimonials></Testimonials>,
      //   loader: () =>
      //     fetch(
      //       "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      //     ),
      // },
      // {
      //   path: "/navbar",
      //   element: <Navbar></Navbar>,
      // },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
