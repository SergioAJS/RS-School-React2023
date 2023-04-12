import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../App';

describe('Form page', () => {
  it('Renders Form page', () => {
    render(
      <MemoryRouter initialEntries={['/Form']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  });
});
