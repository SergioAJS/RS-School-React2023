import { SearchInput } from '../components/SearchInput/SearchInput';
import { ClassHeader } from '../components/Header/Header';
import styles from '../pages/Home.module.scss';
import { Cards } from '../components/Cards/Cards';
import { CardModal } from '../components/Modal/CardModal';
import { useState } from 'react';
import { CardContext } from '../Context/Context';

export const Home: () => JSX.Element = () => {
  const [characterId, setCharacterId] = useState(0);
  const [modal, setModal] = useState(true);
  const modalHandler = () => {
    setModal(false);
  };
  const modalOpen = () => {
    setModal(true);
  };

  return (
    <CardContext.Provider value={{ characterId, setCharacterId }}>
      <div className={styles.home}>
        <ClassHeader />
        <SearchInput />
        <Cards onOpen={modalOpen} />
        {modal && <CardModal onClose={modalHandler} />}
      </div>
    </CardContext.Provider>
  );
};
