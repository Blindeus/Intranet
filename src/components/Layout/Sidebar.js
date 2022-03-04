import React from 'react';
import { Link } from 'react-router-dom';
import SidebarContent from './SidebarContent';
const Sidebar = ({ hideSidebar }) => {
  return (
    <>
      <div className={hideSidebar ? 'sidebar-nav hide' : 'sidebar-nav'}>
        <div className="sidebar-nav-header">
          <div
            className={
              hideSidebar ? 'sidebar-nav-logo hide' : 'sidebar-nav-logo'
            }
          >
            <Link to="/dashboard">
              Intranet
            </Link>
          </div>
        </div>

        <div data-simplebar >
          <SidebarContent hideSidebar={hideSidebar} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
