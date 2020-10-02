import {Component, OnInit} from '@angular/core';
import {IBook} from '../ibook';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: IBook = {};

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.bookService.findById(id).subscribe(book => {
      this.book = book;
    });
  }

}
