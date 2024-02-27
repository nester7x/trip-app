import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Layout = ({ children }) => {
  return <main className="main">{children}</main>;
};

Layout.prototype = {
  children: PropTypes.node.isRequired
};

export default Layout;
