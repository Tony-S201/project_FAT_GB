/**
 * NPM import
 */
import React, { useState } from 'react';

/**
 * Local import
 */
import FullScreen from 'src/containers/Fullscreen';
import Menu from './Menu';

// Styles
import './nav.scss';

/**
 * Code
 */

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return (
    <div className="nav">
      {width > 899 ? <FullScreen /> : <Menu />}
    </div>
  );
};

/**
 * Export
 */
export default Nav;
