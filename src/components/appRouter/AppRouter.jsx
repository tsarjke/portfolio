import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../header/Header';
import About from '../about/About';
import Main from '../main/Main';
import Skills from '../skills/Skills';
import Portfolio from '../portfolio/Portfolio';
import Footer from '../footer/Footer';

const AppRouter = ({ data, currentLang = 'en', onLangClick }) => (
  <div className="container">
    <Header
      data={data.header}
      currentLang={currentLang}
      onLangClick={onLangClick}
    />
    <Routes>
      <Route
        path="/*"
        element={<Main data={data.main} />}
      />
      <Route
        path="/about"
        element={<About data={data.about} />}
      />
      <Route
        path="/skills"
        element={<Skills title={data.skills.title} />}
      />
      <Route
        path="/portfolio"
        element={<Portfolio data={data.portfolio} />}
      />
    </Routes>
    <Footer text={data.footer.text} />
  </div>
);

AppRouter.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  currentLang: PropTypes.string,
  onLangClick: PropTypes.func.isRequired,
};

AppRouter.defaultProps = {
  currentLang: 'en',
};

export default AppRouter;
