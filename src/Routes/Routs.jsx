import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import BookService from "../pages/BookService/BookService";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import PrivateRouter from "./PrivateRouter";
import Order from "../pages/Order/Order";
import DasboardLayout from "../Layout/DasboardLayout";
import Dashboard from "../pages/InventoryMangement/Dashboard/Dashboard/Dashboard";
import ReviewOrders from "../pages/InventoryMangement/Dashboard/ReviewOrders/ReviewOrders";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRouter>
            <BookService></BookService>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
    ],
  },

  // dashboard routes

  {
    path: "/",
    element: <DasboardLayout></DasboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/review-orders",
        element: <ReviewOrders></ReviewOrders>,
      },
    ],
  },
]);
export default router;
