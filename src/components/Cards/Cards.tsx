import { Card } from '../Card/CharacterCard';
import styles from './Cards.module.scss';
import { useCards } from '../../hooks/useCards';
import { ICharacter } from '../models/ICharacter';

export const Cards: () => JSX.Element = () => {
  const { characters } = useCards();

  const renderQuotes = (quotes: ICharacter[]) => {
    return quotes.map((character: ICharacter) => <Card character={character} key={character.id} />);
  };

  if (!characters) {
    return <></>;
  }

  return <ul className={styles.cards}>{renderQuotes(characters)}</ul>;
};
