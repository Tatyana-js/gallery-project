import React from "react";
import styles from "./PagComponent.module.scss";

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
  const handlePageClick = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPageNumber(page);
    }
  };

  const isActive = (page: number) =>
    currentPageNumber === page ? styles.active : "";

  const getPageNumbers = (): (number | "...")[] => {
    const visiblePages = new Set<number>();

    visiblePages.add(0);
    visiblePages.add(totalPages - 1);

    let offset = 1;

    if (currentPageNumber === 0 || currentPageNumber === totalPages - 1) {
      offset = 2;
    }

    for (
      let i = currentPageNumber - offset;
      i <= currentPageNumber + offset;
      i++
    ) {
      if (i > 0 && i < totalPages - 1) {
        visiblePages.add(i);
      }
    }

    const sortedPages = Array.from(visiblePages).sort((a, b) => a - b);

    const finalPages: (number | "...")[] = [];
    for (let i = 0; i < sortedPages.length; i++) {
      finalPages.push(sortedPages[i]);
      if (
        i < sortedPages.length - 1 &&
        sortedPages[i + 1] - sortedPages[i] > 1
      ) {
        finalPages.push("...");
      }
    }

    return finalPages;
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.page_previous}
        onClick={() => handlePageClick(currentPageNumber - 1)}
        disabled={currentPageNumber === 0}
      >
        &lt;
      </button>
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className={styles.page_item}>
            {"..."}
          </span>
        ) : (
          <button
            type="button"
            key={page}
            className={`${styles.page_item} ${isActive(page)}`}
            onClick={() => handlePageClick(page)}
          >
            {page + 1}
          </button>
        ),
      )}
      <button
        type="button"
        className={styles.page_next}
        onClick={() => handlePageClick(currentPageNumber + 1)}
        disabled={currentPageNumber === totalPages - 1}
      >
        &gt;
      </button>
    </div>
  );
};

export default PagComponent;
