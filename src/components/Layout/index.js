import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = (props) => {
  const [hideSidebar, setHideSidebar] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="layout-wrapper">
        <Sidebar hideSidebar={hideSidebar} />
        <div
          className={
            hideSidebar ? 'layout-page-content collapsed' : 'layout-page-content'
          }
        >
          <Header hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
          <div className="main-content">{props.children}</div>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
