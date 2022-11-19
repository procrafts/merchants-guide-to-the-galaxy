import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ItemService } from './item.service';
import { QuantityService } from './quantity.service';
import { CalculatePriceOfItems } from './use-case/calculate-price-of-items';
import { ConvertRomanToArabic } from './use-case/convert-roman-to-arabic';
import { ProfessIncomprehension } from './use-case/profess-incomprehension';
import { RegisterPrice } from './use-case/register-price';
import { RegisterSymbol } from './use-case/register-symbol';
import { UseCaseService } from './use-case/use-case.service';

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

    if (useCase instanceof RegisterSymbol) {
      const data = useCase.getData();
      if (data === undefined) {
        this.print('I have no idea what you are talking about');
      } else {
        this.quantityService.add(data.alien, data.roman);
      }
    }

    if (useCase instanceof RegisterPrice) {
      const data = useCase.getData();
      if (data) {
        const { amount, item, price } = data;
        const amountInDecimal = this.quantityService.count(amount);
        if (Number.isNaN(amountInDecimal)) {
          this.print('I have no idea what you are talking about');
        } else {
          this.itemService.add(item, +price / amountInDecimal);
        }
      }
    }

    if (useCase instanceof ConvertRomanToArabic) {
      const quantity = useCase.getData()?.quantity;
      let result = NaN;
      if (quantity) {
        result = this.quantityService.count(quantity);
      }
      if (Number.isNaN(result)) {
        this.print('I have no idea what you are talking about');
      } else {
        this.print(`${quantity} is ${result}`);
      }
    }

    if (useCase instanceof CalculatePriceOfItems) {
      const data = useCase.getData();
      if (data) {
        const { quantity, item } = data;
        const itemPrice = this.itemService.getPrice(item);
        const quantityInDecimal = this.quantityService.count(quantity);
        if (Number.isNaN(itemPrice) || Number.isNaN(quantityInDecimal)) {
          this.print('I have no idea what you are talking about');
        } else {
          this.print(
            `${quantity} ${item} is ${quantityInDecimal * itemPrice} Credits`
          );
        }
      }
    }

    if (useCase instanceof ProfessIncomprehension) {
      this.print('I have no idea what you are talking about');
    }
  }

  print(text: string) {
    const p = document.createElement('p');
    p.textContent = text;
    this.outputContainer.nativeElement.append(p);
  }
}
