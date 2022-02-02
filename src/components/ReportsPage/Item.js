import Table from "components/Elements/Table";
import React from "react";

import "components/ReportsPage/reports.css";

const data = [
  { id: 1, Name: "Taka", Age: 88 },
  { id: 2, Name: "Yanto", Age: 68 },
  { id: 3, Name: "Subaru", Age: 78 },
  { id: 5, Name: "Robert", Age: 58 },
];

const header = ["id", "Name", "Age"];

export default function ItemSales() {
  return (
    <div className="submenu-content">
      <Table data={data} header={header} />
    </div>
  );
}
