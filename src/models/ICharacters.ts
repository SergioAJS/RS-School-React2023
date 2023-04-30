import { ICharacter } from './ICharacter';

export interface ICharacters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: ICharacter[];
}
