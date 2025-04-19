import styles from './Search.module.scss';
import { useTranslation } from "react-i18next";
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

const SearchForm = () => {
  const { t } = useTranslation();
  const searchRef = useRef(null);
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
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
    </form> 
  );
};

export default SearchForm;