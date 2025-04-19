import { createContext, ReactNode, useState } from 'react';

interface IThemeContext {
  theme: string;
  togleTheme: () => void;
}
interface IThemeProvaiderProps {
  children: ReactNode;
}
const ThemeContext = createContext<IThemeContext>({theme: 'dark', togleTheme: () => {}});

const ThemeContextProvider = ({ children }: IThemeProvaiderProps) => {
  const [ state, setState ] = useState('dark');
  const togleTheme = () => {
    if (state === 'dark') {
      setState('light');
    }
    else {
      setState('dark');
    }
  };
}; 