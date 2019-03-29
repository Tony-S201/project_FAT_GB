/**
 * NPM import
 */
import React, { useState } from 'react';

/**
 * Local import
 */
import Discoscreen from './Discoscreen';
import Discomobile from './Discomobile';

// Styles

/**
 * Code
 */

const Discography = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return (
    <div className="discography">
      {width > 1224 ? <Discoscreen /> : <Discomobile />}
    </div>
  );
};

/**
 * Export
 */
export default Discography;
