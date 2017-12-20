import {Component, Input} from '@angular/core';

import { UserService } from '../services/user/user.service';

import {Book} from '../models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book;
  @Input() index: number;

  constructor(private userService: UserService) {}

  movedToTapped(): void {
    this.userService.moveBook(this.book);
  }

  buttonTitle(): string {
    return this.book.isActive ? 'Inactivate' : 'Activate';
  }
}
