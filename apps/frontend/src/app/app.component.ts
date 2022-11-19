import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  submit() {
    // empty
  }

  print(text: string) {
    const p = document.createElement('p');
    p.textContent = text;
    this.outputContainer.nativeElement.append(p);
  }
}
