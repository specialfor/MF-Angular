import { Injectable } from '@angular/core';
import { Book } from '../../models/Book';

@Injectable()
export class UserService {
  activeBooks: Book[] = [
    new Book('Vova', 'Grigoriev', true)
  ];
  inactiveBooks: Book[] = [
    new Book('Vlad', 'Keda', false),
    new Book('Masha', 'Domareva', false)
  ];

  constructor() { }

  getActiveBooks(): Book[] {
    return this.activeBooks;
  }

  getInactiveBooks(): Book[] {
    return this.inactiveBooks;
  }

}
