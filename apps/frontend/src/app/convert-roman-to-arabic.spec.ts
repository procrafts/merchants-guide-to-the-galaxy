import { ConvertRomanToArabic } from './convert-roman-to-arabic';
import { TestPhrases } from './testing/test-phrases';

describe('ConvertRomanToArabic', () => {
  describe('.identify', () => {
    it.each(TestPhrases.getMatchTable('convertRomanToArabic'))(
      'should $verb "$phrase"',
      ({ phrase, isMatch: expectedResult }) => {
        const subject = new ConvertRomanToArabic();

        const result = subject.identify(phrase);

        expect(result).toBe(expectedResult);
      }
    );
  });

  describe('.initialize', () => {
    it.each([
      {
        phrase: TestPhrases.phrases.convertRomanToArabic[0],
        expectedData: { quantity: 'pish tegj glob glob' },
      },
    ])(
      'should read correct data from "$phrase"',
      ({ phrase, expectedData }) => {
        const subject = new ConvertRomanToArabic();

        subject.initialize(phrase);

        expect(subject.getData()).toEqual(expectedData);
      }
    );
  });
});
