import "./scss/app.scss";
import "./scss/default_variables.scss";
import { useState } from 'react';
import Header from "./components/Header/Header.tsx";
import SearchForm from "./components/Search/Search.tsx";
import GalleryList from "./components/Gallery/GallerySection.tsx";
import PagComponent from "./components/Pagination/PagComponent.tsx";
import useTheme from "./hooks/index.tsx";
import { useGetPaintingsQuery } from './api/apiGallery.ts';

const App = () => {
  const { theme } = useTheme();
  const [value, setValue] = useState<string>("");
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(0);
  const _limit = 6;

  const { data: countPaintings = [] } = useGetPaintingsQuery({_limit: 1000});
  const { data: paintings = [] } = useGetPaintingsQuery({ q: value, _page: currentPageNumber, _limit });

  const totalPages = Math.ceil(countPaintings.length / _limit);

  return (
    <div className={"body " + theme}>
      <div className="container">
        <Header />
        <SearchForm onChange={setValue} value={value} />
        <GalleryList paintings={paintings} />
        <PagComponent 
          currentPageNumber={currentPageNumber}
          setCurrentPageNumber={setCurrentPageNumber} 
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default App;
