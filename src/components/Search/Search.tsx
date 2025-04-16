// import search1_icon from '../../assets/icons/search1_icon.svg';
import styles from './Search.module.scss';

const SearchForm = () => {
  return (
    <div className={styles.searchLine}>
      {/* <img src={search1_icon} alt="Поиск" /> */}
      <input placeholder='Painting title' type='text'/>
    </div> 
  );
};

export default SearchForm;