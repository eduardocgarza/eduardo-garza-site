import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "../pages/About/AboutPage";
import WritingsPage from "../pages/Writings/WritingsPage";
import ProjectsPage from "../pages/Projects/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <HomePage />,
    element: <AboutPage />,
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
    element: <AboutPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
