import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/Menu';
import './Header.scss';

const Header = ({ data, currentLang, onLangClick }) => {
  const [menuVisibility, setMenuVisibility] = useState(
    window.innerWidth >= 768,
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuVisibility(true);
      } else {
        setMenuVisibility(false);
      }
    };
    window.addEventListener('resize', handleResize);
  });

  const onLinkClick = () => {
    if (window.innerWidth < 768) {
      setMenuVisibility(false);
    }
  };

  return (
    <header data-testid="header" className="header">
      <div className="header__row">
        {menuVisibility ? (
          <Menu
            onLinkClick={onLinkClick}
            onLangClick={onLangClick}
            data={data}
            currentLang={currentLang}
          />
        ) : (
          ''
        )}
        <button
          data-testid="menu-button"
          type="button"
          className={`header__menu-btn ${menuVisibility ? 'active' : ''}`}
          onClick={() => setMenuVisibility(!menuVisibility)}
        >
          <span className="header__menu-line" />
          <span className="header__menu-line" />
          <span className="header__menu-line" />
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  onLangClick: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  currentLang: PropTypes.string.isRequired,
};

export default Header;
