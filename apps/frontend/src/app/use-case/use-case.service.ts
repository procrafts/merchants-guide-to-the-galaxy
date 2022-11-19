import { inject, Injectable } from '@angular/core';
import { USE_CASES } from './use-cases';

@Injectable({
  providedIn: 'root',
})
export class UseCaseService {
  private useCases = inject(USE_CASES);

  matchUseCase(phrase: string) {
    const useCase = this.useCases.find((p) => p.identify(phrase));
    if (useCase) {
      return { name: useCase.name, data: useCase.readData(phrase) };
    }
    return undefined;
  }
}
