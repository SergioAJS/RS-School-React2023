import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SearchInput } from '../components/SearchInput/SearchInput';

describe('App', () => {
  it('Search button has "Search" value', () => {
    render(<SearchInput />);
    expect(screen.getByRole('button')).toHaveValue('Search');

    const searchInput: HTMLInputElement = screen.getByPlaceholderText(
      'You can search by the character name'
    );

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'search');
  });
});
