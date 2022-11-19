import { QuantityService } from './quantity.service';

describe('QuantityService', () => {
  describe('.count', () => {
    it('count a alien numeral', () => {
      const subject = new QuantityService();
      subject.add({ key: 'prok', value: 'V' });

      const result = subject.count('prok');

      expect(result).toBe(5);
    });

    it('count alien numerals', () => {
      const subject = new QuantityService();
      subject.add({ key: 'prok', value: 'V' });
      subject.add({ key: 'pish', value: 'X' });

      const result = subject.count('pish prok');

      expect(result).toBe(15);
    });

    it('count unknown alien numerals', () => {
      const subject = new QuantityService();
      subject.add({ key: 'prok', value: 'V' });

      const result = subject.count('pish prok');

      expect(Number.isNaN(result)).toBe(true);
    });

    it('count invalid alien numerals', () => {
      const subject = new QuantityService();
      subject.add({ key: 'pish', value: 'X' });

      const result = subject.count('pish pish pish pish pish');

      expect(Number.isNaN(result)).toBe(true);
    });
  });
});
