import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './menuList.scss';

const MenuList = ({ onLinkClick, data }) => (
  <ul className="menu-list">
    {data.map(([elemText, elemRoute]) => (
      <li
        key={elemRoute}
        className="menu-list__elem"
      >
        <Link
          data-testid="menu-link"
          to={elemRoute}
          className="menu-list__link"
          onClick={onLinkClick}
        >
          {elemText}
        </Link>
      </li>
    ))}
  </ul>
);

MenuList.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default MenuList;
