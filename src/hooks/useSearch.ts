import { useEffect, useState } from 'react';
import { ICharacters } from '../models/ICharacters';
import { ICharacter } from '../models/ICharacter';

export const useSearch = (searchValue: string | null) => {
  const [searchCharacters, setSearchCharacters] = useState<ICharacter[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const url = `https://rickandmortyapi.com/api/character/?name=${
          searchValue === null ? '' : searchValue
        }`;
        const rawQuotes = await fetch(url);
        if (!rawQuotes.ok) {
          setError('Name does not exist');
          setIsLoading(false);
          setSearchCharacters(null);
        } else {
          const characters: ICharacters = await rawQuotes.json();
          setSearchCharacters(characters.results);
          setIsLoading(false);
        }
      } catch (error) {
        const err = error as Error;
        setSearchCharacters(null);
        setIsLoading(false);
        setError(err.message);
        console.error(error);
      }
    };

    fetchCards();
  }, [searchValue]);

  return { searchCharacters, isLoading, error };
};
