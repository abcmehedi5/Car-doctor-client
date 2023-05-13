import React from "react";
import DashboardOverview from "../DashboardOverview/DashboardOverview";
import RecentOrder from "../DashboardOverview/RecentOrder";

const Dashboard = () => {
  return (
    <div>
      <DashboardOverview></DashboardOverview>
      <RecentOrder></RecentOrder>
    </div>
  );
};

export default Dashboard;
