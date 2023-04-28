import { useEffect, useRef } from 'react';

import { useAppDispatchThunks, useAppSelectorThunks } from '../../hooks/hooks';
import { ICharacter } from '../../models/ICharacter';
import { fetchCharacters } from '../../redux/API/charactersApiThunks';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { Loader } from '../Loader/Loader';
import styles from './CharacterCards.module.scss';

interface CardsProps {
  onOpen: () => void;
}

export const Cards = (props: CardsProps) => {
  const dispatch = useAppDispatchThunks();
  const { characterCards, isLoadingChars, errorChars } = useAppSelectorThunks(
    (state) => state.characterCards
  );
  const searchValue = useAppSelectorThunks((state) => state.searchCharacter.searchValue);
  const isFirstRender = useRef(false);
  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(fetchCharacters(searchValue));
    }
  }, [dispatch, searchValue]);

  useEffect(() => {
    isFirstRender.current = true;
    return () => {
      isFirstRender.current = false;
    };
  }, []);

  const renderCharacters = (characters: ICharacter[] | undefined) => {
    if (characters)
      return characters.map((character: ICharacter) => (
        <CharacterCard character={character} key={character.id} onOpen={props.onOpen} />
      ));
  };

  if (errorChars) {
    return (
      <>
        {errorChars && (
          <p className={styles.error} data-cy="wrong-name">
            Name does not exist
          </p>
        )}
      </>
    );
  }

  return (
    <>
      {isLoadingChars && <Loader />}
      {!isLoadingChars && <ul className={styles.cards}>{renderCharacters(characterCards)}</ul>}
    </>
  );
};
