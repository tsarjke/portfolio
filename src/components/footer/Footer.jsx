import React from 'react';
import './footer.scss';
import tg from './img/telegram2.svg';
import inst from './img/instagram2.svg';
import lin from './img/linkedin2.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer__row">
      <h2 className="footer__text">
        Want to know more or just chat? You are welcome!
      </h2>
      <button type="button" className="footer__btn">
        Send message
      </button>
      <div className="footer__social">
        <div className="footer__tg">
          <a href="https://tutor-ekaterina.ml" className="footer__link">
            <img src={tg} alt="Telegram" />
          </a>
        </div>
        <div className="footer__lin">
          <a href="https://tutor-ekaterina.ml" className="footer__link">
            <img src={lin} alt="Linkedin" />
          </a>
        </div>
        <div className="footer__inst">
          <a href="https://tutor-ekaterina.ml" className="footer__link">
            <img src={inst} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
