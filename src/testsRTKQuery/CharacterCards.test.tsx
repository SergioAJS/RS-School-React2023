import { vi } from 'vitest';

import { screen } from '@testing-library/react';

import { Cards } from '../components/CharacterCards/CharacterCards';
import { renderWithProvidersRTKQuery } from '../utils/TestUtilsRTKQuery';

const mockCardClick = vi.fn();

describe('Cards component', () => {
  it('Renders list of cards', () => {
    renderWithProvidersRTKQuery(<Cards onOpen={mockCardClick} />);
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });
});
