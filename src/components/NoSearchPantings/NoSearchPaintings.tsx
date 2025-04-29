import styles from "./NoSearchPaintings.module.scss";
import { useTranslation } from "react-i18next";

interface INoSearchProps {
  value: string;
}

const NoSearchPaintings = ({ value }: INoSearchProps) => {
  const { t } = useTranslation();
  return (
    <>
      <p className={styles.noResultPaintings}>
        {t("noSearchPaintings")}
        <span className={styles.lorem}>{t(value, `${value}`)}</span>
      </p>
      <p className={styles.secondText}>{t("secondText")}</p>
    </>
  );
};

export default NoSearchPaintings;
