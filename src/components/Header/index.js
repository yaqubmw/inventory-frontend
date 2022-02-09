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
            to={"/report"}
            className={({ isActive }) =>
              isActive ? "btn-menu-active" : "btn-menu"
            }
          >
            <div>Report</div>
          </NavLink>
          <NavLink
            to={"/item"}
            className={({ isActive }) =>
              isActive ? "btn-menu-active" : "btn-menu"
            }
          >
            <div>Item</div>
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
            to={"/customer"}
            className={({ isActive }) =>
              isActive ? "btn-menu-active" : "btn-menu"
            }
          >
            <div>Customer</div>
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
