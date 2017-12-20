import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Book} from '../models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book;
  @Input() index: number;

  @Output() onMovedTo = new EventEmitter<Book>();

  movedToTapped(): void {
    this.onMovedTo.emit(this.book);
  }

  buttonTitle(): string {
    return this.book.isActive ? 'Inactivate' : 'Activate';
  }
}
