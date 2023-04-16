import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
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
  it('Should input values', () => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
    const searchInput: HTMLInputElement = screen.getByPlaceholderText(
      'You can search by the character name'
    );
    fireEvent.input(searchInput, { target: { value: 'test value' } });
    expect(searchInput).toHaveValue('test value');
  });
});
