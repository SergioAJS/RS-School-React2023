import { ICharacter } from '../models/ICharacter';
import styles from './Card.module.scss';

export interface CardProps {
  character: ICharacter;
}

export const Card: ({ character }: CardProps) => JSX.Element = ({ character }: CardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{character.name}</h3>
      <img className={styles.image} src={character.image} alt={character.name} />
      <p>Gender: {character.gender}</p>
    </div>
  );
};
