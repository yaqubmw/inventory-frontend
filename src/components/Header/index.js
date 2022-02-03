import React from "react";
import { NavLink } from "react-router-dom";
import "components/Header/header.css";
import { SettingIcon } from "components/Icons";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to={"/"}>
          <div className="logoicon">InventoryApp</div>
        </NavLink>
        <div className="nav-menu">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "btn-menu-active" : "btn-menu"
            }
          >
            <div>Dashboard</div>
          </NavLink>
          <NavLink
            to={"/reports"}
            className={({ isActive }) =>
              isActive ? "btn-menu-active" : "btn-menu"
            }
          >
            <div>Reports</div>
          </NavLink>
          <NavLink
            to={"/items"}
            className={({ isActive }) =>
              isActive ? "btn-menu-active" : "btn-menu"
            }
          >
            <div>Items</div>
          </NavLink>
          <NavLink
            to={"/tax"}
            className={({ isActive }) =>
              isActive ? "btn-menu-active" : "btn-menu"
            }
          >
            <div>Tax</div>
          </NavLink>
          <NavLink
            to={"/transaction"}
            className={({ isActive }) =>
              isActive ? "btn-menu-active" : "btn-menu"
            }
          >
            <div>Transaction</div>
          </NavLink>
          <NavLink
            to={"/customers"}
            className={({ isActive }) =>
              isActive ? "btn-menu-active" : "btn-menu"
            }
          >
            <div>Customers</div>
          </NavLink>
        </div>
        <div className="nav-right-menu">
          <div className="icon-24 text-indigo-900">
            <SettingIcon />
          </div>
        </div>
      </nav>
    </header>
  );
}
