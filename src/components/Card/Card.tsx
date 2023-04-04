import { ICard } from '../models/ICard';
import styles from './Card.module.scss';

export const Card: (props: ICard) => JSX.Element = (props: ICard) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{props.title}</h3>
      <img className={styles.image} src={props.thumbnail} alt={props.title} />
      <p>Price: ${props.price}</p>
      <p>Discount: {props.discountPercentage}%</p>
      <p>{props.description}</p>
    </div>
  );
};
