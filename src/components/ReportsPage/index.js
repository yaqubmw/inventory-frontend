import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "components/ReportsPage/reports.css"

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
            <Link to="/reports" className="link">
              Summary
            </Link>
            <Link to="trend" className="link">
              Sales Trend
            </Link>
            <Link to="item" className="link">
              Item Sales
            </Link>
            <Link to="discount" className="link">
              Discounts
            </Link>
            <Link to="tax" className="link">
              Taxes
            </Link>
            <Link to="compensation" className="link">
              Compensations
            </Link>
          </div>
          <div className="tabs">
            <Routes>
              <Route path="/" element={<Summary />} />
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

