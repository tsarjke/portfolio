import React from 'react';
import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__row">
      <h2 className="footer__text">
        Want to know more or just chat? You are welcome!
      </h2>
      <button type="button" className="footer__btn">
        Send message
      </button>
      <div className="footer__social">tg</div>
    </div>
  </footer>
);

export default Footer;
