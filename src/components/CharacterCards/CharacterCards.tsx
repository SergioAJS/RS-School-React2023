import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { ICharacter } from '../../models/ICharacter';
import { useGetCharactersQuery } from '../../redux';
import { setCharacterCards } from '../../redux/slices/characterCardsSlice';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { Loader } from '../Loader/Loader';
import styles from './CharacterCards.module.scss';

interface CardsProps {
  onOpen: () => void;
}

export const Cards = (props: CardsProps) => {
  const dispatch = useAppDispatch();
  const characterCards = useAppSelector((state) => state.characterCards.characterCards);
  const searchValue = useAppSelector((state) => state.searchCharacter.searchValue);
  const { data, isError, error, isFetching } = useGetCharactersQuery(searchValue);

  useEffect(() => {
    if (data) {
      dispatch(setCharacterCards(data.results));
    }
  }, [data, dispatch]);

  const renderCharacters = (characters: ICharacter[] | undefined) => {
    if (characters)
      return characters.map((character: ICharacter) => (
        <CharacterCard character={character} key={character.id} onOpen={props.onOpen} />
      ));
  };

  if (isError) {
    return <>{error && <p className={styles.error}>Name does not exist</p>}</>;
  }

  return (
    <>
      {isFetching && <Loader />}
      <ul className={styles.cards}>{renderCharacters(characterCards)}</ul>;
    </>
  );
};
