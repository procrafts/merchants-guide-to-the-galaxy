import { InjectionToken } from '@angular/core';
import { CalculatePriceOfItems } from './calculate-price-of-items';
import { ConvertRomanToArabic } from './convert-roman-to-arabic';
import { ProfessIncomprehension } from './profess-incomprehension';
import { RegisterPrice } from './register-price';
import { RegisterSymbol } from './register-symbol';
import { UseCase } from './use-case';

export interface UseCaseConstructor {
  new (): UseCase;
}

const useCases: UseCaseConstructor[] = [
  RegisterSymbol,
  RegisterPrice,
  ConvertRomanToArabic,
  CalculatePriceOfItems,
  ProfessIncomprehension,
];

export const USE_CASES = new InjectionToken<UseCaseConstructor[]>('USE_CASES', {
  factory() {
    return useCases;
  },
  providedIn: 'root',
});
