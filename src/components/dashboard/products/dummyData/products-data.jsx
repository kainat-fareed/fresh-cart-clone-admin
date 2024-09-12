import Product1 from "../../../../assets/images/products/product-img-1.jpg";
import Product2 from "../../../../assets/images/products/product-img-2.jpg";
import Product3 from "../../../../assets/images/products/product-img-3.jpg";
import Product4 from "../../../../assets/images/products/product-img-4.jpg";
import Product5 from "../../../../assets/images/products/product-img-5.jpg";
import Product6 from "../../../../assets/images/products/product-img-6.jpg";
import Product7 from "../../../../assets/images/products/product-img-7.jpg";
import Product8 from "../../../../assets/images/products/product-img-8.jpg";
import Product9 from "../../../../assets/images/products/product-img-9.jpg";
import Product10 from "../../../../assets/images/products/product-img-10.jpg";

// Mui icons
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export const productsArr = [
  {
    id:1,
    image: Product1,
    productName: "Haldiram's Sev Bhujia",
    category: "Snack & Munchies",
    status: "Active",
    price: 18,
    createdAt: "24 Nov 2022",
  },
  {
    id:2,
    image: Product2,
    productName: "NutriChoice Digestive",
    category: "Bakery & Biscuits",
    status: "Active",
    price: 24,
    createdAt: "20 Nov 2022",
  },
  {
    id:3,
    image: Product3,
    productName: "Cadbury 5 Star Chocolate",
    category: "Snack & Munchies",
    status: "Active",
    price: 3,
    createdAt: "14 Nov 2022",
  },
  {
    id:4,
    image: Product4,
    productName: "Onion Flavour Potato",
    category: "Snack & Munchies",
    status: "Draft",
    price: 13,
    createdAt: "08 Nov 2022",
  },
  {
    id:5,
    image: Product5,
    productName: "Salted Instant Popcorn",
    category: "Instant Food",
    status: "Draft",
    price: 9,
    createdAt: "09 Nov 2022",
  },
  {
    id:6,
    image: Product6,
    productName: "Blueberry Greek Yogurt",
    category: "Dairy, Bread & Eggs",
    status: "Deactive",
    price: 11,
    createdAt: "02 Nov 2022",
  },
  {
    id:7,
    image: Product7,
    productName: "Britannia Cheese Slices",
    category: "Dairy, Bread & Eggs",
    status: "Active",
    price: 24,
    createdAt: "15 Oct 2022",
  },
  {
    id:8,
    image: Product8,
    productName: "Blueberry Greek Yogurt",
    category: "Instant Food",
    status: "Deactive",
    price: 12,
    createdAt: "24 Oct 2022",
  },
  {
    id:9,
    image: Product9,
    productName: "Slurrp Millet Chocolate",
    category: "Instant Food",
    status: "Active",
    price: 8,
    createdAt: "8 Oct 2022",
  },
  {
    id:10,
    image: Product10,
    productName: "Amul Butter - 500 g",
    category: "Instant Food",
    status: "Active",
    price: 8,
    createdAt: "9 Oct 2022",
  },
];

export const productStatus = [
  {
    id: "1",
    value: "status",
    option: "Status",
  },
  {
    id: "2",
    value: "active",
    option: "Active",
  },
  {
    id: "3",
    value: "deactive",
    option: "Deactive",
  },
  {
    id: "4",
    value: "draft",
    option: "Draft",
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
