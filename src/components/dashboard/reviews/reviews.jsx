// React Imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Mui imports
import {
  Box,
  Breadcrumbs,
  Checkbox,
  Menu,
  MenuItem,
  Rating,
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
  reviewStatus,
  reviewsArr,
} from "./dummyData/reviews-data";

const Reviews = () => {
  const [reviewsDataArr, setReviewsDataArr] = useState(reviewsArr);
  const [filterProductStatus, setFilterProductStatus] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [productMenu, setProductMenu] = useState(false);
  const open = Boolean(productMenu);
  const handleProductMenuClick = (event) => {
    setProductMenu(event.currentTarget);
  };

  const handleProductMenuClose = () => {
    setProductMenu(null);
  };

  function handleBreadCrumbClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const filterProducts = (rating, search) => {
    let filteredProducts = reviewsArr;

    if (rating !== "selectRating") {
      filteredProducts = filteredProducts.filter(
        (product) => product.rating === parseInt(rating)
      );
      console.log(filteredProducts, "p");
    }

    if (search) {
      filteredProducts = filteredProducts.filter((product) =>
        product.productName.toLowerCase().includes(search.toLowerCase())
      );
    }

    setReviewsDataArr(filteredProducts);
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
      <h1 className="text-3xl text-gray-800 font-bold">Reviews</h1>

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
            Reviews
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
              placeholder="Search Reviews"
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
            {reviewStatus?.map((item) => {
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
                  <TableCell>Product</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Reviews</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {reviewsDataArr?.map((row, index) => (
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
                    <TableCell className="hover:text-green-500 hover:cursor-pointer">
                      {row?.productName}
                    </TableCell>
                    <TableCell>{row?.customerName}</TableCell>
                    <TableCell>{row?.review}</TableCell>
                    <TableCell>
                      <Rating
                        name="read-only"
                        value={row?.rating}
                        readOnly
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{row?.date}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleProductMenuClick}
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
                        onClose={handleProductMenuClose}
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
                              <span>{option?.icon}</span>
                              <span className="mt-1">{option?.label}</span>
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

export default Reviews;
