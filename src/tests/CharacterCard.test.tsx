import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import { CharacterCard } from '../components/CharacterCard/CharacterCard';
import { testCharacter } from '../mock/handlers';
import { renderWithProviders } from '../utils/testUtils';

const mockCardClick = vi.fn();

describe('CharacterCard component', () => {
  it('Renders CharacterCard', () => {
    renderWithProviders(<CharacterCard character={testCharacter} onOpen={mockCardClick} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Rick Sanchez');
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(/Gender/i)).toHaveTextContent('Gender: Male');
  });
});
