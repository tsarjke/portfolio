import React from 'react';
import './contact.scss';

import { ReactComponent as TgIcon } from './img/telegram.svg';
import { ReactComponent as LinIcon } from './img/instagram.svg';
import { ReactComponent as InstIcon } from './img/linkedin.svg';

const Contact = () => {
  const contactList = [
    [<TgIcon />, 'https://t.me/tsarjke'],
    [<LinIcon />, 'https://t.me/tsarjke2'],
    [<InstIcon />, 'https://t.me/tsarjke3'],
  ].map(([svg, link]) => (
    <li className="contact-list__elem" key={link}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="contact-list__link"
      >
        {svg}
      </a>
    </li>
  ));

  return <ul className="contact-list">{contactList}</ul>;
};

export default Contact;
