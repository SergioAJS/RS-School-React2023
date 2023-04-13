import { Countries } from './Countries';
import { Packages } from './Packages';
import { Payments } from './Payments';

export interface IFormCardData {
  firstName: string;
  deliveryDate: string;
  country: Countries;
  packageOption: Packages[];
  payment: Payments;
  imageFile: string;
}
