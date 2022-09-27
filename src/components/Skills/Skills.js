import React from 'react'
import uniqid from 'uniqid'
import SkillBar from 'react-skillbars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { skills, skillbars } from '../../portfolio'
import './Skills.css';

const colors = {
  "bar": "#3498db",
  "title": {
    "text": "#fff",
    "background": "#2980b9"
  }
}

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skill{skills.length > 1 ? 's' : ''}</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <FontAwesomeIcon icon={['fab', skill.icon]} /> {skill.name}
          </li>
        ))}
      </ul>
      <SkillBar skills={skillbars} colors={colors}/>
    </section>
  )
}

export default Skills
