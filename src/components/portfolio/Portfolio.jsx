import React from 'react';
import Flickity from 'react-flickity-component'; // requires a loader
import './portfolio.scss';
import tutorImg from './img/tutor.jpg';
import thisImg from './img/this.jpg';

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
          <div className="card__src">
            <a
              type="button"
              href="https://tutor-ekaterina.ml"
              target="_blank"
              rel="noreferrer"
              className="card__link"
            >
              Visit the website
            </a>
            <a
              href="https://tutor-ekaterina.ml"
              target="_blank"
              rel="noreferrer"
              className="card__link"
            >
              Go to the code
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
              Go to the code
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
              Visit the website
            </a>
            <a href="https://tutor-ekaterina.ml" className="card__link">
              Go to the code
            </a>
          </div>
        </div>
      </Flickity>
      {/* </div> */}
    </div>
  </section>
);

export default Portfolio;
