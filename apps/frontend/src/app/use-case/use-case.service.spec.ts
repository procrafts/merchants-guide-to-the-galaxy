import { TestBed } from '@angular/core/testing';
import { UseCaseParser } from './use-case';

import { UseCaseService } from './use-case.service';
import { USE_CASES } from './use-cases';

const REGISTER_SYMBOL_PHRASE = 'abc';

const testUseCases: UseCaseParser<unknown>[] = [
  {
    name: 'ABC',
    identify: (phrase: string) => phrase.includes('abc'),
    readData: () => ({ target: 'b' }),
  },
  { name: 'EVERYTHING', identify: () => true, readData: () => 'unknown' },
];

describe('UseCaseService', () => {
  let service: UseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: USE_CASES, useValue: testUseCases }],
    });
    service = TestBed.inject(UseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('.matchUseCase', () => {
    it('should identify abc phrase', () => {
      const useCase = service.matchUseCase(REGISTER_SYMBOL_PHRASE);

      expect(useCase?.name).toBe('ABC');
    });

    it('should read data from a TestUseCase phrase', () => {
      const useCase = service.matchUseCase(REGISTER_SYMBOL_PHRASE);

      expect(useCase?.data).toEqual({ target: 'b' });
    });

    it('should not read data from a not matching phrase', () => {
      const useCase = service.matchUseCase('def');

      expect(useCase?.name).toBe('EVERYTHING');
      expect(useCase?.data).toBe('unknown');
    });
  });
});
