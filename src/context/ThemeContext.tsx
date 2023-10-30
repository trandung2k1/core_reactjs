import React, { createContext, useState, useId } from 'react';
interface Props {
  children: React.ReactNode;
}
export interface TypeThemeContext {
  theme: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
}
export const ThemeContext = createContext<TypeThemeContext>({ theme: 'light' });

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState('light');
  const values = { theme, setTheme };
  const key = useId();
  return (
    <ThemeContext.Provider key={key} value={values}>
      {children}
    </ThemeContext.Provider>
  );
}
