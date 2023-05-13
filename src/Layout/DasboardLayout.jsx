import React from "react";
import Navbar from "../pages/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Sidebar from "../pages/InventoryMangement/Dashboard/Sidebar/Sidebar";

const DasboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-8">
        <div className="lg:col-span-2">
          <Sidebar></Sidebar>
        </div>
        <div className="lg:col-span-6">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DasboardLayout;
