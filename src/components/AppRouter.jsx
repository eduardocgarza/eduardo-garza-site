import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Software from "../pages/Software";
import Hardware from "../pages/Hardware";
import About from "../pages/About";
import BlogItem from "../pages/BlogItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/software",
    element: <Software />,
  },
  {
    path: "/hardware",
    element: <Hardware />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog/:slug",
    element: <BlogItem />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
