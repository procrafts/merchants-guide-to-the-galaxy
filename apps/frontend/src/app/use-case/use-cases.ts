import { InjectionToken } from '@angular/core';
import { calculatePriceOfItemsParser } from './calculate-price-of-items';
import { convertRomanToArabicParser } from './convert-roman-to-arabic';
import { registerPriceParser } from './register-price';
import { registerSymbolParser } from './register-symbol';
import { UseCaseParser } from './use-case';

const useCases: UseCaseParser<unknown>[] = [
  registerSymbolParser,
  registerPriceParser,
  convertRomanToArabicParser,
  calculatePriceOfItemsParser,
];

export const USE_CASES = new InjectionToken<UseCaseParser<unknown>[]>(
  'USE_CASES',
  {
    factory() {
      return useCases;
    },
    providedIn: 'root',
  }
);
