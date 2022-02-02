import React from "react";

import "components/Elements/Table/table.css";

export default function Table({ data, header }) {
  return (
    <div className="table-content">
      {data.length > 0 && (
        <table cellSpacing="0">
          <thead>
            <tr>
              {header.map((headerItem, index) => (
                <th key={index}>{headerItem.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.values(data).map((obj, index) => (
              <tr key={index}>
                {Object.values(obj).map((value, index2) => (
                  <td key={index2}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
