import React from 'react';
import './footer.scss';
import { ReactComponent as InstIcon } from './img/instagram2.svg';
import { ReactComponent as LinIcon } from './img/linkedin2.svg';
import { ReactComponent as TgIcon } from './img/telegram2.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer__row">
      <h2 className="footer__text">
        Want to know more or just chat? You are welcome!
      </h2>
      {/* <button type="button" className="footer__btn">
        Send message
      </button> */}
      <div className="footer__social">
        <div className="footer__icon-wrapper">
          <a
            href="https://t.me/tsarjke"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            <TgIcon />
          </a>
        </div>
        <div className="footer__icon-wrapper">
          <a
            href="https://tutor-ekaterina.ml"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            <LinIcon />
          </a>
        </div>
        <div className="footer__icon-wrapper">
          <a
            href="https://tutor-ekaterina.ml"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            <InstIcon />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
