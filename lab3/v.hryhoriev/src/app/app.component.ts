import {Component} from '@angular/core';
import {Book} from './Models/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeBooks: Book[] = [];
  inactiveBooks: Book[] = [];

  onAdded(book: Book): void {
    const tempBooks = book.isActive ? this.activeBooks : this.inactiveBooks;

    tempBooks.push(book);
    tempBooks.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
  }

  onMovedTo(book: Book): void {
    const prevSection = book.isActive ? this.activeBooks : this.inactiveBooks;

    const index = prevSection.findIndex(b => {
      return b.title === book.title;
    });
    prevSection.splice(index, 1);

    book.isActive = !book.isActive;
    this.onAdded(book);
  }

}
