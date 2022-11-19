import { TestPhrases } from '../testing/test-phrases';
import {
  ConvertRomanToArabic,
  convertRomanToArabicParser,
} from './convert-roman-to-arabic';

describe('ConvertRomanToArabic', () => {
  describe('.identify', () => {
    it.each(TestPhrases.getMatchTable('convertRomanToArabic'))(
      'should $verb "$phrase"',
      ({ phrase, isMatch: expectedResult }) => {
        const result = convertRomanToArabicParser.identify(phrase);

        expect(result).toBe(expectedResult);
      }
    );
  });

  describe('.readData', () => {
    it.each([
      {
        phrase: TestPhrases.phrases.convertRomanToArabic[0],
        expectedData: { quantity: 'pish tegj glob glob' },
      },
    ] as { phrase: string; expectedData: ConvertRomanToArabic }[])(
      'should read correct data from "$phrase"',
      ({ phrase, expectedData }) => {
        const data = convertRomanToArabicParser.readData(phrase);

        expect(data).toEqual(expectedData);
      }
    );
  });
});
