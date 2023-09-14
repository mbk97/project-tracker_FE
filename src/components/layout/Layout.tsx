import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import SideBar from "../sidebar/SideBar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }: any) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideBar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
