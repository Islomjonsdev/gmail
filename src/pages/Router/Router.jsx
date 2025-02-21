import Layout from "@/components/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
