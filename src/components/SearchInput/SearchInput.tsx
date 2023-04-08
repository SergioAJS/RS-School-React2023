import { useContext } from 'react';
import { CardContext } from '../../Context/Context';
import styles from '../SearchInput/SearchInput.module.scss';

export const SearchInput: () => JSX.Element = () => {
  const { inputValue, onChange, handleSubmit } = useContext(CardContext);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input
          className={styles.search}
          type="search"
          name="search"
          value={inputValue}
          onChange={onChange}
        />
      </label>
      <input className={styles.submit} type="submit" value="Search" />
    </form>
  );
};
