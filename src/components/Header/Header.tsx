import logo from '../../assets/logo.svg';
import sun_icon from '../../assets/icons/sun_icon.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} className={styles.icon_logo} alt="Логотип" />
      <button className={styles.button_theme}>
        <img src={sun_icon} className={styles.sun_icon} alt="Знак солнца" />
      </button>
    </div>
  );
};

export default Header;
