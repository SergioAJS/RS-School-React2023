import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SearchInput } from '../components/SearchInput/SearchInput';
import { store } from '../redux';

describe('App', () => {
  it('Search button has "Search" value', () => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
    expect(screen.getByRole('button')).toHaveValue('Search');

    const searchInput: HTMLInputElement = screen.getByPlaceholderText(
      'You can search by the character name'
    );

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'search');
  });
});
