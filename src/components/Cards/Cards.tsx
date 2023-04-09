import { Card } from '../Card/CharacterCard';
import { ICharacter } from '../../models/ICharacter';
import { Loader } from '../Loader/Loader';
import { useSearch } from '../../hooks/useSearch';
import styles from './Cards.module.scss';

interface CardsProps {
  onOpen: () => void;
  search: string | null;
}

export const Cards = ({ onOpen, search }: CardsProps) => {
  const { searchCharacters, isLoading, error } = useSearch(search);

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
