import { QuantityService } from './quantity.service';

describe('QuantityService', () => {
  describe('.count', () => {
    it('should count a alien numeral', () => {
      const subject = new QuantityService();
      subject.add('prok', 'V');

      const result = subject.count('prok');

      expect(result).toBe(5);
    });

    it('should count alien numerals', () => {
      const subject = new QuantityService();
      subject.add('prok', 'V');
      subject.add('pish', 'X');

      const result = subject.count('pish prok');

      expect(result).toBe(15);
    });

    it('should count unknown alien numerals', () => {
      const subject = new QuantityService();
      subject.add('prok', 'V');

      const result = subject.count('pish prok');

      expect(Number.isNaN(result)).toBe(true);
    });

    it('should count invalid alien numerals', () => {
      const subject = new QuantityService();
      subject.add('pish', 'X');

      const result = subject.count('pish pish pish pish pish');

      expect(Number.isNaN(result)).toBe(true);
    });
  });
});
