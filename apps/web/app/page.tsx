'use client';

import { useState } from 'react';
import { createContext } from 'react';
import Home from './Home';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<Theme>('light');
const ThemeSetContext = createContext<
  React.Dispatch<React.SetStateAction<Theme>> | undefined
>(undefined);

export default function Main() {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSetContext.Provider value={setTheme}>
        <Home />
      </ThemeSetContext.Provider>
    </ThemeContext.Provider>
  );
}
