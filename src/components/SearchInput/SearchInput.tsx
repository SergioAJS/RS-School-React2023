import { useContext } from 'react';
import { CardContext } from '../../context/Context';
import styles from './SearchInput.module.scss';

export const SearchInput = () => {
  const { inputValue, onChange, handleSubmit } = useContext(CardContext);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input
          className={styles.search}
          type="search"
          name="search"
          placeholder="You can search by the character name"
          value={inputValue}
          onChange={onChange}
        />
      </label>
      <input className={styles.submit} type="submit" value="Search" />
    </form>
  );
};
