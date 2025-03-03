import Layout from "@/components/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";


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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
]);
