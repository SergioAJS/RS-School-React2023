import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { App } from '../App';
import { store } from '../redux';

describe('Form page', () => {
  it('Renders Form page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Form']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  });
});
