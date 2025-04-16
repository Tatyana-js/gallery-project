import './scss/app.scss';
import './scss/default_variables.scss';
import Header from './components/Header/Header.tsx';
import SearchForm from './components/Search/Search.tsx';
import GalleryList from './components/Gallery/GallerySection.tsx';

function App() {
  return (
    <div className="container">    
      <Header />
      <SearchForm />
      <GalleryList />
    </div>
  );
}

export default App;
