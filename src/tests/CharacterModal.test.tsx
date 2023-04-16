import { vi } from 'vitest';

import { screen } from '@testing-library/react';

import { CardModal } from '../components/CharacterModal/CharacterModal';
import { renderWithProviders } from '../utils/testUtils';

const mockModalClick = vi.fn();

describe('Card modal', () => {
  it('Renders card modal', () => {
    renderWithProviders(<CardModal onClose={mockModalClick} />);
    // expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Rick Sanchez');
    expect(screen.getByAltText('loading')).toBeInTheDocument();
    // expect(screen.getByAltText('Rick Sanchez')).toBeInTheDocument();
    // expect(screen.getByText(/Gender/i)).toHaveTextContent('Gender: Male');
  });
});
