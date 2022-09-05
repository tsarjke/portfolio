/* eslint-disable no-unused-vars */
import React from 'react';
import Flickity from 'react-flickity-component';
import PropTypes from 'prop-types'; // requires a loader
import './portfolio.scss';

import testsvg from '../skillList/img/1_HTML.svg';

const reqJpgs = process.env.NODE_ENV === 'test'
  ? ''
  : require.context('./img', false, /\.jpg$/);

const jpgs = process.env.NODE_ENV === 'test'
  ? [{ name: 'test', file: './img/test.jpg' }]
  : reqJpgs.keys().map((path) => ({
    name: path,
    file: reqJpgs(path),
  }));

const reqSvgs = process.env.NODE_ENV === 'test'
  ? ''
  : require.context('../skillList/img/', true, /\.svg$/);

const svgs = process.env.NODE_ENV === 'test'
  ? [{ path: 'test', file: './img/test.jpg' }]
  : reqSvgs.keys().map((path) => ({ path, file: reqSvgs(path) }));

const Portfolio = ({ data }) => {
  const {
    title,
    text: [site, code],
    examples,
  } = data;

  const slides = examples.map(([label, imgSrc, siteLink, codeLink, techs]) => {
    const img = jpgs.find((jpg) => jpg.name === imgSrc);

    const techsSvgs = svgs.filter(
      (svg) => techs.indexOf(svg.path.slice(4, svg.path.length - 4)) !== -1,
    );

    return (
      <div
        className="card__content"
        key={codeLink}
      >
        <h4 className="card__title">{label}</h4>
        <div className="card__img">
          <div className="card__screen">
            <img
              src={img.file}
              alt={`${label} screenshot`}
            />
          </div>
          {techsSvgs.length ? (
            <div className="card__techs">
              {techsSvgs.map(({ path, file }) => (
                <img
                  key={path}
                  src={file}
                  alt={path}
                />
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
        {imgSrc === './dev.jpg' ? (
          ''
        ) : (
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
        )}
      </div>
    );
  });

  return (
    <section
      data-testid="portfolio-section"
      className="portfolio"
    >
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
