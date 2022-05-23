import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';
import Contact from '../contact/Contact';

const Footer = ({ text }) => (
  <footer className="footer">
    <div className="footer__row">
      <h2 className="footer__text">{text}</h2>
      {/* <button type="button" className="footer__btn">
        Send message
      </button> */}
      <Contact />
    </div>
  </footer>
);

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Footer;
