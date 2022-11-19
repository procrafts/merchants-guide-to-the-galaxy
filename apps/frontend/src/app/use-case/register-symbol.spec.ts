import { TestPhrases } from '../testing/test-phrases';
import { RegisterSymbol, registerSymbolParser } from './register-symbol';

describe('RegisterSymbol', () => {
  describe('.identify', () => {
    it.each(TestPhrases.getMatchTable('registerSymbol'))(
      'should $verb "$phrase"',
      ({ phrase, isMatch: expectedResult }) => {
        const result = registerSymbolParser.identify(phrase);

        expect(result).toBe(expectedResult);
      }
    );
  });

  describe('.readData', () => {
    it.each([
      {
        phrase: TestPhrases.phrases.registerSymbol[0],
        expectedData: { alien: 'glob', roman: 'I' },
      },
      {
        phrase: TestPhrases.phrases.registerSymbol[1],
        expectedData: { alien: 'prok', roman: 'V' },
      },
      {
        phrase: TestPhrases.phrases.registerSymbol[2],
        expectedData: { alien: 'pish', roman: 'X' },
      },
      {
        phrase: TestPhrases.phrases.registerSymbol[3],
        expectedData: { alien: 'tegj', roman: 'L' },
      },
    ] as { phrase: string; expectedData: RegisterSymbol }[])(
      'should read correct data from "$phrase"',
      ({ phrase, expectedData }) => {
        const data = registerSymbolParser.readData(phrase);

        expect(data).toEqual(expectedData);
      }
    );
  });
});
