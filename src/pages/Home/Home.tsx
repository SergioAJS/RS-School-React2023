import { useState } from 'react';
import { Cards } from '../../components/CharacterCards/CharacterCards';
import { CardModal } from '../../components/CharacterModal/CharacterModal';
import { Header } from '../../components/Header/Header';
import { SearchInput } from '../../components/SearchInput/SearchInput';
// import { CardContext } from '../../context/Context';
import styles from './Home.module.scss';

export const Home = () => {
  // const [characterId, setCharacterId] = useState<number | null>(null);
  const [modal, setModal] = useState(false);
  const modalClose = () => {
    setModal(false);
  };

  const modalOpen = () => {
    setModal(true);
  };

  return (
    // <CardContext.Provider
    //   value={{
    //     characterId,
    //     setCharacterId,
    //   }}
    // >
    <div className={styles.home}>
      <Header />
      <SearchInput />
      <Cards onOpen={modalOpen} />
      {modal && <CardModal onClose={modalClose} />}
    </div>
    // </CardContext.Provider>
  );
};
