import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './menuList.scss';

const MenuList = ({ onLinkClick, data }) => (
  <ul className="list">
    {data.map((elemText, index) => (
      <li key={elemText} className="list__elem">
        <Link
          to={index ? elemText.toLowerCase() : '/'}
          className="list__link"
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
