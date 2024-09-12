// React Imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Mui imports
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
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
import { customersArr, productOptions } from "./dummyData/customer-data";

const Customers = () => {
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

  return (
    <Box sx={{ p: 3, mt: 9 }}>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl text-gray-800 font-bold">Customer</h1>
          <div
            role="presentation"
            onClick={handleBreadCrumbClick}
            className="my-4"
          >
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
                Customers
              </Link>
            </Breadcrumbs>
          </div>
        </div>

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
        >
          Add New Customer
        </Button>
      </div>

      <div className="my-8 border rounded-2xl hover:shadow-lg">
        <div className="m-6 w-72 flex justify-between items-center">
          <TextField
            type="search"
            name="search"
            size="small"
            fullWidth
            placeholder="Search Customers"
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
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Purchase Date</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Spent</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {customersArr?.map((row, index) => (
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
                    <TableCell sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar alt="Customer Avatars" src={row?.avatar} />
                      <h3 className="hover:text-green-500 hover:cursor-pointer mx-2">
                        {row?.name}
                      </h3>
                    </TableCell>
                    <TableCell>{row?.email}</TableCell>
                    <TableCell>{row?.purchaseDate}</TableCell>
                    <TableCell>{row?.phone}</TableCell>
                    <TableCell>${row?.spent}</TableCell>
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

export default Customers;
