import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {IBook} from '../ibook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) {
    this.getBooks();
  }

  books: IBook[] = [];

  getBooks(): void {
    this.bookService.findAllBooks().toPromise().then(data => {
      this.books = data;
    });
  }

  ngOnInit(): void {
  }

}
