import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  submit() {
    const useCase = this.useCaseService.matchUseCase(this.commandControl.value);
    this.commandControl.reset();

    if (useCase instanceof RegisterSymbol) {
      const data = useCase.getData();
      if (data) {
        this.quantityService.add(data);
      }
    }
    if (useCase instanceof RegisterPrice) {
      // empty
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
      // empty
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
