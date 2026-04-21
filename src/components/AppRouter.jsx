import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "../pages/About/AboutPage";
import WritingsPage from "../pages/Writings/WritingsPage";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import MozartProjectPage from "../pages/Projects/Mozart/MozartProjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage />,
  },
  {
    path: "/publications",
    element: <WritingsPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/projects/mozart",
    element: <MozartProjectPage />,
  },
  {
    path: "*",
    element: <AboutPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
