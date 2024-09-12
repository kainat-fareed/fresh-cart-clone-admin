// React imports
import React, { useEffect } from "react";

// React Router imports
import { Outlet, useNavigate } from "react-router-dom";

// Custom imports
import DashboardDrawer from "../dashboard/dashboard-drawer/dashboard-drawer";
import { Box } from "@mui/material";

const Layout = () => {
  const navigate= useNavigate()


  useEffect(()=>{
    navigate("/dashboard")
  },[])


  return (
    <Box sx={{paddingLeft:{sm:0, md:35} }}>
      <DashboardDrawer />
      <Outlet />
    </Box>
  );
};

export default Layout;
