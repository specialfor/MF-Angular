import { Component } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class FormComponent {
  text = '';

  delete(): void {
    this.text = '';
  }
}
