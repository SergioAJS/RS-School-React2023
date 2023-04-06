import { Dispatch } from 'react';

export interface IContext {
  characterId: number;
  setCharacterId: Dispatch<number>;
}
