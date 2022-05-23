import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../header/Header';
import About from '../about/About';
import Main from '../main/Main';
import Skills from '../skills/Skills';
import Portfolio from '../portfolio/Portfolio';
import Footer from '../footer/Footer';

import data from '../../data.json';

import './null.scss';

const App = () => {
  const [lang, setLang] = useState('eng');

  const onLangClick = (e) => {
    const clickText = e.target.textContent.toLowerCase();
    return lang !== clickText && setLang(clickText);
  };

  const inf = data[lang];

  return (
    <Router>
      <div className="container">
        <Header data={inf.header} onLangClick={onLangClick} />
        <Routes>
          <Route path="/*" element={<Main data={inf.main} />} />
          <Route path="/about" element={<About data={inf.about} />} />
          <Route path="/skills" element={<Skills title={inf.skills.title} />} />
          <Route
            path="/portfolio"
            element={<Portfolio data={inf.portfolio} />}
          />
        </Routes>
        <Footer text={inf.footer.text} />
      </div>
    </Router>
  );
};

export default App;
