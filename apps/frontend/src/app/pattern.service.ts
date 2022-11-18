import { Injectable } from '@angular/core';
import { RegisterSymbol } from './register-symbol';
import { UseCase } from './use-case';

@Injectable({
  providedIn: 'root',
})
export class PatternService {
  private getPatterns(): UseCase[] {
    return [new RegisterSymbol()];
  }

  identifyUseCase(phrase: string): UseCase | undefined {
    const useCase = this.getPatterns().find((p) => p.identify(phrase));
    if (useCase) {
      useCase.initialize(phrase);
    }
    return useCase;
  }
}
