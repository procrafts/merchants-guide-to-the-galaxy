import { UseCase } from './use-case';

export interface RegisterSymbolModel {
  alien: string;
  roman: string;
}
export class RegisterSymbol extends UseCase<RegisterSymbolModel> {
  protected pattern = /^(?<alien>[a-zA-Z]+) is (?<roman>[IVXLCDM])$/;
}
