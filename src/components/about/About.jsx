import React from 'react';
import './about.scss';

const About = () => (
  <section className="about">
    <div className="about__row">
      <h2 className="about__title title">About me</h2>
      <div className="about__text">
        <p>Hi, I&#39;m Ivan – Frontend developer from Saint-Petersburg.</p>
        <p>
          I&#39;m interested in web and everything connected with it.
        </p>
        <p>Ready to implement excellent projects with wonderful people.</p>
      </div>
    </div>
  </section>
);

export default About;