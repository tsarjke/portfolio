import React from 'react';
import './skillList.scss';

const reqSvgs = process.env.NODE_ENV === 'test'
  ? ''
  : require.context('./img', true, /\.svg$/);
const svgs = process.env.NODE_ENV === 'test'
  ? [{ path: 'test', file: './img/test.jpg' }]
  : reqSvgs.keys().map((path) => ({ path, file: reqSvgs(path) }));

const SkillList = () => {
  const items = svgs.map(({ path, file }) => {
    const text = path.replace(/(.\/(\d|\w)_)|.svg/g, '');
    return (
      <li
        className="skill-list__item"
        key={text}
      >
        <div className="skill-list__content">
          <div className="skill-list__img">
            <img
              src={file}
              alt={text}
            />
          </div>
          <h4 className="skill-list__label">{text}</h4>
        </div>
      </li>
    );
  });

  return <ul data-testid="skill-list" className="skill-list">{items}</ul>;
};

export default SkillList;
