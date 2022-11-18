import { UseCase } from './use-case';

export interface RegisterSymbolModel {
  key: string;
  value: string;
}
export class RegisterSymbol extends UseCase<RegisterSymbolModel> {
  protected pattern = /^(?<key>\w+) is (?<value>[IVXLCDM])$/;
}
