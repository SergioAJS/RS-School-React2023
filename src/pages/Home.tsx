import { SearchInput } from '../components/SearchInput/SearchInput';
import { Header } from '../components/Header/Header';
import { Cards } from '../components/Cards/Cards';
import { CardModal } from '../components/Modal/CardModal';
import { useEffect, useState } from 'react';
import { CardContext } from '../Context/Context';
import { ICharacter } from '../models/ICharacter';
import styles from '../pages/Home.module.scss';

export const Home: () => JSX.Element = () => {
  const [characterId, setCharacterId] = useState(0);
  const [modal, setModal] = useState(true);
  const [modalCharacter, setModalCharacter] = useState<ICharacter | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState<string | null>(localStorage.getItem('inputValue'));

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
      setSearch(inputValue);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('inputValue', inputValue);
    setSearch(inputValue);
  };

  return (
    <CardContext.Provider
      value={{
        characterId,
        setCharacterId,
        inputValue,
        onChange,
        handleSubmit,
        search,
        modalCharacter,
        setModalCharacter,
      }}
    >
      <div className={styles.home}>
        <Header />
        <SearchInput />
        <Cards onOpen={modalOpen} search={search} />
        {modal && <CardModal onClose={modalClose} modalCharacter={modalCharacter} />}
      </div>
    </CardContext.Provider>
  );
};
