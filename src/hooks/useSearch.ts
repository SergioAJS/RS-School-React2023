import { useEffect, useState } from 'react';
import { ICharacters } from '../models/ICharacters';
import { ICharacter } from '../models/ICharacter';

export const useSearch = (searchValue: string) => {
  const [searchCharacters, setSearchCharacters] = useState<ICharacter[] | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const url = `https://rickandmortyapi.com/api/character/?${'name'}=${searchValue}`;
        const rawQuotes = await fetch(url);
        const characters: ICharacters = await rawQuotes.json();
        setSearchCharacters(characters.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCards();
  }, [searchValue]);

  return { searchCharacters };
};
