import { ICharacter } from './ICharacter';

export interface ICharacterCards {
  characterCards: ICharacter[];
  isLoadingChars?: boolean;
  errorChars?: string | undefined;
  character?: ICharacter | null;
  isLoadingChar?: boolean;
}
