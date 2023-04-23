import { useAppDispatchThunks } from '../../hooks/hooks';
import { ICharacter } from '../../models/ICharacter';
import { setCharacterId } from '../../redux/slices/searchCharacterSlice';
import styles from './CharacterCard.module.scss';

export interface CardProps {
  character: ICharacter;
  onOpen: () => void;
}

export const CharacterCard = (props: CardProps) => {
  const dispatch = useAppDispatchThunks();

  const handleClick = () => {
    props.onOpen();
    if (setCharacterId) {
      dispatch(setCharacterId(props.character.id));
    }
  };

  return (
    <div
      className={styles.card}
      title={`More info about ${props.character.name}`}
      onClick={handleClick}
    >
      <h3 className={styles.title}>{props.character.name}</h3>
      <img className={styles.image} src={props.character.image} alt={props.character.name} />
      <p>Gender: {props.character.gender}</p>
    </div>
  );
};
