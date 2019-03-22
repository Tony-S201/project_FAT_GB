/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Social from 'src/components/Social';

// Styles
import './nav.scss';

/**
 * Code
 */
const Nav = () => (
  <div className="nav">
    <nav className="nav-nav">
      <a href="#" className="nav-nav-link">Accueil</a>
      <a href="#" className="nav-nav-link">News</a>
      <a href="#" className="nav-nav-link">Tour</a>
      <a href="#" className="nav-nav-link">Disocgraphie</a>
      <a href="#" className="nav-nav-link">Media</a>
      <a href="#" className="nav-nav-link">À Propos</a>
      <a href="#" className="nav-nav-link">Contact</a>
    </nav>

    <Social className="nav-social" />
  </div>
);

/**
 * Export
 */
export default Nav;
