import {
  createIdentify,
  createIsSpecificUseCase,
  createReadData,
  UseCaseParser,
} from './use-case';

export interface CalculatePriceOfItems {
  quantity: string;
  item: string;
}

const pattern =
  /^how many Credits is (?<quantity>([a-zA-Z]+ ?)+?) (?<item>[a-zA-Z]+) \?$/;

export const calculatePriceOfItemsParser: UseCaseParser<CalculatePriceOfItems> =
  {
    name: 'CalculatePriceOfItems',
    identify: createIdentify(pattern),
    readData: createReadData(pattern),
  };

export const isCalculatePriceOfItems = createIsSpecificUseCase(
  calculatePriceOfItemsParser
);
