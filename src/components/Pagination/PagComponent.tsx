import styles from "./PagComponent.module.scss";
import icon_arrow from "../../assets/icons/arrow_icon.svg";
import { ICard } from "../../api/apiGallery";

interface IPageProps {
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
  pagePaintings: ICard[];
}

const PagComponent = ({ pageNumber, setPageNumber, pagePaintings }: IPageProps) => {
  console.log(pagePaintings);

  const handleClick = (pageNumber: number): void => {
    if (pageNumber) {
      setPageNumber(pageNumber); 
    }
  };

  return (
    <div className={styles.pagination}>
      <img
        src={icon_arrow}
        className={styles.icon_arrow_next}
        alt="Следующая страница"
        onClick={() => handleClick(pageNumber + 1)}
      />
      <section className={styles.pages}>
        <span className={styles.page} onClick={() => handleClick(pageNumber)}>{pageNumber}</span>
        <span className={styles.page} onClick={() => handleClick(pageNumber)}>{pageNumber}</span>
        <span className={styles.page} onClick={() => handleClick(pageNumber)}>{pageNumber}</span>
        <span className={styles.page} onClick={() => handleClick(9)}>{pageNumber}</span>
      </section>
      <img
        src={icon_arrow}
        className={styles.icon_arrow}
        alt="Предыдущая страница"
        onClick={() => handleClick(pageNumber - 1)}
      />
    </div>
  );
};

export default PagComponent;
