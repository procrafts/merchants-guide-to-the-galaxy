import { TestPhrases } from '../testing/test-phrases';
import {
  CalculatePriceOfItems,
  calculatePriceOfItemsParser,
} from './calculate-price-of-items';

describe('CalculatePriceOfItems', () => {
  describe('.identify', () => {
    it.each(TestPhrases.getMatchTable('calculatePriceOfItems'))(
      'should $verb "$phrase"',
      ({ phrase, isMatch: expectedResult }) => {
        const result = calculatePriceOfItemsParser.identify(phrase);

        expect(result).toBe(expectedResult);
      }
    );
  });

  describe('.readData', () => {
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
    ] as { phrase: string; expectedData: CalculatePriceOfItems }[])(
      'should read correct data from "$phrase"',
      ({ phrase, expectedData }) => {
        const data = calculatePriceOfItemsParser.readData(phrase);

        expect(data).toEqual(expectedData);
      }
    );
  });
});
