import { useState } from 'react';
import { Cards } from '../../components/CharacterCards/CharacterCards';
import { CardModal } from '../../components/CharacterModal/CharacterModal';
import { Header } from '../../components/Header/Header';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import styles from './Home.module.scss';

export const Home = () => {
  const [modal, setModal] = useState(false);
  const modalClose = () => {
    setModal(false);
  };

  const modalOpen = () => {
    setModal(true);
  };

  return (
    <div className={styles.home}>
      <Header />
      <SearchInput />
      <Cards onOpen={modalOpen} />
      {modal && <CardModal onClose={modalClose} />}
    </div>
  );
};
