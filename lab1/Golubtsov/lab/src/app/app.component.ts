import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textField = '';
  buttonStatus = 'disabled';
  onInput(event, text) {
    if (text) {
      this.buttonStatus = 'enabled';
    } else {
      this.buttonStatus = 'disabled';
    }
  }
  clearText(text) {
    this.textField = text;
  }
}
