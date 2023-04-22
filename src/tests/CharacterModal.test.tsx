import { vi } from 'vitest';

import { screen } from '@testing-library/react';

import { CardModal } from '../components/CharacterModal/CharacterModal';
import { renderWithProviders } from '../utils/TestUtils';

const mockModalClick = vi.fn();

describe('Card modal', () => {
  it('Renders card modal', () => {
    renderWithProviders(<CardModal onClose={mockModalClick} />);
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });
});
