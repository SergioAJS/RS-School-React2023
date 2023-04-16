import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setInputValue, setSearchValue } from '../../redux/slices/searchCharacterSlice';
import styles from './SearchInput.module.scss';

export const SearchInput = () => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector((state) => state.searchCharacter.inputValue);

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const input = event.currentTarget;
    const value = input.value;
    dispatch(setInputValue(value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearchValue(inputValue));
  };

  useEffect(() => {
    dispatch(setInputValue(inputValue));
  }, [dispatch, inputValue]);

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
