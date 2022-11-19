import { TestBed } from '@angular/core/testing';

import { UseCaseService } from './use-case.service';
import { UseCase } from './use-case';
import { USE_CASES } from './use-cases';

const REGISTER_SYMBOL_PHRASE = 'abc';

class TestUseCase extends UseCase {
  protected pattern = /^a(?<target>b)c$/;
}

describe('UseCaseService', () => {
  let service: UseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: USE_CASES, useValue: [TestUseCase] }],
    });
    service = TestBed.inject(UseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should identify abc phrase', () => {
    const useCase = service.matchUseCase(REGISTER_SYMBOL_PHRASE);

    expect(useCase).toBeInstanceOf(TestUseCase);
  });

  it('should read data from a TestUseCase phrase', () => {
    const useCase = service.matchUseCase(REGISTER_SYMBOL_PHRASE);

    expect(useCase?.getData()).toEqual({ target: 'b' });
  });

  it('should read data from a TestUseCase phrase', () => {
    const useCase = service.matchUseCase(REGISTER_SYMBOL_PHRASE);

    expect(useCase?.getData()).toEqual({ target: 'b' });
  });
});
