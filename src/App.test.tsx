import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { MemoryRouter } from 'react-router-dom';
import { SearchInput } from './components/SearchInput/SearchInput';

describe('App', () => {
  it('Renders hello world', () => {
    //ARRANGE
    render(<SearchInput />);
    //ACT
    //EXPECT
    expect(screen.getByRole('button')).toHaveValue('Search');
  });
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});
