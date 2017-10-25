import { Component } from '@angular/core';

export class Film {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IMDB';
  film: Film = {
  id: 1,
  name: null
};
clearInput(): void {
    this.film.name = null;
  }
}
