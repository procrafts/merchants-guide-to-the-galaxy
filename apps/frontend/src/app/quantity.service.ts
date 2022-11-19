import { Injectable } from '@angular/core';
import { deromanize } from 'romans';

@Injectable({ providedIn: 'root' })
export class QuantityService {
  alienToRoman = new Map<string, string>();

  add(alien: string, roman: string): void {
    this.alienToRoman.set(alien, roman);
  }

  count(quantity: string): number {
    const alienNumerals = quantity.split(' ');
    try {
      const romanNumeral = alienNumerals.map((n) => this.alienToRoman.get(n));
      if (romanNumeral.some((n) => n === undefined)) {
        return NaN;
      }
      return deromanize(romanNumeral.join(''));
    } catch {
      return NaN;
    }
  }
}
