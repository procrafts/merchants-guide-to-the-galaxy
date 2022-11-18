import { TestBed } from '@angular/core/testing';

import { PatternService } from './pattern.service';
import { RegisterSymbol } from './register-symbol';

const REGISTER_SYMBOL_PHRASE = 'glob is I';

describe('PatternService', () => {
  let service: PatternService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatternService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should identify a registerSymbol phrase', () => {
    const useCase = service.matchUseCase(REGISTER_SYMBOL_PHRASE);

    expect(useCase).toBeInstanceOf(RegisterSymbol);
  });

  it('should read data from a registerSymbol phrase', () => {
    const useCase = service.matchUseCase(REGISTER_SYMBOL_PHRASE);

    expect(useCase?.getData()).toEqual({ key: 'glob', value: 'I' });
  });
});
