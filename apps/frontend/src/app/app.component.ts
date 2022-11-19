import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ItemService } from './item.service';
import { QuantityService } from './quantity.service';
import { isCalculatePriceOfItems } from './use-case/calculate-price-of-items';
import { isConvertRomanToArabic } from './use-case/convert-roman-to-arabic';
import { isRegisterPrice } from './use-case/register-price';
import { isRegisterSymbol } from './use-case/register-symbol';
import { UseCaseService } from './use-case/use-case.service';

function isNumber(n: number) {
  return !Number.isNaN(n);
}

@Component({
  selector: 'merchants-guide-to-the-galaxy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('output', { static: true })
  outputContainer!: ElementRef<HTMLDivElement>;

  commandControl: FormControl = new FormControl();

  title = "Merchant's Guide to the Galaxy";

  private useCaseService = inject(UseCaseService);
  private quantityService = inject(QuantityService);
  private itemService = inject(ItemService);

  submit() {
    const useCase = this.useCaseService.matchUseCase(this.commandControl.value);
    this.commandControl.reset();

    if (isRegisterSymbol(useCase)) {
      const { alien, roman } = useCase.data;
      this.quantityService.add(alien, roman);
      return;
    }

    if (isRegisterPrice(useCase)) {
      const { amount, item, price } = useCase.data;
      const amountInDecimal = this.quantityService.count(amount);
      if (isNumber(amountInDecimal)) {
        this.itemService.add(item, +price / amountInDecimal);
        return;
      }
    }

    if (isConvertRomanToArabic(useCase)) {
      const quantity = useCase.data.quantity;
      const result = this.quantityService.count(quantity);
      if (isNumber(result)) {
        this.print(`${quantity} is ${result}`);
        return;
      }
    }

    if (isCalculatePriceOfItems(useCase)) {
      const { quantity, item } = useCase.data;
      const itemPrice = this.itemService.getPrice(item);
      const quantityInDecimal = this.quantityService.count(quantity);
      if (isNumber(itemPrice) && isNumber(quantityInDecimal)) {
        this.print(
          `${quantity} ${item} is ${quantityInDecimal * itemPrice} Credits`
        );
        return;
      }
    }

    this.professIncomprehension();
  }

  professIncomprehension() {
    this.print('I have no idea what you are talking about');
  }

  print(text: string) {
    const p = document.createElement('p');
    p.textContent = text;
    this.outputContainer.nativeElement.append(p);
  }
}
