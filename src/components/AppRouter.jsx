import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import WritingsPage from "../pages/Writings/WritingsPage";
import ProjectsPage from "../pages/Projects/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/writings",
    element: <WritingsPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
