import "./App.css";
// React Router Imports
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/layout";
import DashboardMain from "./components/dashboard/dashboard-main/dashboard-main";
import Products from "./components/dashboard/products/products";
import Category from "./components/dashboard/category/category";
import Orders from "./components/dashboard/orders/orders";
import Customers from "./components/dashboard/customers/customers";
import Reviews from "./components/dashboard/reviews/reviews";
import SellerVendor from "./components/dashboard/seller_vendor/seller_vendor";
import AddProductsForm from "./components/dashboard/products/add-product-form/add-product";
import AddCategoryForm from "./components/dashboard/category/add-category-form/add-category";

function App() {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <PageNotFound />,
      children: [
        {
          path: "dashboard/",
          element: <DashboardMain />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "/create-product",
          element: <AddProductsForm />, // Add route for the AddProductsForm
        },
        {
          path: "category",
          element: <Category />,
        },
        {
          path: "/create-category",
          element: <AddCategoryForm />, // Add route for the AddProductsForm
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "sellerVendor",
          element: <SellerVendor />,
        },
        {
          path: "customers",
          element: <Customers />,
        },
        {
          path: "reviews",
          element: <Reviews />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRoutes} />
    </>

    // <>
    //   {/* <DashboardMain /> */}
    //   <Products />
    // </>
  );
}

export default App;
