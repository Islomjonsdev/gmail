import Layout from "@/components/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import AllMail from "../allmail/allmail";
import Categories from "../categories/categories";
import Charts from "../charts/charts";
import Drafts from "../drafts/drafts";
import Home from "../Home/Home";
import Important from "../important/important";
import Inbox from "../inbox/inbox";
import ManageLabeles from "../manageLabeles/manageLabeles";
import Scheduled from "../scheduled/scheduled";
import Sent from "../sent/sent";
import Snoozed from "../snoozed/snoozed";
import Spam from "../spam/spam";
import Starred from "../starred/starred";
import Trash from "../trash/trash";
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
      {
        path: "/inbox",
        element: <Inbox />,
      },
      {
        path: "/starred",
        element: <Starred />,
      },
      {
        path: "/snoozed",
        element: <Snoozed />,
      },
      {
        path: "/sent",
        element: <Sent />,
      },
      {
        path: "/drafts",
        element: <Drafts />,
      },
      {
        path: "/important",
        element: <Important />,
      },
      {
        path: "/charts",
        element: <Charts />,
      },
      {
        path: "/scheduled",
        element: <Scheduled />,
      },
      {
        path: "/allmail",
        element: <AllMail />,
      },
      {
        path: "/spam",
        element: <Spam />,
      },
      {
        path: "/trash",
        element: <Trash />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/managelabels",
        element: <ManageLabeles />,
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