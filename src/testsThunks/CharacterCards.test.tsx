import { vi } from 'vitest';

import { screen } from '@testing-library/react';

import { Cards } from '../components/CharacterCards/CharacterCards';
import { renderWithProvidersThunks } from '../utils/TestUtilsThunks';

const mockCardClick = vi.fn();

describe('Cards component', () => {
  it('Renders list of cards', () => {
    renderWithProvidersThunks(<Cards onOpen={mockCardClick} />);
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });
});
