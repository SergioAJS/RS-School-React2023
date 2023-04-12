import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { App } from '../App';

describe('Home page', () => {
  it('Renders Home page', () => {
    render(
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
