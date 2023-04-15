import { useEffect, useState } from 'react';
import { Cards } from '../../components/Cards/Cards';
import { Header } from '../../components/Header/Header';
import { CardModal } from '../../components/Modal/CardModal';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { CardContext } from '../../context/Context';
import styles from './Home.module.scss';

export const Home = () => {
  const [characterId, setCharacterId] = useState<number | null>(null);
  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState<string | null>(localStorage.getItem('inputValue'));

  const modalClose = () => {
    setModal(false);
  };

  const modalOpen = () => {
    setModal(true);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const input = event.currentTarget;
    const value = input.value;
    setInputValue(value);
  };

  useEffect(() => {
    const inputValue = localStorage.getItem('inputValue');
    if (inputValue) {
      setInputValue(inputValue);
      setSearchValue(inputValue);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('inputValue', inputValue);
    setSearchValue(inputValue);
  };

  return (
    <CardContext.Provider
      value={{
        characterId,
        setCharacterId,
        inputValue,
        onChange,
        handleSubmit,
        searchValue,
      }}
    >
      <div className={styles.home}>
        <Header />
        <SearchInput />
        <Cards onOpen={modalOpen} searchValue={searchValue} />
        {modal && <CardModal onClose={modalClose} characterId={characterId} />}
      </div>
    </CardContext.Provider>
  );
};
