import { Card } from '../Card/CharacterCard';
import { useCards } from '../../hooks/useCards';
import { ICharacter } from '../../models/ICharacter';
import { Loader } from '../Loader/Loader';
import styles from './Cards.module.scss';

interface ModalProps {
  onOpen: () => void;
}

export const Cards = ({ onOpen }: ModalProps) => {
  const { characters } = useCards();

  const renderCharacters = (characters: ICharacter[]) => {
    return characters.map((character: ICharacter) => (
      <Card character={character} key={character.id} onOpen={onOpen} />
    ));
  };

  if (!characters) {
    return <Loader />;
  }

  return <ul className={styles.cards}>{renderCharacters(characters)}</ul>;
};
