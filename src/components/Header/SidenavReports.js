import React from "react";
import { NavLink } from "react-router-dom";
import "components/Header/header.css";

export default function SidenavReports() {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <NavLink
            to={"/reports"}
            className={({ isActive }) =>
              isActive ? "btn-menu-active" : "btn-menu"
            }
          >
            Sales Summary
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/reports/trend"}
            className={({ isActive }) =>
              isActive ? "btn-menu-active" : "btn-menu"
            }
          >
            Sales Trend
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/reports/item"}
            className={({ isActive }) =>
              isActive ? "btn-menu-active" : "btn-menu"
            }
          >
            Item Sales
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/reports/discount"}
            className={({ isActive }) =>
              isActive ? "btn-menu-active" : "btn-menu"
            }
          >
            Discounts
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/reports/tax"}
            className={({ isActive }) =>
              isActive ? "btn-menu-active" : "btn-menu"
            }
          >
            Taxes
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/reports/compensation"}
            className={({ isActive }) =>
              isActive ? "btn-menu-active" : "btn-menu"
            }
          >
            Compensations
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
