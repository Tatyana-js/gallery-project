import { useContext } from 'react';

import { IThemeContext, ThemeContext }  from '../context/ThemeContext';

const useTheme = (): IThemeContext => useContext( ThemeContext );

export default useTheme;
