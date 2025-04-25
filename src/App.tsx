import "./scss/app.scss";
import "./scss/default_variables.scss";
import { useState } from 'react';
import Header from "./components/Header/Header.tsx";
import SearchForm from "./components/Search/Search.tsx";
import GalleryList from "./components/Gallery/GallerySection.tsx";
import PagComponent from "./components/Pagination/PagComponent.tsx";
import useTheme from "./hooks/index.tsx";
import { useGetPaintingsQuery } from './api/apiGallery.ts';

function App() {
  const { theme } = useTheme();
  const [value, setValue] = useState<string>("");
  const { data: paintings = [] } = useGetPaintingsQuery({ q: value });

  const [pageNumber, setPageNumber] = useState<number>(1);

  
  const { data: pagePaintings = [] } = useGetPaintingsQuery({ _page: pageNumber, _limit: 6 });
  const totalPages = Math.ceil(paintings.length / _limit)
  
  return (
    <div className={"body " + theme}>
      <div className="container">
        <Header />
        <SearchForm onChange={setValue} value={value} />
        <GalleryList paintings={paintings} />
        <PagComponent pageNumber={pageNumber}  setPageNumber={setPageNumber} pagePaintings={pagePaintings} />
      </div>
    </div>

  );
}

export default App;
