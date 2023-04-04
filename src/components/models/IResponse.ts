import { ICard } from './ICard';

export interface IResponse {
  products: Array<ICard>;
  total: number;
  skip: number;
  limit: number;
}
