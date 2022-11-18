import { InjectionToken } from '@angular/core';
import { RegisterSymbol } from './register-symbol';
import { UseCase } from './use-case';

export interface UseCaseConstructor {
  new (): UseCase;
}

const useCases: UseCaseConstructor[] = [RegisterSymbol];

export const USE_CASES = new InjectionToken<UseCaseConstructor[]>('USE_CASES', {
  factory() {
    return useCases;
  },
  providedIn: 'root',
});
