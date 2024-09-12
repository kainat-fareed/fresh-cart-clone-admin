// svgs
import Snacks from "../../../../assets/images/svgs/snacks.svg";
import Bakery from "../../../../assets/images/svgs/bakery.svg";
import BabyCare from "../../../../assets/images/svgs/baby-food.svg";
import ColdDrink from "../../../../assets/images/svgs/wine.svg";
import Toiletries from "../../../../assets/images/svgs/toiletries.svg";
import Dairy from "../../../../assets/images/svgs/dairy.svg";
import Fish from "../../../../assets/images/svgs/fish.svg";
import Vegetable from "../../../../assets/images/svgs/fruit.svg";
import PetCare from "../../../../assets/images/svgs/petfoods.svg";
// Mui icons
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export const categoryArr = [
  {
    svg: Snacks,
    categoryName: "Snack & Munchies",
    product: 12,
    status: "Published",
  },
  {
    svg: Bakery,
    categoryName: "Bakery & Biscuits",
    product: 8,
    status: "Published",
  },
  {
    svg: BabyCare,
    categoryName: "Baby Care",
    product: 32,
    status: "Published",
  },
  {
    svg: ColdDrink,
    categoryName: "Cold Drinks & Juices",
    product: 32,
    status: "Published",
  },
  {
    svg: Toiletries,
    categoryName: "Toiletries",
    product: 23,
    status: "Unpublished",
  },
  {
    svg:Dairy,
    categoryName: "Dairy, Bread & Eggs",
    product: 16,
    status: "Published",
  },
  {
    svg:Fish,
    categoryName: "Chicken, Meat & Fish",
    product: 14,
    status: "Published",
  },
  {
    svg:Vegetable,
    categoryName: "	Fruits & Vegetables",
    product: 32,
    status: "Published",
  },
  {
    svg:PetCare,
    categoryName: "Pet Food",
    product: 25,
    status: "Unpublished",
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
    value: "published",
    option: "Published",
  },
  {
    id: "3",
    value: "unpublished",
    option: "Unpublished",
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
