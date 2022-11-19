import { RegisterPrice } from './register-price';
import { TestPhrases } from './testing/test-phrases';

describe('RegisterPrice', () => {
  describe('.identify', () => {
    it.each(TestPhrases.getMatchTable('registerPrice'))(
      '.identify should $verb "$phrase"',
      ({ phrase, isMatch: expectedResult }) => {
        const subject = new RegisterPrice();

        const result = subject.identify(phrase);

        expect(result).toBe(expectedResult);
      }
    );
  });

  describe('.initialize', () => {
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
    ])(
      'should read correct data from "$phrase"',
      ({ phrase, expectedData }) => {
        const subject = new RegisterPrice();

        subject.initialize(phrase);

        expect(subject.getData()).toEqual(expectedData);
      }
    );
  });
});
