import React from 'react';
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
  console.log(data.en);
  return (
    <Router>
      <div className="container">
        <Header data={data.en.header} />
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
