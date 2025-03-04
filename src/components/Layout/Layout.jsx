import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="bg-[#fff] flex flex-col w-full h-[100vh] rounded-md dark:bg-black ms-[250px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
