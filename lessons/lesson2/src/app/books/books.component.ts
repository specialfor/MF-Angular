import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  /*template: `<app-book></app-book>
  <app-book></app-book>`,*/
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  isButtonDisabled = false;
  newBook = 'book';
  constructor() { }

  ngOnInit() {
  }

  onButtonClicked(event) {
    console.log(event);
  }

}
