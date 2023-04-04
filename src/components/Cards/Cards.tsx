import { Card } from '../Card/CharacterCard';
import { useCards } from '../../hooks/useCards';
import { ICharacter } from '../../models/ICharacter';
import { Loader } from '../Loader/Loader';
import styles from './Cards.module.scss';

export const Cards: () => JSX.Element = () => {
  const { characters } = useCards();

  const renderQuotes = (quotes: ICharacter[]) => {
    return quotes.map((character: ICharacter) => <Card character={character} key={character.id} />);
  };

  if (!characters) {
    return <Loader />;
  }

  return <ul className={styles.cards}>{renderQuotes(characters)}</ul>;
};
