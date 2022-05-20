import React from 'react';
import Flickity from 'react-flickity-component'; // requires a loader
import './portfolio.scss';
import tutorImg from './img/tutor.jpg';

const Portfolio = () => (
  <section className="portfolio">
    <div className="portfolio__row">
      <h2 className="portfolio__title title">Portfolio</h2>
      {/* <div className="portfolio__examples card"> */}
      <Flickity className="portfolio__examples">
        <div className="card__content">
          <h4 className="card__title">Tutor landing</h4>
          <div className="card__img">
            <img src={tutorImg} alt="Tutor" />
          </div>
          <a href="https://tutor-ekaterina.ml" className="card__link">
            Go to the sources
          </a>
        </div>
        <div className="card__content">
          <h4 className="card__title">Tutor landing</h4>
          <div className="card__img">
            <img src={tutorImg} alt="Tutor" />
          </div>
          <a href="https://tutor-ekaterina.ml" className="card__link">
            Go to the sources
          </a>
        </div>
        <div className="card__content">
          <h4 className="card__title">Tutor landing</h4>
          <div className="card__img">
            <img src={tutorImg} alt="Tutor" />
          </div>
          <a href="https://tutor-ekaterina.ml" className="card__link">
            Go to the sources
          </a>
        </div>
      </Flickity>
      {/* </div> */}
    </div>
  </section>
);

export default Portfolio;
