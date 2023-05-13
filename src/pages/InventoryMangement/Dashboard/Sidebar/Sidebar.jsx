import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer drawer-mobile  lg:fixed ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden absolute top-0 left-0 z-40 "
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-200 text-base-content">
          <li>
            <Link to={'/dashboard'}>Dashboard</Link>
          </li>
          <li>
            <Link to={'/review-orders'}>Order Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
