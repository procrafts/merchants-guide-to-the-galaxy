import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ItemService {
  private items = new Map<string, number>();

  add(item: string, price: number): void {
    this.items.set(item, price);
  }

  getPrice(item: string): number {
    const price = this.items.get(item);
    if (price === undefined) {
      return NaN;
    }
    return price;
  }
}
