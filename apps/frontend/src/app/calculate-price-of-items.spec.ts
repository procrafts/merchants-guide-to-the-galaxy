import { CalculatePriceOfItems } from './calculate-price-of-items';
import { TestPhrases } from './testing/test-phrases';

describe('CalculatePriceOfItems', () => {
  describe('.identify', () => {
    it.each(TestPhrases.getMatchTable('calculatePriceOfItems'))(
      'should $verb "$phrase"',
      ({ phrase, isMatch: expectedResult }) => {
        const subject = new CalculatePriceOfItems();

        const result = subject.identify(phrase);

        expect(result).toBe(expectedResult);
      }
    );
  });

  describe('.initialize', () => {
    it.each([
      {
        phrase: TestPhrases.phrases.calculatePriceOfItems[0],
        expectedData: { quantity: 'glob prok', item: 'Silver' },
      },
      {
        phrase: TestPhrases.phrases.calculatePriceOfItems[1],
        expectedData: { quantity: 'glob prok', item: 'Gold' },
      },
      {
        phrase: TestPhrases.phrases.calculatePriceOfItems[2],
        expectedData: { quantity: 'glob prok', item: 'Iron' },
      },
    ])(
      'should read correct data from "$phrase"',
      ({ phrase, expectedData }) => {
        const subject = new CalculatePriceOfItems();

        subject.initialize(phrase);

        expect(subject.getData()).toEqual(expectedData);
      }
    );
  });
});
