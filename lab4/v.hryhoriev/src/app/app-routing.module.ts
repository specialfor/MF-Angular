import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'books', component: AppComponent},
  {path: 'book/:id', component: BookComponent},
  {path: 'book-create', component: BookFormComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
