import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./style.css";
import SideBar from "components/sidebar/SideBar";
import Navbar from "components/navbar/Navbar";
import { Drawer } from "@mui/material";

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <div className="flex relative">
        <div className={`md:flex-[20%]   h-[100vh] `}>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "20%",
              },
            }}
            open
            anchor="left"
            PaperProps={{
              sx: {
                color: "white",
                zIndex: 1000,
              },
            }}
          >
            <SideBar />
          </Drawer>

          <Drawer
            variant="temporary"
            open={openMenu}
            onClose={handleOpenMenu}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "70%",
              },
            }}
            anchor="left"
            PaperProps={{
              sx: {
                color: "white",
                zIndex: 1000,
              },
            }}
          >
            <SideBar handleOpenMenu={handleOpenMenu} />
          </Drawer>
        </div>
        <div className="md:flex-[80%]  flex-[100%]  h-[100vh]">
          <Navbar handleOpenMenu={handleOpenMenu} />
          <div className="mx-[20px] md:mx-[40px] mt-[30px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
