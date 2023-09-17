import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./style.css";
import SideBar from "components/sidebar/SideBar";
import Navbar from "components/navbar/Navbar";

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
          className={`md:flex-[20%]  hidden lg:block h-[100%]  ${checkActiveMobile}`}
        >
          <div
            className={` fixed bg-[#ffffff]   border-r-2  h-[100%] w-[300px]`}
          >
            <SideBar handleOpenMenu={handleOpenMenu} />
          </div>
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
