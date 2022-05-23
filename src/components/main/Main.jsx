import React from 'react';
import PropTypes from 'prop-types';
import './main.scss';

const Main = ({ data }) => {
  const { title, label: labelArr } = data;
  const labelPs = labelArr.map((label) => <p key={label[0]}>{label}</p>);
  return (
    <section className="main">
      <div className="main__row">
        <h1 className="main__title title">{title}</h1>
        <div className="main__label">{labelPs}</div>
        <div className="main__img" />
      </div>
    </section>
  );
};

Main.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Main;
