import { createContext, ReactNode, useState, useMemo } from "react";

export interface IThemeContext {
  theme: string;
  togleTheme: () => void;
}
interface IThemeProvaiderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "dark",
  togleTheme: () => {},
});

const ThemeContextProvider = ({ children }: IThemeProvaiderProps) => {
  const [theme, setTheme] = useState("dark");

  const togleTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  const value = useMemo(() => ({ theme, togleTheme }), [theme, togleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
