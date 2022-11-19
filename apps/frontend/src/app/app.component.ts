import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  submit() {
    const useCase = this.useCaseService.matchUseCase(this.commandControl.value);

    if (useCase instanceof RegisterSymbol) {
      // empty
    }
    if (useCase instanceof RegisterPrice) {
      // empty
    }
    if (useCase instanceof ConvertRomanToArabic) {
      // empty
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
