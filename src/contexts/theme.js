import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

class Theme {

  static setTheme(themeName) {
    localStorage.setItem('themeName', themeName)
  }

  static isThemeSet() {
    return localStorage.getItem('themeName') !== null
  }

  static removeTheme() {
    localStorage.removeItem('themeName')
  }

  static getTheme() {
    return localStorage.getItem('themeName')
  }
}

const ThemeProvider = ({ children }) => {
  const theme = Theme.isThemeSet() ? Theme.getTheme() : 'light';

  const [themeName, setThemeName] = useState(theme);

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setThemeName(theme)
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'dark' : 'light')
    });
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    Theme.setTheme(name);
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
