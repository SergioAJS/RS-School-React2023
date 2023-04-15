import { ICharacter } from '../../models/ICharacter';
import { useGetCharactersQuery } from '../../redux';
import { CharacterCard } from '../Card/CharacterCard';
import { Loader } from '../Loader/Loader';
import styles from './Cards.module.scss';

interface CardsProps {
  onOpen: () => void;
  searchValue: string | null;
}

export const Cards = (props: CardsProps) => {
  const { data, isError, error, isLoading } = useGetCharactersQuery(props.searchValue);

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
      {isLoading && <Loader />}
      <ul className={styles.cards}>{renderCharacters(data?.results)}</ul>;
    </>
  );
};
