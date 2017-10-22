import { Component } from "@angular/core";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styles: ['h2 {color: black} .available{color: white}']
})
export class BookComponent{

    bookName = 'Война и мир';
    isAvailable = true;

    constructor() {
      this.isAvailable = Math.random() > 0.5;
    }

    getNumberOfPages() {
      return 1024;
    }

    getColor() {
      return this.isAvailable ? 'green' : 'red';
    }
}
