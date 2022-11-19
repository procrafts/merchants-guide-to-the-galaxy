import { TestPhrases } from '../testing/test-phrases';
import { RegisterPrice, registerPriceParser } from './register-price';

describe('RegisterPrice', () => {
  describe('.identify', () => {
    it.each(TestPhrases.getMatchTable('registerPrice'))(
      'should $verb "$phrase"',
      ({ phrase, isMatch: expectedResult }) => {
        const result = registerPriceParser.identify(phrase);

        expect(result).toBe(expectedResult);
      }
    );
  });

  describe('.readData', () => {
    it.each([
      {
        phrase: TestPhrases.phrases.registerPrice[0],
        expectedData: { amount: 'glob glob', item: 'Silver', price: '34' },
      },
      {
        phrase: TestPhrases.phrases.registerPrice[1],
        expectedData: { amount: 'glob prok', item: 'Gold', price: '57800' },
      },
      {
        phrase: TestPhrases.phrases.registerPrice[2],
        expectedData: { amount: 'pish pish', item: 'Iron', price: '3910' },
      },
    ] as { phrase: string; expectedData: RegisterPrice }[])(
      'should read correct data from "$phrase"',
      ({ phrase, expectedData }) => {
        const data = registerPriceParser.readData(phrase);

        expect(data).toEqual(expectedData);
      }
    );
  });
});
