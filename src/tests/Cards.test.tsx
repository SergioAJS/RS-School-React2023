import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Cards } from '../components/Cards/Cards';
import { testCharacter } from '../mock/handlers';

const mockCardClick = vi.fn();

describe('Cards component', () => {
  it('Renders list of cards', () => {
    render(
      <Cards
        onOpen={mockCardClick}
        searchCharacters={[testCharacter]}
        isLoading={false}
        error={null}
      />
    );
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  });
});
