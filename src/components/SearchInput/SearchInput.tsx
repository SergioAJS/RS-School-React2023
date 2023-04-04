import { useEffect, useState } from 'react';
import styles from '../SearchInput/SearchInput.module.scss';

export const SearchInput: () => JSX.Element = () => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const input = event.currentTarget;
    const value = input.value;
    setInputValue(value);
    localStorage.setItem('inputValue', value);
  };

  useEffect(() => {
    const inputValue = localStorage.getItem('inputValue');
    if (inputValue) {
      setInputValue(inputValue);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input
          className={styles.search}
          type="text"
          name="search"
          value={inputValue}
          onChange={onChange}
        />
      </label>
      <input className={styles.submit} type="submit" value="Search" />
    </form>
  );
};
