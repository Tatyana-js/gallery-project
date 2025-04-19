import './scss/app.scss';
import './scss/default_variables.scss';
import Header from './components/Header/Header.tsx';
import SearchForm from './components/Search/Search.tsx';
import GalleryList from './components/Gallery/GallerySection.tsx';
import PagComponent from './components/Pagination/PagComponent.tsx';
import ThemeContextProvider from './context/ThemeContext.tsx';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">    
        <Header />
        <SearchForm />
        <GalleryList />
        <PagComponent />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
