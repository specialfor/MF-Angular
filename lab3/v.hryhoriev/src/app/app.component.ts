import { Component, OnInit } from '@angular/core';
import { Book } from './models/Book';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeBooks: Book[] = [];
  inactiveBooks: Book[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.activeBooks = this.userService.getActiveBooks();
    this.inactiveBooks = this.userService.getInactiveBooks();
  }

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
