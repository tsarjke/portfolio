import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '../menuList/MenuList';

import './menu.scss';

const Menu = ({ onLinkClick, data }) => {
  const { menu: menuText } = data;
  return (
    <nav className="menu">
      <div className="menu__body">
        <div className="menu__lang-wrapper">
          <p className="menu__lang eng">Eng</p>
          <p className="menu__lang ru">Ru</p>
        </div>
        <MenuList onLinkClick={onLinkClick} data={menuText} />
      </div>
    </nav>
  );
};

Menu.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Menu;
