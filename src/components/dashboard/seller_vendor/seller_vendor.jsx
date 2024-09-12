import React from "react";
import { Link } from "react-router-dom";

// Mui imports
import { Avatar, Box, Breadcrumbs, Grid } from "@mui/material";
import { SellerVendorArr } from "./dummyData/sellerVendor_data";

const SellerVendor = () => {
  function handleBreadCrumbClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <Box sx={{ p: 3, mt: 9 }}>
      <h1 className="text-3xl text-gray-800 font-bold">Vendors</h1>

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
            Vendors
          </Link>
        </Breadcrumbs>
      </div>

      <Grid container gap={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
        {SellerVendorArr?.map((item) => {
          return (
            <Grid items xs={11.75} sm={11.75} md={3.75}>
              <div className="border py-5 px-4 rounded-lg hover:shadow-lg hover:border-green-500">
                <div>
                  <div className="flex justify-center">
                    <Avatar
                      alt="Store images"
                      src={item?.avatar}
                      sx={{
                        width: 65,
                        height: 65,
                      }}
                    />
                  </div>
                  <h2 className="my-3 text-lg font-bold text-center hover:text-green-500 cursor-pointer">
                    {item?.martName}
                  </h2>
                  
                 
                 
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SellerVendor;
