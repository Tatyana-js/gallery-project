import logo_dark from "../../assets/logo.svg";
import logo_light from "../../assets/logo_light.svg";
import dark_icon from "../../assets/icons/dark_icon.svg";
import icon_sun from "../../assets/icons/sun_icon.svg";
import styles from "./Header.module.scss";
import useTheme from "../../hooks/index";

const Header = () => {
  const { theme, togleTheme } = useTheme();

  return (
    <div className={styles.header}>
      {theme === "dark" && (
        <img src={logo_dark} className={styles.icon_logo} alt="Логотип" />
      )}
      {theme === "light" && (
        <img src={logo_light} className={styles.icon_logo} alt="Логотип" />
      )}
      <button
        type="button"
        className={styles.button_theme}
        onClick={togleTheme}
      >
        {theme === "dark" && (
          <img src={icon_sun} className={styles.icon_sun} alt="Знак солнца" />
        )}
        {theme === "light" && (
          <img src={dark_icon} className={styles.icon_sun} alt="Знак луны" />
        )}
      </button>
    </div>
  );
};

export default Header;
