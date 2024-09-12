// Mui icons
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export const reviewsArr = [
  {
    productName: "Haldiram's Sev Bhujia",
    customerName: "Barry McKenzie",
    review: "Nice & fresh oranges with value for money..",
    rating: 4,
    date: "23 Nov,2022",
  },
  {
    productName: "NutriChoice Digestive",
    customerName: "Dale Jenkins",
    review: "Nice product 👌 quality 👌...",
    rating: 4,
    date: "23 Nov,2022",
  },
  {
    productName: "Cadbury 5 Star Chocolate",
    customerName: "Michael Phillips",
    review: "Good quality product delivered...",
    rating: 5,
    date: "23 Nov,2022",
  },
  {
    productName: "Onion Flavour Potato",
    customerName: "James Parker",
    review: "Excellent Quality by an Indian company..",
    rating: 5,
    date: "23 Nov,2022",
  },
  {
    productName: "Salted Instant Popcorn",
    customerName: "William Hansen",
    review: "Very expensive. Cheaper at local stores...",
    rating: 4,
    date: "23 Nov,2022",
  },
  {
    productName: "Blueberry Greek Yogurt",
    customerName: "Helen Speller",
    review: "Etiam in felis eget eros dictum",
    rating: 5,
    date: "23 Nov,2022",
  },
  {
    productName: "Britannia Cheese Slices",
    customerName: "Larry Anderson",
    review: "is good but had to wait for a late delivery.",
    rating: 4,
    date: "23 Nov,2022",
  },
  {
    productName: "Kellogg's Original Cereals",
    customerName: "William McCulloch",
    review: "Very expensive. Cheaper at local stores",
    rating: 5,
    date: "23 Nov,2022",
  },
  {
    productName: "Slurrp Millet Chocolate",
    customerName: "Louise Brown",
    review: "My toddler loved the flavor and enjoys...",
    rating: 2,
    date: "23 Nov,2022",
  },
  {
    productName: "Amul Butter - 500 g",
    customerName: "John Meyer",
    review: "Good Product but packaging needs...",
    rating: 3,
    date: "23 Nov,2022",
  },
];

export const reviewStatus = [
  {
    id: "1",
    value: "selectRating",
    option: "Select Rating",
  },
  {
    id: "2",
    value: 1,
    option: "One",
  },
  {
    id: "3",
    value: 2,
    option: "Two",
  },
  {
    id: "4",
    value: 3,
    option: "Three",
  },
  {
    id: "5",
    value: 4,
    option: "Four",
  },
  {
    id: "6",
    value: 5,
    option: "Five",
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
