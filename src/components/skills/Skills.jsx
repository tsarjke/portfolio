import React from 'react';
import './skills.scss';
import htmlImg from './img/html.svg';
import cssImg from './img/css.svg';
import sassImg from './img/sass.svg';
import jsImg from './img/js.svg';
import reactImg from './img/react.svg';
import gitImg from './img/git.svg';
import webpackImg from './img/webpack.svg';
import psImg from './img/ps.svg';
import figmaImg from './img/figma.svg';

const Skills = () => (
  <section className="skills">
    <div className="skills__row">
      <h2 className="skills__title title">Skills</h2>
      <div className="skills__items">
        <div className="skills__item item">
          <div className="item__content">
            <div className="item__img">
              <img src={htmlImg} alt="HTML" />
            </div>
            <h4 className="item__label">HTML</h4>
          </div>
        </div>
        <div className="skills__item item">
          <div className="item__content">
            <div className="item__img">
              <img src={cssImg} alt="CSS" />
            </div>
            <h4 className="item__label">CSS</h4>
          </div>
        </div>
        <div className="skills__item item">
          <div className="item__content">
            <div className="item__img">
              <img src={sassImg} alt="SASS" />
            </div>
            <h4 className="item__label">SASS</h4>
          </div>
        </div>
        <div className="skills__item item">
          <div className="item__content">
            <div className="item__img">
              <img src={jsImg} alt="JavaScript" />
            </div>
            <h4 className="item__label">JavaScript</h4>
          </div>
        </div>
        <div className="skills__item item">
          <div className="item__content">
            <div className="item__img">
              <img src={reactImg} alt="React" />
            </div>
            <h4 className="item__label">React</h4>
          </div>
        </div>
        <div className="skills__item item">
          <div className="item__content">
            <div className="item__img">
              <img src={gitImg} alt="GIT" />
            </div>
            <h4 className="item__label">GIT</h4>
          </div>
        </div>
        <div className="skills__item item">
          <div className="item__content">
            <div className="item__img">
              <img src={webpackImg} alt="Webpack" />
            </div>
            <h4 className="item__label">Webpack</h4>
          </div>
        </div>
        <div className="skills__item item">
          <div className="item__content">
            <div className="item__img">
              <img src={figmaImg} alt="Figma" />
            </div>
            <h4 className="item__label">Figma</h4>
          </div>
        </div>
        <div className="skills__item item">
          <div className="item__content">
            <div className="item__img">
              <img src={psImg} alt="Ps" />
            </div>
            <h4 className="item__label">Adobe Photoshop</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
