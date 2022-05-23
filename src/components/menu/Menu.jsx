import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '../menuList/MenuList';

import './menu.scss';

const Menu = ({ onLinkClick, data, onLangClick }) => {
  const { lang: langArr, menu: menuText } = data;
  const langPs = langArr.map((lang) => (
    <button
      type="button"
      className="menu__lang"
      key={lang}
      onClick={onLangClick}
    >
      {lang}
    </button>
  ));
  return (
    <nav className="menu">
      <div className="menu__body">
        <div className="menu__lang-wrapper">{langPs}</div>
        <MenuList onLinkClick={onLinkClick} data={menuText} />
      </div>
    </nav>
  );
};

Menu.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  onLangClick: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Menu;
