import styles from "./Search.module.scss";
import { useTranslation } from "react-i18next";
import { ChangeEvent, FormEvent, useRef } from "react";

interface ISearchFormProps {
  onChange: (input: string) => void,
  value: string;
}

const SearchForm = ({ onChange, value }: ISearchFormProps) => {
  const { t } = useTranslation();
  const searchRef = useRef(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value.length > 0) {
      onChange(event.target.value);
    }
  };

  const handleClear = () => {
    onChange("");
  };


  return (
    <div className={styles.container}>
      <form className={styles.searchLine} onSubmit={handleSubmit}>
        <input
          placeholder={t("placeholder")}
          type="text"
          ref={searchRef}
          value={value}
          onChange={handleChange}
        />
        <span className={styles.clear_icon} onClick={handleClear}></span>
      </form>
    </div>
  );
};

export default SearchForm;
