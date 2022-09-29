import React, { useContext } from 'react'

import uniqid from 'uniqid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ExperienceContainer.css'
import { ThemeContext } from './../../contexts/theme'

const ExperienceContainer = ({experience}) => {
  const [{ themeName }] = useContext(ThemeContext)
  return (
    <div className='experience'>
      <img className='experience__image' src={`images/${experience.image}`}></img>
      <h3 className="experience__name"  style={{color: `${ (themeName == 'dark' ? experience.color2 : experience.color) }`}}>{experience.name}</h3>
      <p className='experience__position'>{experience.position}</p>
      <p className='experience__year'>{experience.year}</p>
      <p className='experience__description'>{experience.description}</p>
      {experience.stack && (
        <ul className='experience__stack'>
          {experience.stack.map((item) => (
            <li key={uniqid()} className='experience__stack-item'>
              <FontAwesomeIcon title={item.name} icon={['fab', item.icon]} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ExperienceContainer
