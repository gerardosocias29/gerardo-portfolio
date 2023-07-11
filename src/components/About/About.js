import React, { useState, useEffect } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import { about } from '../../portfolio'
import './About.css'

const { useRef } = React;

const Typing = ({ name, defaultText, onFinish, delay = 100 }) => {
  const text = defaultText + name;
  const to = useRef()
  const [charIndex, setCharIndex] = useState(1)

  useEffect(() => {
    if ( charIndex < text.length ) {
     to.current = setTimeout(() => setCharIndex(charIndex + 1), delay )
    }
    return () => clearTimeout(to.current)
  }, [charIndex])

  return text.substr(0, charIndex)
}

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <div className='about__wrapper'>
          
          <p><span className='about__name anim'><Typing defaultText="Hi, I am " name={name}/></span></p>
        </div>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.facebook && (
              <a
                href={social.facebook}
                aria-label='facebook'
                className='link link--icon'
              >
                <FacebookIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
