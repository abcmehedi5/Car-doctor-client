import React from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
const DashboardOverview = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="stats shadow col-span-1">
        <div className="stat">
          <div className="stat-figure text-secondary">
          <FaUser size={70}/>
          </div>
          <div className="stat-title">Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>

      <div className="stats shadow col-span-1">
        <div className="stat">
          <div className="stat-figure text-secondary">
          <FaUser size={70}/>
          </div>
          <div className="stat-title">Total Order</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>


      <div className="stats shadow col-span-1">
        <div className="stat">
          <div className="stat-figure text-secondary">
          <MdOutlinePendingActions size={70}/>
          </div>
          <div className="stat-title">Pending Order</div>
          <div className="stat-value">45</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
