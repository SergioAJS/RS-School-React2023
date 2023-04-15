import { useAppSelector } from '../../hooks/hooks';
import { ICharacter } from '../../models/ICharacter';
import { useGetCharactersQuery } from '../../redux';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { Loader } from '../Loader/Loader';
import styles from './CharacterCards.module.scss';

interface CardsProps {
  onOpen: () => void;
  // searchValue: string | null;
}

export const Cards = (props: CardsProps) => {
  const searchValue = useAppSelector((state) => state.searchCharacter.searchValue);
  const { data, isError, error, isFetching } = useGetCharactersQuery(searchValue);

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
      <ul className={styles.cards}>{renderCharacters(data?.results)}</ul>;
    </>
  );
};
