import { Dispatch } from 'react';

// import { ICharacter } from './ICharacter';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IContext {
  characterId: number | null;
  setCharacterId: Dispatch<number | null>;
  // inputValue: string;
  // // onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  // // handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  // searchValue: string | null;
}
