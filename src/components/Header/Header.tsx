import logo from '../../assets/logo.svg';
import icon_sun from '../../assets/icons/sun_icon.svg';
import styles from './Header.module.scss';
import { useContext } from 'react';
import  { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  const { theme, togleTheme } = useContext(ThemeContext);
  console.log(theme)

  return (
    <div className={styles.header}>
      <img src={logo} className={styles.icon_logo} alt="Логотип" />
      <button className={styles.button_theme} onClick={togleTheme}>
        <img src={icon_sun} className={styles.icon_sun} alt="Знак солнца" />
      </button>
    </div>
  );
};

export default Header;
