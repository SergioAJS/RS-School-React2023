import searchCharacterSlice, {
  initialState,
  setCharacterId,
} from '../redux/slices/searchCharacterSlice';

describe('tests for searchCharacterSlice', () => {
  test('initialize slice with initialState', () => {
    const searchCharacterSliceInit = searchCharacterSlice(initialState, { type: 'unknown' });
    expect(searchCharacterSliceInit).toBe(initialState);
  });

  test('setCharacterId', () => {
    const characterId = 5;

    const afterReducerOperation = searchCharacterSlice(initialState, setCharacterId(characterId));

    expect(afterReducerOperation).toStrictEqual({
      searchValue: '',
      inputValue: '',
      characterId: 5,
    });
  });
});
