import { ItemService } from './item.service';

describe('ItemService', () => {
  describe('.getPrice', () => {
    it('should get price of registered item', () => {
      const subject = new ItemService();
      subject.add('Silver', 99);

      const result = subject.getPrice('Silver');

      expect(result).toBe(99);
    });

    it('should get NaN for unregistered item', () => {
      const subject = new ItemService();

      const result = subject.getPrice('Silver');

      expect(result).toBeNaN();
    });
  });
});
