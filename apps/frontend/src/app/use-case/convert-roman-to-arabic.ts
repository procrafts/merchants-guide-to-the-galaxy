import { UseCase } from './use-case';

export interface ConvertRomanToArabicModel {
  quantity: string;
}
export class ConvertRomanToArabic extends UseCase<ConvertRomanToArabicModel> {
  protected pattern = /^how much is (?<quantity>([a-zA-Z]+ ?)+?) \?$/;
}
