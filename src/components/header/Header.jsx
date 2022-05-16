import React, { useEffect, useState } from 'react';
import Menu from '../menu/Menu';
import './Header.scss';

const Header = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);

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
    setMenuVisibility(false);
  };

  return (
    <header className="header">
      <div className="header__row">
        {menuVisibility ? <Menu onLinkClick={onLinkClick} /> : ''}
        <button
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

export default Header;
