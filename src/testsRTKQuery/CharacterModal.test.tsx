import { vi } from 'vitest';

import { screen } from '@testing-library/react';

import { CardModal } from '../components/CharacterModal/CharacterModal';
import { renderWithProvidersRTKQuery } from '../utils/TestUtilsRTKQuery';

const mockModalClick = vi.fn();

describe('Card modal', () => {
  it('Renders card modal', () => {
    renderWithProvidersRTKQuery(<CardModal onClose={mockModalClick} />);
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });
});
