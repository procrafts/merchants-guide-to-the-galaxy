import { RegisterSymbol } from './register-symbol';
import { TestPhrases } from './testing/test-phrases';

describe('RegisterSymbol', () => {
  describe('.identify', () => {
    it.each(TestPhrases.getMatchTable('registerSymbol'))(
      '.identify should $verb "$phrase"',
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
        expectedData: { key: 'glob', value: 'I' },
      },
      {
        phrase: TestPhrases.phrases.registerSymbol[1],
        expectedData: { key: 'prok', value: 'V' },
      },
      {
        phrase: TestPhrases.phrases.registerSymbol[2],
        expectedData: { key: 'pish', value: 'X' },
      },
      {
        phrase: TestPhrases.phrases.registerSymbol[3],
        expectedData: { key: 'tegj', value: 'L' },
      },
    ])(
      '.initialize should read correct data from "$phrase"',
      ({ phrase, expectedData }) => {
        const subject = new RegisterSymbol();

        subject.initialize(phrase);

        expect(subject.getData()).toEqual(expectedData);
      }
    );
  });
});
