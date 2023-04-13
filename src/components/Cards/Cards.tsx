import { ICharacter } from '../../models/ICharacter';
import { Card } from '../Card/CharacterCard';
import { Loader } from '../Loader/Loader';
import styles from './Cards.module.scss';

interface CardsProps {
  onOpen: () => void;
  searchCharacters: ICharacter[] | null;
  isLoading: boolean;
  error: string | null;
}

export const Cards = (props: CardsProps) => {
  const renderCharacters = (searchCharacters: ICharacter[]) => {
    return searchCharacters.map((character: ICharacter) => (
      <Card character={character} key={character.id} onOpen={props.onOpen} />
    ));
  };

  if (!props.searchCharacters) {
    return <>{props.error && <p className={styles.error}>{props.error}</p>}</>;
  }

  return (
    <>
      {props.isLoading && <Loader />}
      <ul className={styles.cards}>{renderCharacters(props.searchCharacters)}</ul>;
    </>
  );
};
