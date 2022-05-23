import React from 'react';
import PropTypes from 'prop-types';
import './skills.scss';
import SkillList from '../skillList/SkillList';

const Skills = ({ title }) => (
  <section className="skills">
    <div className="skills__row">
      <h2 className="skills__title title">{title}</h2>
      <div className="skills__items">
        <SkillList />
      </div>
    </div>
  </section>
);

Skills.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Skills;
