import React from "react";
import { NavLink } from "react-router-dom";

const SidebarContent = ({ hideSidebar }) => {
  return (
    <>
      <div className="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li className="sidebar-nav-links click">
            <NavLink to="/dashboard">
              <i
                style={{ textAlign: "center" }}
                className="fas fa-chart-line"
              ></i>
              <span className={hideSidebar ? "d-none" : ""}>
                Comparativo Ventas
              </span>
            </NavLink>
          </li>
          <li className="sidebar-nav-links click">
            <NavLink to="/search-ticket">
              <i
                style={{ textAlign: "center" }}
                className="fas fa-clipboard-list"
              ></i>
              <span className={hideSidebar ? "d-none" : ""}>
                Consultar Boletas
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarContent;
