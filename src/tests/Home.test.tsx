import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { App } from '../App';
import { store } from '../redux';

describe('Home page', () => {
  it('Renders Home page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const searchInput: HTMLInputElement = screen.getByPlaceholderText(
      'You can search by the character name'
    );

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'search');
  });
});
