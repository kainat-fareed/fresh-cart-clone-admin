import Product1 from "../../../../assets/images/products/product-img-1.jpg";
import Product2 from "../../../../assets/images/products/product-img-2.jpg";
import Product3 from "../../../../assets/images/products/product-img-3.jpg";
import Product4 from "../../../../assets/images/products/product-img-4.jpg";
import Product5 from "../../../../assets/images/products/product-img-5.jpg";
import Product6 from "../../../../assets/images/products/product-img-6.jpg";
import Product7 from "../../../../assets/images/products/product-img-7.jpg";


// Mui icons
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export const ordersArr = [
  {
    image: Product1,
    productName: "Haldiram's Sev Bhujia",
    OrderName: "FC#1007",
    customer: "Jennifer Sullivan",
    dateTime: "01 May 2023 (10:12 am)",
    paymentMethod: "Paypal",
    status: "Success",
    amount: 12.99,
  },
  {
    image: Product2,
    productName: "NutriChoice Digestive",
    OrderName: "FC#1006",
    customer: "Willie Hanson",
    dateTime: "20 April 2023 (9:20 am)",
    paymentMethod: "COD",
    status: "Success",
    amount: 8.19,
  },
  {
    image: Product3,
    productName: "Cadbury 5 Star Chocolate",
    OrderName: "FC#1005",
    customer: "Dori Stewart",
    dateTime: "11 March 2023 (7:12 pm)",
    paymentMethod: "Paypal",
    status: "Pending",
    amount: 8.19	
  },
  {
    image: Product4,
    productName: "Onion Flavour Potato",
    OrderName: "FC#1004",
    customer: "Ezekiel Rogerson",
    dateTime: "09 March 2023 (6:23 pm)",
    paymentMethod: "Stripe",
    status: "Success",
    amount: 23.11	
  },
  {
    image: Product5,
    productName: "Salted Instant Popcorn",
    OrderName: "FC#1003",
    customer: "Maria Roux",
    dateTime: "18 Feb 2022 (12:20 pm)",
    paymentMethod: "COD",
    status: "Success",
    amount: 2.00	
  },
  {
    image: Product6,
    productName: "Blueberry Greek Yogurt",
    OrderName: "FC#1002",
    customer: "Robert Donald",
    dateTime: "12 Feb 2022 (4:56 pm)",
    paymentMethod: "Paypal",
    status: "Cancel",
    amount: 56.00	
  },
  {
    image: Product7,
    productName: "Britannia Cheese Slices",
    OrderName: "FC#1001",
    customer: "Robert Donald",
    dateTime: "22 Jan 2023 (1:20 pm)",
    paymentMethod: "Paypal",
    status: "Success",
    amount: 23.00	
  }
];

export const productStatus = [
  {
    id: "1",
    value: "status",
    option: "Status",
  },
  {
    id: "2",
    value: "success",
    option: "Success",
  },
  {
    id: "3",
    value: "pending",
    option: "Pending",
  },
  {
    id: "4",
    value: "cancel",
    option: "Cancel",
  },
];

export const productOptions = [
  {
    icon: <DeleteOutlinedIcon sx={{ marginRight: "10px" }} />,
    label: "Delete",
  },
  {
    icon: <EditOutlinedIcon sx={{ marginRight: "10px" }} />,
    label: "Edit",
  },
];
