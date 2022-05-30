import React, { useState } from 'react';
import AppRouter from '../appRouter/AppRouter';

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
    <AppRouter
      data={inf}
      currentLang={lang}
      onLangClick={onLangClick}
    />
  );
};

export default App;
