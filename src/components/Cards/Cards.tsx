import { ICharacter } from '../../models/ICharacter';
import { ICharacters } from '../../models/ICharacters';
import { useGetCharactersQuery } from '../../redux';
import { Card } from '../Card/CharacterCard';
import { Loader } from '../Loader/Loader';
import styles from './Cards.module.scss';

interface CardsProps {
  onOpen: () => void;
  // searchCharacters: ICharacter[] | null;
  // isLoading: boolean;
  error: string | null;
}

export const Cards = (props: CardsProps) => {
  const { data, isError, error } = useGetCharactersQuery('');
  const renderCharacters = (characters: ICharacter[]) => {
    return characters.map((character: ICharacter) => (
      <Card character={character} key={character.id} onOpen={props.onOpen} />
    ));
  };

  if (isError) {
    return <>{error && <p className={styles.error}>error</p>}</>;
  }

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <ul className={styles.cards}>{renderCharacters(data.results)}</ul>;
    </>
  );
};
