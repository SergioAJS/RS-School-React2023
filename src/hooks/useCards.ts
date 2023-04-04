import { useEffect, useState } from 'react';
import { ICharacters } from '../components/models/ICharacters';
import { ICharacter } from '../components/models/ICharacter';

export const useCards = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const fetchCards = async () => {
    try {
      const url = 'https://rickandmortyapi.com/api/character';
      const rawQuotes = await fetch(url);
      const characters: ICharacters = await rawQuotes.json();
      setCharacters(characters.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return { characters };
};
