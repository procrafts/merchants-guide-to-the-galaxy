import {
  createIdentify,
  createIsSpecificUseCase,
  createReadData,
  UseCaseParser,
} from './use-case';

export interface RegisterSymbol {
  alien: string;
  roman: string;
}

const pattern = /^(?<alien>[a-zA-Z]+) is (?<roman>[IVXLCDM])$/;

export const registerSymbolParser: UseCaseParser<RegisterSymbol> = {
  name: 'RegisterSymbol',
  identify: createIdentify(pattern),
  readData: createReadData(pattern),
};

export const isRegisterSymbol = createIsSpecificUseCase(registerSymbolParser);
