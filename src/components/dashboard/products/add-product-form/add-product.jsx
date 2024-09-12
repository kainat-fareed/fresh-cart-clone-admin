import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// Mui imports
import {
  Box,
  Breadcrumbs,
  Button,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Switch,
  TextField,
} from "@mui/material";
// React Router Dom imports
import { Link, useNavigate } from "react-router-dom";

// Custom Imports
import {
  productCategoryDropDownData,
  productUnitData,
} from "./dummyData/add-product-dummyData";

const AddProductsForm = () => {
  const navigate = useNavigate();

  // State for all text fields
  const [formValues, setFormValues] = useState({
    productName: "",
    productWeight: "",
    productCode: "",
    productSKU: "",
    regularPrice: "",
    regularPrice: "",
    salePrice: "",
    title: "",
    metaDescription: "",
    productCategory: "",
    productUnit: "",
    productStatus: "active",
  });

  const [switchBtn, setSwitchBtn] = useState(true);

  const handleBackToProductsClick = () => {
    navigate("/products");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const handleSwitchClick = () => {
    setSwitchBtn(!switchBtn);
  };

  function handleBreadCrumbClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <>
      <Box sx={{ p: 3, mt: 9 }}>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-gray-800 font-bold">Add New Product</h1>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F0F3F2",
              color: "#000",
              "&:hover": {
                backgroundColor: "#CCCFCE",
              },
              textTransform: "capitalize",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
            onClick={handleBackToProductsClick}
          >
            Back to product
          </Button>
        </div>

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
              Products
            </Link>

            <Link
              underline="hover"
              color="text.primary"
              href="/material-ui/react-breadcrumbs/"
              aria-current="page"
            >
              Add New Products
            </Link>
          </Breadcrumbs>
        </div>

        <form onSubmit={handleSubmit}>
          <Grid container gap={3}>
            <Grid
              item
              xs={12}
              md={7.7}
              className="my-8 border rounded-2xl hover:shadow-lg border border-red-500"
            >
              <h3 className="m-6 font-bold text-gray-700">
                Product Information
              </h3>
              <div className="mx-6 my-4 flex justify-between items-center">
                <Grid container gap={3}>
                  <Grid item xs={12} md={5.75}>
                    <label>Title</label>
                    <TextField
                      type="text"
                      name="ProductName"
                      size="small"
                      fullWidth
                      placeholder="Product Name"
                      value={formValues.productName}
                      onChange={handleInputChange}
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
                        marginBottom: "10px",
                      }}
                    />
                    <label>Weight</label>
                    <TextField
                      type="text"
                      name="productWeight"
                      size="small"
                      fullWidth
                      placeholder="Products Weight"
                      value={formValues.productWeight}
                      onChange={handleInputChange}
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
                  </Grid>
                  <Grid item xs={12} md={5.75}>
                    <label>Product Category</label>
                    <select
                      value={formValues.productCategory}
                      onChange={handleInputChange}
                      name="productCategory"
                      // value={filterProductCategory}
                      // onChange={handleProductCategoryChange}
                      className="mb-2.5 w-full border rounded-lg px-3 py-2.5 text-sm hover:border-green-500 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-200"
                    >
                      {productCategoryDropDownData?.map((item) => {
                        return (
                          <>
                            <option
                              value={item?.value}
                              className="text-xs md:text-base"
                            >
                              {item?.option}
                            </option>
                          </>
                        );
                      })}
                    </select>
                    <label>Units</label>
                    <select
                      name="productUnit"
                      // value={filterUnit}
                      // onChange={handleProductUnit}
                      value={formValues.productUnit}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-3 py-2.5 text-sm hover:border-green-500 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-200"
                    >
                      {productUnitData?.map((item) => {
                        return (
                          <>
                            <option
                              value={item?.value}
                              className="text-xs md:text-base"
                            >
                              {item?.option}
                            </option>
                          </>
                        );
                      })}
                    </select>
                  </Grid>
                </Grid>
              </div>

              <h3 className="m-6 font-bold text-gray-700">Product Images</h3>
              <h3 className="m-6 font-bold text-gray-700">
                Product Description
              </h3>
              <div>
                <ReactQuill style={{ height: "150px" }} theme="snow" />
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              md={7.7}
              className="border rounded-2xl hover:shadow-lg border border-red-500"
            >
              <FormGroup className="mx-6 my-3">
                <FormControlLabel
                  control={
                    <Switch
                      name="inStock"
                      checked={formValues.inStock}
                      onChange={handleInputChange}
                      color="success"
                    />
                  }
                  label="In Stock"
                />
              </FormGroup>
              <div className="w-72 mx-6 mb-6">
                <label>Product Code</label>
                <TextField
                  type="text"
                  name="productCode"
                  size="small"
                  fullWidth
                  placeholder="Enter Product Title"
                  value={formValues.productCode}
                  onChange={handleInputChange}
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
                    marginBottom: "10px",
                  }}
                />
                <label>Product SKU</label>
                <TextField
                  type="text"
                  name="productSKU"
                  size="small"
                  fullWidth
                  placeholder="Enter Product Title"
                  value={formValues.productSKU}
                  onChange={handleInputChange}
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
                    marginBottom: "10px",
                  }}
                />
                <label>Status</label>
                <RadioGroup
                  row
                  name="productStatus"
                  value={formValues.productStatus}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="active"
                    control={<Radio color="success" />}
                    label="Active"
                  />
                  <FormControlLabel
                    value="disabled"
                    control={<Radio color="success" />}
                    label="Disabled"
                  />
                </RadioGroup>
              </div>

              <div className="my-8 border rounded-2xl hover:shadow-lg border border-red-500">
                <h3 className="mx-6 mt-6 mb-3 font-bold text-gray-700">
                  Product Price
                </h3>
                <div className="w-72 mx-6 mb-6">
                  <label>Regular Price</label>
                  <TextField
                    type="text"
                    name="regularPrice"
                    size="small"
                    fullWidth
                    placeholder="$0.00"
                    value={formValues.regularPrice}
                    onChange={handleInputChange}
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
                      marginBottom: "10px",
                    }}
                  />
                  <label>Sale Price</label>
                  <TextField
                    type="text"
                    name="salePrice"
                    size="small"
                    fullWidth
                    placeholder="Sale Price"
                    value={formValues.salePrice}
                    onChange={handleInputChange}
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
              </div>

              <div className="my-8 border rounded-2xl hover:shadow-lg border border-red-500">
                <h3 className="mx-6 mt-6 mb-3 font-bold text-gray-700">
                  Meta Data
                </h3>
                <div className="w-72 mx-6 mb-6">
                  <label>Meta Title</label>
                  <TextField
                    type="text"
                    name="title"
                    size="small"
                    fullWidth
                    placeholder="Title"
                    value={formValues.title}
                    onChange={handleInputChange}
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
                      marginBottom: "10px",
                    }}
                  />
                  <label>Meta Description</label>
                  <TextField
                    type="text"
                    name="metaDescription"
                    size="small"
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Meta Description"
                    value={formValues.metaDescription}
                    onChange={handleInputChange}
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
              </div>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: "8px",
                  fontSize: "16px",
                  textTransform: "capitalize",
                  backgroundColor: "#099309",
                  "&:hover": {
                    backgroundColor: "#099309",
                  },
                }}
              >
                Create Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default AddProductsForm;
