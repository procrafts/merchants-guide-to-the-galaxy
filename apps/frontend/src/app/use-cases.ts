import { InjectionToken } from '@angular/core';
import { RegisterSymbol } from './register-symbol';

const useCases = [RegisterSymbol] as const;

export type UseCases = typeof useCases;

export const USE_CASES = new InjectionToken<UseCases>('USE_CASES', {
  factory() {
    return useCases;
  },
  providedIn: 'root',
});
