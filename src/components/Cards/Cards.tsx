import { Card } from '../Card/CharacterCard';
import { useCards } from '../../hooks/useCards';
import { ICharacter } from '../../models/ICharacter';
import { Loader } from '../Loader/Loader';
import { useEffect, useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import styles from './Cards.module.scss';

interface ModalProps {
  onOpen: () => void;
  search: string;
}

export const Cards = ({ onOpen, search }: ModalProps) => {
  const { characters } = useCards();
  const { searchCharacters } = useSearch(search);
  const [charactersToRender, setCharactersToRender] = useState<ICharacter[] | null>(null);

  useEffect(() => {
    if (search) {
      setCharactersToRender(searchCharacters);
    } else {
      setCharactersToRender(characters);
    }
  }, [characters, search, searchCharacters]);

  const renderCharacters = (charactersToRender: ICharacter[]) => {
    return charactersToRender.map((character: ICharacter) => (
      <Card character={character} key={character.id} onOpen={onOpen} />
    ));
  };

  if (!charactersToRender) {
    return <Loader />;
  }

  return <ul className={styles.cards}>{renderCharacters(charactersToRender)}</ul>;
};
