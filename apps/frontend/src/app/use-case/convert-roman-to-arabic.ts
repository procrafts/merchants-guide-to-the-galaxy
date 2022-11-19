import {
  createIdentify,
  createIsSpecificUseCase,
  createReadData,
  UseCaseParser,
} from './use-case';

export interface ConvertRomanToArabic {
  quantity: string;
}

const pattern = /^how much is (?<quantity>([a-zA-Z]+ ?)+?) \?$/;

export const convertRomanToArabicParser: UseCaseParser<ConvertRomanToArabic> = {
  name: 'ConvertRomanToArabic',
  identify: createIdentify(pattern),
  readData: createReadData(pattern),
};

export const isConvertRomanToArabic = createIsSpecificUseCase(
  convertRomanToArabicParser
);
