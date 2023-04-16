import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { App } from '../App';
import { renderWithProviders } from '../utils/testUtils';

describe('Home page', () => {
  it('Renders Home page', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const searchInput: HTMLInputElement = screen.getByPlaceholderText(
      'You can search by the character name'
    );

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'search');
  });
});
