import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import SideBar from "../sidebar/SideBar";
import { Outlet } from "react-router-dom";
import "./style.css";

const Layout = ({ children }: any) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const checkActiveMobile = openMenu ? "active-mobile-menu" : "";

  return (
    <div>
      <div className="flex relative">
        <div
          className={`md:flex-[20%]  hidden lg:block bg-[#ffffff]  border-r h-[100vh]  ${checkActiveMobile}`}
        >
          <SideBar handleOpenMenu={handleOpenMenu} />
        </div>
        <div className="md:flex-[80%]  flex-[100%]  h-[100vh]">
          <Navbar handleOpenMenu={handleOpenMenu} />
          <div className="ml-[40px] mt-[30px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
