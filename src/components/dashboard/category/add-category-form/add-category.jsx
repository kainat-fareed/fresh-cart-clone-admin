// React Imports
import React, { useState } from "react";
// React Router Dom Imports
import { Link, useNavigate } from "react-router-dom";
// Mui Imports
import {
  Box,
  Breadcrumbs,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
// Custom Imports
import BakeryImg from "../../../../assets/images/svgs/bakery.svg";
import { productCategoryDropDownData } from "../../products/add-product-form/dummyData/add-product-dummyData";

const AddCategoryForm = () => {
  const navigate = useNavigate();

  // State for all text fields
  const [formValues, setFormValues] = useState({
    CategoryName: "",
    parentCategory: "",
    slug: "",
    date: "",
    status: "",
    metaTitle: "",
    metaDescription: "",
  });

  const handleBackToCategoryClick = () => {
    navigate("/category");
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

  function handleBreadCrumbClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <Box sx={{ p: 3, mt: 9 }}>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-gray-800 font-bold">Add New Category</h1>
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
          onClick={handleBackToCategoryClick}
        >
          Back to Category
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
            Categories
          </Link>

          <Link
            underline="hover"
            color="text.primary"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            Add New Category
          </Link>
        </Breadcrumbs>
      </div>
      <div className="my-8 border rounded-2xl hover:shadow-lg border border-red-500">
        <form onSubmit={handleSubmit}>
          <h3 className="m-6 font-bold text-gray-700">Category Image</h3>
          <div className="m-6">
            <img
              src={BakeryImg}
              alt="Bakery Image"
              className="bg-gray-100 rounded-lg h-28 w-28 position-relative"
            />
            <EditIcon
              sx={{
                position: "absolute",
                bottom: "49%",
                right: "67%",
                backgroundColor: "#fff",
                color: "#5c6c75",
                borderRadius: "50%",
                fontSize: "35px",
                padding: "8px",
                cursor: "pointer",
              }}
            />
          </div>
          <h3 className="m-6 font-bold text-gray-700">Category Information</h3>
          <div className="mx-6 my-4 flex justify-between items-center">
            
            <Grid container gap={3}>
              <Grid item xs={12} md={5.85}>
                <label>Category Name</label>
                <TextField
                  type="text"
                  name="CategoryName"
                  size="small"
                  fullWidth
                  placeholder="Category Name"
                  value={formValues.CategoryName}
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
                <label>Parent Category</label>
                <select
                  value={formValues.productCategory}
                  onChange={handleInputChange}
                  name="productCategory"
                  // value={filterProductCategory}
                  // onChange={handleProductCategoryChange}
                  className="w-full border rounded-lg px-3 py-2.5 text-sm hover:border-green-500 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-200"
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
              </Grid>
              <Grid item xs={12} md={5.85}>
                <label>Slug</label>
                <TextField
                  type="text"
                  name="slug"
                  size="small"
                  fullWidth
                  placeholder="Slug"
                  value={formValues.slug}
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
                <label>Date</label>
                <TextField
                  type="date"
                  name="date"
                  size="small"
                  fullWidth
                  placeholder="date"
                  value={formValues.date}
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
            </Grid>
          </div>
          <div className="mx-6 my-4">
            <label>Description</label>
            {/* React Quill here . . .*/}
            <h1>React Quill</h1>
            <label>Status</label>
            <RadioGroup
              row
              name="status"
              value={formValues.status}
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

            <h3 className="my-6 font-bold text-gray-700">Meta Data</h3>
            <label>Meta Title</label>
            <TextField
              type="text"
              name="metaTitle"
              size="small"
              fullWidth
              placeholder="Meta Title"
              value={formValues.metaTitle}
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
          <div className="mx-6 my-4">
            <Button
              type="submit"
              variant="contained"
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
            <Button
              type="save"
              variant="contained"
              sx={{
                borderRadius: "8px",
                fontSize: "16px",
                textTransform: "capitalize",
                backgroundColor: "#747D80",
                "&:hover": {
                  backgroundColor: "#CCCFCE",
                },
                marginLeft: "15px",
              }}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default AddCategoryForm;
