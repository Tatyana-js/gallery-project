// import { useContext } from 'react';

// import ThemeContext, { IThemeContext }  from '../context/ThemeContext';

// const useTheme = (): IThemeContext => useContext( ThemeContext );

// export default useTheme;

// Хук для использования контекста в других компонентах
// const useTheme = (): IThemeContext => {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };

// export { ThemeProvider, useTheme };