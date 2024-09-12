import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

import { Avatar } from "@mui/material";

export const dashboardList = [
  {
    icon: <HomeOutlinedIcon />,
    label: "Dashboard",
  },
  {
    label: "Store Management",
  },
  {
    path: "/dashboard/Products",
    icon: <ShoppingCartOutlinedIcon />,
    label: "Products",
  },
  {
    icon: <FormatListBulletedOutlinedIcon />,
    label: "Categories",
  },
  {
    icon: <ShoppingBagOutlinedIcon />,
    label: "Orders",
  },
  {
    icon: <StorefrontOutlinedIcon />,
    label: "Sellers/Vendors",
  },
  {
    icon: <PeopleOutlinedIcon />,
    label: "Customer",
  },
  {
    icon: <StarOutlineOutlinedIcon />,
    label: "Reviews",
  },
];

export const monthlyRevCardArr = [
  {
    heading: "Earnings",
    avatar: (
      <Avatar sx={{ backgroundColor: "#F8D6D6" }}>
        <AttachMoneyIcon sx={{ color: "#581313" }} />
      </Avatar>
    ),
    monthlyRevenueMoney: "$93,438.78",
    label: "Monthly revenue",
  },
  {
    heading: "Orders",
    avatar: (
      <Avatar sx={{ backgroundColor: "#fff3cd" }}>
        <ShoppingCartOutlinedIcon sx={{ color: "#664d03" }} />
      </Avatar>
    ),
    monthlyRevenueMoney: "42,339",
    number: "25+",
    label: "New Sales",
  },
  {
    heading: "Customers",
    avatar: (
      <Avatar sx={{ backgroundColor: "#cce1fe" }}>
        <PeopleOutlinedIcon sx={{ color: "#002b63" }} />
      </Avatar>
    ),
    monthlyRevenueMoney: "39,354",
    number: "30+",
    label: "new in 2 days",
  },
];

export const ProgressArr = [
  {
    label: "Total Profit",
    rupee: "$1,619",
    value: 8.6,
    color: "success",
  },
  {
    label: "Total Income",
    rupee: "$3,571",
    value: 86.4,
    color: "primary",
  },
  {
    label: "Total Expenses",
    rupee: "$3,430",
    value: 74.5,
    color: "error",
  },
];

export const Notification_Sales_Cards = [
  {
    icon: <NotificationsOutlinedIcon sx={{ fontSize: 40, color: "#ffc107" }} />,
    heading: "Start your day with New Notification.",
    para: "2 new notification",
  },
  {
    icon: <LightbulbOutlinedIcon sx={{ fontSize: 40, color: "#198754" }} />,
    heading: "Monitor your Sales and Profitability.",
    para: "View Performance",
  },
];

export const createData = (
  orderNumber,
  productName,
  orderDate,
  price,
  status
) => {
  return { orderNumber, productName, orderDate, price, status };
};

export const rows = [
  createData(
    "#FC0005",
    "Haldiram's Sev Bhujia",
    "28 March 2023",
    "$18.00",
    "Shipped"
  ),
  createData(
    "#FC0004",
    "NutriChoice Digestive",
    "24 March 2023",
    "$24.00",
    "Pending"
  ),

  createData(
    "#FC0003",
    "Onion Flavour Potato",
    "8 Feb 2023",
    "$9.00",
    "Cancel"
  ),

  createData(
    "#FC0002",
    "Blueberry Greek Yogurt",
    "20 Jan 2023",
    "$12.00",
    "Pending"
  ),

  createData(
    "#FC0001",
    "Slurrp Millet Chocolate",
    "14 Jan 2023",
    "$8.00",
    "Processing"
  ),
];
