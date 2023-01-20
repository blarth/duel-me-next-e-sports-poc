"use client";

import React, { useContext, useState, createContext } from "react";

/* export interface Themes { light : {foreground : string, background : string}, dark : {foreground : string, background : string}} ;

export const themes : Themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = createContext<
  [{foreground : string, background : string}, (theme : {foreground : string , background : string}) => void ] | undefined 
>(undefined);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children } : {children : React.ReactNode}) => {
  const [theme, setTheme] = useState<{foreground : string, background : string}>(themes.light);

  return (
    <ThemeContext.Provider value={[ theme,  setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
 */

