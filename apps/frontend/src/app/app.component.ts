import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'merchants-guide-to-the-galaxy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  commandControl: FormControl = new FormControl();

  title = "Merchant's Guide to the Galaxy";

  submit() {
    // empty
  }
}
