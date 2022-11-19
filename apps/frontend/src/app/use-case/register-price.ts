import {
  createIdentify,
  createIsSpecificUseCase,
  createReadData,
  UseCaseParser,
} from './use-case';

export interface RegisterPrice {
  amount: string;
  item: string;
  price: string;
}

const pattern =
  /^(?<amount>[a-zA-Z][a-zA-Z ]*) (?<item>[a-zA-Z]+) is (?<price>\d+) Credits$/;

export const registerPriceParser: UseCaseParser<RegisterPrice> = {
  name: 'RegisterPrice',
  identify: createIdentify(pattern),
  readData: createReadData(pattern),
};

export const isRegisterPrice = createIsSpecificUseCase(registerPriceParser);
