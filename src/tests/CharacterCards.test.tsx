import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import { Cards } from '../components/CharacterCards/CharacterCards';
import { renderWithProviders } from '../utils/testUtils';

const mockCardClick = vi.fn();

describe('Cards component', () => {
  it('Renders list of cards', () => {
    renderWithProviders(<Cards onOpen={mockCardClick} />);
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });
});
