import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './menu.scss';

const Menu = ({ onLinkClick }) => (
  <nav className="menu">
    <div className="menu__body">
      <ul className="menu__list">
        <li className="menu__elem">
          <Link to="/" className="menu__link" onClick={onLinkClick}>
            Main
          </Link>
        </li>
        <li className="menu__elem">
          <Link to="/about" className="menu__link" onClick={onLinkClick}>
            About
          </Link>
        </li>
        <li className="menu__elem">
          <Link to="/skills" className="menu__link" onClick={onLinkClick}>
            Skills
          </Link>
        </li>
        <li className="menu__elem">
          <Link to="portfolio" className="menu__link" onClick={onLinkClick}>
            Portfolio
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

Menu.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
};

export default Menu;
