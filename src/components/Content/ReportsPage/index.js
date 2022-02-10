import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./reports.css";

import Summary from "components/Content/ReportsPage/Summary";
import SalesTrend from "components/Content/ReportsPage/Trend";
import ItemSale from "components/Content/ReportsPage/Item";
import Discount from "components/Content/ReportsPage/Discount";
import TaxReport from "components/Content/ReportsPage/Tax";
import Compensation from "components/Content/ReportsPage/Compensation";

export default function ReportsTab() {
  return (
    <div>
      <div className="container-tab">
        <div className="links">
          <NavLink
            to="summary"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Summary
          </NavLink>
          <NavLink
            to="trend"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Sales Trend
          </NavLink>
          <NavLink
            to="item"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Item Sales
          </NavLink>
          <NavLink
            to="discount"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Discounts
          </NavLink>
          <NavLink
            to="tax"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Taxes
          </NavLink>
          <NavLink
            to="compensation"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Compensations
          </NavLink>
        </div>
        <div className="tabs">
          <Routes>
            <Route index element={<Summary />} />
            <Route path="summary" element={<Summary />} />
            <Route path="trend" element={<SalesTrend />} />
            <Route path="item" element={<ItemSale />} />
            <Route path="discount" element={<Discount />} />
            <Route path="tax" element={<TaxReport />} />
            <Route path="compensation" element={<Compensation />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
