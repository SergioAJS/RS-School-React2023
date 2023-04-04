import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { ICard } from '../models/ICard';
import { IResponse } from '../models/IResponse';
import styles from './Cards.module.scss';

export const Cards: () => JSX.Element = () => {
  const [cards, setCards] = useState<ICard[] | null>(null);

  const fetchCards = async () => {
    try {
      const cardsRaw = await fetch('https://dummyjson.com/products?limit=12');
      const cardsList: IResponse = await cardsRaw.json();
      setCards(cardsList.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const renderCards = (cards: ICard[]) => {
    return cards.map((card: ICard) => (
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
    ));
  };

  if (!cards) {
    return <></>;
  }

  return <ul className={styles.cards}>{renderCards(cards)}</ul>;
};
