import { createContext } from 'react';
import { IContext } from '../models/IContext';

const contextObj: IContext = {
  characterId: null,
  setCharacterId: () => null,
  inputValue: '',
  onChange: () => {},
  handleSubmit: () => {},
  searchValue: '',
};

export const CardContext = createContext(contextObj);
