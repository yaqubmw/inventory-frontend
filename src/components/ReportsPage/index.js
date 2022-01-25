import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "components/ReportsPage/reports.css";

import Summary from "components/ReportsPage/Summary";
import SalesTrend from "components/ReportsPage/Trend";
import ItemSales from "components/ReportsPage/Item";
import Discounts from "components/ReportsPage/Discount";
import TaxReports from "components/ReportsPage/Tax";
import Compensations from "components/ReportsPage/Compensation";

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
            <Route path="item" element={<ItemSales />} />
            <Route path="discount" element={<Discounts />} />
            <Route path="tax" element={<TaxReports />} />
            <Route path="compensation" element={<Compensations />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
