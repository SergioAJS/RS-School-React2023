import React from 'react';

import { render, screen } from '@testing-library/react';

import { FormCard } from '../components/FormCard/FormCard';
import { Countries } from '../models/Countries';
import { IFormCardData } from '../models/IFormCardData';
import { Packages } from '../models/Packages';
import { Payments } from '../models/Payments';
import { renderWithProviders } from '../utils/TestUtils';

const testFormCard: IFormCardData = {
  firstName: 'Dilshoda',
  deliveryDate: '2023-07-20',
  country: Countries.Uzbekistan,
  packageOption: [Packages.Fragile],
  payment: Payments.Cash,
  imageFile: '',
};

describe('Form Card', () => {
  it('Renders form card', () => {
    renderWithProviders(<FormCard formData={testFormCard}></FormCard>);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Dilshoda');
  });
  it('Not render form card if formData is null', () => {
    render(<FormCard formData={null}></FormCard>);
    expect(null);
  });
});
