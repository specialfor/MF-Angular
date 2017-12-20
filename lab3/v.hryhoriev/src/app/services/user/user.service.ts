import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Book } from '../../models/Book';

import { CounterService } from '../counter/counter.service';

@Injectable()
export class UserService {
  activeBooks: Book[] = [
    new Book('Vova', 'Grigoriev', true)
  ];
  inactiveBooks: Book[] = [
    new Book('Vlad', 'Keda', false),
    new Book('Masha', 'Domareva', false)
  ];

  constructor(private counterService: CounterService) { }

  getActiveBooks(): Observable<Book[]> {
    return of(this.activeBooks);
  }

  getInactiveBooks(): Observable<Book[]> {
    return of(this.inactiveBooks);
  }

  addBook(book: Book) {
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

  moveBook(book: Book) {
    const prevSection = book.isActive ? this.activeBooks : this.inactiveBooks;
    const curSection = !book.isActive ? this.activeBooks : this.inactiveBooks;

    const index = prevSection.findIndex(b => {
      return b.title === book.title;
    });
    prevSection.splice(index, 1);

    book.isActive = !book.isActive;
    curSection.push(book);
  }

}
