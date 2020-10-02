import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';
import {BookCreateComponent} from './book-create/book-create.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/create',
    component: BookCreateComponent
  },
  {
    path: 'books/:id',
    component: BookDetailComponent
  },
  {
    path: 'books/:id/edit',
    component: BookEditComponent
  },
  {
    path: 'books/:id/delete',
    component: BookDeleteComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
