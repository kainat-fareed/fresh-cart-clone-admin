// react imports
import React, { useState } from "react";

// MUI imports
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

// Custom imports
import LogoFreshCart from "../../../assets/images/freshcart-logo.svg";
import Avatar1 from "../../../assets/images/avatar/avatar-1.jpg";
import { dashboardList } from "./dummyData/drawer-toolbar-data";
import { Link } from "react-router-dom";

const DashboardDrawer = (props) => {
  const drawerWidth = 280;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleListItemClick = (index) => {
    setActiveIndex(index);
  };

  const drawer = (
    <div>
      <img
        className="w-48 py-5 ps-4"
        src={LogoFreshCart}
        alt="Fresh Cart Logo"
      />
      <List>
        {dashboardList?.map((item, index) => (
         item?.icon ? <Link to={item?.path}>
            <ListItem
              key={item}
              disablePadding
              size="small"
              sx={{ marginBottom: "5px" }}
              onClick={() => handleListItemClick(index)}
            >
              <ListItemButton
                sx={{
                  borderRadius: "8px",
                  padding: "4px 10px",
                  marginX: "10px",
                  backgroundColor: item?.icon && activeIndex === index ? "#CEEFCE" : "transparent",
                "&:hover": {
                  backgroundColor: item?.icon ?  "#CEEFCE" : 'transparent',
                },
                }}
              >
                {item?.icon && <ListItemIcon
                  sx={{
                    fontSize: "12px",
                    color: activeIndex === index ? "#044504" : "#889397",
                  }}
                >
                  {item?.icon}
                </ListItemIcon>}
                <ListItemText
                  sx={{
                    fontSize: "12px",
                    color:item?.icon && activeIndex === index ? "#044504" : "#889397",
                  }}
                  primary={item?.label}
                />
              </ListItemButton>
            </ListItem>
          </Link> :
          <ListItem
          key={item}
          disablePadding
          size="small"
          sx={{ marginBottom: "5px" }}
          onClick={() => handleListItemClick(index)}
        >
          <ListItemButton
            sx={{
              borderRadius: "8px",
              padding: "4px 10px",
              marginX: "10px",
              backgroundColor: item?.icon && activeIndex === index ? "#CEEFCE" : "transparent",
            "&:hover": {
              backgroundColor: item?.icon ?  "#CEEFCE" : 'transparent',
            },
            }}
          >
            {item.icon && <ListItemIcon
              sx={{
                fontSize: "12px",
                color: activeIndex === index ? "#044504" : "#889397",
              }}
            >
              {item?.icon}
            </ListItemIcon>}
            <ListItemText
              sx={{
                fontSize: "12px",
                color:item?.icon && activeIndex === index ? "#044504" : "#889397",
              }}
              primary={item?.label}
            />
          </ListItemButton>
        </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#fff",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuOpenIcon sx={{ color: "#099309" }} />
          </IconButton>

          <div className="flex justify-between w-full">
            <div>
              <TextField
                type="search"
                name="search"
                size="small"
                fullWidth
                placeholder="Search"
                sx={{
                  display: { xs: "block" },
                  "& .MuiOutlinedInput-root": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "8px",
                      fontSize: "16px",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#099309",
                      borderWidth: "1px",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#099309",
                      borderWidth: "2px",
                    },
                  },
                }}
              />
            </div>
            <div className="flex items-center">
              <Badge badgeContent={4} color="error">
                <NotificationsOutlinedIcon
                  sx={{ color: "#000", fontSize: 25 }}
                />
              </Badge>

              <Avatar alt="Profile Avatar" src={Avatar1} className="ml-6" />
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default DashboardDrawer;
