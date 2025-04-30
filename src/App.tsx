import React from "react";
import "./scss/app.scss";
import "./scss/default_variables.scss";
import { useState } from "react";
import useTheme from "./hooks/index";
import { useGetPaintingsQuery } from "./api/apiGallery";
import Header from "./components/Header/Header";
import SearchForm from "./components/Search/Search";
import GalleryList from "./components/Gallery/GallerySection";
import PagComponent from "./components/Pagination/PagComponent";
import NoSearchPaintings from "./components/NoSearchPantings/NoSearchPaintings";

interface IState {
  value: string;
  currentPageNumber: number;
  isSearching: boolean;
}

const App = () => {
  const { theme } = useTheme();

  const [state, setState] = useState<IState>({
    value: "",
    currentPageNumber: 0,
    isSearching: false,
  });

  const _limit = 6;

  const { data: countPaintings = [] } = useGetPaintingsQuery({ _limit: 1000 });
  const { data: paintings = [] } = useGetPaintingsQuery({
    q: state.value,
    _page: state.currentPageNumber + 1,
    _limit,
  });

  const totalPages = Math.ceil(countPaintings.length / _limit);

  const handleSearchChange = (searchValue: string): void => {
    setState((prevState: IState) => ({
      ...prevState,
      value: searchValue,
      isSearching: !!searchValue,
    }));
  };

  const handleChangeCurrentPage = (numberPage: number) => {
    setState((prevState: IState) => ({
      ...prevState,
      currentPageNumber: numberPage,
    }));
  };

  return (
    <div className={"body " + theme}>
      <div className="container">
        <Header />
        <SearchForm onChange={handleSearchChange} value={state.value} />
        <GalleryList paintings={paintings} />
        {!state.isSearching && paintings.length > 0 && (
          <PagComponent
            currentPageNumber={state.currentPageNumber}
            setCurrentPageNumber={handleChangeCurrentPage}
            totalPages={totalPages}
          />
        )}
        {state.isSearching && paintings.length === 0 && (
          <NoSearchPaintings value={state.value} />
        )}
      </div>
    </div>
  );
};

export default App;
