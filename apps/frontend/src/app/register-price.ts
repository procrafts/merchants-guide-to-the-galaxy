import { UseCase } from './use-case';

export interface RegisterPriceModel {
  amount: string;
  item: string;
  price: string;
}
export class RegisterPrice extends UseCase<RegisterPriceModel> {
  protected pattern =
    /^(?<amount>[a-zA-Z][a-zA-Z ]*) (?<item>[a-zA-Z]+) is (?<price>\d+) Credits$/;
}
