import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IBook} from '../ibook';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {
  book: IBook = {};

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  deleteBook() {
    this.bookService.deleteBook(this.book.id).toPromise().then(() => {
      this.router.navigate(['/books']);
    });
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.bookService.findById(id).subscribe(book => {
      this.book = book;
    });
  }

}
