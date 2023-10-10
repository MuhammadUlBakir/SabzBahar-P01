import React, { useEffect, useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  const getTheme = (themename) => {
    setTheme(themename);
  };
  return (
    <ThemeContext.Provider value={{ theme  , getTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext, ThemeProvider as default };
