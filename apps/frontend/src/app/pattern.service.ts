import { inject, Injectable } from '@angular/core';
import { USE_CASES, UseCases } from './use-cases';

@Injectable({
  providedIn: 'root',
})
export class PatternService {
  private readonly useCases: UseCases = inject(USE_CASES);

  matchUseCase(phrase: string) {
    const useCase = this.useCases
      .map((c) => new c())
      .find((p) => p.identify(phrase));
    if (useCase) {
      useCase.initialize(phrase);
    }
    return useCase;
  }
}
