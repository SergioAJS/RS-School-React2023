import { Countries } from '../models/Countries';
import { IFormCardData } from '../models/IFormCardData';
import { Packages } from '../models/Packages';
import { Payments } from '../models/Payments';
import formPageSlice, { addNewCard, initialState } from '../redux/slices/formPageSlice';

describe('tests for formPageSlice', () => {
  test('initialize slice with initialState', () => {
    const formPageSliceInit = formPageSlice(initialState, { type: 'unknown' });
    expect(formPageSliceInit).toBe(initialState);
  });

  test('addNewCard', () => {
    const formCards: IFormCardData[] = [
      {
        firstName: 'Sergio',
        deliveryDate: '12-12-2023',
        country: Countries.Uzbekistan,
        packageOption: [Packages.Regular, Packages.Fragile],
        payment: Payments.Cash,
        imageFile: 'image',
      },
    ];

    const afterReducerOperation = formPageSlice(initialState, addNewCard(formCards));

    expect(afterReducerOperation).toStrictEqual({
      formCards,
    });
  });
});
