import { Dispatch } from 'react';
import { ICharacter } from './ICharacter';

export interface IContext {
  characterId: number;
  setCharacterId: Dispatch<number>;
  inputValue: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  search: string | null;
  setModalCharacter: Dispatch<ICharacter>;
}
