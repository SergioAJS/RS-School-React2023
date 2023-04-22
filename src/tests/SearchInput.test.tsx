import React from 'react';
import { Provider } from 'react-redux';

import { fireEvent, render, screen } from '@testing-library/react';

import { SearchInput } from '../components/SearchInput/SearchInput';
import { setupStore } from '../redux';
import { renderWithProviders } from '../utils/TestUtils';

describe('App', () => {
  it('Search button has "Search" value', () => {
    renderWithProviders(<SearchInput />);
    expect(screen.getByRole('button')).toHaveValue('Search');

    const searchInput: HTMLInputElement = screen.getByPlaceholderText(
      'You can search by the character name'
    );

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'search');
  });
  it('Should input values', () => {
    render(
      <Provider store={setupStore()}>
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
