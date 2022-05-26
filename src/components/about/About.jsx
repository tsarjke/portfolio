import React from 'react';
import PropTypes from 'prop-types';
import './about.scss';
import photo from './img/about.jpg';

const About = ({ data }) => {
  const { title, text: textArr } = data;
  const textPs = textArr.map((text) => <p className="about__text" key={text[1]}>{text}</p>);
  return (
    <section className="about">
      <div className="about__row">
        <h2 className="about__title title">{title}</h2>
        <div className="about__content">
          <div className="about__text">
            {textPs}
          </div>
          <div className="about__img">
            <img src={photo} alt="Ivan pic" />
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default About;
