import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';

import { App } from '../App';
import { renderWithProvidersRTKQuery } from '../utils/TestUtilsRTKQuery';

describe('Form page', () => {
  it('Renders Form page', () => {
    renderWithProvidersRTKQuery(
      <MemoryRouter initialEntries={['/Form']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  });
});
