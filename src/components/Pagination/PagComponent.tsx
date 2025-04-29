import styles from "./PagComponent.module.scss";
import ReactPaginate from "react-paginate";

interface IPageProps {
  currentPageNumber: number;
  setCurrentPageNumber: (currentPageNumber: number) => void;
  totalPages: number;
}

const PagComponent = ({
  currentPageNumber,
  setCurrentPageNumber,
  totalPages,
}: IPageProps) => {
  const handleClick = (event: { selected: number }) => {
    setCurrentPageNumber(event.selected);
  };

  return (
    <div className={styles.container}>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        pageClassName={styles.page_item}
        previousClassName={styles.page_previous}
        nextClassName={styles.page_next}
        breakLabel={"..."}
        breakClassName={styles.page_item}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handleClick}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        initialPage={currentPageNumber}
      />
    </div>
  );
};

export default PagComponent;
