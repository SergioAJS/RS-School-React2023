import { Component } from 'react';
import { Card } from '../Card/Card';
import { ICard } from '../models/ICard';
import { IResponse } from '../models/IResponse';
import styles from './Cards.module.scss';

export class Cards extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    try {
      const cardsRaw = await fetch('https://dummyjson.com/products?limit=12');
      const cardsList: IResponse = await cardsRaw.json();
      this.setState({ cards: cardsList.products });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <ul className={styles.cards}>
        {this.state.cards.map((card: ICard) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            price={card.price}
            discountPercentage={card.discountPercentage}
            rating={card.rating}
            stock={card.stock}
            brand={card.brand}
            category={card.category}
            thumbnail={card.thumbnail}
          />
        ))}
      </ul>
    );
  }
}
