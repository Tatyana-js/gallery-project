import styles from './Search.module.scss';
import { useTranslation } from "react-i18next";
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useGetPaintingsQuery } from '../../api/apiGallery';

const SearchForm = () => {
  const { t } = useTranslation();
  const searchRef = useRef(null);
  const [value, setValue] = useState<string>('');
  const { data: paintings = [] } = useGetPaintingsQuery();
  const searchPainting = paintings.find(painting => painting.name === value.trim());
  console.log(searchPainting); 

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value.trim());
  };
  
  const handleClear = () => {
    setValue('');
  };

  return (
    <form className={styles.searchLine} onSubmit={handleSubmit}>
      <input
        placeholder={t('placeholder')} 
        type='text'
        ref={searchRef}
        value={value}
        onChange={handleChange}
      />
      <span 
        className={styles.clear_icon}
        onClick={handleClear}>
      </span>
    </form> 
  );
};

export default SearchForm;