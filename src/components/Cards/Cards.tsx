import { Card } from '../Card/CharacterCard';
import { ICharacter } from '../../models/ICharacter';
import { Loader } from '../Loader/Loader';
import styles from './Cards.module.scss';

interface CardsProps {
  onOpen: () => void;
  searchCharacters: ICharacter[] | null;
  isLoading: boolean;
  error: string | null;
}

export const Cards = ({ onOpen, searchCharacters, isLoading, error }: CardsProps) => {
  const renderCharacters = (searchCharacters: ICharacter[]) => {
    return searchCharacters.map((character: ICharacter) => (
      <Card character={character} key={character.id} onOpen={onOpen} />
    ));
  };

  if (!searchCharacters) {
    return <>{error && <p className={styles.error}>{error}</p>}</>;
  }

  return (
    <>
      {isLoading && <Loader />}
      <ul className={styles.cards}>{renderCharacters(searchCharacters)}</ul>;
    </>
  );
};
