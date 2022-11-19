import { UseCase } from './use-case';

export interface CalculatePriceOfItemsModel {
  quantity: string;
  item: string;
}
export class CalculatePriceOfItems extends UseCase<CalculatePriceOfItemsModel> {
  protected pattern =
    /^how many Credits is (?<quantity>([a-zA-Z]+ ?)+?) (?<item>[a-zA-Z]+) \?$/;
}
