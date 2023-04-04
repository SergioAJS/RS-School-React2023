import { Component, ReactNode } from 'react';
import { ICard } from '../models/ICard';
import styles from './Card.module.scss';

export class Card extends Component<ICard> {
  render(): ReactNode {
    return (
      <div className={styles.card}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <img className={styles.image} src={this.props.thumbnail} alt={this.props.title} />
        <p>Price: ${this.props.price}</p>
        <p>Discount: {this.props.discountPercentage}%</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
