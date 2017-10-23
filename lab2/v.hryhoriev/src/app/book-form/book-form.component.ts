import { Component} from '@angular/core';
import { Book } from '../Models/Book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  book: Book = {
    title: '',
    author: ''
  };

  isAddDisabled = this.book.title !== '' && this.book.author !== '';

  addClicked(): void {
  }
}
