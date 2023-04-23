import { vi } from 'vitest';

import { screen } from '@testing-library/react';

import { CardModal } from '../components/CharacterModal/CharacterModal';
import { renderWithProvidersThunks } from '../utils/TestUtilsThunks';

const mockModalClick = vi.fn();

describe('Card modal', () => {
  it('Renders card modal', () => {
    renderWithProvidersThunks(<CardModal onClose={mockModalClick} />);
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });
});
