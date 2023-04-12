import { useContext } from 'react';
import { CardContext } from '../../context/Context';
import { ICharacter } from '../../models/ICharacter';
import styles from './CharacterCard.module.scss';

export interface CardProps {
  character: ICharacter;
  onOpen: () => void;
}

export const Card: ({ character, onOpen }: CardProps) => JSX.Element = ({
  character,
  onOpen,
}: CardProps) => {
  const { setCharacterId, setModalCharacter } = useContext(CardContext);

  function handleClick() {
    onOpen();
    if (setCharacterId) {
      setCharacterId(character.id);
      setModalCharacter(character);
    }
  }

  return (
    <div className={styles.card} title={`More info about ${character.name}`} onClick={handleClick}>
      <h3 className={styles.title}>{character.name}</h3>
      <img className={styles.image} src={character.image} alt={character.name} />
      <p>Gender: {character.gender}</p>
    </div>
  );
};
