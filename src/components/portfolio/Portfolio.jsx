import React from 'react';
import Flickity from 'react-flickity-component';
import PropTypes from 'prop-types'; // requires a loader
import './portfolio.scss';

const reqJpgs = require.context('./img', true, /\.jpg$/);
const jpgs = reqJpgs.keys().map((path) => ({
  name: path.replace(/([./\d]|jpg)/g, ''),
  file: reqJpgs(path),
}));

const Portfolio = ({ data }) => {
  const {
    title,
    text: [site, code],
    examples,
  } = data;

  const slides = examples.map(([label, siteLink, codeLink]) => {
    const img = jpgs.find((jpg) => jpg.name === label);
    return (
      <div
        className="card__content"
        key={codeLink}
      >
        <h4 className="card__title">{label}</h4>
        <div className="card__img">
          <img
            src={img.file}
            alt={`${label} screenshot`}
          />
        </div>
        <div className="card__src">
          <a
            href={siteLink}
            target="_blank"
            rel="noreferrer"
            className="card__link"
          >
            {site}
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="card__link"
          >
            {code}
          </a>
        </div>
      </div>
    );
  });

  return (
    <section className="portfolio">
      <div className="portfolio__row">
        <h2 className="portfolio__title title">{title}</h2>
        <Flickity className="portfolio__examples card">{slides}</Flickity>
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Portfolio;
