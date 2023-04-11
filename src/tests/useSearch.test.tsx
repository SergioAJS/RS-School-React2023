import { useSearch } from '../hooks/useSearch';

describe('Fetch API', () => {
  it('return character', () => {
    const { searchCharacters } = useSearch('rick');
    if (searchCharacters) expect(searchCharacters[0].name === 'Rick Sanchez');
  });
});
