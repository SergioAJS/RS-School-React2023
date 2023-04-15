import { Provider } from 'react-redux';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Cards } from '../components/CharacterCards/CharacterCards';
import { testCharacter } from '../mock/handlers';
import { store } from '../redux';

const mockCardClick = vi.fn();

describe('Cards component', () => {
  it('Renders list of cards', () => {
    render(
      <Provider store={store}>
        <Cards onOpen={mockCardClick} />
      </Provider>
    );
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });
});
