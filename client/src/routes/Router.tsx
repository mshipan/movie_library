import { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
