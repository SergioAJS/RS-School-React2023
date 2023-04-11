import { createContext } from 'react';
import { IContext } from '../models/IContext';

const contextObj: IContext = {
  characterId: 0,
  setCharacterId: () => 0,
  inputValue: '',
  onChange: () => {},
  handleSubmit: () => {},
  search: '',
  setModalCharacter: () => {},
};

export const CardContext = createContext(contextObj);
