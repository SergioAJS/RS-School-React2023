import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../App';

describe('About Us page', () => {
  it('Renders About Us page', () => {
    render(
      <MemoryRouter initialEntries={['/AboutUs']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About Us');
    expect(screen.getByRole('button')).toHaveTextContent('To Home Page');
  });
});
