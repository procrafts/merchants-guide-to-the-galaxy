import { RegisterSymbol } from './register-symbol';
import { TestPhrases } from '../testing/test-phrases';

describe('RegisterSymbol', () => {
  describe('.identify', () => {
    it.each(TestPhrases.getMatchTable('registerSymbol'))(
      'should $verb "$phrase"',
      ({ phrase, isMatch: expectedResult }) => {
        const subject = new RegisterSymbol();

        const result = subject.identify(phrase);

        expect(result).toBe(expectedResult);
      }
    );
  });

  describe('.initialize', () => {
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
    ])(
      'should read correct data from "$phrase"',
      ({ phrase, expectedData }) => {
        const subject = new RegisterSymbol();

        subject.initialize(phrase);

        expect(subject.getData()).toEqual(expectedData);
      }
    );
  });
});
