import React from 'react';
import Flickity from 'react-flickity-component';
import PropTypes from 'prop-types'; // requires a loader
import './portfolio.scss';
import tutorImg from './img/tutor.jpg';
import thisImg from './img/this.jpg';

const Portfolio = ({ data }) => {
  const {
    title,
    text: [site, code],
  } = data;
  return (
    <section className="portfolio">
      <div className="portfolio__row">
        <h2 className="portfolio__title title">{title}</h2>
        {/* <div className="portfolio__examples card"> */}
        <Flickity className="portfolio__examples">
          <div className="card__content">
            <h4 className="card__title">Tutor landing</h4>
            <div className="card__img">
              <img src={tutorImg} alt="Tutor" />
            </div>
            <div className="card__src">
              <a
                type="button"
                href="https://tutor-ekaterina.ml"
                target="_blank"
                rel="noreferrer"
                className="card__link"
              >
                {site}
              </a>
              <a
                href="https://tutor-ekaterina.ml"
                target="_blank"
                rel="noreferrer"
                className="card__link"
              >
                {code}
              </a>
            </div>
          </div>
          <div className="card__content">
            <h4 className="card__title">This project</h4>
            <div className="card__img">
              <img src={thisImg} alt="This" />
            </div>
            <div className="card__src">
              <a
                href="https://tutor-ekaterina.ml"
                className="card__link"
                target="_blank"
                rel="noreferrer"
              >
                {code}
              </a>
            </div>
          </div>
          <div className="card__content">
            <h4 className="card__title">Tutor landing</h4>
            <div className="card__img">
              <img src={tutorImg} alt="Tutor" />
            </div>
            <div className="card__src">
              <a href="https://tutor-ekaterina.ml" className="card__link">
                {site}
              </a>
              <a href="https://tutor-ekaterina.ml" className="card__link">
                {code}
              </a>
            </div>
          </div>
        </Flickity>
        {/* </div> */}
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Portfolio;
