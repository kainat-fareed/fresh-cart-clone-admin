// react imports
import React from "react";

// MUI imports
import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import LinearProgress from "@mui/material/LinearProgress";
import ReactECharts from "echarts-for-react";

// Custom imports

import sliderImg from "../../../assets/images/slider-image-1.jpg";
import {
  Notification_Sales_Cards,
  ProgressArr,
  monthlyRevCardArr,
  rows,
} from "./dummyData/dashboard-data";

const DashboardMain = () => {
  const styles = {
    heroContainer: {
      backgroundImage: `url(${sliderImg})`,
      backgroundSize: "cover",
      backgroundPosition: "right",
      height: "240px",
      borderRadius: "20px",
    },
  };

  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "0",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Shippings" },
          { value: 735, name: "Refunds" },
          { value: 580, name: "Order" },
          { value: 484, name: "Income" },
        ],
      },
    ],
  };

  // line chart
  const optionLineChart = {
    title: {
      // text: "Stacked Area Chart",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["Total Income", "Total Expense"],
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {},
    //   },
    // },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Total Income",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        // data: ["31k", "40k", "28k", "51k", "42k", "67k", "100k"],
        data: [32, 40, 28, 51, 42, 67, 100],
      },
      {
        name: "Total Expense",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: ["78k", "32k", "45k", "79k", "34k", "44k", "38k"],
        data: [78, 32, 45, 79, 34, 44, 38],
      },
    ],
  };

  return (
    <Box sx={{ p: 3, mt: 9 }}>
      <div style={styles.heroContainer} className="p-8 md:p-12">
        <h1 className="text-gray-700 font-bold text-3xl mb-2">
          Welcome back! FreshCart
        </h1>
        <p className="text-gray-500 text-sm font-semibold">
          FreshCart is simple & clean design for developer and designer.
        </p>
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
            marginTop: "20px",
          }}
        >
          Create Product
        </Button>
      </div>

      <div className="my-8">
        <Grid container gap={{ xs: 1, sm: 2, md: 3 }}>
          {monthlyRevCardArr?.map((item) => {
            return (
              <Grid items xs={11.75} sm={11.75} md={3.73}>
                <div className="border py-5 px-4 rounded-2xl hover:shadow-lg hover:border-green-500">
                  <div className="flex justify-between items-center">
                    <h2 className="my-3 text-base font-bold">
                      {item?.heading}
                    </h2>
                    <Avatar>{item?.avatar}</Avatar>
                  </div>
                  <div className="flex flex-col my-3">
                    <h1 className="text-3xl font-bold">
                      {item?.monthlyRevenueMoney}
                    </h1>
                    <span className="text-sm text-gray-500 font-semibold mt-1">
                      {item?.number}
                      <span className="ml-2">{item?.label}</span>
                    </span>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>

      <div className="my-8">
        <Grid container gap={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
          <Grid items xs={11.75} sm={11.75} md={7.8}>
            <div className="border py-5 px-4 rounded-2xl hover:shadow-lg hover:border-green-500">
              <h1 className="text-md font-bold">Revenue</h1>
              <span className="text-sm text-gray-500">(+63%) than last year</span>
              <ReactECharts option={optionLineChart} />
            </div>
          </Grid>
          <Grid items xs={11.75} sm={11.75} md={3.75}>
            <div className="border py-5 px-4 rounded-2xl hover:shadow-lg hover:border-green-500">
              <h1 className="text-md font-bold">Total Sales</h1>
              <ReactECharts option={option} />
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="my-8">
        <Grid container gap={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
          <Grid items xs={11.75} sm={11.75} md={5.75}>
            <div className="border p-4 rounded-2xl hover:shadow-lg hover:border-green-500">
              <h1 className="my-3 text-base font-bold">Sales Overview</h1>
              <Box className="w-full pb-4">
                {ProgressArr?.map((progress) => {
                  return (
                    <>
                      <div className="flex justify-between mt-4 mb-1">
                        <h2>{progress?.label}</h2>
                        <div>
                          <span className="font-semibold text-gray-600 me-2">
                            {progress?.rupee}
                          </span>
                          <span className="text-gray-500 font-medium">
                            ({progress?.value}%)
                          </span>
                        </div>
                      </div>

                      <LinearProgress
                        variant="determinate"
                        value={progress?.value}
                        color={progress?.color}
                        sx={{ height: 6, borderRadius: "8px" }}
                      />
                    </>
                  );
                })}
              </Box>
            </div>
          </Grid>
          <Grid
            items
            xs={11.75}
            sm={11.75}
            md={5.75}
          >
            {Notification_Sales_Cards?.map((item) => {
              return (
                <div className="border mb-4 py-7 px-4 flex rounded-2xl hover:shadow-lg hover:border-green-500">
                  <div>{item?.icon}</div>
                  <div className="ms-4">
                    <h1 className="text-lg font-semibold text-gray-800">
                      {item?.heading}
                    </h1>
                    <p className="text-sm font-semibold text-gray-500">
                      You have
                      <span className="text-sm font-semibold text-sky-600 ml-2">
                        {item?.para}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </Grid>
        </Grid>
      </div>

      <div className="my-8 border rounded-2xl hover:shadow-lg">
        <h2 className="text-lg font-semibold text-gray-700 my-5 mx-4">
          Recent Orders
        </h2>
        <TableContainer>
          <Table
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
                  },
                }}
              >
                <TableCell>Order Number</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Order Date</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow
                  //   key={row?.name}
                  hover
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row?.orderNumber}
                  </TableCell>
                  <TableCell>{row?.productName}</TableCell>
                  <TableCell>{row?.orderDate}</TableCell>
                  <TableCell>{row?.price}</TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      label={row?.status}
                      color={
                        row?.status === "Shipped"
                          ? "success"
                          : row?.status === "Pending"
                          ? "warning"
                          : row?.status === "Canceled"
                          ? "error"
                          : row?.status === "Processing"
                          ? "info"
                          : "default"
                      }
                      sx={{
                        borderRadius: "8px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default DashboardMain;
