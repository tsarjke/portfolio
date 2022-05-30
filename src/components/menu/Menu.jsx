import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '../menuList/MenuList';

import './menu.scss';

const Menu = ({
  onLinkClick,
  onLangClick,
  data,
  currentLang,
}) => {
  const { lang: langArr, menu } = data;
  const langPs = langArr.map((lang) => (
    <button
      data-testid="lang-button"
      type="button"
      className={`menu__lang ${
        currentLang === lang.toLowerCase() ? 'active' : ''
      }`}
      key={lang}
      onClick={onLangClick}
    >
      {lang}
    </button>
  ));

  return (
    <nav
      data-testid="menu"
      className="menu"
    >
      <div className="menu__body">
        <div className="menu__lang-wrapper">{langPs}</div>
        <MenuList
          onLinkClick={onLinkClick}
          data={menu}
        />
      </div>
    </nav>
  );
};

Menu.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  onLangClick: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  currentLang: PropTypes.string.isRequired,
};

export default Menu;
