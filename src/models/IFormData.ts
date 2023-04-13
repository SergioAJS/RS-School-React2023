import { Countries } from './Countries';
import { Packages } from './Packages';
import { Payments } from './Payments';

export interface IFormData {
  firstName: string;
  deliveryDate: string;
  country: Countries;
  packageOption: Packages[];
  payment: Payments;
  imageFile: FileList | null;
}
