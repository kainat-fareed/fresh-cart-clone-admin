// React Imports
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

// Mui imports
import {
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
  Chip,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
// Custom imports
import {
  productOptions,
  productStatus,
  productsArr,
} from "./dummyData/products-data";

const Products = () => {
  const navigate = useNavigate();

  const handleCreateProductClick = () => {
    navigate("/create-product");
  };

  const [productsDataArr, setProductsDataArr] = useState(productsArr);
  const [filterProductStatus, setFilterProductStatus] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [deleteId, SetDeleteId] = useState();

  const [productMenu, setProductMenu] = useState(false);
  const open = Boolean(productMenu);
  const handleProductMenuClick = (id, event) => {
    SetDeleteId(id);
    setProductMenu(event.currentTarget);
  };
  const handleProductMenuClose = () => {
    const filterArr = productsDataArr.filter((product) => product.id !== deleteId);
    setProductsDataArr(filterArr);
    setProductMenu(null);
  };

  console.log(productsDataArr, "productsDataArr");
  function handleBreadCrumbClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  // const productStatusHandler = (event) => {
  //   const { value } = event.target;
  //   setFilterProductStatus(value);

  //   if (value === "active" || value === "deactive" || value === "draft") {
  //     const filteredProducts = productsArr.filter(
  //       (product) => product.status.toLowerCase() === value
  //     );
  //     setProductsDataArr(filteredProducts);
  //   } else {
  //     setProductsDataArr(productsArr);
  //   }
  // };

  const filterProducts = (status, search) => {
    let filteredProducts = productsArr;

    if (status === "active" || status === "deactive" || status === "draft") {
      filteredProducts = filteredProducts.filter(
        (product) => product.status.toLowerCase() === status.toLowerCase()
      );
    }

    if (search) {
      filteredProducts = filteredProducts.filter((product) =>
        product.productName.toLowerCase().includes(search.toLowerCase())
      );
    }

    setProductsDataArr(filteredProducts);
  };

  const productStatusHandler = (event) => {
    const { value } = event.target;
    setFilterProductStatus(value);
    filterProducts(value, searchValue);
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    filterProducts(filterProductStatus, value);
  };

  return (
    <Box sx={{ p: 3, mt: 9 }}>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-gray-800 font-bold">Products</h1>
        <Button
          variant="contained"
          sx={{
            color: "#ffffff",
            backgroundColor: "#0aad0a",
            "&:hover": {
              backgroundColor: "#099309",
            },
            textTransform: "capitalize",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "8px",
          }}
          onClick={handleCreateProductClick}
        >
          Add Product
        </Button>
      </div>

      <div role="presentation" onClick={handleBreadCrumbClick} className="my-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Dashboard
          </Link>

          <Link
            underline="hover"
            color="text.primary"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            Products
          </Link>
        </Breadcrumbs>
      </div>

      <div className="my-8 border rounded-2xl hover:shadow-lg">
        <div className="m-6 flex justify-between items-center">
          <div className="w-72">
            <TextField
              type="search"
              name="search"
              size="small"
              fullWidth
              placeholder="Search Products"
              value={searchValue}
              onChange={handleSearchChange}
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
          <select
            name="productFilter"
            value={filterProductStatus}
            onChange={productStatusHandler}
            className="w-36 border rounded-lg px-3 py-2.5 text-sm hover:border-green-500 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-200"
          >
            {productStatus?.map((item) => {
              return (
                <>
                  <option value={item?.value} className="text-xs md:text-base">
                    {item?.option}
                  </option>
                </>
              );
            })}
          </select>
        </div>

        <div style={{ height: "100%", width: "100%" }} className="mt-8">
          <TableContainer component={Paper}>
            <Table
              size="small"
              sx={{
                minWidth: 650,
                [`& .${tableCellClasses.root}`]: {
                  borderBottom: "none",
                },
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow
                  sx={{
                    "& th": {
                      backgroundColor: "#F0F3F2",
                      color: "#5c6c75",
                      fontWeight: "bold",
                    },
                  }}
                >
                  <TableCell style={{ width: "6%" }}>
                    <Checkbox />
                  </TableCell>
                  <TableCell align="center">Image</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell style={{ width: "8%" }}>Status</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Created at</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {productsDataArr?.map((row, index) => (
                  <TableRow
                    key={index}
                    hover
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      "& td": {
                        color: "#869299",
                        fontWeight: 600,
                      },
                    }}
                  >
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <img
                        src={row?.image}
                        alt="products images"
                        style={{
                          width: "44px",
                          height: "44px",
                        }}
                      />
                    </TableCell>
                    <TableCell className="hover:text-green-500 hover:cursor-pointer">
                      {row?.productName}
                    </TableCell>
                    <TableCell>{row?.category}</TableCell>
                    <TableCell>
                      <Chip
                        size="small"
                        label={row?.status}
                        color={
                          row?.status === "Active"
                            ? "success"
                            : row?.status === "Draft"
                            ? "warning"
                            : row?.status === "Deactive"
                            ? "error"
                            : "default"
                        }
                        sx={{
                          borderRadius: "8px",
                          fontSize: "12px",
                          fontWeight: "bold",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      />
                    </TableCell>
                    <TableCell>${row?.price}.00</TableCell>
                    <TableCell>{row?.createdAt}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={(event) =>
                          handleProductMenuClick(row.id, event)
                        }
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={productMenu}
                        open={open}
                        // onClose={handleProductMenuClose}
                        PaperProps={{
                          style: {
                            width: "15ch",
                          },
                        }}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        {productOptions?.map((option, index) => (
                          <MenuItem
                            key={index}
                            onClick={handleProductMenuClose}
                          >
                            <div className="flex items-center">
                              <span>{option.icon}</span>
                              <span className="mt-1">{option.label}</span>
                            </div>
                          </MenuItem>
                        ))}
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Box>
  );
};

export default Products;
