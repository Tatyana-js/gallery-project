import search1_icon from '../../assets/icons/search1_icon.svg';
import styles from './Search.module.scss';
import { useTranslation } from "react-i18next";
import { useRef } from 'react';

const SearchForm = () => {
  const { t } = useTranslation();
  const searchRef = useRef(null);


  return (
    <div className={styles.searchLine}>
      <img src={search1_icon} alt="Поиск" />
      <input 
        placeholder={t('placeholder')} 
        type='text'
        ref={searchRef}
      />
    </div> 
  );
};

export default SearchForm;