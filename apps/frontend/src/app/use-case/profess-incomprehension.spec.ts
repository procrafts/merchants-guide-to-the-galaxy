import { ProfessIncomprehension } from './profess-incomprehension';
import { TestPhrases } from '../testing/test-phrases';

describe('ProfessIncomprehension', () => {
  describe('.identify', () => {
    it.each(
      TestPhrases.getAll().map((phrase) => ({ phrase, expectedResult: true }))
    )('should match "$phrase"', ({ phrase, expectedResult }) => {
      const subject = new ProfessIncomprehension();

      const result = subject.identify(phrase);

      expect(result).toBe(expectedResult);
    });
  });

  describe('.initialize', () => {
    const unknownPhrase = TestPhrases.phrases.professIncomprehension[0];
    it(`should read correct data from "${unknownPhrase}"`, () => {
      const expectedData = { phrase: unknownPhrase };
      const subject = new ProfessIncomprehension();

      subject.initialize(unknownPhrase);

      expect(subject.getData()).toEqual(expectedData);
    });
  });
});
